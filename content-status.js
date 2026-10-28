/* Public content checks never include personal quotes or browser data. */
function contentFingerprint(value){let hash=2166136261;for(let i=0;i<value.length;i++){hash^=value.charCodeAt(i);hash=Math.imul(hash,16777619);}return (hash>>>0).toString(16);}
function contentSnapshot(quotes,scenes){
 const dates=items=>items.filter(value=>/^\d{4}-\d{2}-\d{2}$/.test(value||'')).sort().pop()||null;
 const pictures=Object.entries(scenes).sort(([a],[b])=>a.localeCompare(b));
 const library=[...quotes].sort((a,b)=>a.id.localeCompare(b.id));
 return {version:1,quoteCount:library.length,photoCount:pictures.length,latestQuoteDate:dates(library.map(q=>q.date)),latestPhotoDate:dates(pictures.map(([,s])=>s.added)),quoteRevision:contentFingerprint(JSON.stringify(library.map(q=>[q.id,q.text,q.category,q.date||null]))),photoRevision:contentFingerprint(JSON.stringify(pictures.map(([key,s])=>[key,s.image,s.added||null])))};
}
if(typeof document!=='undefined'){
 const loadedContent=contentSnapshot(uniqueQuotes(reminders),quoteScenes);
 const contentNode=id=>document.getElementById(id);
 const dateLabel=value=>value?new Date(value+'T12:00:00').toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'}):'Original library';
 contentNode('content-loaded').textContent=loadedContent.quoteCount+' quotes and '+loadedContent.photoCount+' pictures loaded.';
 contentNode('content-dates').textContent='Newest quotes: '+dateLabel(loadedContent.latestQuoteDate)+'. Newest picture: '+dateLabel(loadedContent.latestPhotoDate)+'.';
 let checkingContent=false;
 function showContentCheckTime(){try{const saved=JSON.parse(localStorage.getItem('motive-content-check'));if(saved?.checkedAt&&Number.isFinite(Date.parse(saved.checkedAt)))contentNode('content-last-check').textContent='Last successful online check: '+new Date(saved.checkedAt).toLocaleString()+'.';}catch{}}
 showContentCheckTime();
 async function checkContent(){
  if(checkingContent)return;
  if(navigator.onLine===false){contentNode('content-check-status').textContent='You are offline. Showing the library already loaded; reconnect to check for newer content.';return;}
  checkingContent=true;contentNode('content-check').disabled=true;contentNode('content-check-status').textContent='Checking for fresh quotes and pictures…';contentNode('content-reload').hidden=true;
  const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),8000);
  try{
   const response=await fetch('./content-status.json',{cache:'no-store',signal:controller.signal});if(!response.ok)throw Error('Unavailable');
   const latest=await response.json();if(navigator.onLine===false)throw Error('Offline');
   if(latest.version!==1||!Number.isInteger(latest.quoteCount)||!Number.isInteger(latest.photoCount)||latest.quoteCount<400||latest.photoCount<1||!['quoteRevision','photoRevision'].every(key=>typeof latest[key]==='string'&&/^[a-f0-9]{1,8}$/.test(latest[key])))throw Error('Invalid content status');
   const same=latest.quoteRevision===loadedContent.quoteRevision&&latest.photoRevision===loadedContent.photoRevision;
   contentNode('content-check-status').textContent=same?'Your loaded quotes and pictures match the latest published library.':'A different published library is available ('+latest.quoteCount+' quotes, '+latest.photoCount+' pictures). Finish any writing, then reopen to load it.';
   contentNode('content-reload').hidden=same;if(!same&&typeof offerMotiveContentUpdate==='function')offerMotiveContentUpdate();
   try{localStorage.setItem('motive-content-check',JSON.stringify({checkedAt:new Date().toISOString()}));}catch{}
   showContentCheckTime();
  }catch{contentNode('content-check-status').textContent='Could not confirm the latest content. Your loaded library is still available. Reconnect and try again.';}
  finally{clearTimeout(timeout);checkingContent=false;contentNode('content-check').disabled=false;}
 }
 contentNode('content-check').addEventListener('click',checkContent);
 contentNode('content-reload').addEventListener('click',()=>{if(typeof requestMotiveUpdate==='function')requestMotiveUpdate();else location.reload();});
 window.addEventListener('online',checkContent);
 window.addEventListener('offline',()=>{contentNode('content-check-status').textContent='You are offline. Showing the library already loaded; reconnect to check for newer content.';});
 checkContent();
}
