// Paste into Scriptable and name the script Motive.
const widgetDefaults = {category:'All',style:'sage',refreshMinutes:60};
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
const style = String(query.style||parameter[1]||widgetDefaults.style).toLowerCase()==='dark'?'dark':'sage';
const requestedMinutes = Number(query.minutes||parameter[2]||widgetDefaults.refreshMinutes);
const minutes = [15,60,180,1440].includes(requestedMinutes)?requestedMinutes:60;
const slot = minutes===1440?today:String(Math.floor(now.getTime()/(minutes*60000)));
const fresh = query.refresh==='1' || args.shortcutParameter==='new' || config.runsInApp;
let saved = {};
try { saved=JSON.parse(files.readString(cachePath));if(!saved||Array.isArray(saved)||typeof saved!=='object')saved={}; } catch {}
function validQuotes(quotes){return Array.isArray(quotes)&&quotes.length>=400&&quotes.every(q=>q&&typeof q.id==='string'&&typeof q.text==='string'&&q.text.trim())&&new Set(quotes.map(q=>q.id)).size===quotes.length&&new Set(quotes.map(q=>q.text.toLowerCase().replace(/[^a-z0-9]/g,''))).size===quotes.length;}
if(!validQuotes(saved.quotes)){try{const legacy=JSON.parse(files.readString(legacyPath));if(validQuotes(legacy))saved.quotes=legacy;}catch{}}
const widget = new ListWidget();
widget.backgroundColor = new Color(style==='dark'?'1D3026':'E5EACB');
widget.setPadding(15,18,15,18);
const runURL = URLScheme.forRunningScript();
widget.url = runURL+(runURL.includes('?')?'&':'?')+`refresh=1&category=${encodeURIComponent(category)}&style=${style}&minutes=${minutes}`;
const title = widget.addText('✳  MOTIVE'+(category==='All'?'':' · '+category.toUpperCase()));
title.font = Font.boldSystemFont(10);title.textColor = new Color(style==='dark'?'BCCE9C':'526441');
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
  const text=widget.addText('“'+quote.text+'”');
  text.font=Font.semiboldSystemFont(config.widgetFamily==='small'?14:17);
  text.textColor=new Color(style==='dark'?'EDF1E2':'25382D');text.minimumScaleFactor=0.65;text.lineLimit=config.widgetFamily==='small'?6:5;
  widget.addSpacer();
  const footer=widget.addText(config.widgetFamily==='small'?'TAP FOR ANOTHER':'TAP QUOTE FOR ANOTHER · OPEN MOTIVE ↗');
  footer.font=Font.mediumSystemFont(8);footer.textColor=new Color(style==='dark'?'B7C5A4':'657153');
  if(config.widgetFamily!=='small')footer.url=site;
  widget.refreshAfterDate=minutes===1440?new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,0,5):new Date((Math.floor(now.getTime()/(minutes*60000))+1)*minutes*60000);
}catch{
  const help=widget.addText('Connect to the internet, then run Motive in Scriptable once to load your quotes.');
  help.font=Font.systemFont(14);help.textColor=new Color(style==='dark'?'EDF1E2':'25382D');widget.refreshAfterDate=new Date(Date.now()+15*60000);
}
Script.setWidget(widget);
if(config.runsInApp)await widget.presentMedium();
Script.complete();
