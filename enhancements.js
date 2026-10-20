'use strict';
state.background=['auto','rotate','none',...Object.keys(quoteScenes)].includes(state.background)?state.background:'auto';
state.backgroundDarkness=typeof state.backgroundDarkness==='number'?Math.max(.55,Math.min(.85,state.backgroundDarkness)):.7;
const quotePhotoCache=new Map();
let displayedQuoteScene=null;
function updateQuoteBackground(quote=current,changePicture=false){
  let scene=getQuoteScene(quote,state.background);const card=$('quote-card');
  if(state.background==='rotate'){
    const previous=state.photoRotation;
    if(!changePicture&&previous?.quoteId===quote.id&&quoteScenes[previous.key])scene={...quoteScenes[previous.key],key:previous.key};
    else {
      const keys=Object.keys(quoteScenes);const last=previous?.key||card.dataset.scene;
      // Prefer the meaning-matched image, choosing another view when it would repeat.
      if(scene.key===last) {const alternatives=keys.filter(key=>key!==last);const key=alternatives[Math.floor(Math.random()*alternatives.length)];scene={...quoteScenes[key],key};}
      state.photoRotation={quoteId:quote.id,key:scene.key};persist();
    }
  }
  displayedQuoteScene=scene;
  card.classList.toggle('has-scene',!!scene);card.dataset.scene=scene?.key||'none';
  card.style.setProperty('--quote-scene',scene?`url("${scene.image}")`:'none');
  card.style.setProperty('--scene-darkness',String(state.backgroundDarkness));
  const mode=state.background==='auto'?'Auto match':state.background==='rotate'?'Changes with every quote':'Fixed picture';
  $('scene-caption').textContent=scene?`${mode} · ${scene.label} · ${scene.meaning}`:'Plain background · A little room for your words.';
  $('scene-options-button').textContent=scene?`${mode} ▾`:'Background settings ▾';
  $('background-button').textContent=scene?'▧ Photo on':'▧ Photo off';$('background-button').setAttribute('aria-pressed',String(!!scene));
  $('background-select').value=state.background;$('background-darkness').value=String(Math.round(state.backgroundDarkness*100));$('darkness-value').textContent=`${Math.round(state.backgroundDarkness*100)}%`;
}
function loadQuotePhoto(scene){
  if(!quotePhotoCache.has(scene.key))quotePhotoCache.set(scene.key,new Promise((resolve,reject)=>{const image=new Image();image.onload=()=>resolve(image);image.onerror=()=>{quotePhotoCache.delete(scene.key);reject(Error('Photo unavailable'));};image.src=scene.image;}));
  return quotePhotoCache.get(scene.key);
}
$('background-button').addEventListener('click',()=>{state.background=state.background==='none'?'auto':'none';persist();updateQuoteBackground();});
$('change-picture-button').addEventListener('click',()=>{state.photoRotation={quoteId:current.id,key:displayedQuoteScene?.key};state.background='rotate';updateQuoteBackground(current,true);persist();toast('Pictures will change with every new quote.');});
$('auto-picture-button').addEventListener('click',()=>{state.background='auto';persist();updateQuoteBackground();toast('Backgrounds now follow each quote’s meaning.');});
$('scene-options-button').addEventListener('click',()=>$('background-dialog').showModal());
$('close-background').addEventListener('click',()=>$('background-dialog').close());
$('background-select').addEventListener('change',()=>{const value=$('background-select').value;state.background=['auto','rotate','none',...Object.keys(quoteScenes)].includes(value)?value:'auto';persist();updateQuoteBackground();});
$('background-darkness').addEventListener('input',()=>{const value=Number($('background-darkness').value)/100;state.backgroundDarkness=Number.isFinite(value)?Math.max(.55,Math.min(.85,value)):.7;persist();updateQuoteBackground();});
state.collections = Array.isArray(state.collections) ? state.collections.filter(c=>c && typeof c.id==='string' && typeof c.name==='string' && Array.isArray(c.quoteIds)).map(c=>({id:c.id,name:c.name.slice(0,40),quoteIds:c.quoteIds.filter(id=>typeof id==='string')})) : [];
state.activity = state.activity && typeof state.activity==='object' ? state.activity : {};
const validDay = value => typeof value==='string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value+'T12:00:00Z')) && new Date(value+'T12:00:00Z').toISOString().slice(0,10)===value;
state.activity.visits = Array.isArray(state.activity.visits) ? [...new Set(state.activity.visits.filter(validDay))] : [];
state.activity.completed = Array.isArray(state.activity.completed) ? [...new Set(state.activity.completed.filter(validDay))] : [];
let collectionQuoteId = null;
let breathingTimer = null;
const themes = ['light','sage','dark'];
function applyTheme(theme) { state.theme=themes.includes(theme)?theme:'light';document.documentElement.dataset.theme=state.theme;$('theme-button').textContent=`Theme: ${state.theme[0].toUpperCase()+state.theme.slice(1)}`; }
function dayBefore(day) { const d=new Date(day+'T12:00:00Z');d.setUTCDate(d.getUTCDate()-1);return d.toISOString().slice(0,10); }
function streakLength(days,today=dayKey()) { const visited=new Set(days);let cursor=today;let count=0;while(visited.has(cursor)){count++;cursor=dayBefore(cursor);}return count; }
function updateStats() {
  if(!state.activity)return;
  const streak=streakLength(state.activity.visits||[]);
  $('streak-stat').textContent=`✧ ${streak} ${streak===1?'day':'days'} of showing up`;
  const count=(state.activity.completed||[]).length;
  $('completed-stat').textContent=`${count} ${count===1?'intention':'intentions'} followed through`;
  $('intention-done').checked=(state.activity.completed||[]).includes(dayKey());
  $('intention-done').disabled=!(state.intention.day===dayKey() && state.intention.text);
}
function recordVisit() { if(!state.activity.visits.includes(dayKey()))state.activity.visits.push(dayKey());persist(); }
function collectionOptions() {
  const selector=$('library-mode');const previous=collectionMode;selector.replaceChildren();
  for(const [value,label] of [['featured','A few for today'],['all','All quotes'],['saved','Saved quotes'],['personal','My own words'],...state.collections.map(c=>[c.id,c.name])]){const option=document.createElement('option');option.value=value;option.textContent=label;selector.append(option);}
  selector.value=previous;
}
function openCollection(quote) {
  collectionQuoteId=quote.id;$('collection-preview').textContent=`“${quote.text}”`;$('collection-error').textContent='';$('collection-name').value='';
  $('collection-picker').replaceChildren();const first=document.createElement('option');first.value='';first.textContent='Create a new collection below';$('collection-picker').append(first);
  for(const c of state.collections){const option=document.createElement('option');option.value=c.id;option.textContent=c.name;$('collection-picker').append(option);}
  $('collection-dialog').showModal();
}
$('quote-search').addEventListener('input',()=>{searchTerm=$('quote-search').value.trim();visibleLimit=12;renderCollection();});
$('library-mode').addEventListener('change',()=>{collectionMode=$('library-mode').value;savedView=collectionMode==='saved';visibleLimit=12;renderCollection();});
$('browse-button').addEventListener('click',()=>{collectionMode='all';$('library-mode').value='all';savedView=false;visibleLimit=12;renderCollection();});
$('load-more').addEventListener('click',()=>{visibleLimit+=12;renderCollection();});
$('organize-button').addEventListener('click',()=>openCollection(current));
$('close-collection').addEventListener('click',()=>$('collection-dialog').close());
$('collection-form').addEventListener('submit',event=>{
  event.preventDefault();const name=$('collection-name').value.trim();let selected=state.collections.find(c=>c.id===$('collection-picker').value);
  if(name){selected=state.collections.find(c=>c.name.toLowerCase()===name.toLowerCase());if(!selected){selected={id:`collection-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,name:name.slice(0,40),quoteIds:[]};state.collections.push(selected);}}
  if(!selected){$('collection-error').textContent='Choose a collection, or give your new one a name.';return;}
  if(!selected.quoteIds.includes(collectionQuoteId))selected.quoteIds.push(collectionQuoteId);
  if(!state.saved.includes(collectionQuoteId))state.saved.push(collectionQuoteId);
  persist();updateSave();collectionOptions();renderCollection();$('collection-dialog').close();toast(`Kept in ${selected.name}.`);
});
$('remove-collection').addEventListener('click',()=>$('remove-collection-dialog').showModal());
$('cancel-remove-collection').addEventListener('click',()=>$('remove-collection-dialog').close());
$('confirm-remove-collection').addEventListener('click',()=>{state.collections=state.collections.filter(c=>c.id!==collectionMode);collectionMode='saved';savedView=true;persist();collectionOptions();renderCollection();$('remove-collection-dialog').close();});
$('theme-button').addEventListener('click',()=>{applyTheme(themes[(themes.indexOf(state.theme)+1)%themes.length]);persist();});
$('fresh-on-open').checked=state.freshOnOpen;
$('fresh-on-open').addEventListener('change',()=>{state.freshOnOpen=$('fresh-on-open').checked;persist();});
$('quote-search').placeholder=`Search all ${reminders.length} quotes…`;
$('library-summary').textContent=`${reminders.length} unique built-in quotes, plus your own words. Reopen online to receive new published additions. Your non-repeating history is kept.`;
$('settings-button').addEventListener('click',()=>$('settings-dialog').showModal());
$('close-settings').addEventListener('click',()=>$('settings-dialog').close());
$('intention-done').addEventListener('change',()=>{const today=dayKey();state.activity.completed=state.activity.completed.filter(day=>day!==today);if($('intention-done').checked)state.activity.completed.push(today);persist();$('intention-feedback').textContent=$('intention-done').checked?'You made a little room for what matters.':'';});
function downloadFile(blob,name) { const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download=name;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),30000); }
function backupData() { return {app:'motive',version:1,exportedAt:new Date().toISOString(),data:{name:state.name,custom:state.custom,saved:state.saved,seen:state.seen,collections:state.collections,activity:state.activity,intention:state.intention,theme:state.theme,companion:state.companion}}; }
function mergeBackup(backup) {
  if(!backup || backup.app!=='motive' || backup.version!==1 || !backup.data || !Array.isArray(backup.data.custom) || !Array.isArray(backup.data.saved))throw Error('Choose a Motive backup file downloaded from this app.');
  const incoming=backup.data;
  if(incoming.custom.length>5000)throw Error('This backup has too many personal quotes.');
  const custom=state.custom.map(q=>({...q}));const mapping=new Map();const byText=new Map(allQuotes().map(q=>[quoteKey(q.text),q]));
  for(const q of incoming.custom){
    if(!q || typeof q.id!=='string' || !q.id.startsWith('personal-') || typeof q.text!=='string' || !q.text.trim() || q.text.length>400 || !categories.includes(q.category) || q.category==='All' || typeof q.author!=='string' || q.author.length>60)throw Error('This backup contains an invalid personal quote.');
    const duplicate=byText.get(quoteKey(q.text));if(duplicate){mapping.set(q.id,duplicate.id);continue;}
    let id=q.id;if(byText.size && [...byText.values()].some(existing=>existing.id===id))id=`personal-${Date.now()}-${Math.random().toString(36).slice(2,10)}`;
    const safe={id,text:q.text.trim(),author:q.author,category:q.category};custom.push(safe);byText.set(quoteKey(safe.text),safe);mapping.set(q.id,id);
  }
  const validIds=new Set([...reminders,...custom].map(q=>q.id));
  const mapIds=ids=>Array.isArray(ids)?[...new Set(ids.filter(id=>typeof id==='string').map(id=>mapping.get(id)||id).filter(id=>validIds.has(id)))]:[];
  const saved=[...new Set([...state.saved,...mapIds(incoming.saved)])];
  const collections=state.collections.map(c=>({...c,quoteIds:[...c.quoteIds]}));
  if(incoming.collections!==undefined&&!Array.isArray(incoming.collections))throw Error('The backup collections could not be read.');
  for(const c of incoming.collections||[]){if(!c || typeof c.name!=='string' || !c.name.trim() || c.name.length>40 || !Array.isArray(c.quoteIds))throw Error('This backup contains an invalid collection.');let existing=collections.find(item=>item.name.toLowerCase()===c.name.toLowerCase());if(existing)existing.quoteIds=[...new Set([...existing.quoteIds,...mapIds(c.quoteIds)])];else collections.push({id:`collection-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,name:c.name,quoteIds:mapIds(c.quoteIds)});}
  const activity={visits:[...new Set([...state.activity.visits,...(Array.isArray(incoming.activity?.visits)?incoming.activity.visits.filter(validDay):[])])],completed:[...new Set([...state.activity.completed,...(Array.isArray(incoming.activity?.completed)?incoming.activity.completed.filter(validDay):[])])]};
  let intention=state.intention;if(incoming.intention && validDay(incoming.intention.day) && typeof incoming.intention.text==='string' && incoming.intention.text.length<=160 && (!validDay(intention.day)||incoming.intention.day>intention.day))intention={day:incoming.intention.day,text:incoming.intention.text};
  const companion=incoming.companion!==undefined&&typeof mergeCompanionBackup==='function'?mergeCompanionBackup(incoming.companion,mapIds,validIds):state.companion;
  return {custom,saved,collections,activity,intention,companion,seen:[...new Set([...state.seen,...mapIds(incoming.seen)])],name:state.name||(typeof incoming.name==='string'?incoming.name.slice(0,35):'')};
}
$('backup-button').addEventListener('click',()=>{downloadFile(new Blob([JSON.stringify(backupData(),null,2)],{type:'application/json'}),`motive-backup-${dayKey()}.json`);$('backup-status').textContent='Backup downloaded. Keep it somewhere you can find it again.';});
$('restore-button').addEventListener('click',()=>$('backup-file').click());
$('backup-file').addEventListener('change',async()=>{const file=$('backup-file').files[0];if(!file)return;try{if(file.size>2*1024*1024)throw Error('Choose a backup smaller than 2 MB.');const merged=mergeBackup(JSON.parse(await file.text()));Object.assign(state,merged);persist();collectionOptions();renderCollection();updateSave();updateGreeting();loadIntention();updateStats();if(typeof renderPersonalSpace==='function')renderPersonalSpace();$('backup-status').textContent='Backup merged. Your existing words and favorites were kept.';}catch(error){$('backup-status').textContent=error instanceof SyntaxError?'This file is not a valid Motive backup.':error.message;}$('backup-file').value='';});
$('restart-button').addEventListener('click',()=>{state.seen=[current.id];state.daily=null;persist();showQuote(current);$('backup-status').textContent='Quote rotation restarted. Saved quotes and collections were kept.';});
$('share-button').addEventListener('click',async()=>{const text=`“${current.text}” — ${current.author}`;if(navigator.share){try{await navigator.share({title:'A little motivation from Motive',text,url:location.href});}catch(error){if(error.name!=='AbortError')toast('Sharing is unavailable here. Use the copy button instead.');}}else $('copy-button').click();});
async function createQuoteCanvas(quote,wallpaper=false){
  const canvas=document.createElement('canvas');canvas.width=1080;canvas.height=wallpaper?1920:1350;const ctx=canvas.getContext('2d');
  const scene=displayedQuoteScene;let photo=null;if(scene){try{photo=await loadQuotePhoto(scene);}catch{toast('Photo unavailable. Using a plain background for this image.');}}
  const dark=!!photo||state.theme==='dark';ctx.fillStyle=dark?'#1d3026':'#e5eacb';ctx.fillRect(0,0,canvas.width,canvas.height);
  if(photo){const scale=Math.max(canvas.width/photo.naturalWidth,canvas.height/photo.naturalHeight);const width=photo.naturalWidth*scale;const height=photo.naturalHeight*scale;ctx.drawImage(photo,(canvas.width-width)/2,(canvas.height-height)/2,width,height);ctx.fillStyle=`rgba(6,20,15,${state.backgroundDarkness})`;ctx.fillRect(0,0,canvas.width,canvas.height);}
  ctx.fillStyle=dark?'#f6f8ef':'#25382d';ctx.font='bold 34px sans-serif';ctx.fillText('✳  motive.',90,wallpaper?510:120);
  let fontSize=quote.text.length>240?38:quote.text.length>160?44:52;let lines;
  do{ctx.font=`${fontSize}px sans-serif`;lines=[];let line='';for(const word of `“${quote.text}”`.split(/\s+/)){if(ctx.measureText(word).width>900){if(line){lines.push(line);line='';}for(const char of word){if(ctx.measureText(line+char).width>900){lines.push(line);line='';}line+=char;}}else{const next=line?line+' '+word:word;if(ctx.measureText(next).width>900&&line){lines.push(line);line=word;}else line=next;}}if(line)lines.push(line);if(lines.length*fontSize*1.4<=800||fontSize<=26)break;fontSize-=2;}while(true);
  const lineHeight=fontSize*1.4;let y=Math.max(wallpaper?650:260,(wallpaper?1000:650)-lines.length*lineHeight/2);for(const text of lines){ctx.fillText(text,90,y);y+=lineHeight;}
  ctx.font='24px sans-serif';ctx.fillText('— '+quote.author,90,Math.min(wallpaper?1680:1150,y+48));ctx.font='20px sans-serif';ctx.fillText('A LITTLE FORWARD, EVERY DAY.',90,wallpaper?1780:1240);return canvas;
}
for(const [id,wallpaper]of [['image-button',false],['wallpaper-button',true]])$(id).addEventListener('click',async()=>{const button=$(id);button.disabled=true;const quote={...current};try{const canvas=await createQuoteCanvas(quote,wallpaper);const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!blob)throw Error('Image unavailable');downloadFile(blob,wallpaper?'motive-phone-wallpaper.png':'motive-quote.png');toast(wallpaper?'Wallpaper downloaded. Save it to Photos, then choose it in iPhone wallpaper settings.':'Your quote image is ready.');}catch{toast('The image could not be created. You can still copy the quote.');}finally{button.disabled=false;}});
function stopBreathing() { clearInterval(breathingTimer);breathingTimer=null;$('breathing-orb').classList.remove('expand');$('start-breathe').textContent='Start a one-minute pause'; }
$('breathe-button').addEventListener('click',()=>{$('breathing-prompt').textContent='Let your shoulders soften.';$('breathe-dialog').showModal();});
$('close-breathe').addEventListener('click',()=>{stopBreathing();$('breathe-dialog').close();});
$('breathe-dialog').addEventListener('close',stopBreathing);
$('start-breathe').addEventListener('click',()=>{if(breathingTimer){stopBreathing();$('breathing-prompt').textContent='Come back whenever you need a moment.';return;}const started=Date.now();let lastPhase='';const tick=()=>{const elapsed=Math.floor((Date.now()-started)/1000);if(elapsed>=60){stopBreathing();$('breathing-prompt').textContent='One quiet minute, just for you.';return;}const phase=elapsed%10<4?'Breathe in gently.':'Breathe out slowly.';if(phase!==lastPhase){$('breathing-prompt').textContent=phase;lastPhase=phase;}$('breathing-orb').classList.toggle('expand',elapsed%10<4);$('start-breathe').textContent=`${60-elapsed}s remaining · Stop`;};breathingTimer=setInterval(tick,1000);tick();});
$('widget-help-button').addEventListener('click',()=>{$('settings-dialog').close();$('widget-dialog').showModal();});
$('close-widget').addEventListener('click',()=>$('widget-dialog').close());
$('copy-widget-button').addEventListener('click',async()=>{try{const response=await fetch('./widget/Motive.js');if(!response.ok)throw Error('Unavailable');const defaults={category:$('widget-category').value,style:$('widget-style').value,refreshMinutes:Number($('widget-minutes').value)};const code=(await response.text()).replace(/^const widgetDefaults =.*;$/m,'const widgetDefaults = '+JSON.stringify(defaults)+';');if(!navigator.clipboard?.writeText)throw Error('Clipboard unavailable');await navigator.clipboard.writeText(code);$('widget-status').textContent='Copied. Replace ALL old Motive code in Scriptable and run it online. Check for MOTIVE v4 and a photo. Then hold your Home Screen widget → Edit Widget → clear its old Parameter, or use All,photo,60 for photo quotes.';}catch{$('widget-status').replaceChildren(document.createTextNode('Open the default code, select all, and copy: '));const link=document.createElement('a');link.href='./widget/Motive.js';link.textContent='Open widget code';link.target='_blank';link.rel='noopener';$('widget-status').append(link);}});
function connectionStatus() { $('connection-status').textContent=navigator.onLine===false?'Offline · Your space stays with you':''; }
window.addEventListener('online',connectionStatus);window.addEventListener('offline',connectionStatus);
document.addEventListener('visibilitychange',()=>{if(!document.hidden){recordVisit();updateStats();}else if(breathingTimer){stopBreathing();$('breathing-prompt').textContent='Paused. Begin again whenever you’re ready.';}});
if('serviceWorker' in navigator && /^https?:$/.test(location.protocol))navigator.serviceWorker.register('./sw.js').then(()=>navigator.serviceWorker.ready).then(()=>{if(navigator.onLine!==false)$('connection-status').textContent='Ready to open offline';}).catch(()=>{$('connection-status').textContent='Offline setup unavailable. Try reopening online.';});
applyTheme(state.theme);collectionOptions();recordVisit();updateStats();connectionStatus();renderCollection();updateQuoteBackground();

