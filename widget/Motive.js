// Paste into Scriptable and name the script Motive.
const widgetDefaults = {category:'All',style:'photo',refreshMinutes:60};
// BEGIN MOTIVE SCENE RULES
'use strict';
// Local keyword matching; personal quote text never leaves this browser.
const quoteScenes = {
  craft:{label:'Hands at work',meaning:'Patience, practice, and the courage to make something imperfect.',category:'Growth',kind:'craft',added:'2026-10-21',image:'./assets/backgrounds/craft.jpg',words:['practice','practic','repair','clay','pottery','craft','make something','skill','early draft','teach','learning','borrowed tool']},
  support:{label:'A little support',meaning:'A reminder that help, friendship, and belonging can be part of your strength.',category:'Confidence',kind:'people',added:'2026-10-21',image:'./assets/backgrounds/support.jpg',words:['support','help','friend','listen','conversation','belong','ask for','shared success','second pair of hands','thank you']},
  color:{label:'Room for possibility',meaning:'Color and movement for fresh ideas, self-expression, and a new direction.',category:'Confidence',kind:'abstract',added:'2026-10-21',image:'./assets/backgrounds/color.jpg',words:['possibility','new direction','express','creativ','color','imagin','preference','first attempt','unfamiliar','new idea']},
  summit:{label:'Mountain path',meaning:'A reminder that progress is made one step at a time.',category:'Resilience',image:'./assets/backgrounds/summit.jpg',words:['mountain','path','step','staircase','climb','obstacle','persever','setback','rebuild','struggle','keep going','begin again','try again','hard chapter','storm']},
  sunrise:{label:'Open horizon',meaning:'A little light for courage, confidence, and new possibilities.',category:'Confidence',image:'./assets/backgrounds/sunrise.jpg',words:['confidence','believe','voice','worth','brave','belong','trust yourself','self-respect','opportunity','possibilit','dream','sunrise','courage','your strengths']},
  forest:{label:'Growing forest',meaning:'Growth takes patience, curiosity, and room to change.',category:'Growth',image:'./assets/backgrounds/forest.jpg',words:['growth','grow','learn','sapling','seed','curios','discover','understand','experiment','improve','new skill','change','question','beginner']},
  water:{label:'Still water',meaning:'Space to breathe, rest, and return to the present.',category:'Calm',image:'./assets/backgrounds/water.jpg',words:['calm','breath','rest','sleep','quiet','peace','soften','relax','stillness','unhurried','comfort','recover your energy','slow down','pause']},
  workspace:{label:'A quiet workspace',meaning:'A clear space for attention, practice, and purposeful work.',category:'Focus',image:'./assets/backgrounds/workspace.jpg',words:['focus','attention','notebook','write','pen','desk','work','task','project','deadline','discipline','routine','habit','finish','concentration']}
};
function getQuoteScene(quote,preference='auto') {
  if(preference==='none')return null;
  if(Object.prototype.hasOwnProperty.call(quoteScenes,preference))return {...quoteScenes[preference],key:preference};
  const text=String(quote.text||'').normalize('NFKC').toLowerCase();
  let best='sunrise';let highest=-1;
  for(const [key,scene]of Object.entries(quoteScenes)){
    let score=scene.category===quote.category?2:0;
    for(const phrase of scene.words){let start=text.indexOf(phrase);while(start!==-1&&start>0&&/[a-z]/.test(text[start-1]))start=text.indexOf(phrase,start+1);if(start!==-1)score+=3;}
    if(score>highest){best=key;highest=score;}
  }
  return {...quoteScenes[best],key:best};
}

