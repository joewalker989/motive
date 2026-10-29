'use strict';
// One set of destinations, shared by the main page and the three large dialogs.
const motiveDestinations=[['quotes','Quotes'],['saved','Saved'],['wellbeing','Wellbeing'],['practice','Practice'],['space','Space']];
let motiveNavigating=false;
function motiveCurrentArea(){if($('settings-dialog').open)return 'space';if($('growth-dialog').open)return 'practice';if($('studio-dialog').open)return 'wellbeing';return savedView?'saved':'quotes';}
function refreshMotiveNavigation(){const area=motiveCurrentArea();for(const button of document.querySelectorAll('[data-motive-destination]')){const active=button.dataset.motiveDestination===area;button.setAttribute('aria-current',active?'page':'false');button.classList.toggle('active',active);}}
function motiveNavigationBlocked(){
 if(typeof recording!=='undefined'&&recording&&recording.state!=='inactive')return 'Stop and save your recording before switching areas.';
 if($('studio-dialog').open&&studioPrefs.vault&&($('studio-journal-note').value.trim()||$('journal-photo').files?.length||pendingJournalAudio))return 'Save your unfinished journal entry before leaving. Closing this area locks the journal and clears unsaved words and attachments.';
 return '';
}
async function navigateMotive(destination){
 if(!motiveDestinations.some(([key])=>key===destination)||motiveNavigating)return;
 if(destination===motiveCurrentArea()&&!['quotes','saved'].includes(destination)){refreshMotiveNavigation();return;}
 const blocked=motiveNavigationBlocked();for(const note of document.querySelectorAll('.motive-navigation-feedback'))note.textContent=blocked;if(blocked)return;
 motiveNavigating=true;
 try{
  for(const id of ['settings-dialog','studio-dialog','growth-dialog'])if($(id).open)$(id).close();
  if(destination==='wellbeing')await openStudio('calm');
  else if(destination==='practice')await openGrowth();
  else if(destination==='space')$('settings-dialog').showModal();
  else {setView(destination==='saved');const target=destination==='saved'?$('collection-title'):$('quote-card');target.setAttribute('tabindex','-1');target.focus({preventScroll:true});target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:destination==='saved'?'center':'start'});}
  refreshMotiveNavigation();
  const heading={wellbeing:'studio-title',practice:'growth-title',space:'settings-heading'}[destination];if(heading&&$(heading)){$(heading).setAttribute('tabindex','-1');$(heading).focus();}
 }catch{for(const note of document.querySelectorAll('.motive-navigation-feedback'))note.textContent='This area could not open. Your saved space is still here. Try again.';refreshMotiveNavigation();}
 finally{motiveNavigating=false;}
}
for(const [destination,id] of [['wellbeing','nav-wellbeing'],['practice','nav-practice'],['space','nav-space']])$(id).addEventListener('click',()=>navigateMotive(destination));
for(const id of ['settings-dialog','studio-dialog','growth-dialog']){
 const host=$(id),nav=document.createElement('nav');nav.className='motive-area-navigation';nav.setAttribute('aria-label','Motive areas');
 for(const [destination,label] of motiveDestinations){const button=document.createElement('button');button.type='button';button.textContent=label;button.dataset.motiveDestination=destination;button.addEventListener('click',()=>navigateMotive(destination));nav.append(button);}
 const note=document.createElement('p');note.className='motive-navigation-feedback';note.setAttribute('role','status');
 host.children[0].after(nav);nav.after(note);
 if(id!=='settings-dialog'){const hint=document.createElement('p');hint.className='form-note motive-navigation-hint';hint.textContent='Switching areas pauses sessions and stops audio in the area you leave.';note.after(hint);}
 host.addEventListener('close',()=>{refreshMotiveNavigation();if(!motiveNavigating&&!$('settings-dialog').open&&!$('studio-dialog').open&&!$('growth-dialog').open){const area=motiveCurrentArea();document.querySelector('#primary-navigation [data-motive-destination="'+area+'"]').focus({preventScroll:true});}});
}
// Existing direct shortcuts also update the shared location marker.
for(const id of ['settings-button','studio-button','overwhelmed-button','growth-button'])$(id).addEventListener('click',()=>{setTimeout(refreshMotiveNavigation,0);});
document.body.classList.add('motive-navigation-ready');refreshMotiveNavigation();
