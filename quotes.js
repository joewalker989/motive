'use strict';
// Original Motive reminders, grouped by theme. Stable IDs preserve favorites.
const extraReminders = Object.entries({
Confidence: `Your needs deserve a place in your plans.
Stand by the work you did when nobody was watching.
You can speak honestly without having every answer.
Let your choices reflect your character rather than your doubts.
You bring a perspective that this room has not heard yet.
An awkward first attempt does not cancel your potential.
Give yourself permission to take up the space you need.
You can be uncertain about the outcome and certain about your effort.
The way you treat yourself becomes part of the way you move through the world.
You have something to contribute before you have something to prove.
Choose clothes, words, and goals that let you recognize yourself.
Your boundaries can be clear even when your voice shakes.
You can accept a compliment without making yourself smaller.
Trust the preparation you have already put in.
A thoughtful question can be your strongest contribution.
You do not need a crowd to agree before you respect your own judgment.
Give your ideas a chance to exist outside your notebook.
Being overlooked once does not make you invisible forever.
Walk into the opportunity as someone who belongs in the conversation.
Let your experience count as evidence of what you can handle.
You can be warm without making yourself endlessly available.
Make decisions your future self can understand, even if others do not.
You are more than the impression you made in one nervous moment.
Confidence can sound like a calm, considered no.
Let yourself finish the sentence before you decide it was foolish.
Ask for the clarification you need to do your best work.
Your worth does not rise and fall with your inbox.
Believe the people who appreciate your presence without demanding a performance.
You can learn from criticism without adopting every judgment.
Take your own ambition seriously enough to give it time.
You deserve friendships where you can stop rehearsing your personality.
Your preferences are useful information, not an inconvenience.
The courage to introduce yourself can open an unexpected door.
Let the quality of your effort speak at its own volume.
You can respect expertise while trusting your ability to learn.
Nobody else can decide what a meaningful life feels like to you.
You have survived being misunderstood without losing who you are.
Keep your promises to yourself in small, visible ways.
Your right to ask does not depend on getting a yes.
You can change your mind without losing your integrity.
There is dignity in naming what you want clearly.
Let your posture make a little more room for your breath.
You do not need to turn your personality into an apology.
Bring your whole attention instead of a perfect impression.
It is possible to be proud of yourself and still have room to improve.
Your accomplishments remain real on the days you doubt them.
Give your own advice the consideration you give a stranger's opinion.
Let your confidence rest on practice rather than applause.
You can enter a new chapter without pretending to be someone else.
Recognize the strengths that feel ordinary because you use them every day.
You are allowed to enjoy being good at something.
An invitation to try is not a demand to be flawless.
You can advocate for yourself with kindness and precision.
The first person to take your dream seriously can be you.
Your presence can matter even when your contribution is quiet.
Release the habit of explaining every harmless choice.
You are allowed to ask for fair credit for your work.
Self-respect is a practice you can return to after a difficult choice.
Bring the version of yourself that can listen and still disagree.
Your story has room for successes you have not imagined yet.
You can be new to the role and still be right for the opportunity.
Let a clear value guide you when confidence feels far away.
Your kindness becomes stronger when it includes you.
You can offer your work before you know how it will be received.
Practice being on your own side during uncomfortable conversations.
Your achievements do not need someone else's disappointment to matter.
Let yourself want more without insulting where you started.
There is strength in saying that you need a moment to think.
You can trust yourself to respond even when you cannot predict.
Hold your head up for the effort, not just the result.
The person you are becoming deserves your patient support.
Choose one thing today that expresses what you believe in.
You are allowed to celebrate a victory before chasing another.
Your self-respect can remain steady through someone else's disapproval.
You can belong without blending into every expectation.`,
Focus: `Give your best hour to something you would be glad to finish.
Clear one surface and make a place for your attention to land.
Write the next step as an action you can actually take.
A shorter list can be a more honest commitment.
Close the extra tab and return to the question in front of you.
Make a beginning before you redesign the entire plan.
An appointment with your own work deserves to be kept.
Let the timer hold the boundary while you do the task.
Put the tools for your good habit within easy reach.
Decide what finished means before you begin polishing.
Return to the task without turning the distraction into a story about yourself.
Your calendar should have room for the work behind your goals.
Choose a place to stop so that starting again feels possible.
Protect your attention as carefully as you protect your money.
Do the preparation that makes tomorrow's beginning easier.
You do not have to answer every notification at the moment it arrives.
Let the important task have a turn before the easy tasks take over.
One well-chosen priority can organize an entire morning.
Break the vague project into a first visible result.
Give your mind fewer decisions to make at the starting line.
A routine works best when it fits the life you actually have.
Track the effort you can control instead of refreshing the outcome.
Leave a note for yourself about where to resume.
Slow down enough to do the part that prevents rework.
Finish the paragraph before you judge the whole piece.
Use your energy where it changes the result.
Make the useful action easier than the familiar distraction.
Choose a realistic deadline and give it an honest place in your day.
The next ten minutes can have a purpose even when the whole day feels scattered.
Stop collecting advice long enough to practice one useful idea.
You can say later to a good idea so you can finish the current one.
Give each commitment the space its real effort requires.
Arrange your environment to support the person you want to be.
Progress becomes easier to see when you define a clear milestone.
Let the plan be simple enough to remember when you are tired.
The purpose of a system is to help you act, not to become another project.
Start with the part that reduces the most uncertainty.
Your concentration deserves a recovery break before it collapses.
Read the instructions carefully enough to begin in the right direction.
Keep the promise small when the day is crowded.
Not every urgent request deserves your most creative hour.
Choose an order that makes the next task easier.
Set out what you need before motivation has a chance to negotiate.
Let repetition remove the need to decide from scratch.
Work at a pace you can return to tomorrow.
A useful draft gives you something real to improve.
Make room for review instead of hoping everything went right.
Attention grows stronger when you bring it back gently.
Set a boundary around the work you keep postponing for everyone else.
Reduce the friction between having the intention and taking the action.
An unfinished task can be scheduled instead of carried in your head.
Define the smallest version that still serves the purpose.
Let the results of practice guide the next round of effort.
Give the difficult part a place in the plan, not just the easy parts.
You can move a project forward without feeling inspired by every step.
Spend a moment choosing before you spend an hour reacting.
Build a habit around a cue you already encounter.
Your future attention will appreciate a tidy handoff.
Doing less deliberately can make room for doing better.
Put a little distance between yourself and the distraction you know too well.
Name the obstacle before you add more effort.
Let the question of what matters come before the question of what is next.
Make the first minute so clear that beginning feels ordinary.
You can honor a deadline without making panic your only method.
Take notes that help you act rather than notes that merely look complete.
Choose a stopping point that preserves tomorrow's energy.
Return to the reason you started when the details feel endless.
An intentional pause can protect the quality of the next hour.
Move one commitment out of your head and onto a reliable list.
Let consistency be measured in returns, not uninterrupted streaks.
The right tool is the one that helps you complete the work.
Prepare a fallback version of your habit for difficult days.
Give your attention a destination before you open your phone.
You can refuse an unnecessary task without refusing to be helpful.
Leave enough time to finish with care.`,
Resilience: `When the plan breaks, look for the next thing that still works.
You can ask for help before you reach the end of your strength.
A setback gives you information about the path, not a verdict on your future.
There is no shame in taking the slower route through a difficult season.
Hold onto one useful routine when everything else feels uncertain.
You can be tired of the struggle and still care about what comes next.
Let someone walk beside you through the part you cannot hurry.
Begin again from the resources you have today.
Your disappointment deserves honesty, and your future deserves a chance.
The day can improve without becoming perfect.
An unexpected detour may require a different map, not a different dream.
Take care of the person doing the hard work: you.
You do not have to turn every painful experience into a lesson immediately.
Make your next decision from the present, not from the worst moment behind you.
Keep a little evidence of the times you found a way through.
You can grieve an ending while making space for another beginning.
The strength to continue sometimes starts with a proper meal and some sleep.
Your effort still counts when the outcome takes longer than expected.
Choose the support that makes the load manageable.
You can repair a mistake without spending the day punishing yourself.
Let an ordinary good moment interrupt a difficult day.
The next attempt can be different because you know more now.
You do not need a cheerful explanation for a genuinely hard situation.
Protect the part of yourself that still wants to try.
You can be honest about the difficulty without declaring the effort hopeless.
Let the challenge shrink to the size of the next decision.
Recovering your footing is a worthwhile use of time.
You can carry a little hope without making promises about the outcome.
Give yourself credit for the work that survival sometimes requires.
Some strength looks like reaching out instead of withdrawing.
You can rebuild trust in yourself through one manageable promise.
The habits you return to can become handrails on uncertain days.
You are allowed to pause before deciding whether to continue.
Let the people who care know what would actually help.
Adjusting the goal can be a thoughtful response to new information.
You can have a difficult morning and still choose a gentle evening.
An interrupted journey is still a journey you can resume.
Make space for frustration without giving it every decision.
You can set down a burden that was never yours to carry.
The fact that it hurts does not mean you are handling it badly.
Choose the next safe step when the larger path is unclear.
There may be more ways forward than the one that just closed.
Keep the lessons from the attempt without keeping every harsh thought about it.
You can lower the pace without giving up your direction.
Let today be a day of repair if that is what you need.
You are allowed to need more time after something difficult.
The ability to adapt can matter more than the ability to insist.
A fresh start can happen in the middle of an ordinary afternoon.
Allow a little kindness into the place where you expected criticism.
You can miss the old plan and still make a useful new one.
One uncomfortable conversation can be the beginning of a lighter burden.
Your next chapter can be shaped by more than what went wrong.
Keep looking for what is possible without denying what is hard.
You can learn to carry uncertainty without letting it lead every choice.
An honest rest can be part of a determined response.
Let your recovery have its own rhythm.
You are not required to turn pain into productivity.
The strength you need today may be quieter than you expected.
Give tomorrow the benefit of not being decided by today's mood.
You can return with a smaller plan and a wiser boundary.
Reach for what steadies you before reaching for what numbs the question.
Let one trusted person know that the day has been heavy.
A difficult result can change your strategy without changing your values.
You can feel discouraged and still complete one caring action.
Do not measure your entire future from the bottom of a difficult hour.
Some doors open only after you give yourself permission to look elsewhere.
You can keep your heart open while becoming more careful with your trust.
The effort of rebuilding deserves as much respect as the first achievement.
Meet the unexpected with the resources of the present.
There is courage in letting a workable plan replace a perfect one.
You are allowed to let a good day be good without preparing for its loss.
Remember the small comforts that have helped you through before.
When you cannot solve the whole problem, reduce one part of the strain.
Your willingness to seek another route is a form of progress.
Leave room for a future that surprises your disappointment.`,
Growth: `Curiosity can turn an uncomfortable gap into a useful question.
Let a mistake become something you examine instead of something you hide.
Try listening for the part of the feedback that you can use.
You are allowed to revise a belief when experience gives you better evidence.
Make a little room each week for learning without performing.
Practice the skill at the level where you can actually improve it.
Your first version only needs to teach you what the second version needs.
Ask what changed when something finally starts to work.
Let your questions become more specific as your understanding deepens.
The next useful teacher may be someone you did not expect.
Being challenged can reveal a skill worth developing.
You can appreciate your old choices while making better-informed ones now.
Make something small enough to finish and real enough to learn from.
An honest reflection can save you from repeating an expensive lesson.
Go looking for an example that expands what you think is possible.
Learn the principle behind the advice before applying it everywhere.
You can be proud of a skill that still needs practice.
Give yourself a chance to be surprised by a new interest.
Understanding someone else's perspective can strengthen your own thinking.
Change becomes practical when you name the behavior you want to practice.
You are allowed to become interested in a different future.
An experiment can be worthwhile even when its answer is no.
Let practice be a conversation with the work, not a trial of your worth.
The habit of asking why can lead you beyond the familiar answer.
Look for the difference between what feels difficult and what is truly impossible.
You can begin learning without announcing a new identity.
Write down what worked so that improvement has a memory.
Growth sometimes means choosing a healthier definition of success.
Spend time with people who make thoughtful questions feel welcome.
You can learn something useful from a person you do not agree with entirely.
Give a new method a fair attempt before deciding it is not for you.
The willingness to be corrected keeps your understanding alive.
Your future options can grow with the skills you practice today.
Make a little room between receiving feedback and defending yourself.
Explore the interest that keeps returning when the day gets quiet.
Let your goals change as your knowledge of yourself becomes clearer.
You can outgrow a habit without turning your past into an enemy.
Improvement often begins with noticing a pattern honestly.
Take the time to understand the part you usually rush past.
A good question can be a more useful achievement than a quick answer.
Share what you are learning while leaving room for what you do not know.
Practice explaining the idea simply enough to discover your own gaps.
You can ask for an example instead of pretending to understand.
Keep the curiosity that made you begin before comparison made you hesitate.
Your interests do not have to become a business to deserve your time.
Let a small experiment test a large assumption.
Make learning visible by using something you just discovered.
You can choose a mentor for a skill without borrowing their whole life.
Become familiar with the feeling of improving through repetition.
Some progress begins with admitting that the old method has stopped helping.
Read something that makes your familiar question feel new.
Leave a little room in your plans for a better idea.
You can change your habits without changing everything at once.
Let the work show you which skill needs your next hour.
The ability to ask for feedback is a skill worth practicing too.
Your understanding can deepen even when the answer becomes less simple.
Try the unfamiliar route when the cost of experimenting is small.
You can move beyond a label that no longer describes you.
The skill you admire may have an ordinary first lesson you can take today.
Use comparison to find a technique, not to assign yourself a rank.
Notice when a former challenge becomes something you can help others with.
Give your new habits enough repetitions to become familiar.
Keep a record of questions that deserve more than a hurried answer.
You are allowed to leave an achievement behind when your values change.
Let your definition of progress include becoming easier to live with.
Learning to listen can improve work that has nothing to do with speaking.
Choose one assumption to examine before you build another plan on it.
You can learn a great deal by finishing something modest.
Be curious about the person you are when you feel most at ease.
Your next useful insight may arrive while you are trying rather than planning.
Make room for a version of success that includes your well-being.
You do not need to erase your starting point to appreciate how far you have come.
Let the outcome of a small test refine the direction of your ambition.
Develop the patience to understand before you try to master.
Become someone who can say that you learned something today.`,
Calm: `You can leave an unanswered message until you have the space to respond.
Let the next breath arrive without trying to improve it.
There is no prize for carrying tomorrow's worries through tonight.
Set down your phone and notice the room that is holding you.
You are allowed a few minutes that produce nothing measurable.
Unclench your hands before you decide what to do next.
Let a familiar sound bring your attention back to the present.
Your day can have a quiet corner that belongs to nobody else's urgency.
Take a sip of water and give yourself a moment between tasks.
You can appreciate a peaceful moment without making it last forever.
Some questions become easier after a night of rest.
Open a window if you can and notice the air against your skin.
You do not have to solve a feeling to sit with it kindly.
Let the ordinary comfort of a warm drink have your full attention.
Your body deserves care before it has to demand it.
Make a little less noise around the thing you are trying to understand.
You can let a conversation end without replaying every sentence tonight.
Sit somewhere comfortable without turning the pause into a task.
Choose one gentle thing to do before the day becomes busy again.
Let the light in the room be something you notice.
You can put a boundary around how much news you carry today.
An unhurried meal is a worthwhile part of a full life.
Give the evening a softer beginning than the afternoon had.
It is okay to want silence after a day full of voices.
You can choose a simple pleasure without making it a reward.
Let your feet remind you that you are here, on this ground.
Not every open space in your schedule needs to be filled.
Pause long enough to tell the difference between hunger, fatigue, and urgency.
You can enjoy the walk without counting what it accomplishes.
Give yourself a transition between the workday and the rest of your life.
Let a harmless imperfection remain unfixed for a while.
You are allowed to choose the quieter plan.
Release one expectation that the day no longer has room to hold.
Turn down the volume of the room before asking more of your mind.
You do not have to rehearse every possible conversation in advance.
Let your attention rest on one ordinary object for a moment.
A familiar routine can offer comfort without needing to be exciting.
You can take the scenic route when there is no need to hurry.
Put your work somewhere you can leave it until tomorrow.
The sky can be worth looking at even on a completely ordinary day.
You are allowed to be unavailable while you recover your energy.
Make your next movement a little less rushed.
There is room for a quiet yes to something you enjoy.
Let a pleasant moment stay simple instead of documenting every part of it.
You can stop preparing for the day once the day is over.
Give your senses something gentle to pay attention to.
Choose a little order where it brings comfort, and leave the rest for later.
A slow stretch can be a kind way to mark a new beginning.
You do not have to make every free hour useful to someone else.
Notice whether the pace you are keeping is a pace you chose.
Allow the music to be the only thing you do for a few minutes.
You can let another person have the last word without losing your peace.
The task will still exist after you have taken a proper break.
Make a place for beauty that does not ask anything of you.
You are allowed to stop checking for a result you cannot change tonight.
Let a small household ritual become an invitation to slow down.
You can care deeply without staying constantly on alert.
Rest your eyes on something farther away than a screen.
A quiet morning can begin with one less thing to rush through.
Let the room be quiet enough for you to hear what you need.
You do not have to earn the right to feel comfortable in your own home.
Choose one place where you will let good enough be enough today.
Leave a little breathing space between your commitments.
You can take a moment to settle before you answer.
Notice the weight of the chair supporting you without needing to do anything.
Let yourself enjoy the absence of a problem for a little while.
You can make tomorrow's plan and then stop working on tomorrow.
Give your mind a familiar, gentle place to return to.
It is possible to care about the future and still enjoy this afternoon.
You are allowed to let a slow day remain slow.
Put one unnecessary obligation back where it came from.
Let a little fresh air be part of how you begin again.
You can lower the demands on yourself without lowering your worth.
Make time for the kind of company that lets your shoulders relax.
This pause does not need an explanation to be worthwhile.`
}).flatMap(([category, text]) => text.split('\n').map((text, index) => ({id: `motive-extra-${category.toLowerCase()}-${index + 1}`, text, category, author: 'A Motive reminder'})));

function quoteKey(text) { return text.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]/gu, ''); }
function uniqueQuotes(quotes) {
  const seen = new Set();
  return quotes.filter(quote => { const key = quoteKey(quote.text); if (seen.has(key)) return false; seen.add(key); return true; });
}
// Share history across filters. Reset only the selected pool after it is exhausted.
function pickUnseenQuote(pool, history, currentId, random = Math.random) {
  if (!pool.length) return null;
  let seen = new Set(history);
  let available = pool.filter(quote => !seen.has(quote.id) && quote.id !== currentId);
  if (!available.length) {
    for (const quote of pool) seen.delete(quote.id);
    available = pool.filter(quote => quote.id !== currentId);
  }
  const options = available.length ? available : pool;
  const quote = options[Math.min(options.length - 1, Math.floor(random() * options.length))];
  seen.add(quote.id);
  return {quote, history: [...seen]};
}
