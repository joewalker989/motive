'use strict';
// Local maintenance only. Never shipped as executable website code.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const {execFileSync}=require('node:child_process');
const {isDeepStrictEqual}=require('node:util');
const categories=['Confidence','Focus','Resilience','Growth','Calm'];
function calendarDate(now=new Date()){return new Intl.DateTimeFormat('en-CA',{timeZone:'America/New_York',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);}
function validateDate(date){if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||!Number.isFinite(Date.parse(date+'T12:00:00Z'))||new Date(date+'T12:00:00Z').toISOString().slice(0,10)!==date)throw Error('Use a real date in YYYY-MM-DD form.');return date;}
function readLibrary(root){
 const context=vm.createContext({}),read=file=>fs.readFileSync(path.join(root,file),'utf8');
 for(const file of ['quotes.js','daily-quotes.js','scenes.js'])vm.runInContext(read(file),context,{timeout:2000});
 const app=read('app.js'),end=app.indexOf('const $ =');if(end<0)throw Error('Library boundary is missing.');
 vm.runInContext(app.slice(0,end),context,{timeout:2000});
 const values=JSON.parse(vm.runInContext('JSON.stringify({daily:dailyReminders,quotes:reminders,scenes:quoteScenes})',context));
 values.key=text=>vm.runInContext('quoteKey('+JSON.stringify(text)+')',context,{timeout:2000});return values;
}
function slotsFor(daily,date){
 if(daily.some(q=>q.date===date&&!categories.includes(q.category)))throw Error('An existing dated quote has an unknown category; review without deleting it.');
 return Object.fromEntries(categories.map(category=>{
  const count=daily.filter(q=>q.date===date&&q.category===category).length;
  if(count>10)throw Error('More than 10 '+category+' quotes already exist for '+date+'; review without deleting records.');
  const ids=new Set(daily.map(q=>q.id)),missing=[];
  for(let n=1;missing.length<10-count&&n<=99;n++){const id='daily-'+date+'-'+category.toLowerCase()+'-'+String(n).padStart(2,'0');if(!ids.has(id))missing.push(id);}
  return [category,{count,missingIds:missing}];
 }));
}
function planQuotes(library,date,candidates){
 validateDate(date);if(!Array.isArray(candidates))throw Error('Quote batch must be a JSON array.');
 const next=[...library.daily],ids=new Map(library.quotes.map(q=>[q.id,q])),keys=new Set(library.quotes.map(q=>library.key(q.text))),inputIds=new Set();let added=0,alreadyPresent=0;
 for(const q of candidates){
  if(!q||!categories.includes(q.category)||q.date!==date||q.author!=='A Motive reminder'||typeof q.text!=='string'||q.text.trim()!==q.text||q.text.length<12||q.text.length>500||Object.keys(q).sort().join(',')!=='author,category,date,id,text')throw Error('Every candidate needs valid id, original text, category, date, and A Motive reminder attribution.');
  if(typeof q.id!=='string'||!new RegExp('^daily-'+date+'-'+q.category.toLowerCase()+'-(0[1-9]|[1-9][0-9])$').test(q.id))throw Error('Unexpected candidate ID: '+q.id);
  if(inputIds.has(q.id))throw Error('Repeated candidate ID: '+q.id);inputIds.add(q.id);
  if(ids.has(q.id)){if(!isDeepStrictEqual(ids.get(q.id),q))throw Error('Existing record conflict: '+q.id);alreadyPresent++;continue;}
  const key=library.key(q.text);if(!key||keys.has(key))throw Error('Duplicate quote wording: '+q.id);
  ids.set(q.id,q);keys.add(key);next.push(q);added++;
 }
 slotsFor(next,date);return {daily:next,added,alreadyPresent};
}
function atomicWrite(file,content){
 const temporary=file+'.motive-pending-'+process.pid;
 try{fs.writeFileSync(temporary,content,{encoding:'utf8',flag:'wx'});fs.renameSync(temporary,file);}finally{if(fs.existsSync(temporary))fs.unlinkSync(temporary);}
}
function appendQuotes(root,date,candidates){
 const file=path.join(root,'daily-quotes.js'),before=fs.readFileSync(file,'utf8'),library=readLibrary(root),plan=planQuotes(library,date,candidates);
 if(plan.added){if(fs.readFileSync(file,'utf8')!==before)throw Error('Daily source changed; refresh and retry.');atomicWrite(file,"'use strict';\n// Append original dated records; preserve every existing ID.\nconst dailyReminders = "+JSON.stringify(plan.daily,null,2)+';\n');}
 return {added:plan.added,alreadyPresent:plan.alreadyPresent};
}
function inspect(root,date){
 validateDate(date);const library=readLibrary(root),slots=slotsFor(library.daily,date);
 const picker=fs.readFileSync(path.join(root,'index.html'),'utf8'),worker=fs.readFileSync(path.join(root,'sw.js'),'utf8');
 const metadata=JSON.parse(fs.readFileSync(path.join(root,'assets/backgrounds/generation.json'),'utf8'));
 const pictures=Object.entries(library.scenes).filter(([,scene])=>scene.added===date).map(([key,scene])=>{
  const missing=[],asset=typeof scene.image==='string'?scene.image.replace(/^\.\//,''):'';
  const safe=new RegExp('^assets/backgrounds/daily-'+date+'-[a-z0-9-]+\\.jpg$').test(asset);
  if(!safe)missing.push('immutable daily JPEG path');
  else{const file=path.join(root,asset);if(!fs.existsSync(file))missing.push('JPEG file');else{const bytes=fs.readFileSync(file);if(bytes.length<4||bytes[0]!==255||bytes[1]!==216||bytes[2]!==255)missing.push('valid JPEG file');}}
  if(!metadata.some(m=>m.asset===asset&&m.date===date&&m.tool==='built-in image_gen'&&typeof m.prompt==='string'&&m.prompt.trim()))missing.push('generation prompt/tool/date metadata');
  if(!/^[A-Za-z0-9_-]+$/.test(key)||!picker.includes('value="'+key+'"'))missing.push('manual picker option');
  if(!worker.includes("'./"+asset+"'")&&!worker.includes('"./'+asset+'"'))missing.push('offline asset registration');
  if(!scene.label||!scene.meaning||!categories.includes(scene.category)||!scene.kind||!Array.isArray(scene.words)||!scene.words.length)missing.push('scene description and keyword rules');
  return {key,asset,missing};
 });
 const folder=path.join(root,'assets/backgrounds');
 const unregisteredAssets=fs.readdirSync(folder).filter(name=>name.startsWith('daily-'+date+'-')&&name.endsWith('.jpg')&&!pictures.some(p=>p.asset==='assets/backgrounds/'+name)).map(name=>'assets/backgrounds/'+name);
 const quoteCount=Object.values(slots).reduce((sum,item)=>sum+item.count,0);
 return {date,quoteCount,quotesComplete:quoteCount===50,slots,pictures,pictureComplete:pictures.some(p=>p.missing.length===0),unregisteredAssets,next:quoteCount<50?'Write and review only the missing quote slots.':!pictures.some(p=>p.missing.length===0)?'Finish the picture. Inspect existing daily assets before generating another.':'Regenerate feeds, run checks, publish with the latest expected main SHA, and verify Pages for that commit.'};
}
function repair(root){execFileSync(process.execPath,[path.join(root,'scripts/export-quotes.cjs')],{cwd:root,stdio:'pipe'});}
if(require.main===module){try{
 const args=process.argv.slice(2),date=validateDate(args.includes('--date')?args[args.indexOf('--date')+1]:calendarDate()),root=path.resolve(__dirname,'..');
 const allowed=new Set(['--date','--quotes','--repair']);for(let i=0;i<args.length;i++){if(!allowed.has(args[i]))throw Error('Unknown option: '+args[i]);if(args[i]!=='--repair'){if(!args[i+1]||args[i+1].startsWith('--'))throw Error('Missing option value.');i++;}}
 let applied;if(args.includes('--quotes'))applied=appendQuotes(root,date,JSON.parse(fs.readFileSync(args[args.indexOf('--quotes')+1],'utf8')));
 if(args.includes('--repair'))repair(root);
 console.log(JSON.stringify({...inspect(root,date),...(applied?{applied}:{}),feedsRegenerated:args.includes('--repair')},null,2));
}catch(error){console.error(error.message);process.exitCode=1;}}
module.exports={calendarDate,validateDate,readLibrary,slotsFor,planQuotes,appendQuotes,inspect,repair,atomicWrite};
