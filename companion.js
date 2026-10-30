'use strict';
// Optional personal notes stay in motive-v1 browser storage and user-created backups.
const arrivalChoices = {
  low:{label:'A bit low',theme:'Confidence',reply:'A little encouragement, at your pace.'},
  scattered:{label:'Scattered',theme:'Focus',reply:'One thing at a time is a place to start.'},
  stuck:{label:'Feeling stuck',theme:'Resilience',reply:'Let’s look for a manageable way forward.'},
  curious:{label:'Ready to grow',theme:'Growth',reply:'Make a little room for curiosity.'},
  overwhelmed:{label:'Need some calm',theme:'Calm',reply:'Nothing to prove here. Take a little space.'}
};
const actionIdeas = {
  Confidence:['Name one contribution you made today, even if nobody noticed.','Write one preference you want to express kindly.','Keep one encouraging message somewhere you can find it.','Give yourself credit for one thing you prepared for.','Ask one clear question instead of guessing what is expected.'],
  Focus:['Choose one task and write what finished would look like.','Put one distraction out of reach for your next short work session.','Give an unfinished task a clear next instruction.','Prepare the materials for one manageable beginning.','Decide which request can wait while you finish your priority.'],
  Resilience:['Name one part of today that you can make easier.','Ask someone for one specific kind of help.','Adjust one commitment to fit the time and energy you have.','Write down a useful option that is still available.','Choose one small comfort to accompany a difficult task.'],
  Growth:['Try one small part of a skill you are curious about.','Write a question you would like to understand better.','Compare two attempts and notice one useful change.','Ask someone how they learned to do something you admire.','Use one idea you recently learned in an ordinary task.'],
  Calm:['Spend a minute enjoying something without recording it.','Let one comfortable moment remain free of a to-do list.','Listen to the end of a favorite song before starting another task.','Give yourself an unhurried transition between two activities.','Look for one ordinary detail that you find beautiful.']
};
function cleanCompanion(raw,strict=false,mapIds=ids=>ids,validIds=new Set(allQuotes().map(q=>q.id))){
  const source=raw&&typeof raw==='object'&&!Array.isArray(raw)?raw:{};
  if(strict&&(!raw||typeof raw!=='object'||Array.isArray(raw)))throw Error('The personal-space backup could not be read.');
  if(strict&&source.why!==undefined&&(typeof source.why!=='string'||source.why.length>240))throw Error('The personal reason in this backup is invalid.');
  const journal={};
  if(strict&&source.journal!==undefined&&(!source.journal||typeof source.journal!=='object'||Array.isArray(source.journal)))throw Error('The reflections in this backup are invalid.');
  for(const [day,entry] of Object.entries(source.journal||{})){
    const valid=validDay(day)&&entry&&typeof entry==='object'&&!Array.isArray(entry)&&(entry.mood===undefined||entry.mood===''||Object.hasOwn(arrivalChoices,entry.mood))&&(entry.note===undefined||(typeof entry.note==='string'&&entry.note.length<=500));
    if(!valid){if(strict)throw Error('This backup contains an invalid reflection.');continue;}
    journal[day]={mood:entry.mood||'',note:entry.note||''};
  }
  const recent=Array.isArray(source.recent)?[...new Set(mapIds(source.recent.filter(id=>typeof id==='string')))].filter(id=>validIds.has(id)).slice(0,30):[];
  return {why:typeof source.why==='string'?source.why.slice(0,240):'',recent,journal:Object.fromEntries(Object.entries(journal).sort(([a],[b])=>b.localeCompare(a)).slice(0,90))};
}
function mergeCompanionBackup(incoming,mapIds,validIds){
  const imported=cleanCompanion(incoming,true,mapIds,validIds);
  const local=state.companion;
  const journal={...imported.journal,...local.journal};
  for(const [day,entry]of Object.entries(local.journal))if(imported.journal[day])journal[day]={mood:entry.mood||imported.journal[day].mood,note:entry.note||imported.journal[day].note};
  // Remapped personal IDs are already validated by the main backup merger.
  return {why:local.why||imported.why,recent:[...new Set([...local.recent,...imported.recent])].slice(0,30),journal:Object.fromEntries(Object.entries(journal).sort(([a],[b])=>b.localeCompare(a)).slice(0,90))};
}
state.companion=cleanCompanion(state.companion);
if(!state.companion.recent.length)state.companion.recent=state.seen.slice(-30).reverse();
let actionQuoteID=null;
let actionIndex=0;
function personalInterfaceDate(node,date,options){const language=state.studio?.language;const locale=language==='es'?'es-ES':language==='fr'?'fr-FR':'en-US';node.textContent=date.toLocaleDateString(locale,options);node.setAttribute('lang',['es','fr'].includes(language)?language:'en');}
function renderPersonalSpace(){
  if(state.companion.why){$('personal-why-text').textContent=state.companion.why;$('personal-why-text').setAttribute('lang','en');}else appInterfaceNode('personal-why-text','A reason to keep showing up, in your own words.');
  $('personal-why-text').hidden=!state.companion.why;
  appInterfaceNode('edit-why',state.companion.why?'Edit my why':'Add my why');
  const today=state.companion.journal[dayKey()]||{};
  for(const key of Object.keys(arrivalChoices))$('arrival-'+key).setAttribute('aria-pressed',String(today.mood===key));
  appInterfaceNode('arrival-feedback',arrivalChoices[today.mood]?.reply||'Choose a starting point, or go straight to your quotes.');
  appInterfaceNode('reflection-summary',today.note?'Your reflection for today is saved.':'A few words about what mattered today.');
}
function renderActionIdea(){
  const theme=actionIdeas[current.category]?current.category:'Growth';
  const tailored=typeof motiveTailoredAction==='function'?motiveTailoredAction(current):null;const ideas=tailored?[tailored,...actionIdeas[theme]]:actionIdeas[theme];
  appInterfaceNode('action-idea',ideas[actionIndex%ideas.length]);
}
function companionQuoteChanged(quote=current){
  state.companion.recent=[quote.id,...state.companion.recent.filter(id=>id!==quote.id)].slice(0,30);
  if(actionQuoteID!==quote.id){actionQuoteID=quote.id;actionIndex=0;}
  renderActionIdea();persist();
}
function chooseArrival(key){
  if(!Object.hasOwn(arrivalChoices,key))return;
  const today=dayKey();state.companion.journal[today]={...(state.companion.journal[today]||{note:''}),mood:key};
  state.companion=cleanCompanion(state.companion);
  category=arrivalChoices[key].theme;
  for(const filter of document.querySelectorAll('.filter')){const active=filter.dataset.category===category;filter.classList.toggle('active',active);filter.setAttribute('aria-pressed',String(active));}
  showQuote(nextQuote());renderCollection();renderPersonalSpace();persist();
}
for(const key of Object.keys(arrivalChoices))$('arrival-'+key).addEventListener('click',()=>chooseArrival(key));
$('edit-why').addEventListener('click',()=>{$('personal-why-input').value=state.companion.why;$('why-dialog').showModal();$('personal-why-input').focus();});
$('close-why').addEventListener('click',()=>$('why-dialog').close());
$('why-form').addEventListener('submit',event=>{event.preventDefault();state.companion.why=$('personal-why-input').value.trim().slice(0,240);persist();renderPersonalSpace();$('why-dialog').close();personalInterfaceToast('Your reason is saved on this device.');});
$('another-action').addEventListener('click',()=>{actionIndex++;renderActionIdea();});
$('use-action').addEventListener('click',()=>{$('intention-input').value=$('action-idea').textContent;$('intention-input').focus();$('intention-input').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});personalInterfaceToast('Review your intention, then tap the arrow to save it.');});
function renderRecentQuotes(){
  const quotes=new Map(allQuotes().map(q=>[q.id,q]));const list=$('recent-quotes');list.replaceChildren();
  const recent=state.companion.recent.map(id=>quotes.get(id)).filter(Boolean);
  $('recent-empty').hidden=recent.length>0;
  for(const quote of recent){
    const item=document.createElement('article');item.className='recent-item';
    const theme=document.createElement('small');const categoryLabel=appInterface(quote.category);theme.textContent=categoryLabel.text;theme.setAttribute('lang',categoryLabel.language);
    const words=document.createElement('p');const shown=typeof presentMotiveQuote==='function'?presentMotiveQuote(quote):{...quote,language:'en'};words.textContent=shown.text;words.setAttribute('lang',shown.language);
    const button=document.createElement('button');button.className='outline-button';const label=appInterface(quote.id===current.id?'Reading now':'Read again');button.textContent=label.text;button.setAttribute('lang',label.language);button.disabled=quote.id===current.id;
    button.addEventListener('click',()=>{category='All';for(const filter of document.querySelectorAll('.filter')){const active=filter.dataset.category==='All';filter.classList.toggle('active',active);filter.setAttribute('aria-pressed',String(active));}showQuote(quote,{revisit:true});renderCollection();$('recent-dialog').close();$('quote-card').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});personalInterfaceToast('Revisited. Your new-quote rotation is kept.');});
    item.append(theme,words,button);list.append(item);
  }
}
$('recent-button').addEventListener('click',()=>{renderRecentQuotes();$('recent-dialog').showModal();});
$('close-recent').addEventListener('click',()=>$('recent-dialog').close());
function renderReflectionView(){
  personalInterfaceDate($('reflection-date'),new Date(),{month:'long',day:'numeric',year:'numeric'});
  $('past-reflections').replaceChildren();
  for(const [day,entry]of Object.entries(state.companion.journal).filter(([day,entry])=>day!==dayKey()&&entry.note).sort(([a],[b])=>b.localeCompare(a)).slice(0,7)){
    const article=document.createElement('article');article.className='recent-item';const date=document.createElement('small');personalInterfaceDate(date,new Date(day+'T12:00:00'),{month:'short',day:'numeric'});const note=document.createElement('p');note.textContent=entry.note;note.setAttribute('lang','en');article.append(date,note);$('past-reflections').append(article);
  }
}
function openReflection(){
  $('reflection-input').value=state.companion.journal[dayKey()]?.note||'';
  personalInterfaceNode('reflection-status','');renderReflectionView();$('reflection-dialog').showModal();
}
$('reflection-button').addEventListener('click',openReflection);
$('close-reflection').addEventListener('click',()=>$('reflection-dialog').close());
$('reflection-form').addEventListener('submit',event=>{event.preventDefault();const today=dayKey();state.companion.journal[today]={...(state.companion.journal[today]||{mood:''}),note:$('reflection-input').value.trim().slice(0,500)};state.companion=cleanCompanion(state.companion);persist();renderPersonalSpace();personalInterfaceNode('reflection-status','Saved on this device. Included when you download a backup.');});
document.addEventListener('visibilitychange',()=>{if(!document.hidden)renderPersonalSpace();});
renderPersonalSpace();companionQuoteChanged();
