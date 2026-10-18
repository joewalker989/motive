const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const librarySource = fs.readFileSync(path.join(root, 'quotes.js'), 'utf8');
const dailySource = fs.readFileSync(path.join(root, 'daily-quotes.js'), 'utf8');
const sceneSource = fs.readFileSync(path.join(root, 'scenes.js'), 'utf8');
const appSource = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const featureSource = fs.readFileSync(path.join(root, 'enhancements.js'), 'utf8');

test('changing the picture rotates every new quote without repeating consecutive photos',()=>{
  const app=openApp();app.loadExtras();
  const first=app.get('quote-card').dataset.scene;
  app.get('change-picture-button').handlers.click();
  assert.equal(app.run('state.background'),'rotate');
  assert.notEqual(app.get('quote-card').dataset.scene,first);
  app.filter('Calm');
  for(let i=0;i<30;i++){
    const previous=app.get('quote-card').dataset.scene;app.next();
    assert.notEqual(app.get('quote-card').dataset.scene,previous);
    const scene=app.get('quote-card').dataset.scene;app.run('updateQuoteBackground()');
    assert.equal(app.get('quote-card').dataset.scene,scene,'Settings must not change the displayed image');
    assert.equal(app.run('displayedQuoteScene.key'),scene,'Downloads must use the displayed image');
  }
  assert.match(app.get('scene-caption').textContent,/Changes with every quote/);
});

test('automatic matching restores a fixed picture and rotation settings survive reopening',()=>{
  let app=openApp();app.loadExtras();app.get('background-select').value='sunrise';app.get('background-select').handlers.change();
  assert.match(app.get('scene-caption').textContent,/Fixed picture/);
  app.get('auto-picture-button').handlers.click();assert.equal(app.run('state.background'),'auto');
  assert.equal(app.get('quote-card').dataset.scene,app.run('getQuoteScene(current).key'));
  app.get('change-picture-button').handlers.click();app.run('state.freshOnOpen=false;persist()');
  const scene=app.get('quote-card').dataset.scene;app=openApp(app.storage);app.loadExtras();
  assert.equal(app.run('state.background'),'rotate');assert.equal(app.get('quote-card').dataset.scene,scene);
});

function openApp(storage = new Map()) {
  const nodes = new Map();
  const node = () => ({textContent:'', value:'', dataset:{},style:{setProperty(key,value){this[key]=value;}}, children:[], handlers:{}, attrs:{}, classList:{toggle(){},add(){},remove(){}}, setAttribute(k,v){this.attrs[k]=v;}, append(...items){this.children.push(...items);}, replaceChildren(...items){this.children=items;}, addEventListener(event,handler){this.handlers[event]=handler;}, scrollIntoView(){}, focus(){}, showModal(){}, close(){}, reset(){}, setCustomValidity(message){this.validityMessage=message;}, reportValidity(){}, remove(){}, select(){}});
  const get = id => {if(!nodes.has(id)) nodes.set(id,node()); return nodes.get(id);};
  const filters = ['All','Confidence','Focus','Resilience','Growth','Calm'].map(category=>Object.assign(node(),{dataset:{category}}));
  const context = vm.createContext({console, Date, Math, Set, window:{addEventListener(){}},location:{protocol:'file:',href:'https://example.com/'},document:{hidden:false,handlers:{},documentElement:{dataset:{}},getElementById:get,querySelectorAll:()=>filters,createElement:node,createTextNode:text=>({textContent:text}),addEventListener(event,fn){(this.handlers[event]??=[]).push(fn);},body:node()}, localStorage:{getItem:key=>storage.get(key)||null,setItem:(key,value)=>storage.set(key,value)},matchMedia:()=>({matches:true}),setTimeout:()=>0,clearTimeout(){},setInterval:()=>1,clearInterval(){},navigator:{onLine:true}});
  vm.runInContext(librarySource,context);
  vm.runInContext(dailySource,context);
  vm.runInContext(sceneSource,context);
  vm.runInContext(appSource,context);
  return {context,storage,get,filters,run:code=>vm.runInContext(code,context),loadExtras:()=>vm.runInContext(featureSource,context),next:()=>get('next-button').handlers.click(),filter:category=>get('filters').handlers.click({target:{closest:()=>filters.find(f=>f.dataset.category===category)}})};
}

test('at least 400 distinct reminders and unique IDs, with substantial coverage in all five themes', () => {
  const app = openApp();
  const total=app.run('reminders.length');assert.ok(total>=505);
  assert.equal(app.run('new Set(reminders.map(q => q.id)).size'),total);
  assert.equal(app.run('new Set(reminders.map(q => quoteKey(q.text))).size'),total);
  for(const theme of ['Confidence','Focus','Resilience','Growth','Calm']) assert.ok(app.run(`reminders.filter(q=>q.category===${JSON.stringify(theme)}).length`)>=101);
});

