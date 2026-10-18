const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const librarySource = fs.readFileSync(path.join(root, 'quotes.js'), 'utf8');
const appSource = fs.readFileSync(path.join(root, 'app.js'), 'utf8');

function openApp(storage = new Map()) {
  const nodes = new Map();
  const node = () => ({textContent:'', value:'', dataset:{}, children:[], handlers:{}, attrs:{}, classList:{toggle(){},add(){},remove(){}}, setAttribute(k,v){this.attrs[k]=v;}, append(...items){this.children.push(...items);}, replaceChildren(...items){this.children=items;}, addEventListener(event,handler){this.handlers[event]=handler;}, scrollIntoView(){}, focus(){}, showModal(){}, close(){}, reset(){}, setCustomValidity(message){this.validityMessage=message;}, reportValidity(){}, remove(){}, select(){}});
  const get = id => {if(!nodes.has(id)) nodes.set(id,node()); return nodes.get(id);};
  const filters = ['All','Confidence','Focus','Resilience','Growth','Calm'].map(category=>Object.assign(node(),{dataset:{category}}));
  const context = vm.createContext({console, Date, Math, Set, document:{getElementById:get,querySelectorAll:()=>filters,createElement:node,createTextNode:text=>({textContent:text}),addEventListener(){},body:node()}, localStorage:{getItem:key=>storage.get(key)||null,setItem:(key,value)=>storage.set(key,value)},matchMedia:()=>({matches:true}),setTimeout:()=>0,clearTimeout(){},navigator:{}});
  vm.runInContext(librarySource,context);
  vm.runInContext(appSource,context);
  return {context,storage,get,filters,run:code=>vm.runInContext(code,context),next:()=>get('next-button').handlers.click(),filter:category=>get('filters').handlers.click({target:{closest:()=>filters.find(f=>f.dataset.category===category)}})};
}

test('at least 400 distinct reminders and unique IDs, with substantial coverage in all five themes', () => {
  const app = openApp();
  assert.equal(app.run('reminders.length'),405);
  assert.equal(app.run('new Set(reminders.map(q => q.id)).size'),405);
  assert.equal(app.run('new Set(reminders.map(q => quoteKey(q.text))).size'),405);
  for(const theme of ['Confidence','Focus','Resilience','Growth','Calm']) assert.equal(app.run(`reminders.filter(q=>q.category===${JSON.stringify(theme)}).length`),81);
});

test('three complete 405-quote cycles have no repeats within each cycle or at their boundaries', () => {
  const app = openApp();
  let previous;
  for(let cycle=0;cycle<3;cycle++) {
    const ids=new Set();
    for(let index=0;index<405;index++) {
      if(cycle || index) app.next();
      const id=app.run('current.id');
      assert.notEqual(id,previous);
      assert.ok(!ids.has(id),`Repeated ${id} in cycle ${cycle}`);
      ids.add(id); previous=id;
    }
    assert.equal(ids.size,405);
  }
});

test('reload restores the current quote and keeps already-read quotes out of the remaining cycle', () => {
  let app=openApp(); const seen=new Set([app.run('current.id')]);
  for(let i=0;i<99;i++){app.next();seen.add(app.run('current.id'));}
  const last=app.run('current.id');
  app=openApp(app.storage);
  assert.equal(app.run('current.id'),last);
  for(let i=0;i<305;i++){app.next();const id=app.run('current.id');assert.ok(!seen.has(id));seen.add(id);}
  assert.equal(seen.size,405);
});

test('switching themes shares history and exhausts each theme before repeating', () => {
  const app=openApp(); const seen=new Set([app.run('current.id')]);
  for(const theme of ['Confidence','Focus','Resilience','Growth','Calm']) {
    app.filter(theme);
    let remaining=app.run(`allQuotes().filter(q=>q.category===${JSON.stringify(theme)} && !state.seen.includes(q.id)).length`);
    for(let i=0;i<=remaining;i++) {
      if(i) app.next();
      const id=app.run('current.id'); assert.equal(app.run('current.category'),theme); assert.ok(!seen.has(id));seen.add(id);
    }
  }
  assert.equal(seen.size,405);
  const themeIds=new Set();
  for(let i=0;i<81;i++){app.next();const id=app.run('current.id');assert.ok(!themeIds.has(id));themeIds.add(id);}
});

test('duplicate personal reminders are rejected even with different punctuation or capitalization', () => {
  const app=openApp();
  app.get('new-quote').value=app.run('reminders[0].text.toUpperCase().replace(/[^\\p{L}\\p{N} ]/gu, "")');
  app.get('quote-form').handlers.submit({preventDefault(){}});
  assert.equal(app.run('state.custom.length'),0);
  assert.match(app.get('new-quote').validityMessage,/already/);
});

test('a new day picks an unread quote instead of repeating a previous daily quote', () => {
  let app=openApp();const old=app.run('current.id');
  const saved=JSON.parse(app.storage.get('motive-v1'));
  saved.daily.day='2000-01-01';saved.currentQuote.day='2000-01-01';
  app.storage.set('motive-v1',JSON.stringify(saved));app=openApp(app.storage);
  assert.notEqual(app.run('current.id'),old);
  assert.equal(app.run('state.seen.length'),2);
});

test('favorites from the original library survive the expansion', () => {
  const storage=new Map([['motive-v1',JSON.stringify({saved:['motive-8'],name:'Joseph'})]]);
  const app=openApp(storage);
  assert.equal(app.get('saved-count').textContent,1);
  assert.match(app.get('greeting').textContent,/Joseph/);
});
