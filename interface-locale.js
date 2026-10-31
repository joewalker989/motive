'use strict';
// Only named built-in controls are eligible. Never walk or translate record content.
function motiveInterfaceLanguage(){return ['es','fr'].includes(studioPrefs.language)?studioPrefs.language:'en';}
function motiveInterfaceLeaf(node,scope){if(!node)return;const language=motiveInterfaceLanguage(),parts=Array.from(node.childNodes||[]).filter(n=>n.nodeType===3);let actual='en';function word(value){const trimmed=value.trim();if(!trimmed)return value;const source=motiveInterfaceSource(trimmed,scope),result=motiveInterfaceText(source,language,scope);if(result.language!=='en')actual=result.language;return value.slice(0,value.length-value.trimStart().length)+result.text+value.slice(value.trimEnd().length);}if(parts.length){for(const part of parts){const next=word(part.nodeValue||'');if(next!==part.nodeValue)part.nodeValue=next;}}else if(!(node.children?.length)){const next=word(node.textContent||'');if(next!==node.textContent)node.textContent=next;}node.setAttribute('lang',actual);}
function motiveInterfaceAttribute(node,attribute){if(!node)return;const value=node.getAttribute?.(attribute);if(!value)return;const source=motiveInterfaceSource(value),result=motiveInterfaceText(source,motiveInterfaceLanguage());if(result.text!==value)node.setAttribute(attribute,result.text);}
const motiveInterfaceControls=['today-tab','saved-tab','nav-wellbeing','nav-practice','nav-space','settings-button','quote-category','next-button','share-button','image-button','wallpaper-button','recent-button','hide-quote','undo-hide','background-button','change-picture-button','auto-picture-button','scene-options-button','organize-button','breathe-button','photo-retry','photo-use-plain','speak-quote','quote-speech-stop','speech-retry','speech-help','voice-options','listen-voice-options','voice-heading','voice-preview','voice-read-current','voice-stop','voice-reset','speaker-test','reading-pitch-value','voice-choice-note','audio-language-note','voice-intro','voice-trouble-heading','voice-recovery-guide','sound-check-heading','sound-check-guide','sound-check-start','sound-check-heard','sound-check-silent','hero-copy','hero-note','filter-heading','library-heading','library-search-note','add-button','browse-button','remove-collection','load-more','quote-dialog-title','quote-submit','profile-heading','profile-submit','delete-heading','delete-copy','cancel-delete','confirm-delete','filter-scroll-hint','arrival-eyebrow','arrival-hint','action-eyebrow','intention-heading','intention-copy','reflection-eyebrow','reflection-prompt-heading','why-copy','why-note','why-submit','recent-copy','reflection-note','reflection-submit','past-reflections-heading','past-reflections-note','collection-submit','remove-collection-copy','arrival-heading','arrival-low','arrival-scattered','arrival-stuck','arrival-curious','arrival-overwhelmed','why-heading','action-heading','use-action','another-action','reflection-button','why-dialog-heading','recent-heading','recent-empty','reflection-heading','collection-heading','remove-collection-heading','cancel-remove-collection','confirm-remove-collection','background-intro','background-darkness-note','gallery-heading','picture-kinds-heading','picture-kinds-submit','image-cooldown-note','image-make-heading','image-readable-note','image-position-note','image-design-heading','image-presets-note','background-heading','image-pin','image-unpin','image-preset-save','image-preset-apply','image-studio-download','image-studio-wallpaper','simple-home-heading','simple-home-note','tour-start','tour-skip','tour-back','image-studio-open','preferences-heading','preferences-themes-heading','preferences-note','preferences-submit','quote-explanation-heading','pair-heading','pair-note','favorite-revisit-heading','related-heading','related-note','preferences-source-note','restore-hidden','reset-preferences','quote-note-save','quote-link','pair-i','pair-you','pair-read','favorite-revisit-open','motive-search-note','motive-search-submit','quote-pack-heading','quote-pack-note','quote-report-heading','quote-report-help','home-privacy-note','footer-note','footer-everyday','motive-search-language-note','motive-search-heading','motive-search-more','quote-pack-print','quote-report-save'];
const motiveInterfaceStatuses=new Set(['quote-speech-status','voice-status','voice-availability','speaker-status','sound-check-status']);
function renderMotiveInterfaceNavigation(){for(const node of document.querySelectorAll('[data-motive-destination]'))if(typeof motiveDestinations!=='undefined'&&motiveDestinations.some(([key])=>key===node.dataset.motiveDestination))motiveInterfaceLeaf(node);for(const node of document.querySelectorAll('#primary-navigation, .motive-area-navigation')){motiveInterfaceAttribute(node,'aria-label');node.setAttribute('lang',motiveInterfaceLanguage());}}
function renderMotiveInterfaceSave(){const button=$('save-button'),span=button?.querySelector?.('span')||Array.from(button?.children||[]).find(n=>['Saved','Save quote','Guardada','Enregistrée','Guardar cita','Enregistrer la citation'].includes(n.textContent));motiveInterfaceLeaf(span,'save-state');if(span)button.setAttribute('lang',span.getAttribute?.('lang')||motiveInterfaceLanguage());}
function renderMotiveInterfaceVoiceOptions(){for(const id of ['reading-voice','audio-language-voice'])for(const option of Array.from($(id)?.options||[]))if(option.value==='')motiveInterfaceLeaf(option);}
function renderMotiveInterfaceStatus(id,source){const node=$(id);if(!node)return;node.dataset.motiveUiSource=source;const result=motiveInterfaceMessage(source,motiveInterfaceLanguage(),id);node.textContent=result.text;node.setAttribute('lang',result.language);}
function renderMotiveInterfacePosition(){const node=$('quote-position');if(!node)return;const english=/^\d+ of \d+ explored · No repeats until the set is complete$/;const source=english.test(node.textContent)?node.textContent:node.dataset.motiveUiSource||node.textContent;if(english.test(source)){node.dataset.motiveUiSource=source;const result=motiveInterfaceMessage(source,motiveInterfaceLanguage(),'quote-position');node.textContent=result.text;node.setAttribute('lang',result.language);}}
const motiveInterfaceSelects={
 "gallery-filter":{"all": "All subjects", "favorites": "My photo favorites", "scenery": "Scenery", "object": "Objects", "people": "People", "craft": "Creative work", "animal": "Animals", "abstract": "Abstract artwork"},
 "image-cooldown":{"0": "Only the usual consecutive-picture rule", "1": "Last picture", "3": "Last 3 pictures", "5": "Last 5 pictures", "9": "Last 9 pictures"},
 "image-size":{"portrait": "Portrait · 1080 × 1350", "square": "Square · 1080 × 1080", "story": "Story · 1080 × 1920", "wide": "Wide · 1600 × 900"},
 "image-format":{"image/webp": "WebP · where supported"},
 "prefer-tone":{"all": "A mix of styles", "gentle": "Gentler reminders", "direct": "Direct, practical prompts"},
 "prefer-length":{"all": "Any length", "short": "Short · up to 12 words", "medium": "Medium · 13–23 words", "long": "Longer · 24 words or more"},
 "prefer-pack":{"all": "Everyday encouragement", "starting": "Starting something", "setback": "After a setback", "busy": "A busy day", "selftrust": "Trusting yourself", "rest": "Making room to rest", "change": "A season of change"},
 "motive-search-kind":{"all": "All included areas", "quote": "Quotes", "collection": "Collections", "recording": "Recording names", "habit": "Habit names", "tool": "Motive tools", "journal": "Journal text · opt in below"},
 'new-category':{Confidence:'Confidence',Focus:'Focus',Resilience:'Resilience',Growth:'Growth',Calm:'Calm'},
 'library-mode':{featured:'A few for today',all:'All quotes',saved:'Saved quotes',personal:'My own words'},
 'library-length':{all:'All lengths',short:'Up to 12 words',long:'More than 12 words'}
};
function renderMotiveInterfaceSelects(){for(const [id,choices]of Object.entries(motiveInterfaceSelects)){for(const option of Array.from($(id)?.options||[])){let value=option.getAttribute?.('value');if(value==null&&id==='new-category'){const source=motiveInterfaceSource(option.textContent.trim());value=Object.keys(choices).find(key=>choices[key]===source);if(value)option.value=value;}const source=choices[value];if(!source)continue;if(motiveInterfaceSource(option.textContent.trim())!==source){option.setAttribute('lang','en');continue;}const result=motiveInterfaceText(source,motiveInterfaceLanguage());option.textContent=result.text;option.setAttribute('lang',result.language);}}}
function renderMotiveInterfaceLibrary(){updateGreeting();for(const id of ['quote-search','library-mode','library-length','new-quote','new-author','new-category','name-input'])motiveInterfaceLeaf(document.querySelector('label[for="'+id+'"]'));for(const id of ['new-quote','new-author','name-input'])motiveInterfaceAttribute($(id),'placeholder');for(const id of ['close-dialog','close-profile'])motiveInterfaceAttribute($(id),'aria-label');for(const id of ['accept-similar','library-saved-only']){const label=$(id)?.parentElement;if(label?.setAttribute)motiveInterfaceLeaf(label);}renderMotiveInterfaceSelects();const search=motiveInterfaceFormat('Search all {count} quotes…',motiveInterfaceLanguage(),{count:reminders.length});$('quote-search').setAttribute('placeholder',search.text);motiveInterfaceAttribute($('filter-scroll'),'aria-label');if(typeof syncFilterScroll==='function')syncFilterScroll();}
function renderMotiveInterfacePersonal(){
 for(const id of ['personal-why-input','intention-input','reflection-input','collection-picker','collection-name'])motiveInterfaceLeaf(document.querySelector('label[for="'+id+'"]'));
 for(const id of ['personal-why-input','intention-input','reflection-input','collection-name'])motiveInterfaceAttribute($(id),'placeholder');
 for(const id of ['close-why','close-reflection','close-recent','close-collection','intention-submit','arrival-options'])motiveInterfaceAttribute($(id),'aria-label');
 const done=$('intention-done')?.parentElement;if(done?.setAttribute)motiveInterfaceLeaf(done);
 for(const id of ['intention-status','intention-feedback','reflection-status','collection-error']){const source=$(id)?.dataset.motivePersonalSource;if(source!==undefined)appInterfaceNode(id,source);}
 for(const option of Array.from($('collection-picker')?.options||[]))if(option.value==='')motiveInterfaceLeaf(option);
 renderPersonalSpace();renderActionIdea();
 if($('reflection-dialog').open)renderReflectionView();
 if($('recent-dialog').open)renderRecentQuotes();
 if($('collection-dialog').open)renderCollectionPreview();
}
const motivePictureKindLabels={scenery:'Scenery',object:'Objects',people:'People',craft:'Creative work',animal:'Animals',abstract:'Abstract artwork'};
function renderMotiveInterfaceScenes(){
 for(const id of ['background-select','background-darkness','gallery-filter','image-cooldown','image-size','image-format','image-crop-x','image-crop-y','image-text-x','image-text-y','image-preset-name','image-presets'])motiveInterfaceLeaf(document.querySelector('label[for="'+id+'"]'));
 motiveInterfaceAttribute($('close-background'),'aria-label');motiveInterfaceAttribute($('image-studio-preview'),'aria-label');motiveInterfaceAttribute($('image-preset-name'),'placeholder');
 const readable=$('image-readable')?.parentElement;if(readable?.setAttribute)motiveInterfaceLeaf(readable);
 for(const [kind,source]of Object.entries(motivePictureKindLabels)){const input=$('picture-kind-'+kind),label=input?.parentElement;if(label?.setAttribute){for(const child of Array.from(label.childNodes||[]))if(child.nodeType===3){const result=motiveInterfaceText(source,motiveInterfaceLanguage());child.nodeValue=' '+result.text;label.setAttribute('lang',result.language);}}}
 for(const option of Array.from($('background-select')?.options||[])){const key=option.value,scene=quoteScenes[key];if(scene){const words=appSceneWords({...scene,key}),category=appInterface(scene.category);const matched=words.label.language===category.language;option.textContent=matched?words.label.text+' · '+category.text:scene.label+' · '+scene.category;option.setAttribute('lang',matched?category.language:'en');}else if(['auto','rotate','none'].includes(key))motiveInterfaceLeaf(option);}
 for(const option of Array.from($('image-presets')?.options||[]))if(option.value==='')motiveInterfaceLeaf(option);
 const source=$('scene-caption')?.dataset.motiveSceneSource;if(source!==undefined)appInterfaceNode('scene-caption',source);else renderMotiveSceneCaption();
 for(const id of ['image-studio-status','photo-recovery-status']){const source=$(id)?.dataset.motivePersonalSource;if(source!==undefined)appInterfaceNode(id,source);}
 if(typeof renderMotiveImagePin==='function')renderMotiveImagePin();
 if($('background-dialog').open&&typeof renderMotiveGallery==='function')renderMotiveGallery();
}
function renderMotiveInterfaceHome(){
 const simple=$('simple-home')?.parentElement;if(simple?.setAttribute)motiveInterfaceLeaf(simple);
 motiveInterfaceAttribute($('theme-button'),'aria-label');
 if(typeof renderMotiveHome==='function')renderMotiveHome();
 if(typeof renderMotiveTheme==='function')renderMotiveTheme();
 if(typeof renderActivityLabels==='function')renderActivityLabels();
 if($('tour-dialog').open&&typeof renderMotiveTour==='function')renderMotiveTour();
}
function renderMotiveInterfacePreferences(){
 for(const id of ['prefer-tone','prefer-length','prefer-pack','prefer-muted','quote-context-note'])motiveInterfaceLeaf(document.querySelector('label[for="'+id+'"]'));
 for(const id of ['prefer-muted','quote-context-note'])motiveInterfaceAttribute($(id),'placeholder');
 for(const id of ['prefer-Confidence','prefer-Focus','prefer-Resilience','prefer-Growth','prefer-Calm','prefer-revisit']){const label=$(id)?.parentElement;if(label?.setAttribute)motiveInterfaceLeaf(label);}
 if(typeof renderMotivePreferenceLabels==='function')renderMotivePreferenceLabels();
 for(const id of ['preferences-status','preferences-card-status','quote-note-status']){const source=$(id)?.dataset.motivePersonalSource;if(source!==undefined)appInterfaceNode(id,source);}
}
function renderMotiveInterfaceDiscovery(){
 for(const id of ['motive-search-query','motive-search-kind','quote-report-note'])motiveInterfaceLeaf(document.querySelector('label[for="'+id+'"]'));
 motiveInterfaceAttribute($('close-motive-search'),'aria-label');
 for(const id of ['search-journal','print-personal']){const label=$(id)?.parentElement;if(label?.setAttribute)motiveInterfaceLeaf(label);}
 for(const button of document.querySelectorAll('button[data-motive-search-trigger]'))motiveInterfaceLeaf(button);
 if($('motive-search-dialog').open&&typeof renderMotiveSearch==='function')renderMotiveSearch(true);
 if(typeof refreshMotiveDiscoveryMessages==='function')refreshMotiveDiscoveryMessages();
}

