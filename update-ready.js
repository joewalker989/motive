'use strict';
// This notice keeps loaded pages in place. Only an explicit confirmation reloads.
let motiveUpdateRegistration=null,motivePendingWorker=null,motiveActivatedUpdate=false,motiveNewContent=false,motiveUpdateDismissed=false,motiveReloadApproved=false,motiveReloadTimer=null,motiveReloadStarted=false;
let motiveHadController=!!navigator.serviceWorker?.controller;
function renderMotiveUpdate(){
 const available=!!motivePendingWorker||motiveActivatedUpdate||motiveNewContent;
 $('app-update-notice').hidden=!available||motiveUpdateDismissed;
 $('app-update-open').hidden=!available;
 $('app-update-status').textContent=available?'An update is available. You choose when to reopen Motive.':'No waiting app update detected. Check online for a newer version.';
}
function offerMotiveContentUpdate(){motiveNewContent=true;renderMotiveUpdate();}
function requestMotiveUpdate(){
 $('app-update-confirm-status').textContent='';
 $('app-update-confirm').showModal();
}
function observeMotiveRegistration(registration){
 if(motiveUpdateRegistration===registration)return;motiveUpdateRegistration=registration;
 function waiting(){if(registration.waiting&&navigator.serviceWorker.controller){if(motivePendingWorker!==registration.waiting)motiveUpdateDismissed=false;motivePendingWorker=registration.waiting;renderMotiveUpdate();}}
 waiting();
 registration.addEventListener('updatefound',()=>{const installing=registration.installing;if(!installing)return;installing.addEventListener('statechange',()=>{if(installing.state==='installed')waiting();});});
}
function finishMotiveReload(){if(motiveReloadStarted)return;motiveReloadStarted=true;clearTimeout(motiveReloadTimer);motiveReloadApproved=false;location.reload();}
$('app-update-show').addEventListener('click',requestMotiveUpdate);
$('app-update-open').addEventListener('click',requestMotiveUpdate);
$('app-update-later').addEventListener('click',()=>{motiveUpdateDismissed=true;renderMotiveUpdate();});
$('app-update-cancel').addEventListener('click',()=>{if(!motiveReloadApproved)$('app-update-confirm').close();});
$('app-update-confirm').addEventListener('cancel',event=>{if(motiveReloadApproved)event.preventDefault();});
$('app-update-reload').addEventListener('click',()=>{
 if(motiveReloadApproved||motiveReloadStarted)return;
 const waiting=motiveUpdateRegistration?.waiting;
 if(waiting){
  motiveReloadApproved=true;$('app-update-reload').disabled=true;$('app-update-cancel').disabled=true;$('app-update-confirm-status').textContent='Opening the ready update…';
  motiveReloadTimer=setTimeout(()=>{motiveReloadApproved=false;$('app-update-reload').disabled=false;$('app-update-cancel').disabled=false;$('app-update-confirm-status').textContent='The update did not finish activating. Your page is still here. Try again when ready.';},10000);
  try{waiting.postMessage({type:'MOTIVE_ACTIVATE_UPDATE'});}catch{clearTimeout(motiveReloadTimer);motiveReloadApproved=false;$('app-update-reload').disabled=false;$('app-update-cancel').disabled=false;$('app-update-confirm-status').textContent='Could not open the update. Your page is still here. Try again.';}
 }else if(navigator.onLine===false&&!motiveActivatedUpdate){$('app-update-confirm-status').textContent='Reconnect before reopening for new content. Your current page is still here.';}
 else finishMotiveReload();
});
$('app-update-check').addEventListener('click',async()=>{
 $('app-update-check').disabled=true;
 try{if(navigator.onLine===false)throw Error('Offline');if(!motiveUpdateRegistration)throw Error('Unavailable');await motiveUpdateRegistration.update();$('app-update-status').textContent='Check requested. A ready update will appear here after it finishes downloading.';}
 catch{$('app-update-status').textContent='Could not check app updates. Reconnect and try again; your current page is still available.';}
 finally{$('app-update-check').disabled=false;}
});
if('serviceWorker' in navigator){
 navigator.serviceWorker.addEventListener('controllerchange',()=>{
  if(motiveReloadApproved){finishMotiveReload();return;}
  if(motiveHadController){motiveActivatedUpdate=true;motivePendingWorker=null;renderMotiveUpdate();}else motiveHadController=true;
 });
 if(typeof motiveWorkerRegistration!=='undefined'&&motiveWorkerRegistration)motiveWorkerRegistration.then(observeMotiveRegistration).catch(()=>{});
}
renderMotiveUpdate();
