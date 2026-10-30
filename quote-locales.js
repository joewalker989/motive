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
  },
  "motive-extra-confidence-31": {
    "sourceText": "You deserve friendships where you can stop rehearsing your personality.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Mereces amistades en las que puedas dejar de ensayar cómo ser tú.",
    "fr": "Vous méritez des amitiés où vous n’avez pas à jouer un rôle."
  },
  "motive-extra-confidence-32": {
    "sourceText": "Your preferences are useful information, not an inconvenience.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tus preferencias son información útil, no una molestia.",
    "fr": "Vos préférences sont des informations utiles, pas une gêne."
  },
  "motive-extra-confidence-33": {
    "sourceText": "The courage to introduce yourself can open an unexpected door.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "El valor de presentarte puede abrir una puerta inesperada.",
    "fr": "Le courage de vous présenter peut ouvrir une porte inattendue."
  },
  "motive-extra-confidence-34": {
    "sourceText": "Let the quality of your effort speak at its own volume.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que la calidad de tu esfuerzo hable a su propio volumen.",
    "fr": "Laissez la qualité de votre effort s’exprimer à sa manière."
  },
  "motive-extra-confidence-35": {
    "sourceText": "You can respect expertise while trusting your ability to learn.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes respetar la experiencia ajena y confiar en tu capacidad de aprender.",
    "fr": "Vous pouvez respecter l’expertise des autres tout en ayant confiance dans votre capacité à apprendre."
  },
  "motive-extra-confidence-36": {
    "sourceText": "Nobody else can decide what a meaningful life feels like to you.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Nadie más puede decidir qué hace que tu vida tenga sentido para ti.",
    "fr": "Personne d’autre ne peut décider de ce qui donne du sens à votre vie à vos yeux."
  },
  "motive-extra-confidence-37": {
    "sourceText": "You have survived being misunderstood without losing who you are.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Has superado momentos en que no te comprendían sin dejar de ser quien eres.",
    "fr": "Vous avez traversé des moments d’incompréhension sans cesser d’être vous-même."
  },
  "motive-extra-confidence-38": {
    "sourceText": "Keep your promises to yourself in small, visible ways.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Cumple las promesas que te haces con pequeños gestos que puedas ver.",
    "fr": "Tenez vos promesses envers vous-même par de petits gestes concrets."
  },
  "motive-extra-confidence-39": {
    "sourceText": "Your right to ask does not depend on getting a yes.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu derecho a pedir no depende de que la respuesta sea un sí.",
    "fr": "Votre droit de demander ne dépend pas d’une réponse positive."
  },
  "motive-extra-confidence-40": {
    "sourceText": "You can change your mind without losing your integrity.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes cambiar de opinión sin perder tu integridad.",
    "fr": "Vous pouvez changer d’avis sans renoncer à votre intégrité."
  },
  "motive-extra-confidence-41": {
    "sourceText": "There is dignity in naming what you want clearly.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Hay dignidad en expresar con claridad lo que quieres.",
    "fr": "Il y a de la dignité à exprimer clairement ce que vous voulez."
  },
  "motive-extra-confidence-42": {
    "sourceText": "Let your posture make a little more room for your breath.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que tu postura dé un poco más de espacio a tu respiración.",
    "fr": "Laissez votre posture faire un peu plus de place à votre respiration."
  },
  "motive-extra-confidence-43": {
    "sourceText": "You do not need to turn your personality into an apology.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "No necesitas convertir tu forma de ser en una disculpa.",
    "fr": "Vous n’avez pas à vous excuser de votre personnalité."
  },
  "motive-extra-confidence-44": {
    "sourceText": "Bring your whole attention instead of a perfect impression.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Ofrece toda tu atención en lugar de intentar causar una impresión perfecta.",
    "fr": "Offrez toute votre attention plutôt que de chercher à faire une impression parfaite."
  },
  "motive-extra-confidence-45": {
    "sourceText": "It is possible to be proud of yourself and still have room to improve.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes sentir orgullo por ti y seguir teniendo espacio para mejorar.",
    "fr": "Vous pouvez ressentir de la fierté pour vous-même tout en gardant une marge de progrès."
  },
  "motive-extra-confidence-46": {
    "sourceText": "Your accomplishments remain real on the days you doubt them.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tus logros siguen siendo reales los días en que dudas de ellos.",
    "fr": "Vos réussites restent réelles les jours où vous en doutez."
  },
  "motive-extra-confidence-47": {
    "sourceText": "Give your own advice the consideration you give a stranger's opinion.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale a tus propios consejos la consideración que le das a la opinión de una persona desconocida.",
    "fr": "Accordez à vos propres conseils l’attention que vous prêtez à l’opinion d’une personne inconnue."
  },
  "motive-extra-confidence-48": {
    "sourceText": "Let your confidence rest on practice rather than applause.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que tu confianza se apoye en la práctica más que en los aplausos.",
    "fr": "Laissez votre confiance s’appuyer sur la pratique plutôt que sur les applaudissements."
  },
  "motive-extra-confidence-49": {
    "sourceText": "You can enter a new chapter without pretending to be someone else.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes empezar una nueva etapa sin fingir ser otra persona.",
    "fr": "Vous pouvez entamer un nouveau chapitre sans faire semblant d’être quelqu’un d’autre."
  },
  "motive-extra-confidence-50": {
    "sourceText": "Recognize the strengths that feel ordinary because you use them every day.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Reconoce las fortalezas que te parecen normales porque las usas cada día.",
    "fr": "Reconnaissez les forces qui vous semblent ordinaires parce que vous les utilisez chaque jour."
  },
  "motive-extra-confidence-51": {
    "sourceText": "You are allowed to enjoy being good at something.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tienes derecho a disfrutar de hacer algo bien.",
    "fr": "Vous avez le droit de prendre plaisir à bien faire quelque chose."
  },
  "motive-extra-confidence-52": {
    "sourceText": "An invitation to try is not a demand to be flawless.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Una invitación a intentarlo no exige que lo hagas sin fallos.",
    "fr": "Une invitation à essayer n’est pas une exigence de perfection."
  },
  "motive-extra-confidence-53": {
    "sourceText": "You can advocate for yourself with kindness and precision.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes defender tus necesidades con amabilidad y precisión.",
    "fr": "Vous pouvez défendre vos besoins avec bienveillance et précision."
  },
  "motive-extra-confidence-54": {
    "sourceText": "The first person to take your dream seriously can be you.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tú puedes ser la primera persona que se tome tu sueño en serio.",
    "fr": "Vous pouvez être la première personne à prendre votre rêve au sérieux."
  },
  "motive-extra-confidence-55": {
    "sourceText": "Your presence can matter even when your contribution is quiet.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu presencia puede importar aunque tu aportación sea discreta.",
    "fr": "Votre présence peut compter même lorsque votre contribution est discrète."
  },
  "motive-extra-confidence-56": {
    "sourceText": "Release the habit of explaining every harmless choice.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja atrás la costumbre de explicar cada decisión que no hace daño a nadie.",
    "fr": "Laissez de côté l’habitude de justifier chaque choix qui ne fait de mal à personne."
  },
  "motive-extra-confidence-57": {
    "sourceText": "You are allowed to ask for fair credit for your work.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tienes derecho a pedir que se reconozca tu trabajo de forma justa.",
    "fr": "Vous avez le droit de demander une juste reconnaissance de votre travail."
  },
  "motive-extra-confidence-58": {
    "sourceText": "Self-respect is a practice you can return to after a difficult choice.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "El respeto por ti es una práctica a la que puedes volver después de una decisión difícil.",
    "fr": "Le respect de soi est une pratique à laquelle vous pouvez revenir après un choix difficile."
  },
  "motive-extra-confidence-59": {
    "sourceText": "Bring the version of yourself that can listen and still disagree.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Preséntate tal como eres, con capacidad para escuchar y también discrepar.",
    "fr": "Venez avec cette part de vous qui sait écouter tout en pouvant être en désaccord."
  },
  "motive-extra-confidence-60": {
    "sourceText": "Your story has room for successes you have not imagined yet.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "En tu historia caben éxitos que todavía no has imaginado.",
    "fr": "Votre histoire a de la place pour des réussites que vous n’avez pas encore imaginées."
  },
  "motive-extra-confidence-61": {
    "sourceText": "You can be new to the role and still be right for the opportunity.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes estar empezando en ese puesto y aun así encajar en esa oportunidad.",
    "fr": "Vous pouvez débuter dans ce rôle et tout de même avoir votre place dans cette occasion."
  },
  "motive-extra-confidence-62": {
    "sourceText": "Let a clear value guide you when confidence feels far away.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que un valor claro te guíe cuando la confianza parezca lejana.",
    "fr": "Laissez une valeur claire vous guider lorsque la confiance semble lointaine."
  },
  "motive-extra-confidence-63": {
    "sourceText": "Your kindness becomes stronger when it includes you.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu amabilidad se fortalece cuando también te incluye.",
    "fr": "Votre bienveillance devient plus forte lorsqu’elle vous inclut aussi."
  },
  "motive-extra-confidence-64": {
    "sourceText": "You can offer your work before you know how it will be received.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes presentar tu trabajo antes de saber cómo lo recibirán.",
    "fr": "Vous pouvez présenter votre travail avant de savoir comment il sera accueilli."
  },
  "motive-extra-confidence-65": {
    "sourceText": "Practice being on your own side during uncomfortable conversations.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Practica ponerte de tu lado en las conversaciones incómodas.",
    "fr": "Exercez-vous à vous soutenir dans les conversations inconfortables."
  },
  "motive-extra-confidence-66": {
    "sourceText": "Your achievements do not need someone else's disappointment to matter.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tus logros no necesitan la decepción de otra persona para tener valor.",
    "fr": "Vos réussites n’ont pas besoin de la déception de quelqu’un d’autre pour compter."
  },
  "motive-extra-confidence-67": {
    "sourceText": "Let yourself want more without insulting where you started.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Permítete querer más sin menospreciar el lugar donde empezaste.",
    "fr": "Autorisez-vous à vouloir davantage sans dénigrer votre point de départ."
  },
  "motive-extra-confidence-68": {
    "sourceText": "There is strength in saying that you need a moment to think.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Hay fuerza en decir que necesitas un momento para pensar.",
    "fr": "Il y a de la force à dire que vous avez besoin d’un moment pour réfléchir."
  },
  "motive-extra-confidence-69": {
    "sourceText": "You can trust yourself to respond even when you cannot predict.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes confiar en tu capacidad de responder aunque no puedas prever lo que pasará.",
    "fr": "Vous pouvez faire confiance à votre capacité de réagir même sans pouvoir prévoir ce qui arrivera."
  },
  "motive-extra-confidence-70": {
    "sourceText": "Hold your head up for the effort, not just the result.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Levanta la cabeza por el esfuerzo, no solo por el resultado.",
    "fr": "Gardez la tête haute pour l’effort, pas seulement pour le résultat."
  },
  "motive-extra-confidence-71": {
    "sourceText": "The person you are becoming deserves your patient support.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "La persona en la que te estás convirtiendo merece tu apoyo paciente.",
    "fr": "La personne que vous devenez mérite votre soutien patient."
  },
  "motive-extra-confidence-72": {
    "sourceText": "Choose one thing today that expresses what you believe in.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige hoy algo que exprese aquello en lo que crees.",
    "fr": "Choisissez aujourd’hui une chose qui exprime vos convictions."
  },
  "motive-extra-confidence-73": {
    "sourceText": "You are allowed to celebrate a victory before chasing another.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes celebrar una victoria antes de ir en busca de otra.",
    "fr": "Vous avez le droit de célébrer une victoire avant d’en poursuivre une autre."
  },
  "motive-extra-confidence-74": {
    "sourceText": "Your self-respect can remain steady through someone else's disapproval.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "El respeto por ti puede mantenerse firme aunque otra persona no lo apruebe.",
    "fr": "Votre respect de vous-même peut rester solide face à la désapprobation de quelqu’un d’autre."
  },
  "motive-extra-confidence-75": {
    "sourceText": "You can belong without blending into every expectation.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes formar parte sin ajustarte a todas las expectativas.",
    "fr": "Vous pouvez avoir votre place sans vous fondre dans toutes les attentes."
  },
  "motive-extra-focus-1": {
    "sourceText": "Give your best hour to something you would be glad to finish.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Dedica tu mejor hora a algo que te alegraría terminar.",
    "fr": "Consacrez votre meilleure heure à quelque chose que vous aurez plaisir à terminer."
  },
  "motive-extra-focus-2": {
    "sourceText": "Clear one surface and make a place for your attention to land.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Despeja una superficie y dale a tu atención un lugar donde posarse.",
    "fr": "Dégagez une surface et offrez à votre attention un endroit où se poser."
  },
  "motive-extra-focus-3": {
    "sourceText": "Write the next step as an action you can actually take.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Escribe el siguiente paso como una acción que de verdad puedas realizar.",
    "fr": "Écrivez la prochaine étape sous la forme d’une action que vous pouvez réellement accomplir."
  },
  "motive-extra-focus-4": {
    "sourceText": "A shorter list can be a more honest commitment.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Una lista más corta puede ser un compromiso más honesto.",
    "fr": "Une liste plus courte peut être un engagement plus honnête."
  },
  "motive-extra-focus-5": {
    "sourceText": "Close the extra tab and return to the question in front of you.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Cierra la pestaña que sobra y vuelve a la pregunta que tienes delante.",
    "fr": "Fermez l’onglet de trop et revenez à la question devant vous."
  },
  "motive-extra-focus-6": {
    "sourceText": "Make a beginning before you redesign the entire plan.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Empieza antes de rediseñar todo el plan.",
    "fr": "Commencez avant de remanier tout le plan."
  },
  "motive-extra-focus-7": {
    "sourceText": "An appointment with your own work deserves to be kept.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Una cita con tu propio trabajo merece que la respetes.",
    "fr": "Un rendez-vous avec votre propre travail mérite d’être respecté."
  },
  "motive-extra-focus-8": {
    "sourceText": "Let the timer hold the boundary while you do the task.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que el temporizador marque el límite mientras haces la tarea.",
    "fr": "Laissez le minuteur poser la limite pendant que vous accomplissez la tâche."
  },
  "motive-extra-focus-9": {
    "sourceText": "Put the tools for your good habit within easy reach.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja a mano las herramientas de tu buen hábito.",
    "fr": "Gardez à portée de main ce qui vous aide à pratiquer votre bonne habitude."
  },
  "motive-extra-focus-10": {
    "sourceText": "Decide what finished means before you begin polishing.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Decide qué significa terminar antes de empezar a pulir los detalles.",
    "fr": "Décidez de ce que signifie terminer avant de commencer à peaufiner les détails."
  },
  "motive-extra-focus-11": {
    "sourceText": "Return to the task without turning the distraction into a story about yourself.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Vuelve a la tarea sin convertir la distracción en una historia sobre quién eres.",
    "fr": "Revenez à la tâche sans transformer la distraction en une histoire sur qui vous êtes."
  },
  "motive-extra-focus-12": {
    "sourceText": "Your calendar should have room for the work behind your goals.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu calendario debería dejar espacio para el trabajo que requieren tus metas.",
    "fr": "Votre calendrier devrait laisser une place au travail nécessaire à vos objectifs."
  },
  "motive-extra-focus-13": {
    "sourceText": "Choose a place to stop so that starting again feels possible.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige dónde parar para que volver a empezar parezca posible.",
    "fr": "Choisissez où vous arrêter pour que reprendre semble possible."
  },
  "motive-extra-focus-14": {
    "sourceText": "Protect your attention as carefully as you protect your money.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Protege tu atención con el mismo cuidado que tu dinero.",
    "fr": "Protégez votre attention avec autant de soin que votre argent."
  },
  "motive-extra-focus-15": {
    "sourceText": "Do the preparation that makes tomorrow's beginning easier.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Prepara lo necesario para que empezar mañana sea más fácil.",
    "fr": "Faites les préparatifs qui rendront le démarrage de demain plus facile."
  },
  "motive-extra-focus-16": {
    "sourceText": "You do not have to answer every notification at the moment it arrives.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "No tienes que responder a cada notificación en cuanto llega.",
    "fr": "Vous n’avez pas à répondre à chaque notification dès son arrivée."
  },
  "motive-extra-focus-17": {
    "sourceText": "Let the important task have a turn before the easy tasks take over.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale un turno a la tarea importante antes de que las fáciles ocupen todo el espacio.",
    "fr": "Donnez sa place à la tâche importante avant que les tâches faciles prennent toute la place."
  },
  "motive-extra-focus-18": {
    "sourceText": "One well-chosen priority can organize an entire morning.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Una prioridad bien elegida puede organizar toda una mañana.",
    "fr": "Une priorité bien choisie peut organiser toute une matinée."
  },
  "motive-extra-focus-19": {
    "sourceText": "Break the vague project into a first visible result.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Divide ese proyecto impreciso hasta encontrar un primer resultado visible.",
    "fr": "Décomposez ce projet encore vague pour définir un premier résultat visible."
  },
  "motive-extra-focus-20": {
    "sourceText": "Give your mind fewer decisions to make at the starting line.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Reduce las decisiones que tu mente tiene que tomar al empezar.",
    "fr": "Réduisez le nombre de décisions à prendre au moment de commencer."
  },
  "motive-extra-focus-21": {
    "sourceText": "A routine works best when it fits the life you actually have.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Una rutina funciona mejor cuando encaja con la vida que realmente tienes.",
    "fr": "Une routine fonctionne mieux lorsqu’elle s’accorde avec votre vie réelle."
  },
  "motive-extra-focus-22": {
    "sourceText": "Track the effort you can control instead of refreshing the outcome.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Lleva cuenta del esfuerzo que puedes controlar en lugar de comprobar el resultado una y otra vez.",
    "fr": "Suivez l’effort que vous pouvez maîtriser plutôt que de vérifier le résultat sans cesse."
  },
  "motive-extra-focus-23": {
    "sourceText": "Leave a note for yourself about where to resume.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Déjate una nota que indique por dónde continuar.",
    "fr": "Laissez-vous une note indiquant où reprendre."
  },
  "motive-extra-focus-24": {
    "sourceText": "Slow down enough to do the part that prevents rework.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Baja el ritmo lo suficiente para hacer la parte que evita tener que repetir el trabajo.",
    "fr": "Ralentissez assez pour faire la partie qui vous évitera de refaire le travail."
  },
  "motive-extra-focus-25": {
    "sourceText": "Finish the paragraph before you judge the whole piece.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Termina el párrafo antes de juzgar el texto completo.",
    "fr": "Terminez le paragraphe avant de juger l’ensemble du texte."
  },
  "motive-extra-focus-26": {
    "sourceText": "Use your energy where it changes the result.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Dedica tu energía a lo que puede cambiar el resultado.",
    "fr": "Consacrez votre énergie à ce qui peut changer le résultat."
  },
  "motive-extra-focus-27": {
    "sourceText": "Make the useful action easier than the familiar distraction.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Haz que la acción útil sea más fácil que la distracción habitual.",
    "fr": "Rendez l’action utile plus facile que la distraction habituelle."
  },
  "motive-extra-focus-28": {
    "sourceText": "Choose a realistic deadline and give it an honest place in your day.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige un plazo realista y dale un espacio honesto en tu día.",
    "fr": "Choisissez une échéance réaliste et faites-lui une vraie place dans votre journée."
  },
  "motive-extra-focus-29": {
    "sourceText": "The next ten minutes can have a purpose even when the whole day feels scattered.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Los próximos diez minutos pueden tener un propósito aunque el resto del día parezca disperso.",
    "fr": "Les dix prochaines minutes peuvent avoir un but même si toute la journée semble décousue."
  },
  "motive-extra-focus-30": {
    "sourceText": "Stop collecting advice long enough to practice one useful idea.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja de reunir consejos el tiempo suficiente para practicar una idea útil.",
    "fr": "Faites une pause dans la collecte de conseils pour mettre en pratique une idée utile."
  },
  "motive-extra-focus-31": {
    "sourceText": "You can say later to a good idea so you can finish the current one.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar una buena idea para después y así terminar la que tienes entre manos.",
    "fr": "Vous pouvez remettre une bonne idée à plus tard pour terminer celle qui vous occupe."
  },
  "motive-extra-focus-32": {
    "sourceText": "Give each commitment the space its real effort requires.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale a cada compromiso el espacio que requiere su esfuerzo real.",
    "fr": "Accordez à chaque engagement la place que demande l’effort réel qu’il nécessite."
  },
  "motive-extra-focus-33": {
    "sourceText": "Arrange your environment to support the person you want to be.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Organiza tu entorno para apoyar a la persona que quieres ser.",
    "fr": "Aménagez votre environnement pour soutenir la personne que vous voulez être."
  },
  "motive-extra-focus-34": {
    "sourceText": "Progress becomes easier to see when you define a clear milestone.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Es más fácil ver el progreso cuando defines una etapa clara.",
    "fr": "Il devient plus facile de voir vos progrès lorsque vous définissez un jalon clair."
  },
  "motive-extra-focus-35": {
    "sourceText": "Let the plan be simple enough to remember when you are tired.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Haz que el plan sea lo bastante sencillo para recordarlo cuando te falte energía.",
    "fr": "Gardez un plan assez simple pour vous en souvenir quand la fatigue se fait sentir."
  },
  "motive-extra-focus-36": {
    "sourceText": "The purpose of a system is to help you act, not to become another project.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Un sistema sirve para ayudarte a actuar, no para convertirse en otro proyecto.",
    "fr": "Un système sert à vous aider à agir, pas à devenir un projet de plus."
  },
  "motive-extra-focus-37": {
    "sourceText": "Start with the part that reduces the most uncertainty.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Empieza por la parte que reduzca más la incertidumbre.",
    "fr": "Commencez par la partie qui réduit le plus l’incertitude."
  },
  "motive-extra-focus-38": {
    "sourceText": "Your concentration deserves a recovery break before it collapses.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu concentración merece una pausa para recuperarse antes de agotarse.",
    "fr": "Votre concentration mérite une pause pour récupérer avant de s’épuiser."
  },
  "motive-extra-focus-39": {
    "sourceText": "Read the instructions carefully enough to begin in the right direction.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Lee las instrucciones con suficiente atención para empezar en la dirección adecuada.",
    "fr": "Lisez les consignes avec assez d’attention pour commencer dans la bonne direction."
  },
  "motive-extra-focus-40": {
    "sourceText": "Keep the promise small when the day is crowded.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando el día esté lleno, haz que tu compromiso sea pequeño.",
    "fr": "Quand la journée est chargée, gardez votre engagement modeste."
  },
  "motive-extra-focus-41": {
    "sourceText": "Not every urgent request deserves your most creative hour.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "No todas las peticiones urgentes merecen tu hora más creativa.",
    "fr": "Toutes les demandes urgentes ne méritent pas votre heure la plus créative."
  },
  "motive-extra-focus-42": {
    "sourceText": "Choose an order that makes the next task easier.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige un orden que facilite la siguiente tarea.",
    "fr": "Choisissez un ordre qui facilite la tâche suivante."
  },
  "motive-extra-focus-43": {
    "sourceText": "Set out what you need before motivation has a chance to negotiate.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Prepara lo que necesitas antes de que la motivación tenga ocasión de negociar.",
    "fr": "Préparez ce dont vous avez besoin avant que la motivation ait le temps de négocier."
  },
  "motive-extra-focus-44": {
    "sourceText": "Let repetition remove the need to decide from scratch.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que la repetición evite tener que decidir desde cero.",
    "fr": "Laissez la répétition vous éviter de décider chaque fois à partir de zéro."
  },
  "motive-extra-focus-45": {
    "sourceText": "Work at a pace you can return to tomorrow.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Trabaja a un ritmo que puedas retomar mañana.",
    "fr": "Travaillez à un rythme que vous pourrez reprendre demain."
  },
  "motive-extra-focus-46": {
    "sourceText": "A useful draft gives you something real to improve.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Un borrador útil te da algo concreto que mejorar.",
    "fr": "Un brouillon utile vous donne quelque chose de concret à améliorer."
  },
  "motive-extra-focus-47": {
    "sourceText": "Make room for review instead of hoping everything went right.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Reserva espacio para revisar en lugar de confiar en que todo haya salido bien.",
    "fr": "Prévoyez un temps de vérification plutôt que d’espérer que tout s’est bien passé."
  },
  "motive-extra-focus-48": {
    "sourceText": "Attention grows stronger when you bring it back gently.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "La atención se fortalece cuando la traes de vuelta con suavidad.",
    "fr": "L’attention se renforce lorsque vous la ramenez doucement."
  },
  "motive-extra-focus-49": {
    "sourceText": "Set a boundary around the work you keep postponing for everyone else.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Protege con un límite el trabajo que sigues posponiendo por atender a los demás.",
    "fr": "Protégez par une limite le travail que vous repoussez sans cesse pour les autres."
  },
  "motive-extra-focus-50": {
    "sourceText": "Reduce the friction between having the intention and taking the action.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Reduce los obstáculos entre tener la intención y pasar a la acción.",
    "fr": "Réduisez les obstacles entre l’intention et le passage à l’action."
  },
  "motive-extra-focus-51": {
    "sourceText": "An unfinished task can be scheduled instead of carried in your head.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes programar una tarea pendiente en lugar de llevarla en la cabeza.",
    "fr": "Vous pouvez planifier une tâche inachevée plutôt que de la garder en tête."
  },
  "motive-extra-focus-52": {
    "sourceText": "Define the smallest version that still serves the purpose.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Define la versión más pequeña que siga cumpliendo su propósito.",
    "fr": "Définissez la plus petite version qui remplit encore son objectif."
  },
  "motive-extra-focus-53": {
    "sourceText": "Let the results of practice guide the next round of effort.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que los resultados de la práctica guíen el siguiente esfuerzo.",
    "fr": "Laissez les résultats de la pratique guider l’effort suivant."
  },
  "motive-extra-focus-54": {
    "sourceText": "Give the difficult part a place in the plan, not just the easy parts.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Hazle un lugar en el plan a la parte difícil, no solo a las fáciles.",
    "fr": "Faites une place dans le plan à la partie difficile, pas seulement aux parties faciles."
  },
  "motive-extra-focus-55": {
    "sourceText": "You can move a project forward without feeling inspired by every step.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes hacer avanzar un proyecto sin sentir inspiración en cada paso.",
    "fr": "Vous pouvez faire avancer un projet sans ressentir de l’inspiration à chaque étape."
  },
  "motive-extra-focus-56": {
    "sourceText": "Spend a moment choosing before you spend an hour reacting.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Dedica un momento a elegir antes de pasar una hora reaccionando.",
    "fr": "Prenez un moment pour choisir avant de passer une heure à réagir."
  },
  "motive-extra-focus-57": {
    "sourceText": "Build a habit around a cue you already encounter.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Vincula un hábito a una señal que ya encuentres en tu día.",
    "fr": "Associez une habitude à un repère que vous rencontrez déjà dans votre journée."
  },
  "motive-extra-focus-58": {
    "sourceText": "Your future attention will appreciate a tidy handoff.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu atención futura agradecerá que dejes claro por dónde continuar.",
    "fr": "Votre attention future appréciera des indications claires pour reprendre."
  },
  "motive-extra-focus-59": {
    "sourceText": "Doing less deliberately can make room for doing better.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Hacer menos de forma deliberada puede dejar espacio para hacerlo mejor.",
    "fr": "Choisir délibérément d’en faire moins peut laisser de la place pour mieux faire."
  },
  "motive-extra-focus-60": {
    "sourceText": "Put a little distance between yourself and the distraction you know too well.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Pon algo de distancia entre tú y esa distracción que conoces tan bien.",
    "fr": "Mettez un peu de distance entre vous et cette distraction que vous connaissez trop bien."
  },
  "motive-extra-focus-61": {
    "sourceText": "Name the obstacle before you add more effort.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Identifica el obstáculo antes de añadir más esfuerzo.",
    "fr": "Nommez l’obstacle avant d’ajouter davantage d’effort."
  },
  "motive-extra-focus-62": {
    "sourceText": "Let the question of what matters come before the question of what is next.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Pregúntate qué importa antes de preguntarte qué viene después.",
    "fr": "Demandez-vous ce qui compte avant de vous demander ce qui vient ensuite."
  },
  "motive-extra-focus-63": {
    "sourceText": "Make the first minute so clear that beginning feels ordinary.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja tan claro el primer minuto que empezar parezca algo normal.",
    "fr": "Rendez la première minute si claire que commencer semble tout naturel."
  },
  "motive-extra-focus-64": {
    "sourceText": "You can honor a deadline without making panic your only method.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes cumplir un plazo sin hacer del pánico tu único método.",
    "fr": "Vous pouvez respecter une échéance sans faire de la panique votre seule méthode."
  },
  "motive-extra-focus-65": {
    "sourceText": "Take notes that help you act rather than notes that merely look complete.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Toma notas que te ayuden a actuar, no solo notas que parezcan completas.",
    "fr": "Prenez des notes qui vous aident à agir, pas seulement des notes qui semblent complètes."
  },
  "motive-extra-focus-66": {
    "sourceText": "Choose a stopping point that preserves tomorrow's energy.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige dónde parar de manera que conserves energía para mañana.",
    "fr": "Choisissez un point d’arrêt qui préserve votre énergie pour demain."
  },
  "motive-extra-focus-67": {
    "sourceText": "Return to the reason you started when the details feel endless.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando los detalles parezcan interminables, vuelve al motivo por el que empezaste.",
    "fr": "Quand les détails semblent sans fin, revenez à la raison pour laquelle vous avez commencé."
  },
  "motive-extra-focus-68": {
    "sourceText": "An intentional pause can protect the quality of the next hour.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Una pausa intencionada puede proteger la calidad de la próxima hora.",
    "fr": "Une pause choisie peut préserver la qualité de l’heure à venir."
  },
  "motive-extra-focus-69": {
    "sourceText": "Move one commitment out of your head and onto a reliable list.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Saca un compromiso de tu cabeza y ponlo en una lista fiable.",
    "fr": "Sortez un engagement de votre tête et inscrivez-le sur une liste fiable."
  },
  "motive-extra-focus-70": {
    "sourceText": "Let consistency be measured in returns, not uninterrupted streaks.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Mide la constancia por las veces que vuelves, no por rachas sin interrupciones.",
    "fr": "Mesurez la régularité aux retours, pas aux séries sans interruption."
  },
  "motive-extra-focus-71": {
    "sourceText": "The right tool is the one that helps you complete the work.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "La herramienta adecuada es la que te ayuda a terminar el trabajo.",
    "fr": "Le bon outil est celui qui vous aide à terminer le travail."
  },
  "motive-extra-focus-72": {
    "sourceText": "Prepare a fallback version of your habit for difficult days.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Prepara una versión más sencilla de tu hábito para los días difíciles.",
    "fr": "Préparez une version allégée de votre habitude pour les jours difficiles."
  },
  "motive-extra-focus-73": {
    "sourceText": "Give your attention a destination before you open your phone.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale un destino a tu atención antes de abrir el teléfono.",
    "fr": "Donnez une destination à votre attention avant d’ouvrir votre téléphone."
  },
  "motive-extra-focus-74": {
    "sourceText": "You can refuse an unnecessary task without refusing to be helpful.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes rechazar una tarea innecesaria sin dejar de querer ayudar.",
    "fr": "Vous pouvez refuser une tâche inutile sans renoncer à aider."
  },
  "motive-extra-focus-75": {
    "sourceText": "Leave enough time to finish with care.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja tiempo suficiente para terminar con cuidado.",
    "fr": "Gardez assez de temps pour terminer avec soin."
  },
  "motive-extra-resilience-1": {
    "sourceText": "When the plan breaks, look for the next thing that still works.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando falle el plan, busca lo siguiente que aún funcione.",
    "fr": "Quand le plan échoue, cherchez la prochaine chose qui fonctionne encore."
  },
  "motive-extra-resilience-2": {
    "sourceText": "You can ask for help before you reach the end of your strength.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes pedir ayuda antes de llegar al límite de tus fuerzas.",
    "fr": "Vous pouvez demander de l’aide avant d’arriver au bout de vos forces."
  },
  "motive-extra-resilience-3": {
    "sourceText": "A setback gives you information about the path, not a verdict on your future.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Un contratiempo te informa sobre el camino; no dicta un veredicto sobre tu futuro.",
    "fr": "Un revers vous renseigne sur le chemin ; il ne rend pas un verdict sur votre avenir."
  },
  "motive-extra-resilience-4": {
    "sourceText": "There is no shame in taking the slower route through a difficult season.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "No hay vergüenza en tomar el camino más lento durante una etapa difícil.",
    "fr": "Il n’y a aucune honte à prendre le chemin plus lent pendant une période difficile."
  },
  "motive-extra-resilience-5": {
    "sourceText": "Hold onto one useful routine when everything else feels uncertain.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Conserva una rutina útil cuando todo lo demás parezca incierto.",
    "fr": "Gardez une routine utile lorsque tout le reste semble incertain."
  },
  "motive-extra-resilience-6": {
    "sourceText": "You can be tired of the struggle and still care about what comes next.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes sentir cansancio ante las dificultades y seguir dando importancia a lo que viene.",
    "fr": "Vous pouvez ressentir de la fatigue face aux difficultés tout en vous souciant de la suite."
  },
  "motive-extra-resilience-7": {
    "sourceText": "Let someone walk beside you through the part you cannot hurry.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que alguien camine a tu lado en la parte que no puedes apresurar.",
    "fr": "Laissez quelqu’un marcher à vos côtés dans cette partie que vous ne pouvez pas hâter."
  },
  "motive-extra-resilience-8": {
    "sourceText": "Begin again from the resources you have today.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Vuelve a empezar con los recursos que tienes hoy.",
    "fr": "Recommencez avec les ressources dont vous disposez aujourd’hui."
  },
  "motive-extra-resilience-9": {
    "sourceText": "Your disappointment deserves honesty, and your future deserves a chance.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu decepción merece sinceridad y tu futuro merece una oportunidad.",
    "fr": "Votre déception mérite de l’honnêteté, et votre avenir mérite une chance."
  },
  "motive-extra-resilience-10": {
    "sourceText": "The day can improve without becoming perfect.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "El día puede mejorar sin llegar a ser perfecto.",
    "fr": "La journée peut s’améliorer sans devenir parfaite."
  },
  "motive-extra-resilience-11": {
    "sourceText": "An unexpected detour may require a different map, not a different dream.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Un desvío inesperado puede exigir otro mapa, no otro sueño.",
    "fr": "Un détour imprévu peut demander une autre carte, pas un autre rêve."
  },
  "motive-extra-resilience-12": {
    "sourceText": "Take care of the person doing the hard work: you.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuida a la persona que está haciendo el trabajo difícil: tú.",
    "fr": "Prenez soin de la personne qui fait le travail difficile : vous."
  },
  "motive-extra-resilience-13": {
    "sourceText": "You do not have to turn every painful experience into a lesson immediately.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "No tienes que convertir de inmediato cada experiencia dolorosa en una lección.",
    "fr": "Vous n’avez pas à transformer immédiatement chaque expérience douloureuse en leçon."
  },
  "motive-extra-resilience-14": {
    "sourceText": "Make your next decision from the present, not from the worst moment behind you.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Toma tu próxima decisión desde el presente, no desde el peor momento que dejaste atrás.",
    "fr": "Prenez votre prochaine décision à partir du présent, pas du pire moment laissé derrière vous."
  },
  "motive-extra-resilience-15": {
    "sourceText": "Keep a little evidence of the times you found a way through.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Conserva alguna prueba de las veces que encontraste una salida.",
    "fr": "Gardez quelques traces des fois où vous avez trouvé comment traverser une difficulté."
  },
  "motive-extra-resilience-16": {
    "sourceText": "You can grieve an ending while making space for another beginning.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes sentir tristeza por un final y dejar espacio para otro comienzo.",
    "fr": "Vous pouvez faire le deuil d’une fin tout en laissant de la place à un nouveau départ."
  },
  "motive-extra-resilience-17": {
    "sourceText": "The strength to continue sometimes starts with a proper meal and some sleep.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "A veces, la fuerza para continuar empieza con una comida completa y algo de sueño.",
    "fr": "La force de continuer commence parfois par un vrai repas et un peu de sommeil."
  },
  "motive-extra-resilience-18": {
    "sourceText": "Your effort still counts when the outcome takes longer than expected.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu esfuerzo sigue contando cuando el resultado tarda más de lo esperado.",
    "fr": "Votre effort compte toujours lorsque le résultat prend plus de temps que prévu."
  },
  "motive-extra-resilience-19": {
    "sourceText": "Choose the support that makes the load manageable.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige el apoyo que haga más llevadera la carga.",
    "fr": "Choisissez le soutien qui rend la charge plus supportable."
  },
  "motive-extra-resilience-20": {
    "sourceText": "You can repair a mistake without spending the day punishing yourself.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes reparar un error sin pasarte el día castigándote.",
    "fr": "Vous pouvez réparer une erreur sans passer la journée à vous punir."
  },
  "motive-extra-resilience-21": {
    "sourceText": "Let an ordinary good moment interrupt a difficult day.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que un buen momento cotidiano interrumpa un día difícil.",
    "fr": "Laissez un bon moment ordinaire interrompre une journée difficile."
  },
  "motive-extra-resilience-22": {
    "sourceText": "The next attempt can be different because you know more now.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "El próximo intento puede ser distinto porque ahora sabes más.",
    "fr": "La prochaine tentative peut être différente parce que vous en savez davantage maintenant."
  },
  "motive-extra-resilience-23": {
    "sourceText": "You do not need a cheerful explanation for a genuinely hard situation.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "No necesitas una explicación alegre para una situación que de verdad es difícil.",
    "fr": "Vous n’avez pas besoin d’une explication joyeuse pour une situation réellement difficile."
  },
  "motive-extra-resilience-24": {
    "sourceText": "Protect the part of yourself that still wants to try.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Protege la parte de ti que todavía quiere intentarlo.",
    "fr": "Protégez la part de vous qui veut encore essayer."
  },
  "motive-extra-resilience-25": {
    "sourceText": "You can be honest about the difficulty without declaring the effort hopeless.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes reconocer la dificultad sin dar por perdido el esfuerzo.",
    "fr": "Vous pouvez reconnaître la difficulté sans conclure que tout effort est vain."
  },
  "motive-extra-resilience-26": {
    "sourceText": "Let the challenge shrink to the size of the next decision.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que el reto se reduzca al tamaño de la próxima decisión.",
    "fr": "Laissez le défi se réduire à la taille de la prochaine décision."
  },
  "motive-extra-resilience-27": {
    "sourceText": "Recovering your footing is a worthwhile use of time.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Recuperar el equilibrio merece el tiempo que le dediques.",
    "fr": "Retrouver vos appuis vaut le temps que vous y consacrez."
  },
  "motive-extra-resilience-28": {
    "sourceText": "You can carry a little hope without making promises about the outcome.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes conservar algo de esperanza sin prometer un resultado.",
    "fr": "Vous pouvez garder un peu d’espoir sans faire de promesses sur le résultat."
  },
  "motive-extra-resilience-29": {
    "sourceText": "Give yourself credit for the work that survival sometimes requires.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Reconoce el esfuerzo que a veces exige salir adelante.",
    "fr": "Reconnaissez les efforts que demande parfois le simple fait de tenir."
  },
  "motive-extra-resilience-30": {
    "sourceText": "Some strength looks like reaching out instead of withdrawing.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "A veces, la fuerza consiste en acercarte a alguien en lugar de aislarte.",
    "fr": "Parfois, la force consiste à aller vers quelqu’un plutôt qu’à se replier."
  },
  "motive-extra-resilience-31": {
    "sourceText": "You can rebuild trust in yourself through one manageable promise.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes recuperar la confianza en ti con una promesa que esté a tu alcance.",
    "fr": "Vous pouvez rebâtir la confiance en vous grâce à une promesse à votre portée."
  },
  "motive-extra-resilience-32": {
    "sourceText": "The habits you return to can become handrails on uncertain days.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Los hábitos a los que vuelves pueden servirte de pasamanos en los días inciertos.",
    "fr": "Les habitudes que vous retrouvez peuvent servir de points d’appui les jours incertains."
  },
  "motive-extra-resilience-33": {
    "sourceText": "You are allowed to pause before deciding whether to continue.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes hacer una pausa antes de decidir si continúas.",
    "fr": "Vous avez le droit de faire une pause avant de décider de continuer ou non."
  },
  "motive-extra-resilience-34": {
    "sourceText": "Let the people who care know what would actually help.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Diles a quienes se preocupan por ti qué te ayudaría de verdad.",
    "fr": "Dites aux personnes qui tiennent à vous ce qui vous aiderait vraiment."
  },
  "motive-extra-resilience-35": {
    "sourceText": "Adjusting the goal can be a thoughtful response to new information.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Ajustar la meta puede ser una respuesta sensata a nueva información.",
    "fr": "Ajuster l’objectif peut être une réponse réfléchie à de nouvelles informations."
  },
  "motive-extra-resilience-36": {
    "sourceText": "You can have a difficult morning and still choose a gentle evening.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes tener una mañana difícil y aun así elegir una tarde tranquila.",
    "fr": "Vous pouvez vivre une matinée difficile et tout de même choisir une soirée douce."
  },
  "motive-extra-resilience-37": {
    "sourceText": "An interrupted journey is still a journey you can resume.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Un camino interrumpido sigue siendo un camino que puedes retomar.",
    "fr": "Un voyage interrompu reste un voyage que vous pouvez reprendre."
  },
  "motive-extra-resilience-38": {
    "sourceText": "Make space for frustration without giving it every decision.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Hazle espacio a la frustración sin dejar que tome todas las decisiones.",
    "fr": "Faites une place à la frustration sans lui confier toutes les décisions."
  },
  "motive-extra-resilience-39": {
    "sourceText": "You can set down a burden that was never yours to carry.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes soltar una carga que nunca te correspondió llevar.",
    "fr": "Vous pouvez déposer un fardeau qu’il ne vous appartenait pas de porter."
  },
  "motive-extra-resilience-40": {
    "sourceText": "The fact that it hurts does not mean you are handling it badly.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Que duela no significa que lo estés afrontando mal.",
    "fr": "Le fait que cela fasse mal ne signifie pas que vous vous y prenez mal."
  },
  "motive-extra-resilience-41": {
    "sourceText": "Choose the next safe step when the larger path is unclear.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige el siguiente paso seguro cuando el camino completo no esté claro.",
    "fr": "Choisissez le prochain pas sûr lorsque l’ensemble du chemin reste flou."
  },
  "motive-extra-resilience-42": {
    "sourceText": "There may be more ways forward than the one that just closed.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puede haber más caminos para avanzar que el que acaba de cerrarse.",
    "fr": "Il existe peut-être d’autres voies pour avancer que celle qui vient de se fermer."
  },
  "motive-extra-resilience-43": {
    "sourceText": "Keep the lessons from the attempt without keeping every harsh thought about it.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Conserva lo que aprendiste del intento sin guardar cada pensamiento duro sobre él.",
    "fr": "Gardez les leçons de la tentative sans conserver toutes les pensées sévères à son sujet."
  },
  "motive-extra-resilience-44": {
    "sourceText": "You can lower the pace without giving up your direction.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes reducir el ritmo sin renunciar a tu dirección.",
    "fr": "Vous pouvez ralentir sans renoncer à votre direction."
  },
  "motive-extra-resilience-45": {
    "sourceText": "Let today be a day of repair if that is what you need.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que hoy sea un día para reparar si eso es lo que necesitas.",
    "fr": "Laissez cette journée être consacrée à réparer si c’est ce dont vous avez besoin."
  },
  "motive-extra-resilience-46": {
    "sourceText": "You are allowed to need more time after something difficult.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Tienes derecho a necesitar más tiempo después de algo difícil.",
    "fr": "Vous avez le droit d’avoir besoin de plus de temps après une épreuve."
  },
  "motive-extra-resilience-47": {
    "sourceText": "The ability to adapt can matter more than the ability to insist.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "La capacidad de adaptarte puede importar más que la de insistir.",
    "fr": "La capacité de vous adapter peut compter davantage que celle d’insister."
  },
  "motive-extra-resilience-48": {
    "sourceText": "A fresh start can happen in the middle of an ordinary afternoon.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes volver a empezar en medio de una tarde cualquiera.",
    "fr": "Un nouveau départ peut survenir au milieu d’un après-midi ordinaire."
  },
  "motive-extra-resilience-49": {
    "sourceText": "Allow a little kindness into the place where you expected criticism.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja entrar un poco de amabilidad donde esperabas críticas.",
    "fr": "Laissez entrer un peu de bienveillance là où vous attendiez des critiques."
  },
  "motive-extra-resilience-50": {
    "sourceText": "You can miss the old plan and still make a useful new one.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes echar de menos el plan anterior y aun así crear uno nuevo que sirva.",
    "fr": "Vous pouvez regretter l’ancien plan tout en en créant un nouveau qui soit utile."
  },
  "motive-extra-resilience-51": {
    "sourceText": "One uncomfortable conversation can be the beginning of a lighter burden.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Una conversación incómoda puede ser el comienzo de una carga más ligera.",
    "fr": "Une conversation inconfortable peut être le début d’un fardeau moins lourd."
  },
  "motive-extra-resilience-52": {
    "sourceText": "Your next chapter can be shaped by more than what went wrong.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Lo que salió mal no tiene por qué ser lo único que dé forma a tu próxima etapa.",
    "fr": "Votre prochain chapitre peut prendre forme à partir d’autre chose que ce qui s’est mal passé."
  },
  "motive-extra-resilience-53": {
    "sourceText": "Keep looking for what is possible without denying what is hard.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Sigue buscando lo posible sin negar lo difícil.",
    "fr": "Continuez à chercher ce qui est possible sans nier ce qui est difficile."
  },
  "motive-extra-resilience-54": {
    "sourceText": "You can learn to carry uncertainty without letting it lead every choice.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes aprender a llevar la incertidumbre sin dejar que guíe cada decisión.",
    "fr": "Vous pouvez apprendre à vivre avec l’incertitude sans lui laisser guider chaque choix."
  },
  "motive-extra-resilience-55": {
    "sourceText": "An honest rest can be part of a determined response.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Un descanso de verdad puede formar parte de una respuesta decidida.",
    "fr": "Un vrai repos peut faire partie d’une réponse déterminée."
  },
  "motive-extra-resilience-56": {
    "sourceText": "Let your recovery have its own rhythm.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que tu recuperación tenga su propio ritmo.",
    "fr": "Laissez votre rétablissement suivre son propre rythme."
  },
  "motive-extra-resilience-57": {
    "sourceText": "You are not required to turn pain into productivity.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "No tienes la obligación de convertir el dolor en productividad.",
    "fr": "Vous n’avez pas à transformer la douleur en productivité."
  },
  "motive-extra-resilience-58": {
    "sourceText": "The strength you need today may be quieter than you expected.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "La fuerza que necesitas hoy puede ser más discreta de lo que esperabas.",
    "fr": "La force dont vous avez besoin aujourd’hui peut être plus discrète que prévu."
  },
  "motive-extra-resilience-59": {
    "sourceText": "Give tomorrow the benefit of not being decided by today's mood.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale a mañana la oportunidad de no quedar definido por tu ánimo de hoy.",
    "fr": "Ne laissez pas votre humeur d’aujourd’hui décider d’avance de demain."
  },
  "motive-extra-resilience-60": {
    "sourceText": "You can return with a smaller plan and a wiser boundary.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes volver con un plan más pequeño y un límite más sensato.",
    "fr": "Vous pouvez revenir avec un plan plus modeste et une limite plus sage."
  },
  "motive-extra-resilience-61": {
    "sourceText": "Reach for what steadies you before reaching for what numbs the question.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Busca lo que te dé estabilidad antes de lo que acalle la pregunta.",
    "fr": "Cherchez ce qui vous stabilise avant ce qui fait taire la question."
  },
  "motive-extra-resilience-62": {
    "sourceText": "Let one trusted person know that the day has been heavy.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuéntale a una persona de confianza que el día ha sido pesado.",
    "fr": "Dites à une personne de confiance que la journée a été lourde."
  },
  "motive-extra-resilience-63": {
    "sourceText": "A difficult result can change your strategy without changing your values.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Un resultado difícil puede cambiar tu estrategia sin cambiar tus valores.",
    "fr": "Un résultat difficile peut changer votre stratégie sans changer vos valeurs."
  },
  "motive-extra-resilience-64": {
    "sourceText": "You can feel discouraged and still complete one caring action.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes sentir desánimo y aun así hacer un gesto de cuidado.",
    "fr": "Vous pouvez ressentir du découragement et tout de même accomplir un geste attentionné."
  },
  "motive-extra-resilience-65": {
    "sourceText": "Do not measure your entire future from the bottom of a difficult hour.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "No midas todo tu futuro desde el punto más bajo de una hora difícil.",
    "fr": "Ne mesurez pas tout votre avenir depuis le point le plus bas d’une heure difficile."
  },
  "motive-extra-resilience-66": {
    "sourceText": "Some doors open only after you give yourself permission to look elsewhere.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Algunas puertas solo se abren cuando te das permiso para buscar en otro lugar.",
    "fr": "Certaines portes ne s’ouvrent que lorsque vous vous autorisez à chercher ailleurs."
  },
  "motive-extra-resilience-67": {
    "sourceText": "You can keep your heart open while becoming more careful with your trust.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes mantener el corazón abierto y ser más prudente al confiar.",
    "fr": "Vous pouvez garder le cœur ouvert tout en accordant votre confiance avec plus de prudence."
  },
  "motive-extra-resilience-68": {
    "sourceText": "The effort of rebuilding deserves as much respect as the first achievement.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "El esfuerzo de reconstruir merece tanto respeto como el primer logro.",
    "fr": "L’effort de reconstruire mérite autant de respect que la première réussite."
  },
  "motive-extra-resilience-69": {
    "sourceText": "Meet the unexpected with the resources of the present.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Afronta lo inesperado con los recursos del presente.",
    "fr": "Faites face à l’imprévu avec les ressources du présent."
  },
  "motive-extra-resilience-70": {
    "sourceText": "There is courage in letting a workable plan replace a perfect one.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Hay valor en dejar que un plan viable sustituya a uno perfecto.",
    "fr": "Il y a du courage à laisser un plan réalisable remplacer un plan parfait."
  },
  "motive-extra-resilience-71": {
    "sourceText": "You are allowed to let a good day be good without preparing for its loss.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar que un buen día sea bueno sin prepararte para perderlo.",
    "fr": "Vous avez le droit de profiter d’une bonne journée sans vous préparer à la perdre."
  },
  "motive-extra-resilience-72": {
    "sourceText": "Remember the small comforts that have helped you through before.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Recuerda las pequeñas cosas reconfortantes que ya te han ayudado antes.",
    "fr": "Rappelez-vous les petits réconforts qui vous ont déjà aidé à traverser des difficultés."
  },
  "motive-extra-resilience-73": {
    "sourceText": "When you cannot solve the whole problem, reduce one part of the strain.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando no puedas resolver todo el problema, alivia una parte de la tensión.",
    "fr": "Quand vous ne pouvez pas résoudre tout le problème, allégez une partie de la tension."
  },
  "motive-extra-resilience-74": {
    "sourceText": "Your willingness to seek another route is a form of progress.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu disposición a buscar otro camino es una forma de progreso.",
    "fr": "Votre volonté de chercher un autre chemin est une forme de progrès."
  },
  "motive-extra-resilience-75": {
    "sourceText": "Leave room for a future that surprises your disappointment.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja espacio para un futuro que sorprenda a tu decepción.",
    "fr": "Laissez de la place à un avenir qui surprendra votre déception."
  },
  "motive-extra-growth-1": {
    "sourceText": "Curiosity can turn an uncomfortable gap into a useful question.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "La curiosidad puede convertir una laguna que te incomoda en una pregunta útil.",
    "fr": "La curiosité peut transformer une lacune inconfortable en une question utile."
  },
  "motive-extra-growth-2": {
    "sourceText": "Let a mistake become something you examine instead of something you hide.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que un error sea algo que examinas en lugar de algo que escondes.",
    "fr": "Faites d’une erreur quelque chose à examiner plutôt que quelque chose à cacher."
  },
  "motive-extra-growth-3": {
    "sourceText": "Try listening for the part of the feedback that you can use.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Intenta escuchar la parte de los comentarios que puedas aprovechar.",
    "fr": "Essayez d’écouter la partie des retours qui peut vous être utile."
  },
  "motive-extra-growth-4": {
    "sourceText": "You are allowed to revise a belief when experience gives you better evidence.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes revisar una creencia cuando la experiencia te aporta mejores pruebas.",
    "fr": "Vous avez le droit de revoir une conviction lorsque l’expérience vous apporte de meilleurs éléments."
  },
  "motive-extra-growth-5": {
    "sourceText": "Make a little room each week for learning without performing.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Reserva un poco de espacio cada semana para aprender sin tener que demostrar nada.",
    "fr": "Gardez un peu de place chaque semaine pour apprendre sans avoir à faire vos preuves."
  },
  "motive-extra-growth-6": {
    "sourceText": "Practice the skill at the level where you can actually improve it.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Practica la habilidad al nivel en el que realmente puedas mejorarla.",
    "fr": "Exercez cette compétence au niveau où vous pouvez réellement progresser."
  },
  "motive-extra-growth-7": {
    "sourceText": "Your first version only needs to teach you what the second version needs.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu primera versión solo necesita enseñarte qué necesita la segunda.",
    "fr": "Votre première version a seulement besoin de vous apprendre ce dont la deuxième a besoin."
  },
  "motive-extra-growth-8": {
    "sourceText": "Ask what changed when something finally starts to work.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Pregúntate qué cambió cuando algo por fin empiece a funcionar.",
    "fr": "Demandez-vous ce qui a changé lorsque quelque chose commence enfin à fonctionner."
  },
  "motive-extra-growth-9": {
    "sourceText": "Let your questions become more specific as your understanding deepens.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que tus preguntas sean más concretas a medida que comprendes mejor.",
    "fr": "Laissez vos questions devenir plus précises à mesure que votre compréhension s’approfondit."
  },
  "motive-extra-growth-10": {
    "sourceText": "The next useful teacher may be someone you did not expect.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "La próxima persona que te enseñe algo útil puede ser alguien inesperado.",
    "fr": "La prochaine personne qui vous apprendra quelque chose d’utile sera peut-être inattendue."
  },
  "motive-extra-growth-11": {
    "sourceText": "Being challenged can reveal a skill worth developing.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Un reto puede mostrarte una habilidad que vale la pena desarrollar.",
    "fr": "Un défi peut révéler une compétence qui mérite d’être développée."
  },
  "motive-extra-growth-12": {
    "sourceText": "You can appreciate your old choices while making better-informed ones now.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes valorar tus decisiones anteriores y tomar ahora otras con más información.",
    "fr": "Vous pouvez apprécier vos anciens choix tout en faisant aujourd’hui des choix mieux éclairés."
  },
  "motive-extra-growth-13": {
    "sourceText": "Make something small enough to finish and real enough to learn from.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Crea algo lo bastante pequeño para terminarlo y lo bastante real para aprender de ello.",
    "fr": "Créez quelque chose d’assez petit pour le terminer et d’assez concret pour en tirer des leçons."
  },
  "motive-extra-growth-14": {
    "sourceText": "An honest reflection can save you from repeating an expensive lesson.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Una reflexión sincera puede evitarte repetir una lección costosa.",
    "fr": "Une réflexion honnête peut vous éviter de répéter une leçon coûteuse."
  },
  "motive-extra-growth-15": {
    "sourceText": "Go looking for an example that expands what you think is possible.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Busca un ejemplo que amplíe lo que crees posible.",
    "fr": "Cherchez un exemple qui élargit votre idée de ce qui est possible."
  },
  "motive-extra-growth-16": {
    "sourceText": "Learn the principle behind the advice before applying it everywhere.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Aprende el principio que hay detrás de un consejo antes de aplicarlo en todas partes.",
    "fr": "Comprenez le principe derrière un conseil avant de l’appliquer partout."
  },
  "motive-extra-growth-17": {
    "sourceText": "You can be proud of a skill that still needs practice.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes sentir orgullo por una habilidad que todavía necesita práctica.",
    "fr": "Vous pouvez ressentir de la fierté pour une compétence qui demande encore de la pratique."
  },
  "motive-extra-growth-18": {
    "sourceText": "Give yourself a chance to be surprised by a new interest.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Date la oportunidad de sorprenderte con un nuevo interés.",
    "fr": "Donnez-vous la chance de découvrir un nouvel intérêt qui vous surprenne."
  },
  "motive-extra-growth-19": {
    "sourceText": "Understanding someone else's perspective can strengthen your own thinking.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Comprender el punto de vista de otra persona puede fortalecer tu propia forma de pensar.",
    "fr": "Comprendre le point de vue d’une autre personne peut renforcer votre propre réflexion."
  },
  "motive-extra-growth-20": {
    "sourceText": "Change becomes practical when you name the behavior you want to practice.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "El cambio se vuelve práctico cuando nombras la conducta que quieres practicar.",
    "fr": "Le changement devient concret lorsque vous nommez le comportement que vous voulez pratiquer."
  },
  "motive-extra-growth-21": {
    "sourceText": "You are allowed to become interested in a different future.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes empezar a interesarte por un futuro diferente.",
    "fr": "Vous avez le droit de vous intéresser à un autre avenir."
  },
  "motive-extra-growth-22": {
    "sourceText": "An experiment can be worthwhile even when its answer is no.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Un experimento puede merecer la pena aunque su respuesta sea no.",
    "fr": "Une expérience peut valoir la peine même si sa réponse est non."
  },
  "motive-extra-growth-23": {
    "sourceText": "Let practice be a conversation with the work, not a trial of your worth.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que la práctica sea un diálogo con el trabajo, no un juicio sobre tu valor.",
    "fr": "Faites de la pratique un dialogue avec le travail, pas un procès de votre valeur."
  },
  "motive-extra-growth-24": {
    "sourceText": "The habit of asking why can lead you beyond the familiar answer.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "El hábito de preguntar por qué puede llevarte más allá de la respuesta de siempre.",
    "fr": "L’habitude de demander pourquoi peut vous mener au-delà de la réponse habituelle."
  },
  "motive-extra-growth-25": {
    "sourceText": "Look for the difference between what feels difficult and what is truly impossible.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Busca la diferencia entre lo que parece difícil y lo que es realmente imposible.",
    "fr": "Cherchez la différence entre ce qui semble difficile et ce qui est réellement impossible."
  },
  "motive-extra-growth-26": {
    "sourceText": "You can begin learning without announcing a new identity.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes empezar a aprender sin anunciar una nueva identidad.",
    "fr": "Vous pouvez commencer à apprendre sans annoncer une nouvelle identité."
  },
  "motive-extra-growth-27": {
    "sourceText": "Write down what worked so that improvement has a memory.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Anota lo que funcionó para que la mejora tenga memoria.",
    "fr": "Notez ce qui a fonctionné pour donner une mémoire à vos progrès."
  },
  "motive-extra-growth-28": {
    "sourceText": "Growth sometimes means choosing a healthier definition of success.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "A veces, crecer significa elegir una definición del éxito que te haga más bien.",
    "fr": "Grandir signifie parfois choisir une définition de la réussite plus saine pour vous."
  },
  "motive-extra-growth-29": {
    "sourceText": "Spend time with people who make thoughtful questions feel welcome.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Pasa tiempo con personas que acojan las preguntas reflexivas.",
    "fr": "Passez du temps avec des personnes qui accueillent les questions réfléchies."
  },
  "motive-extra-growth-30": {
    "sourceText": "You can learn something useful from a person you do not agree with entirely.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes aprender algo útil de alguien con quien no estás totalmente de acuerdo.",
    "fr": "Vous pouvez apprendre quelque chose d’utile d’une personne avec laquelle vous n’êtes pas entièrement d’accord."
  },
  "motive-extra-growth-31": {
    "sourceText": "Give a new method a fair attempt before deciding it is not for you.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale una oportunidad justa a un método nuevo antes de decidir que no es para ti.",
    "fr": "Donnez une vraie chance à une nouvelle méthode avant de décider qu’elle n’est pas pour vous."
  },
  "motive-extra-growth-32": {
    "sourceText": "The willingness to be corrected keeps your understanding alive.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "La disposición a aceptar correcciones mantiene viva tu comprensión.",
    "fr": "La volonté d’accepter les corrections garde votre compréhension vivante."
  },
  "motive-extra-growth-33": {
    "sourceText": "Your future options can grow with the skills you practice today.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Tus opciones futuras pueden ampliarse con las habilidades que practicas hoy.",
    "fr": "Vos possibilités futures peuvent s’élargir grâce aux compétences que vous pratiquez aujourd’hui."
  },
  "motive-extra-growth-34": {
    "sourceText": "Make a little room between receiving feedback and defending yourself.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja un poco de espacio entre recibir comentarios y ponerte a la defensiva.",
    "fr": "Laissez un peu d’espace entre recevoir un retour et vous défendre."
  },
  "motive-extra-growth-35": {
    "sourceText": "Explore the interest that keeps returning when the day gets quiet.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Explora ese interés que vuelve cuando el día se calma.",
    "fr": "Explorez cet intérêt qui revient quand la journée se calme."
  },
  "motive-extra-growth-36": {
    "sourceText": "Let your goals change as your knowledge of yourself becomes clearer.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que tus metas cambien a medida que te conoces mejor.",
    "fr": "Laissez vos objectifs changer à mesure que vous vous connaissez mieux."
  },
  "motive-extra-growth-37": {
    "sourceText": "You can outgrow a habit without turning your past into an enemy.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar atrás un hábito sin convertir tu pasado en un enemigo.",
    "fr": "Vous pouvez dépasser une habitude sans faire de votre passé un ennemi."
  },
  "motive-extra-growth-38": {
    "sourceText": "Improvement often begins with noticing a pattern honestly.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "La mejora suele empezar al reconocer un patrón con sinceridad.",
    "fr": "L’amélioration commence souvent par l’observation honnête d’un schéma qui se répète."
  },
  "motive-extra-growth-39": {
    "sourceText": "Take the time to understand the part you usually rush past.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Dedica tiempo a comprender la parte por la que sueles pasar de prisa.",
    "fr": "Prenez le temps de comprendre la partie que vous traversez habituellement trop vite."
  },
  "motive-extra-growth-40": {
    "sourceText": "A good question can be a more useful achievement than a quick answer.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Una buena pregunta puede ser un logro más útil que una respuesta rápida.",
    "fr": "Une bonne question peut être une réussite plus utile qu’une réponse rapide."
  },
  "motive-extra-growth-41": {
    "sourceText": "Share what you are learning while leaving room for what you do not know.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Comparte lo que estás aprendiendo y deja espacio para lo que no sabes.",
    "fr": "Partagez ce que vous apprenez tout en laissant de la place à ce que vous ne savez pas."
  },
  "motive-extra-growth-42": {
    "sourceText": "Practice explaining the idea simply enough to discover your own gaps.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Practica explicar la idea con suficiente sencillez para descubrir tus propias lagunas.",
    "fr": "Exercez-vous à expliquer l’idée assez simplement pour découvrir vos propres lacunes."
  },
  "motive-extra-growth-43": {
    "sourceText": "You can ask for an example instead of pretending to understand.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes pedir un ejemplo en lugar de fingir que entiendes.",
    "fr": "Vous pouvez demander un exemple au lieu de faire semblant de comprendre."
  },
  "motive-extra-growth-44": {
    "sourceText": "Keep the curiosity that made you begin before comparison made you hesitate.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Conserva la curiosidad que te hizo empezar antes de que la comparación te hiciera dudar.",
    "fr": "Gardez la curiosité qui vous a fait commencer avant que la comparaison vous fasse hésiter."
  },
  "motive-extra-growth-45": {
    "sourceText": "Your interests do not have to become a business to deserve your time.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Tus intereses no tienen que convertirse en un negocio para merecer tu tiempo.",
    "fr": "Vos centres d’intérêt n’ont pas à devenir une activité commerciale pour mériter votre temps."
  }
};
if(typeof module!=='undefined')module.exports=motiveQuoteLocales;