const motiveJournalStatusIds=new Set(['journal-status','journal-attachment','practice-draft-status','journal-search-status']);
const motiveJournalStatusSources=new Set(['Some entries use another vault passphrase. Import them on the original device to read them.',"Your journal is encrypted. Unlock it in Settings to read or write.", "Saving again adds another entry. Earlier entries are kept until you delete them.", "Different feelings, without a score. Only days you checked in are shown.", "Deleted entries can be restored until you permanently remove them. Entries deleted before this update may no longer contain recoverable content. Locking the journal also locks its recovery bin.", "Exports contain readable text. Save them somewhere private. Photos and audio stay in full backups.", "Optional text-only recovery on this device, included in full backups. Photos and unsaved voice attachments are not drafts. When journal lock is on, drafts use the same encryption and need unlocking. With lock off, drafts are ordinary local text. Turning recovery off stops future saves; Discard removes the saved recovery draft.", "Unlock the journal before saving.", "Add a few words, a photo, or a voice reflection first.", "Saved on this device.", "Voice reflection ready. Tap Save this moment to keep it.", "Recording… tap Stop when you are ready (maximum 1 minute).", "Recovery words saved on this device.", "Recovery words saved on this device with journal encryption.", "Draft could not be saved. Keep your words in the editor and save the entry.", "Recovery draft discarded. Saved journal entries remain.", "Save or clear the current editor before restoring a draft.", "Unlock the journal to restore its draft.", "No recovery draft is saved.", "Draft restored. Save it as a journal entry when ready.", "Unlock your journal before writing.", "Save the current entry before adding this template.", "Unlock your journal to search, restore, or export.", "Journal locked.", "Readable CSV downloaded.", "Unlock your journal first.", "Choose a valid date."]);
function renderMotiveJournalStatus(id,source){const count=id==='journal-search-status'&&source.match(/^([0-9]+) matching (moments|recoverable deleted entries)$/);const result=count?appInterface('{count} matching '+(count[1]==='1'?(count[2]==='moments'?'moment':'recoverable deleted entry'):count[2]),{count:count[1]}):motiveJournalStatusSources.has(source)?appInterface(source):{text:source,language:'en'};$(id).textContent=result.text;$(id).setAttribute('lang',result.language);$(id).dataset.motiveJournalStatus=source;}
function renderMotiveInterfaceJournal(){
 motiveInterfaceLeaf($('journal-export-language-note'));
 for(const node of document.querySelectorAll('[data-motive-journal-word]'))refreshMotiveJournalWord(node);
 for(const node of document.querySelectorAll('[data-motive-journal-photo]'))if(node.dataset.motiveJournalPhoto==='true')node.setAttribute('alt',appInterface('Your journal photo').text);

 for(const id of ["journal-copy-1", "journal-copy-2", "journal-copy-3", "journal-copy-4", "journal-copy-5", "journal-copy-6", "journal-copy-7", "journal-copy-8", "journal-copy-9", "journal-copy-10", "journal-copy-11", "journal-unlock", "journal-record", "journal-record-stop", "journal-save", "journal-csv", "journal-print", "journal-more", "practice-draft-restore", "practice-draft-discard", "practice-template-use", "practice-review-open"])motiveInterfaceLeaf($(id));
 for(const id of ['journal-photo','journal-search','journal-from','journal-to','practice-template','practice-review-day'])motiveInterfaceLeaf(document.querySelector('label[for="'+id+'"]'));
 for(const id of ['studio-journal-note','journal-search'])motiveInterfaceAttribute($(id),'placeholder');
 for(const id of ['journal-trash','practice-drafts']){const label=$(id)?.parentElement;if(label?.setAttribute)motiveInterfaceLeaf(label);}
 for(const option of Array.from($('practice-template')?.options||[]))if(['notice','kindness','review'].includes(option.value))motiveInterfaceLeaf(option);
 for(const id of motiveJournalStatusIds){const source=$(id)?.dataset.motiveJournalStatus;if(source!==undefined)renderMotiveJournalStatus(id,source);}
}
const baseJournalInterfaceStudioText=studioText;studioText=function(id,text){if(motiveJournalStatusIds.has(id))return renderMotiveJournalStatus(id,text);return baseJournalInterfaceStudioText(id,text);};
const baseJournalInterfaceGrowthMessage=growthMessage;growthMessage=function(id,text){if(motiveJournalStatusIds.has(id))return renderMotiveJournalStatus(id,text);return baseJournalInterfaceGrowthMessage(id,text);};


