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
const companionSource = fs.readFileSync(path.join(root, 'companion.js'), 'utf8');

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
  assert.match(app.get('scene-caption').children.map(n=>n.textContent).join(''),/Changes with every quote/);
});

test('automatic matching restores a fixed picture and rotation settings survive reopening',()=>{
  let app=openApp();app.loadExtras();app.get('background-select').value='sunrise';app.get('background-select').handlers.change();
  assert.match(app.get('scene-caption').children.map(n=>n.textContent).join(''),/Fixed picture/);
  app.get('auto-picture-button').handlers.click();assert.equal(app.run('state.background'),'auto');
  assert.equal(app.get('quote-card').dataset.scene,app.run('getQuoteScene(current).key'));
  app.get('change-picture-button').handlers.click();app.run('state.freshOnOpen=false;persist()');
  const scene=app.get('quote-card').dataset.scene;app=openApp(app.storage);app.loadExtras();
  assert.equal(app.run('state.background'),'rotate');assert.equal(app.get('quote-card').dataset.scene,scene);
});

function openApp(storage = new Map()) {
  const nodes = new Map();
  const node = () => ({textContent:'', value:'', dataset:{},style:{setProperty(key,value){this[key]=value;}}, children:[], handlers:{}, attrs:{}, classList:{toggle(){},add(){},remove(){}}, setAttribute(k,v){this.attrs[k]=v;}, removeAttribute(k){delete this.attrs[k];}, append(...items){this.children.push(...items);}, replaceChildren(...items){this.children=items;}, addEventListener(event,handler){this.handlers[event]=handler;}, scrollIntoView(){}, focus(){}, showModal(){}, close(){}, reset(){}, setCustomValidity(message){this.validityMessage=message;}, reportValidity(){}, remove(){}, select(){}});
  const get = id => {if(!nodes.has(id)) nodes.set(id,node()); return nodes.get(id);};
  const filters = ['All','Confidence','Focus','Resilience','Growth','Calm'].map(category=>Object.assign(node(),{dataset:{category}}));
  const context = vm.createContext({console, Date, Math, Set, window:{addEventListener(){}},location:{protocol:'file:',href:'https://example.com/'},document:{hidden:false,handlers:{},documentElement:{dataset:{}},getElementById:get,querySelectorAll:()=>filters,createElement:node,createTextNode:text=>({textContent:text}),addEventListener(event,fn){(this.handlers[event]??=[]).push(fn);},body:node()}, localStorage:{getItem:key=>storage.get(key)||null,setItem:(key,value)=>storage.set(key,value)},matchMedia:()=>({matches:true}),setTimeout:()=>0,clearTimeout(){},setInterval:()=>1,clearInterval(){},navigator:{onLine:true}});
  vm.runInContext(librarySource,context);
  vm.runInContext(dailySource,context);
  vm.runInContext(sceneSource,context);
  vm.runInContext(appSource,context);
  return {context,storage,get,filters,run:code=>vm.runInContext(code,context),loadExtras:()=>vm.runInContext(featureSource,context),loadCompanion:()=>vm.runInContext(companionSource,context),next:()=>get('next-button').handlers.click(),filter:category=>get('filters').handlers.click({target:{closest:()=>filters.find(f=>f.dataset.category===category)}})};
}