// END MOTIVE SCENE RULES
const site = 'https://joewalker989.github.io/motive/';
const files = FileManager.local();
const cachePath = files.joinPath(files.documentsDirectory(),'motive-widget-v2.json');
const legacyPath = files.joinPath(files.documentsDirectory(),'motive-quotes-v1.json');
const now = new Date();
const today = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
const query = args.queryParameters || {};
const parameter = String(args.widgetParameter || '').split(',').map(part=>part.trim());
const categories = ['All','Confidence','Focus','Resilience','Growth','Calm'];
const category = categories.find(value=>value.toLowerCase()===String(query.category||parameter[0]||widgetDefaults.category).toLowerCase()) || 'All';
const preferredStyle=String(query.style||parameter[1]||widgetDefaults.style).toLowerCase();
const style=['photo','dark','sage'].includes(preferredStyle)?preferredStyle:'photo';
const requestedMinutes = Number(query.minutes||parameter[2]||widgetDefaults.refreshMinutes);
const minutes = [15,60,180,1440].includes(requestedMinutes)?requestedMinutes:60;
const slot = minutes===1440?today:String(Math.floor(now.getTime()/(minutes*60000)));
const fresh = query.refresh==='1' || args.shortcutParameter==='new' || config.runsInApp;
let saved = {};
try { saved=JSON.parse(files.readString(cachePath));if(!saved||Array.isArray(saved)||typeof saved!=='object')saved={}; } catch {}
function validQuotes(quotes){return Array.isArray(quotes)&&quotes.length>=400&&quotes.every(q=>q&&typeof q.id==='string'&&typeof q.text==='string'&&q.text.trim())&&new Set(quotes.map(q=>q.id)).size===quotes.length&&new Set(quotes.map(q=>q.text.toLowerCase().replace(/[^a-z0-9]/g,''))).size===quotes.length;}
if(!validQuotes(saved.quotes)){try{const legacy=JSON.parse(files.readString(legacyPath));if(validQuotes(legacy))saved.quotes=legacy;}catch{}}
const widget = new ListWidget();
widget.backgroundColor = new Color(style!=='sage'?'1D3026':'E5EACB');
widget.setPadding(15,18,15,18);
const runURL = URLScheme.forRunningScript();
widget.url = config.widgetFamily==='small'?site:runURL+(runURL.includes('?')?'&':'?')+`refresh=1&category=${encodeURIComponent(category)}&style=${style}&minutes=${minutes}`;
const title = widget.addText('✳  MOTIVE v6'+(category==='All'?'':' · '+category.toUpperCase()));
title.font = Font.boldSystemFont(10);title.textColor = new Color(style!=='sage'?'EDF1E2':'526441');
widget.addSpacer();
try {
  if(saved.fetchedDay!==today || !validQuotes(saved.quotes)){
    try{const request=new Request(site+'quotes.json');request.timeoutInterval=8;const incoming=await request.loadJSON();if(!validQuotes(incoming))throw Error('Invalid library');saved.quotes=incoming;saved.fetchedDay=today;}catch(error){if(!validQuotes(saved.quotes))throw error;}
  }
  const quotes=saved.quotes;
  const pool=quotes.filter(q=>category==='All'||q.category===category);
  if(!pool.length)throw Error('No matching quotes');
  let quote=!fresh&&saved.selection?.category===category&&saved.selection?.slot===slot&&pool.find(q=>q.id===saved.selection.id);
  if(!quote){
    let seen=new Set(Array.isArray(saved.seen)?saved.seen.filter(id=>typeof id==='string'):[]);
    let available=pool.filter(q=>!seen.has(q.id)&&q.id!==saved.selection?.id);
    if(!available.length){for(const q of pool)seen.delete(q.id);available=pool.filter(q=>q.id!==saved.selection?.id);}
    quote=(available.length?available:pool)[Math.floor(Math.random()*(available.length||pool.length))];
    seen.add(quote.id);saved.seen=[...seen];saved.selection={category,slot,id:quote.id};
  }
  try{files.writeString(cachePath,JSON.stringify(saved));}catch{}
  let photoUnavailable=false;
  if(style==='photo'){
    try{
      const sharedPhoto=quote.photo;const scene=sharedPhoto&&/^[a-z0-9-]{1,80}$/.test(sharedPhoto.key)&&/^\.\/assets\/backgrounds\/[a-z0-9-]+\.jpg$/.test(sharedPhoto.image)?sharedPhoto:getQuoteScene(quote);const imagePath=files.joinPath(files.documentsDirectory(),'motive-scene-'+scene.key+'.jpg');let photo;
      try{photo=files.readImage(imagePath);}catch{}
      if(!photo){const imageRequest=new Request(site+scene.image.replace(/^\.\//,''));imageRequest.timeoutInterval=8;photo=await imageRequest.loadImage();try{files.writeImage(imagePath,photo);}catch{}}
      const width=600;const height=config.widgetFamily==='small'?600:config.widgetFamily==='large'?630:300;const drawing=new DrawContext();drawing.size=new Size(width,height);drawing.opaque=true;
      const scale=Math.max(width/photo.size.width,height/photo.size.height);const photoWidth=photo.size.width*scale;const photoHeight=photo.size.height*scale;
      drawing.drawImageInRect(photo,new Rect((width-photoWidth)/2,(height-photoHeight)/2,photoWidth,photoHeight));drawing.setFillColor(new Color('06140F',.60));drawing.fillRect(new Rect(0,0,width,height));widget.backgroundImage=drawing.getImage();
    }catch{photoUnavailable=true;}
  }
  const text=widget.addText('“'+quote.text+'”');
  text.font=Font.semiboldSystemFont(config.widgetFamily==='small'?14:17);
  text.textColor=new Color(style!=='sage'?'EDF1E2':'25382D');text.minimumScaleFactor=0.65;text.lineLimit=config.widgetFamily==='small'?6:5;
  widget.addSpacer();
  const footer=widget.addText(photoUnavailable?'PHOTO UNAVAILABLE · RUN ONLINE IN SCRIPTABLE':config.widgetFamily==='small'?'TAP TO OPEN WEBSITE':style==='photo'?'PHOTO · OPENS IN SCRIPTABLE':'PLAIN STYLE · OPENS IN SCRIPTABLE');
  footer.font=Font.mediumSystemFont(8);footer.textColor=new Color(style!=='sage'?'E3EBD7':'657153');
  widget.refreshAfterDate=minutes===1440?new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,0,5):new Date((Math.floor(now.getTime()/(minutes*60000))+1)*minutes*60000);
}catch{
  const help=widget.addText('Connect to the internet, then run Motive in Scriptable once to load your quotes.');
  help.font=Font.systemFont(14);help.textColor=new Color(style!=='sage'?'EDF1E2':'25382D');widget.refreshAfterDate=new Date(Date.now()+15*60000);
}
widget.addSpacer(3);
const websiteLink=widget.addText('Go to website '+String.fromCharCode(8599));websiteLink.url=site;websiteLink.font=Font.semiboldSystemFont(10);websiteLink.textColor=new Color(style!=='sage'?'EDF1E2':'25382D');websiteLink.lineLimit=1;
Script.setWidget(widget);
if(config.runsInApp)await widget.presentMedium();
Script.complete();