const motiveMoodStatusSources=new Set(['Add a name and choose a color.','Feeling added to your list.','Choose today or an earlier date.','Choose a feeling.']);
function renderMotiveMoodStatus(source){const saved=source.match(/^Check-in saved for ([0-9]{4}-[0-9]{2}-[0-9]{2})\.$/),result=saved?appInterface('Check-in saved for {day}.',{day:saved[1]}):motiveMoodStatusSources.has(source)?appInterface(source):{text:source,language:'en'};const host=$('mood-status');host.textContent=result.text;host.setAttribute('lang',result.language);host.dataset.motiveMoodStatus=source;}
function renderMotiveInterfaceMoods(){
for(const id of ['growth-title','growth-eyebrow',...Array.from({length:7},(_,i)=>'growth-nav-'+i)])motiveInterfaceLeaf($(id));
motiveInterfaceAttribute($('growth-close'),'aria-label');motiveInterfaceAttribute(document.querySelector('#growth-dialog .studio-tabs'),'aria-label');
 for(const id of ["mood-copy-1", "mood-copy-2", "mood-copy-3", "mood-copy-4", "mood-copy-5", "mood-copy-6", "mood-csv-note", "mood-save", "mood-custom-save", "mood-csv"])motiveInterfaceLeaf($(id));
 for(const id of ['mood-day','mood-choice','mood-activities','mood-label','mood-icon','mood-color','mood-month'])motiveInterfaceLeaf(document.querySelector('label[for="'+id+'"]'));
 motiveInterfaceAttribute($('mood-activities'),'placeholder');const label=$('mood-year')?.parentElement;if(label?.setAttribute)motiveInterfaceLeaf(label);
 refreshMotiveMoodPresentation();const source=$('mood-status')?.dataset.motiveMoodStatus;if(source!==undefined)renderMotiveMoodStatus(source);
}
const baseMoodInterfaceGrowthMessage=growthMessage;growthMessage=function(id,text){if(id==='mood-status')return renderMotiveMoodStatus(text);return baseMoodInterfaceGrowthMessage(id,text);};


