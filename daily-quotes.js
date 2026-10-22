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
  }
];