test('widget size and style previews match widget rules and never consume website reading history',()=>{
 const app=openApp();app.loadExtras();const before=app.run('JSON.stringify(state)'),current=app.run('current.id');app.get('widget-category').value='Calm';app.get('widget-style').value='photo';app.get('widget-minutes').value='180';app.get('widget-help-button').handlers.click();const id=app.get('widget-preview-card').dataset.quoteId;
 assert.equal(app.run('reminders.find(q=>q.id=== '+JSON.stringify(id)+').category'),'Calm');assert.equal(app.get('widget-parameter').textContent,'Calm,photo,180');assert.match(app.get('widget-preview-footer').textContent,/PHOTO · OPENS/);assert.match(app.get('widget-preview-timing').textContent,/iOS controls/);
 app.get('widget-size-small').handlers.click();assert.equal(app.get('widget-preview-card').dataset.family,'small');assert.equal(app.get('widget-preview-card').dataset.quoteId,id);assert.match(app.get('widget-preview-destination').textContent,/Any tap opens Motive/);assert.match(app.get('widget-preview-footer').textContent,/TAP TO OPEN WEBSITE/);
 app.get('widget-size-large').handlers.click();assert.equal(app.get('widget-preview-card').dataset.family,'large');assert.equal(app.get('widget-size-large').attrs['aria-pressed'],'true');assert.match(app.get('widget-preview-destination').textContent,/Scriptable/);
 app.get('widget-style').value='sage';app.get('widget-style').handlers.change();assert.equal(app.get('widget-preview-card').style.backgroundColor,'#E5EACB');assert.equal(app.get('widget-preview-card').style.color,'#25382D');assert.equal(app.get('widget-preview-photo').hidden,true);app.get('widget-preview-another').handlers.click();assert.notEqual(app.get('widget-preview-card').dataset.quoteId,id);assert.equal(app.run('current.id'),current);assert.equal(app.run('JSON.stringify(state)'),before);
});
test('widget preview image failures use the actual plain fallback and stale loads cannot replace a new selection',()=>{
 const app=openApp();app.loadExtras();app.get('widget-style').value='photo';app.get('widget-help-button').handlers.click();const image=app.get('widget-preview-photo'),oldLoad=image.onload;image.onerror();assert.match(app.get('widget-preview-footer').textContent,/PHOTO UNAVAILABLE/);assert.equal(app.get('widget-preview-card').dataset.photoReady,'false');app.get('widget-preview-another').handlers.click();oldLoad();assert.equal(image.hidden,true);image.onload();assert.equal(image.hidden,false);assert.equal(app.get('widget-preview-card').dataset.photoReady,'true');app.get('widget-style').value='dark';app.get('widget-style').handlers.change();assert.equal(image.hidden,true);assert.equal(app.get('widget-preview-card').style.backgroundColor,'#1D3026');
});
test('failed quote photos keep the quote and reading history, retry the same picture, and allow a plain fallback',async()=>{
 const app=openApp();app.loadExtras();const images=[];app.context.Image=class{constructor(){images.push(this);}};app.run("state.background='forest';updateQuoteBackground()");const before=app.run('JSON.stringify(state.seen)'),id=app.run('current.id');images[0].onerror();await Promise.resolve();await Promise.resolve();assert.equal(app.get('photo-recovery').hidden,false);assert.equal(app.get('quote-card').style['--quote-scene'],'none');assert.match(app.get('photo-recovery-status').textContent,/quote is still here/);app.get('photo-retry').handlers.click();assert.equal(images.length,2);assert.equal(images[1].src,images[0].src);images[1].onload();await Promise.resolve();assert.equal(app.get('photo-recovery').hidden,true);assert.ok(app.get('quote-card').style['--quote-scene'].includes('forest.jpg'));app.get('photo-use-plain').handlers.click();assert.equal(app.run('state.background'),'none');assert.equal(app.get('quote-card').style['--quote-scene'],'none');assert.equal(app.run('current.id'),id);assert.equal(app.run('JSON.stringify(state.seen)'),before);
});
test('a late photo failure cannot clear the newer selected background',async()=>{
 const app=openApp();app.loadExtras();const images=[];app.context.Image=class{constructor(){images.push(this);}};app.run("state.background='forest';updateQuoteBackground();state.background='water';updateQuoteBackground()");images[1].onload();await Promise.resolve();images[0].onerror();await Promise.resolve();await Promise.resolve();assert.equal(app.get('photo-recovery').hidden,true);assert.ok(app.get('quote-card').style['--quote-scene'].includes('water.jpg'));
});
test('copied widget settings agree with preview and its instructions identify v6',async()=>{
 const app=openApp();app.loadExtras();app.get('widget-category').value='Growth';app.get('widget-style').value='sage';app.get('widget-minutes').value='1440';app.get('widget-help-button').handlers.click();let copied='';app.context.fetch=async()=>({ok:true,text:async()=>fs.readFileSync(path.join(root,'widget/Motive.js'),'utf8')});app.context.navigator.clipboard={writeText:async text=>{copied=text;}};await app.get('copy-widget-button').handlers.click();assert.match(copied,/const widgetDefaults = \{"category":"Growth","style":"sage","refreshMinutes":1440\};/);assert.match(app.get('widget-status').textContent,/MOTIVE v6/);assert.ok(app.get('widget-status').textContent.includes(app.get('widget-parameter').textContent));
});

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



