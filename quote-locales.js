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
  },
  "motive-extra-confidence-1": {
    "sourceText": "Your needs deserve a place in your plans.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tus necesidades merecen un lugar en tus planes.",
    "fr": "Vos besoins méritent une place dans vos projets."
  },
  "motive-extra-confidence-2": {
    "sourceText": "Stand by the work you did when nobody was watching.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Valora el trabajo que hiciste cuando nadie miraba.",
    "fr": "Reconnaissez la valeur du travail que vous avez accompli sans témoin."
  },
  "motive-extra-confidence-3": {
    "sourceText": "You can speak honestly without having every answer.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes hablar con sinceridad sin tener todas las respuestas.",
    "fr": "Vous pouvez parler avec sincérité sans avoir toutes les réponses."
  },
  "motive-extra-confidence-4": {
    "sourceText": "Let your choices reflect your character rather than your doubts.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Que tus decisiones reflejen tus valores más que tus dudas.",
    "fr": "Laissez vos choix refléter vos valeurs plutôt que vos doutes."
  },
  "motive-extra-confidence-5": {
    "sourceText": "You bring a perspective that this room has not heard yet.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Aportas una perspectiva que las personas de esta sala aún no han escuchado.",
    "fr": "Vous apportez un point de vue que les personnes ici n’ont pas encore entendu."
  },
  "motive-extra-confidence-6": {
    "sourceText": "An awkward first attempt does not cancel your potential.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Un primer intento torpe no borra tu potencial.",
    "fr": "Un premier essai maladroit n’efface pas votre potentiel."
  },
  "motive-extra-confidence-7": {
    "sourceText": "Give yourself permission to take up the space you need.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Date permiso para ocupar el espacio que necesitas.",
    "fr": "Accordez-vous le droit de prendre la place dont vous avez besoin."
  },
  "motive-extra-confidence-8": {
    "sourceText": "You can be uncertain about the outcome and certain about your effort.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes tener dudas sobre el resultado y confianza en tu esfuerzo.",
    "fr": "Vous pouvez douter du résultat tout en ayant confiance dans votre effort."
  },
  "motive-extra-confidence-9": {
    "sourceText": "The way you treat yourself becomes part of the way you move through the world.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "La forma en que te tratas influye en cómo te mueves por el mundo.",
    "fr": "La façon dont vous vous traitez fait partie de votre manière d’avancer dans le monde."
  },
  "motive-extra-confidence-10": {
    "sourceText": "You have something to contribute before you have something to prove.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Ya tienes algo que aportar antes de tener algo que demostrar.",
    "fr": "Vous avez déjà quelque chose à apporter avant d’avoir quoi que ce soit à prouver."
  },
  "motive-extra-confidence-11": {
    "sourceText": "Choose clothes, words, and goals that let you recognize yourself.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige ropa, palabras y metas en las que puedas reconocerte.",
    "fr": "Choisissez des vêtements, des mots et des objectifs dans lesquels vous vous reconnaissez."
  },
  "motive-extra-confidence-12": {
    "sourceText": "Your boundaries can be clear even when your voice shakes.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tus límites pueden ser claros aunque te tiemble la voz.",
    "fr": "Vos limites peuvent être claires même lorsque votre voix tremble."
  },
  "motive-extra-confidence-13": {
    "sourceText": "You can accept a compliment without making yourself smaller.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes aceptar un cumplido sin restarte valor.",
    "fr": "Vous pouvez accepter un compliment sans vous dévaloriser."
  },
  "motive-extra-confidence-14": {
    "sourceText": "Trust the preparation you have already put in.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Confía en la preparación que ya has hecho.",
    "fr": "Faites confiance à la préparation que vous avez déjà accomplie."
  },
  "motive-extra-confidence-15": {
    "sourceText": "A thoughtful question can be your strongest contribution.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Una pregunta bien pensada puede ser tu mejor aportación.",
    "fr": "Une question réfléchie peut être votre contribution la plus précieuse."
  },
  "motive-extra-confidence-16": {
    "sourceText": "You do not need a crowd to agree before you respect your own judgment.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "No necesitas que todo el mundo esté de acuerdo para respetar tu propio criterio.",
    "fr": "Vous n’avez pas besoin de l’accord de tout le monde pour respecter votre propre jugement."
  },
  "motive-extra-confidence-17": {
    "sourceText": "Give your ideas a chance to exist outside your notebook.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale a tus ideas la oportunidad de existir fuera de tu cuaderno.",
    "fr": "Donnez à vos idées la chance d’exister en dehors de votre carnet."
  },
  "motive-extra-confidence-18": {
    "sourceText": "Being overlooked once does not make you invisible forever.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Que una vez no te hayan tenido en cuenta no te vuelve invisible para siempre.",
    "fr": "Passer inaperçu une fois ne vous rend pas invisible pour toujours."
  },
  "motive-extra-confidence-19": {
    "sourceText": "Walk into the opportunity as someone who belongs in the conversation.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Aprovecha esa oportunidad sabiendo que tienes un lugar en la conversación.",
    "fr": "Abordez cette occasion en sachant que vous avez votre place dans la conversation."
  },
  "motive-extra-confidence-20": {
    "sourceText": "Let your experience count as evidence of what you can handle.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que tu experiencia sea una prueba de lo que puedes afrontar.",
    "fr": "Considérez votre expérience comme un indice de ce que vous pouvez affronter."
  },
  "motive-extra-confidence-21": {
    "sourceText": "You can be warm without making yourself endlessly available.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes tratar a los demás con calidez sin estar siempre disponible.",
    "fr": "Vous pouvez faire preuve de chaleur sans être disponible à tout moment."
  },
  "motive-extra-confidence-22": {
    "sourceText": "Make decisions your future self can understand, even if others do not.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Toma decisiones que tu yo del futuro pueda comprender, aunque otras personas no las entiendan.",
    "fr": "Prenez des décisions que votre futur vous pourra comprendre, même si les autres ne les comprennent pas."
  },
  "motive-extra-confidence-23": {
    "sourceText": "You are more than the impression you made in one nervous moment.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Eres más que la impresión que causaste en un momento de nervios.",
    "fr": "Vous êtes plus que l’impression laissée dans un moment de nervosité."
  },
  "motive-extra-confidence-24": {
    "sourceText": "Confidence can sound like a calm, considered no.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "La confianza puede expresarse con un no tranquilo y meditado.",
    "fr": "La confiance peut s’exprimer par un non calme et réfléchi."
  },
  "motive-extra-confidence-25": {
    "sourceText": "Let yourself finish the sentence before you decide it was foolish.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Permítete terminar la frase antes de decidir que era una tontería.",
    "fr": "Laissez-vous finir votre phrase avant de décider qu’elle était stupide."
  },
  "motive-extra-confidence-26": {
    "sourceText": "Ask for the clarification you need to do your best work.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Pide las aclaraciones que necesitas para hacer tu trabajo lo mejor posible.",
    "fr": "Demandez les précisions dont vous avez besoin pour travailler de votre mieux."
  },
  "motive-extra-confidence-27": {
    "sourceText": "Your worth does not rise and fall with your inbox.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu valor no sube ni baja con tu bandeja de entrada.",
    "fr": "Votre valeur ne monte ni ne baisse au rythme de votre boîte de réception."
  },
  "motive-extra-confidence-28": {
    "sourceText": "Believe the people who appreciate your presence without demanding a performance.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Cree a quienes valoran tu presencia sin exigirte que demuestres nada.",
    "fr": "Croyez les personnes qui apprécient votre présence sans vous demander de faire vos preuves."
  },
  "motive-extra-confidence-29": {
    "sourceText": "You can learn from criticism without adopting every judgment.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes aprender de las críticas sin hacer tuyos todos los juicios.",
    "fr": "Vous pouvez apprendre des critiques sans adopter tous les jugements."
  },
  "motive-extra-confidence-30": {
    "sourceText": "Take your own ambition seriously enough to give it time.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Toma tus propias aspiraciones lo bastante en serio como para dedicarles tiempo.",
    "fr": "Prenez vos propres aspirations assez au sérieux pour leur consacrer du temps."
  }
};
if(typeof module!=='undefined')module.exports=motiveQuoteLocales;