test('three complete library cycles have no repeats within each cycle or at their boundaries', () => {
  const app = openApp();
  const total=app.run('reminders.length');
  let previous;
  for(let cycle=0;cycle<3;cycle++) {
    const ids=new Set();
    for(let index=0;index<total;index++) {
      if(cycle || index) app.next();
      const id=app.run('current.id');
      assert.notEqual(id,previous);
      assert.ok(!ids.has(id),`Repeated ${id} in cycle ${cycle}`);
      ids.add(id); previous=id;
    }
    assert.equal(ids.size,total);
  }
});

test('reload restores the current quote and keeps already-read quotes out of the remaining cycle', () => {
  let app=openApp(); const seen=new Set([app.run('current.id')]);
  app.run('state.freshOnOpen=false;persist()');const total=app.run('reminders.length');
  for(let i=0;i<99;i++){app.next();seen.add(app.run('current.id'));}
  const last=app.run('current.id');
  app=openApp(app.storage);
  assert.equal(app.run('current.id'),last);
  for(let i=0;i<total-100;i++){app.next();const id=app.run('current.id');assert.ok(!seen.has(id));seen.add(id);}
  assert.equal(seen.size,total);
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
  assert.equal(seen.size,app.run('reminders.length'));
  const themeIds=new Set();
  for(let i=0;i<app.run('reminders.filter(q=>q.category==="Calm").length');i++){app.next();const id=app.run('current.id');assert.ok(!themeIds.has(id));themeIds.add(id);}
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

test('library search searches the whole growing library and paginates results',()=>{
  const app=openApp();app.loadExtras();app.get('browse-button').handlers.click();assert.equal(app.get('quote-grid').children.length,12);assert.ok(app.get('results-count').textContent.includes(String(app.run('reminders.length'))));app.get('load-more').handlers.click();assert.equal(app.get('quote-grid').children.length,24);
  app.get('quote-search').value='ordinary Tuesday';app.get('quote-search').handlers.input();assert.equal(app.get('quote-grid').children.length,1);assert.match(app.get('quote-grid').children[0].children[1].textContent,/ordinary Tuesday/);
});

test('fresh-on-open chooses unread quotes on reload and returning to the app, and can be disabled',()=>{
  let app=openApp();app.loadExtras();const first=app.run('current.id');app=openApp(app.storage);app.loadExtras();const second=app.run('current.id');assert.notEqual(second,first);app.run('document.handlers.visibilitychange.forEach(fn=>fn())');const third=app.run('current.id');assert.notEqual(third,second);assert.notEqual(third,first);app.run('state.freshOnOpen=false;persist();document.handlers.visibilitychange.forEach(fn=>fn())');assert.equal(app.run('current.id'),third);
});

test('custom collections preserve favorites and survive reopening',()=>{
  let app=openApp();app.loadExtras();app.get('organize-button').handlers.click();app.get('collection-name').value='Morning courage';app.get('collection-form').handlers.submit({preventDefault(){}});const quote=app.run('current.id');assert.equal(app.run('state.collections.length'),1);assert.ok(app.run(`state.collections[0].quoteIds.includes(${JSON.stringify(quote)})`));assert.ok(app.run(`state.saved.includes(${JSON.stringify(quote)})`));app=openApp(app.storage);app.loadExtras();assert.equal(app.run('state.collections[0].name'),'Morning courage');
});

test('backup merges duplicate wording and remaps favorite and collection references',()=>{
  const app=openApp();app.loadExtras();
  const first={app:'motive',version:1,data:{custom:[{id:'personal-first',text:'My unique reminder.',author:'Me',category:'Focus'}],saved:['personal-first'],collections:[{name:'Work',quoteIds:['personal-first']}]}};
  app.run(`Object.assign(state,mergeBackup(${JSON.stringify(first)}))`);
  const second={app:'motive',version:1,data:{custom:[{id:'personal-second',text:'MY UNIQUE REMINDER!',author:'Me',category:'Focus'}],saved:['personal-second'],collections:[{name:'Work',quoteIds:['personal-second']}]}};
  app.run(`Object.assign(state,mergeBackup(${JSON.stringify(second)}))`);
  assert.equal(app.run('state.custom.length'),1);assert.equal(app.run('state.collections.length'),1);assert.equal(app.run('state.collections[0].quoteIds[0]'),'personal-first');assert.ok(app.run('state.saved.includes("personal-first")'));
});

test('invalid backup fails without modifying existing personal data',()=>{
  const app=openApp();app.loadExtras();const before=app.run('JSON.stringify(state)');assert.throws(()=>app.run('mergeBackup({app:"motive",version:1,data:{custom:[{text:"bad"}],saved:[]}})'));assert.equal(app.run('JSON.stringify(state)'),before);
});

test('same-ID different-text backup does not overwrite an existing personal quote',()=>{
  const app=openApp();app.loadExtras();app.run('state.custom.push({id:"personal-a",text:"Existing words",author:"Me",category:"Calm"})');
  const backup={app:'motive',version:1,data:{custom:[{id:'personal-a',text:'Different imported words',author:'Me',category:'Calm'}],saved:['personal-a']}};
  app.run(`Object.assign(state,mergeBackup(${JSON.stringify(backup)}))`);assert.equal(app.run('state.custom.length'),2);assert.notEqual(app.run('state.custom[1].id'),'personal-a');assert.equal(app.run('state.custom[0].text'),'Existing words');assert.ok(app.run('state.saved.includes(state.custom[1].id)'));
});

test('streak calculation handles month boundaries and repeated same-day visits',()=>{
  const app=openApp();app.loadExtras();assert.equal(app.run('streakLength(["2026-03-31","2026-04-01","2026-04-02"],"2026-04-02")'),3);assert.equal(app.run('streakLength(["2026-03-30","2026-04-01"],"2026-04-01")'),1);const count=app.run('state.activity.visits.length');app.run('recordVisit()');assert.equal(app.run('state.activity.visits.length'),count);
});

test('intention completion is recorded once and can be undone',()=>{
  const app=openApp();app.loadExtras();app.get('intention-input').value='Take a short walk';app.get('intention-form').handlers.submit({preventDefault(){}});app.get('intention-done').checked=true;app.get('intention-done').handlers.change();assert.equal(app.run('state.activity.completed.length'),1);app.get('intention-done').checked=true;app.get('intention-done').handlers.change();assert.equal(app.run('state.activity.completed.length'),1);app.get('intention-done').checked=false;app.get('intention-done').handlers.change();assert.equal(app.run('state.activity.completed.length'),0);
});

test('color theme survives reload and restart preserves favorites and collections',()=>{
  let app=openApp();app.loadExtras();app.get('theme-button').handlers.click();const theme=app.run('state.theme');app.run('state.saved=["motive-8"];state.collections=[{id:"collection-a",name:"Work",quoteIds:["motive-8"]}]');app.get('restart-button').handlers.click();assert.equal(app.run('state.seen.length'),1);assert.equal(app.run('state.saved[0]'),'motive-8');assert.equal(app.run('state.collections.length'),1);app=openApp(app.storage);app.loadExtras();assert.equal(app.run('state.theme'),theme);
});

test('scene matching considers meaning as well as category and covers every quote',()=>{
  const app=openApp();
  assert.equal(app.run('getQuoteScene({text:"Take a breath and rest.",category:"Growth"}).key'),'water');
  assert.equal(app.run('getQuoteScene({text:"Write your next task in the notebook.",category:"Confidence"}).key'),'workspace');
  assert.equal(app.run('getQuoteScene({text:"Climb the mountain one step at a time.",category:"Resilience"}).key'),'summit');
  assert.equal(app.run('getQuoteScene({text:"Learn with curiosity and grow.",category:"Growth"}).key'),'forest');
  assert.ok(app.run('reminders.every(q=>Object.keys(quoteScenes).includes(getQuoteScene(q).key))'));
  assert.equal(app.run('getQuoteScene(reminders[0],"none")'),null);
  assert.equal(app.run('getQuoteScene(reminders[0],"sunrise").key'),'sunrise');
});

test('photo toggle, scene choices, and readable darkness are retained across visits',()=>{
  let app=openApp();app.loadExtras();app.get('background-button').handlers.click();assert.equal(app.run('state.background'),'none');assert.equal(app.get('quote-card').dataset.scene,'none');app.get('background-select').value='water';app.get('background-select').handlers.change();assert.equal(app.get('quote-card').dataset.scene,'water');app.get('background-darkness').value='5';app.get('background-darkness').handlers.input();assert.equal(app.run('state.backgroundDarkness'),.55);app=openApp(app.storage);app.loadExtras();assert.equal(app.run('state.background'),'water');assert.equal(app.get('quote-card').dataset.scene,'water');assert.equal(app.run('state.backgroundDarkness'),.55);
});

test('featured cards include three matching reminders for every selected theme',()=>{const app=openApp();app.loadExtras();for(const theme of ['Confidence','Focus','Resilience','Growth','Calm']){app.filter(theme);assert.equal(app.get('quote-grid').children.length,3);for(const card of app.get('quote-grid').children)assert.equal(card.children[0].textContent,theme.toUpperCase());}});