test('check-ins select unread themed quotes and retain the current daily reflection',()=>{
 const app=openApp();app.loadExtras();app.loadCompanion();app.run('state.companion.journal[dayKey()]={note:"A good conversation",mood:""}');const old=app.run('current.id');
 app.get('arrival-overwhelmed').handlers.click();assert.equal(app.run('category'),'Calm');assert.equal(app.run('current.category'),'Calm');assert.notEqual(app.run('current.id'),old);assert.equal(app.run('state.companion.journal[dayKey()].note'),'A good conversation');assert.equal(app.get('arrival-overwhelmed').attrs['aria-pressed'],'true');
});

test('personal reason and reflections survive reopening and are included in backups',()=>{
 let app=openApp();app.loadExtras();app.loadCompanion();app.get('personal-why-input').value='Be present for my family.';app.get('why-form').handlers.submit({preventDefault(){}});app.get('reflection-input').value='I made time to listen.';app.get('reflection-form').handlers.submit({preventDefault(){}});const backup=app.run('backupData()');assert.equal(backup.data.companion.why,'Be present for my family.');app=openApp(app.storage);app.loadExtras();app.loadCompanion();assert.equal(app.get('personal-why-text').textContent,'Be present for my family.');assert.equal(app.run('state.companion.journal[dayKey()].note'),'I made time to listen.');
});

test('recent quotes are capped and intentional revisits do not consume the unread cycle',()=>{
 let app=openApp();app.loadExtras();app.loadCompanion();const first=app.run('current.id');for(let i=0;i<40;i++)app.next();assert.equal(app.run('state.companion.recent.length'),30);assert.ok(!app.run('state.companion.recent').includes(first));const before=app.run('JSON.stringify(state.seen)');app.run('showQuote(reminders.find(q=>!state.seen.includes(q.id)),{revisit:true})');assert.equal(app.run('JSON.stringify(state.seen)'),before);app.run('state.freshOnOpen=false;persist()');app=openApp(app.storage);app.loadExtras();app.loadCompanion();assert.equal(app.run('JSON.stringify(state.seen)'),before);
});

test('using an action idea leaves the saved intention unchanged until the user saves it',()=>{
 const app=openApp();app.loadExtras();app.loadCompanion();app.run('state.intention={day:dayKey(),text:"My existing intention"}');const first=app.get('action-idea').textContent;app.get('another-action').handlers.click();assert.notEqual(app.get('action-idea').textContent,first);app.get('use-action').handlers.click();assert.equal(app.get('intention-input').value,app.get('action-idea').textContent);assert.equal(app.run('state.intention.text'),'My existing intention');assert.ok(app.run('Object.values(actionIdeas).flat().every(text=>text.length<=160)'));
});

test('personal-space backup import preserves local notes and remaps new personal quote history',()=>{
 const app=openApp();app.loadExtras();app.loadCompanion();app.run('state.companion.why="My reason";state.companion.journal[dayKey()]={mood:"low",note:"Local memory"}');const today=app.run('dayKey()');
 const backup={app:'motive',version:1,data:{custom:[{id:'personal-history',text:'A distinct personal history reminder.',author:'Me',category:'Growth'}],saved:[],companion:{why:'Imported reason',recent:['personal-history'],journal:{[today]:{mood:'curious',note:'Imported memory'},'2026-01-01':{note:'Earlier memory',mood:''}}}}};
 app.run('Object.assign(state,mergeBackup('+JSON.stringify(backup)+'))');assert.equal(app.run('state.companion.why'),'My reason');assert.equal(app.run('state.companion.journal[dayKey()].note'),'Local memory');assert.equal(app.run('state.companion.journal["2026-01-01"].note'),'Earlier memory');assert.ok(app.run('state.companion.recent.includes("personal-history")'));
});

