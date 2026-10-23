const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'..');
const source=fs.readFileSync(path.join(root,'widget/Motive.js'),'utf8');
const quotes=JSON.parse(fs.readFileSync(path.join(root,'quotes.json'),'utf8'));
const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;
async function run({store=new Map(),offline=false,day=0,hour=12,runsInApp=false,query={},parameter='',remote=quotes,imageFailure=false,family='medium'}={}){
 const output={nodes:[],texts:[],fetched:0,imagesFetched:0,completed:false,store};
 class ListWidget{setPadding(){}addSpacer(){}addText(text){output.texts.push(text);const node={};output.nodes.push(node);return node;}async presentMedium(){output.preview=true;}}
 const clock=new Date(2026,0,1+day,hour);
 class Clock extends Date{constructor(...args){super(...(args.length?args:[clock.getTime()]));}static now(){return clock.getTime();}}
 const files={joinPath:(a,b)=>a+'/'+b,documentsDirectory:()=>'/documents',readString:p=>{if(!store.has(p))throw Error('Missing');return store.get(p);},writeString:(p,data)=>{store.set(p,data);output.cache=JSON.parse(data);},readImage:p=>{if(!store.has(p))throw Error('Missing image');return store.get(p);},writeImage:(p,image)=>store.set(p,image)};
 class Request{constructor(url){this.url=url;}async loadJSON(){output.fetched++;if(offline)throw Error('Offline');return remote;}async loadImage(){output.imagesFetched++;if(offline||imageFailure)throw Error('Offline image');return {size:{width:1536,height:1024},source:this.url};}}
 class DrawContext{drawImageInRect(photo){output.photo=photo;}setFillColor(){}fillRect(){}getImage(){return {rendered:true};}}
 const Font={boldSystemFont(){},semiboldSystemFont(){},mediumSystemFont(){},systemFont(){}};
 const Script={setWidget:widget=>{output.widget=widget;},complete:()=>{output.completed=true;}};
 await new AsyncFunction('FileManager','ListWidget','Color','Font','Request','config','Script','Date','args','URLScheme','DrawContext','Size','Rect',source)({local:()=>files},ListWidget,class Color{},Font,Request,{widgetFamily:family,runsInApp},Script,Clock,{queryParameters:query,widgetParameter:parameter},{forRunningScript:()=> 'scriptable:///run?scriptName=Motive'},DrawContext,class Size{},class Rect{});
 return output;
}
test('first run downloads the growing quote library and prepares a tap-to-refresh widget',async()=>{const result=await run({runsInApp:true});assert.equal(result.fetched,1);assert.equal(result.cache.quotes.length,quotes.length);assert.ok(quotes.length>=505);assert.match(result.widget.url,/refresh=1/);assert.ok(result.completed&&result.preview);assert.equal(result.texts.length,4);});
test('background runs in the same interval keep one quote and use cached data offline',async()=>{const first=await run();const second=await run({store:first.store,offline:true});assert.equal(second.fetched,0);assert.equal(first.texts[1],second.texts[1]);});
test('a complete library cycle across calendar days has no repeated quotes',async()=>{const first=await run();const seen=new Set([first.texts[1]]);for(let day=1;day<quotes.length;day++){const result=await run({day,store:first.store,offline:true});assert.ok(!seen.has(result.texts[1]));seen.add(result.texts[1]);}assert.equal(seen.size,quotes.length);});
test('first launch offline displays setup instructions, not a broken widget',async()=>{const result=await run({offline:true});assert.match(result.texts[1],/Connect to the internet/);assert.ok(result.completed);});
test('legacy cached quote arrays migrate and work offline',async()=>{const store=new Map([['/documents/motive-quotes-v1.json',JSON.stringify(quotes)]]);const result=await run({store,offline:true});assert.equal(result.cache.quotes.length,quotes.length);assert.equal(result.cache.seen.length,1);});
test('tapping or manually running selects a different unread quote immediately',async()=>{const first=await run();const next=await run({store:first.store,query:{refresh:'1'}});assert.notEqual(first.texts[1],next.texts[1]);assert.equal(next.cache.seen.length,2);const third=await run({store:first.store,runsInApp:true});assert.notEqual(third.texts[1],next.texts[1]);assert.equal(third.cache.seen.length,3);});
test('new published additions download on the next day without losing history',async()=>{const first=await run();const remote=[...quotes,{id:'test-new-id',text:'An entirely new reminder for a future day.',category:'Growth',author:'A Motive reminder'}];const result=await run({store:first.store,day:1,remote});assert.equal(result.fetched,1);assert.equal(result.cache.quotes.length,quotes.length+1);assert.equal(result.cache.seen.length,2);});
test('theme, category, and refresh interval can be selected by widget parameters',async()=>{const result=await run({parameter:'Calm,dark,15'});assert.match(result.texts[0],/CALM/);assert.match(result.widget.url,/style=dark&minutes=15/);assert.equal(result.cache.selection.category,'Calm');assert.ok(quotes.filter(q=>q.category==='Calm').some(q=>result.texts[1].includes(q.text)));});

