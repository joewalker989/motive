'use strict';
// Local keyword matching; personal quote text never leaves this browser.
const quoteScenes = {
  walkingShoes:{label:'A beginning that fits',meaning:'Practical preparation, adjusting your support, and starting at an unhurried pace.',category:'Focus',kind:'people',added:'2026-10-30',image:'./assets/backgrounds/daily-2026-10-30-walking-shoes.jpg',words:['shoelace','shoe','walking shoes','tying','laces','doorway','muddy','knot','before the walk','preparation']},
  propagation:{label:'Room for new roots',meaning:'Patient observation and looking for growth in more than one place.',category:'Growth',kind:'object',added:'2026-10-29',image:'./assets/backgrounds/daily-2026-10-29-plant-cutting.jpg',words:['plant cutting','cutting','propagat','rooted','roots','new leaves','windowsill']},
  metronome:{label:'A rhythm you can keep',meaning:'Patient practice, deliberate attention, and room between commitments.',category:'Focus',kind:'object',added:'2026-10-28',image:'./assets/backgrounds/daily-2026-10-28-metronome.jpg',words:['metronome','tempo','rhythm','instrument','piano','notes','song','measure slowly','pace you can follow']},
  sharedMeal:{label:'Something to share',meaning:'Cooperation, belonging, and the everyday value of a contribution.',category:'Confidence',kind:'people',added:'2026-10-25',image:'./assets/backgrounds/daily-2026-10-25-shared-meal.jpg',words:['shared meal','meal','bowl','recipe','cook','ingredients','contribution','share','table','team']},
  origami:{label:'One fold at a time',meaning:'Learning through small adjustments and letting an unfamiliar shape emerge.',category:'Growth',kind:'object',added:'2026-10-24',image:'./assets/backgrounds/daily-2026-10-24-origami.jpg',words:['origami','crane','fold','crease','paper','practice sheet']},
  restingCat:{label:'A soft place to rest',meaning:'Everyday comfort and permission to leave a quiet moment unmeasured.',category:'Calm',kind:'animal',added:'2026-10-23',image:'./assets/backgrounds/daily-2026-10-23-resting-cat.jpg',words:['cat','curled','chair','cushion','blanket','comfort','soft place','rest']},
  mending:{label:'A patient repair',meaning:'Care, resourcefulness, and continuing with what can still be useful.',category:'Resilience',kind:'craft',added:'2026-10-22',image:'./assets/backgrounds/daily-2026-10-22-mending.jpg',words:['mend','mending','repaired sleeve','small tear','stitch','thread','seam','repair']},
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