function renderMotiveInterfacePracticeHistory(){
 for(const id of ["practice-history-copy-1", "practice-history-copy-2", "practice-history-copy-3", "practice-history-copy-4", "practice-history-copy-5", "practice-history-copy-6", "practice-timeline-refresh", "practice-mood-history"])motiveInterfaceLeaf($(id));
 for(const id of ['practice-quiet','practice-celebrate']){const label=$(id)?.parentElement;if(label?.setAttribute)motiveInterfaceLeaf(label);}
 for(const node of document.querySelectorAll('[data-motive-practice-time]'))if(node.dataset.motivePracticeTime)refreshMotivePracticeTime(node);
}


const motiveHabitStatuses=new Set(['Give your habit a name and a target from 1 to 31.','Choose a repeat period.','Habit added. Keep it small enough to fit your day.','Plan saved. Unplanned days have no penalty.']);
function renderMotiveHabitStatus(id,source){const result=motiveHabitStatuses.has(source)?appInterface(source):{text:source,language:'en'};$(id).textContent=result.text;$(id).setAttribute('lang',result.language);$(id).dataset.motiveHabitStatus=source;}
function renderMotiveInterfaceHabits(){
 for(const id of ["habit-copy-1", "habit-copy-2", "habit-copy-3", "habit-copy-4", "habit-add", "practice-habit-plan-save"])motiveInterfaceLeaf($(id));
 for(const id of ['habit-name','habit-cadence','habit-target','practice-habit','practice-habit-step','practice-habit-trigger'])motiveInterfaceLeaf(document.querySelector('label[for="'+id+'"]'));
 for(const id of ['habit-name','practice-habit-step','practice-habit-trigger'])motiveInterfaceAttribute($(id),'placeholder');
 for(const option of Array.from($('habit-cadence')?.options||[]))if(['daily','weekly','monthly'].includes(option.value))motiveInterfaceLeaf(option);
 for(const id of ['habit-status','practice-habit-status']){const source=$(id)?.dataset.motiveHabitStatus;if(source!==undefined)renderMotiveHabitStatus(id,source);}
 const source=$('practice-celebration')?.dataset.motivePersonalSource;if(source!==undefined)appInterfaceNode('practice-celebration',source);
}
const baseHabitInterfaceGrowthMessage=growthMessage;growthMessage=function(id,text){if(['habit-status','practice-habit-status'].includes(id))return renderMotiveHabitStatus(id,text);return baseHabitInterfaceGrowthMessage(id,text);};


function renderMotiveTagStatus(source){const result=['Tags saved.','Open a quote before saving its tags.'].includes(source)?appInterface(source):{text:source,language:'en'};const host=$('tag-status');host.textContent=result.text;host.setAttribute('lang',result.language);host.dataset.motiveTagStatus=source;}
function renderMotiveInterfaceTags(){
 for(const id of ['tags-heading','tags-privacy','tags-save','tag-more'])motiveInterfaceLeaf($(id));
 for(const id of ['quote-tags','tag-filter']){motiveInterfaceLeaf(document.querySelector('label[for="'+id+'"]'));motiveInterfaceAttribute($(id),'placeholder');}
 for(const node of document.querySelectorAll('[data-motive-tag-quote]'))if(node.dataset.motiveTagQuote)refreshMotiveTagQuote(node);
 const source=$('tag-status')?.dataset.motiveTagStatus;if(source!==undefined)renderMotiveTagStatus(source);
}
const baseTagInterfaceGrowthMessage=growthMessage;growthMessage=function(id,text){if(id==='tag-status')return renderMotiveTagStatus(text);return baseTagInterfaceGrowthMessage(id,text);};