test('photo widgets use a matching locally cached background and remain readable offline',async()=>{const first=await run({parameter:'Calm,photo,60'});assert.ok(first.widget.backgroundImage);const selected=quotes.find(q=>'“'+q.text+'”'===first.texts[1]);const scene=require('node:vm').runInNewContext(fs.readFileSync(path.join(root,'scenes.js'),'utf8')+';getQuoteScene('+JSON.stringify(selected)+').image');assert.equal(first.photo.source,new URL(scene,'https://joewalker989.github.io/motive/').href);const second=await run({parameter:'Calm,photo,60',store:first.store,offline:true});assert.ok(second.widget.backgroundImage);assert.equal(second.imagesFetched,0);});

test('plain widget style does not fetch background photos',async()=>{const result=await run({parameter:'All,sage,60'});assert.equal(result.imagesFetched,0);assert.equal(result.widget.backgroundImage,undefined);});
test('website link targets Motive in medium and large widgets, including offline setup errors',async()=>{for(const family of ['medium','large']){const result=await run({family});assert.equal(result.texts.at(-1),'Go to website ↗');assert.equal(result.nodes.at(-1).url,'https://joewalker989.github.io/motive/');assert.ok(result.widget.url.startsWith('scriptable://'));}const offline=await run({offline:true});assert.equal(offline.nodes.at(-1).url,'https://joewalker989.github.io/motive/');});
test('small widgets open the website through their single tap target',async()=>{const result=await run({family:'small'});assert.equal(result.widget.url,'https://joewalker989.github.io/motive/');assert.equal(result.nodes.at(-1).url,result.widget.url);assert.match(result.texts[2],/TAP TO OPEN WEBSITE/);});
test('a new picture published through the feed works without changing the widget scene list',async()=>{const remote=quotes.map(q=>({...q,photo:{key:'daily-future-art',image:'./assets/backgrounds/daily-future-art.jpg'}}));const result=await run({remote});assert.ok(result.photo.source.endsWith('/daily-future-art.jpg'));const offline=await run({store:result.store,offline:true});assert.equal(offline.imagesFetched,0);assert.ok(offline.widget.backgroundImage);});
test('untrusted photo metadata cannot fetch outside the published background folder',async()=>{const remote=quotes.map(q=>({...q,photo:{key:'bad',image:'https://other.example/private.jpg'}}));const result=await run({remote});assert.ok(result.photo.source.startsWith('https://joewalker989.github.io/motive/assets/backgrounds/'));});


test('widget identifies the installed version and explains its tap destination',async()=>{
 const result=await run({runsInApp:true});assert.match(result.texts[0],/MOTIVE v6/);assert.match(result.texts[2],/OPENS IN SCRIPTABLE/);assert.doesNotMatch(result.texts[2],/TAP FOR ANOTHER/);assert.ok(result.widget.url.startsWith('scriptable://'));
});

test('photo failures keep the quote readable and expose recovery instructions',async()=>{
 const result=await run({imageFailure:true});assert.equal(result.widget.backgroundImage,undefined);assert.ok(result.texts[1].includes('“'));assert.match(result.texts[2],/PHOTO UNAVAILABLE/);assert.ok(result.completed);
});

test('legacy plain widget parameters override photo defaults and photo parameters restore images',async()=>{
 const plain=await run({parameter:'All,sage,60'});assert.match(plain.texts[2],/PLAIN STYLE/);assert.equal(plain.imagesFetched,0);
 const photo=await run({parameter:'All,photo,60',store:plain.store});assert.ok(photo.widget.backgroundImage);assert.match(photo.texts[2],/PHOTO ·/);
});
