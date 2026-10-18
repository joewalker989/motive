'use strict';
// Original reminders, deliberately free of unverified celebrity attributions.
const reminders = [
  ['You don’t need to see the whole staircase. Just make your next step a kind one.', 'Resilience'],
  ['You are allowed to be a beginner and still be someone worth believing in.', 'Confidence'],
  ['A little progress, repeated, can become a life you’re proud of.', 'Growth'],
  ['Give your attention to the next useful thing. The rest can wait a moment.', 'Focus'],
  ['Rest is part of the rhythm. You don’t have to earn a softer day.', 'Calm'],
  ['You’ve made it through uncertain days before. Take this one a step at a time.', 'Resilience'],
  ['Your voice does not have to be the loudest to deserve a place in the room.', 'Confidence'],
  ['Build a habit small enough to keep on an ordinary Tuesday.', 'Focus'],
  ['You can appreciate where you are and still be curious about what comes next.', 'Growth'],
  ['Loosen your shoulders. Take a breath. This moment only asks you to be here.', 'Calm'],
  ['Starting again is a skill. Every return is a little act of courage.', 'Resilience'],
  ['Your pace is allowed to look different from someone else’s.', 'Confidence'],
  ['Protect a little time for what matters, and let that be enough for today.', 'Focus'],
  ['Try the thing. Learn a little. Adjust. You’re allowed to grow as you go.', 'Growth'],
  ['Not every thought needs an answer. Some can pass like clouds.', 'Calm'],
  ['A hard chapter can be part of your story without becoming the whole story.', 'Resilience'],
  ['You don’t have to feel fearless to take one brave step.', 'Confidence'],
  ['Make the next action clear enough that you can begin before you feel ready.', 'Focus'],
  ['Notice what is getting easier. Quiet progress is still progress.', 'Growth'],
  ['Leave a little space in your day for simply being a person.', 'Calm'],
  ['Showing up imperfectly still gives tomorrow something to build on.', 'Resilience'],
  ['Let your own values have a louder vote than someone else’s expectations.', 'Confidence'],
  ['You can do one thing well without doing everything at once.', 'Focus'],
  ['Change can start with one honest question and a little willingness.', 'Growth'],
  ['Some days, enough is a meal, a breath, and a little kindness to yourself.', 'Calm'],
  ['Make a little room for possibility. You haven’t met every good day yet.', 'Resilience'],
  ['Practice trusting the person who keeps choosing to try: you.', 'Confidence'],
  ['Begin with five honest minutes. Small beginnings count.', 'Focus'],
  ['You can outgrow an old version of yourself with gratitude, not shame.', 'Growth'],
  ['Come back to what is here: your breath, your feet, this small moment.', 'Calm']
].map(([text, category], index) => ({id: `motive-${index + 1}`, text, category, author: 'A Motive reminder'})).concat(extraReminders,dailyReminders);
const $ = id => document.getElementById(id);
const categories = ['All', 'Confidence', 'Focus', 'Resilience', 'Growth', 'Calm'];
let storageAvailable = true;
let state;
try { state = JSON.parse(localStorage.getItem('motive-v1') || '{}'); } catch { state = {}; storageAvailable = false; }
if (!state || typeof state !== 'object' || Array.isArray(state)) state = {};
state.name = typeof state.name === 'string' ? state.name.slice(0, 35) : '';
state.custom = Array.isArray(state.custom) ? state.custom.filter(q => q && typeof q.id === 'string' && q.id.startsWith('personal-') && typeof q.text === 'string' && q.text.trim() && typeof q.author === 'string' && categories.includes(q.category) && q.category !== 'All').map(q => ({...q, text: q.text.slice(0,400), author: q.author.slice(0,60)})) : [];
state.saved = Array.isArray(state.saved) ? [...new Set(state.saved.filter(id => typeof id === 'string'))] : [];
state.intention = state.intention && typeof state.intention === 'object' ? state.intention : {};
state.seen = Array.isArray(state.seen) ? [...new Set(state.seen.filter(id => typeof id === 'string'))] : [];
state.freshOnOpen = state.freshOnOpen !== false;
let category = 'All';
let savedView = false;
let collectionMode = 'featured';
let searchTerm = '';
let visibleLimit = 12;
let editingQuoteId = null;
const dayKey = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; };
let currentDay = dayKey();
let current;
let pendingDelete = null;
let toastTimer;
function allQuotes() { return uniqueQuotes([...reminders, ...state.custom]); }
function persist() { try { localStorage.setItem('motive-v1', JSON.stringify(state)); } catch { storageAvailable = false; toast('Browser storage is unavailable. Changes last for this visit only.'); } if (typeof updateStats === 'function') updateStats(); }
function toast(message) { $('toast').textContent = message; $('toast').classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => $('toast').classList.remove('show'), 3500); }
function nextQuote(theme = category) {
  const pool = allQuotes().filter(q => theme === 'All' || q.category === theme);
  const result = pickUnseenQuote(pool, state.seen, current?.id || state.currentQuote?.id);
  state.seen = result.history;
  return result.quote;
}
function dailyQuote() {
  const existing = state.daily?.day === dayKey() && allQuotes().find(q => q.id === state.daily.id);
  if (existing) return existing;
  const quote = nextQuote('All');
  state.daily = {day: dayKey(), id: quote.id};
  return quote;
}
function updateGreeting() {
  $('date-label').textContent = new Date().toLocaleDateString(undefined, {weekday:'long', month:'long', day:'numeric'}).toUpperCase();
  $('greeting').textContent = state.name ? `A little inspiration for you, ${state.name}.` : 'Make room for a little inspiration.';
  $('profile-button').textContent = state.name ? [...state.name][0].toUpperCase() : 'Y';
}
function showQuote(quote) {
  current = quote;
  $('quote-text').textContent = quote.text;
  $('quote-author').textContent = quote.author;
  $('quote-category').textContent = category === 'All' && state.daily?.day === dayKey() && quote.id === state.daily.id ? 'YOUR DAILY REMINDER' : quote.category.toUpperCase();
  if (!state.seen.includes(quote.id)) state.seen.push(quote.id);
  state.currentQuote = {day: dayKey(), id: quote.id, category};
  const pool = allQuotes().filter(q => category === 'All' || q.category === category);
  $('quote-position').textContent = `${pool.filter(q => state.seen.includes(q.id)).length} of ${pool.length} explored · No repeats until the set is complete`;
  persist();
  updateSave();
}
function updateSave() {
  const saved = state.saved.includes(current.id);
  $('save-button').setAttribute('aria-pressed', String(saved));
  $('save-button').replaceChildren(document.createTextNode(saved ? '♥ ' : '♡ '));
  const label = document.createElement('span'); label.textContent = saved ? 'Saved' : 'Save quote'; $('save-button').append(label);
  $('saved-count').textContent = allQuotes().filter(q => state.saved.includes(q.id)).length;
}
function toggleSave(id) { state.saved = state.saved.includes(id) ? state.saved.filter(q => q !== id) : [...state.saved, id]; persist(); updateSave(); renderCollection(); }
function renderCollection() {
  const grid = $('quote-grid'); grid.replaceChildren();
  $('collection-title').textContent = savedView ? 'Words worth coming back to.' : 'Your own kind of motivation.';
  $('collection-description').textContent = savedView ? 'All your saved reminders, together in one place.' : 'Keep the words that matter close. Add a reminder in your own voice.';
  const matchesCategory = q => category === 'All' || q.category === category;
  const customCollection = (state.collections || []).find(c => c.id === collectionMode);
  let quotes;
  if (collectionMode === 'saved') quotes = allQuotes().filter(q => state.saved.includes(q.id));
  else if (collectionMode === 'personal') quotes = allQuotes().filter(q => q.id.startsWith('personal-'));
  else if (customCollection) quotes = allQuotes().filter(q => customCollection.quoteIds.includes(q.id));
  else if (collectionMode === 'all' || searchTerm) quotes = allQuotes();
  else quotes = [...state.custom.slice().reverse(), ...reminders.slice(0,3)];
  quotes = quotes.filter(q => matchesCategory(q) && `${q.text} ${q.author} ${q.category}`.toLowerCase().includes(searchTerm.toLowerCase()));
  if (customCollection) $('collection-title').textContent = customCollection.name;
  else if (collectionMode === 'all' || searchTerm) $('collection-title').textContent = 'Find the words you need.';
  else if (collectionMode === 'personal') $('collection-title').textContent = 'A reminder, in your words.';
  $('results-count').textContent = `${quotes.length} ${quotes.length === 1 ? 'quote' : 'quotes'}${category !== 'All' ? ` · ${category}` : ''}`;
  $('load-more').hidden = quotes.length <= visibleLimit;
  $('remove-collection').hidden = !customCollection;
  if (!quotes.length) { const empty = document.createElement('div'); empty.className = 'empty-state'; empty.textContent = searchTerm ? 'No matching words yet. Try another search or a different theme.' : 'No quotes here yet. Save a quote or add your own words to begin.'; grid.append(empty); }
  for (const quote of quotes.slice(0,visibleLimit)) {
    const card = document.createElement('article'); card.className = 'mini-card';
    const label = document.createElement('span'); label.className = 'mini-label'; label.textContent = quote.category.toUpperCase();
    const text = document.createElement('p'); text.textContent = `“${quote.text}”`;
    const bottom = document.createElement('div'); bottom.className = 'mini-bottom';
    const author = document.createElement('small'); author.textContent = quote.author;
    const actions = document.createElement('div'); actions.className = 'mini-actions';
    const save = document.createElement('button'); const isSaved = state.saved.includes(quote.id); save.textContent = isSaved ? '♥' : '♡'; save.setAttribute('aria-label', `${isSaved ? 'Unsave' : 'Save'} quote: ${quote.text}`); save.setAttribute('aria-pressed', String(isSaved)); save.addEventListener('click', () => toggleSave(quote.id)); actions.append(save);
    const organize = document.createElement('button'); organize.textContent = '+'; organize.setAttribute('aria-label', `Organize quote: ${quote.text}`); organize.addEventListener('click', () => { if(typeof openCollection === 'function') openCollection(quote); }); actions.append(organize);
    if(customCollection) { const ungroup = document.createElement('button'); ungroup.textContent = '−'; ungroup.setAttribute('aria-label', `Remove quote from collection: ${quote.text}`); ungroup.addEventListener('click',()=>{customCollection.quoteIds=customCollection.quoteIds.filter(id=>id!==quote.id);persist();renderCollection();});actions.append(ungroup); }
    if(quote.id.startsWith('personal-')) { const edit=document.createElement('button');edit.textContent='✎';edit.setAttribute('aria-label',`Edit personal quote: ${quote.text}`);edit.addEventListener('click',()=>{editingQuoteId=quote.id;$('new-quote').value=quote.text;$('new-author').value=quote.author;$('new-category').value=quote.category;$('new-quote').setCustomValidity('');$('quote-dialog-title').textContent='Make these words yours again.';$('quote-dialog').showModal();});actions.append(edit); }
    if (quote.id.startsWith('personal-')) { const remove = document.createElement('button'); remove.textContent = '×'; remove.setAttribute('aria-label', `Delete personal quote: ${quote.text}`); remove.addEventListener('click', () => { pendingDelete = quote.id; $('delete-dialog').showModal(); }); actions.append(remove); }
    bottom.append(author, actions); card.append(label, text, bottom); grid.append(card);
  }
}
function setView(saved) { savedView = saved; collectionMode=saved?'saved':'featured';visibleLimit=12;searchTerm='';$('quote-search').value='';$('library-mode').value=collectionMode; $('today-tab').classList.toggle('active', !saved); $('saved-tab').classList.toggle('active', saved); $('today-tab').setAttribute('aria-current', saved ? 'false' : 'page'); $('saved-tab').setAttribute('aria-current', saved ? 'page' : 'false'); renderCollection(); if (saved) $('collection-title').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',block:'center'}); }
$('filters').addEventListener('click', event => { const button = event.target.closest('button[data-category]'); if (!button || category === button.dataset.category) return; category = button.dataset.category; for (const filter of document.querySelectorAll('.filter')) { const active = filter === button; filter.classList.toggle('active', active); filter.setAttribute('aria-pressed', String(active)); } showQuote(nextQuote()); renderCollection(); });
$('next-button').addEventListener('click', () => showQuote(nextQuote()));
$('save-button').addEventListener('click', () => toggleSave(current.id));
$('today-tab').addEventListener('click', () => setView(false)); $('saved-tab').addEventListener('click', () => setView(true));
$('copy-button').addEventListener('click', async () => { const text = `“${current.text}” — ${current.author}`; try { if (!navigator.clipboard?.writeText) throw Error('Clipboard unavailable'); await navigator.clipboard.writeText(text); toast('Copied. Carry a little inspiration with you.'); } catch { const field = document.createElement('textarea'); field.value = text; field.style.cssText = 'position:fixed;left:-9999px'; document.body.append(field); field.select(); try { const success = document.execCommand('copy'); toast(success ? 'Quote copied.' : 'Select the quote text to copy it.'); } catch { toast('Select the quote text to copy it.'); } field.remove(); } });
$('add-button').addEventListener('click', () => { editingQuoteId=null;$('quote-form').reset();$('new-quote').setCustomValidity('');$('quote-dialog-title').textContent='A reminder, in your words.';$('quote-dialog').showModal(); $('new-quote').focus(); });
$('close-dialog').addEventListener('click', () => $('quote-dialog').close());
$('quote-form').addEventListener('submit', event => { event.preventDefault(); const text = $('new-quote').value.trim(); if (!text || allQuotes().some(q => q.id!==editingQuoteId && quoteKey(q.text) === quoteKey(text))) { $('new-quote').setCustomValidity(text ? 'These words are already in your library. Try a different reminder.' : 'Add a few words for your reminder.'); $('new-quote').reportValidity(); return; } const quote = {id:editingQuoteId||`personal-${Date.now()}-${Math.random().toString(36).slice(2,9)}`, text, author:$('new-author').value.trim() || 'A note to myself', category:$('new-category').value}; if(editingQuoteId) state.custom=state.custom.map(q=>q.id===editingQuoteId?quote:q);else state.custom.push(quote); if(!state.saved.includes(quote.id))state.saved.push(quote.id);editingQuoteId=null; persist(); category = 'All'; for (const filter of document.querySelectorAll('.filter')) { const active = filter.dataset.category === 'All'; filter.classList.toggle('active',active); filter.setAttribute('aria-pressed',String(active)); } showQuote(quote); renderCollection(); $('quote-dialog').close(); $('quote-form').reset(); if (storageAvailable) toast('Your words have a home here.'); });
$('new-quote').addEventListener('input', () => $('new-quote').setCustomValidity(''));
$('cancel-delete').addEventListener('click', () => { pendingDelete = null; $('delete-dialog').close(); });
$('confirm-delete').addEventListener('click', () => { const id = pendingDelete; state.custom = state.custom.filter(q => q.id !== id); state.saved = state.saved.filter(savedId => savedId !== id); for(const c of state.collections||[])c.quoteIds=c.quoteIds.filter(qid=>qid!==id);persist(); if (current.id === id) showQuote(nextQuote()); updateSave(); renderCollection(); $('delete-dialog').close(); pendingDelete = null; });
$('profile-button').addEventListener('click', () => { $('name-input').value = state.name; $('profile-dialog').showModal(); $('name-input').focus(); });
$('close-profile').addEventListener('click', () => $('profile-dialog').close());
$('profile-form').addEventListener('submit', event => { event.preventDefault(); state.name = $('name-input').value.trim(); persist(); updateGreeting(); $('profile-dialog').close(); });
$('intention-form').addEventListener('submit', event => { event.preventDefault(); const text = $('intention-input').value.trim(); state.intention = {day:dayKey(), text}; persist(); $('intention-status').textContent = text ? (storageAvailable ? 'A small promise to yourself. Saved for today.' : 'Kept for this visit. Browser storage is unavailable.') : ''; });
function loadIntention() { const today = state.intention.day === dayKey() && typeof state.intention.text === 'string'; $('intention-input').value = today ? state.intention.text : ''; $('intention-status').textContent = today && state.intention.text ? 'A small promise to yourself. Saved for today.' : ''; }
document.addEventListener('visibilitychange', () => { if (!document.hidden) {if(currentDay !== dayKey()){currentDay = dayKey(); updateGreeting(); loadIntention();showQuote(category==='All'?dailyQuote():nextQuote());}else if(state.freshOnOpen)showQuote(nextQuote());} });
const restoredQuote = !state.freshOnOpen && state.currentQuote?.day === dayKey() && allQuotes().find(q => q.id === state.currentQuote.id);
if (restoredQuote && categories.includes(state.currentQuote.category)) category = state.currentQuote.category;
updateGreeting(); loadIntention(); showQuote(restoredQuote || (state.daily?.day===dayKey()?nextQuote():dailyQuote())); setView(false);
for (const filter of document.querySelectorAll('.filter')) { const active = filter.dataset.category === category; filter.classList.toggle('active',active); filter.setAttribute('aria-pressed',String(active)); }
if (!storageAvailable) toast('Browser storage is unavailable. Changes last for this visit only.');