const motiveCalmOptionSources=new Set(['Give these settings a name.','Delete a preset before saving another.','Settings saved.','Preset ready. Press Start session when you are comfortable.','Saved on this device. You can choose a different kind of pause next time.']);
function renderMotiveCalmMessage(id,source){const search=['calm-options-status','session-search-status'].includes(id)&&source.match(/^([0-9]+) session names match\. Your selected session stays selected until you choose another\.$/);const prep=id==='session-status'&&source.match(/^Get comfortable · starting in ([0-9]+) seconds\. Finish cancels\.$/),result=search?appInterface('Matching session names: {count}. Your selected session stays selected until you choose another.',{count:search[1]}):prep?appInterface('Get comfortable · starting in {seconds} '+(prep[1]==='1'?'second':'seconds')+'. Finish cancels.',{seconds:prep[1]}):motiveCalmOptionSources.has(source)?appInterface(source):{text:source,language:'en'};const node=$(id);node.textContent=result.text;node.setAttribute('lang',result.language);node.dataset.motiveCalmSource=source;node.dataset.motiveCalmRendered=result.text;}
function renderMotiveInterfaceCalmOptions(){
 for(const id of ["calm-options-copy-1", "calm-options-copy-2", "calm-options-copy-3", "calm-options-copy-4", "calm-preset-save", "calm-preset-load", "calm-preset-delete"])motiveInterfaceLeaf($(id));
 for(const id of ['calm-minutes','calm-pace','calm-preparation','calm-preset-name','calm-preset'])motiveInterfaceLeaf(document.querySelector('label[for="'+id+'"]'));
 for(const id of ['calm-bell','calm-stages']){const label=$(id)?.parentElement;if(label?.setAttribute)motiveInterfaceLeaf(label);}
 const options={'calm-pace':['natural','3-4','4-4','4-6'],'calm-preparation':['0','3','5','10']};for(const [id,values]of Object.entries(options))for(const option of Array.from($(id)?.options||[]))if(values.includes(option.value))motiveInterfaceLeaf(option);
 for(const id of ['calm-options-status','calm-feedback-status','session-search-status','session-status']){const node=$(id),source=node?.dataset.motiveCalmSource;if(source!==undefined&&node.textContent===node.dataset.motiveCalmRendered)renderMotiveCalmMessage(id,source);}
}
const baseCalmInterfaceStudioText=studioText;studioText=function(id,text){if(['calm-options-status','calm-feedback-status','session-search-status'].includes(id))return renderMotiveCalmMessage(id,text);if(id==='session-status'){const node=$(id),source=/^Get comfortable · starting in [0-9]+ seconds\. Finish cancels\.$/.test(text)?text:node.dataset.motiveCalmSource!==undefined&&text===node.dataset.motiveCalmRendered?node.dataset.motiveCalmSource:null;if(source!==null)return renderMotiveCalmMessage(id,source);delete node.dataset.motiveCalmSource;delete node.dataset.motiveCalmRendered;}return baseCalmInterfaceStudioText(id,text);};


function renderMotiveInterfaceSessionAccess(){
 for(const id of ['session-heading','session-breathing-source','access-heading','access-timer-note'])motiveInterfaceLeaf($(id));
 motiveInterfaceLeaf(document.querySelector('label[for="access-text-size"]'));const search=$('calm-session-filter')?.parentElement;if(search?.setAttribute)motiveInterfaceLeaf(search);
 for(const id of ['session-haptics','access-timer-announcements']){const label=$(id)?.parentElement;if(label?.setAttribute)motiveInterfaceLeaf(label);}
 const haptic=$('session-haptics')?.parentElement;if(haptic?.setAttribute)motiveInterfaceAttribute(haptic,'title');
 for(const [id,attribute]of [['session-clock','aria-label'],['session-progress','aria-label'],['studio-close','aria-label']])motiveInterfaceAttribute($(id),attribute);
 motiveInterfaceAttribute(document.querySelector('#studio-dialog [role="tablist"]'),'aria-label');
 for(const option of Array.from($('access-text-size')?.options||[]))if(['standard','large','larger'].includes(option.value))motiveInterfaceLeaf(option);
 if(typeof filterMotiveSessionNames==='function'&&motiveSessionSearchActive){filterMotiveSessionNames();}
 // Never replay the live region on language changes; keep its canonical milestone stamp.
}


const motivePlaylistSources=new Set(['Save a quote or record your voice first, or choose a theme.','Listening session complete.','This recording cannot play in this browser.','Tap Play again to allow audio playback.','Audio stopped.','Tap Read aloud again to allow speech. If this browser stays silent, open Motive in Safari.','This voice could not play. Use Voice options > Reset voice and try again.']);
function renderMotivePlaylistStatus(source){const count=source.match(/^Playing ([0-9]+) of ([0-9]+)$/),result=count?appInterface('Playing {index} of {total}',{index:count[1],total:count[2]}):motivePlaylistSources.has(source)?appInterface(source):{text:source,language:'en'};const node=$('playlist-status');node.textContent=result.text;node.setAttribute('lang',result.language);node.dataset.motivePlaylistSource=source;}
function renderMotiveInterfaceListening(){
 for(const id of ["listen-copy-1", "listen-copy-2", "listen-copy-3", "listen-copy-4", "affirmation-speak", "affirmation-next", "playlist-start", "playlist-stop", "queue-add-current", "queue-add-recording", "audio-queue-play", "audio-queue-stop", "audio-queue-clear"])motiveInterfaceLeaf($(id));
 for(const id of ['playlist-theme','playlist-count','playlist-rate','queue-recording'])motiveInterfaceLeaf(document.querySelector('label[for="'+id+'"]'));
 const repeat=$('queue-repeat-item')?.parentElement;if(repeat?.setAttribute)motiveInterfaceLeaf(repeat);
 for(const option of Array.from($('playlist-theme')?.options||[])){const canonical=option.getAttribute?.('value')||motiveInterfaceSource(option.value);if(['saved','recordings','Confidence','Focus','Resilience','Growth','Calm'].includes(canonical)){option.value=canonical;motiveInterfaceLeaf(option);}}
 for(const node of document.querySelectorAll('[data-motive-queue-title]'))if(node.dataset.motiveQueueTitle)refreshMotiveQueueTitle(node);
 for(const node of document.querySelectorAll('[data-motive-queue-action]'))if(node.dataset.motiveQueueAction)refreshMotiveQueueAction(node);
 const queue=$('audio-queue-status');if(queue?.dataset.motiveAudioSource!==undefined)motiveAudioQueueStatus(queue.dataset.motiveAudioSource,JSON.parse(queue.dataset.motiveAudioValues||'{}'));
 const playlist=$('playlist-status')?.dataset.motivePlaylistSource;if(playlist!==undefined)renderMotivePlaylistStatus(playlist);
}
const basePlaylistInterfaceStudioText=studioText;studioText=function(id,text){if(id==='playlist-status')return renderMotivePlaylistStatus(text);return basePlaylistInterfaceStudioText(id,text);};


