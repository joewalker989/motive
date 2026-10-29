'use strict';
const motiveQuoteLocales={
  "motive-1": {
    "sourceText": "You don’t need to see the whole staircase. Just make your next step a kind one.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "No necesitas ver toda la escalera. Basta con que tu siguiente paso sea amable.",
    "fr": "Vous n’avez pas besoin de voir tout l’escalier. Faites simplement le prochain pas avec bienveillance."
  },
  "motive-2": {
    "sourceText": "You are allowed to be a beginner and still be someone worth believing in.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes estar empezando y seguir siendo alguien en quien vale la pena creer.",
    "fr": "Vous pouvez débuter et rester une personne en qui il vaut la peine de croire."
  },
  "motive-3": {
    "sourceText": "A little progress, repeated, can become a life you’re proud of.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Un poco de progreso, repetido, puede convertirse en una vida que te llene de orgullo.",
    "fr": "Un peu de progrès, répété, peut devenir une vie qui vous inspire de la fierté."
  },
  "motive-4": {
    "sourceText": "Give your attention to the next useful thing. The rest can wait a moment.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Dedica tu atención a lo siguiente que sea útil. Lo demás puede esperar un momento.",
    "fr": "Portez votre attention sur la prochaine chose utile. Le reste peut attendre un instant."
  },
  "motive-5": {
    "sourceText": "Rest is part of the rhythm. You don’t have to earn a softer day.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Descansar forma parte del ritmo. No tienes que ganarte un día más tranquilo.",
    "fr": "Le repos fait partie du rythme. Vous n’avez pas à mériter une journée plus douce."
  },
  "motive-6": {
    "sourceText": "You’ve made it through uncertain days before. Take this one a step at a time.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Ya has atravesado días inciertos. Lleva este paso a paso.",
    "fr": "Vous avez déjà traversé des journées incertaines. Avancez dans celle-ci un pas à la fois."
  },
  "motive-7": {
    "sourceText": "Your voice does not have to be the loudest to deserve a place in the room.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu voz no tiene que ser la más fuerte para merecer un lugar en la conversación.",
    "fr": "Votre voix n’a pas besoin d’être la plus forte pour mériter une place dans la conversation."
  },
  "motive-8": {
    "sourceText": "Build a habit small enough to keep on an ordinary Tuesday.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Crea un hábito lo bastante pequeño como para mantenerlo un martes cualquiera.",
    "fr": "Construisez une habitude assez petite pour la garder un mardi ordinaire."
  },
  "motive-9": {
    "sourceText": "You can appreciate where you are and still be curious about what comes next.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes apreciar dónde estás y seguir sintiendo curiosidad por lo que viene.",
    "fr": "Vous pouvez apprécier là où vous en êtes et rester curieux de la suite."
  },
  "motive-10": {
    "sourceText": "Loosen your shoulders. Take a breath. This moment only asks you to be here.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Relaja los hombros. Respira. Este momento solo te pide estar aquí.",
    "fr": "Relâchez les épaules. Prenez une respiration. Cet instant vous demande seulement d’être ici."
  },
  "motive-11": {
    "sourceText": "Starting again is a skill. Every return is a little act of courage.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Volver a empezar es una habilidad. Cada regreso es un pequeño acto de valentía.",
    "fr": "Recommencer est un savoir-faire. Chaque retour est un petit acte de courage."
  },
  "motive-12": {
    "sourceText": "Your pace is allowed to look different from someone else’s.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu ritmo puede ser distinto al de otra persona.",
    "fr": "Votre rythme peut être différent de celui d’une autre personne."
  },
  "motive-13": {
    "sourceText": "Protect a little time for what matters, and let that be enough for today.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Reserva un poco de tiempo para lo que importa y deja que eso sea suficiente por hoy.",
    "fr": "Gardez un peu de temps pour ce qui compte, et laissez cela suffire pour aujourd’hui."
  },
  "motive-14": {
    "sourceText": "Try the thing. Learn a little. Adjust. You’re allowed to grow as you go.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Inténtalo. Aprende un poco. Ajusta lo necesario. Puedes crecer sobre la marcha.",
    "fr": "Essayez. Apprenez un peu. Ajustez. Vous pouvez grandir en chemin."
  },
  "motive-15": {
    "sourceText": "Not every thought needs an answer. Some can pass like clouds.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "No todos los pensamientos necesitan una respuesta. Algunos pueden pasar como las nubes.",
    "fr": "Toutes les pensées n’ont pas besoin d’une réponse. Certaines peuvent passer comme des nuages."
  },
  "motive-16": {
    "sourceText": "A hard chapter can be part of your story without becoming the whole story.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Un capítulo difícil puede formar parte de tu historia sin convertirse en toda la historia.",
    "fr": "Un chapitre difficile peut faire partie de votre histoire sans devenir toute votre histoire."
  },
  "motive-17": {
    "sourceText": "You don’t have to feel fearless to take one brave step.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dar un paso valiente aunque sientas miedo.",
    "fr": "Vous pouvez faire un pas courageux même si vous avez peur."
  },
  "motive-18": {
    "sourceText": "Make the next action clear enough that you can begin before you feel ready.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Define la siguiente acción con tanta claridad que puedas empezar antes de sentir que tienes todo preparado.",
    "fr": "Rendez la prochaine action assez claire pour commencer avant d’avoir le sentiment de pouvoir vous lancer."
  },
  "motive-19": {
    "sourceText": "Notice what is getting easier. Quiet progress is still progress.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Observa lo que va siendo más fácil. El progreso silencioso también es progreso.",
    "fr": "Remarquez ce qui devient plus facile. Un progrès discret reste un progrès."
  },
  "motive-20": {
    "sourceText": "Leave a little space in your day for simply being a person.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja un poco de espacio en tu día para, simplemente, ser una persona.",
    "fr": "Gardez un peu de place dans votre journée pour être simplement une personne."
  },
  "motive-21": {
    "sourceText": "Showing up imperfectly still gives tomorrow something to build on.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Presentarte de forma imperfecta también le da a mañana algo sobre lo que construir.",
    "fr": "Être présent sans être parfait donne tout de même à demain une base sur laquelle construire."
  },
  "motive-22": {
    "sourceText": "Let your own values have a louder vote than someone else’s expectations.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que tus propios valores tengan más peso que las expectativas de otra persona.",
    "fr": "Laissez vos propres valeurs compter davantage que les attentes d’une autre personne."
  },
  "motive-23": {
    "sourceText": "You can do one thing well without doing everything at once.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes hacer bien una cosa sin hacerlo todo a la vez.",
    "fr": "Vous pouvez bien faire une chose sans tout faire à la fois."
  },
  "motive-24": {
    "sourceText": "Change can start with one honest question and a little willingness.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "El cambio puede empezar con una pregunta sincera y un poco de disposición.",
    "fr": "Le changement peut commencer par une question honnête et un peu de bonne volonté."
  },
  "motive-25": {
    "sourceText": "Some days, enough is a meal, a breath, and a little kindness to yourself.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Algunos días, basta con una comida, una respiración y un poco de amabilidad contigo.",
    "fr": "Certains jours, un repas, une respiration et un peu de bienveillance envers vous-même suffisent."
  },
  "motive-26": {
    "sourceText": "Make a little room for possibility. You haven’t met every good day yet.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja un poco de espacio para las posibilidades. Aún no has vivido todos tus días buenos.",
    "fr": "Faites un peu de place aux possibilités. Vous n’avez pas encore vécu toutes vos belles journées."
  },
  "motive-27": {
    "sourceText": "Practice trusting the person who keeps choosing to try: you.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Practica confiar en la persona que sigue eligiendo intentarlo: tú.",
    "fr": "Exercez-vous à faire confiance à la personne qui choisit encore d’essayer : vous."
  },
  "motive-28": {
    "sourceText": "Begin with five honest minutes. Small beginnings count.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Empieza con cinco minutos de esfuerzo sincero. Los pequeños comienzos cuentan.",
    "fr": "Commencez par cinq minutes d’effort sincère. Les petits débuts comptent."
  },
  "motive-29": {
    "sourceText": "You can outgrow an old version of yourself with gratitude, not shame.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar atrás una versión anterior de ti con gratitud, no con vergüenza.",
    "fr": "Vous pouvez dépasser une ancienne version de vous-même avec gratitude, sans honte."
  },
  "motive-30": {
    "sourceText": "Come back to what is here: your breath, your feet, this small moment.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Vuelve a lo que está aquí: tu respiración, tus pies, este pequeño momento.",
    "fr": "Revenez à ce qui est ici : votre respiration, vos pieds, ce petit instant."
  }
};
if(typeof module!=='undefined')module.exports=motiveQuoteLocales;
