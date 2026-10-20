const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
function worker(online=true){
  const handlers={};const cache=new Map();const removed=[];
  const bucket={addAll:async paths=>{for(const item of paths)cache.set(item,new Response(item));},put:async(req,response)=>cache.set(typeof req==='string'?req:req.url,response),match:async req=>cache.get(typeof req==='string'?req:req.url)};
  const context=vm.createContext({URL,Response,AbortController,setTimeout,clearTimeout,self:{location:{origin:'https://example.com'},addEventListener:(event,fn)=>handlers[event]=fn,skipWaiting:async()=>{},clients:{claim:async()=>{}}},caches:{open:async()=>bucket,keys:async()=>['motive-offline-old','another-app-cache'],delete:async key=>removed.push(key)},fetch:async req=>{if(!online)throw Error('offline');return new Response('fresh '+req.url);}});
  vm.runInContext(fs.readFileSync(path.join(root,'sw.js'),'utf8'),context);
  async function lifecycle(name){let pending;handlers[name]({waitUntil:promise=>pending=promise});await pending;}
  async function request(req){let pending;handlers.fetch({request:req,respondWith:promise=>pending=promise});return pending;}
  return {context,cache,removed,lifecycle,request};
}
test('offline installation includes only existing public assets and clears only old Motive caches',async()=>{const w=worker();const assets=vm.runInContext('ASSETS',w.context);for(const asset of assets)assert.ok(fs.existsSync(path.join(root,asset==='./'?'index.html':asset)),asset);await w.lifecycle('install');await w.lifecycle('activate');assert.deepEqual(w.removed,['motive-offline-old']);assert.ok(w.cache.has('./enhancements.js'));assert.ok(w.cache.has('./companion.js'));});
test('offline navigation and quote feed are served from the installed cache',async()=>{const w=worker(false);await w.lifecycle('install');const page=await w.request({method:'GET',url:'https://example.com/motive/',mode:'navigate'});assert.equal(await page.text(),'./index.html');w.cache.set('https://example.com/motive/quotes.json',new Response('[1,2,3]'));const feed=await w.request({method:'GET',url:'https://example.com/motive/quotes.json'});assert.equal(await feed.text(),'[1,2,3]');});
test('online requests update the cache and external requests are left alone',async()=>{const w=worker(true);const url='https://example.com/motive/app.js';const response=await w.request({method:'GET',url});assert.equal(await response.text(),'fresh '+url);assert.equal(await w.cache.get(url).text(),'fresh '+url);assert.equal(await w.request({method:'GET',url:'https://other.example/app.js'}),undefined);});
test('installable app icons have the declared PNG dimensions',()=>{const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.webmanifest'),'utf8'));for(const icon of manifest.icons){const png=fs.readFileSync(path.join(root,icon.src));assert.equal(png.subarray(1,4).toString(),'PNG');assert.equal(`${png.readUInt32BE(16)}x${png.readUInt32BE(20)}`,icon.sizes);}});

