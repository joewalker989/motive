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
  }
};
if(typeof module!=='undefined')module.exports=motiveQuoteLocales;