function renderMotiveInterfaceRecording(){
 for(const id of ["record-copy-1", "record-copy-2", "record-copy-3", "record-copy-4", "record-copy-5", "record-copy-6", "record-copy-7", "record-copy-8", "record-copy-9", "record-copy-10", "record-copy-11", "record-voice", "record-stop", "audio-back", "audio-forward", "audio-fade-stop", "audio-transcript-save", "audio-trim-download"])motiveInterfaceLeaf($(id));
 for(const id of ['recording-title','recording-script','audio-voice-volume','audio-ambient-volume','audio-fade-seconds','audio-transcript-recording','audio-transcript-text','audio-trim-file','audio-trim-start','audio-trim-end'])motiveInterfaceLeaf(document.querySelector('label[for="'+id+'"]'));
 for(const id of ['recording-title','recording-script'])motiveInterfaceAttribute($(id),'placeholder');
 for(const id of ['audio-repeat-recordings','audio-highlight']){const label=$(id)?.parentElement;if(label?.setAttribute)motiveInterfaceLeaf(label);}
 for(const option of Array.from($('audio-fade-seconds')?.options||[]))if(['0','1','2','5'].includes(option.value))motiveInterfaceLeaf(option);
 for(const option of Array.from($('audio-voice-language')?.options||[]))if(['en','es','fr'].includes(option.value))motiveInterfaceLeaf(option);
 for(const id of ['record-status','audio-media-status','audio-transcript-status','audio-trim-status','audio-trim-duration']){const node=$(id),source=node?.dataset.motiveRecordedSource;if(source!==undefined)motiveRecordedStatus(id,source,JSON.parse(node.dataset.motiveRecordedValues||'{}'));}
}
const baseRecordingInterfaceStudioText=studioText;studioText=function(id,text){if(id==='record-status')return motiveRecordedStatus(id,text);return baseRecordingInterfaceStudioText(id,text);};


const motiveRestStatusSources=new Set(["Stories use your device's synthetic voice. They are not human recordings. Audio and timers pause when Motive leaves the foreground; iOS can suspend websites.", "Import a meditation or story recorded by you or someone who has given permission. No recordings are uploaded.", "Stored recordings are included in full studio backups. Human instructor recordings are not bundled; this player supports recordings you have permission to use.", "Routine words and story positions are ordinary local preferences, included in backups. Routine checkmarks reset when you reopen this page. Story resume starts at a paragraph, not an exact spoken word.", "Routine saved on this device.", "Saved position removed. The next reading starts at the beginning.", "Sleep audio stopped. Rest at your own pace.", "Stops in {time}", "Story complete.", "Device speech is unavailable. You can read the story or import audio.", "Recording complete.", "Could not play this recording. Try another audio format.", "Choose a file first.", "Choose a file up to 12 MB.", "Choose a supported audio file.", "This file format is not supported.", "Saved on this device. Include it in a full backup.", "Unlock the journal before saving protected media.", "Story names matching: {count}. Your selected story stays selected until you choose another.", "Audio stopped."]);
function renderMotiveRestStatus(id,source,values={}){const result=motiveRestStatusSources.has(source)?appInterface(source,values):{text:source,language:'en'},node=$(id);node.textContent=result.text;node.setAttribute('lang',result.language);node.dataset.motiveRestSource=source;node.dataset.motiveRestValues=JSON.stringify(values);}
const baseRestInterfaceMessage=growthMessage;growthMessage=function(id,text){baseRestInterfaceMessage(id,text);if(['rest-status','sleep-status','narration-status'].includes(id)){if(id==='rest-status'&&typeof motiveRestProgressSource!=='undefined')motiveRestProgressSource=null;const clock=id==='sleep-status'&&/^Stops in ([0-9]+:[0-9]{2})$/.exec(text);renderMotiveRestStatus(id,clock?'Stops in {time}':text,clock?{time:clock[1]}:{});}};
function renderMotiveInterfaceRest(){
 for(const id of ["sleep-copy-1", "sleep-copy-2", "sleep-copy-3", "sleep-copy-4", "sleep-copy-5", "sleep-copy-6", "sleep-copy-7", "narration-import", "rest-routine-save"])motiveInterfaceLeaf($(id));
 for(const id of ['narration-title','narration-file','rest-routine'])motiveInterfaceLeaf(document.querySelector('label[for="'+id+'"]'));
 for(const id of ['narration-title','rest-routine'])motiveInterfaceAttribute($(id),'placeholder');
 const dim=$('rest-dim')?.parentElement;if(dim?.setAttribute)motiveInterfaceLeaf(dim);
 if(typeof storySearch!=='undefined')motiveInterfaceLeaf(storySearch);
 for(const id of ['rest-status','sleep-status','narration-status']){const node=$(id),source=node?.dataset.motiveRestSource;if(source!==undefined)renderMotiveRestStatus(id,source,JSON.parse(node.dataset.motiveRestValues||'{}'));}
 if(typeof renderMotiveRestProgress==='function')renderMotiveRestProgress();
 if(typeof motiveStorySearchActive!=='undefined'&&motiveStorySearchActive)filterMotiveStoryNames();
}