test('malformed private notes are rejected without modifying data and only 90 journal days are retained',()=>{
 const app=openApp();app.loadExtras();app.loadCompanion();const before=app.run('JSON.stringify(state)');assert.throws(()=>app.run('mergeBackup({app:"motive",version:1,data:{custom:[],saved:[],companion:{journal:{"2026-10-01":{note:42}}}}})'));assert.equal(app.run('JSON.stringify(state)'),before);app.run('const journal={};for(let i=0;i<110;i++){const day=new Date(Date.UTC(2025,0,1+i)).toISOString().slice(0,10);journal[day]={note:"A memory",mood:""};}state.companion=cleanCompanion({journal})');assert.equal(app.run('Object.keys(state.companion.journal).length'),90);assert.ok(!app.run('Object.hasOwn(state.companion.journal,"2025-01-01")'));
});

test('personalization uses non-repeating filtered rotation and hiding preserves favorites with undo',()=>{const app=openApp();app.loadExtras();vm.runInContext(fs.readFileSync(path.join(root,'preferences-core.js'),'utf8'),app.context);app.run('state.preferences=cleanMotivePreferences({themes:["Focus"],length:"short"})');vm.runInContext(fs.readFileSync(path.join(root,'preferences.js'),'utf8'),app.context);app.run('showQuote(nextQuote())');const id=app.run('current.id');app.run('state.saved.push(current.id)');app.get('hide-quote').handlers.click();assert.ok(app.run('state.preferences.hidden.includes('+JSON.stringify(id)+')'));assert.ok(app.run('state.saved.includes('+JSON.stringify(id)+')'));assert.notEqual(app.run('current.id'),id);for(let i=0;i<20;i++){app.next();assert.equal(app.run('current.category'),'Focus');assert.ok(app.run('current.text').trim().split(/\s+/).length<=12);assert.notEqual(app.run('current.id'),id);}app.get('undo-hide').handlers.click();assert.ok(!app.run('state.preferences.hidden.includes('+JSON.stringify(id)+')'));});
test('quote preference backups remap hidden personal quote IDs without dropping favorites',()=>{const app=openApp();app.loadExtras();vm.runInContext(fs.readFileSync(path.join(root,'preferences-core.js'),'utf8'),app.context);app.run('state.preferences=cleanMotivePreferences({themes:["Calm"]})');const backup=JSON.parse(app.run('JSON.stringify(backupData())'));backup.data.preferences={themes:['Focus'],hidden:['personal-import']};backup.data.custom=[{id:'personal-import',text:'A fixture reminder that belongs to this local backup.',author:'Me',category:'Focus'}];backup.data.saved=['personal-import'];app.context.incomingPreferenceBackup=backup;const merged=app.run('mergeBackup(incomingPreferenceBackup)');assert.ok(merged.saved.includes('personal-import'));assert.ok(merged.preferences.hidden.includes('personal-import'));assert.equal(merged.preferences.themes.join(','),'Focus');});

test('picture pins in quote backups remap duplicate personal IDs and retain valid scene keys',()=>{const app=openApp();app.loadExtras();vm.runInContext(fs.readFileSync(path.join(root,'image-studio-core.js'),'utf8'),app.context);app.run("state.pictures=cleanMotivePictures({},quoteScenes);state.custom.push({id:'personal-local',text:'A custom reminder for the picture pin fixture.',author:'Me',category:'Calm'})");const backup=JSON.parse(app.run('JSON.stringify(backupData())'));backup.data.custom=[{id:'personal-imported',text:'A custom reminder for the picture pin fixture.',author:'Me',category:'Calm'}];backup.data.pictures={pins:{'personal-imported':'forest'}};app.context.pictureBackup=backup;const merged=app.run('mergeBackup(pictureBackup)');assert.equal(merged.pictures.pins['personal-local'],'forest');assert.equal(merged.pictures.pins['personal-imported'],undefined);});
