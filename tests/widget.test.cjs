const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root,'widget/Motive.js'),'utf8');
const quotes = JSON.parse(fs.readFileSync(path.join(root,'quotes.json'),'utf8'));
const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
async function run({cache, offline=false, day=0}={}) {
  const output={texts:[], fetched:0, completed:false};
  class ListWidget {setPadding(){} addSpacer(){} addText(text){output.texts.push(text);return {};} async presentMedium(){output.preview=true;}}
  const clock = new Date(2026,0,1+day,12);
  class Clock extends Date {constructor(...args){super(...(args.length?args:[clock.getTime()]));} static now(){return clock.getTime();}}
  const files={joinPath:(a,b)=>a+'/'+b,documentsDirectory:()=>'/documents',readString:()=>{if(!cache)throw Error('Missing');return cache;},writeString:(p,data)=>{output.cache=data;}};
  class Request {async loadJSON(){output.fetched++;if(offline)throw Error('Offline');return quotes;}}
  const Font={boldSystemFont(){},semiboldSystemFont(){},mediumSystemFont(){},systemFont(){}};
  const Script={setWidget:widget=>{output.widget=widget;},complete:()=>{output.completed=true;}};
  await new AsyncFunction('FileManager','ListWidget','Color','Font','Request','config','Script','Date',source)({local:()=>files},ListWidget,class Color{},Font,Request,{widgetFamily:'medium',runsInApp:true},Script,Clock);
  return output;
}
test('first run downloads 405 unique quotes and prepares the widget',async()=>{const result=await run();assert.equal(result.fetched,1);assert.equal(JSON.parse(result.cache).length,405);assert.equal(result.widget.url,'https://joewalker989.github.io/motive/');assert.ok(result.completed&&result.preview);assert.equal(result.texts.length,3);});
test('cached library works offline and same-day runs show the same quote',async()=>{const cache=JSON.stringify(quotes);const a=await run({cache,offline:true});const b=await run({cache,offline:true});assert.equal(a.fetched,0);assert.equal(a.texts[1],b.texts[1]);});
test('405 consecutive calendar days display 405 different quotes',async()=>{const seen=new Set();for(let day=0;day<405;day++){const result=await run({day,cache:JSON.stringify(quotes),offline:true});assert.ok(!seen.has(result.texts[1]));seen.add(result.texts[1]);}assert.equal(seen.size,405);});
test('first launch offline displays setup instructions, not a broken widget',async()=>{const result=await run({offline:true});assert.match(result.texts[1],/Connect to the internet/);assert.ok(result.completed);});
test('invalid cache is replaced by a valid download',async()=>{const result=await run({cache:'[]'});assert.equal(result.fetched,1);assert.equal(JSON.parse(result.cache).length,405);});
