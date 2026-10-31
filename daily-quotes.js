'use strict';
// Append original dated records; preserve every existing ID.
const dailyReminders = [
  {
    "id": "daily-2026-10-18-1",
    "text": "A clear request gives other people a fair chance to understand you.",
    "category": "Confidence",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-2",
    "text": "Your abilities do not disappear when someone else has a better day.",
    "category": "Confidence",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-3",
    "text": "You can bring a steady voice to a conversation you once avoided.",
    "category": "Confidence",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-4",
    "text": "Let your standards include how respectfully you speak to yourself.",
    "category": "Confidence",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-5",
    "text": "The effort you put into learning belongs on your list of strengths.",
    "category": "Confidence",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-6",
    "text": "You can value your own company without closing yourself off to others.",
    "category": "Confidence",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-7",
    "text": "When you make room for your opinion, you make room for honest connection.",
    "category": "Confidence",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-8",
    "text": "Your perspective can be valuable before it becomes popular.",
    "category": "Confidence",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-9",
    "text": "There is no need to apologize for having a thoughtful ambition.",
    "category": "Confidence",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-10",
    "text": "You can make a confident choice and still remain open to new information.",
    "category": "Confidence",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-11",
    "text": "Let yourself be seen doing something you care about.",
    "category": "Confidence",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-12",
    "text": "Your natural way of caring may be a strength someone else relies on.",
    "category": "Confidence",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-13",
    "text": "You are allowed to prefer a life that makes sense from the inside.",
    "category": "Confidence",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-14",
    "text": "You can stop auditioning for approval in relationships built on respect.",
    "category": "Confidence",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-15",
    "text": "One person declining your idea does not erase its possibilities.",
    "category": "Confidence",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-16",
    "text": "Give the work you are proud of a name and a place to be shared.",
    "category": "Confidence",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-17",
    "text": "You can accept responsibility without accepting contempt.",
    "category": "Confidence",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-18",
    "text": "Let your curiosity take you into spaces your nerves would rather avoid.",
    "category": "Confidence",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-19",
    "text": "Your ordinary courage deserves recognition from you.",
    "category": "Confidence",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-20",
    "text": "A gentle personality can carry a very firm conviction.",
    "category": "Confidence",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-21",
    "text": "Write down the distraction so your attention can stop holding it.",
    "category": "Focus",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-22",
    "text": "Choose the next task by its purpose rather than its noise.",
    "category": "Focus",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-23",
    "text": "A deliberate start can rescue an hour that began in a hurry.",
    "category": "Focus",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-24",
    "text": "Leave a clear ending to each task before you turn toward another.",
    "category": "Focus",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-25",
    "text": "You can keep a useful habit without keeping its original schedule.",
    "category": "Focus",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-26",
    "text": "Ask which small action would make this project less confusing.",
    "category": "Focus",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-27",
    "text": "Let your working space remind you of one priority at a time.",
    "category": "Focus",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-28",
    "text": "When the list grows, reconsider the commitments before extending the day.",
    "category": "Focus",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-29",
    "text": "Give a difficult decision its own quiet page.",
    "category": "Focus",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-30",
    "text": "You can prepare for an important moment in several ordinary sessions.",
    "category": "Focus",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-31",
    "text": "Use the first few minutes to remove the obstacle you keep stepping around.",
    "category": "Focus",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-32",
    "text": "A brief review can turn experience into a better next attempt.",
    "category": "Focus",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-33",
    "text": "Decide what you will ignore while you finish what matters.",
    "category": "Focus",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-34",
    "text": "Let the first finished piece teach you how to approach the rest.",
    "category": "Focus",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-35",
    "text": "Choose a routine that still welcomes you after an interruption.",
    "category": "Focus",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-36",
    "text": "You can protect a block of time without filling it to the edges.",
    "category": "Focus",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-37",
    "text": "Organize the materials around the next action, not the entire dream.",
    "category": "Focus",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-38",
    "text": "An important task deserves a place beyond the bottom of your spare time.",
    "category": "Focus",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-39",
    "text": "Notice when planning has become a way to delay a manageable beginning.",
    "category": "Focus",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-40",
    "text": "Give your unfinished work a clear next instruction before leaving it.",
    "category": "Focus",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-41",
    "text": "You can be disappointed in the result without being cruel to the person who tried.",
    "category": "Resilience",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-42",
    "text": "Let the next hour ask less of you when the last one asked too much.",
    "category": "Resilience",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-43",
    "text": "You can find a different pace after an unexpected change.",
    "category": "Resilience",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-44",
    "text": "A generous interpretation of your effort can help you return to it.",
    "category": "Resilience",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-45",
    "text": "Look for the support that belongs to the problem you actually have.",
    "category": "Resilience",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-46",
    "text": "An imperfect repair can still make something usable again.",
    "category": "Resilience",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-47",
    "text": "You do not have to carry a hard week with the same expression every day.",
    "category": "Resilience",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-48",
    "text": "Let a trusted voice remind you of the options you cannot see yet.",
    "category": "Resilience",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-49",
    "text": "You can keep your values while releasing a plan that no longer fits.",
    "category": "Resilience",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-50",
    "text": "The part of the path behind you does not need to be tidy for you to continue.",
    "category": "Resilience",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-51",
    "text": "You are allowed to look for an easier way through a genuine difficulty.",
    "category": "Resilience",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-52",
    "text": "A small dependable action can bring shape to an unpredictable day.",
    "category": "Resilience",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-53",
    "text": "Make room for the possibility that this effort is working slowly.",
    "category": "Resilience",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-54",
    "text": "You can offer yourself patience without knowing how long recovery will take.",
    "category": "Resilience",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-55",
    "text": "The next helpful decision does not have to be a dramatic one.",
    "category": "Resilience",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-56",
    "text": "Let your response be guided by what you need rather than what looks impressive.",
    "category": "Resilience",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-57",
    "text": "A difficult transition can include moments of comfort without contradiction.",
    "category": "Resilience",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-58",
    "text": "You can choose a better boundary after discovering an old one was too thin.",
    "category": "Resilience",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-59",
    "text": "Keep one small opening for kindness when the day feels closed.",
    "category": "Resilience",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-60",
    "text": "Returning to a meaningful goal can begin with remembering why it mattered.",
    "category": "Resilience",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-61",
    "text": "You can learn a new approach without dismissing everything you knew before.",
    "category": "Growth",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-62",
    "text": "Let one practical question guide your next conversation with someone experienced.",
    "category": "Growth",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-63",
    "text": "A familiar task can reveal a new lesson when you pay closer attention.",
    "category": "Growth",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-64",
    "text": "You are allowed to study something simply because it makes the world more interesting.",
    "category": "Growth",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-65",
    "text": "Try describing the problem differently before assuming it has no solution.",
    "category": "Growth",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-66",
    "text": "A clear example can turn an abstract idea into something you can practice.",
    "category": "Growth",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-67",
    "text": "Notice the conditions that help your best thinking happen.",
    "category": "Growth",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-68",
    "text": "You can build on your strengths while giving a weaker skill patient attention.",
    "category": "Growth",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-69",
    "text": "Let your next question come from what you observed, not just what you expected.",
    "category": "Growth",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-70",
    "text": "The courage to reconsider can make your convictions more thoughtful.",
    "category": "Growth",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-71",
    "text": "Give yourself a reason to revisit something you once found intimidating.",
    "category": "Growth",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-72",
    "text": "You can be changed by a conversation without needing to win it.",
    "category": "Growth",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-73",
    "text": "A notebook can hold the questions your current understanding cannot answer.",
    "category": "Growth",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-74",
    "text": "Let your progress include becoming more precise about what you need.",
    "category": "Growth",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-75",
    "text": "An unfamiliar skill becomes less mysterious when you practice its smallest part.",
    "category": "Growth",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-76",
    "text": "You can improve a habit by noticing what interrupts it without blaming yourself.",
    "category": "Growth",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-77",
    "text": "Be willing to find a useful idea outside your usual sources.",
    "category": "Growth",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-78",
    "text": "Let the work become more honest as your understanding becomes clearer.",
    "category": "Growth",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-79",
    "text": "You can choose a learning goal that belongs to your curiosity rather than your résumé.",
    "category": "Growth",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-80",
    "text": "Make something you can revisit later and see how your thinking has changed.",
    "category": "Growth",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-81",
    "text": "You can let your face relax before the next conversation begins.",
    "category": "Calm",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-82",
    "text": "Notice one color in the room that you would like to keep looking at.",
    "category": "Calm",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-83",
    "text": "Give the walk from one task to another a little unclaimed space.",
    "category": "Calm",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-84",
    "text": "You can put down the urge to make sense of everything before bedtime.",
    "category": "Calm",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-85",
    "text": "Let a comfortable chair be a place to rest rather than another place to work.",
    "category": "Calm",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-86",
    "text": "The sound of an ordinary afternoon can be enough company for a moment.",
    "category": "Calm",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-87",
    "text": "You are allowed to have a favorite part of the day that serves no larger purpose.",
    "category": "Calm",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-88",
    "text": "Let the first moments after waking belong to the room around you.",
    "category": "Calm",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-89",
    "text": "You can notice a worry without giving it a new assignment.",
    "category": "Calm",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-90",
    "text": "Choose a softer light when the day is asking you to slow down.",
    "category": "Calm",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-91",
    "text": "A few quiet minutes can belong to you even in an unfinished home.",
    "category": "Calm",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-92",
    "text": "Let your next break include something your eyes can rest on.",
    "category": "Calm",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-93",
    "text": "You can appreciate the familiar without needing to improve it today.",
    "category": "Calm",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-94",
    "text": "There is room to pause between receiving a request and making a promise.",
    "category": "Calm",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-95",
    "text": "Let a simple meal be an occasion for being present.",
    "category": "Calm",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-96",
    "text": "You can stop measuring a peaceful moment against what you could be doing.",
    "category": "Calm",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-97",
    "text": "Give the evening one small ritual that signals you are allowed to settle.",
    "category": "Calm",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-98",
    "text": "The next few minutes can be free from comparison.",
    "category": "Calm",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-99",
    "text": "You can choose a little comfort while leaving the larger question unanswered.",
    "category": "Calm",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-18-100",
    "text": "Let the end of the day be an arrival rather than another deadline.",
    "category": "Calm",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-19-confidence-01",
    "text": "When you introduce yourself, include something you enjoy, not only the job you do.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-confidence-02",
    "text": "A seat at the table is also a place from which to ask a useful question.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-confidence-03",
    "text": "Keep a folder of kind messages so a doubtful afternoon does not become your only witness.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-confidence-04",
    "text": "The details you notice may be exactly what a shared project is missing.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-confidence-05",
    "text": "You can say what you would prefer before offering to accommodate everyone else.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-confidence-06",
    "text": "Receiving help does not erase the part you contributed.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-confidence-07",
    "text": "You can bring your accent, your background, and your own examples into the conversation.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-confidence-08",
    "text": "When someone trusts your judgment, let yourself hear the trust as well as the responsibility.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-confidence-09",
    "text": "You may sign your name to work that reflects sincere care, even while your skills are developing.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-confidence-10",
    "text": "Your place in a friendship can include being the person who gets invited and cared for.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-focus-01",
    "text": "If a task keeps slipping away, give it a verb, a location, and a time to begin.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-focus-02",
    "text": "Keep a parking page for promising ideas that arrive while you are finishing something else.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-focus-03",
    "text": "Before a meeting ends, write down who will do what next.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-focus-04",
    "text": "Separate gathering the materials from using them when switching back and forth slows you down.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-focus-05",
    "text": "A file name that makes sense tomorrow is a small gift to your future work.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-focus-06",
    "text": "Check that the task still needs doing before finding a faster way to do it.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-focus-07",
    "text": "Choose one place to capture requests so your attention does not have to patrol five lists.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-focus-08",
    "text": "Set a limit on searching for examples, then make an example of your own.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-focus-09",
    "text": "When instructions conflict, resolve the conflict before spending another hour on the work.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-focus-10",
    "text": "Let the checklist remember the repeated details so you can think about the unusual ones.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-resilience-01",
    "text": "After a cancelled plan, ask what would make the time that remains a little kinder.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-resilience-02",
    "text": "A day spent replacing what was lost is not a day in which you did nothing.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-resilience-03",
    "text": "You can renegotiate a promise made before your circumstances changed.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-resilience-04",
    "text": "Let someone share the practical errands when explaining the whole situation feels too much.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-resilience-05",
    "text": "A missed connection can be followed by checking the next departure, one fact at a time.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-resilience-06",
    "text": "When a familiar place feels different, bring along one small comfort you recognize.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-resilience-07",
    "text": "An apology can open a repair; the steady actions afterward help build it.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-resilience-08",
    "text": "You can mark a difficult anniversary with company, quiet, or a plan of your own choosing.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-resilience-09",
    "text": "Some days the brave decision is to tell someone that the current arrangement is not working.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-resilience-10",
    "text": "The first visit back can be brief; returning does not require staying longer than you can manage.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-growth-01",
    "text": "Compare two attempts and name one thing you changed on purpose.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-growth-02",
    "text": "When you teach a new skill, remember the detail you wished someone had explained to you.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-growth-03",
    "text": "Try predicting the result before checking the answer; the difference can show you what to explore.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-growth-04",
    "text": "A glossary in your own words can make an unfamiliar subject feel more approachable.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-growth-05",
    "text": "Ask how an experienced person decides, not only what they would choose.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-growth-06",
    "text": "Changing one ingredient at a time can help you understand a recipe, a routine, or a method.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-growth-07",
    "text": "Revisit a piece of work you once admired and notice what you can now see in its construction.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-growth-08",
    "text": "An explanation that uses your everyday experience can help new knowledge find a home.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-growth-09",
    "text": "When two sources disagree, write down the question their disagreement raises.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-growth-10",
    "text": "Save an early attempt; it can remind you that skills have a history, not just a finished appearance.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-calm-01",
    "text": "Watch the steam leave your cup for a moment before the next part of the morning begins.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-calm-02",
    "text": "A basket by the door can hold the things you are not taking into this quiet hour.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-calm-03",
    "text": "You can hear the rain without deciding whether it has spoiled the day.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-calm-04",
    "text": "Let the last page you read tonight be enough, even if a chapter remains unfinished.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-calm-05",
    "text": "Enjoy the warmth of clean laundry before turning it into another item to put away.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-calm-06",
    "text": "You can watch a bird leave the branch without needing to follow where it goes.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-calm-07",
    "text": "The familiar smell of your kitchen can be a small welcome home.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-calm-08",
    "text": "An empty bench can simply be somewhere to sit, without becoming a destination to justify.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-calm-09",
    "text": "Let the song end before choosing what comes next.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-19-calm-10",
    "text": "A patch of afternoon sunlight does not need a special occasion to be enjoyed.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-19"
  },
  {
    "id": "daily-2026-10-20-confidence-01",
    "text": "Your name is worth pronouncing carefully; you can help someone get it right.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-confidence-02",
    "text": "You may let a good piece of news be yours for a while before deciding who to tell.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-confidence-03",
    "text": "When people regularly bring a certain problem to you, notice the trust behind their request.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-confidence-04",
    "text": "You can describe what you made without comparing it to the most impressive thing in the room.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-confidence-05",
    "text": "A photograph does not have to capture your favorite angle to record a life you are glad to be living.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-confidence-06",
    "text": "You can tell a story at your natural pace; the listeners can wait for the part that matters.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-confidence-07",
    "text": "Declining to laugh at your own expense can be a quiet way to stand beside yourself.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-confidence-08",
    "text": "On your first day, a full lunch break can be part of belonging rather than something you have to earn.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-confidence-09",
    "text": "You can notice the difference between being asked for your opinion and being asked to agree.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-confidence-10",
    "text": "A role you have held for years is not the only introduction you are allowed to give yourself.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-focus-01",
    "text": "Count the waiting time in your plan when the next step depends on another person.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-focus-02",
    "text": "Put the question at the top of a long message so the person helping can find it.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-focus-03",
    "text": "A task that needs two people becomes clearer when you name the handoff between them.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-focus-04",
    "text": "Give recurring interruptions an appointment instead of letting them choose every arrival.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-focus-05",
    "text": "Before copying information into a second list, decide which copy will stay up to date.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-focus-06",
    "text": "Use an estimate as a starting measurement; revise it when the work shows you its real size.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-focus-07",
    "text": "When a tool has too many settings, choose a workable default and finish one real task with it.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-focus-08",
    "text": "Move a decision forward by writing the two options you are actually choosing between.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-focus-09",
    "text": "Notice whether you are waiting for permission that nobody has been asked to give.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-focus-10",
    "text": "A shared definition can prevent an hour of two people solving different problems.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-resilience-01",
    "text": "When news changes twice in a day, leave yourself room to update your response twice.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-resilience-02",
    "text": "A difficult conversation can be followed by something ordinary: washing a cup, folding a towel, walking to the door.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-resilience-03",
    "text": "If a place you used to belong no longer fits, you can look for company around a current interest.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-resilience-04",
    "text": "You can ask what the next review step is when a request is declined.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-resilience-05",
    "text": "The hours spent listening to someone through a difficult change count as care, even if nothing was solved.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-resilience-06",
    "text": "A season of depending on others can still contain choices that are yours.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-resilience-07",
    "text": "A broken routine can leave behind clues about what mattered most in it.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-resilience-08",
    "text": "You can remember someone by telling an ordinary story, not only the story of losing them.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-resilience-09",
    "text": "When a long project ends unexpectedly, the relationships and skills it gave you are still part of what remains.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-resilience-10",
    "text": "You may keep a hopeful object on the shelf without knowing when you will use it again.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-growth-01",
    "text": "Read the correction beside your original answer and trace the exact point where your reasoning changed.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-growth-02",
    "text": "Learn the names of three things on your usual walk; a familiar route can become a new subject.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-growth-03",
    "text": "Ask a beginner to try your instructions; the place they pause may show what you left unsaid.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-growth-04",
    "text": "A practice session can be devoted to recognizing a mistake sooner, rather than avoiding every mistake.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-growth-05",
    "text": "Notice which parts of a skill still require a demonstration and which you can now explain.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-growth-06",
    "text": "The history of a familiar object can turn an ordinary errand into a question worth following.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-growth-07",
    "text": "When you meet a new word twice, give it a sentence of your own.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-growth-08",
    "text": "Trade methods with someone who reaches the same result by a different route.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-growth-09",
    "text": "Keep a list of what surprised you during a project; surprises can reveal assumptions you did not know you held.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-growth-10",
    "text": "Sometimes learning means recognizing a pattern across things you thought were unrelated.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-calm-01",
    "text": "Noticing that the room has grown cool is enough reason to reach for a blanket.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-calm-02",
    "text": "You can enjoy a conversation that wanders without steering it toward a useful conclusion.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-calm-03",
    "text": "A hobby can remain a place to play, even when you become good enough to be asked for more.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-calm-04",
    "text": "The small pause while dough rises or paint dries does not have to be claimed by another chore.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-calm-05",
    "text": "A favorite poem can be read again without trying to learn anything new from it.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-calm-06",
    "text": "You may change out of uncomfortable clothes before deciding what the evening needs from you.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-calm-07",
    "text": "A kind visit can end while it is still pleasant; you do not have to use all your energy.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-calm-08",
    "text": "There can be space in a conversation for both people to look out the window.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-calm-09",
    "text": "You can choose the familiar route home simply because fewer decisions would feel welcome today.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-20-calm-10",
    "text": "Leave a small margin in your travel plans for arriving without immediately having to begin.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-20"
  },
  {
    "id": "daily-2026-10-21-confidence-01",
    "text": "Before introducing yourself, remember that a conversation does not require a performance.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-confidence-02",
    "text": "Choose the seat where you can hear clearly; your participation deserves practical support.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-confidence-03",
    "text": "A compliment does not create a debt. You can receive it with a simple thank you.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-confidence-04",
    "text": "Name the part you contributed when telling the story of a shared success.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-confidence-05",
    "text": "When you notice yourself guessing what others think, return to what they actually said.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-confidence-06",
    "text": "Let your first attempt have an ordinary audience instead of an imaginary jury.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-confidence-07",
    "text": "Keep a note of the questions you answered well; memory often saves the awkward moments first.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-confidence-08",
    "text": "If you are asked to decide too quickly, requesting a moment is a complete response.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-confidence-09",
    "text": "Wear the comfortable shoes to the important meeting. Confidence can use a steady footing.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-confidence-10",
    "text": "One person disagreeing with your preference does not make it less yours.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-focus-01",
    "text": "Before opening another tab, write down the question the current one is meant to answer.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-focus-02",
    "text": "Put the document you need beside the document you are making; reduce the distance between looking and doing.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-focus-03",
    "text": "A useful stopping point includes a note about where to begin next time.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-focus-04",
    "text": "When a task keeps expanding, give the extra ideas a separate page instead of a longer afternoon.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-focus-05",
    "text": "Check whether the next reminder needs your attention now or only a place on your calendar.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-focus-06",
    "text": "Keep the instructions visible until the unfamiliar process becomes familiar.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-focus-07",
    "text": "For a short work session, choose a result that can be described without the word everything.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-focus-08",
    "text": "If searching for the right tool takes longer than the task, try the tool already within reach.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-focus-09",
    "text": "Leave one line at the top of your notes for the decision this meeting needs to make.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-focus-10",
    "text": "Finish reading the paragraph before deciding whether to follow its link.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-resilience-01",
    "text": "If the first place cannot help, ask where they would suggest trying next.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-resilience-02",
    "text": "An unsuccessful repair can still tell you which part needs closer attention.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-resilience-03",
    "text": "When plans fall through, take care of the person who was relying on them: yourself.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-resilience-04",
    "text": "Put the rejection letter away before deciding what the whole week means.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-resilience-05",
    "text": "A difficult return can begin with opening the folder, without promising to finish its contents.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-resilience-06",
    "text": "After an interruption, reread the last sentence you wrote. You are allowed a bridge back.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-resilience-07",
    "text": "Keep the useful advice from a disappointing conversation without carrying every word of it.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-resilience-08",
    "text": "If your usual routine no longer fits, adjusting it can be a way of staying committed.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-resilience-09",
    "text": "Give a changed plan a new name so you can stop measuring it against the one that ended.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-resilience-10",
    "text": "Accepting a borrowed tool, a lift, or a second pair of hands still leaves the effort yours.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-growth-01",
    "text": "When you learn a shortcut, also learn when the longer method is useful.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-growth-02",
    "text": "Try explaining a new idea with an example from an ordinary day; notice where your explanation needs more work.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-growth-03",
    "text": "A question you could not have asked last month is evidence of a changing understanding.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-growth-04",
    "text": "Keep one early draft so your later skills have something real to look back at.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-growth-05",
    "text": "Before adopting a habit you admire, ask which part would fit the life you actually have.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-growth-06",
    "text": "Let a more experienced person show you how they check their work, not only how they begin it.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-growth-07",
    "text": "Curiosity can start with noticing the name of something you pass every day.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-growth-08",
    "text": "When practice becomes easier, change one variable instead of replacing the whole exercise.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-growth-09",
    "text": "Write down what surprised you after trying something unfamiliar; surprise is useful information.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-growth-10",
    "text": "Teach the small piece you understand, and be clear about the piece you are still learning.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-calm-01",
    "text": "Let the kettle finish before deciding whether this pause needs a purpose.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-calm-02",
    "text": "Close the cupboard gently. Small sounds can be one part of making a room feel easier.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-calm-03",
    "text": "If the room feels crowded, clear a place to set down what you are carrying.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-calm-04",
    "text": "A quiet meal does not need to become a planning meeting with yourself.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-calm-05",
    "text": "Notice the weight of a familiar mug in your hands without asking the moment to improve anything.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-calm-06",
    "text": "You may leave the pleasant background music playing without finding something productive to do alongside it.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-calm-07",
    "text": "Before answering the next notification, notice whether you were enjoying the silence.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-calm-08",
    "text": "Give the last few minutes before leaving a place to gathering your things at a comfortable pace.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-calm-09",
    "text": "An empty corner of the calendar can stay empty after you notice it.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-21-calm-10",
    "text": "Choose one surface where nothing needs to be sorted tonight.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-21"
  },
  {
    "id": "daily-2026-10-22-confidence-01",
    "text": "You can introduce yourself without listing the reasons someone might dismiss you.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-confidence-02",
    "text": "Let your first answer reflect your preference before you start negotiating it away.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-confidence-03",
    "text": "A chair at the table is useful only if you let yourself sit down.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-confidence-04",
    "text": "When praise arrives, try receiving the specific thing someone noticed.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-confidence-05",
    "text": "You can ask for the instructions again and still be the right person for the work.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-confidence-06",
    "text": "Wear the choice you like without rehearsing a defense of it all morning.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-confidence-07",
    "text": "Your experience belongs in the discussion even when it comes from a different route.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-confidence-08",
    "text": "The person reading your application needs your evidence, not your apology.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-confidence-09",
    "text": "You are allowed to change your introduction as you get to know yourself better.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-confidence-10",
    "text": "Before volunteering for extra work, check whether your yes has room behind it.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-focus-01",
    "text": "Write the question you are answering at the top of the page; let it guide what stays.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-focus-02",
    "text": "Save the interesting side road in a note so you can finish the road you chose.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-focus-03",
    "text": "Before opening another tab, name what you expect to find there.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-focus-04",
    "text": "Make the next handoff clear enough that tomorrow does not begin with detective work.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-focus-05",
    "text": "Give the difficult paragraph a rough sentence to work with.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-focus-06",
    "text": "Put the tool for your next task within reach before your break begins.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-focus-07",
    "text": "When a task keeps expanding, write down what a useful stopping point looks like.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-focus-08",
    "text": "Read the instructions once with your hands away from the keyboard.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-focus-09",
    "text": "A short list of decisions can move a project farther than another page of possibilities.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-focus-10",
    "text": "Leave yourself a one-line starting note before closing the work tonight.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-resilience-01",
    "text": "A repaired sleeve can carry another season; usefulness does not require an untouched beginning.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-resilience-02",
    "text": "Name what the interruption actually changed before rewriting the whole plan.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-resilience-03",
    "text": "You can be disappointed with the outcome and still keep the part you learned.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-resilience-04",
    "text": "If the first route closes, bring your purpose with you when you ask for directions.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-resilience-05",
    "text": "After a difficult conversation, take care of the ordinary needs that were waiting.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-resilience-06",
    "text": "Mending a small tear today can be enough work for these hands.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-resilience-07",
    "text": "Let a missed appointment lead to a new arrangement rather than a verdict on your character.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-resilience-08",
    "text": "The repair may need a different thread from the one that made the original seam.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-resilience-09",
    "text": "You can return to something meaningful without pretending the interruption was easy.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-resilience-10",
    "text": "When a setback arrives, tell one trusted person what practical help would make tomorrow simpler.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-growth-01",
    "text": "Ask an experienced person what they check before they call the work finished.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-growth-02",
    "text": "Try explaining the idea in everyday words; the missing pieces often become easier to see.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-growth-03",
    "text": "Keep a sample of your early work so improvement has something concrete to stand beside.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-growth-04",
    "text": "A useful correction tells you where to practice next, not where your ability ends.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-growth-05",
    "text": "Learning to mend begins with noticing which part can still hold together.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-growth-06",
    "text": "Choose one small technique to repeat before collecting five more tutorials.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-growth-07",
    "text": "You can retire a method with gratitude for the work it helped you do.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-growth-08",
    "text": "Write down the surprising result before memory tidies it into what you expected.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-growth-09",
    "text": "Let a thoughtful question count as participation while you are learning the room.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-growth-10",
    "text": "Practice asking for an example when an explanation stays too abstract.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-calm-01",
    "text": "You can set the cup down and feel both hands free for a moment.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-calm-02",
    "text": "Let the room have its ordinary sounds without turning each one into a task.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-calm-03",
    "text": "The message can remain a draft while you decide what you mean.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-calm-04",
    "text": "Choose a comfortable place to wait; waiting does not need an extra layer of discomfort.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-calm-05",
    "text": "One quiet meal does not have to become a plan for improving your whole life.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-calm-06",
    "text": "Give your eyes a nearby, familiar object to rest on between decisions.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-calm-07",
    "text": "You may close a conversation kindly before you have used up all your energy.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-calm-08",
    "text": "Leave a little space between hearing a request and offering an answer.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-calm-09",
    "text": "Let the last few minutes of the evening belong to something that asks very little of you.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-22-calm-10",
    "text": "A slower pace can begin with how gently you put away the thing in your hand.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-22"
  },
  {
    "id": "daily-2026-10-23-confidence-01",
    "text": "You can let a preference be small and still say it out loud.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-confidence-02",
    "text": "Ask for your name to be pronounced correctly; it is worth learning.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-confidence-03",
    "text": "An invitation to contribute does not require you to sound like the last person who spoke.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-confidence-04",
    "text": "When you describe your work, include the part you made possible.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-confidence-05",
    "text": "You can choose the seat where you can hear, see, and participate comfortably.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-confidence-06",
    "text": "A question about your availability deserves an answer that includes your actual limits.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-confidence-07",
    "text": "You may take a compliment home without finding a flaw to balance it.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-confidence-08",
    "text": "Let the next introduction include something you enjoy, not just something you do for others.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-confidence-09",
    "text": "Your reason for declining can be honest without becoming a full account of your week.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-confidence-10",
    "text": "Try letting your signature stand at the bottom of work you are proud to have done.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-focus-01",
    "text": "Before revising the whole document, find the sentence that is causing the confusion.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-focus-02",
    "text": "Give each open window a purpose; close the ones whose purpose has ended.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-focus-03",
    "text": "Decide what you need from the meeting before you start preparing slides.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-focus-04",
    "text": "If you keep rereading the same page, write one question for the next pass.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-focus-05",
    "text": "Put the next appointment beside the task list so your plan fits the time you have.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-focus-06",
    "text": "A folder with a clear name is a small favor to your future attention.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-focus-07",
    "text": "When you stop mid-task, mark the exact place where the next action begins.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-focus-08",
    "text": "You can finish a useful version before choosing its final colors.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-focus-09",
    "text": "Choose which detail needs precision and which detail only needs to be understandable.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-focus-10",
    "text": "Before accepting a new deadline, look at the commitments already occupying that day.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-resilience-01",
    "text": "When plans fall through, keep the contact details; the conversation may still be useful later.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-resilience-02",
    "text": "A difficult afternoon does not need to decide how you treat yourself at dinner.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-resilience-03",
    "text": "You can ask for a correction without turning the mistake into a public trial.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-resilience-04",
    "text": "If you have to start over, bring the notes that explain what you would do differently.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-resilience-05",
    "text": "Some days, the way forward is to arrange a ride, make a call, or find the missing form.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-resilience-06",
    "text": "Let the people helping you know which part is hardest to manage alone.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-resilience-07",
    "text": "A delayed reply can be answered when you are ready without calling yourself a bad friend.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-resilience-08",
    "text": "When a familiar method fails, inspect the conditions before doubting every skill you have.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-resilience-09",
    "text": "Keep one ordinary promise to yourself while the larger situation remains unsettled.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-resilience-10",
    "text": "You can leave an unsuccessful attempt behind without leaving your curiosity there.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-growth-01",
    "text": "Ask what a good example looks like before spending hours guessing the standard.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-growth-02",
    "text": "Try one unfamiliar ingredient in a familiar recipe; learning can have a steady base.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-growth-03",
    "text": "Explain the mistake in enough detail that the next attempt has something new to use.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-growth-04",
    "text": "A note about what confused you can become a better question tomorrow.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-growth-05",
    "text": "Let a beginner show you which instructions you have stopped noticing.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-growth-06",
    "text": "You can keep the lesson from advice without adopting the entire way someone else lives.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-growth-07",
    "text": "Practice the transition between two steps, not only the steps themselves.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-growth-08",
    "text": "Choose a small experiment whose result you will actually have time to observe.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-growth-09",
    "text": "When you discover an easier method, share it without making the older effort seem foolish.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-growth-10",
    "text": "Notice which kind of help made learning easier, so you can ask for it again.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-calm-01",
    "text": "A sleeping cat does not check whether the chair is the most productive place to be.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-calm-02",
    "text": "You can let a familiar room be enough company for a quiet half hour.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-calm-03",
    "text": "Move the cushion, loosen the collar, or close the bright screen; comfort can start with an adjustment.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-calm-04",
    "text": "There is no need to fill the silence while the kettle warms.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-calm-05",
    "text": "Let one corner of your day stay free from measuring how well you are doing.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-calm-06",
    "text": "Rest can look as ordinary as putting your feet up in the chair you already own.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-calm-07",
    "text": "The cat curled on the chair is a reminder that a soft place may be used, not just kept tidy.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-calm-08",
    "text": "You may enjoy a quiet moment without collecting a photograph or a lesson from it.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-calm-09",
    "text": "An unanswered thought can wait while you notice the warmth of the blanket.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-23-calm-10",
    "text": "Lower the brightness of the room before asking yourself to settle into the evening.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-23"
  },
  {
    "id": "daily-2026-10-24-confidence-01",
    "text": "You can correct an assumption about yourself before it becomes the plan everyone follows.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-confidence-02",
    "text": "The clothes that help you feel at ease belong in the room with you.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-confidence-03",
    "text": "Let your request include the size, time, or arrangement that would actually work.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-confidence-04",
    "text": "You may enjoy being good at something without turning it into a competition.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-confidence-05",
    "text": "Before agreeing that you are too late, check whether the door is still open.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-confidence-06",
    "text": "You can share an opinion that is still developing if you name the part you are exploring.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-confidence-07",
    "text": "When someone offers you a turn, you do not have to give it away to prove you are considerate.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-confidence-08",
    "text": "A boundary you set during the week can still guide your plans when the weekend arrives.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-confidence-09",
    "text": "Your accent can carry a thoughtful answer exactly as it is.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-confidence-10",
    "text": "Let yourself be the person who suggests the place you have wanted to visit.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-focus-01",
    "text": "Set out the materials before starting the tutorial so your attention can stay with the instructions.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-focus-02",
    "text": "If a list contains three versions of the same job, choose one place to track it.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-focus-03",
    "text": "Give the recurring distraction a practical answer: a closed door, a silenced alert, or a later time.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-focus-04",
    "text": "Look at the whole instruction before committing to the first fold.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-focus-05",
    "text": "Choose the file you will work in before you begin gathering more examples.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-focus-06",
    "text": "When you notice yourself polishing the heading again, check whether the body still needs an answer.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-focus-07",
    "text": "A useful work session may end with one ambiguity removed.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-focus-08",
    "text": "Group the errands by where they happen, then leave room for the journey between them.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-focus-09",
    "text": "Let the checklist hold the small details so your attention can hold the difficult one.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-focus-10",
    "text": "At the end of a search, save the answer where you will look for it next time.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-resilience-01",
    "text": "If the day changes before breakfast, make a smaller plan that belongs to the day you actually have.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-resilience-02",
    "text": "You can tell someone the attempt did not work without presenting it as the end of the story.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-resilience-03",
    "text": "An awkward first return becomes less unfamiliar once you have made it.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-resilience-04",
    "text": "Before abandoning a useful routine, ask whether it needs a different time or a lighter version.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-resilience-05",
    "text": "A paper crease in the wrong place can teach your fingers where to slow down next time.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-resilience-06",
    "text": "Let a canceled arrangement free you to choose again, even if the new choice is modest.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-resilience-07",
    "text": "You can bring disappointment to a conversation without asking the other person to erase it.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-resilience-08",
    "text": "Keep the part of the plan that still helps; a setback does not require discarding everything.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-resilience-09",
    "text": "After an unexpected change, check the essentials before spending energy on appearances.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-resilience-10",
    "text": "You may need a second explanation of a hard situation before you know what to ask.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-growth-01",
    "text": "An origami crane takes shape through several small folds; the middle can look nothing like the result.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-growth-02",
    "text": "Turn the paper over before deciding the instructions have led you nowhere.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-growth-03",
    "text": "Try a practice sheet before using the material you are afraid to waste.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-growth-04",
    "text": "When a demonstration moves too quickly, pause at the part your hands have not learned yet.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-growth-05",
    "text": "Compare two attempts for one concrete difference rather than ranking your entire ability.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-growth-06",
    "text": "The crease you open again can still guide a more careful fold.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-growth-07",
    "text": "Ask which part of the process matters most when you cannot improve everything at once.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-growth-08",
    "text": "An unfamiliar tool deserves a few minutes of exploration before a demanding project.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-growth-09",
    "text": "Notice what you can now do without the reminder you once kept beside you.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-growth-10",
    "text": "Share the small adjustment that helped, even if it seems obvious after you found it.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-calm-01",
    "text": "You can sit beside unfinished work without spending every minute deciding its future.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-calm-02",
    "text": "Let the sound of the rain remain weather for a while, without making it a reason to hurry.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-calm-03",
    "text": "Take the longer route through the room if it gives you space to move comfortably.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-calm-04",
    "text": "A slow Saturday morning does not need an explanation to the rest of the week.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-calm-05",
    "text": "You may leave a little room on the plate and a little room in the afternoon.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-calm-06",
    "text": "Notice the texture of the paper before asking it to become anything.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-calm-07",
    "text": "Put away the item nearest your hand, then decide whether you want to continue.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-calm-08",
    "text": "A plan for the evening can include a stretch of time with no instructions.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-calm-09",
    "text": "Let a pleasant detail stay pleasant without asking whether you have earned it.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-24-calm-10",
    "text": "The light moving across the table can be something to notice rather than something to photograph.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-24"
  },
  {
    "id": "daily-2026-10-25-confidence-01",
    "text": "At a shared meal, your contribution can be the dish, the welcome, or the care you bring.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-confidence-02",
    "text": "You can ask to see the options before choosing the one everyone expects you to want.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-confidence-03",
    "text": "Put the hobby you enjoy back into your answer when someone asks what interests you.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-confidence-04",
    "text": "Accepting a place on the team includes letting others carry their share.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-confidence-05",
    "text": "You can name the conditions under which you do your best work.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-confidence-06",
    "text": "A quiet contribution still deserves an accurate credit.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-confidence-07",
    "text": "Let the photograph include you sometimes, even when you are usually the one holding the camera.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-confidence-08",
    "text": "You may ask a salesperson for time to decide without promising to buy anything.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-confidence-09",
    "text": "What you bring to the table does not need to resemble what everyone else brought.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-confidence-10",
    "text": "When you know the answer, try offering it before you begin guessing who might disagree.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-focus-01",
    "text": "Check what you already have before making the shopping list longer.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-focus-02",
    "text": "A useful agenda gives each topic a question to resolve.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-focus-03",
    "text": "When you are gathering information, mark the point at which you will have enough to choose.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-focus-04",
    "text": "Separate the items you can act on from the ones waiting for someone else.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-focus-05",
    "text": "Put the reference beside the work instead of relying on repeated trips back to memory.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-focus-06",
    "text": "If a task has no clear owner, naming one may be the next useful action.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-focus-07",
    "text": "Make the first five minutes easy to enter: the correct page, the right tool, one clear aim.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-focus-08",
    "text": "Read your message once for the action you want the recipient to take.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-focus-09",
    "text": "Choose a place for incoming ideas that will not cover the work already in front of you.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-focus-10",
    "text": "Before repeating a task by hand, check whether a saved template would help next time.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-resilience-01",
    "text": "When a shared plan becomes uneven, ask to redistribute the work before resentment writes the next chapter.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-resilience-02",
    "text": "A recipe that did not turn out can still leave you with a better sense of the ingredients.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-resilience-03",
    "text": "You can request another copy of a lost document without turning the loss into your identity.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-resilience-04",
    "text": "If the event was difficult, choose one person with whom you can speak plainly afterward.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-resilience-05",
    "text": "You may revise an agreement when the situation it was made for has changed.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-resilience-06",
    "text": "A broken tool can interrupt the job without canceling the reason you began it.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-resilience-07",
    "text": "Let the next attempt account for what tired you last time.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-resilience-08",
    "text": "Some restarts begin with returning the borrowed equipment and asking a new question.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-resilience-09",
    "text": "You can appreciate an opportunity and acknowledge that its timing was difficult.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-resilience-10",
    "text": "Ask what remains available before assuming the whole afternoon is lost.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-growth-01",
    "text": "Cook beside someone once and notice the small choices a written recipe leaves out.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-growth-02",
    "text": "A borrowed book can introduce you to an interest you do not have to commit to forever.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-growth-03",
    "text": "Try teaching one simple step; explaining it may reveal what you understand well.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-growth-04",
    "text": "When you change your mind, keep a note of the evidence that helped.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-growth-05",
    "text": "Learn the names of the parts you use; precise words make asking for help easier.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-growth-06",
    "text": "Choose feedback from someone who understands the kind of work you want to make.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-growth-07",
    "text": "Notice when an old instruction has become a choice you can now evaluate.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-growth-08",
    "text": "Let curiosity lead you to a local class, a library shelf, or a conversation with a neighbor.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-growth-09",
    "text": "An experiment is easier to learn from when you change one thing you can name.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-growth-10",
    "text": "You can become more capable at receiving help as well as giving it.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-calm-01",
    "text": "You can enjoy the meal before deciding what needs to be cleaned.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-calm-02",
    "text": "A familiar song can fill a few minutes without becoming background for another chore.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-calm-03",
    "text": "Leave the next conversation for after you have finished the one you are in.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-calm-04",
    "text": "You may take the comfortable route home even when it is not the quickest.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-calm-05",
    "text": "Let a warm bowl and a steady chair be the whole plan for a little while.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-calm-06",
    "text": "The stack of unread books can be an invitation rather than an accusation.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-calm-07",
    "text": "You can watch the ordinary life outside the window without needing to join its pace.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-calm-08",
    "text": "Choose one notification that can wait until after your break.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-calm-09",
    "text": "An afternoon at home can hold its own kind of occasion.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-25-calm-10",
    "text": "Let your attention linger on something you like before looking for what needs fixing.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-25"
  },
  {
    "id": "daily-2026-10-28-confidence-01",
    "text": "You can ask for a place to put your things instead of balancing everything to avoid taking up space.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-confidence-02",
    "text": "Let the person helping you know when the suggested option does not fit.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-confidence-03",
    "text": "You may speak about a subject you care about without first calling your interest silly.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-confidence-04",
    "text": "An introduction can begin with the name you use now.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-confidence-05",
    "text": "If the room is moving quickly, you can ask for a moment to finish your point.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-confidence-06",
    "text": "Your availability is information to share, not a test of how much you care.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-confidence-07",
    "text": "You can enjoy a solo visit without inventing an absent companion.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-confidence-08",
    "text": "Let your application describe the work you can do, including skills learned outside a classroom.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-confidence-09",
    "text": "A respectful request can remain respectful when you repeat it clearly.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-confidence-10",
    "text": "You can choose a comfortable tempo for a life that you are the one living.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-focus-01",
    "text": "A metronome leaves room between its clicks; your plan can leave room between commitments.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-focus-02",
    "text": "Practice the difficult measure slowly enough to notice where your attention slips.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-focus-03",
    "text": "Mark the one number you need to verify before rereading the whole report.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-focus-04",
    "text": "If you are waiting for a reply, write the next action you can take without it.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-focus-05",
    "text": "Give the draft a purpose before giving it a polished opening.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-focus-06",
    "text": "Choose a separate time to sort your notes so sorting does not replace using them.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-focus-07",
    "text": "Keep the tool you are using on the table and the possible alternatives within reach elsewhere.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-focus-08",
    "text": "Before comparing options, write the condition that would rule one out.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-focus-09",
    "text": "When your list feels crowded, separate appointments from tasks that can move.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-focus-10",
    "text": "Set a pace you can follow through the final part of the work, not just its beginning.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-resilience-01",
    "text": "You can acknowledge the inconvenience of asking again and still make the call you need.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-resilience-02",
    "text": "An instrument that has been quiet for months can still be taken out of its case today.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-resilience-03",
    "text": "When an arrangement falls apart, clarify what was agreed before deciding what it means about you.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-resilience-04",
    "text": "Let the first return be shorter than the routine you once maintained.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-resilience-05",
    "text": "A difficult lesson may become useful later without having to feel welcome now.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-resilience-06",
    "text": "You can request a different way to participate when the original plan stops being workable.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-resilience-07",
    "text": "Keep a record of the steps you have taken so a long wait does not erase them from view.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-resilience-08",
    "text": "If a problem needs more than one visit, bring the notes from the last one.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-resilience-09",
    "text": "There is room to be frustrated with the delay and considerate toward the person answering.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-resilience-10",
    "text": "When you need to complain, describe the specific problem so someone has a fair chance to help.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-growth-01",
    "text": "Listen to the pause between notes; improvement can begin with what you stop adding.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-growth-02",
    "text": "Ask how someone checks their work, not only how they start it.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-growth-03",
    "text": "Try describing the same idea to a beginner and to a colleague; each version can reveal a different gap.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-growth-04",
    "text": "Keep a question beside the result when you do not yet understand why it worked.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-growth-05",
    "text": "A skill can become part of your life before it becomes something you display.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-growth-06",
    "text": "Notice which instruction became clearer after you tried it with your own hands.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-growth-07",
    "text": "You can learn from a style you would not choose for yourself.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-growth-08",
    "text": "When you revisit an old project, look for a problem you now know how to solve.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-growth-09",
    "text": "Ask permission to observe the process behind a finished piece of work.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-growth-10",
    "text": "Return to the example after reading the explanation; see which detail you can now name.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-calm-01",
    "text": "You can let the clock tell the time without letting it comment on your worth.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-calm-02",
    "text": "Give yourself a moment to arrive before reaching for the next thing to begin.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-calm-03",
    "text": "A chair turned toward the window can offer a different kind of break from the same room.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-calm-04",
    "text": "You may listen to the end of a song before deciding what comes afterward.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-calm-05",
    "text": "Let the laundry finish its cycle without checking on it as if waiting were work.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-calm-06",
    "text": "The space between two appointments can remain a space rather than becoming another appointment.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-calm-07",
    "text": "You can answer a simple question with a simple answer and let it rest there.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-calm-08",
    "text": "Notice a sound that asks nothing from you: a distant bird, a fan, or rain at the sill.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-calm-09",
    "text": "You can leave a pleasant conversation without planning the next meeting before you say goodbye.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-28-calm-10",
    "text": "Let the grocery bags wait by the door while you take off your shoes.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-28"
  },
  {
    "id": "daily-2026-10-29-confidence-01",
    "text": "When a form leaves no box for your experience, you can still describe it in your own words.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-confidence-02",
    "text": "You can bring a written question into the room instead of relying on courage to remember it.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-confidence-03",
    "text": "A preference does not need a crisis behind it to deserve consideration.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-confidence-04",
    "text": "Your work can be useful even when you are the newest person at the table.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-confidence-05",
    "text": "Pause before explaining away the part of the result you helped make.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-confidence-06",
    "text": "You can ask who will use your work before agreeing to how it should look.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-confidence-07",
    "text": "Let the way you treat yourself after speaking count as part of being heard.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-confidence-08",
    "text": "A clear \"I need to check\" can be more confident than an answer you do not trust.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-confidence-09",
    "text": "You can take your ordinary speaking voice to an important conversation.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-confidence-10",
    "text": "Your invitation can be simple; you do not have to make yourself impressive before reaching out.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-focus-01",
    "text": "Put the document you need next where your future hand will reach first.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-focus-02",
    "text": "Before sorting the whole pile, decide what belongs in the next ten minutes.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-focus-03",
    "text": "Give a complicated task a visible stopping point before you begin it.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-focus-04",
    "text": "If two requests compete, write down the choice instead of carrying both as an argument in your head.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-focus-05",
    "text": "Close the reference you have finished using; leave space for the one you still need.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-focus-06",
    "text": "A short note about where you stopped can make the next start less demanding.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-focus-07",
    "text": "Choose the question this work is meant to answer before polishing its appearance.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-focus-08",
    "text": "When an idea interrupts, park it in a margin and return to the sentence in front of you.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-focus-09",
    "text": "You can leave a useful tool ready without planning the entire project tonight.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-focus-10",
    "text": "Check whether the next click serves your task or merely postpones it.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-resilience-01",
    "text": "If a plan breaks at the handoff, repair the handoff before replacing the whole plan.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-resilience-02",
    "text": "An unanswered message leaves room for several explanations; you do not have to choose the harshest one.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-resilience-03",
    "text": "After an awkward attempt, keep the useful detail and let the imagined audience go home.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-resilience-04",
    "text": "You can mark a difficult day as difficult without making it evidence against your future.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-resilience-05",
    "text": "A revised route can still take the care you packed for the original journey.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-resilience-06",
    "text": "When the result surprises you, begin with what actually happened rather than what it seems to say about you.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-resilience-07",
    "text": "Keep one familiar part of a routine while you work out what must change.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-resilience-08",
    "text": "You may need a different helper for a different stage; asking again is allowed.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-resilience-09",
    "text": "If a promise no longer fits, an honest update can be a way of continuing with care.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-resilience-10",
    "text": "An attempt that taught you where the snag is has left you something usable.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-growth-01",
    "text": "A plant cutting can grow roots before it grows another leaf; look for progress in more than one place.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-growth-02",
    "text": "When you learn a new term, find one ordinary example you could point to.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-growth-03",
    "text": "Leave room in your explanation for the question someone else has not asked yet.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-growth-04",
    "text": "Try describing the difference between your first guess and what you now understand.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-growth-05",
    "text": "A surprising result can earn a second look before it earns a conclusion.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-growth-06",
    "text": "Ask what the tool makes easier and what it still asks you to notice.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-growth-07",
    "text": "You can learn from how someone prepares, not only from what they produce.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-growth-08",
    "text": "Keep the small sample that shows you which adjustment worked.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-growth-09",
    "text": "Give an unfamiliar method a fair attempt before comparing it with a habit you have practiced for years.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-growth-10",
    "text": "You do not have to turn every curiosity into a commitment; some questions can stay invitations.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-calm-01",
    "text": "The chair does not need you to use this minute efficiently.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-calm-02",
    "text": "Let a cup, a window, or a familiar sound give your attention somewhere simple to land.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-calm-03",
    "text": "You can leave one surface clear without making the whole room perfect.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-calm-04",
    "text": "An ordinary evening can be enough without becoming a story worth sharing.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-calm-05",
    "text": "Set down the object in your hand before deciding what to pick up next.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-calm-06",
    "text": "Give yourself a moment to arrive before asking yourself to participate.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-calm-07",
    "text": "You can enjoy the quiet part of a song without waiting for the chorus.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-calm-08",
    "text": "Leave a little distance between noticing a notification and choosing to open it.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-calm-09",
    "text": "Noticing the light change on a wall is a complete use of a small pause.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-29-calm-10",
    "text": "For this moment, you may let something be nearby without making it your responsibility.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-29"
  },
  {
    "id": "daily-2026-10-30-confidence-01",
    "text": "Your place in a conversation includes the right to finish the sentence you began.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-confidence-02",
    "text": "The details you notice while helping at home belong in your picture of what you are good at.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-confidence-03",
    "text": "When someone asks for your choice, an honest answer helps them know you better.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-confidence-04",
    "text": "Your familiar handwriting is enough for the note; the care is in what you choose to say.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-confidence-05",
    "text": "You may try a role that interests you without turning it into a permanent identity.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-confidence-06",
    "text": "Keep a small example of your work ready for the moment you are asked about it.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-confidence-07",
    "text": "Being proud of a careful decision does not require pretending it was easy.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-confidence-08",
    "text": "Say what you contributed with the same accuracy you would use for someone else.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-confidence-09",
    "text": "When you introduce two people, include yourself in the circle afterward.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-confidence-10",
    "text": "The version of you who needs to check the directions is welcome on the walk.",
    "category": "Confidence",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-focus-01",
    "text": "Label the test version clearly so you can experiment without confusing it with the finished file.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-focus-02",
    "text": "At the start of a shared task, agree on who is waiting for whose reply.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-focus-03",
    "text": "Give each open question a place to wait so it does not have to occupy your attention.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-focus-04",
    "text": "Clear a working space wide enough for the task you have actually chosen.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-focus-05",
    "text": "After finding an answer, close the search and put that answer to use.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-focus-06",
    "text": "When editing, read once for meaning and once for small errors; each pass can have its own job.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-focus-07",
    "text": "Finish the instruction you are following before collecting three alternatives.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-focus-08",
    "text": "Write the unit beside the number so the next decision starts with clear information.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-focus-09",
    "text": "A few minutes spent tying your shoelaces belong to the walk, too.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-focus-10",
    "text": "Return to the paragraph that needs your attention, even if the rest of the document is unfinished.",
    "category": "Focus",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-resilience-01",
    "text": "If the handle breaks, carrying the box differently is still a way to bring it home.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-resilience-02",
    "text": "A missing part can put the repair on hold without making the rest of your preparation pointless.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-resilience-03",
    "text": "Tell a trusted person which part is hard to arrange, rather than leaving them to guess.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-resilience-04",
    "text": "When plans change in a group, you may ask for the new arrangement to be said plainly.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-resilience-05",
    "text": "The shoes that got muddy can be cleaned; the afternoon does not have to be written off.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-resilience-06",
    "text": "Write down what happened while it is fresh; you can decide what it means after you have had some distance.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-resilience-07",
    "text": "Reassembling a scattered week can begin with checking which promises still need an answer.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-resilience-08",
    "text": "A delay can change the order of your day without erasing everything you intended.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-resilience-09",
    "text": "Being able to name a limit gives your next plan something solid to work with.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-resilience-10",
    "text": "Loosen a knot before pulling harder; a difficult moment may need a different kind of attention.",
    "category": "Resilience",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-growth-01",
    "text": "Learn the name of a tool you have used for years; familiarity can still hold a discovery.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-growth-02",
    "text": "Look for the assumption inside an instruction you have always followed.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-growth-03",
    "text": "Let one unfamiliar word lead you to a question instead of a quick guess.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-growth-04",
    "text": "Bring two examples to a lesson: one that worked and one you cannot yet explain.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-growth-05",
    "text": "Watching how someone corrects a mistake can teach you more than seeing their finished work.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-growth-06",
    "text": "Make a sketch of a process you usually describe in words and see what was missing.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-growth-07",
    "text": "Share an unfinished observation with someone who enjoys wondering alongside you.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-growth-08",
    "text": "Try remembering how you solved a problem before searching for an entirely new method.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-growth-09",
    "text": "The skill you use to help a beginner may be one you forgot you had learned.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-growth-10",
    "text": "Keep the question that survived the lesson; it may be the most useful thing you take home.",
    "category": "Growth",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-calm-01",
    "text": "You may choose the seat with the comfortable back instead of the best view.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-calm-02",
    "text": "Your shoelaces can be tied without rehearsing the whole day at the doorway.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-calm-03",
    "text": "Notice the warmth left in a towel before folding it into the cupboard.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-calm-04",
    "text": "Try letting a pleasant smell stay unnamed for a moment.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-calm-05",
    "text": "An empty patch of the table may remain empty for a while.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-calm-06",
    "text": "Watch one ripple reach the edge of a bowl and disappear.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-calm-07",
    "text": "Set the book down with a bookmark; you do not need to hold its place in your mind.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-calm-08",
    "text": "Take the cushion you keep saving for a visitor and use it yourself.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-calm-09",
    "text": "Your hands can stay empty during the short walk from one room to another.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-30-calm-10",
    "text": "The quietest corner of a gathering is still a place to belong.",
    "category": "Calm",
    "author": "A Motive reminder",
    "date": "2026-10-30"
  },
  {
    "id": "daily-2026-10-31-confidence-01",
    "text": "Reserve a little speaking time for the part of the story only you can tell.",
    "category": "Confidence",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-confidence-02",
    "text": "Let your answer include a genuine maybe when you need more information.",
    "category": "Confidence",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-confidence-03",
    "text": "It is reasonable to ask how long a commitment will last before agreeing to it.",
    "category": "Confidence",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-confidence-04",
    "text": "Before a difficult conversation, write the one request you most want the other person to hear.",
    "category": "Confidence",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-confidence-05",
    "text": "The person learning the route is still allowed to ask where the door is.",
    "category": "Confidence",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-confidence-06",
    "text": "Your preference belongs in the plan before everyone has already agreed to it.",
    "category": "Confidence",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-confidence-07",
    "text": "You can ask for a slower explanation without making a case against your ability.",
    "category": "Confidence",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-confidence-08",
    "text": "A small disagreement does not have to become a judgment of your whole character.",
    "category": "Confidence",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-confidence-09",
    "text": "Knowing what you would like to learn can be a useful way to introduce yourself.",
    "category": "Confidence",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-confidence-10",
    "text": "A brief visit can still count as showing up; you do not need to occupy the whole afternoon.",
    "category": "Confidence",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-focus-01",
    "text": "Give the next ten minutes a visible edge: one page, one shelf, or one reply.",
    "category": "Focus",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-focus-02",
    "text": "Separate the items that need a decision from the items that only need to be filed.",
    "category": "Focus",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-focus-03",
    "text": "A task can stay important without staying open in every tab.",
    "category": "Focus",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-focus-04",
    "text": "Read the question once more before collecting another answer.",
    "category": "Focus",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-focus-05",
    "text": "Keep a place for interesting detours so they do not have to occupy the path you are on.",
    "category": "Focus",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-focus-06",
    "text": "Name the decision this information will help you make; the rest can wait outside the search.",
    "category": "Focus",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-focus-07",
    "text": "An empty line between two commitments is usable time, not a printing mistake.",
    "category": "Focus",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-focus-08",
    "text": "Check the units beside the number before redoing the calculation.",
    "category": "Focus",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-focus-09",
    "text": "Your notes do not need to record everything to preserve the part you will use.",
    "category": "Focus",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-focus-10",
    "text": "Check whether the task needs more effort or simply a clearer ending.",
    "category": "Focus",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-resilience-01",
    "text": "When a plan unravels, list what is still available before you decide that nothing is.",
    "category": "Resilience",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-resilience-02",
    "text": "An inconvenient restart can include a better place to keep the supplies.",
    "category": "Resilience",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-resilience-03",
    "text": "Keep a record of the solutions that worked during a disruption; you may need them in quieter times.",
    "category": "Resilience",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-resilience-04",
    "text": "After a refusal, give yourself a moment before drafting the next request.",
    "category": "Resilience",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-resilience-05",
    "text": "A conversation that ended badly can have a different purpose when you return to it.",
    "category": "Resilience",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-resilience-06",
    "text": "Give an unfinished project a short label: waiting for help, waiting for time, or ready to try.",
    "category": "Resilience",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-resilience-07",
    "text": "A missing ingredient can change the recipe without making the meal a failure.",
    "category": "Resilience",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-resilience-08",
    "text": "Getting through a disruption may involve asking someone to hold one ordinary part of the day steady.",
    "category": "Resilience",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-resilience-09",
    "text": "When returning takes longer than expected, choose a recognizable landmark for the next check-in.",
    "category": "Resilience",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-resilience-10",
    "text": "If a deadline has become unrealistic, an early update can be part of repairing the plan.",
    "category": "Resilience",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-growth-01",
    "text": "Compare your prediction with what happened before explaining why it happened.",
    "category": "Growth",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-growth-02",
    "text": "Follow a small mistake backward until you find the assumption that made it seem sensible.",
    "category": "Growth",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-growth-03",
    "text": "An old method can be useful evidence and still be ready for revision.",
    "category": "Growth",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-growth-04",
    "text": "Ask someone how they learned the part that now looks effortless.",
    "category": "Growth",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-growth-05",
    "text": "Leave a little space in your explanation for what you have not checked yet.",
    "category": "Growth",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-growth-06",
    "text": "The first useful distinction may be noticing that two similar problems need different tools.",
    "category": "Growth",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-growth-07",
    "text": "Try making the instructions clearer before deciding you are bad at the task.",
    "category": "Growth",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-growth-08",
    "text": "A question written in the margin can be the beginning of a new skill.",
    "category": "Growth",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-growth-09",
    "text": "Refilling the courtyard water dish is small work; noticing who visits can teach you something new.",
    "category": "Growth",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-growth-10",
    "text": "Keep one example of how your understanding changed, not only a count of what you finished.",
    "category": "Growth",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-calm-01",
    "text": "The sparrow at the water dish has no update to give you. You can watch without making a task of it.",
    "category": "Calm",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-calm-02",
    "text": "Leave one sound in the room unnamed for a moment.",
    "category": "Calm",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-calm-03",
    "text": "Let the cup sit on the saucer between sips.",
    "category": "Calm",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-calm-04",
    "text": "At dusk, you can leave the garden as it is and go inside.",
    "category": "Calm",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-calm-05",
    "text": "Before choosing what fills the evening, notice how much of it is already spoken for.",
    "category": "Calm",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-calm-06",
    "text": "Keep your place in the book; the page will still be there after you look out the window.",
    "category": "Calm",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-calm-07",
    "text": "A notification can wait while you finish noticing the person beside you.",
    "category": "Calm",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-calm-08",
    "text": "Set the bag down where it belongs before deciding what to carry into the evening.",
    "category": "Calm",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-calm-09",
    "text": "You may enjoy the ordinary part of the day without first finding a lesson in it.",
    "category": "Calm",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  },
  {
    "id": "daily-2026-10-31-calm-10",
    "text": "Let the last small chore have an ending; the room does not need to become perfect tonight.",
    "category": "Calm",
    "date": "2026-10-31",
    "author": "A Motive reminder"
  }
];