const motiveMovementStatusSources=new Set(['Your break is complete. Return at your own pace.','Break finished.','Choose a supported video file.','Choose a file first.','Choose a file up to 12 MB.','This file format is not supported.','Saved on this device. Include it in a full backup.']);
function renderMotiveMovementStatus(id,source){const shown=motiveMovementStatusSources.has(source)?appInterface(source):{text:source,language:'en'},node=$(id);node.textContent=shown.text;node.setAttribute('lang',shown.language);node.dataset.motiveMovementSource=source;}
const baseMovementInterfaceMessage=growthMessage;growthMessage=function(id,text){baseMovementInterfaceMessage(id,text);if(['movement-status','movement-words'].includes(id)){if(id==='movement-words'&&typeof motiveMovementStep!=='undefined')motiveMovementStep=null;renderMotiveMovementStatus(id,text);}};
function renderMotiveInterfaceMovement(){
 for(const id of ["movement-copy-1", "movement-copy-2", "movement-copy-3", "movement-start", "movement-stop", "movement-import"])motiveInterfaceLeaf($(id));
 for(const id of ['movement-kind','movement-file'])motiveInterfaceLeaf(document.querySelector('label[for="'+id+'"]'));
 const words=$('movement-words');if(words?.dataset.motiveMovementSource===undefined&&typeof motiveMovementStep!=='undefined'&&!motiveMovementStep)motiveInterfaceLeaf(words);
 for(const id of ['movement-status','movement-words']){const node=$(id),source=node?.dataset.motiveMovementSource;if(source!==undefined)renderMotiveMovementStatus(id,source);}
 if(typeof renderMotiveMovementOptions==='function')renderMotiveMovementOptions();
 if(typeof renderMotiveMovementStep==='function')renderMotiveMovementStep();
}


const baseFocusInterfaceMessage=growthMessage;growthMessage=function(id,text){baseFocusInterfaceMessage(id,text);if(id==='focus-status'){motiveFocusPresentation={kind:'message',source:text};renderMotiveFocusStatus();}if(id==='rest-time-heading'){const shown=['A gentle start this morning','A little room in your afternoon','An easier landing this evening'].includes(text)?appInterface(text):{text,language:'en'};$(id).textContent=shown.text;$(id).setAttribute('lang',shown.language);}};
function renderMotiveInterfaceToday(){
 for(const id of ["focus-copy-1", "focus-copy-2", "focus-copy-3", "focus-copy-4", "focus-copy-5", "focus-copy-6", "focus-copy-7", "recommend-open", "daily-meditation-open", "focus-start", "focus-stop", "focus-cycle-start", "rest-morning", "rest-day", "rest-evening"])motiveInterfaceLeaf($(id));
 for(const id of ['growth-goal','growth-minutes','focus-task','focus-length','focus-custom','focus-break','focus-cycles'])motiveInterfaceLeaf(document.querySelector('label[for="'+id+'"]'));
 motiveInterfaceAttribute($('focus-task'),'placeholder');
 for(const [id,allowed]of [['growth-goal',['calm','focus','confidence']],['growth-minutes',['1','3','5','10']]])for(const option of Array.from($(id)?.options||[]))if(allowed.includes(option.value))motiveInterfaceLeaf(option);
 if(typeof renderMotiveRecommendation==='function')renderMotiveRecommendation();
 if(typeof renderMotiveFocusStatus==='function')renderMotiveFocusStatus();
 if(typeof motiveDaytimeHeadingSource!=='undefined'&&motiveDaytimeHeadingSource){const shown=appInterface(motiveDaytimeHeadingSource);$('rest-time-heading').textContent=shown.text;$('rest-time-heading').setAttribute('lang',shown.language);}
}


const motiveVisionStatusSources=new Set(['Give your picture a meaning or a title.','Added to your board on this device.','Choose a JPEG, PNG, or WebP photo smaller than 15 MB.','This photo could not be opened.','Unlock the journal before saving protected media.']);
function renderMotiveVisionStatus(source){const shown=motiveVisionStatusSources.has(source)?appInterface(source):{text:source,language:'en'};$('vision-status').textContent=shown.text;$('vision-status').setAttribute('lang',shown.language);$('vision-status').dataset.motiveVisionSource=source;}
const baseVisionInterfaceText=studioText;studioText=function(id,text){if(id==='vision-status')return renderMotiveVisionStatus(text);return baseVisionInterfaceText(id,text);};
function renderMotiveInterfaceVision(){
 for(const id of ["vision-copy-1", "vision-copy-2", "vision-copy-3", "vision-copy-4", "vision-add", "studio-eyebrow", "studio-intro", "studio-media-privacy", "studio-button"])motiveInterfaceLeaf($(id));
 for(const id of ['journey-theme','vision-title','vision-photo'])motiveInterfaceLeaf(document.querySelector('label[for="'+id+'"]'));
 motiveInterfaceAttribute($('vision-title'),'placeholder');
 if($('vision-status')?.dataset.motiveVisionSource!==undefined)renderMotiveVisionStatus($('vision-status').dataset.motiveVisionSource);
 for(const kind of ['voice','narration','vision']){const node=$('media-vault-note-'+kind);if(node?.dataset.motiveMediaNoticeSource!==undefined&&typeof renderMotiveMediaNotice==='function')renderMotiveMediaNotice(node,node.dataset.motiveMediaNoticeSource);}
 for(const node of document.querySelectorAll('.motive-navigation-hint'))if(node.classList?.contains?.('motive-navigation-hint'))motiveInterfaceLeaf(node);
}


const baseVaultInterfaceText=studioText;studioText=function(id,text){if(['vault-status','media-vault-status'].includes(id))return motiveVaultStatus(id,text);return baseVaultInterfaceText(id,text);};
function renderMotiveInterfaceVault(){
 for(const id of ["vault-copy-1", "vault-copy-2", "vault-copy-3", "vault-copy-4", "vault-copy-5", "vault-copy-6", "vault-copy-7", "vault-copy-8", "vault-enable", "vault-open", "vault-close", "media-vault-review", "media-vault-confirm", "media-vault-cancel"])motiveInterfaceLeaf($(id));
 motiveInterfaceLeaf(document.querySelector('label[for="vault-password"]'));
 for(const kind of ['voice','narration','vision']){const label=$('media-vault-'+kind)?.parentElement;if(label?.setAttribute)motiveInterfaceLeaf(label);}
 for(const id of ['vault-status','media-vault-status']){const node=$(id),source=node?.dataset.motiveVaultSource;if(source!==undefined)motiveVaultStatus(id,source,JSON.parse(node.dataset.motiveVaultValues||'{}'));}
 const summary=$('media-vault-summary');if(summary?.dataset.motiveMediaReviewCount!==undefined&&typeof renderMotiveMediaReviewSummary==='function')renderMotiveMediaReviewSummary(Number(summary.dataset.motiveMediaReviewCount),JSON.parse(summary.dataset.motiveMediaReviewKinds||'[]'));
}


