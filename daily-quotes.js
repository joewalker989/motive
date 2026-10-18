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
  }
];
