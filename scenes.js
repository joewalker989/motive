'use strict';
// Local keyword matching; personal quote text never leaves this browser.
const quoteScenes = {
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