const basePrivacyInterfaceText=studioText;studioText=function(id,text){if(id==='privacy-status'&&typeof motivePrivacyStatus==='function')return motivePrivacyStatus(text);return basePrivacyInterfaceText(id,text);};
function renderMotiveInterfacePrivacy(){
 for(const id of ["privacy-copy-1", "privacy-copy-2", "privacy-copy-3", "privacy-copy-4", "privacy-copy-5", "privacy-copy-6", "privacy-copy-7", "privacy-copy-8", "privacy-copy-9", "privacy-copy-10", "privacy-storage-check", "privacy-full-backup", "privacy-review", "privacy-confirm", "privacy-cancel"])motiveInterfaceLeaf($(id));
 motiveInterfaceLeaf(document.querySelector('label[for="privacy-operation"]'));
 for(const scope of ['journal','moods','habits','recordings','vision','backgrounds']){const label=$('privacy-scope-'+scope)?.parentElement;if(label?.setAttribute)motiveInterfaceLeaf(label);}
 for(const option of Array.from($('privacy-operation')?.options||[]))if(['remove','recover','purge'].includes(option.value))motiveInterfaceLeaf(option);
 if(typeof renderMotivePrivacyConnections==='function')renderMotivePrivacyConnections();
 if(typeof renderMotivePrivacyStorage==='function')renderMotivePrivacyStorage();
 if(typeof renderMotivePrivacyReview==='function')renderMotivePrivacyReview();
 const status=$('privacy-status');if(status?.dataset.motivePrivacySource!==undefined&&typeof motivePrivacyStatus==='function')motivePrivacyStatus(status.dataset.motivePrivacySource,JSON.parse(status.dataset.motivePrivacyValues||'{}'));
}

function renderMotiveInterface(){for(const id of motiveInterfaceControls)motiveInterfaceLeaf($(id));for(const node of document.querySelectorAll('#filters button[data-category]'))motiveInterfaceLeaf(node);for(const id of ['reading-voice','reading-rate','reading-pitch','audio-voice-language','audio-language-voice','studio-language'])motiveInterfaceLeaf(document.querySelector('label[for="'+id+'"]'));motiveInterfaceLeaf(document.querySelector('#audio-tools .audio-advanced summary'));for(const [id,attributes]of [['copy-button',['aria-label','title']],['voice-close',['aria-label']],['profile-button',['aria-label']],['search-motive',['aria-label','title']]])for(const attribute of attributes)motiveInterfaceAttribute($(id),attribute);renderMotiveInterfaceLibrary();renderMotiveInterfacePersonal();renderMotiveInterfaceScenes();renderMotiveInterfaceHome();renderMotiveInterfacePreferences();renderMotiveInterfaceDiscovery();renderMotiveInterfaceJournal();renderMotiveInterfaceMoods();renderMotiveInterfacePracticeHistory();renderMotiveInterfaceHabits();renderMotiveInterfaceTags();renderMotiveInterfaceCalmOptions();renderMotiveInterfaceSessionAccess();renderMotiveInterfaceListening();renderMotiveInterfaceRecording();renderMotiveInterfaceRest();renderMotiveInterfaceMovement();renderMotiveInterfaceToday();renderMotiveInterfaceVision();renderMotiveInterfaceVault();renderMotiveInterfacePrivacy();renderMotiveInterfaceNavigation();renderMotiveInterfaceSave();renderMotiveInterfacePosition();renderMotiveInterfaceVoiceOptions();for(const id of motiveInterfaceStatuses){const source=$(id)?.dataset.motiveUiSource??$(id)?.textContent;if(source!==undefined)renderMotiveInterfaceStatus(id,source);}}
const baseInterfaceStudioText=studioText;studioText=function(id,text){if(motiveInterfaceStatuses.has(id)){const result=motiveInterfaceMessage(text,motiveInterfaceLanguage(),id);baseInterfaceStudioText(id,result.text);$(id).dataset.motiveUiSource=text;$(id).setAttribute('lang',result.language);return;}return baseInterfaceStudioText(id,text);};
const baseInterfaceShow=showQuote;showQuote=function(...args){const result=baseInterfaceShow(...args);renderMotiveInterface();return result;};
const baseInterfaceSave=updateSave;updateSave=function(...args){const result=baseInterfaceSave(...args);renderMotiveInterfaceSave();return result;};
const baseInterfaceSpeech=speechControls;speechControls=function(...args){const result=baseInterfaceSpeech(...args);for(const id of ['speak-quote','quote-speech-stop','voice-stop'])motiveInterfaceLeaf($(id));return result;};
const baseInterfaceReadingControls=renderReadingControls;renderReadingControls=function(...args){const result=baseInterfaceReadingControls(...args);motiveInterfaceLeaf($('reading-pitch-value'));return result;};
const baseInterfaceReadingVoices=renderReadingVoices;renderReadingVoices=function(...args){const result=baseInterfaceReadingVoices(...args);renderMotiveInterfaceVoiceOptions();return result;};
const baseInterfaceLanguage=renderLanguage;renderLanguage=function(...args){const replayBefore=motiveTodayLocaleReplay;let result;try{motiveTodayLocaleReplay=true;result=baseInterfaceLanguage(...args);}finally{motiveTodayLocaleReplay=replayBefore;}if(/^Playing [0-9]+ of [0-9]+$/.test($('playlist-status')?.dataset.motivePlaylistSource||''))renderMotivePlaylistStatus('Audio stopped.');renderMotiveInterface();return result;};
if(typeof refreshMotiveNavigation==='function'){const base=refreshMotiveNavigation;refreshMotiveNavigation=function(...args){const result=base(...args);renderMotiveInterfaceNavigation();return result;};}
if(typeof renderMotiveLanguageVoices==='function'){const base=renderMotiveLanguageVoices;renderMotiveLanguageVoices=function(...args){const result=base(...args);renderMotiveInterfaceVoiceOptions();return result;};}
if(typeof updateQuoteBackground==='function'){const base=updateQuoteBackground;updateQuoteBackground=function(...args){const result=base(...args);motiveInterfaceLeaf($('background-button'));motiveInterfaceLeaf($('scene-options-button'));renderMotiveInterfaceScenes();return result;};}
if(typeof collectionOptions==='function'){const base=collectionOptions;collectionOptions=function(...args){const result=base(...args);renderMotiveInterfaceSelects();return result;};}
$('audio-voice-language').addEventListener('change',renderMotiveInterfaceVoiceOptions);
window.speechSynthesis?.addEventListener?.('voiceschanged',renderMotiveInterfaceVoiceOptions);
renderMotiveInterface();
