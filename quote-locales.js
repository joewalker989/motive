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
  },
  "motive-extra-growth-46": {
    "sourceText": "Let a small experiment test a large assumption.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que un pequeño experimento ponga a prueba una gran suposición.",
    "fr": "Laissez une petite expérience mettre à l’épreuve une grande supposition."
  },
  "motive-extra-growth-47": {
    "sourceText": "Make learning visible by using something you just discovered.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Haz visible lo que aprendes usando algo que acabas de descubrir.",
    "fr": "Rendez votre apprentissage visible en utilisant ce que vous venez de découvrir."
  },
  "motive-extra-growth-48": {
    "sourceText": "You can choose a mentor for a skill without borrowing their whole life.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes elegir a alguien que te guíe en una habilidad sin adoptar toda su vida.",
    "fr": "Vous pouvez choisir une personne pour vous guider dans une compétence sans adopter toute sa vie."
  },
  "motive-extra-growth-49": {
    "sourceText": "Become familiar with the feeling of improving through repetition.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Familiarízate con la sensación de mejorar mediante la repetición.",
    "fr": "Familiarisez-vous avec la sensation de progresser par la répétition."
  },
  "motive-extra-growth-50": {
    "sourceText": "Some progress begins with admitting that the old method has stopped helping.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "A veces, el progreso empieza por admitir que el método anterior ya no ayuda.",
    "fr": "Certains progrès commencent par reconnaître que l’ancienne méthode n’aide plus."
  },
  "motive-extra-growth-51": {
    "sourceText": "Read something that makes your familiar question feel new.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Lee algo que haga que una pregunta de siempre parezca nueva.",
    "fr": "Lisez quelque chose qui vous fait voir votre question habituelle sous un jour nouveau."
  },
  "motive-extra-growth-52": {
    "sourceText": "Leave a little room in your plans for a better idea.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja un poco de espacio en tus planes para una idea mejor.",
    "fr": "Laissez un peu de place dans vos plans pour une meilleure idée."
  },
  "motive-extra-growth-53": {
    "sourceText": "You can change your habits without changing everything at once.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes cambiar tus hábitos sin cambiarlo todo a la vez.",
    "fr": "Vous pouvez changer vos habitudes sans tout changer à la fois."
  },
  "motive-extra-growth-54": {
    "sourceText": "Let the work show you which skill needs your next hour.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que el trabajo te muestre qué habilidad necesita tu próxima hora.",
    "fr": "Laissez le travail vous montrer quelle compétence mérite votre prochaine heure."
  },
  "motive-extra-growth-55": {
    "sourceText": "The ability to ask for feedback is a skill worth practicing too.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "La capacidad de pedir comentarios también merece práctica.",
    "fr": "La capacité de demander des retours mérite elle aussi de la pratique."
  },
  "motive-extra-growth-56": {
    "sourceText": "Your understanding can deepen even when the answer becomes less simple.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu comprensión puede profundizarse aunque la respuesta se vuelva menos sencilla.",
    "fr": "Votre compréhension peut s’approfondir même lorsque la réponse devient moins simple."
  },
  "motive-extra-growth-57": {
    "sourceText": "Try the unfamiliar route when the cost of experimenting is small.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Prueba el camino desconocido cuando el coste de experimentar sea pequeño.",
    "fr": "Essayez le chemin inhabituel lorsque le coût de l’expérience est faible."
  },
  "motive-extra-growth-58": {
    "sourceText": "You can move beyond a label that no longer describes you.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar atrás una etiqueta que ya no te describe.",
    "fr": "Vous pouvez dépasser une étiquette qui ne vous décrit plus."
  },
  "motive-extra-growth-59": {
    "sourceText": "The skill you admire may have an ordinary first lesson you can take today.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "La habilidad que admiras puede tener una primera lección sencilla que puedas tomar hoy.",
    "fr": "La compétence que vous admirez commence peut-être par une leçon simple que vous pouvez suivre aujourd’hui."
  },
  "motive-extra-growth-60": {
    "sourceText": "Use comparison to find a technique, not to assign yourself a rank.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Usa la comparación para encontrar una técnica, no para asignarte un puesto.",
    "fr": "Utilisez la comparaison pour trouver une technique, pas pour vous attribuer un rang."
  },
  "motive-extra-growth-61": {
    "sourceText": "Notice when a former challenge becomes something you can help others with.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Observa cuándo un antiguo reto se convierte en algo con lo que puedes ayudar a otras personas.",
    "fr": "Remarquez quand un ancien défi devient un domaine où vous pouvez aider les autres."
  },
  "motive-extra-growth-62": {
    "sourceText": "Give your new habits enough repetitions to become familiar.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale a tus nuevos hábitos suficientes repeticiones para que se vuelvan familiares.",
    "fr": "Donnez à vos nouvelles habitudes assez de répétitions pour devenir familières."
  },
  "motive-extra-growth-63": {
    "sourceText": "Keep a record of questions that deserve more than a hurried answer.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Lleva un registro de las preguntas que merecen algo más que una respuesta apresurada.",
    "fr": "Gardez une trace des questions qui méritent plus qu’une réponse précipitée."
  },
  "motive-extra-growth-64": {
    "sourceText": "You are allowed to leave an achievement behind when your values change.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar atrás un logro cuando cambien tus valores.",
    "fr": "Vous avez le droit de laisser une réussite derrière vous lorsque vos valeurs changent."
  },
  "motive-extra-growth-65": {
    "sourceText": "Let your definition of progress include becoming easier to live with.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que tu definición de progreso incluya hacer más fácil la convivencia contigo.",
    "fr": "Laissez votre définition du progrès inclure le fait de devenir une personne avec qui il est plus facile de vivre."
  },
  "motive-extra-growth-66": {
    "sourceText": "Learning to listen can improve work that has nothing to do with speaking.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Aprender a escuchar puede mejorar un trabajo que no tiene nada que ver con hablar.",
    "fr": "Apprendre à écouter peut améliorer un travail qui n’a rien à voir avec la parole."
  },
  "motive-extra-growth-67": {
    "sourceText": "Choose one assumption to examine before you build another plan on it.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige una suposición que examinar antes de construir otro plan sobre ella.",
    "fr": "Choisissez une supposition à examiner avant de bâtir un autre plan dessus."
  },
  "motive-extra-growth-68": {
    "sourceText": "You can learn a great deal by finishing something modest.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes aprender mucho al terminar algo modesto.",
    "fr": "Vous pouvez apprendre beaucoup en terminant quelque chose de modeste."
  },
  "motive-extra-growth-69": {
    "sourceText": "Be curious about the person you are when you feel most at ease.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Siente curiosidad por la persona que eres cuando estás más a gusto.",
    "fr": "Faites preuve de curiosité envers la personne que vous êtes lorsque vous vous sentez le plus à l’aise."
  },
  "motive-extra-growth-70": {
    "sourceText": "Your next useful insight may arrive while you are trying rather than planning.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu próxima idea útil puede llegar mientras lo intentas, no mientras planificas.",
    "fr": "Votre prochaine idée utile peut survenir pendant que vous essayez plutôt que pendant que vous planifiez."
  },
  "motive-extra-growth-71": {
    "sourceText": "Make room for a version of success that includes your well-being.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Haz espacio para una versión del éxito que incluya tu bienestar.",
    "fr": "Faites une place à une version de la réussite qui inclut votre bien-être."
  },
  "motive-extra-growth-72": {
    "sourceText": "You do not need to erase your starting point to appreciate how far you have come.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "No necesitas borrar tu punto de partida para valorar lo lejos que has llegado.",
    "fr": "Vous n’avez pas besoin d’effacer votre point de départ pour apprécier le chemin parcouru."
  },
  "motive-extra-growth-73": {
    "sourceText": "Let the outcome of a small test refine the direction of your ambition.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que el resultado de una pequeña prueba afine la dirección de tus aspiraciones.",
    "fr": "Laissez le résultat d’un petit essai préciser la direction de vos ambitions."
  },
  "motive-extra-growth-74": {
    "sourceText": "Develop the patience to understand before you try to master.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Cultiva la paciencia de comprender antes de intentar dominar.",
    "fr": "Cultivez la patience de comprendre avant de chercher à maîtriser."
  },
  "motive-extra-growth-75": {
    "sourceText": "Become someone who can say that you learned something today.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Conviértete en alguien que pueda decir que hoy aprendió algo.",
    "fr": "Devenez une personne qui peut dire qu’elle a appris quelque chose aujourd’hui."
  },
  "motive-extra-calm-1": {
    "sourceText": "You can leave an unanswered message until you have the space to respond.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar un mensaje sin responder hasta tener espacio para hacerlo.",
    "fr": "Vous pouvez laisser un message sans réponse jusqu’à avoir la disponibilité pour y répondre."
  },
  "motive-extra-calm-2": {
    "sourceText": "Let the next breath arrive without trying to improve it.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que llegue la próxima respiración sin intentar mejorarla.",
    "fr": "Laissez venir la prochaine respiration sans chercher à l’améliorer."
  },
  "motive-extra-calm-3": {
    "sourceText": "There is no prize for carrying tomorrow's worries through tonight.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "No hay premio por cargar esta noche con las preocupaciones de mañana.",
    "fr": "Il n’y a pas de prix à gagner en portant ce soir les soucis de demain."
  },
  "motive-extra-calm-4": {
    "sourceText": "Set down your phone and notice the room that is holding you.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja el teléfono y observa la habitación que te acoge.",
    "fr": "Posez votre téléphone et remarquez la pièce qui vous accueille."
  },
  "motive-extra-calm-5": {
    "sourceText": "You are allowed a few minutes that produce nothing measurable.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Tienes derecho a unos minutos que no produzcan nada medible.",
    "fr": "Vous avez le droit de prendre quelques minutes qui ne produisent rien de mesurable."
  },
  "motive-extra-calm-6": {
    "sourceText": "Unclench your hands before you decide what to do next.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Relaja las manos antes de decidir qué hacer después.",
    "fr": "Desserrez les mains avant de décider de la suite."
  },
  "motive-extra-calm-7": {
    "sourceText": "Let a familiar sound bring your attention back to the present.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que un sonido familiar traiga tu atención de vuelta al presente.",
    "fr": "Laissez un son familier ramener votre attention au présent."
  },
  "motive-extra-calm-8": {
    "sourceText": "Your day can have a quiet corner that belongs to nobody else's urgency.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu día puede tener un rincón tranquilo que no pertenezca a las prisas de nadie más.",
    "fr": "Votre journée peut avoir un coin tranquille qui n’appartient à l’urgence de personne d’autre."
  },
  "motive-extra-calm-9": {
    "sourceText": "Take a sip of water and give yourself a moment between tasks.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Toma un sorbo de agua y date un momento entre tareas.",
    "fr": "Buvez une gorgée d’eau et accordez-vous un moment entre deux tâches."
  },
  "motive-extra-calm-10": {
    "sourceText": "You can appreciate a peaceful moment without making it last forever.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes apreciar un momento de paz sin hacerlo durar para siempre.",
    "fr": "Vous pouvez apprécier un moment paisible sans le faire durer éternellement."
  },
  "motive-extra-calm-11": {
    "sourceText": "Some questions become easier after a night of rest.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Algunas preguntas se vuelven más fáciles después de una noche de descanso.",
    "fr": "Certaines questions deviennent plus faciles après une nuit de repos."
  },
  "motive-extra-calm-12": {
    "sourceText": "Open a window if you can and notice the air against your skin.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Si puedes, abre una ventana y siente el aire sobre la piel.",
    "fr": "Si vous le pouvez, ouvrez une fenêtre et remarquez l’air sur votre peau."
  },
  "motive-extra-calm-13": {
    "sourceText": "You do not have to solve a feeling to sit with it kindly.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "No tienes que resolver una emoción para acompañarla con amabilidad.",
    "fr": "Vous n’avez pas à résoudre une émotion pour lui faire une place avec bienveillance."
  },
  "motive-extra-calm-14": {
    "sourceText": "Let the ordinary comfort of a warm drink have your full attention.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale toda tu atención al sencillo consuelo de una bebida caliente.",
    "fr": "Accordez toute votre attention au réconfort ordinaire d’une boisson chaude."
  },
  "motive-extra-calm-15": {
    "sourceText": "Your body deserves care before it has to demand it.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu cuerpo merece cuidados antes de tener que reclamarlos.",
    "fr": "Votre corps mérite des soins avant de devoir les réclamer."
  },
  "motive-extra-calm-16": {
    "sourceText": "Make a little less noise around the thing you are trying to understand.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Reduce un poco el ruido alrededor de lo que intentas comprender.",
    "fr": "Réduisez un peu le bruit autour de ce que vous essayez de comprendre."
  },
  "motive-extra-calm-17": {
    "sourceText": "You can let a conversation end without replaying every sentence tonight.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar que una conversación termine sin repasar cada frase esta noche.",
    "fr": "Vous pouvez laisser une conversation se terminer sans repasser chaque phrase ce soir."
  },
  "motive-extra-calm-18": {
    "sourceText": "Sit somewhere comfortable without turning the pause into a task.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Siéntate en un lugar cómodo sin convertir la pausa en una tarea.",
    "fr": "Installez-vous confortablement sans transformer la pause en tâche."
  },
  "motive-extra-calm-19": {
    "sourceText": "Choose one gentle thing to do before the day becomes busy again.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige algo amable que hacer antes de que el día vuelva a llenarse.",
    "fr": "Choisissez une chose douce à faire avant que la journée redevienne chargée."
  },
  "motive-extra-calm-20": {
    "sourceText": "Let the light in the room be something you notice.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Fíjate en la luz de la habitación.",
    "fr": "Prenez un instant pour remarquer la lumière dans la pièce."
  },
  "motive-extra-calm-21": {
    "sourceText": "You can put a boundary around how much news you carry today.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes poner un límite a la cantidad de noticias que llevas contigo hoy.",
    "fr": "Vous pouvez limiter la quantité d’actualités que vous portez avec vous aujourd’hui."
  },
  "motive-extra-calm-22": {
    "sourceText": "An unhurried meal is a worthwhile part of a full life.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Una comida sin prisas es una parte valiosa de una vida plena.",
    "fr": "Un repas sans hâte est une part précieuse d’une vie bien remplie."
  },
  "motive-extra-calm-23": {
    "sourceText": "Give the evening a softer beginning than the afternoon had.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale a la noche un comienzo más suave que el que tuvo la tarde.",
    "fr": "Donnez à la soirée un début plus doux que celui de l’après-midi."
  },
  "motive-extra-calm-24": {
    "sourceText": "It is okay to want silence after a day full of voices.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Está bien querer silencio después de un día lleno de voces.",
    "fr": "Il est normal de vouloir du silence après une journée pleine de voix."
  },
  "motive-extra-calm-25": {
    "sourceText": "You can choose a simple pleasure without making it a reward.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes elegir un placer sencillo sin convertirlo en una recompensa.",
    "fr": "Vous pouvez choisir un plaisir simple sans en faire une récompense."
  },
  "motive-extra-calm-26": {
    "sourceText": "Let your feet remind you that you are here, on this ground.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que tus pies te recuerden que estás aquí, sobre este suelo.",
    "fr": "Laissez vos pieds vous rappeler que vous êtes ici, sur ce sol."
  },
  "motive-extra-calm-27": {
    "sourceText": "Not every open space in your schedule needs to be filled.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "No todos los huecos de tu agenda necesitan llenarse.",
    "fr": "Tous les espaces libres de votre emploi du temps n’ont pas à être remplis."
  },
  "motive-extra-calm-28": {
    "sourceText": "Pause long enough to tell the difference between hunger, fatigue, and urgency.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Haz una pausa lo bastante larga para distinguir entre hambre, cansancio y urgencia.",
    "fr": "Faites une pause assez longue pour distinguer la faim, la fatigue et l’urgence."
  },
  "motive-extra-calm-29": {
    "sourceText": "You can enjoy the walk without counting what it accomplishes.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes disfrutar del paseo sin contar lo que consigues con él.",
    "fr": "Vous pouvez profiter de la promenade sans compter ce qu’elle accomplit."
  },
  "motive-extra-calm-30": {
    "sourceText": "Give yourself a transition between the workday and the rest of your life.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Date una transición entre la jornada laboral y el resto de tu vida.",
    "fr": "Accordez-vous une transition entre la journée de travail et le reste de votre vie."
  },
  "motive-extra-calm-31": {
    "sourceText": "Let a harmless imperfection remain unfixed for a while.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja sin arreglar por un tiempo una imperfección que no hace daño.",
    "fr": "Laissez une imperfection sans conséquence telle quelle pendant un moment."
  },
  "motive-extra-calm-32": {
    "sourceText": "You are allowed to choose the quieter plan.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes elegir el plan más tranquilo.",
    "fr": "Vous avez le droit de choisir le programme le plus calme."
  },
  "motive-extra-calm-33": {
    "sourceText": "Release one expectation that the day no longer has room to hold.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Suelta una expectativa para la que el día ya no tiene espacio.",
    "fr": "Laissez tomber une attente pour laquelle la journée n’a plus de place."
  },
  "motive-extra-calm-34": {
    "sourceText": "Turn down the volume of the room before asking more of your mind.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Baja el volumen de la habitación antes de pedirle más a tu mente.",
    "fr": "Baissez le volume dans la pièce avant d’en demander davantage à votre esprit."
  },
  "motive-extra-calm-35": {
    "sourceText": "You do not have to rehearse every possible conversation in advance.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "No tienes que ensayar de antemano todas las conversaciones posibles.",
    "fr": "Vous n’avez pas à répéter à l’avance toutes les conversations possibles."
  },
  "motive-extra-calm-36": {
    "sourceText": "Let your attention rest on one ordinary object for a moment.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que tu atención repose un momento sobre un objeto cotidiano.",
    "fr": "Laissez votre attention se poser un instant sur un objet ordinaire."
  },
  "motive-extra-calm-37": {
    "sourceText": "A familiar routine can offer comfort without needing to be exciting.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Una rutina familiar puede reconfortarte sin necesidad de ser emocionante.",
    "fr": "Une routine familière peut apporter du réconfort sans avoir besoin d’être passionnante."
  },
  "motive-extra-calm-38": {
    "sourceText": "You can take the scenic route when there is no need to hurry.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes tomar el camino con mejores vistas cuando no haga falta apresurarse.",
    "fr": "Vous pouvez prendre le chemin qui offre de belles vues quand rien ne presse."
  },
  "motive-extra-calm-39": {
    "sourceText": "Put your work somewhere you can leave it until tomorrow.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja tu trabajo en un lugar donde pueda quedarse hasta mañana.",
    "fr": "Rangez votre travail dans un endroit où vous pourrez le laisser jusqu’à demain."
  },
  "motive-extra-calm-40": {
    "sourceText": "The sky can be worth looking at even on a completely ordinary day.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Vale la pena mirar el cielo incluso en un día completamente normal.",
    "fr": "Le ciel peut mériter un regard même lors d’une journée tout à fait ordinaire."
  },
  "motive-extra-calm-41": {
    "sourceText": "You are allowed to be unavailable while you recover your energy.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes no estar disponible mientras recuperas energía.",
    "fr": "Vous avez le droit de ne pas être disponible pendant que vous retrouvez votre énergie."
  },
  "motive-extra-calm-42": {
    "sourceText": "Make your next movement a little less rushed.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Haz tu próximo movimiento con un poco menos de prisa.",
    "fr": "Faites votre prochain mouvement avec un peu moins de précipitation."
  },
  "motive-extra-calm-43": {
    "sourceText": "There is room for a quiet yes to something you enjoy.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Hay espacio para un sí tranquilo a algo que disfrutas.",
    "fr": "Il y a de la place pour un oui tranquille à quelque chose que vous aimez."
  },
  "motive-extra-calm-44": {
    "sourceText": "Let a pleasant moment stay simple instead of documenting every part of it.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que un momento agradable siga siendo sencillo en lugar de documentar cada parte.",
    "fr": "Laissez un moment agréable rester simple au lieu d’en documenter chaque détail."
  },
  "motive-extra-calm-45": {
    "sourceText": "You can stop preparing for the day once the day is over.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar de prepararte para el día cuando el día haya terminado.",
    "fr": "Vous pouvez cesser de préparer la journée une fois qu’elle est terminée."
  },
  "motive-extra-calm-46": {
    "sourceText": "Give your senses something gentle to pay attention to.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale a tus sentidos algo suave a lo que prestar atención.",
    "fr": "Offrez à vos sens quelque chose de doux sur quoi porter leur attention."
  },
  "motive-extra-calm-47": {
    "sourceText": "Choose a little order where it brings comfort, and leave the rest for later.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige un poco de orden donde aporte bienestar y deja lo demás para después.",
    "fr": "Choisissez un peu d’ordre là où il apporte du réconfort et gardez le reste pour plus tard."
  },
  "motive-extra-calm-48": {
    "sourceText": "A slow stretch can be a kind way to mark a new beginning.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Un estiramiento lento puede ser una forma amable de marcar un nuevo comienzo.",
    "fr": "Un étirement lent peut être une façon douce de marquer un nouveau départ."
  },
  "motive-extra-calm-49": {
    "sourceText": "You do not have to make every free hour useful to someone else.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "No tienes que hacer que cada hora libre sea útil para otra persona.",
    "fr": "Vous n’avez pas à rendre chaque heure libre utile à quelqu’un d’autre."
  },
  "motive-extra-calm-50": {
    "sourceText": "Notice whether the pace you are keeping is a pace you chose.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Observa si el ritmo que llevas es uno que has elegido.",
    "fr": "Remarquez si le rythme que vous suivez est celui que vous avez choisi."
  },
  "motive-extra-calm-51": {
    "sourceText": "Allow the music to be the only thing you do for a few minutes.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que escuchar música sea lo único que hagas durante unos minutos.",
    "fr": "Laissez la musique être votre seule activité pendant quelques minutes."
  },
  "motive-extra-calm-52": {
    "sourceText": "You can let another person have the last word without losing your peace.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar que otra persona tenga la última palabra sin perder tu paz.",
    "fr": "Vous pouvez laisser le dernier mot à une autre personne sans perdre votre tranquillité."
  },
  "motive-extra-calm-53": {
    "sourceText": "The task will still exist after you have taken a proper break.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "La tarea seguirá ahí después de que te hayas tomado un descanso de verdad.",
    "fr": "La tâche sera toujours là après une vraie pause."
  },
  "motive-extra-calm-54": {
    "sourceText": "Make a place for beauty that does not ask anything of you.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Hazle un lugar a la belleza que no te pide nada.",
    "fr": "Faites une place à une beauté qui ne vous demande rien."
  },
  "motive-extra-calm-55": {
    "sourceText": "You are allowed to stop checking for a result you cannot change tonight.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar de comprobar un resultado que no puedes cambiar esta noche.",
    "fr": "Vous avez le droit de cesser de vérifier un résultat que vous ne pouvez pas changer ce soir."
  },
  "motive-extra-calm-56": {
    "sourceText": "Let a small household ritual become an invitation to slow down.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que un pequeño ritual doméstico sea una invitación a bajar el ritmo.",
    "fr": "Laissez un petit rituel du quotidien devenir une invitation à ralentir."
  },
  "motive-extra-calm-57": {
    "sourceText": "You can care deeply without staying constantly on alert.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes preocuparte profundamente por algo sin estar siempre en alerta.",
    "fr": "Vous pouvez vous soucier profondément de quelque chose sans rester constamment en alerte."
  },
  "motive-extra-calm-58": {
    "sourceText": "Rest your eyes on something farther away than a screen.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Descansa la mirada en algo que esté más lejos que una pantalla.",
    "fr": "Posez les yeux sur quelque chose de plus éloigné qu’un écran."
  },
  "motive-extra-calm-59": {
    "sourceText": "A quiet morning can begin with one less thing to rush through.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Una mañana tranquila puede empezar con una cosa menos que hacer deprisa.",
    "fr": "Une matinée tranquille peut commencer avec une chose de moins à faire dans la précipitation."
  },
  "motive-extra-calm-60": {
    "sourceText": "Let the room be quiet enough for you to hear what you need.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que la habitación esté lo bastante tranquila para escuchar lo que necesitas.",
    "fr": "Laissez la pièce être assez calme pour entendre ce dont vous avez besoin."
  },
  "motive-extra-calm-61": {
    "sourceText": "You do not have to earn the right to feel comfortable in your own home.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "No tienes que ganarte el derecho a sentirte a gusto en tu propia casa.",
    "fr": "Vous n’avez pas à mériter le droit de vous sentir à l’aise chez vous."
  },
  "motive-extra-calm-62": {
    "sourceText": "Choose one place where you will let good enough be enough today.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige un ámbito en el que hoy baste con hacerlo lo bastante bien.",
    "fr": "Choisissez un domaine où vous accepterez un résultat suffisamment bon aujourd’hui."
  },
  "motive-extra-calm-63": {
    "sourceText": "Leave a little breathing space between your commitments.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja un pequeño respiro entre tus compromisos.",
    "fr": "Laissez un peu d’espace pour respirer entre vos engagements."
  },
  "motive-extra-calm-64": {
    "sourceText": "You can take a moment to settle before you answer.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes tomarte un momento para serenarte antes de responder.",
    "fr": "Vous pouvez prendre un moment pour vous poser avant de répondre."
  },
  "motive-extra-calm-65": {
    "sourceText": "Notice the weight of the chair supporting you without needing to do anything.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Nota cómo la silla sostiene tu peso sin que tengas que hacer nada.",
    "fr": "Remarquez comment la chaise soutient votre poids sans que vous ayez rien à faire."
  },
  "motive-extra-calm-66": {
    "sourceText": "Let yourself enjoy the absence of a problem for a little while.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Permítete disfrutar un rato de la ausencia de un problema.",
    "fr": "Autorisez-vous à profiter un moment de l’absence de problème."
  },
  "motive-extra-calm-67": {
    "sourceText": "You can make tomorrow's plan and then stop working on tomorrow.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes hacer el plan de mañana y después dejar de trabajar en mañana.",
    "fr": "Vous pouvez préparer le programme de demain puis cesser de travailler sur demain."
  },
  "motive-extra-calm-68": {
    "sourceText": "Give your mind a familiar, gentle place to return to.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale a tu mente un lugar familiar y amable al que volver.",
    "fr": "Offrez à votre esprit un endroit familier et doux où revenir."
  },
  "motive-extra-calm-69": {
    "sourceText": "It is possible to care about the future and still enjoy this afternoon.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes preocuparte por el futuro y aun así disfrutar de esta tarde.",
    "fr": "Vous pouvez vous soucier de l’avenir tout en profitant de cet après-midi."
  },
  "motive-extra-calm-70": {
    "sourceText": "You are allowed to let a slow day remain slow.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar que un día lento siga siendo lento.",
    "fr": "Vous avez le droit de laisser une journée lente rester lente."
  },
  "motive-extra-calm-71": {
    "sourceText": "Put one unnecessary obligation back where it came from.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Devuelve una obligación innecesaria al lugar de donde vino.",
    "fr": "Remettez une obligation inutile là d’où elle vient."
  },
  "motive-extra-calm-72": {
    "sourceText": "Let a little fresh air be part of how you begin again.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que un poco de aire fresco forme parte de tu nuevo comienzo.",
    "fr": "Laissez un peu d’air frais faire partie de votre nouveau départ."
  },
  "motive-extra-calm-73": {
    "sourceText": "You can lower the demands on yourself without lowering your worth.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes reducir lo que te exiges sin reducir tu valor.",
    "fr": "Vous pouvez réduire vos exigences envers vous-même sans diminuer votre valeur."
  },
  "motive-extra-calm-74": {
    "sourceText": "Make time for the kind of company that lets your shoulders relax.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Haz tiempo para la compañía que te permite relajar los hombros.",
    "fr": "Faites une place à la compagnie qui vous permet de détendre les épaules."
  },
  "motive-extra-calm-75": {
    "sourceText": "This pause does not need an explanation to be worthwhile.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Esta pausa no necesita una explicación para merecer la pena.",
    "fr": "Cette pause n’a pas besoin d’une explication pour en valoir la peine."
  },
  "daily-2026-10-18-1": {
    "sourceText": "A clear request gives other people a fair chance to understand you.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Una petición clara les da a los demás una oportunidad justa de comprenderte.",
    "fr": "Une demande claire donne aux autres une vraie chance de vous comprendre."
  },
  "daily-2026-10-18-2": {
    "sourceText": "Your abilities do not disappear when someone else has a better day.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tus capacidades no desaparecen porque otra persona tenga un día mejor.",
    "fr": "Vos capacités ne disparaissent pas parce qu’une autre personne passe une meilleure journée."
  },
  "daily-2026-10-18-3": {
    "sourceText": "You can bring a steady voice to a conversation you once avoided.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes llevar una voz serena a una conversación que antes evitabas.",
    "fr": "Vous pouvez apporter une voix posée à une conversation que vous évitiez autrefois."
  },
  "daily-2026-10-18-4": {
    "sourceText": "Let your standards include how respectfully you speak to yourself.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Incluye entre tus criterios el respeto con el que te hablas.",
    "fr": "Faites aussi du respect avec lequel vous vous parlez un de vos critères."
  },
  "daily-2026-10-18-5": {
    "sourceText": "The effort you put into learning belongs on your list of strengths.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "El esfuerzo que dedicas a aprender merece un lugar en tu lista de fortalezas.",
    "fr": "L’effort que vous consacrez à apprendre a sa place dans votre liste de forces."
  },
  "daily-2026-10-18-6": {
    "sourceText": "You can value your own company without closing yourself off to others.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes valorar tu propia compañía sin cerrarte a los demás.",
    "fr": "Vous pouvez apprécier votre propre compagnie sans vous fermer aux autres."
  },
  "daily-2026-10-18-7": {
    "sourceText": "When you make room for your opinion, you make room for honest connection.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando haces espacio para tu opinión, haces espacio para una conexión sincera.",
    "fr": "Quand vous faites une place à votre opinion, vous faites une place à un lien sincère."
  },
  "daily-2026-10-18-8": {
    "sourceText": "Your perspective can be valuable before it becomes popular.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu punto de vista puede tener valor antes de hacerse popular.",
    "fr": "Votre point de vue peut avoir de la valeur avant de devenir populaire."
  },
  "daily-2026-10-18-9": {
    "sourceText": "There is no need to apologize for having a thoughtful ambition.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "No necesitas disculparte por tener una aspiración bien meditada.",
    "fr": "Vous n’avez pas à vous excuser d’avoir une ambition réfléchie."
  },
  "daily-2026-10-18-10": {
    "sourceText": "You can make a confident choice and still remain open to new information.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes decidir con confianza y seguir abriéndote a nueva información.",
    "fr": "Vous pouvez choisir avec confiance tout en restant à l’écoute de nouvelles informations."
  },
  "daily-2026-10-18-11": {
    "sourceText": "Let yourself be seen doing something you care about.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Permítete que te vean haciendo algo que te importa.",
    "fr": "Laissez les autres vous voir faire quelque chose qui vous tient à cœur."
  },
  "daily-2026-10-18-12": {
    "sourceText": "Your natural way of caring may be a strength someone else relies on.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu forma natural de cuidar puede ser una fortaleza en la que otra persona se apoya.",
    "fr": "Votre manière naturelle de prendre soin des autres peut être une force sur laquelle quelqu’un s’appuie."
  },
  "daily-2026-10-18-13": {
    "sourceText": "You are allowed to prefer a life that makes sense from the inside.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes preferir una vida que tenga sentido para ti por dentro.",
    "fr": "Vous avez le droit de préférer une vie qui a du sens pour vous de l’intérieur."
  },
  "daily-2026-10-18-14": {
    "sourceText": "You can stop auditioning for approval in relationships built on respect.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar de buscar aprobación constante en las relaciones basadas en el respeto.",
    "fr": "Vous pouvez cesser de chercher constamment l’approbation dans des relations fondées sur le respect."
  },
  "daily-2026-10-18-15": {
    "sourceText": "One person declining your idea does not erase its possibilities.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Que una persona rechace tu idea no borra sus posibilidades.",
    "fr": "Le refus d’une personne n’efface pas les possibilités de votre idée."
  },
  "daily-2026-10-18-16": {
    "sourceText": "Give the work you are proud of a name and a place to be shared.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale un nombre y un espacio para compartirlo al trabajo que te enorgullece.",
    "fr": "Donnez un nom et un espace de partage au travail qui fait votre fierté."
  },
  "daily-2026-10-18-17": {
    "sourceText": "You can accept responsibility without accepting contempt.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes aceptar la responsabilidad sin aceptar el desprecio.",
    "fr": "Vous pouvez accepter une responsabilité sans accepter le mépris."
  },
  "daily-2026-10-18-18": {
    "sourceText": "Let your curiosity take you into spaces your nerves would rather avoid.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que tu curiosidad te lleve a lugares que tus nervios preferirían evitar.",
    "fr": "Laissez votre curiosité vous conduire dans des lieux que votre nervosité préférerait éviter."
  },
  "daily-2026-10-18-19": {
    "sourceText": "Your ordinary courage deserves recognition from you.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu valentía cotidiana merece tu propio reconocimiento.",
    "fr": "Votre courage ordinaire mérite votre propre reconnaissance."
  },
  "daily-2026-10-18-20": {
    "sourceText": "A gentle personality can carry a very firm conviction.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Una personalidad amable puede sostener una convicción muy firme.",
    "fr": "Une personnalité douce peut porter une conviction très ferme."
  },
  "daily-2026-10-18-21": {
    "sourceText": "Write down the distraction so your attention can stop holding it.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Anota la distracción para que tu atención no tenga que seguir sujetándola.",
    "fr": "Notez la distraction pour que votre attention puisse cesser de la retenir."
  },
  "daily-2026-10-18-22": {
    "sourceText": "Choose the next task by its purpose rather than its noise.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige la siguiente tarea por su propósito, no por el ruido que hace.",
    "fr": "Choisissez la tâche suivante pour son objectif plutôt que pour le bruit qu’elle fait."
  },
  "daily-2026-10-18-23": {
    "sourceText": "A deliberate start can rescue an hour that began in a hurry.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Empezar con intención puede rescatar una hora que comenzó con prisas.",
    "fr": "Un début délibéré peut sauver une heure commencée dans la précipitation."
  },
  "daily-2026-10-18-24": {
    "sourceText": "Leave a clear ending to each task before you turn toward another.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale un final claro a cada tarea antes de pasar a otra.",
    "fr": "Donnez une fin claire à chaque tâche avant de passer à une autre."
  },
  "daily-2026-10-18-25": {
    "sourceText": "You can keep a useful habit without keeping its original schedule.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes conservar un hábito útil sin conservar su horario original.",
    "fr": "Vous pouvez garder une habitude utile sans conserver son horaire d’origine."
  },
  "daily-2026-10-18-26": {
    "sourceText": "Ask which small action would make this project less confusing.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Pregúntate qué pequeña acción haría menos confuso este proyecto.",
    "fr": "Demandez-vous quelle petite action rendrait ce projet moins confus."
  },
  "daily-2026-10-18-27": {
    "sourceText": "Let your working space remind you of one priority at a time.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que tu espacio de trabajo te recuerde una prioridad a la vez.",
    "fr": "Laissez votre espace de travail vous rappeler une priorité à la fois."
  },
  "daily-2026-10-18-28": {
    "sourceText": "When the list grows, reconsider the commitments before extending the day.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando crezca la lista, revisa los compromisos antes de alargar el día.",
    "fr": "Quand la liste s’allonge, réexaminez vos engagements avant de prolonger la journée."
  },
  "daily-2026-10-18-29": {
    "sourceText": "Give a difficult decision its own quiet page.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Dedica a una decisión difícil su propia página tranquila.",
    "fr": "Accordez à une décision difficile sa propre page au calme."
  },
  "daily-2026-10-18-30": {
    "sourceText": "You can prepare for an important moment in several ordinary sessions.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes prepararte para un momento importante en varias sesiones cotidianas.",
    "fr": "Vous pouvez préparer un moment important en plusieurs séances ordinaires."
  },
  "daily-2026-10-18-31": {
    "sourceText": "Use the first few minutes to remove the obstacle you keep stepping around.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Usa los primeros minutos para quitar el obstáculo que sigues rodeando.",
    "fr": "Utilisez les premières minutes pour retirer l’obstacle que vous contournez sans cesse."
  },
  "daily-2026-10-18-32": {
    "sourceText": "A brief review can turn experience into a better next attempt.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Una revisión breve puede convertir la experiencia en un próximo intento mejor.",
    "fr": "Un bref bilan peut transformer l’expérience en une prochaine tentative plus aboutie."
  },
  "daily-2026-10-18-33": {
    "sourceText": "Decide what you will ignore while you finish what matters.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Decide qué vas a ignorar mientras terminas lo importante.",
    "fr": "Décidez de ce que vous laisserez de côté pendant que vous terminez ce qui compte."
  },
  "daily-2026-10-18-34": {
    "sourceText": "Let the first finished piece teach you how to approach the rest.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que la primera parte terminada te enseñe cómo abordar el resto.",
    "fr": "Laissez la première partie terminée vous apprendre comment aborder le reste."
  },
  "daily-2026-10-18-35": {
    "sourceText": "Choose a routine that still welcomes you after an interruption.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige una rutina a la que puedas volver después de una interrupción.",
    "fr": "Choisissez une routine qui vous accueille encore après une interruption."
  },
  "daily-2026-10-18-36": {
    "sourceText": "You can protect a block of time without filling it to the edges.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes proteger un bloque de tiempo sin llenarlo hasta el límite.",
    "fr": "Vous pouvez protéger un créneau sans le remplir jusqu’au bord."
  },
  "daily-2026-10-18-37": {
    "sourceText": "Organize the materials around the next action, not the entire dream.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Organiza los materiales para la siguiente acción, no para el sueño completo.",
    "fr": "Organisez le matériel pour la prochaine action, pas pour tout le rêve."
  },
  "daily-2026-10-18-38": {
    "sourceText": "An important task deserves a place beyond the bottom of your spare time.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Una tarea importante merece algo más que las sobras de tu tiempo libre.",
    "fr": "Une tâche importante mérite mieux que les restes de votre temps libre."
  },
  "daily-2026-10-18-39": {
    "sourceText": "Notice when planning has become a way to delay a manageable beginning.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Observa cuándo planificar se ha convertido en una forma de aplazar un comienzo a tu alcance.",
    "fr": "Remarquez quand la planification devient une façon de repousser un début à votre portée."
  },
  "daily-2026-10-18-40": {
    "sourceText": "Give your unfinished work a clear next instruction before leaving it.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Antes de dejar un trabajo sin terminar, dale una instrucción clara para continuar.",
    "fr": "Avant de laisser votre travail inachevé, donnez-lui une consigne claire pour la suite."
  },
  "daily-2026-10-18-41": {
    "sourceText": "You can be disappointed in the result without being cruel to the person who tried.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes sentir decepción por el resultado sin tratar con crueldad a quien lo intentó.",
    "fr": "Vous pouvez ressentir de la déception face au résultat sans faire preuve de cruauté envers la personne qui a essayé."
  },
  "daily-2026-10-18-42": {
    "sourceText": "Let the next hour ask less of you when the last one asked too much.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que la próxima hora te pida menos si la anterior te pidió demasiado.",
    "fr": "Laissez l’heure suivante vous demander moins si la précédente vous a trop demandé."
  },
  "daily-2026-10-18-43": {
    "sourceText": "You can find a different pace after an unexpected change.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes encontrar otro ritmo después de un cambio inesperado.",
    "fr": "Vous pouvez trouver un autre rythme après un changement imprévu."
  },
  "daily-2026-10-18-44": {
    "sourceText": "A generous interpretation of your effort can help you return to it.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Mirar tu esfuerzo con generosidad puede ayudarte a retomarlo.",
    "fr": "Porter un regard généreux sur votre effort peut vous aider à le reprendre."
  },
  "daily-2026-10-18-45": {
    "sourceText": "Look for the support that belongs to the problem you actually have.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Busca el apoyo que corresponda al problema que realmente tienes.",
    "fr": "Cherchez le soutien qui correspond au problème que vous rencontrez réellement."
  },
  "daily-2026-10-18-46": {
    "sourceText": "An imperfect repair can still make something usable again.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Una reparación imperfecta también puede hacer que algo vuelva a servir.",
    "fr": "Une réparation imparfaite peut tout de même rendre quelque chose à nouveau utilisable."
  },
  "daily-2026-10-18-47": {
    "sourceText": "You do not have to carry a hard week with the same expression every day.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "No tienes que pasar una semana difícil con la misma expresión cada día.",
    "fr": "Vous n’avez pas à traverser une semaine difficile avec la même expression chaque jour."
  },
  "daily-2026-10-18-48": {
    "sourceText": "Let a trusted voice remind you of the options you cannot see yet.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que una voz de confianza te recuerde las opciones que aún no puedes ver.",
    "fr": "Laissez une voix de confiance vous rappeler les possibilités que vous ne voyez pas encore."
  },
  "daily-2026-10-18-49": {
    "sourceText": "You can keep your values while releasing a plan that no longer fits.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes conservar tus valores y soltar un plan que ya no encaja.",
    "fr": "Vous pouvez garder vos valeurs tout en laissant partir un plan qui ne convient plus."
  },
  "daily-2026-10-18-50": {
    "sourceText": "The part of the path behind you does not need to be tidy for you to continue.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "La parte del camino que dejas atrás no necesita estar ordenada para que continúes.",
    "fr": "La partie du chemin derrière vous n’a pas besoin d’être en ordre pour que vous continuiez."
  },
  "daily-2026-10-18-51": {
    "sourceText": "You are allowed to look for an easier way through a genuine difficulty.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes buscar un camino más sencillo para atravesar una dificultad real.",
    "fr": "Vous avez le droit de chercher un chemin plus facile à travers une difficulté réelle."
  },
  "daily-2026-10-18-52": {
    "sourceText": "A small dependable action can bring shape to an unpredictable day.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Una pequeña acción fiable puede darle forma a un día imprevisible.",
    "fr": "Une petite action fiable peut donner une forme à une journée imprévisible."
  },
  "daily-2026-10-18-53": {
    "sourceText": "Make room for the possibility that this effort is working slowly.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Haz espacio para la posibilidad de que este esfuerzo esté dando frutos poco a poco.",
    "fr": "Faites une place à la possibilité que cet effort porte ses fruits lentement."
  },
  "daily-2026-10-18-54": {
    "sourceText": "You can offer yourself patience without knowing how long recovery will take.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes ofrecerte paciencia sin saber cuánto tardará la recuperación.",
    "fr": "Vous pouvez vous accorder de la patience sans savoir combien de temps prendra le rétablissement."
  },
  "daily-2026-10-18-55": {
    "sourceText": "The next helpful decision does not have to be a dramatic one.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "La próxima decisión útil no tiene que ser espectacular.",
    "fr": "La prochaine décision utile n’a pas besoin d’être spectaculaire."
  },
  "daily-2026-10-18-56": {
    "sourceText": "Let your response be guided by what you need rather than what looks impressive.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que tu respuesta se guíe por lo que necesitas, no por lo que impresiona.",
    "fr": "Laissez votre réponse être guidée par vos besoins plutôt que par ce qui impressionne."
  },
  "daily-2026-10-18-57": {
    "sourceText": "A difficult transition can include moments of comfort without contradiction.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Una transición difícil puede incluir momentos de consuelo sin que haya contradicción.",
    "fr": "Une transition difficile peut inclure des moments de réconfort sans contradiction."
  },
  "daily-2026-10-18-58": {
    "sourceText": "You can choose a better boundary after discovering an old one was too thin.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes elegir un límite mejor al descubrir que el anterior era demasiado frágil.",
    "fr": "Vous pouvez choisir une meilleure limite après avoir découvert que l’ancienne était trop fragile."
  },
  "daily-2026-10-18-59": {
    "sourceText": "Keep one small opening for kindness when the day feels closed.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja una pequeña abertura para la amabilidad cuando el día parezca cerrado.",
    "fr": "Gardez une petite ouverture à la bienveillance quand la journée semble fermée."
  },
  "daily-2026-10-18-60": {
    "sourceText": "Returning to a meaningful goal can begin with remembering why it mattered.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Volver a una meta que importa puede empezar por recordar por qué importaba.",
    "fr": "Revenir à un objectif important peut commencer par se rappeler pourquoi il comptait."
  },
  "daily-2026-10-18-61": {
    "sourceText": "You can learn a new approach without dismissing everything you knew before.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes aprender un enfoque nuevo sin descartar todo lo que sabías antes.",
    "fr": "Vous pouvez apprendre une nouvelle approche sans rejeter tout ce que vous saviez auparavant."
  },
  "daily-2026-10-18-62": {
    "sourceText": "Let one practical question guide your next conversation with someone experienced.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que una pregunta práctica guíe tu próxima conversación con alguien con experiencia.",
    "fr": "Laissez une question pratique guider votre prochaine conversation avec une personne expérimentée."
  },
  "daily-2026-10-18-63": {
    "sourceText": "A familiar task can reveal a new lesson when you pay closer attention.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Una tarea familiar puede revelar una lección nueva si prestas más atención.",
    "fr": "Une tâche familière peut révéler une nouvelle leçon lorsque vous y prêtez davantage attention."
  },
  "daily-2026-10-18-64": {
    "sourceText": "You are allowed to study something simply because it makes the world more interesting.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes estudiar algo simplemente porque hace que el mundo sea más interesante.",
    "fr": "Vous avez le droit d’étudier un sujet simplement parce qu’il rend le monde plus intéressant."
  },
  "daily-2026-10-18-65": {
    "sourceText": "Try describing the problem differently before assuming it has no solution.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Prueba a describir el problema de otra manera antes de dar por hecho que no tiene solución.",
    "fr": "Essayez de décrire le problème autrement avant de supposer qu’il n’a pas de solution."
  },
  "daily-2026-10-18-66": {
    "sourceText": "A clear example can turn an abstract idea into something you can practice.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Un ejemplo claro puede convertir una idea abstracta en algo que puedas practicar.",
    "fr": "Un exemple clair peut transformer une idée abstraite en quelque chose que vous pouvez pratiquer."
  },
  "daily-2026-10-18-67": {
    "sourceText": "Notice the conditions that help your best thinking happen.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Observa qué condiciones favorecen tu mejor forma de pensar.",
    "fr": "Remarquez les conditions qui favorisent votre meilleure réflexion."
  },
  "daily-2026-10-18-68": {
    "sourceText": "You can build on your strengths while giving a weaker skill patient attention.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes apoyarte en tus fortalezas y dedicar atención paciente a una habilidad menos desarrollada.",
    "fr": "Vous pouvez vous appuyer sur vos forces tout en accordant une attention patiente à une compétence moins développée."
  },
  "daily-2026-10-18-69": {
    "sourceText": "Let your next question come from what you observed, not just what you expected.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que tu próxima pregunta nazca de lo que observaste, no solo de lo que esperabas.",
    "fr": "Laissez votre prochaine question venir de ce que vous avez observé, pas seulement de ce que vous attendiez."
  },
  "daily-2026-10-18-70": {
    "sourceText": "The courage to reconsider can make your convictions more thoughtful.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "La valentía de reconsiderar puede hacer que tus convicciones sean más reflexivas.",
    "fr": "Le courage de réexaminer vos idées peut rendre vos convictions plus réfléchies."
  },
  "daily-2026-10-18-71": {
    "sourceText": "Give yourself a reason to revisit something you once found intimidating.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Date una razón para volver a algo que antes te intimidaba.",
    "fr": "Donnez-vous une raison de revenir à quelque chose qui vous intimidait autrefois."
  },
  "daily-2026-10-18-72": {
    "sourceText": "You can be changed by a conversation without needing to win it.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Una conversación puede cambiarte sin que tengas que ganarla.",
    "fr": "Une conversation peut vous changer sans que vous ayez besoin de la gagner."
  },
  "daily-2026-10-18-73": {
    "sourceText": "A notebook can hold the questions your current understanding cannot answer.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Un cuaderno puede guardar las preguntas que hoy aún no sabes responder.",
    "fr": "Un carnet peut garder les questions auxquelles votre compréhension actuelle ne peut pas répondre."
  },
  "daily-2026-10-18-74": {
    "sourceText": "Let your progress include becoming more precise about what you need.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que tu progreso incluya expresar con más precisión lo que necesitas.",
    "fr": "Laissez vos progrès inclure une expression plus précise de vos besoins."
  },
  "daily-2026-10-18-75": {
    "sourceText": "An unfamiliar skill becomes less mysterious when you practice its smallest part.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Una habilidad desconocida se vuelve menos misteriosa al practicar su parte más pequeña.",
    "fr": "Une compétence inconnue devient moins mystérieuse lorsque vous en pratiquez la plus petite partie."
  },
  "daily-2026-10-18-76": {
    "sourceText": "You can improve a habit by noticing what interrupts it without blaming yourself.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes mejorar un hábito observando qué lo interrumpe sin culparte.",
    "fr": "Vous pouvez améliorer une habitude en remarquant ce qui l’interrompt sans vous blâmer."
  },
  "daily-2026-10-18-77": {
    "sourceText": "Be willing to find a useful idea outside your usual sources.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Mantén la disposición a encontrar una idea útil fuera de tus fuentes habituales.",
    "fr": "Gardez la volonté de trouver une idée utile en dehors de vos sources habituelles."
  },
  "daily-2026-10-18-78": {
    "sourceText": "Let the work become more honest as your understanding becomes clearer.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que el trabajo sea más honesto a medida que comprendes mejor.",
    "fr": "Laissez le travail devenir plus honnête à mesure que votre compréhension s’éclaircit."
  },
  "daily-2026-10-18-79": {
    "sourceText": "You can choose a learning goal that belongs to your curiosity rather than your résumé.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes elegir una meta de aprendizaje que nazca de tu curiosidad y no de tu currículum.",
    "fr": "Vous pouvez choisir un objectif d’apprentissage lié à votre curiosité plutôt qu’à votre CV."
  },
  "daily-2026-10-18-80": {
    "sourceText": "Make something you can revisit later and see how your thinking has changed.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Crea algo a lo que puedas volver más adelante para ver cómo cambió tu forma de pensar.",
    "fr": "Créez quelque chose que vous pourrez retrouver plus tard pour voir comment votre réflexion a changé."
  },
  "daily-2026-10-18-81": {
    "sourceText": "You can let your face relax before the next conversation begins.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes relajar el rostro antes de que empiece la próxima conversación.",
    "fr": "Vous pouvez détendre votre visage avant le début de la prochaine conversation."
  },
  "daily-2026-10-18-82": {
    "sourceText": "Notice one color in the room that you would like to keep looking at.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Fíjate en un color de la habitación que te gustaría seguir mirando.",
    "fr": "Remarquez une couleur dans la pièce que vous aimeriez continuer à regarder."
  },
  "daily-2026-10-18-83": {
    "sourceText": "Give the walk from one task to another a little unclaimed space.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja un pequeño espacio libre en el trayecto entre una tarea y otra.",
    "fr": "Laissez un petit espace sans obligation dans le trajet d’une tâche à une autre."
  },
  "daily-2026-10-18-84": {
    "sourceText": "You can put down the urge to make sense of everything before bedtime.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes soltar la necesidad de entenderlo todo antes de acostarte.",
    "fr": "Vous pouvez laisser de côté le besoin de tout comprendre avant de vous coucher."
  },
  "daily-2026-10-18-85": {
    "sourceText": "Let a comfortable chair be a place to rest rather than another place to work.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que una silla cómoda sea un lugar para descansar, no otro sitio para trabajar.",
    "fr": "Laissez un fauteuil confortable être un lieu de repos plutôt qu’un lieu de travail de plus."
  },
  "daily-2026-10-18-86": {
    "sourceText": "The sound of an ordinary afternoon can be enough company for a moment.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "El sonido de una tarde normal puede ser suficiente compañía por un momento.",
    "fr": "Le son d’un après-midi ordinaire peut être une compagnie suffisante pour un instant."
  },
  "daily-2026-10-18-87": {
    "sourceText": "You are allowed to have a favorite part of the day that serves no larger purpose.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes tener una parte favorita del día que no sirva a ningún propósito mayor.",
    "fr": "Vous avez le droit d’avoir un moment préféré de la journée qui ne serve aucun objectif plus grand."
  },
  "daily-2026-10-18-88": {
    "sourceText": "Let the first moments after waking belong to the room around you.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que los primeros momentos al despertar pertenezcan a la habitación que te rodea.",
    "fr": "Laissez les premiers instants du réveil appartenir à la pièce qui vous entoure."
  },
  "daily-2026-10-18-89": {
    "sourceText": "You can notice a worry without giving it a new assignment.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes notar una preocupación sin darle una nueva tarea.",
    "fr": "Vous pouvez remarquer une inquiétude sans lui donner une nouvelle mission."
  },
  "daily-2026-10-18-90": {
    "sourceText": "Choose a softer light when the day is asking you to slow down.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige una luz más suave cuando el día te pida bajar el ritmo.",
    "fr": "Choisissez une lumière plus douce quand la journée vous invite à ralentir."
  },
  "daily-2026-10-18-91": {
    "sourceText": "A few quiet minutes can belong to you even in an unfinished home.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Unos minutos tranquilos pueden ser tuyos incluso en una casa donde quedan cosas por terminar.",
    "fr": "Quelques minutes de calme peuvent vous appartenir même dans un logement où tout n’est pas terminé."
  },
  "daily-2026-10-18-92": {
    "sourceText": "Let your next break include something your eyes can rest on.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Incluye en tu próxima pausa algo sobre lo que pueda descansar tu mirada.",
    "fr": "Offrez à votre regard quelque chose sur quoi se reposer lors de votre prochaine pause."
  },
  "daily-2026-10-18-93": {
    "sourceText": "You can appreciate the familiar without needing to improve it today.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes apreciar lo familiar sin tener que mejorarlo hoy.",
    "fr": "Vous pouvez apprécier ce qui vous est familier sans avoir à l’améliorer aujourd’hui."
  },
  "daily-2026-10-18-94": {
    "sourceText": "There is room to pause between receiving a request and making a promise.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Hay espacio para una pausa entre recibir una petición y hacer una promesa.",
    "fr": "Il y a de la place pour une pause entre recevoir une demande et faire une promesse."
  },
  "daily-2026-10-18-95": {
    "sourceText": "Let a simple meal be an occasion for being present.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que una comida sencilla sea una ocasión para estar presente.",
    "fr": "Laissez un repas simple être une occasion de vivre le moment présent."
  },
  "daily-2026-10-18-96": {
    "sourceText": "You can stop measuring a peaceful moment against what you could be doing.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar de comparar un momento de paz con lo que podrías estar haciendo.",
    "fr": "Vous pouvez cesser de comparer un moment paisible à ce que vous pourriez être en train de faire."
  },
  "daily-2026-10-18-97": {
    "sourceText": "Give the evening one small ritual that signals you are allowed to settle.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale a la noche un pequeño ritual que indique que puedes acomodarte y descansar.",
    "fr": "Donnez à la soirée un petit rituel qui vous rappelle que vous avez le droit de vous poser."
  },
  "daily-2026-10-18-98": {
    "sourceText": "The next few minutes can be free from comparison.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Los próximos minutos pueden quedar libres de comparaciones.",
    "fr": "Les prochaines minutes peuvent être libres de toute comparaison."
  },
  "daily-2026-10-18-99": {
    "sourceText": "You can choose a little comfort while leaving the larger question unanswered.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes elegir un poco de consuelo y dejar sin respuesta la pregunta más grande.",
    "fr": "Vous pouvez choisir un peu de réconfort tout en laissant la grande question sans réponse."
  },
  "daily-2026-10-18-100": {
    "sourceText": "Let the end of the day be an arrival rather than another deadline.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que el final del día sea una llegada, no otro plazo que cumplir.",
    "fr": "Laissez la fin de la journée être une arrivée plutôt qu’une échéance de plus."
  },
  "daily-2026-10-19-confidence-01": {
    "sourceText": "When you introduce yourself, include something you enjoy, not only the job you do.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando te presentes, incluye algo que disfrutes, no solo el trabajo que haces.",
    "fr": "Quand vous vous présentez, mentionnez quelque chose que vous aimez, pas seulement votre métier."
  },
  "daily-2026-10-19-confidence-02": {
    "sourceText": "A seat at the table is also a place from which to ask a useful question.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tener un lugar en la mesa también te permite hacer una pregunta útil.",
    "fr": "Une place à la table est aussi un endroit d’où poser une question utile."
  },
  "daily-2026-10-19-confidence-03": {
    "sourceText": "Keep a folder of kind messages so a doubtful afternoon does not become your only witness.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Guarda los mensajes amables en una carpeta para que una tarde de dudas no sea tu único testigo.",
    "fr": "Gardez un dossier de messages bienveillants pour qu’un après-midi de doute ne soit pas votre seul témoin."
  },
  "daily-2026-10-19-confidence-04": {
    "sourceText": "The details you notice may be exactly what a shared project is missing.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Los detalles que notas pueden ser justo lo que le falta a un proyecto compartido.",
    "fr": "Les détails que vous remarquez sont peut-être exactement ce qui manque à un projet commun."
  },
  "daily-2026-10-19-confidence-05": {
    "sourceText": "You can say what you would prefer before offering to accommodate everyone else.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes expresar lo que prefieres antes de ofrecerte a acomodarte a los demás.",
    "fr": "Vous pouvez exprimer votre préférence avant de proposer de vous adapter à tout le monde."
  },
  "daily-2026-10-19-confidence-06": {
    "sourceText": "Receiving help does not erase the part you contributed.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Recibir ayuda no borra la parte que tú aportaste.",
    "fr": "Recevoir de l’aide n’efface pas votre contribution."
  },
  "daily-2026-10-19-confidence-07": {
    "sourceText": "You can bring your accent, your background, and your own examples into the conversation.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes llevar tu acento, tus raíces y tus propios ejemplos a la conversación.",
    "fr": "Vous pouvez apporter votre accent, votre parcours et vos propres exemples dans la conversation."
  },
  "daily-2026-10-19-confidence-08": {
    "sourceText": "When someone trusts your judgment, let yourself hear the trust as well as the responsibility.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando alguien confíe en tu criterio, permítete escuchar la confianza además de la responsabilidad.",
    "fr": "Quand quelqu’un se fie à votre jugement, laissez-vous entendre la confiance autant que la responsabilité."
  },
  "daily-2026-10-19-confidence-09": {
    "sourceText": "You may sign your name to work that reflects sincere care, even while your skills are developing.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes firmar un trabajo que refleja un cuidado sincero aunque tus habilidades sigan desarrollándose.",
    "fr": "Vous pouvez signer un travail qui témoigne d’un soin sincère, même si vos compétences se développent encore."
  },
  "daily-2026-10-19-confidence-10": {
    "sourceText": "Your place in a friendship can include being the person who gets invited and cared for.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu lugar en una amistad también puede ser el de quien recibe invitaciones y cuidados.",
    "fr": "Votre place dans une amitié peut aussi être celle de la personne que l’on invite et dont on prend soin."
  },
  "daily-2026-10-19-focus-01": {
    "sourceText": "If a task keeps slipping away, give it a verb, a location, and a time to begin.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Si una tarea se te sigue escapando, dale un verbo, un lugar y una hora de inicio.",
    "fr": "Si une tâche vous échappe sans cesse, donnez-lui un verbe, un lieu et une heure de début."
  },
  "daily-2026-10-19-focus-02": {
    "sourceText": "Keep a parking page for promising ideas that arrive while you are finishing something else.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Reserva una página para aparcar las buenas ideas que llegan mientras terminas otra cosa.",
    "fr": "Gardez une page où déposer les idées prometteuses qui arrivent pendant que vous terminez autre chose."
  },
  "daily-2026-10-19-focus-03": {
    "sourceText": "Before a meeting ends, write down who will do what next.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Antes de que termine una reunión, anota quién hará qué después.",
    "fr": "Avant la fin d’une réunion, notez qui fera quoi ensuite."
  },
  "daily-2026-10-19-focus-04": {
    "sourceText": "Separate gathering the materials from using them when switching back and forth slows you down.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Separa reunir los materiales de usarlos cuando alternar entre ambas cosas te frene.",
    "fr": "Séparez la préparation du matériel de son utilisation lorsque les allers-retours vous ralentissent."
  },
  "daily-2026-10-19-focus-05": {
    "sourceText": "A file name that makes sense tomorrow is a small gift to your future work.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Un nombre de archivo que tenga sentido mañana es un pequeño regalo para tu trabajo futuro.",
    "fr": "Un nom de fichier qui aura encore du sens demain est un petit cadeau pour votre travail futur."
  },
  "daily-2026-10-19-focus-06": {
    "sourceText": "Check that the task still needs doing before finding a faster way to do it.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Comprueba si la tarea sigue siendo necesaria antes de buscar una forma más rápida de hacerla.",
    "fr": "Vérifiez que la tâche est toujours nécessaire avant de chercher à l’accomplir plus vite."
  },
  "daily-2026-10-19-focus-07": {
    "sourceText": "Choose one place to capture requests so your attention does not have to patrol five lists.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige un solo lugar para anotar las peticiones y evita que tu atención tenga que vigilar cinco listas.",
    "fr": "Choisissez un seul endroit où noter les demandes pour que votre attention n’ait pas à surveiller cinq listes."
  },
  "daily-2026-10-19-focus-08": {
    "sourceText": "Set a limit on searching for examples, then make an example of your own.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Pon un límite a la búsqueda de ejemplos y después crea uno propio.",
    "fr": "Limitez la recherche d’exemples, puis créez votre propre exemple."
  },
  "daily-2026-10-19-focus-09": {
    "sourceText": "When instructions conflict, resolve the conflict before spending another hour on the work.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando las instrucciones se contradigan, resuelve la contradicción antes de dedicar otra hora al trabajo.",
    "fr": "Quand les consignes se contredisent, résolvez la contradiction avant de consacrer une heure de plus au travail."
  },
  "daily-2026-10-19-focus-10": {
    "sourceText": "Let the checklist remember the repeated details so you can think about the unusual ones.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que la lista recuerde los detalles repetidos para que puedas pensar en los poco habituales.",
    "fr": "Laissez la liste de contrôle retenir les détails répétés pour pouvoir réfléchir aux détails inhabituels."
  },
  "daily-2026-10-19-resilience-01": {
    "sourceText": "After a cancelled plan, ask what would make the time that remains a little kinder.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Después de que se cancele un plan, pregúntate qué haría un poco más amable el tiempo que queda.",
    "fr": "Après l’annulation de ce qui était prévu, demandez-vous ce qui rendrait le temps restant un peu plus doux."
  },
  "daily-2026-10-19-resilience-02": {
    "sourceText": "A day spent replacing what was lost is not a day in which you did nothing.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Un día dedicado a reponer lo perdido no es un día en el que no hiciste nada.",
    "fr": "Une journée passée à remplacer ce qui a été perdu n’est pas une journée où vous n’avez rien fait."
  },
  "daily-2026-10-19-resilience-03": {
    "sourceText": "You can renegotiate a promise made before your circumstances changed.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes renegociar una promesa hecha antes de que cambiaran tus circunstancias.",
    "fr": "Vous pouvez renégocier une promesse faite avant que votre situation change."
  },
  "daily-2026-10-19-resilience-04": {
    "sourceText": "Let someone share the practical errands when explaining the whole situation feels too much.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que alguien comparta los recados prácticos cuando explicar toda la situación sea demasiado.",
    "fr": "Laissez quelqu’un partager les tâches pratiques quand expliquer toute la situation vous semble trop lourd."
  },
  "daily-2026-10-19-resilience-05": {
    "sourceText": "A missed connection can be followed by checking the next departure, one fact at a time.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Después de perder una conexión, puedes consultar la próxima salida, un dato a la vez.",
    "fr": "Après une correspondance manquée, vous pouvez vérifier le prochain départ, une information à la fois."
  },
  "daily-2026-10-19-resilience-06": {
    "sourceText": "When a familiar place feels different, bring along one small comfort you recognize.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando un lugar conocido parezca distinto, lleva contigo un pequeño consuelo familiar.",
    "fr": "Quand un lieu familier semble différent, emportez un petit réconfort que vous reconnaissez."
  },
  "daily-2026-10-19-resilience-07": {
    "sourceText": "An apology can open a repair; the steady actions afterward help build it.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Una disculpa puede iniciar una reparación; las acciones constantes que siguen ayudan a construirla.",
    "fr": "Des excuses peuvent ouvrir la voie à une réparation ; les gestes réguliers qui suivent aident à la construire."
  },
  "daily-2026-10-19-resilience-08": {
    "sourceText": "You can mark a difficult anniversary with company, quiet, or a plan of your own choosing.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes vivir una fecha difícil con compañía, en silencio o con un plan elegido por ti.",
    "fr": "Vous pouvez marquer une date anniversaire difficile par de la compagnie, du calme ou un projet de votre choix."
  },
  "daily-2026-10-19-resilience-09": {
    "sourceText": "Some days the brave decision is to tell someone that the current arrangement is not working.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Algunos días, la decisión valiente es decirle a alguien que la situación actual no funciona.",
    "fr": "Certains jours, la décision courageuse consiste à dire à quelqu’un que l’organisation actuelle ne fonctionne pas."
  },
  "daily-2026-10-19-resilience-10": {
    "sourceText": "The first visit back can be brief; returning does not require staying longer than you can manage.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "La primera visita de regreso puede ser breve; volver no exige quedarte más de lo que te sea llevadero.",
    "fr": "La première visite de retour peut être brève ; revenir n’exige pas de rester plus longtemps que vous ne le pouvez."
  },
  "daily-2026-10-19-growth-01": {
    "sourceText": "Compare two attempts and name one thing you changed on purpose.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Compara dos intentos y nombra algo que cambiaste a propósito.",
    "fr": "Comparez deux tentatives et nommez une chose que vous avez changée volontairement."
  },
  "daily-2026-10-19-growth-02": {
    "sourceText": "When you teach a new skill, remember the detail you wished someone had explained to you.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando enseñes una habilidad nueva, recuerda el detalle que habrías querido que te explicaran.",
    "fr": "Quand vous enseignez une nouvelle compétence, rappelez-vous le détail que vous auriez aimé qu’on vous explique."
  },
  "daily-2026-10-19-growth-03": {
    "sourceText": "Try predicting the result before checking the answer; the difference can show you what to explore.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Intenta predecir el resultado antes de comprobar la respuesta; la diferencia puede mostrarte qué explorar.",
    "fr": "Essayez de prévoir le résultat avant de vérifier la réponse ; la différence peut vous montrer quoi explorer."
  },
  "daily-2026-10-19-growth-04": {
    "sourceText": "A glossary in your own words can make an unfamiliar subject feel more approachable.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Un glosario con tus propias palabras puede hacer más accesible un tema desconocido.",
    "fr": "Un glossaire dans vos propres mots peut rendre un sujet inconnu plus accessible."
  },
  "daily-2026-10-19-growth-05": {
    "sourceText": "Ask how an experienced person decides, not only what they would choose.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Pregunta cómo decide alguien con experiencia, no solo qué elegiría.",
    "fr": "Demandez comment une personne expérimentée prend une décision, pas seulement ce qu’elle choisirait."
  },
  "daily-2026-10-19-growth-06": {
    "sourceText": "Changing one ingredient at a time can help you understand a recipe, a routine, or a method.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Cambiar un ingrediente a la vez puede ayudarte a comprender una receta, una rutina o un método.",
    "fr": "Changer un ingrédient à la fois peut vous aider à comprendre une recette, une routine ou une méthode."
  },
  "daily-2026-10-19-growth-07": {
    "sourceText": "Revisit a piece of work you once admired and notice what you can now see in its construction.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Vuelve a un trabajo que admirabas y observa lo que ahora puedes ver de su construcción.",
    "fr": "Revenez à une œuvre que vous admiriez et remarquez ce que vous voyez désormais dans sa construction."
  },
  "daily-2026-10-19-growth-08": {
    "sourceText": "An explanation that uses your everyday experience can help new knowledge find a home.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Una explicación que use tu experiencia cotidiana puede ayudar a que los conocimientos nuevos encuentren su lugar.",
    "fr": "Une explication qui s’appuie sur votre expérience quotidienne peut aider de nouvelles connaissances à trouver leur place."
  },
  "daily-2026-10-19-growth-09": {
    "sourceText": "When two sources disagree, write down the question their disagreement raises.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando dos fuentes discrepen, anota la pregunta que surge de su desacuerdo.",
    "fr": "Quand deux sources se contredisent, notez la question que soulève leur désaccord."
  },
  "daily-2026-10-19-growth-10": {
    "sourceText": "Save an early attempt; it can remind you that skills have a history, not just a finished appearance.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Guarda un primer intento; puede recordarte que las habilidades tienen una historia, no solo una apariencia final.",
    "fr": "Gardez un premier essai ; il peut vous rappeler que les compétences ont une histoire, pas seulement une apparence aboutie."
  },
  "daily-2026-10-19-calm-01": {
    "sourceText": "Watch the steam leave your cup for a moment before the next part of the morning begins.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Observa un momento cómo sale el vapor de tu taza antes de que empiece la siguiente parte de la mañana.",
    "fr": "Regardez un instant la vapeur s’échapper de votre tasse avant la suite de la matinée."
  },
  "daily-2026-10-19-calm-02": {
    "sourceText": "A basket by the door can hold the things you are not taking into this quiet hour.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Una cesta junto a la puerta puede guardar lo que no te llevas a esta hora tranquila.",
    "fr": "Un panier près de la porte peut contenir ce que vous n’emportez pas dans cette heure de calme."
  },
  "daily-2026-10-19-calm-03": {
    "sourceText": "You can hear the rain without deciding whether it has spoiled the day.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes escuchar la lluvia sin decidir si ha estropeado el día.",
    "fr": "Vous pouvez écouter la pluie sans décider si elle a gâché la journée."
  },
  "daily-2026-10-19-calm-04": {
    "sourceText": "Let the last page you read tonight be enough, even if a chapter remains unfinished.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que la última página que leas esta noche baste, aunque quede un capítulo sin terminar.",
    "fr": "Laissez la dernière page lue ce soir suffire, même si un chapitre reste inachevé."
  },
  "daily-2026-10-19-calm-05": {
    "sourceText": "Enjoy the warmth of clean laundry before turning it into another item to put away.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Disfruta del calor de la ropa limpia antes de convertirla en otra cosa que guardar.",
    "fr": "Profitez de la chaleur du linge propre avant d’en faire une chose de plus à ranger."
  },
  "daily-2026-10-19-calm-06": {
    "sourceText": "You can watch a bird leave the branch without needing to follow where it goes.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes ver a un pájaro dejar la rama sin tener que seguir su recorrido.",
    "fr": "Vous pouvez regarder un oiseau quitter la branche sans avoir à suivre sa route."
  },
  "daily-2026-10-19-calm-07": {
    "sourceText": "The familiar smell of your kitchen can be a small welcome home.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "El olor familiar de tu cocina puede ser una pequeña bienvenida a casa.",
    "fr": "L’odeur familière de votre cuisine peut être un petit accueil à la maison."
  },
  "daily-2026-10-19-calm-08": {
    "sourceText": "An empty bench can simply be somewhere to sit, without becoming a destination to justify.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Un banco vacío puede ser solo un lugar donde sentarte, sin convertirse en un destino que debas justificar.",
    "fr": "Un banc vide peut simplement être un endroit où s’asseoir, sans devenir une destination à justifier."
  },
  "daily-2026-10-19-calm-09": {
    "sourceText": "Let the song end before choosing what comes next.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que termine la canción antes de elegir lo que viene después.",
    "fr": "Laissez la chanson se terminer avant de choisir la suite."
  },
  "daily-2026-10-19-calm-10": {
    "sourceText": "A patch of afternoon sunlight does not need a special occasion to be enjoyed.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Un rincón de sol de la tarde no necesita una ocasión especial para disfrutarlo.",
    "fr": "Un coin de soleil de l’après-midi n’a pas besoin d’une occasion spéciale pour être apprécié."
  },
  "daily-2026-10-20-confidence-01": {
    "sourceText": "Your name is worth pronouncing carefully; you can help someone get it right.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu nombre merece que lo pronuncien con cuidado; puedes ayudar a alguien a decirlo bien.",
    "fr": "Votre nom mérite d’être prononcé avec soin ; vous pouvez aider quelqu’un à le dire correctement."
  },
  "daily-2026-10-20-confidence-02": {
    "sourceText": "You may let a good piece of news be yours for a while before deciding who to tell.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes guardar una buena noticia para ti un tiempo antes de decidir a quién contársela.",
    "fr": "Vous pouvez garder une bonne nouvelle pour vous quelque temps avant de décider à qui la raconter."
  },
  "daily-2026-10-20-confidence-03": {
    "sourceText": "When people regularly bring a certain problem to you, notice the trust behind their request.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando las personas te traigan a menudo cierto problema, observa la confianza que hay detrás de su petición.",
    "fr": "Quand les gens vous confient souvent un certain problème, remarquez la confiance derrière leur demande."
  },
  "daily-2026-10-20-confidence-04": {
    "sourceText": "You can describe what you made without comparing it to the most impressive thing in the room.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes describir lo que creaste sin compararlo con lo más impresionante de la sala.",
    "fr": "Vous pouvez décrire votre création sans la comparer à ce qu’il y a de plus impressionnant dans la pièce."
  },
  "daily-2026-10-20-confidence-05": {
    "sourceText": "A photograph does not have to capture your favorite angle to record a life you are glad to be living.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Una foto no tiene que mostrar tu ángulo favorito para retratar una vida que te alegra vivir.",
    "fr": "Une photo n’a pas à montrer votre angle préféré pour témoigner d’une vie que vous avez plaisir à vivre."
  },
  "daily-2026-10-20-confidence-06": {
    "sourceText": "You can tell a story at your natural pace; the listeners can wait for the part that matters.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes contar una historia a tu ritmo natural; quienes escuchan pueden esperar a la parte que importa.",
    "fr": "Vous pouvez raconter une histoire à votre rythme naturel ; les personnes qui écoutent peuvent attendre le passage qui compte."
  },
  "daily-2026-10-20-confidence-07": {
    "sourceText": "Declining to laugh at your own expense can be a quiet way to stand beside yourself.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Negarte a reírte a tu costa puede ser una forma discreta de ponerte de tu lado.",
    "fr": "Refuser de rire à vos propres dépens peut être une façon discrète de vous soutenir."
  },
  "daily-2026-10-20-confidence-08": {
    "sourceText": "On your first day, a full lunch break can be part of belonging rather than something you have to earn.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "En tu primer día, disfrutar de toda la pausa para comer puede formar parte de sentirte en tu sitio, sin tener que ganártela.",
    "fr": "Dès le premier jour, prendre toute votre pause déjeuner peut faire partie de la vie du groupe, sans avoir à la mériter."
  },
  "daily-2026-10-20-confidence-09": {
    "sourceText": "You can notice the difference between being asked for your opinion and being asked to agree.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes notar la diferencia entre que te pidan tu opinión y que te pidan estar de acuerdo.",
    "fr": "Vous pouvez remarquer la différence entre une demande d’avis et une demande d’approbation."
  },
  "daily-2026-10-20-confidence-10": {
    "sourceText": "A role you have held for years is not the only introduction you are allowed to give yourself.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "El papel que has desempeñado durante años no es la única forma en que puedes presentarte.",
    "fr": "Un rôle tenu pendant des années n’est pas la seule façon dont vous avez le droit de vous présenter."
  },
  "daily-2026-10-20-focus-01": {
    "sourceText": "Count the waiting time in your plan when the next step depends on another person.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Incluye el tiempo de espera en tu plan cuando el siguiente paso dependa de otra persona.",
    "fr": "Incluez le temps d’attente dans votre plan lorsque l’étape suivante dépend d’une autre personne."
  },
  "daily-2026-10-20-focus-02": {
    "sourceText": "Put the question at the top of a long message so the person helping can find it.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Pon la pregunta al principio de un mensaje largo para que quien te ayude pueda encontrarla.",
    "fr": "Placez la question au début d’un long message pour que la personne qui vous aide puisse la trouver."
  },
  "daily-2026-10-20-focus-03": {
    "sourceText": "A task that needs two people becomes clearer when you name the handoff between them.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Una tarea para dos personas queda más clara al definir cómo pasará de una a otra.",
    "fr": "Une tâche à deux devient plus claire quand vous précisez le relais entre les deux personnes."
  },
  "daily-2026-10-20-focus-04": {
    "sourceText": "Give recurring interruptions an appointment instead of letting them choose every arrival.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale una cita a las interrupciones recurrentes en lugar de dejar que elijan cuándo llegar.",
    "fr": "Donnez un rendez-vous aux interruptions récurrentes au lieu de les laisser choisir chaque arrivée."
  },
  "daily-2026-10-20-focus-05": {
    "sourceText": "Before copying information into a second list, decide which copy will stay up to date.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Antes de copiar información en una segunda lista, decide qué copia mantendrás al día.",
    "fr": "Avant de copier des informations dans une deuxième liste, décidez quelle copie restera à jour."
  },
  "daily-2026-10-20-focus-06": {
    "sourceText": "Use an estimate as a starting measurement; revise it when the work shows you its real size.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Usa una estimación como medida inicial y revísala cuando el trabajo muestre su tamaño real.",
    "fr": "Utilisez une estimation comme première mesure et révisez-la quand le travail révèle sa taille réelle."
  },
  "daily-2026-10-20-focus-07": {
    "sourceText": "When a tool has too many settings, choose a workable default and finish one real task with it.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando una herramienta tenga demasiados ajustes, elige una configuración útil y termina una tarea real con ella.",
    "fr": "Quand un outil a trop de réglages, choisissez une configuration utilisable et terminez une vraie tâche avec elle."
  },
  "daily-2026-10-20-focus-08": {
    "sourceText": "Move a decision forward by writing the two options you are actually choosing between.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Haz avanzar una decisión escribiendo las dos opciones entre las que realmente estás eligiendo.",
    "fr": "Faites avancer une décision en écrivant les deux options entre lesquelles vous choisissez réellement."
  },
  "daily-2026-10-20-focus-09": {
    "sourceText": "Notice whether you are waiting for permission that nobody has been asked to give.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Observa si estás esperando un permiso que no se le ha pedido a nadie.",
    "fr": "Remarquez si vous attendez une permission qui n’a été demandée à personne."
  },
  "daily-2026-10-20-focus-10": {
    "sourceText": "A shared definition can prevent an hour of two people solving different problems.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Una definición compartida puede evitar que dos personas pasen una hora resolviendo problemas distintos.",
    "fr": "Une définition commune peut éviter que deux personnes passent une heure à résoudre des problèmes différents."
  },
  "daily-2026-10-20-resilience-01": {
    "sourceText": "When news changes twice in a day, leave yourself room to update your response twice.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Si las noticias cambian dos veces en un día, deja espacio para actualizar tu respuesta dos veces.",
    "fr": "Si les nouvelles changent deux fois dans la journée, laissez-vous la possibilité d’adapter votre réponse deux fois."
  },
  "daily-2026-10-20-resilience-02": {
    "sourceText": "A difficult conversation can be followed by something ordinary: washing a cup, folding a towel, walking to the door.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Después de una conversación difícil puede venir algo cotidiano: lavar una taza, doblar una toalla o caminar hacia la puerta.",
    "fr": "Une conversation difficile peut être suivie d’un geste ordinaire : laver une tasse, plier une serviette ou marcher jusqu’à la porte."
  },
  "daily-2026-10-20-resilience-03": {
    "sourceText": "If a place you used to belong no longer fits, you can look for company around a current interest.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Si un lugar donde antes encajabas ya no va contigo, puedes buscar compañía alrededor de un interés actual.",
    "fr": "Si un lieu où vous aviez votre place ne vous convient plus, vous pouvez chercher de la compagnie autour d’un intérêt actuel."
  },
  "daily-2026-10-20-resilience-04": {
    "sourceText": "You can ask what the next review step is when a request is declined.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando rechacen una petición, puedes preguntar cuál es el siguiente paso de revisión.",
    "fr": "Quand une demande est refusée, vous pouvez demander quelle est l’étape suivante pour la faire réexaminer."
  },
  "daily-2026-10-20-resilience-05": {
    "sourceText": "The hours spent listening to someone through a difficult change count as care, even if nothing was solved.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Las horas que dedicas a escuchar a alguien durante un cambio difícil cuentan como cuidado, aunque nada se haya resuelto.",
    "fr": "Les heures passées à écouter quelqu’un pendant un changement difficile comptent comme de l’attention, même si rien n’a été résolu."
  },
  "daily-2026-10-20-resilience-06": {
    "sourceText": "A season of depending on others can still contain choices that are yours.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Una etapa de depender de los demás también puede incluir decisiones que te pertenecen.",
    "fr": "Une période où vous dépendez des autres peut encore contenir des choix qui vous appartiennent."
  },
  "daily-2026-10-20-resilience-07": {
    "sourceText": "A broken routine can leave behind clues about what mattered most in it.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Una rutina rota puede dejar pistas sobre lo que más importaba de ella.",
    "fr": "Une routine interrompue peut laisser des indices sur ce qui y comptait le plus."
  },
  "daily-2026-10-20-resilience-08": {
    "sourceText": "You can remember someone by telling an ordinary story, not only the story of losing them.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes recordar a alguien contando una historia cotidiana, no solo la historia de su pérdida.",
    "fr": "Vous pouvez vous souvenir de quelqu’un en racontant une histoire ordinaire, pas seulement celle de sa perte."
  },
  "daily-2026-10-20-resilience-09": {
    "sourceText": "When a long project ends unexpectedly, the relationships and skills it gave you are still part of what remains.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando un proyecto largo termine de forma inesperada, las relaciones y habilidades que te dio siguen siendo parte de lo que queda.",
    "fr": "Quand un long projet se termine de façon imprévue, les relations et les compétences qu’il vous a apportées font toujours partie de ce qui reste."
  },
  "daily-2026-10-20-resilience-10": {
    "sourceText": "You may keep a hopeful object on the shelf without knowing when you will use it again.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes guardar en una estantería un objeto que te dé esperanza sin saber cuándo volverás a usarlo.",
    "fr": "Vous pouvez garder sur une étagère un objet porteur d’espoir sans savoir quand vous l’utiliserez à nouveau."
  },
  "daily-2026-10-20-growth-01": {
    "sourceText": "Read the correction beside your original answer and trace the exact point where your reasoning changed.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Lee la corrección junto a tu respuesta original y sigue el punto exacto en que cambió tu razonamiento.",
    "fr": "Lisez la correction à côté de votre réponse d’origine et repérez le moment précis où votre raisonnement a changé."
  },
  "daily-2026-10-20-growth-02": {
    "sourceText": "Learn the names of three things on your usual walk; a familiar route can become a new subject.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Aprende el nombre de tres cosas de tu paseo habitual; un camino conocido puede convertirse en un tema nuevo.",
    "fr": "Apprenez le nom de trois choses sur votre promenade habituelle ; un trajet familier peut devenir un nouveau sujet."
  },
  "daily-2026-10-20-growth-03": {
    "sourceText": "Ask a beginner to try your instructions; the place they pause may show what you left unsaid.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Pídele a alguien que empieza que pruebe tus instrucciones; donde se detenga puede mostrar lo que dejaste sin decir.",
    "fr": "Demandez à une personne débutante d’essayer vos consignes ; l’endroit où elle s’arrête peut révéler ce que vous n’avez pas précisé."
  },
  "daily-2026-10-20-growth-04": {
    "sourceText": "A practice session can be devoted to recognizing a mistake sooner, rather than avoiding every mistake.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dedicar una sesión de práctica a reconocer antes un error, en lugar de intentar evitar todos los errores.",
    "fr": "Une séance de pratique peut servir à reconnaître une erreur plus tôt plutôt qu’à éviter toute erreur."
  },
  "daily-2026-10-20-growth-05": {
    "sourceText": "Notice which parts of a skill still require a demonstration and which you can now explain.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Observa qué partes de una habilidad todavía necesitan una demostración y cuáles ya puedes explicar.",
    "fr": "Remarquez les parties d’une compétence qui nécessitent encore une démonstration et celles que vous pouvez désormais expliquer."
  },
  "daily-2026-10-20-growth-06": {
    "sourceText": "The history of a familiar object can turn an ordinary errand into a question worth following.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "La historia de un objeto familiar puede convertir un recado cotidiano en una pregunta que merezca explorar.",
    "fr": "L’histoire d’un objet familier peut transformer une course ordinaire en une question à explorer."
  },
  "daily-2026-10-20-growth-07": {
    "sourceText": "When you meet a new word twice, give it a sentence of your own.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando encuentres una palabra nueva por segunda vez, úsala en una frase propia.",
    "fr": "Quand vous rencontrez un mot nouveau une deuxième fois, utilisez-le dans votre propre phrase."
  },
  "daily-2026-10-20-growth-08": {
    "sourceText": "Trade methods with someone who reaches the same result by a different route.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Intercambia métodos con alguien que llega al mismo resultado por otro camino.",
    "fr": "Échangez vos méthodes avec quelqu’un qui obtient le même résultat par un autre chemin."
  },
  "daily-2026-10-20-growth-09": {
    "sourceText": "Keep a list of what surprised you during a project; surprises can reveal assumptions you did not know you held.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Lleva una lista de lo que te sorprendió durante un proyecto; las sorpresas pueden revelar suposiciones que no sabías que tenías.",
    "fr": "Gardez une liste de ce qui vous a surpris pendant un projet ; les surprises peuvent révéler des suppositions que vous ignoriez avoir."
  },
  "daily-2026-10-20-growth-10": {
    "sourceText": "Sometimes learning means recognizing a pattern across things you thought were unrelated.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "A veces, aprender consiste en reconocer un patrón entre cosas que creías sin relación.",
    "fr": "Parfois, apprendre consiste à reconnaître un schéma entre des choses que vous pensiez sans lien."
  },
  "daily-2026-10-20-calm-01": {
    "sourceText": "Noticing that the room has grown cool is enough reason to reach for a blanket.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Notar que la habitación se ha enfriado es razón suficiente para buscar una manta.",
    "fr": "Remarquer que la pièce s’est rafraîchie est une raison suffisante pour prendre une couverture."
  },
  "daily-2026-10-20-calm-02": {
    "sourceText": "You can enjoy a conversation that wanders without steering it toward a useful conclusion.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes disfrutar de una conversación que divaga sin dirigirla hacia una conclusión útil.",
    "fr": "Vous pouvez apprécier une conversation qui vagabonde sans la diriger vers une conclusion utile."
  },
  "daily-2026-10-20-calm-03": {
    "sourceText": "A hobby can remain a place to play, even when you become good enough to be asked for more.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Una afición puede seguir siendo un espacio para jugar, aunque mejores tanto que te pidan más.",
    "fr": "Un loisir peut rester un espace de jeu, même lorsque vos progrès amènent les autres à vous en demander davantage."
  },
  "daily-2026-10-20-calm-04": {
    "sourceText": "The small pause while dough rises or paint dries does not have to be claimed by another chore.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "La pequeña pausa mientras sube la masa o se seca la pintura no tiene que llenarse con otra tarea.",
    "fr": "La petite pause pendant que la pâte lève ou que la peinture sèche n’a pas à être occupée par une autre corvée."
  },
  "daily-2026-10-20-calm-05": {
    "sourceText": "A favorite poem can be read again without trying to learn anything new from it.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes releer un poema favorito sin intentar aprender algo nuevo de él.",
    "fr": "Vous pouvez relire un poème préféré sans chercher à en apprendre quelque chose de nouveau."
  },
  "daily-2026-10-20-calm-06": {
    "sourceText": "You may change out of uncomfortable clothes before deciding what the evening needs from you.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes quitarte la ropa incómoda antes de decidir qué necesita de ti la noche.",
    "fr": "Vous pouvez quitter vos vêtements inconfortables avant de décider de ce que la soirée attend de vous."
  },
  "daily-2026-10-20-calm-07": {
    "sourceText": "A kind visit can end while it is still pleasant; you do not have to use all your energy.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Una visita agradable puede terminar cuando aún lo es; no tienes que gastar toda tu energía.",
    "fr": "Une visite agréable peut se terminer pendant qu’elle l’est encore ; vous n’avez pas à épuiser toute votre énergie."
  },
  "daily-2026-10-20-calm-08": {
    "sourceText": "There can be space in a conversation for both people to look out the window.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "En una conversación puede haber espacio para que ambas personas miren por la ventana.",
    "fr": "Une conversation peut laisser la place aux deux personnes pour regarder par la fenêtre."
  },
  "daily-2026-10-20-calm-09": {
    "sourceText": "You can choose the familiar route home simply because fewer decisions would feel welcome today.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes elegir el camino conocido a casa simplemente porque hoy agradecerías tener que decidir menos.",
    "fr": "Vous pouvez choisir le chemin familier pour rentrer simplement parce que moins de décisions seraient les bienvenues aujourd’hui."
  },
  "daily-2026-10-20-calm-10": {
    "sourceText": "Leave a small margin in your travel plans for arriving without immediately having to begin.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja un pequeño margen en tus planes de viaje para llegar sin tener que empezar de inmediato.",
    "fr": "Gardez une petite marge dans vos trajets pour arriver sans devoir commencer immédiatement."
  },
  "daily-2026-10-21-confidence-01": {
    "sourceText": "Before introducing yourself, remember that a conversation does not require a performance.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Antes de presentarte, recuerda que una conversación no exige una actuación.",
    "fr": "Avant de vous présenter, rappelez-vous qu’une conversation n’exige pas une performance."
  },
  "daily-2026-10-21-confidence-02": {
    "sourceText": "Choose the seat where you can hear clearly; your participation deserves practical support.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige el asiento donde escuches bien; tu participación merece apoyo práctico.",
    "fr": "Choisissez la place où vous entendez bien ; votre participation mérite un soutien pratique."
  },
  "daily-2026-10-21-confidence-03": {
    "sourceText": "A compliment does not create a debt. You can receive it with a simple thank you.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Un cumplido no crea una deuda. Puedes recibirlo con un simple gracias.",
    "fr": "Un compliment ne crée pas une dette. Vous pouvez l’accueillir par un simple merci."
  },
  "daily-2026-10-21-confidence-04": {
    "sourceText": "Name the part you contributed when telling the story of a shared success.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Nombra tu aportación cuando cuentes la historia de un éxito compartido.",
    "fr": "Nommez votre contribution quand vous racontez une réussite collective."
  },
  "daily-2026-10-21-confidence-05": {
    "sourceText": "When you notice yourself guessing what others think, return to what they actually said.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Si te descubres adivinando lo que piensan los demás, vuelve a lo que realmente dijeron.",
    "fr": "Si vous vous surprenez à deviner ce que pensent les autres, revenez à ce qu’ils ont réellement dit."
  },
  "daily-2026-10-21-confidence-06": {
    "sourceText": "Let your first attempt have an ordinary audience instead of an imaginary jury.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que tu primer intento tenga un público normal en lugar de un jurado imaginario.",
    "fr": "Laissez votre premier essai avoir un public ordinaire plutôt qu’un jury imaginaire."
  },
  "daily-2026-10-21-confidence-07": {
    "sourceText": "Keep a note of the questions you answered well; memory often saves the awkward moments first.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Anota las preguntas que respondiste bien; la memoria suele guardar primero los momentos incómodos.",
    "fr": "Notez les questions auxquelles vous avez bien répondu ; la mémoire garde souvent les moments gênants en premier."
  },
  "daily-2026-10-21-confidence-08": {
    "sourceText": "If you are asked to decide too quickly, requesting a moment is a complete response.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Si te piden decidir demasiado rápido, pedir un momento es una respuesta completa.",
    "fr": "Si l’on vous demande de décider trop vite, demander un moment est une réponse complète."
  },
  "daily-2026-10-21-confidence-09": {
    "sourceText": "Wear the comfortable shoes to the important meeting. Confidence can use a steady footing.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Lleva zapatos cómodos a la reunión importante. A la confianza le viene bien pisar firme.",
    "fr": "Portez des chaussures confortables à la réunion importante. La confiance peut s’appuyer sur des pas stables."
  },
  "daily-2026-10-21-confidence-10": {
    "sourceText": "One person disagreeing with your preference does not make it less yours.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Que alguien no comparta tu preferencia no la hace menos tuya.",
    "fr": "Le désaccord d’une personne avec votre préférence ne la rend pas moins vôtre."
  },
  "daily-2026-10-21-focus-01": {
    "sourceText": "Before opening another tab, write down the question the current one is meant to answer.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Antes de abrir otra pestaña, anota la pregunta que la actual debería responder.",
    "fr": "Avant d’ouvrir un autre onglet, notez la question à laquelle l’onglet actuel doit répondre."
  },
  "daily-2026-10-21-focus-02": {
    "sourceText": "Put the document you need beside the document you are making; reduce the distance between looking and doing.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Pon el documento que necesitas junto al que estás creando; acorta la distancia entre mirar y hacer.",
    "fr": "Placez le document nécessaire à côté de celui que vous créez ; réduisez la distance entre regarder et agir."
  },
  "daily-2026-10-21-focus-03": {
    "sourceText": "A useful stopping point includes a note about where to begin next time.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Un buen punto de parada incluye una nota sobre dónde empezar la próxima vez.",
    "fr": "Un point d’arrêt utile comprend une note sur l’endroit où reprendre la prochaine fois."
  },
  "daily-2026-10-21-focus-04": {
    "sourceText": "When a task keeps expanding, give the extra ideas a separate page instead of a longer afternoon.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando una tarea no deje de crecer, dale a las ideas extra una página aparte, no una tarde más larga.",
    "fr": "Quand une tâche ne cesse de grandir, offrez aux idées supplémentaires une page séparée plutôt qu’un après-midi plus long."
  },
  "daily-2026-10-21-focus-05": {
    "sourceText": "Check whether the next reminder needs your attention now or only a place on your calendar.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Comprueba si el próximo recordatorio necesita tu atención ahora o solo un lugar en el calendario.",
    "fr": "Vérifiez si le prochain rappel demande votre attention maintenant ou seulement une place dans votre calendrier."
  },
  "daily-2026-10-21-focus-06": {
    "sourceText": "Keep the instructions visible until the unfamiliar process becomes familiar.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Mantén las instrucciones a la vista hasta que el proceso desconocido se vuelva familiar.",
    "fr": "Gardez les consignes visibles jusqu’à ce que le processus inconnu devienne familier."
  },
  "daily-2026-10-21-focus-07": {
    "sourceText": "For a short work session, choose a result that can be described without the word everything.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Para una sesión de trabajo breve, elige un resultado que puedas describir sin usar la palabra todo.",
    "fr": "Pour une courte séance de travail, choisissez un résultat que vous pouvez décrire sans le mot tout."
  },
  "daily-2026-10-21-focus-08": {
    "sourceText": "If searching for the right tool takes longer than the task, try the tool already within reach.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Si buscar la herramienta adecuada lleva más tiempo que la tarea, prueba la que ya tienes a mano.",
    "fr": "Si chercher le bon outil prend plus de temps que la tâche, essayez celui qui est déjà à portée de main."
  },
  "daily-2026-10-21-focus-09": {
    "sourceText": "Leave one line at the top of your notes for the decision this meeting needs to make.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Reserva una línea al principio de tus notas para la decisión que debe tomar esta reunión.",
    "fr": "Gardez une ligne en haut de vos notes pour la décision que cette réunion doit prendre."
  },
  "daily-2026-10-21-focus-10": {
    "sourceText": "Finish reading the paragraph before deciding whether to follow its link.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Termina de leer el párrafo antes de decidir si sigues su enlace.",
    "fr": "Finissez de lire le paragraphe avant de décider de suivre son lien."
  },
  "daily-2026-10-21-resilience-01": {
    "sourceText": "If the first place cannot help, ask where they would suggest trying next.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Si en el primer lugar no pueden ayudarte, pregunta dónde sugieren que lo intentes después.",
    "fr": "Si le premier endroit ne peut pas vous aider, demandez où l’on vous conseille d’essayer ensuite."
  },
  "daily-2026-10-21-resilience-02": {
    "sourceText": "An unsuccessful repair can still tell you which part needs closer attention.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Una reparación que no funciona también puede mostrar qué parte necesita más atención.",
    "fr": "Une réparation infructueuse peut tout de même indiquer quelle partie mérite plus d’attention."
  },
  "daily-2026-10-21-resilience-03": {
    "sourceText": "When plans fall through, take care of the person who was relying on them: yourself.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando los planes se vengan abajo, cuida a la persona que contaba con ellos: tú.",
    "fr": "Quand les projets échouent, prenez soin de la personne qui comptait dessus : vous."
  },
  "daily-2026-10-21-resilience-04": {
    "sourceText": "Put the rejection letter away before deciding what the whole week means.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Guarda la carta de rechazo antes de decidir qué significa toda la semana.",
    "fr": "Rangez la lettre de refus avant de décider du sens de toute la semaine."
  },
  "daily-2026-10-21-resilience-05": {
    "sourceText": "A difficult return can begin with opening the folder, without promising to finish its contents.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Volver a algo difícil puede empezar por abrir la carpeta, sin prometer terminar su contenido.",
    "fr": "Un retour difficile peut commencer par ouvrir le dossier, sans promettre d’en terminer le contenu."
  },
  "daily-2026-10-21-resilience-06": {
    "sourceText": "After an interruption, reread the last sentence you wrote. You are allowed a bridge back.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Después de una interrupción, relee la última frase que escribiste. Puedes darte un puente de regreso.",
    "fr": "Après une interruption, relisez la dernière phrase écrite. Vous avez droit à un pont pour revenir."
  },
  "daily-2026-10-21-resilience-07": {
    "sourceText": "Keep the useful advice from a disappointing conversation without carrying every word of it.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Conserva el consejo útil de una conversación decepcionante sin cargar con cada palabra.",
    "fr": "Gardez le conseil utile d’une conversation décevante sans en porter chaque mot."
  },
  "daily-2026-10-21-resilience-08": {
    "sourceText": "If your usual routine no longer fits, adjusting it can be a way of staying committed.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Si tu rutina habitual ya no encaja, ajustarla puede ser una forma de mantener tu compromiso.",
    "fr": "Si votre routine habituelle ne convient plus, l’ajuster peut être une façon de rester fidèle à votre engagement."
  },
  "daily-2026-10-21-resilience-09": {
    "sourceText": "Give a changed plan a new name so you can stop measuring it against the one that ended.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale otro nombre al plan que cambió para dejar de medirlo con el que terminó.",
    "fr": "Donnez un nouveau nom au plan modifié pour cesser de le mesurer à celui qui s’est terminé."
  },
  "daily-2026-10-21-resilience-10": {
    "sourceText": "Accepting a borrowed tool, a lift, or a second pair of hands still leaves the effort yours.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Aceptar una herramienta prestada, que te lleven o un par de manos extra no hace que tu esfuerzo deje de ser tuyo.",
    "fr": "Même avec un outil prêté, un trajet offert ou une paire de mains en plus, l’effort reste le vôtre."
  },
  "daily-2026-10-21-growth-01": {
    "sourceText": "When you learn a shortcut, also learn when the longer method is useful.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando aprendas un atajo, aprende también cuándo sirve el método más largo.",
    "fr": "Quand vous apprenez un raccourci, apprenez aussi quand la méthode plus longue est utile."
  },
  "daily-2026-10-21-growth-02": {
    "sourceText": "Try explaining a new idea with an example from an ordinary day; notice where your explanation needs more work.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Intenta explicar una idea nueva con un ejemplo cotidiano; observa dónde necesita más trabajo tu explicación.",
    "fr": "Essayez d’expliquer une nouvelle idée avec un exemple du quotidien ; remarquez où votre explication demande encore du travail."
  },
  "daily-2026-10-21-growth-03": {
    "sourceText": "A question you could not have asked last month is evidence of a changing understanding.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Una pregunta que no podías hacer el mes pasado es señal de que tu comprensión está cambiando.",
    "fr": "Une question que vous n’auriez pas pu poser le mois dernier témoigne d’une compréhension qui évolue."
  },
  "daily-2026-10-21-growth-04": {
    "sourceText": "Keep one early draft so your later skills have something real to look back at.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Guarda un primer borrador para que tus habilidades futuras tengan algo real que recordar.",
    "fr": "Gardez un premier brouillon : vos progrès futurs auront ainsi un point de comparaison concret."
  },
  "daily-2026-10-21-growth-05": {
    "sourceText": "Before adopting a habit you admire, ask which part would fit the life you actually have.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Antes de adoptar un hábito que admiras, pregunta qué parte encajaría con tu vida real.",
    "fr": "Avant d’adopter une habitude que vous admirez, demandez quelle partie conviendrait à votre vie réelle."
  },
  "daily-2026-10-21-growth-06": {
    "sourceText": "Let a more experienced person show you how they check their work, not only how they begin it.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que alguien con más experiencia te muestre cómo revisa su trabajo, no solo cómo lo empieza.",
    "fr": "Laissez une personne plus expérimentée vous montrer comment elle vérifie son travail, pas seulement comment elle le commence."
  },
  "daily-2026-10-21-growth-07": {
    "sourceText": "Curiosity can start with noticing the name of something you pass every day.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "La curiosidad puede empezar por fijarte en el nombre de algo junto a lo que pasas cada día.",
    "fr": "La curiosité peut commencer par remarquer le nom de quelque chose devant quoi vous passez chaque jour."
  },
  "daily-2026-10-21-growth-08": {
    "sourceText": "When practice becomes easier, change one variable instead of replacing the whole exercise.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando la práctica sea más fácil, cambia una variable en lugar de sustituir todo el ejercicio.",
    "fr": "Quand la pratique devient plus facile, changez une variable plutôt que de remplacer tout l’exercice."
  },
  "daily-2026-10-21-growth-09": {
    "sourceText": "Write down what surprised you after trying something unfamiliar; surprise is useful information.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Anota lo que te sorprendió al probar algo desconocido; la sorpresa es información útil.",
    "fr": "Notez ce qui vous a surpris après avoir essayé quelque chose d’inconnu ; la surprise est une information utile."
  },
  "daily-2026-10-21-growth-10": {
    "sourceText": "Teach the small piece you understand, and be clear about the piece you are still learning.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Enseña la pequeña parte que comprendes y aclara qué parte sigues aprendiendo.",
    "fr": "Enseignez la petite partie que vous comprenez et précisez celle que vous apprenez encore."
  },
  "daily-2026-10-21-calm-01": {
    "sourceText": "Let the kettle finish before deciding whether this pause needs a purpose.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que termine de hervir el agua antes de decidir si esta pausa necesita un propósito.",
    "fr": "Laissez l’eau finir de chauffer avant de décider si cette pause a besoin d’un but."
  },
  "daily-2026-10-21-calm-02": {
    "sourceText": "Close the cupboard gently. Small sounds can be one part of making a room feel easier.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Cierra el armario suavemente. Los pequeños sonidos pueden ayudar a que una habitación se sienta más amable.",
    "fr": "Fermez le placard doucement. Les petits sons peuvent contribuer à rendre une pièce plus apaisante."
  },
  "daily-2026-10-21-calm-03": {
    "sourceText": "If the room feels crowded, clear a place to set down what you are carrying.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Si la habitación parece abarrotada, despeja un lugar para dejar lo que llevas.",
    "fr": "Si la pièce semble encombrée, dégagez un endroit où poser ce que vous portez."
  },
  "daily-2026-10-21-calm-04": {
    "sourceText": "A quiet meal does not need to become a planning meeting with yourself.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Una comida tranquila no tiene que convertirse en una reunión de planificación contigo.",
    "fr": "Un repas tranquille n’a pas à devenir une réunion de planification avec vous-même."
  },
  "daily-2026-10-21-calm-05": {
    "sourceText": "Notice the weight of a familiar mug in your hands without asking the moment to improve anything.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Nota el peso de una taza familiar entre las manos sin pedirle al momento que mejore nada.",
    "fr": "Remarquez le poids d’une tasse familière dans vos mains sans demander à ce moment d’améliorer quoi que ce soit."
  },
  "daily-2026-10-21-calm-06": {
    "sourceText": "You may leave the pleasant background music playing without finding something productive to do alongside it.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar sonar la música agradable sin buscar algo productivo que hacer mientras tanto.",
    "fr": "Vous pouvez laisser jouer une agréable musique de fond sans chercher une activité productive à faire en même temps."
  },
  "daily-2026-10-21-calm-07": {
    "sourceText": "Before answering the next notification, notice whether you were enjoying the silence.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Antes de responder a la próxima notificación, observa si estabas disfrutando del silencio.",
    "fr": "Avant de répondre à la prochaine notification, remarquez si vous étiez en train d’apprécier le silence."
  },
  "daily-2026-10-21-calm-08": {
    "sourceText": "Give the last few minutes before leaving a place to gathering your things at a comfortable pace.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Dedica los últimos minutos antes de irte a reunir tus cosas a un ritmo cómodo.",
    "fr": "Consacrez les dernières minutes avant de partir à rassembler vos affaires à un rythme confortable."
  },
  "daily-2026-10-21-calm-09": {
    "sourceText": "An empty corner of the calendar can stay empty after you notice it.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Un hueco vacío del calendario puede seguir vacío después de que lo notes.",
    "fr": "Un espace vide du calendrier peut rester vide après que vous l’avez remarqué."
  },
  "daily-2026-10-21-calm-10": {
    "sourceText": "Choose one surface where nothing needs to be sorted tonight.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige una superficie donde esta noche no haga falta ordenar nada.",
    "fr": "Choisissez une surface où rien n’a besoin d’être trié ce soir."
  },
  "daily-2026-10-22-confidence-01": {
    "sourceText": "You can introduce yourself without listing the reasons someone might dismiss you.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes presentarte sin enumerar los motivos por los que alguien podría descartarte.",
    "fr": "Vous pouvez vous présenter sans énumérer les raisons pour lesquelles quelqu’un pourrait vous écarter."
  },
  "daily-2026-10-22-confidence-02": {
    "sourceText": "Let your first answer reflect your preference before you start negotiating it away.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que tu primera respuesta refleje tu preferencia antes de empezar a negociarla hasta perderla.",
    "fr": "Laissez votre première réponse refléter votre préférence avant de commencer à y renoncer dans la négociation."
  },
  "daily-2026-10-22-confidence-03": {
    "sourceText": "A chair at the table is useful only if you let yourself sit down.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Una silla en la mesa solo sirve si te permites sentarte.",
    "fr": "Une chaise à la table n’est utile que si vous vous autorisez à vous asseoir."
  },
  "daily-2026-10-22-confidence-04": {
    "sourceText": "When praise arrives, try receiving the specific thing someone noticed.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando recibas elogios, intenta acoger lo concreto que alguien notó.",
    "fr": "Quand un compliment arrive, essayez d’accueillir la chose précise que quelqu’un a remarquée."
  },
  "daily-2026-10-22-confidence-05": {
    "sourceText": "You can ask for the instructions again and still be the right person for the work.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes volver a pedir las instrucciones y seguir siendo la persona adecuada para el trabajo.",
    "fr": "Vous pouvez redemander les consignes tout en restant la bonne personne pour le travail."
  },
  "daily-2026-10-22-confidence-06": {
    "sourceText": "Wear the choice you like without rehearsing a defense of it all morning.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Ponte lo que te gusta sin ensayar su defensa toda la mañana.",
    "fr": "Portez ce qui vous plaît sans en répéter la défense toute la matinée."
  },
  "daily-2026-10-22-confidence-07": {
    "sourceText": "Your experience belongs in the discussion even when it comes from a different route.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu experiencia tiene lugar en la conversación aunque venga de otro camino.",
    "fr": "Votre expérience a sa place dans la discussion même si elle vient d’un autre parcours."
  },
  "daily-2026-10-22-confidence-08": {
    "sourceText": "The person reading your application needs your evidence, not your apology.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "La persona que lee tu solicitud necesita tus pruebas, no tus disculpas.",
    "fr": "La personne qui lit votre candidature a besoin de vos éléments concrets, pas de vos excuses."
  },
  "daily-2026-10-22-confidence-09": {
    "sourceText": "You are allowed to change your introduction as you get to know yourself better.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes cambiar tu forma de presentarte a medida que te conoces mejor.",
    "fr": "Vous avez le droit de changer votre présentation à mesure que vous vous connaissez mieux."
  },
  "daily-2026-10-22-confidence-10": {
    "sourceText": "Before volunteering for extra work, check whether your yes has room behind it.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Antes de ofrecerte para más trabajo, comprueba si tienes espacio para sostener ese sí.",
    "fr": "Avant de proposer du travail supplémentaire, vérifiez si vous avez la place nécessaire pour tenir ce oui."
  },
  "daily-2026-10-22-focus-01": {
    "sourceText": "Write the question you are answering at the top of the page; let it guide what stays.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Escribe al principio de la página la pregunta que estás respondiendo y deja que guíe lo que conservas.",
    "fr": "Écrivez en haut de la page la question à laquelle vous répondez ; laissez-la guider ce qui reste."
  },
  "daily-2026-10-22-focus-02": {
    "sourceText": "Save the interesting side road in a note so you can finish the road you chose.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Guarda ese desvío interesante en una nota para terminar el camino que elegiste.",
    "fr": "Gardez ce détour intéressant dans une note pour pouvoir terminer le chemin choisi."
  },
  "daily-2026-10-22-focus-03": {
    "sourceText": "Before opening another tab, name what you expect to find there.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Antes de abrir otra pestaña, nombra lo que esperas encontrar allí.",
    "fr": "Avant d’ouvrir un autre onglet, nommez ce que vous espérez y trouver."
  },
  "daily-2026-10-22-focus-04": {
    "sourceText": "Make the next handoff clear enough that tomorrow does not begin with detective work.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja claro el próximo relevo para que mañana no empiece con trabajo de detective.",
    "fr": "Précisez le prochain relais pour que demain ne commence pas par un travail de détective."
  },
  "daily-2026-10-22-focus-05": {
    "sourceText": "Give the difficult paragraph a rough sentence to work with.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale al párrafo difícil una frase provisional con la que trabajar.",
    "fr": "Donnez au paragraphe difficile une phrase provisoire sur laquelle travailler."
  },
  "daily-2026-10-22-focus-06": {
    "sourceText": "Put the tool for your next task within reach before your break begins.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja a mano la herramienta de tu próxima tarea antes de empezar la pausa.",
    "fr": "Placez l’outil de votre prochaine tâche à portée de main avant le début de votre pause."
  },
  "daily-2026-10-22-focus-07": {
    "sourceText": "When a task keeps expanding, write down what a useful stopping point looks like.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando una tarea no deje de crecer, anota cómo sería un punto de parada útil.",
    "fr": "Quand une tâche ne cesse de s’étendre, notez à quoi ressemblerait un point d’arrêt utile."
  },
  "daily-2026-10-22-focus-08": {
    "sourceText": "Read the instructions once with your hands away from the keyboard.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Lee las instrucciones una vez con las manos lejos del teclado.",
    "fr": "Lisez les consignes une fois en gardant les mains loin du clavier."
  },
  "daily-2026-10-22-focus-09": {
    "sourceText": "A short list of decisions can move a project farther than another page of possibilities.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Una lista breve de decisiones puede hacer avanzar un proyecto más que otra página de posibilidades.",
    "fr": "Une courte liste de décisions peut faire avancer un projet davantage qu’une nouvelle page de possibilités."
  },
  "daily-2026-10-22-focus-10": {
    "sourceText": "Leave yourself a one-line starting note before closing the work tonight.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Antes de cerrar el trabajo esta noche, déjate una nota de una línea para empezar.",
    "fr": "Avant de fermer votre travail ce soir, laissez-vous une ligne indiquant par où commencer."
  },
  "daily-2026-10-22-resilience-01": {
    "sourceText": "A repaired sleeve can carry another season; usefulness does not require an untouched beginning.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Una manga reparada puede servir otra temporada; algo no tiene que haber permanecido intacto para ser útil.",
    "fr": "Une manche réparée peut servir une saison de plus ; ce qui est utile n’a pas besoin d’être resté intact."
  },
  "daily-2026-10-22-resilience-02": {
    "sourceText": "Name what the interruption actually changed before rewriting the whole plan.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Nombra lo que la interrupción cambió realmente antes de reescribir todo el plan.",
    "fr": "Nommez ce que l’interruption a réellement changé avant de réécrire tout le plan."
  },
  "daily-2026-10-22-resilience-03": {
    "sourceText": "You can be disappointed with the outcome and still keep the part you learned.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes sentir decepción por el resultado y conservar lo que aprendiste.",
    "fr": "Vous pouvez ressentir de la déception face au résultat tout en gardant ce que vous avez appris."
  },
  "daily-2026-10-22-resilience-04": {
    "sourceText": "If the first route closes, bring your purpose with you when you ask for directions.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Si se cierra el primer camino, lleva contigo tu propósito al pedir indicaciones.",
    "fr": "Si le premier chemin se ferme, gardez votre objectif avec vous quand vous demandez votre route."
  },
  "daily-2026-10-22-resilience-05": {
    "sourceText": "After a difficult conversation, take care of the ordinary needs that were waiting.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Después de una conversación difícil, atiende las necesidades cotidianas que quedaron esperando.",
    "fr": "Après une conversation difficile, prenez soin des besoins ordinaires qui attendaient."
  },
  "daily-2026-10-22-resilience-06": {
    "sourceText": "Mending a small tear today can be enough work for these hands.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Remendar hoy un pequeño desgarro puede ser suficiente trabajo para estas manos.",
    "fr": "Repriser une petite déchirure aujourd’hui peut être assez de travail pour ces mains."
  },
  "daily-2026-10-22-resilience-07": {
    "sourceText": "Let a missed appointment lead to a new arrangement rather than a verdict on your character.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que faltar a una cita lleve a un nuevo acuerdo, no a un juicio sobre tu carácter.",
    "fr": "Laissez un rendez-vous manqué conduire à une nouvelle organisation plutôt qu’à un verdict sur votre caractère."
  },
  "daily-2026-10-22-resilience-08": {
    "sourceText": "The repair may need a different thread from the one that made the original seam.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "La reparación puede necesitar un hilo distinto del que hizo la costura original.",
    "fr": "La réparation peut demander un fil différent de celui de la couture d’origine."
  },
  "daily-2026-10-22-resilience-09": {
    "sourceText": "You can return to something meaningful without pretending the interruption was easy.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes volver a algo que importa sin fingir que la interrupción fue fácil.",
    "fr": "Vous pouvez revenir à quelque chose qui compte sans prétendre que l’interruption était facile."
  },
  "daily-2026-10-22-resilience-10": {
    "sourceText": "When a setback arrives, tell one trusted person what practical help would make tomorrow simpler.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Ante un contratiempo, dile a alguien de confianza qué ayuda práctica haría más sencillo el día de mañana.",
    "fr": "Lorsqu’un revers arrive, dites à une personne de confiance quelle aide pratique simplifierait demain."
  },
  "daily-2026-10-22-growth-01": {
    "sourceText": "Ask an experienced person what they check before they call the work finished.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Pregunta a alguien con experiencia qué revisa antes de dar por terminado el trabajo.",
    "fr": "Demandez à une personne expérimentée ce qu’elle vérifie avant de déclarer le travail terminé."
  },
  "daily-2026-10-22-growth-02": {
    "sourceText": "Try explaining the idea in everyday words; the missing pieces often become easier to see.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Intenta explicar la idea con palabras cotidianas; las partes que faltan suelen verse mejor.",
    "fr": "Essayez d’expliquer l’idée avec des mots du quotidien ; les éléments manquants deviennent souvent plus visibles."
  },
  "daily-2026-10-22-growth-03": {
    "sourceText": "Keep a sample of your early work so improvement has something concrete to stand beside.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Guarda una muestra de tus primeros trabajos para que la mejora tenga algo concreto con lo que compararse.",
    "fr": "Gardez un échantillon de vos premiers travaux pour donner à vos progrès un point de comparaison concret."
  },
  "daily-2026-10-22-growth-04": {
    "sourceText": "A useful correction tells you where to practice next, not where your ability ends.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Una corrección útil te dice dónde practicar después, no dónde termina tu capacidad.",
    "fr": "Une correction utile vous indique où pratiquer ensuite, pas où s’arrêtent vos capacités."
  },
  "daily-2026-10-22-growth-05": {
    "sourceText": "Learning to mend begins with noticing which part can still hold together.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Aprender a remendar empieza por notar qué parte aún puede mantenerse unida.",
    "fr": "Apprendre à réparer commence par remarquer quelle partie peut encore tenir ensemble."
  },
  "daily-2026-10-22-growth-06": {
    "sourceText": "Choose one small technique to repeat before collecting five more tutorials.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige una técnica pequeña que repetir antes de reunir cinco tutoriales más.",
    "fr": "Choisissez une petite technique à répéter avant de collectionner cinq tutoriels de plus."
  },
  "daily-2026-10-22-growth-07": {
    "sourceText": "You can retire a method with gratitude for the work it helped you do.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar atrás un método con gratitud por el trabajo que te ayudó a hacer.",
    "fr": "Vous pouvez abandonner une méthode avec de la gratitude pour le travail qu’elle vous a aidé à accomplir."
  },
  "daily-2026-10-22-growth-08": {
    "sourceText": "Write down the surprising result before memory tidies it into what you expected.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Anota el resultado sorprendente antes de que la memoria lo acomode a lo que esperabas.",
    "fr": "Notez le résultat surprenant avant que la mémoire le réorganise selon vos attentes."
  },
  "daily-2026-10-22-growth-09": {
    "sourceText": "Let a thoughtful question count as participation while you are learning the room.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que una pregunta reflexiva cuente como participación mientras conoces el ambiente.",
    "fr": "Laissez une question réfléchie compter comme une participation pendant que vous découvrez le groupe."
  },
  "daily-2026-10-22-growth-10": {
    "sourceText": "Practice asking for an example when an explanation stays too abstract.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Practica pedir un ejemplo cuando una explicación siga siendo demasiado abstracta.",
    "fr": "Exercez-vous à demander un exemple quand une explication reste trop abstraite."
  },
  "daily-2026-10-22-calm-01": {
    "sourceText": "You can set the cup down and feel both hands free for a moment.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar la taza y sentir ambas manos libres un momento.",
    "fr": "Vous pouvez poser la tasse et sentir vos deux mains libres un instant."
  },
  "daily-2026-10-22-calm-02": {
    "sourceText": "Let the room have its ordinary sounds without turning each one into a task.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que la habitación tenga sus sonidos cotidianos sin convertir cada uno en una tarea.",
    "fr": "Laissez la pièce avoir ses bruits ordinaires sans transformer chacun en tâche."
  },
  "daily-2026-10-22-calm-03": {
    "sourceText": "The message can remain a draft while you decide what you mean.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "El mensaje puede seguir siendo un borrador mientras decides lo que quieres decir.",
    "fr": "Le message peut rester un brouillon pendant que vous décidez de ce que vous voulez dire."
  },
  "daily-2026-10-22-calm-04": {
    "sourceText": "Choose a comfortable place to wait; waiting does not need an extra layer of discomfort.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige un lugar cómodo para esperar; la espera no necesita una capa más de incomodidad.",
    "fr": "Choisissez un endroit confortable pour attendre ; l’attente n’a pas besoin d’un inconfort supplémentaire."
  },
  "daily-2026-10-22-calm-05": {
    "sourceText": "One quiet meal does not have to become a plan for improving your whole life.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Una comida tranquila no tiene que convertirse en un plan para mejorar toda tu vida.",
    "fr": "Un repas tranquille n’a pas à devenir un plan pour améliorer toute votre vie."
  },
  "daily-2026-10-22-calm-06": {
    "sourceText": "Give your eyes a nearby, familiar object to rest on between decisions.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale a tu mirada un objeto cercano y familiar sobre el que descansar entre decisiones.",
    "fr": "Offrez à vos yeux un objet proche et familier sur lequel se poser entre deux décisions."
  },
  "daily-2026-10-22-calm-07": {
    "sourceText": "You may close a conversation kindly before you have used up all your energy.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes terminar una conversación con amabilidad antes de agotar toda tu energía.",
    "fr": "Vous pouvez terminer une conversation avec bienveillance avant d’avoir épuisé toute votre énergie."
  },
  "daily-2026-10-22-calm-08": {
    "sourceText": "Leave a little space between hearing a request and offering an answer.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja un poco de espacio entre escuchar una petición y ofrecer una respuesta.",
    "fr": "Laissez un peu d’espace entre entendre une demande et proposer une réponse."
  },
  "daily-2026-10-22-calm-09": {
    "sourceText": "Let the last few minutes of the evening belong to something that asks very little of you.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que los últimos minutos de la noche pertenezcan a algo que te pida muy poco.",
    "fr": "Laissez les dernières minutes de la soirée appartenir à quelque chose qui vous demande très peu."
  },
  "daily-2026-10-22-calm-10": {
    "sourceText": "A slower pace can begin with how gently you put away the thing in your hand.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Un ritmo más lento puede empezar por la suavidad con que guardas lo que tienes en la mano.",
    "fr": "Un rythme plus lent peut commencer par la douceur avec laquelle vous rangez ce que vous tenez."
  },
  "daily-2026-10-23-confidence-01": {
    "sourceText": "You can let a preference be small and still say it out loud.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Una preferencia puede ser pequeña y aun así puedes decirla en voz alta.",
    "fr": "Une préférence peut être petite et vous pouvez tout de même l’exprimer à voix haute."
  },
  "daily-2026-10-23-confidence-02": {
    "sourceText": "Ask for your name to be pronounced correctly; it is worth learning.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Pide que pronuncien bien tu nombre; merece que lo aprendan.",
    "fr": "Demandez que votre nom soit prononcé correctement ; il mérite qu’on l’apprenne."
  },
  "daily-2026-10-23-confidence-03": {
    "sourceText": "An invitation to contribute does not require you to sound like the last person who spoke.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Que te inviten a contribuir no exige que suenes como la última persona que habló.",
    "fr": "Une invitation à contribuer ne vous oblige pas à parler comme la dernière personne qui s’est exprimée."
  },
  "daily-2026-10-23-confidence-04": {
    "sourceText": "When you describe your work, include the part you made possible.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando describas tu trabajo, incluye la parte que tú hiciste posible.",
    "fr": "Quand vous décrivez votre travail, incluez la partie que vous avez rendue possible."
  },
  "daily-2026-10-23-confidence-05": {
    "sourceText": "You can choose the seat where you can hear, see, and participate comfortably.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes elegir el asiento donde escuches, veas y participes con comodidad.",
    "fr": "Vous pouvez choisir la place où vous entendez, voyez et participez confortablement."
  },
  "daily-2026-10-23-confidence-06": {
    "sourceText": "A question about your availability deserves an answer that includes your actual limits.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Una pregunta sobre tu disponibilidad merece una respuesta que incluya tus límites reales.",
    "fr": "Une question sur votre disponibilité mérite une réponse qui inclut vos limites réelles."
  },
  "daily-2026-10-23-confidence-07": {
    "sourceText": "You may take a compliment home without finding a flaw to balance it.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes llevarte un cumplido a casa sin buscar un defecto que lo compense.",
    "fr": "Vous pouvez emporter un compliment chez vous sans chercher un défaut pour le contrebalancer."
  },
  "daily-2026-10-23-confidence-08": {
    "sourceText": "Let the next introduction include something you enjoy, not just something you do for others.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Incluye en tu próxima presentación algo que disfrutes, no solo algo que haces por los demás.",
    "fr": "Laissez votre prochaine présentation inclure quelque chose que vous aimez, pas seulement ce que vous faites pour les autres."
  },
  "daily-2026-10-23-confidence-09": {
    "sourceText": "Your reason for declining can be honest without becoming a full account of your week.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu motivo para decir que no puede ser sincero sin convertirse en un informe de toda tu semana.",
    "fr": "Votre raison de refuser peut être honnête sans devenir un compte rendu de toute votre semaine."
  },
  "daily-2026-10-23-confidence-10": {
    "sourceText": "Try letting your signature stand at the bottom of work you are proud to have done.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Prueba a dejar tu firma al pie de un trabajo que te enorgullece haber hecho.",
    "fr": "Essayez de laisser votre signature au bas d’un travail qui fait votre fierté."
  },
  "daily-2026-10-23-focus-01": {
    "sourceText": "Before revising the whole document, find the sentence that is causing the confusion.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Antes de revisar todo el documento, encuentra la frase que causa la confusión.",
    "fr": "Avant de revoir tout le document, trouvez la phrase qui crée la confusion."
  },
  "daily-2026-10-23-focus-02": {
    "sourceText": "Give each open window a purpose; close the ones whose purpose has ended.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale un propósito a cada ventana abierta y cierra las que ya lo hayan cumplido.",
    "fr": "Donnez un but à chaque fenêtre ouverte et fermez celles dont le rôle est terminé."
  },
  "daily-2026-10-23-focus-03": {
    "sourceText": "Decide what you need from the meeting before you start preparing slides.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Decide qué necesitas de la reunión antes de empezar a preparar diapositivas.",
    "fr": "Décidez de ce dont vous avez besoin pour la réunion avant de préparer les diapositives."
  },
  "daily-2026-10-23-focus-04": {
    "sourceText": "If you keep rereading the same page, write one question for the next pass.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Si sigues releyendo la misma página, escribe una pregunta para la próxima lectura.",
    "fr": "Si vous relisez sans cesse la même page, écrivez une question pour la prochaine lecture."
  },
  "daily-2026-10-23-focus-05": {
    "sourceText": "Put the next appointment beside the task list so your plan fits the time you have.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Pon la próxima cita junto a la lista de tareas para que tu plan encaje en el tiempo disponible.",
    "fr": "Placez le prochain rendez-vous à côté de la liste des tâches pour adapter votre plan au temps disponible."
  },
  "daily-2026-10-23-focus-06": {
    "sourceText": "A folder with a clear name is a small favor to your future attention.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Una carpeta con un nombre claro es un pequeño favor para tu atención futura.",
    "fr": "Un dossier au nom clair est un petit service rendu à votre attention future."
  },
  "daily-2026-10-23-focus-07": {
    "sourceText": "When you stop mid-task, mark the exact place where the next action begins.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando pares a mitad de una tarea, marca el lugar exacto donde empieza la siguiente acción.",
    "fr": "Quand vous vous arrêtez au milieu d’une tâche, marquez l’endroit précis où commence l’action suivante."
  },
  "daily-2026-10-23-focus-08": {
    "sourceText": "You can finish a useful version before choosing its final colors.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes terminar una versión útil antes de elegir sus colores definitivos.",
    "fr": "Vous pouvez terminer une version utile avant de choisir ses couleurs définitives."
  },
  "daily-2026-10-23-focus-09": {
    "sourceText": "Choose which detail needs precision and which detail only needs to be understandable.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige qué detalle necesita precisión y cuál solo necesita entenderse.",
    "fr": "Choisissez le détail qui demande de la précision et celui qui doit simplement être compréhensible."
  },
  "daily-2026-10-23-focus-10": {
    "sourceText": "Before accepting a new deadline, look at the commitments already occupying that day.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Antes de aceptar un nuevo plazo, revisa los compromisos que ya ocupan ese día.",
    "fr": "Avant d’accepter une nouvelle échéance, regardez les engagements qui occupent déjà cette journée."
  },
  "daily-2026-10-23-resilience-01": {
    "sourceText": "When plans fall through, keep the contact details; the conversation may still be useful later.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando fallen los planes, guarda los datos de contacto; la conversación aún puede servir más adelante.",
    "fr": "Quand les projets échouent, gardez les coordonnées ; la conversation pourra encore être utile plus tard."
  },
  "daily-2026-10-23-resilience-02": {
    "sourceText": "A difficult afternoon does not need to decide how you treat yourself at dinner.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Una tarde difícil no tiene que decidir cómo te tratas durante la cena.",
    "fr": "Un après-midi difficile n’a pas à décider de la façon dont vous vous traitez au dîner."
  },
  "daily-2026-10-23-resilience-03": {
    "sourceText": "You can ask for a correction without turning the mistake into a public trial.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes pedir una corrección sin convertir el error en un juicio público.",
    "fr": "Vous pouvez demander une correction sans transformer l’erreur en procès public."
  },
  "daily-2026-10-23-resilience-04": {
    "sourceText": "If you have to start over, bring the notes that explain what you would do differently.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Si tienes que empezar de nuevo, lleva las notas que explican qué harías de otra manera.",
    "fr": "Si vous devez recommencer, emportez les notes qui expliquent ce que vous feriez autrement."
  },
  "daily-2026-10-23-resilience-05": {
    "sourceText": "Some days, the way forward is to arrange a ride, make a call, or find the missing form.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Algunos días, avanzar consiste en organizar un traslado, hacer una llamada o encontrar el formulario que falta.",
    "fr": "Certains jours, avancer consiste à organiser un trajet, passer un appel ou trouver le formulaire manquant."
  },
  "daily-2026-10-23-resilience-06": {
    "sourceText": "Let the people helping you know which part is hardest to manage alone.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Diles a quienes te ayudan qué parte es más difícil afrontar sin compañía.",
    "fr": "Dites aux personnes qui vous aident quelle partie est la plus difficile à gérer sans soutien."
  },
  "daily-2026-10-23-resilience-07": {
    "sourceText": "A delayed reply can be answered when you are ready without calling yourself a bad friend.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes responder a un mensaje atrasado cuando estés listo para hacerlo, sin pensar por ello que eres un mal amigo.",
    "fr": "Vous pouvez répondre à un message resté en attente quand vous le pouvez, sans vous traiter de mauvais ami."
  },
  "daily-2026-10-23-resilience-08": {
    "sourceText": "When a familiar method fails, inspect the conditions before doubting every skill you have.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando falle un método conocido, examina las condiciones antes de dudar de todas tus habilidades.",
    "fr": "Quand une méthode familière échoue, examinez les conditions avant de douter de toutes vos compétences."
  },
  "daily-2026-10-23-resilience-09": {
    "sourceText": "Keep one ordinary promise to yourself while the larger situation remains unsettled.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Cumple una promesa cotidiana contigo mientras la situación general siga sin resolverse.",
    "fr": "Tenez une promesse ordinaire envers vous-même pendant que la situation générale reste incertaine."
  },
  "daily-2026-10-23-resilience-10": {
    "sourceText": "You can leave an unsuccessful attempt behind without leaving your curiosity there.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar atrás un intento que no funcionó sin dejar allí tu curiosidad.",
    "fr": "Vous pouvez laisser un essai infructueux derrière vous sans y laisser votre curiosité."
  },
  "daily-2026-10-23-growth-01": {
    "sourceText": "Ask what a good example looks like before spending hours guessing the standard.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Pregunta cómo es un buen ejemplo antes de pasar horas adivinando el nivel esperado.",
    "fr": "Demandez à quoi ressemble un bon exemple avant de passer des heures à deviner le niveau attendu."
  },
  "daily-2026-10-23-growth-02": {
    "sourceText": "Try one unfamiliar ingredient in a familiar recipe; learning can have a steady base.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Prueba un ingrediente desconocido en una receta familiar; aprender puede tener una base estable.",
    "fr": "Essayez un ingrédient inconnu dans une recette familière ; l’apprentissage peut avoir une base stable."
  },
  "daily-2026-10-23-growth-03": {
    "sourceText": "Explain the mistake in enough detail that the next attempt has something new to use.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Explica el error con suficiente detalle para que el próximo intento tenga algo nuevo que usar.",
    "fr": "Expliquez l’erreur avec assez de détails pour que la prochaine tentative dispose d’un élément nouveau."
  },
  "daily-2026-10-23-growth-04": {
    "sourceText": "A note about what confused you can become a better question tomorrow.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Una nota sobre lo que te confundió puede convertirse mañana en una pregunta mejor.",
    "fr": "Une note sur ce qui vous a dérouté peut devenir une meilleure question demain."
  },
  "daily-2026-10-23-growth-05": {
    "sourceText": "Let a beginner show you which instructions you have stopped noticing.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que alguien que empieza te muestre las instrucciones en las que ya no te fijas.",
    "fr": "Laissez une personne débutante vous montrer les consignes que vous ne remarquez plus."
  },
  "daily-2026-10-23-growth-06": {
    "sourceText": "You can keep the lesson from advice without adopting the entire way someone else lives.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes conservar la lección de un consejo sin adoptar toda la forma de vivir de otra persona.",
    "fr": "Vous pouvez garder la leçon d’un conseil sans adopter toute la façon de vivre d’une autre personne."
  },
  "daily-2026-10-23-growth-07": {
    "sourceText": "Practice the transition between two steps, not only the steps themselves.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Practica el paso entre dos etapas, no solo las etapas por separado.",
    "fr": "Pratiquez la transition entre deux étapes, pas seulement les étapes elles-mêmes."
  },
  "daily-2026-10-23-growth-08": {
    "sourceText": "Choose a small experiment whose result you will actually have time to observe.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige un experimento pequeño cuyo resultado realmente tengas tiempo de observar.",
    "fr": "Choisissez une petite expérience dont vous aurez réellement le temps d’observer le résultat."
  },
  "daily-2026-10-23-growth-09": {
    "sourceText": "When you discover an easier method, share it without making the older effort seem foolish.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando descubras un método más fácil, compártelo sin hacer parecer absurdo el esfuerzo anterior.",
    "fr": "Quand vous découvrez une méthode plus facile, partagez-la sans dévaloriser les efforts précédents."
  },
  "daily-2026-10-23-growth-10": {
    "sourceText": "Notice which kind of help made learning easier, so you can ask for it again.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Observa qué ayuda facilitó tu aprendizaje para poder pedirla de nuevo.",
    "fr": "Remarquez le type d’aide qui a facilité votre apprentissage pour pouvoir le demander à nouveau."
  },
  "daily-2026-10-23-calm-01": {
    "sourceText": "A sleeping cat does not check whether the chair is the most productive place to be.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Un gato dormido no comprueba si la silla es el lugar más productivo donde estar.",
    "fr": "Un chat endormi ne vérifie pas si le fauteuil est l’endroit le plus productif où se trouver."
  },
  "daily-2026-10-23-calm-02": {
    "sourceText": "You can let a familiar room be enough company for a quiet half hour.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar que una habitación familiar sea suficiente compañía durante media hora tranquila.",
    "fr": "Vous pouvez laisser une pièce familière être une compagnie suffisante pour une demi-heure de calme."
  },
  "daily-2026-10-23-calm-03": {
    "sourceText": "Move the cushion, loosen the collar, or close the bright screen; comfort can start with an adjustment.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Mueve el cojín, afloja el cuello de la camisa o cierra la pantalla brillante; la comodidad puede empezar por un ajuste.",
    "fr": "Déplacez le coussin, desserrez votre col ou fermez l’écran lumineux ; le confort peut commencer par un ajustement."
  },
  "daily-2026-10-23-calm-04": {
    "sourceText": "There is no need to fill the silence while the kettle warms.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "No necesitas llenar el silencio mientras se calienta el agua.",
    "fr": "Vous n’avez pas à remplir le silence pendant que l’eau chauffe."
  },
  "daily-2026-10-23-calm-05": {
    "sourceText": "Let one corner of your day stay free from measuring how well you are doing.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja un rincón de tu día libre de medir qué tan bien lo haces.",
    "fr": "Gardez un coin de votre journée libre de toute mesure de votre réussite."
  },
  "daily-2026-10-23-calm-06": {
    "sourceText": "Rest can look as ordinary as putting your feet up in the chair you already own.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Descansar puede ser tan cotidiano como poner los pies en alto en la silla que ya tienes.",
    "fr": "Le repos peut être aussi ordinaire que surélever les pieds dans le fauteuil que vous avez déjà."
  },
  "daily-2026-10-23-calm-07": {
    "sourceText": "The cat curled on the chair is a reminder that a soft place may be used, not just kept tidy.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "El gato acurrucado en la silla recuerda que un lugar suave está para usarse, no solo para mantenerse ordenado.",
    "fr": "Le chat blotti sur le fauteuil rappelle qu’un endroit douillet peut être utilisé, pas seulement gardé en ordre."
  },
  "daily-2026-10-23-calm-08": {
    "sourceText": "You may enjoy a quiet moment without collecting a photograph or a lesson from it.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes disfrutar de un momento tranquilo sin sacar de él una foto ni una lección.",
    "fr": "Vous pouvez apprécier un moment tranquille sans en recueillir une photo ou une leçon."
  },
  "daily-2026-10-23-calm-09": {
    "sourceText": "An unanswered thought can wait while you notice the warmth of the blanket.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Un pensamiento sin respuesta puede esperar mientras notas el calor de la manta.",
    "fr": "Une pensée sans réponse peut attendre pendant que vous remarquez la chaleur de la couverture."
  },
  "daily-2026-10-23-calm-10": {
    "sourceText": "Lower the brightness of the room before asking yourself to settle into the evening.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Baja la intensidad de la luz antes de pedirte que entres en la calma de la noche.",
    "fr": "Baissez la lumière dans la pièce avant de vous demander de vous poser pour la soirée."
  },
  "daily-2026-10-24-confidence-01": {
    "sourceText": "You can correct an assumption about yourself before it becomes the plan everyone follows.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes corregir una suposición sobre ti antes de que se convierta en el plan que todos siguen.",
    "fr": "Vous pouvez corriger une supposition à votre sujet avant qu’elle devienne le plan suivi par tout le monde."
  },
  "daily-2026-10-24-confidence-02": {
    "sourceText": "The clothes that help you feel at ease belong in the room with you.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "La ropa que te ayuda a sentirte a gusto también tiene lugar en la sala contigo.",
    "fr": "Les vêtements qui vous mettent à l’aise ont leur place dans la pièce avec vous."
  },
  "daily-2026-10-24-confidence-03": {
    "sourceText": "Let your request include the size, time, or arrangement that would actually work.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que tu petición incluya el tamaño, la hora o la organización que de verdad funcionaría.",
    "fr": "Laissez votre demande préciser la taille, l’heure ou l’organisation qui conviendrait réellement."
  },
  "daily-2026-10-24-confidence-04": {
    "sourceText": "You may enjoy being good at something without turning it into a competition.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes disfrutar de hacer algo bien sin convertirlo en una competición.",
    "fr": "Vous pouvez prendre plaisir à bien faire quelque chose sans en faire une compétition."
  },
  "daily-2026-10-24-confidence-05": {
    "sourceText": "Before agreeing that you are too late, check whether the door is still open.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Antes de aceptar que llegas demasiado tarde, comprueba si la puerta sigue abierta.",
    "fr": "Avant d’accepter l’idée qu’il est trop tard, vérifiez si la porte est encore ouverte."
  },
  "daily-2026-10-24-confidence-06": {
    "sourceText": "You can share an opinion that is still developing if you name the part you are exploring.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes compartir una opinión que aún se desarrolla si aclaras la parte que estás explorando.",
    "fr": "Vous pouvez partager une opinion encore en cours de réflexion si vous précisez la partie que vous explorez."
  },
  "daily-2026-10-24-confidence-07": {
    "sourceText": "When someone offers you a turn, you do not have to give it away to prove you are considerate.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando alguien te ofrezca un turno, no tienes que cederlo para demostrar consideración.",
    "fr": "Quand quelqu’un vous offre un tour, vous n’avez pas à le céder pour prouver votre considération."
  },
  "daily-2026-10-24-confidence-08": {
    "sourceText": "A boundary you set during the week can still guide your plans when the weekend arrives.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Un límite que pusiste entre semana puede seguir guiando tus planes al llegar el fin de semana.",
    "fr": "Une limite posée en semaine peut encore guider vos projets à l’arrivée du week-end."
  },
  "daily-2026-10-24-confidence-09": {
    "sourceText": "Your accent can carry a thoughtful answer exactly as it is.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu acento puede llevar una respuesta reflexiva tal como es.",
    "fr": "Votre accent peut porter une réponse réfléchie exactement tel qu’il est."
  },
  "daily-2026-10-24-confidence-10": {
    "sourceText": "Let yourself be the person who suggests the place you have wanted to visit.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Permítete ser quien sugiera el lugar que hace tiempo quieres visitar.",
    "fr": "Autorisez-vous à proposer l’endroit que vous avez envie de visiter."
  },
  "daily-2026-10-24-focus-01": {
    "sourceText": "Set out the materials before starting the tutorial so your attention can stay with the instructions.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Prepara los materiales antes del tutorial para que tu atención pueda quedarse en las instrucciones.",
    "fr": "Préparez le matériel avant de commencer le tutoriel pour que votre attention reste sur les consignes."
  },
  "daily-2026-10-24-focus-02": {
    "sourceText": "If a list contains three versions of the same job, choose one place to track it.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Si una lista incluye tres versiones de la misma tarea, elige un solo lugar para seguirla.",
    "fr": "Si une liste contient trois versions du même travail, choisissez un seul endroit pour le suivre."
  },
  "daily-2026-10-24-focus-03": {
    "sourceText": "Give the recurring distraction a practical answer: a closed door, a silenced alert, or a later time.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale una respuesta práctica a la distracción recurrente: una puerta cerrada, una alerta silenciada o una hora posterior.",
    "fr": "Donnez une réponse pratique à la distraction récurrente : une porte fermée, une notification mise en sourdine ou un moment plus tard."
  },
  "daily-2026-10-24-focus-04": {
    "sourceText": "Look at the whole instruction before committing to the first fold.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Revisa toda la instrucción antes de hacer el primer pliegue.",
    "fr": "Regardez toute la consigne avant de vous engager dans le premier pli."
  },
  "daily-2026-10-24-focus-05": {
    "sourceText": "Choose the file you will work in before you begin gathering more examples.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige el archivo en el que trabajarás antes de empezar a reunir más ejemplos.",
    "fr": "Choisissez le fichier dans lequel travailler avant de commencer à rassembler d’autres exemples."
  },
  "daily-2026-10-24-focus-06": {
    "sourceText": "When you notice yourself polishing the heading again, check whether the body still needs an answer.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando vuelvas a pulir el título, comprueba si el cuerpo del texto aún necesita una respuesta.",
    "fr": "Quand vous retouchez encore le titre, vérifiez si le corps du texte attend toujours une réponse."
  },
  "daily-2026-10-24-focus-07": {
    "sourceText": "A useful work session may end with one ambiguity removed.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Una sesión de trabajo útil puede terminar con una ambigüedad menos.",
    "fr": "Une séance de travail utile peut se terminer avec une ambiguïté en moins."
  },
  "daily-2026-10-24-focus-08": {
    "sourceText": "Group the errands by where they happen, then leave room for the journey between them.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Agrupa los recados por lugar y deja espacio para los trayectos entre ellos.",
    "fr": "Regroupez les courses par lieu, puis gardez du temps pour les trajets entre elles."
  },
  "daily-2026-10-24-focus-09": {
    "sourceText": "Let the checklist hold the small details so your attention can hold the difficult one.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que la lista guarde los detalles pequeños para que tu atención pueda sostener el difícil.",
    "fr": "Laissez la liste retenir les petits détails pour que votre attention puisse garder le détail difficile."
  },
  "daily-2026-10-24-focus-10": {
    "sourceText": "At the end of a search, save the answer where you will look for it next time.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Al terminar una búsqueda, guarda la respuesta donde la buscarás la próxima vez.",
    "fr": "À la fin d’une recherche, rangez la réponse là où vous la chercherez la prochaine fois."
  },
  "daily-2026-10-24-resilience-01": {
    "sourceText": "If the day changes before breakfast, make a smaller plan that belongs to the day you actually have.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Si el día cambia antes del desayuno, haz un plan más pequeño que encaje con el día real.",
    "fr": "Si la journée change avant le petit-déjeuner, faites un plan plus modeste adapté à votre journée réelle."
  },
  "daily-2026-10-24-resilience-02": {
    "sourceText": "You can tell someone the attempt did not work without presenting it as the end of the story.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes decir que el intento no funcionó sin presentarlo como el final de la historia.",
    "fr": "Vous pouvez dire que l’essai n’a pas fonctionné sans le présenter comme la fin de l’histoire."
  },
  "daily-2026-10-24-resilience-03": {
    "sourceText": "An awkward first return becomes less unfamiliar once you have made it.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Un primer regreso incómodo se vuelve menos desconocido una vez que lo has hecho.",
    "fr": "Un premier retour maladroit devient moins inconnu une fois que vous l’avez fait."
  },
  "daily-2026-10-24-resilience-04": {
    "sourceText": "Before abandoning a useful routine, ask whether it needs a different time or a lighter version.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Antes de abandonar una rutina útil, pregunta si necesita otro horario o una versión más ligera.",
    "fr": "Avant d’abandonner une routine utile, demandez-vous si elle a besoin d’un autre horaire ou d’une version allégée."
  },
  "daily-2026-10-24-resilience-05": {
    "sourceText": "A paper crease in the wrong place can teach your fingers where to slow down next time.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Un pliegue en el lugar equivocado puede enseñar a tus dedos dónde ir más despacio la próxima vez.",
    "fr": "Un pli au mauvais endroit peut apprendre à vos doigts où ralentir la prochaine fois."
  },
  "daily-2026-10-24-resilience-06": {
    "sourceText": "Let a canceled arrangement free you to choose again, even if the new choice is modest.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que un plan cancelado te dé libertad para volver a elegir, aunque la nueva opción sea modesta.",
    "fr": "Laissez un projet annulé vous donner la liberté de choisir à nouveau, même si le nouveau choix est modeste."
  },
  "daily-2026-10-24-resilience-07": {
    "sourceText": "You can bring disappointment to a conversation without asking the other person to erase it.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes llevar tu decepción a una conversación sin pedirle a la otra persona que la borre.",
    "fr": "Vous pouvez apporter votre déception dans une conversation sans demander à l’autre personne de l’effacer."
  },
  "daily-2026-10-24-resilience-08": {
    "sourceText": "Keep the part of the plan that still helps; a setback does not require discarding everything.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Conserva la parte del plan que aún ayuda; un contratiempo no exige descartarlo todo.",
    "fr": "Gardez la partie du plan qui aide encore ; un revers n’oblige pas à tout abandonner."
  },
  "daily-2026-10-24-resilience-09": {
    "sourceText": "After an unexpected change, check the essentials before spending energy on appearances.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Después de un cambio inesperado, revisa lo esencial antes de gastar energía en las apariencias.",
    "fr": "Après un changement imprévu, vérifiez l’essentiel avant de consacrer de l’énergie aux apparences."
  },
  "daily-2026-10-24-resilience-10": {
    "sourceText": "You may need a second explanation of a hard situation before you know what to ask.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Quizá necesites una segunda explicación de una situación difícil antes de saber qué preguntar.",
    "fr": "Vous aurez peut-être besoin d’une deuxième explication d’une situation difficile avant de savoir quoi demander."
  },
  "daily-2026-10-24-growth-01": {
    "sourceText": "An origami crane takes shape through several small folds; the middle can look nothing like the result.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Una grulla de origami toma forma con varios pliegues pequeños; a mitad del proceso puede no parecerse al resultado.",
    "fr": "Une grue en origami prend forme par plusieurs petits plis ; à mi-chemin, elle peut ne pas ressembler au résultat."
  },
  "daily-2026-10-24-growth-02": {
    "sourceText": "Turn the paper over before deciding the instructions have led you nowhere.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale la vuelta al papel antes de decidir que las instrucciones no te llevaron a ninguna parte.",
    "fr": "Retournez le papier avant de décider que les consignes ne vous ont mené nulle part."
  },
  "daily-2026-10-24-growth-03": {
    "sourceText": "Try a practice sheet before using the material you are afraid to waste.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Prueba con una hoja de práctica antes de usar el material que temes desperdiciar.",
    "fr": "Essayez une feuille d’entraînement avant d’utiliser le matériau que vous avez peur de gaspiller."
  },
  "daily-2026-10-24-growth-04": {
    "sourceText": "When a demonstration moves too quickly, pause at the part your hands have not learned yet.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Si una demostración va demasiado rápido, detente en la parte que tus manos aún no han aprendido.",
    "fr": "Si une démonstration va trop vite, faites une pause à l’étape que vos mains n’ont pas encore apprise."
  },
  "daily-2026-10-24-growth-05": {
    "sourceText": "Compare two attempts for one concrete difference rather than ranking your entire ability.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Busca una diferencia concreta entre dos intentos en lugar de clasificar toda tu capacidad.",
    "fr": "Comparez deux tentatives sur une différence concrète plutôt que de classer l’ensemble de vos capacités."
  },
  "daily-2026-10-24-growth-06": {
    "sourceText": "The crease you open again can still guide a more careful fold.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Un pliegue que vuelves a abrir todavía puede guiar un doblez más cuidadoso.",
    "fr": "Un pli que vous rouvrez peut encore guider un pliage plus soigneux."
  },
  "daily-2026-10-24-growth-07": {
    "sourceText": "Ask which part of the process matters most when you cannot improve everything at once.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Pregunta qué parte del proceso importa más cuando no puedes mejorarlo todo a la vez.",
    "fr": "Demandez quelle partie du processus compte le plus quand vous ne pouvez pas tout améliorer à la fois."
  },
  "daily-2026-10-24-growth-08": {
    "sourceText": "An unfamiliar tool deserves a few minutes of exploration before a demanding project.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Una herramienta desconocida merece unos minutos de exploración antes de un proyecto exigente.",
    "fr": "Un outil inconnu mérite quelques minutes d’exploration avant un projet exigeant."
  },
  "daily-2026-10-24-growth-09": {
    "sourceText": "Notice what you can now do without the reminder you once kept beside you.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Observa lo que ahora haces sin el recordatorio que antes tenías al lado.",
    "fr": "Remarquez ce que vous savez désormais faire sans le rappel que vous gardiez autrefois à côté de vous."
  },
  "daily-2026-10-24-growth-10": {
    "sourceText": "Share the small adjustment that helped, even if it seems obvious after you found it.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Comparte el pequeño ajuste que ayudó, aunque parezca obvio después de encontrarlo.",
    "fr": "Partagez le petit ajustement qui vous a aidé, même s’il semble évident après l’avoir trouvé."
  },
  "daily-2026-10-24-calm-01": {
    "sourceText": "You can sit beside unfinished work without spending every minute deciding its future.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes sentarte junto a un trabajo sin terminar sin pasar cada minuto decidiendo su futuro.",
    "fr": "Vous pouvez vous asseoir près d’un travail inachevé sans passer chaque minute à décider de son avenir."
  },
  "daily-2026-10-24-calm-02": {
    "sourceText": "Let the sound of the rain remain weather for a while, without making it a reason to hurry.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Escucha por un rato el sonido de la lluvia sin convertirlo en una razón para apresurarte.",
    "fr": "Pendant un moment, laissez la pluie être simplement de la pluie, sans en faire une raison de vous presser."
  },
  "daily-2026-10-24-calm-03": {
    "sourceText": "Take the longer route through the room if it gives you space to move comfortably.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Toma el camino más largo por la habitación si te da espacio para moverte con comodidad.",
    "fr": "Prenez le chemin le plus long dans la pièce s’il vous laisse bouger confortablement."
  },
  "daily-2026-10-24-calm-04": {
    "sourceText": "A slow Saturday morning does not need an explanation to the rest of the week.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Una mañana de sábado tranquila no tiene que dar explicaciones al resto de la semana.",
    "fr": "Un samedi matin tranquille n’a pas à se justifier auprès du reste de la semaine."
  },
  "daily-2026-10-24-calm-05": {
    "sourceText": "You may leave a little room on the plate and a little room in the afternoon.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar un poco de espacio en el plato y un poco de espacio en la tarde.",
    "fr": "Vous pouvez laisser un peu de place dans l’assiette et un peu de place dans l’après-midi."
  },
  "daily-2026-10-24-calm-06": {
    "sourceText": "Notice the texture of the paper before asking it to become anything.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Nota la textura del papel antes de pedirle que se convierta en algo.",
    "fr": "Remarquez la texture du papier avant de lui demander de devenir quelque chose."
  },
  "daily-2026-10-24-calm-07": {
    "sourceText": "Put away the item nearest your hand, then decide whether you want to continue.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Guarda el objeto más cercano a tu mano y después decide si quieres continuar.",
    "fr": "Rangez l’objet le plus proche de votre main, puis décidez si vous voulez continuer."
  },
  "daily-2026-10-24-calm-08": {
    "sourceText": "A plan for the evening can include a stretch of time with no instructions.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Un plan para la noche puede incluir un rato sin instrucciones.",
    "fr": "Un programme pour la soirée peut inclure un moment sans consignes."
  },
  "daily-2026-10-24-calm-09": {
    "sourceText": "Let a pleasant detail stay pleasant without asking whether you have earned it.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que un detalle agradable siga siendo agradable sin preguntarte si lo mereces.",
    "fr": "Laissez un détail agréable rester agréable sans vous demander si vous l’avez mérité."
  },
  "daily-2026-10-24-calm-10": {
    "sourceText": "The light moving across the table can be something to notice rather than something to photograph.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "La luz que se mueve sobre la mesa puede ser algo que observar, no algo que fotografiar.",
    "fr": "La lumière qui se déplace sur la table peut être quelque chose à remarquer plutôt qu’à photographier."
  },
  "daily-2026-10-25-confidence-01": {
    "sourceText": "At a shared meal, your contribution can be the dish, the welcome, or the care you bring.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "En una comida compartida, tu aportación puede ser el plato, la bienvenida o el cuidado que traes.",
    "fr": "Lors d’un repas partagé, votre contribution peut être le plat, l’accueil ou l’attention que vous apportez."
  },
  "daily-2026-10-25-confidence-02": {
    "sourceText": "You can ask to see the options before choosing the one everyone expects you to want.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes pedir ver las opciones antes de elegir la que todos esperan que quieras.",
    "fr": "Vous pouvez demander à voir les options avant de choisir celle que tout le monde attend de vous."
  },
  "daily-2026-10-25-confidence-03": {
    "sourceText": "Put the hobby you enjoy back into your answer when someone asks what interests you.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Vuelve a incluir la afición que disfrutas cuando te pregunten qué te interesa.",
    "fr": "Remettez le loisir que vous aimez dans votre réponse quand on vous demande ce qui vous intéresse."
  },
  "daily-2026-10-25-confidence-04": {
    "sourceText": "Accepting a place on the team includes letting others carry their share.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Aceptar un lugar en el equipo incluye dejar que los demás hagan su parte.",
    "fr": "Accepter une place dans l’équipe comprend le fait de laisser les autres porter leur part."
  },
  "daily-2026-10-25-confidence-05": {
    "sourceText": "You can name the conditions under which you do your best work.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes nombrar las condiciones en las que haces tu mejor trabajo.",
    "fr": "Vous pouvez nommer les conditions dans lesquelles vous travaillez le mieux."
  },
  "daily-2026-10-25-confidence-06": {
    "sourceText": "A quiet contribution still deserves an accurate credit.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Una aportación discreta también merece un reconocimiento justo.",
    "fr": "Une contribution discrète mérite elle aussi une reconnaissance juste."
  },
  "daily-2026-10-25-confidence-07": {
    "sourceText": "Let the photograph include you sometimes, even when you are usually the one holding the camera.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que alguna foto te incluya, aunque normalmente seas quien sostiene la cámara.",
    "fr": "Laissez la photo vous inclure parfois, même si vous tenez habituellement l’appareil."
  },
  "daily-2026-10-25-confidence-08": {
    "sourceText": "You may ask a salesperson for time to decide without promising to buy anything.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes pedirle a quien te atiende tiempo para decidir sin prometer comprar nada.",
    "fr": "Vous pouvez demander au personnel de vente du temps pour réfléchir, sans promettre d’acheter quoi que ce soit."
  },
  "daily-2026-10-25-confidence-09": {
    "sourceText": "What you bring to the table does not need to resemble what everyone else brought.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Lo que aportas a la mesa no tiene que parecerse a lo que trajeron los demás.",
    "fr": "Ce que vous apportez à la table n’a pas à ressembler à ce que les autres ont apporté."
  },
  "daily-2026-10-25-confidence-10": {
    "sourceText": "When you know the answer, try offering it before you begin guessing who might disagree.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando sepas la respuesta, prueba a ofrecerla antes de adivinar quién podría discrepar.",
    "fr": "Quand vous connaissez la réponse, essayez de la proposer avant de deviner qui pourrait ne pas être d’accord."
  },
  "daily-2026-10-25-focus-01": {
    "sourceText": "Check what you already have before making the shopping list longer.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Comprueba lo que ya tienes antes de alargar la lista de compras.",
    "fr": "Vérifiez ce que vous avez déjà avant d’allonger la liste des courses."
  },
  "daily-2026-10-25-focus-02": {
    "sourceText": "A useful agenda gives each topic a question to resolve.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Un orden del día útil le da a cada tema una pregunta por resolver.",
    "fr": "Un ordre du jour utile donne à chaque sujet une question à résoudre."
  },
  "daily-2026-10-25-focus-03": {
    "sourceText": "When you are gathering information, mark the point at which you will have enough to choose.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando reúnas información, marca en qué punto tendrás suficiente para elegir.",
    "fr": "Quand vous rassemblez des informations, indiquez le moment où vous en aurez assez pour choisir."
  },
  "daily-2026-10-25-focus-04": {
    "sourceText": "Separate the items you can act on from the ones waiting for someone else.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Separa lo que puedes hacer de lo que espera a otra persona.",
    "fr": "Séparez les éléments sur lesquels vous pouvez agir de ceux qui attendent quelqu’un d’autre."
  },
  "daily-2026-10-25-focus-05": {
    "sourceText": "Put the reference beside the work instead of relying on repeated trips back to memory.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Pon la referencia junto al trabajo en lugar de volver una y otra vez a la memoria.",
    "fr": "Placez la référence à côté du travail plutôt que de faire sans cesse appel à votre mémoire."
  },
  "daily-2026-10-25-focus-06": {
    "sourceText": "If a task has no clear owner, naming one may be the next useful action.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Si una tarea no tiene una persona responsable clara, nombrarla puede ser la siguiente acción útil.",
    "fr": "Si une tâche n’a pas de responsable clairement défini, en désigner un peut être la prochaine action utile."
  },
  "daily-2026-10-25-focus-07": {
    "sourceText": "Make the first five minutes easy to enter: the correct page, the right tool, one clear aim.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Facilita los primeros cinco minutos: la página correcta, la herramienta adecuada y un objetivo claro.",
    "fr": "Facilitez l’entrée dans les cinq premières minutes : la bonne page, le bon outil et un objectif clair."
  },
  "daily-2026-10-25-focus-08": {
    "sourceText": "Read your message once for the action you want the recipient to take.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Relee tu mensaje pensando en la acción que quieres que haga quien lo reciba.",
    "fr": "Relisez votre message en cherchant l’action que vous souhaitez voir accomplir par son destinataire."
  },
  "daily-2026-10-25-focus-09": {
    "sourceText": "Choose a place for incoming ideas that will not cover the work already in front of you.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige un lugar para las ideas nuevas que no tape el trabajo que ya tienes delante.",
    "fr": "Choisissez pour les nouvelles idées un endroit qui ne recouvre pas le travail déjà devant vous."
  },
  "daily-2026-10-25-focus-10": {
    "sourceText": "Before repeating a task by hand, check whether a saved template would help next time.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Antes de repetir una tarea a mano, comprueba si una plantilla guardada ayudaría la próxima vez.",
    "fr": "Avant de répéter une tâche à la main, vérifiez si un modèle enregistré vous aiderait la prochaine fois."
  },
  "daily-2026-10-25-resilience-01": {
    "sourceText": "When a shared plan becomes uneven, ask to redistribute the work before resentment writes the next chapter.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando un plan compartido se desequilibre, pide repartir de nuevo el trabajo antes de que el resentimiento escriba el siguiente capítulo.",
    "fr": "Quand un projet commun devient déséquilibré, demandez de répartir à nouveau le travail avant que le ressentiment écrive le chapitre suivant."
  },
  "daily-2026-10-25-resilience-02": {
    "sourceText": "A recipe that did not turn out can still leave you with a better sense of the ingredients.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Una receta que no salió bien puede dejarte una mejor comprensión de los ingredientes.",
    "fr": "Une recette qui n’a pas réussi peut tout de même vous laisser une meilleure compréhension des ingrédients."
  },
  "daily-2026-10-25-resilience-03": {
    "sourceText": "You can request another copy of a lost document without turning the loss into your identity.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes pedir otra copia de un documento perdido sin convertir la pérdida en tu identidad.",
    "fr": "Vous pouvez demander une autre copie d’un document perdu sans faire de cette perte votre identité."
  },
  "daily-2026-10-25-resilience-04": {
    "sourceText": "If the event was difficult, choose one person with whom you can speak plainly afterward.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Si el evento fue difícil, elige a alguien con quien puedas hablar con franqueza después.",
    "fr": "Si l’événement a été difficile, choisissez une personne avec qui parler franchement ensuite."
  },
  "daily-2026-10-25-resilience-05": {
    "sourceText": "You may revise an agreement when the situation it was made for has changed.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes revisar un acuerdo cuando haya cambiado la situación para la que se hizo.",
    "fr": "Vous pouvez revoir un accord lorsque la situation pour laquelle il a été conclu a changé."
  },
  "daily-2026-10-25-resilience-06": {
    "sourceText": "A broken tool can interrupt the job without canceling the reason you began it.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Una herramienta rota puede interrumpir el trabajo sin anular la razón por la que lo empezaste.",
    "fr": "Un outil cassé peut interrompre le travail sans annuler la raison pour laquelle vous l’avez commencé."
  },
  "daily-2026-10-25-resilience-07": {
    "sourceText": "Let the next attempt account for what tired you last time.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que el próximo intento tenga en cuenta lo que te cansó la última vez.",
    "fr": "Laissez la prochaine tentative tenir compte de ce qui vous a fatigué la dernière fois."
  },
  "daily-2026-10-25-resilience-08": {
    "sourceText": "Some restarts begin with returning the borrowed equipment and asking a new question.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Algunos nuevos comienzos empiezan por devolver el equipo prestado y hacer una pregunta nueva.",
    "fr": "Certains nouveaux départs commencent par rendre le matériel emprunté et poser une nouvelle question."
  },
  "daily-2026-10-25-resilience-09": {
    "sourceText": "You can appreciate an opportunity and acknowledge that its timing was difficult.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes valorar una oportunidad y reconocer que llegó en un momento difícil.",
    "fr": "Vous pouvez apprécier une occasion et reconnaître qu’elle est arrivée à un moment difficile."
  },
  "daily-2026-10-25-resilience-10": {
    "sourceText": "Ask what remains available before assuming the whole afternoon is lost.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Pregunta qué sigue disponible antes de suponer que toda la tarde está perdida.",
    "fr": "Demandez ce qui reste possible avant de supposer que tout l’après-midi est perdu."
  },
  "daily-2026-10-25-growth-01": {
    "sourceText": "Cook beside someone once and notice the small choices a written recipe leaves out.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Cocina una vez junto a alguien y observa las pequeñas decisiones que una receta escrita omite.",
    "fr": "Cuisinez une fois aux côtés de quelqu’un et remarquez les petits choix absents d’une recette écrite."
  },
  "daily-2026-10-25-growth-02": {
    "sourceText": "A borrowed book can introduce you to an interest you do not have to commit to forever.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Un libro prestado puede acercarte a un interés que no tienes que conservar para siempre.",
    "fr": "Un livre emprunté peut vous faire découvrir un intérêt auquel vous n’avez pas à vous consacrer pour toujours."
  },
  "daily-2026-10-25-growth-03": {
    "sourceText": "Try teaching one simple step; explaining it may reveal what you understand well.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Prueba a enseñar un paso sencillo; explicarlo puede revelar lo que comprendes bien.",
    "fr": "Essayez d’enseigner une étape simple ; l’expliquer peut révéler ce que vous comprenez bien."
  },
  "daily-2026-10-25-growth-04": {
    "sourceText": "When you change your mind, keep a note of the evidence that helped.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando cambies de opinión, anota las pruebas que te ayudaron a hacerlo.",
    "fr": "Quand vous changez d’avis, notez les éléments qui vous y ont aidé."
  },
  "daily-2026-10-25-growth-05": {
    "sourceText": "Learn the names of the parts you use; precise words make asking for help easier.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Aprende los nombres de las piezas que usas; las palabras precisas facilitan pedir ayuda.",
    "fr": "Apprenez le nom des pièces que vous utilisez ; des mots précis facilitent les demandes d’aide."
  },
  "daily-2026-10-25-growth-06": {
    "sourceText": "Choose feedback from someone who understands the kind of work you want to make.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Busca comentarios de alguien que comprenda el tipo de trabajo que quieres crear.",
    "fr": "Choisissez les retours d’une personne qui comprend le type de travail que vous souhaitez créer."
  },
  "daily-2026-10-25-growth-07": {
    "sourceText": "Notice when an old instruction has become a choice you can now evaluate.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Observa cuándo una instrucción antigua se ha convertido en una opción que ahora puedes evaluar.",
    "fr": "Remarquez quand une ancienne consigne est devenue un choix que vous pouvez désormais évaluer."
  },
  "daily-2026-10-25-growth-08": {
    "sourceText": "Let curiosity lead you to a local class, a library shelf, or a conversation with a neighbor.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que la curiosidad te lleve a una clase cercana, una estantería de la biblioteca o una conversación con un vecino.",
    "fr": "Laissez la curiosité vous mener à un cours près de chez vous, à une étagère de bibliothèque ou à une conversation avec un voisin."
  },
  "daily-2026-10-25-growth-09": {
    "sourceText": "An experiment is easier to learn from when you change one thing you can name.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Es más fácil aprender de un experimento cuando cambias una cosa que puedes nombrar.",
    "fr": "Il est plus facile d’apprendre d’une expérience lorsque vous changez une chose que vous pouvez nommer."
  },
  "daily-2026-10-25-growth-10": {
    "sourceText": "You can become more capable at receiving help as well as giving it.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes aprender a recibir ayuda mejor, además de darla.",
    "fr": "Vous pouvez devenir plus habile à recevoir de l’aide autant qu’à en donner."
  },
  "daily-2026-10-25-calm-01": {
    "sourceText": "You can enjoy the meal before deciding what needs to be cleaned.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes disfrutar de la comida antes de decidir qué hay que limpiar.",
    "fr": "Vous pouvez profiter du repas avant de décider de ce qui doit être nettoyé."
  },
  "daily-2026-10-25-calm-02": {
    "sourceText": "A familiar song can fill a few minutes without becoming background for another chore.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Una canción conocida puede llenar unos minutos sin servir de fondo para otra tarea.",
    "fr": "Une chanson familière peut remplir quelques minutes sans devenir le fond sonore d’une autre corvée."
  },
  "daily-2026-10-25-calm-03": {
    "sourceText": "Leave the next conversation for after you have finished the one you are in.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja la próxima conversación para después de terminar la que estás teniendo.",
    "fr": "Gardez la prochaine conversation pour après celle que vous avez en ce moment."
  },
  "daily-2026-10-25-calm-04": {
    "sourceText": "You may take the comfortable route home even when it is not the quickest.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes tomar el camino cómodo a casa aunque no sea el más rápido.",
    "fr": "Vous avez le droit de prendre le chemin confortable pour rentrer même s’il n’est pas le plus rapide."
  },
  "daily-2026-10-25-calm-05": {
    "sourceText": "Let a warm bowl and a steady chair be the whole plan for a little while.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que un cuenco caliente y una silla firme sean todo el plan por un rato.",
    "fr": "Laissez un bol chaud et une chaise stable être tout le programme pendant un moment."
  },
  "daily-2026-10-25-calm-06": {
    "sourceText": "The stack of unread books can be an invitation rather than an accusation.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "La pila de libros sin leer puede ser una invitación, no una acusación.",
    "fr": "La pile de livres non lus peut être une invitation plutôt qu’une accusation."
  },
  "daily-2026-10-25-calm-07": {
    "sourceText": "You can watch the ordinary life outside the window without needing to join its pace.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes mirar la vida cotidiana fuera de la ventana sin tener que seguir su ritmo.",
    "fr": "Vous pouvez regarder la vie ordinaire par la fenêtre sans devoir adopter son rythme."
  },
  "daily-2026-10-25-calm-08": {
    "sourceText": "Choose one notification that can wait until after your break.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige una notificación que pueda esperar hasta después de tu pausa.",
    "fr": "Choisissez une notification qui peut attendre la fin de votre pause."
  },
  "daily-2026-10-25-calm-09": {
    "sourceText": "An afternoon at home can hold its own kind of occasion.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Una tarde en casa puede ser especial a su manera.",
    "fr": "Un après-midi chez vous peut être un moment spécial à sa façon."
  },
  "daily-2026-10-25-calm-10": {
    "sourceText": "Let your attention linger on something you like before looking for what needs fixing.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que tu atención se quede un poco en algo que te gusta antes de buscar lo que necesita arreglo.",
    "fr": "Laissez votre attention s’attarder sur quelque chose que vous aimez avant de chercher ce qui doit être réparé."
  },
  "daily-2026-10-28-confidence-01": {
    "sourceText": "You can ask for a place to put your things instead of balancing everything to avoid taking up space.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes pedir un lugar para dejar tus cosas en vez de hacer equilibrios con todo para no ocupar espacio.",
    "fr": "Vous pouvez demander un endroit où poser vos affaires plutôt que de tout tenir en équilibre pour ne pas prendre de place."
  },
  "daily-2026-10-28-confidence-02": {
    "sourceText": "Let the person helping you know when the suggested option does not fit.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Dile a quien te ayuda cuándo la opción sugerida no encaja.",
    "fr": "Dites à la personne qui vous aide quand l’option proposée ne convient pas."
  },
  "daily-2026-10-28-confidence-03": {
    "sourceText": "You may speak about a subject you care about without first calling your interest silly.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes hablar de un tema que te importa sin empezar diciendo que tu interés es una tontería.",
    "fr": "Vous pouvez parler d’un sujet qui vous tient à cœur sans commencer par qualifier votre intérêt de ridicule."
  },
  "daily-2026-10-28-confidence-04": {
    "sourceText": "An introduction can begin with the name you use now.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes presentarte empezando por el nombre que usas ahora.",
    "fr": "Une présentation peut commencer par le nom que vous utilisez aujourd’hui."
  },
  "daily-2026-10-28-confidence-05": {
    "sourceText": "If the room is moving quickly, you can ask for a moment to finish your point.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Si todo va muy rápido en la sala, puedes pedir un momento para terminar tu idea.",
    "fr": "Si tout va vite dans la pièce, vous pouvez demander un moment pour terminer votre idée."
  },
  "daily-2026-10-28-confidence-06": {
    "sourceText": "Your availability is information to share, not a test of how much you care.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu disponibilidad es información que compartir, no una prueba de cuánto te importa.",
    "fr": "Votre disponibilité est une information à partager, pas un test de votre attachement."
  },
  "daily-2026-10-28-confidence-07": {
    "sourceText": "You can enjoy a solo visit without inventing an absent companion.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes disfrutar de una visita sin compañía sin inventarte a alguien ausente.",
    "fr": "Vous pouvez apprécier une visite en solo sans inventer une personne absente pour vous accompagner."
  },
  "daily-2026-10-28-confidence-08": {
    "sourceText": "Let your application describe the work you can do, including skills learned outside a classroom.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que tu solicitud describa lo que sabes hacer, incluidas las habilidades aprendidas fuera del aula.",
    "fr": "Laissez votre candidature décrire le travail que vous savez faire, y compris les compétences acquises hors d’une salle de classe."
  },
  "daily-2026-10-28-confidence-09": {
    "sourceText": "A respectful request can remain respectful when you repeat it clearly.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Una petición respetuosa puede seguir siéndolo cuando la repites con claridad.",
    "fr": "Une demande respectueuse peut le rester lorsque vous la répétez clairement."
  },
  "daily-2026-10-28-confidence-10": {
    "sourceText": "You can choose a comfortable tempo for a life that you are the one living.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes elegir un ritmo cómodo para la vida que tú estás viviendo.",
    "fr": "Vous pouvez choisir un tempo confortable pour la vie qui est la vôtre."
  },
  "daily-2026-10-28-focus-01": {
    "sourceText": "A metronome leaves room between its clicks; your plan can leave room between commitments.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Un metrónomo deja espacio entre sus golpes; tu plan puede dejar espacio entre compromisos.",
    "fr": "Un métronome laisse de l’espace entre ses clics ; votre plan peut laisser de l’espace entre vos engagements."
  },
  "daily-2026-10-28-focus-02": {
    "sourceText": "Practice the difficult measure slowly enough to notice where your attention slips.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Practica el compás difícil lo bastante despacio para notar dónde se te escapa la atención.",
    "fr": "Pratiquez la mesure difficile assez lentement pour remarquer où votre attention vous échappe."
  },
  "daily-2026-10-28-focus-03": {
    "sourceText": "Mark the one number you need to verify before rereading the whole report.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Marca el único número que necesitas verificar antes de releer todo el informe.",
    "fr": "Repérez le seul nombre à vérifier avant de relire tout le rapport."
  },
  "daily-2026-10-28-focus-04": {
    "sourceText": "If you are waiting for a reply, write the next action you can take without it.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Si esperas una respuesta, escribe la siguiente acción que puedes hacer sin ella.",
    "fr": "Si vous attendez une réponse, écrivez la prochaine action que vous pouvez accomplir sans elle."
  },
  "daily-2026-10-28-focus-05": {
    "sourceText": "Give the draft a purpose before giving it a polished opening.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale un propósito al borrador antes de darle un comienzo pulido.",
    "fr": "Donnez un but au brouillon avant de lui donner une introduction soignée."
  },
  "daily-2026-10-28-focus-06": {
    "sourceText": "Choose a separate time to sort your notes so sorting does not replace using them.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Reserva otro momento para ordenar las notas y evita que ordenarlas sustituya usarlas.",
    "fr": "Choisissez un autre moment pour trier vos notes afin que le tri ne remplace pas leur utilisation."
  },
  "daily-2026-10-28-focus-07": {
    "sourceText": "Keep the tool you are using on the table and the possible alternatives within reach elsewhere.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Mantén en la mesa la herramienta que usas y las posibles alternativas a mano en otro lugar.",
    "fr": "Gardez sur la table l’outil que vous utilisez et les autres possibilités à portée de main ailleurs."
  },
  "daily-2026-10-28-focus-08": {
    "sourceText": "Before comparing options, write the condition that would rule one out.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Antes de comparar opciones, escribe la condición que descartaría una de ellas.",
    "fr": "Avant de comparer les options, écrivez la condition qui en éliminerait une."
  },
  "daily-2026-10-28-focus-09": {
    "sourceText": "When your list feels crowded, separate appointments from tasks that can move.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando la lista parezca abarrotada, separa las citas de las tareas que pueden moverse.",
    "fr": "Quand votre liste semble surchargée, séparez les rendez-vous des tâches qui peuvent être déplacées."
  },
  "daily-2026-10-28-focus-10": {
    "sourceText": "Set a pace you can follow through the final part of the work, not just its beginning.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige un ritmo que puedas mantener hasta el final del trabajo, no solo al principio.",
    "fr": "Fixez un rythme que vous pourrez suivre jusqu’à la fin du travail, pas seulement au début."
  },
  "daily-2026-10-28-resilience-01": {
    "sourceText": "You can acknowledge the inconvenience of asking again and still make the call you need.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes reconocer la incomodidad de volver a pedir y aun así hacer la llamada que necesitas.",
    "fr": "Vous pouvez reconnaître la gêne de demander à nouveau et tout de même passer l’appel nécessaire."
  },
  "daily-2026-10-28-resilience-02": {
    "sourceText": "An instrument that has been quiet for months can still be taken out of its case today.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Un instrumento que lleva meses en silencio todavía puede salir hoy de su estuche.",
    "fr": "Un instrument silencieux depuis des mois peut encore être sorti de son étui aujourd’hui."
  },
  "daily-2026-10-28-resilience-03": {
    "sourceText": "When an arrangement falls apart, clarify what was agreed before deciding what it means about you.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando un acuerdo se deshaga, aclara lo acordado antes de decidir qué significa sobre ti.",
    "fr": "Quand une organisation s’effondre, clarifiez ce qui était convenu avant de décider de ce que cela dit de vous."
  },
  "daily-2026-10-28-resilience-04": {
    "sourceText": "Let the first return be shorter than the routine you once maintained.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que el primer regreso sea más corto que la rutina que mantenías antes.",
    "fr": "Laissez le premier retour être plus court que la routine que vous suiviez autrefois."
  },
  "daily-2026-10-28-resilience-05": {
    "sourceText": "A difficult lesson may become useful later without having to feel welcome now.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Una lección difícil puede servirte más adelante sin que tengas que recibirla con agrado ahora.",
    "fr": "Une leçon difficile peut devenir utile plus tard sans devoir être bien accueillie maintenant."
  },
  "daily-2026-10-28-resilience-06": {
    "sourceText": "You can request a different way to participate when the original plan stops being workable.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes pedir otra forma de participar cuando el plan original deje de ser viable.",
    "fr": "Vous pouvez demander une autre façon de participer quand le plan d’origine n’est plus réalisable."
  },
  "daily-2026-10-28-resilience-07": {
    "sourceText": "Keep a record of the steps you have taken so a long wait does not erase them from view.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Lleva un registro de tus pasos para que una espera larga no los borre de la vista.",
    "fr": "Gardez une trace des démarches accomplies pour qu’une longue attente ne les efface pas de votre vue."
  },
  "daily-2026-10-28-resilience-08": {
    "sourceText": "If a problem needs more than one visit, bring the notes from the last one.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Si un problema requiere más de una visita, lleva las notas de la anterior.",
    "fr": "Si un problème demande plusieurs visites, apportez les notes de la précédente."
  },
  "daily-2026-10-28-resilience-09": {
    "sourceText": "There is room to be frustrated with the delay and considerate toward the person answering.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes sentir frustración por la demora y tener consideración con quien responde.",
    "fr": "Il y a de la place pour la frustration face au retard et pour la considération envers la personne qui répond."
  },
  "daily-2026-10-28-resilience-10": {
    "sourceText": "When you need to complain, describe the specific problem so someone has a fair chance to help.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando necesites quejarte, describe el problema concreto para dar a alguien una oportunidad justa de ayudar.",
    "fr": "Quand vous devez vous plaindre, décrivez le problème précis pour donner à quelqu’un une vraie chance d’aider."
  },
  "daily-2026-10-28-growth-01": {
    "sourceText": "Listen to the pause between notes; improvement can begin with what you stop adding.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Escucha la pausa entre las notas; mejorar puede empezar por lo que dejas de añadir.",
    "fr": "Écoutez la pause entre les notes ; l’amélioration peut commencer par ce que vous cessez d’ajouter."
  },
  "daily-2026-10-28-growth-02": {
    "sourceText": "Ask how someone checks their work, not only how they start it.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Pregunta cómo alguien revisa su trabajo, no solo cómo lo empieza.",
    "fr": "Demandez comment une personne vérifie son travail, pas seulement comment elle le commence."
  },
  "daily-2026-10-28-growth-03": {
    "sourceText": "Try describing the same idea to a beginner and to a colleague; each version can reveal a different gap.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Prueba a explicar la misma idea a alguien que empieza y a un colega; cada versión puede mostrar una laguna distinta.",
    "fr": "Essayez de présenter la même idée à une personne débutante et à un collègue ; chaque version peut révéler une lacune différente."
  },
  "daily-2026-10-28-growth-04": {
    "sourceText": "Keep a question beside the result when you do not yet understand why it worked.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Guarda una pregunta junto al resultado cuando todavía no entiendas por qué funcionó.",
    "fr": "Gardez une question à côté du résultat lorsque vous ne comprenez pas encore pourquoi cela a fonctionné."
  },
  "daily-2026-10-28-growth-05": {
    "sourceText": "A skill can become part of your life before it becomes something you display.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Una habilidad puede formar parte de tu vida antes de ser algo que muestras.",
    "fr": "Une compétence peut faire partie de votre vie avant de devenir quelque chose que vous montrez."
  },
  "daily-2026-10-28-growth-06": {
    "sourceText": "Notice which instruction became clearer after you tried it with your own hands.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Observa qué instrucción quedó más clara después de probarla con tus propias manos.",
    "fr": "Remarquez quelle consigne est devenue plus claire après l’avoir essayée de vos propres mains."
  },
  "daily-2026-10-28-growth-07": {
    "sourceText": "You can learn from a style you would not choose for yourself.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes aprender de un estilo que no elegirías para ti.",
    "fr": "Vous pouvez apprendre d’un style que vous ne choisiriez pas pour vous-même."
  },
  "daily-2026-10-28-growth-08": {
    "sourceText": "When you revisit an old project, look for a problem you now know how to solve.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando vuelvas a un proyecto antiguo, busca un problema que ahora sepas resolver.",
    "fr": "Quand vous revenez à un ancien projet, cherchez un problème que vous savez désormais résoudre."
  },
  "daily-2026-10-28-growth-09": {
    "sourceText": "Ask permission to observe the process behind a finished piece of work.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Pide permiso para observar el proceso detrás de un trabajo terminado.",
    "fr": "Demandez la permission d’observer le processus derrière un travail terminé."
  },
  "daily-2026-10-28-growth-10": {
    "sourceText": "Return to the example after reading the explanation; see which detail you can now name.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Vuelve al ejemplo después de leer la explicación y observa qué detalle puedes nombrar ahora.",
    "fr": "Revenez à l’exemple après avoir lu l’explication et voyez quel détail vous pouvez désormais nommer."
  },
  "daily-2026-10-28-calm-01": {
    "sourceText": "You can let the clock tell the time without letting it comment on your worth.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar que el reloj dé la hora sin dejar que opine sobre tu valor.",
    "fr": "Vous pouvez laisser l’horloge donner l’heure sans la laisser commenter votre valeur."
  },
  "daily-2026-10-28-calm-02": {
    "sourceText": "Give yourself a moment to arrive before reaching for the next thing to begin.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Date un momento para llegar antes de buscar lo siguiente que empezar.",
    "fr": "Accordez-vous un moment pour arriver avant de chercher la prochaine chose à commencer."
  },
  "daily-2026-10-28-calm-03": {
    "sourceText": "A chair turned toward the window can offer a different kind of break from the same room.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Una silla orientada a la ventana puede ofrecer otra clase de descanso en la misma habitación.",
    "fr": "Une chaise tournée vers la fenêtre peut offrir un autre type de pause dans la même pièce."
  },
  "daily-2026-10-28-calm-04": {
    "sourceText": "You may listen to the end of a song before deciding what comes afterward.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes escuchar una canción hasta el final antes de decidir lo que viene después.",
    "fr": "Vous pouvez écouter la fin d’une chanson avant de décider de ce qui suivra."
  },
  "daily-2026-10-28-calm-05": {
    "sourceText": "Let the laundry finish its cycle without checking on it as if waiting were work.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que termine el ciclo de la lavadora sin vigilarlo como si esperar fuera trabajar.",
    "fr": "Laissez le linge terminer son cycle sans le surveiller comme si attendre était travailler."
  },
  "daily-2026-10-28-calm-06": {
    "sourceText": "The space between two appointments can remain a space rather than becoming another appointment.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "El espacio entre dos citas puede seguir siendo espacio en lugar de convertirse en otra cita.",
    "fr": "L’espace entre deux rendez-vous peut rester un espace au lieu de devenir un autre rendez-vous."
  },
  "daily-2026-10-28-calm-07": {
    "sourceText": "You can answer a simple question with a simple answer and let it rest there.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes responder a una pregunta sencilla con una respuesta sencilla y dejarlo ahí.",
    "fr": "Vous pouvez répondre simplement à une question simple et en rester là."
  },
  "daily-2026-10-28-calm-08": {
    "sourceText": "Notice a sound that asks nothing from you: a distant bird, a fan, or rain at the sill.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Nota un sonido que no te pide nada: un pájaro lejano, un ventilador o lluvia en el alféizar.",
    "fr": "Remarquez un son qui ne vous demande rien : un oiseau au loin, un ventilateur ou la pluie sur le rebord de la fenêtre."
  },
  "daily-2026-10-28-calm-09": {
    "sourceText": "You can leave a pleasant conversation without planning the next meeting before you say goodbye.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes terminar una conversación agradable sin planear la próxima reunión antes de despedirte.",
    "fr": "Vous pouvez quitter une conversation agréable sans prévoir la prochaine rencontre avant de dire au revoir."
  },
  "daily-2026-10-28-calm-10": {
    "sourceText": "Let the grocery bags wait by the door while you take off your shoes.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja las bolsas de la compra junto a la puerta mientras te quitas los zapatos.",
    "fr": "Laissez les sacs de courses près de la porte pendant que vous retirez vos chaussures."
  },
  "daily-2026-10-29-confidence-01": {
    "sourceText": "When a form leaves no box for your experience, you can still describe it in your own words.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando un formulario no tenga una casilla para tu experiencia, aún puedes describirla con tus propias palabras.",
    "fr": "Quand un formulaire ne prévoit aucune case pour votre expérience, vous pouvez encore la décrire dans vos propres mots."
  },
  "daily-2026-10-29-confidence-02": {
    "sourceText": "You can bring a written question into the room instead of relying on courage to remember it.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes llevar una pregunta escrita a la sala en lugar de confiar en el valor para recordarla.",
    "fr": "Vous pouvez apporter une question écrite dans la pièce plutôt que de compter sur le courage pour vous en souvenir."
  },
  "daily-2026-10-29-confidence-03": {
    "sourceText": "A preference does not need a crisis behind it to deserve consideration.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Una preferencia no necesita una crisis detrás para merecer atención.",
    "fr": "Une préférence n’a pas besoin d’une crise derrière elle pour mériter d’être prise en compte."
  },
  "daily-2026-10-29-confidence-04": {
    "sourceText": "Your work can be useful even when you are the newest person at the table.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu trabajo puede ser útil aunque seas la persona que acaba de llegar a la mesa.",
    "fr": "Votre travail peut être utile même si vous êtes la personne qui vient d’arriver à la table."
  },
  "daily-2026-10-29-confidence-05": {
    "sourceText": "Pause before explaining away the part of the result you helped make.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Haz una pausa antes de restar valor a la parte del resultado que ayudaste a crear.",
    "fr": "Faites une pause avant de minimiser la part du résultat que vous avez aidé à créer."
  },
  "daily-2026-10-29-confidence-06": {
    "sourceText": "You can ask who will use your work before agreeing to how it should look.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes preguntar quién usará tu trabajo antes de acordar qué aspecto debe tener.",
    "fr": "Vous pouvez demander qui utilisera votre travail avant de convenir de son apparence."
  },
  "daily-2026-10-29-confidence-07": {
    "sourceText": "Let the way you treat yourself after speaking count as part of being heard.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que la forma en que te tratas después de hablar cuente como parte de sentirte escuchado.",
    "fr": "Laissez la façon dont vous vous traitez après avoir parlé compter comme une part du fait d’être entendu."
  },
  "daily-2026-10-29-confidence-08": {
    "sourceText": "A clear \"I need to check\" can be more confident than an answer you do not trust.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Un claro «Necesito comprobarlo» puede mostrar más confianza que una respuesta en la que no confías.",
    "fr": "Un clair « Je dois vérifier » peut exprimer plus de confiance qu’une réponse dont vous doutez."
  },
  "daily-2026-10-29-confidence-09": {
    "sourceText": "You can take your ordinary speaking voice to an important conversation.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes llevar tu voz habitual a una conversación importante.",
    "fr": "Vous pouvez apporter votre voix habituelle à une conversation importante."
  },
  "daily-2026-10-29-confidence-10": {
    "sourceText": "Your invitation can be simple; you do not have to make yourself impressive before reaching out.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu invitación puede ser sencilla; no tienes que resultar impresionante antes de acercarte a alguien.",
    "fr": "Votre invitation peut être simple ; vous n’avez pas à impressionner avant d’aller vers quelqu’un."
  },
  "daily-2026-10-29-focus-01": {
    "sourceText": "Put the document you need next where your future hand will reach first.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja el próximo documento que necesitas donde tu mano lo buscará primero.",
    "fr": "Placez le prochain document nécessaire là où votre main ira le chercher en premier."
  },
  "daily-2026-10-29-focus-02": {
    "sourceText": "Before sorting the whole pile, decide what belongs in the next ten minutes.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Antes de ordenar toda la pila, decide qué corresponde a los próximos diez minutos.",
    "fr": "Avant de trier toute la pile, décidez de ce qui relève des dix prochaines minutes."
  },
  "daily-2026-10-29-focus-03": {
    "sourceText": "Give a complicated task a visible stopping point before you begin it.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale a una tarea complicada un punto de parada visible antes de empezarla.",
    "fr": "Donnez à une tâche compliquée un point d’arrêt visible avant de la commencer."
  },
  "daily-2026-10-29-focus-04": {
    "sourceText": "If two requests compete, write down the choice instead of carrying both as an argument in your head.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Si dos peticiones compiten, escribe la elección en lugar de llevar ambas como una discusión en la cabeza.",
    "fr": "Si deux demandes se font concurrence, écrivez le choix plutôt que de les porter comme une dispute dans votre tête."
  },
  "daily-2026-10-29-focus-05": {
    "sourceText": "Close the reference you have finished using; leave space for the one you still need.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Cierra la referencia que ya usaste y deja espacio para la que aún necesitas.",
    "fr": "Fermez la référence que vous avez fini d’utiliser ; laissez de la place à celle dont vous avez encore besoin."
  },
  "daily-2026-10-29-focus-06": {
    "sourceText": "A short note about where you stopped can make the next start less demanding.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Una nota breve sobre dónde paraste puede hacer menos exigente el próximo comienzo.",
    "fr": "Une courte note sur l’endroit où vous vous êtes arrêté peut rendre la prochaine reprise moins exigeante."
  },
  "daily-2026-10-29-focus-07": {
    "sourceText": "Choose the question this work is meant to answer before polishing its appearance.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Elige la pregunta que este trabajo debe responder antes de pulir su apariencia.",
    "fr": "Choisissez la question à laquelle ce travail doit répondre avant d’en soigner l’apparence."
  },
  "daily-2026-10-29-focus-08": {
    "sourceText": "When an idea interrupts, park it in a margin and return to the sentence in front of you.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando una idea interrumpa, apárcala en el margen y vuelve a la frase que tienes delante.",
    "fr": "Quand une idée vous interrompt, déposez-la dans la marge et revenez à la phrase devant vous."
  },
  "daily-2026-10-29-focus-09": {
    "sourceText": "You can leave a useful tool ready without planning the entire project tonight.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar preparada una herramienta útil sin planificar todo el proyecto esta noche.",
    "fr": "Vous pouvez laisser un outil utile prêt sans planifier tout le projet ce soir."
  },
  "daily-2026-10-29-focus-10": {
    "sourceText": "Check whether the next click serves your task or merely postpones it.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Comprueba si el próximo clic sirve a tu tarea o solo la aplaza.",
    "fr": "Vérifiez si le prochain clic sert votre tâche ou la repousse simplement."
  },
  "daily-2026-10-29-resilience-01": {
    "sourceText": "If a plan breaks at the handoff, repair the handoff before replacing the whole plan.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Si un plan falla en el relevo, arregla el relevo antes de sustituir todo el plan.",
    "fr": "Si un plan échoue au moment du relais, réparez le relais avant de remplacer tout le plan."
  },
  "daily-2026-10-29-resilience-02": {
    "sourceText": "An unanswered message leaves room for several explanations; you do not have to choose the harshest one.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Un mensaje sin respuesta admite varias explicaciones; no tienes que elegir la más dura.",
    "fr": "Un message sans réponse laisse place à plusieurs explications ; vous n’avez pas à choisir la plus dure."
  },
  "daily-2026-10-29-resilience-03": {
    "sourceText": "After an awkward attempt, keep the useful detail and let the imagined audience go home.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Después de un intento torpe, conserva el detalle útil y deja que el público imaginario vuelva a casa.",
    "fr": "Après un essai maladroit, gardez le détail utile et laissez le public imaginaire rentrer chez lui."
  },
  "daily-2026-10-29-resilience-04": {
    "sourceText": "You can mark a difficult day as difficult without making it evidence against your future.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes reconocer que un día fue difícil sin convertirlo en una prueba contra tu futuro.",
    "fr": "Vous pouvez reconnaître une journée difficile sans en faire une preuve contre votre avenir."
  },
  "daily-2026-10-29-resilience-05": {
    "sourceText": "A revised route can still take the care you packed for the original journey.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Un camino revisado puede llevar consigo el cuidado que preparaste para el viaje original.",
    "fr": "Un itinéraire modifié peut encore emporter l’attention que vous aviez préparée pour le voyage d’origine."
  },
  "daily-2026-10-29-resilience-06": {
    "sourceText": "When the result surprises you, begin with what actually happened rather than what it seems to say about you.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando el resultado te sorprenda, empieza por lo que pasó de verdad y no por lo que parece decir de ti.",
    "fr": "Quand le résultat vous surprend, commencez par ce qui s’est réellement passé plutôt que par ce que cela semble dire de vous."
  },
  "daily-2026-10-29-resilience-07": {
    "sourceText": "Keep one familiar part of a routine while you work out what must change.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Conserva una parte familiar de la rutina mientras averiguas qué debe cambiar.",
    "fr": "Gardez une partie familière de la routine pendant que vous cherchez ce qui doit changer."
  },
  "daily-2026-10-29-resilience-08": {
    "sourceText": "You may need a different helper for a different stage; asking again is allowed.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Puede que necesites otra persona que te ayude en otra etapa; puedes volver a pedir ayuda.",
    "fr": "Vous aurez peut-être besoin d’une autre personne pour une autre étape ; vous avez le droit de demander à nouveau."
  },
  "daily-2026-10-29-resilience-09": {
    "sourceText": "If a promise no longer fits, an honest update can be a way of continuing with care.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Si una promesa ya no encaja, una actualización sincera puede ser una forma de seguir cuidando.",
    "fr": "Si une promesse ne convient plus, une mise au point honnête peut être une façon de continuer avec attention."
  },
  "daily-2026-10-29-resilience-10": {
    "sourceText": "An attempt that taught you where the snag is has left you something usable.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Un intento que te enseñó dónde está el atasco te ha dejado algo útil.",
    "fr": "Un essai qui vous a montré où se trouve l’accroc vous a laissé quelque chose d’utilisable."
  },
  "daily-2026-10-29-growth-01": {
    "sourceText": "A plant cutting can grow roots before it grows another leaf; look for progress in more than one place.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Un esqueje puede echar raíces antes de que salga otra hoja; busca el progreso en más de un lugar.",
    "fr": "Une bouture peut faire des racines avant de produire une autre feuille ; cherchez les progrès à plusieurs endroits."
  },
  "daily-2026-10-29-growth-02": {
    "sourceText": "When you learn a new term, find one ordinary example you could point to.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando aprendas un término nuevo, busca un ejemplo cotidiano que puedas señalar.",
    "fr": "Quand vous apprenez un nouveau terme, trouvez un exemple ordinaire que vous pourriez montrer."
  },
  "daily-2026-10-29-growth-03": {
    "sourceText": "Leave room in your explanation for the question someone else has not asked yet.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja espacio en tu explicación para la pregunta que otra persona aún no ha hecho.",
    "fr": "Laissez une place dans votre explication à la question qu’une autre personne n’a pas encore posée."
  },
  "daily-2026-10-29-growth-04": {
    "sourceText": "Try describing the difference between your first guess and what you now understand.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Intenta describir la diferencia entre tu primera suposición y lo que ahora comprendes.",
    "fr": "Essayez de décrire la différence entre votre première supposition et ce que vous comprenez maintenant."
  },
  "daily-2026-10-29-growth-05": {
    "sourceText": "A surprising result can earn a second look before it earns a conclusion.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Un resultado sorprendente puede merecer una segunda mirada antes de merecer una conclusión.",
    "fr": "Un résultat surprenant peut mériter un second regard avant de mériter une conclusion."
  },
  "daily-2026-10-29-growth-06": {
    "sourceText": "Ask what the tool makes easier and what it still asks you to notice.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Pregunta qué facilita la herramienta y qué te sigue pidiendo que observes.",
    "fr": "Demandez ce que l’outil facilite et ce qu’il vous demande encore de remarquer."
  },
  "daily-2026-10-29-growth-07": {
    "sourceText": "You can learn from how someone prepares, not only from what they produce.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes aprender de cómo se prepara alguien, no solo de lo que produce.",
    "fr": "Vous pouvez apprendre de la préparation d’une personne, pas seulement de ce qu’elle produit."
  },
  "daily-2026-10-29-growth-08": {
    "sourceText": "Keep the small sample that shows you which adjustment worked.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Conserva la pequeña muestra que te indica qué ajuste funcionó.",
    "fr": "Gardez le petit échantillon qui vous montre quel ajustement a fonctionné."
  },
  "daily-2026-10-29-growth-09": {
    "sourceText": "Give an unfamiliar method a fair attempt before comparing it with a habit you have practiced for years.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale una oportunidad justa a un método desconocido antes de compararlo con un hábito que llevas años practicando.",
    "fr": "Donnez une vraie chance à une méthode inconnue avant de la comparer à une habitude pratiquée depuis des années."
  },
  "daily-2026-10-29-growth-10": {
    "sourceText": "You do not have to turn every curiosity into a commitment; some questions can stay invitations.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "No tienes que convertir cada curiosidad en un compromiso; algunas preguntas pueden seguir siendo invitaciones.",
    "fr": "Vous n’avez pas à transformer chaque curiosité en engagement ; certaines questions peuvent rester des invitations."
  },
  "daily-2026-10-29-calm-01": {
    "sourceText": "The chair does not need you to use this minute efficiently.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "La silla no necesita que uses este minuto de forma eficiente.",
    "fr": "La chaise n’a pas besoin que vous utilisiez cette minute efficacement."
  },
  "daily-2026-10-29-calm-02": {
    "sourceText": "Let a cup, a window, or a familiar sound give your attention somewhere simple to land.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que una taza, una ventana o un sonido familiar le den a tu atención un lugar sencillo donde posarse.",
    "fr": "Laissez une tasse, une fenêtre ou un son familier offrir à votre attention un endroit simple où se poser."
  },
  "daily-2026-10-29-calm-03": {
    "sourceText": "You can leave one surface clear without making the whole room perfect.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes dejar una superficie despejada sin hacer perfecta toda la habitación.",
    "fr": "Vous pouvez garder une surface dégagée sans rendre toute la pièce parfaite."
  },
  "daily-2026-10-29-calm-04": {
    "sourceText": "An ordinary evening can be enough without becoming a story worth sharing.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Una noche cotidiana puede bastar sin convertirse en una historia que valga la pena compartir.",
    "fr": "Une soirée ordinaire peut suffire sans devenir une histoire qui mérite d’être partagée."
  },
  "daily-2026-10-29-calm-05": {
    "sourceText": "Set down the object in your hand before deciding what to pick up next.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja el objeto que tienes en la mano antes de decidir cuál coger después.",
    "fr": "Posez l’objet que vous tenez avant de décider de ce que vous prendrez ensuite."
  },
  "daily-2026-10-29-calm-06": {
    "sourceText": "Give yourself a moment to arrive before asking yourself to participate.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Date un momento para llegar antes de pedirte que participes.",
    "fr": "Accordez-vous un moment pour arriver avant de vous demander de participer."
  },
  "daily-2026-10-29-calm-07": {
    "sourceText": "You can enjoy the quiet part of a song without waiting for the chorus.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes disfrutar de la parte tranquila de una canción sin esperar al estribillo.",
    "fr": "Vous pouvez apprécier le passage calme d’une chanson sans attendre le refrain."
  },
  "daily-2026-10-29-calm-08": {
    "sourceText": "Leave a little distance between noticing a notification and choosing to open it.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja una pequeña distancia entre notar una notificación y elegir abrirla.",
    "fr": "Laissez un peu de distance entre remarquer une notification et choisir de l’ouvrir."
  },
  "daily-2026-10-29-calm-09": {
    "sourceText": "Noticing the light change on a wall is a complete use of a small pause.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Notar cómo cambia la luz en una pared es un uso completo de una pequeña pausa.",
    "fr": "Remarquer la lumière changer sur un mur est une façon entière d’utiliser une petite pause."
  },
  "daily-2026-10-29-calm-10": {
    "sourceText": "For this moment, you may let something be nearby without making it your responsibility.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Por este momento, puedes dejar algo cerca sin convertirlo en tu responsabilidad.",
    "fr": "Pour ce moment, vous pouvez laisser quelque chose près de vous sans en faire votre responsabilité."
  },
  "daily-2026-10-30-confidence-01": {
    "sourceText": "Your place in a conversation includes the right to finish the sentence you began.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu lugar en una conversación incluye el derecho a terminar la frase que empezaste.",
    "fr": "Dans une conversation, vous avez aussi le droit de terminer la phrase que vous avez commencée."
  },
  "daily-2026-10-30-confidence-02": {
    "sourceText": "The details you notice while helping at home belong in your picture of what you are good at.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Los detalles que notas al ayudar en casa también forman parte de lo que sabes hacer bien.",
    "fr": "Les détails que vous remarquez en aidant chez vous font aussi partie de ce que vous savez bien faire."
  },
  "daily-2026-10-30-confidence-03": {
    "sourceText": "When someone asks for your choice, an honest answer helps them know you better.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando alguien te pregunta qué eliges, una respuesta sincera le ayuda a conocerte mejor.",
    "fr": "Quand quelqu’un vous demande votre choix, une réponse franche l’aide à mieux vous connaître."
  },
  "daily-2026-10-30-confidence-04": {
    "sourceText": "Your familiar handwriting is enough for the note; the care is in what you choose to say.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Tu letra de siempre basta para la nota; el cuidado está en lo que eliges decir.",
    "fr": "Votre écriture habituelle suffit pour ce mot ; le soin est dans ce que vous choisissez de dire."
  },
  "daily-2026-10-30-confidence-05": {
    "sourceText": "You may try a role that interests you without turning it into a permanent identity.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes probar un papel que te interese sin convertirlo en una identidad permanente.",
    "fr": "Vous pouvez essayer un rôle qui vous intéresse sans en faire une identité définitive."
  },
  "daily-2026-10-30-confidence-06": {
    "sourceText": "Keep a small example of your work ready for the moment you are asked about it.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Ten a mano una pequeña muestra de tu trabajo para cuando te pregunten por él.",
    "fr": "Gardez un petit exemple de votre travail à portée de main pour le moment où l’on vous en parlera."
  },
  "daily-2026-10-30-confidence-07": {
    "sourceText": "Being proud of a careful decision does not require pretending it was easy.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Sentir orgullo por una decisión meditada no exige fingir que fue fácil.",
    "fr": "La fierté d’une décision réfléchie n’oblige pas à prétendre qu’elle a été facile."
  },
  "daily-2026-10-30-confidence-08": {
    "sourceText": "Say what you contributed with the same accuracy you would use for someone else.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Describe tu contribución con la misma precisión que usarías para describir la de otra persona.",
    "fr": "Décrivez votre contribution avec la même justesse que vous emploieriez pour celle de quelqu’un d’autre."
  },
  "daily-2026-10-30-confidence-09": {
    "sourceText": "When you introduce two people, include yourself in the circle afterward.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando presentes a dos personas, inclúyete después en el círculo.",
    "fr": "Quand vous présentez deux personnes, gardez ensuite votre place dans le cercle."
  },
  "daily-2026-10-30-confidence-10": {
    "sourceText": "The version of you who needs to check the directions is welcome on the walk.",
    "sourceCategory": "Confidence",
    "sourceAuthor": "A Motive reminder",
    "es": "La versión de ti que necesita consultar las indicaciones también es bienvenida en el paseo.",
    "fr": "La personne que vous êtes, même lorsqu’elle doit vérifier l’itinéraire, a sa place dans la promenade."
  },
  "daily-2026-10-30-focus-01": {
    "sourceText": "Label the test version clearly so you can experiment without confusing it with the finished file.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Identifica claramente la versión de prueba para experimentar sin confundirla con el archivo terminado.",
    "fr": "Identifiez clairement la version d’essai pour expérimenter sans la confondre avec le fichier terminé."
  },
  "daily-2026-10-30-focus-02": {
    "sourceText": "At the start of a shared task, agree on who is waiting for whose reply.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Al empezar una tarea compartida, acuerden quién espera la respuesta de quién.",
    "fr": "Au début d’une tâche commune, mettez-vous d’accord sur qui attend la réponse de qui."
  },
  "daily-2026-10-30-focus-03": {
    "sourceText": "Give each open question a place to wait so it does not have to occupy your attention.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Dale a cada pregunta pendiente un lugar donde esperar para que no ocupe toda tu atención.",
    "fr": "Donnez à chaque question ouverte un endroit où attendre pour qu’elle n’occupe pas votre attention."
  },
  "daily-2026-10-30-focus-04": {
    "sourceText": "Clear a working space wide enough for the task you have actually chosen.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Despeja un espacio de trabajo suficiente para la tarea que realmente elegiste.",
    "fr": "Dégagez un espace de travail assez large pour la tâche que vous avez réellement choisie."
  },
  "daily-2026-10-30-focus-05": {
    "sourceText": "After finding an answer, close the search and put that answer to use.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Después de encontrar una respuesta, cierra la búsqueda y ponla en práctica.",
    "fr": "Après avoir trouvé une réponse, fermez la recherche et mettez cette réponse à profit."
  },
  "daily-2026-10-30-focus-06": {
    "sourceText": "When editing, read once for meaning and once for small errors; each pass can have its own job.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Al revisar un texto, haz una lectura para el sentido y otra para los pequeños errores; cada pasada puede tener su función.",
    "fr": "En relisant un texte, faites un passage pour le sens et un autre pour les petites erreurs ; chacun peut avoir son rôle."
  },
  "daily-2026-10-30-focus-07": {
    "sourceText": "Finish the instruction you are following before collecting three alternatives.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Termina de seguir la instrucción actual antes de reunir tres alternativas.",
    "fr": "Allez au bout de la consigne que vous suivez avant de rassembler trois autres possibilités."
  },
  "daily-2026-10-30-focus-08": {
    "sourceText": "Write the unit beside the number so the next decision starts with clear information.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Escribe la unidad junto al número para que la próxima decisión parta de información clara.",
    "fr": "Écrivez l’unité à côté du nombre pour que la prochaine décision parte d’une information claire."
  },
  "daily-2026-10-30-focus-09": {
    "sourceText": "A few minutes spent tying your shoelaces belong to the walk, too.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Los minutos que dedicas a atarte los cordones también forman parte del paseo.",
    "fr": "Les quelques minutes passées à nouer vos lacets font aussi partie de la promenade."
  },
  "daily-2026-10-30-focus-10": {
    "sourceText": "Return to the paragraph that needs your attention, even if the rest of the document is unfinished.",
    "sourceCategory": "Focus",
    "sourceAuthor": "A Motive reminder",
    "es": "Vuelve al párrafo que necesita tu atención, aunque el resto del documento esté sin terminar.",
    "fr": "Revenez au paragraphe qui demande votre attention, même si le reste du document est inachevé."
  },
  "daily-2026-10-30-resilience-01": {
    "sourceText": "If the handle breaks, carrying the box differently is still a way to bring it home.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Si se rompe el asa, llevar la caja de otra manera sigue siendo una forma de traerla a casa.",
    "fr": "Si la poignée casse, porter la boîte autrement reste une façon de la ramener à la maison."
  },
  "daily-2026-10-30-resilience-02": {
    "sourceText": "A missing part can put the repair on hold without making the rest of your preparation pointless.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Una pieza que falta puede dejar la reparación en pausa sin volver inútil el resto de tu preparación.",
    "fr": "Une pièce manquante peut mettre la réparation en attente sans rendre le reste de votre préparation inutile."
  },
  "daily-2026-10-30-resilience-03": {
    "sourceText": "Tell a trusted person which part is hard to arrange, rather than leaving them to guess.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuéntale a alguien de confianza qué parte es difícil de organizar, en lugar de dejarle adivinar.",
    "fr": "Dites à une personne de confiance quelle partie est difficile à organiser plutôt que de la laisser deviner."
  },
  "daily-2026-10-30-resilience-04": {
    "sourceText": "When plans change in a group, you may ask for the new arrangement to be said plainly.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Cuando cambian los planes de un grupo, puedes pedir que se explique claramente el nuevo acuerdo.",
    "fr": "Quand les plans d’un groupe changent, vous pouvez demander que la nouvelle organisation soit expliquée clairement."
  },
  "daily-2026-10-30-resilience-05": {
    "sourceText": "The shoes that got muddy can be cleaned; the afternoon does not have to be written off.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Los zapatos que se llenaron de barro se pueden limpiar; no hace falta dar por perdida la tarde.",
    "fr": "Les chaussures pleines de boue peuvent être nettoyées ; l’après-midi n’a pas à être considérée comme perdue."
  },
  "daily-2026-10-30-resilience-06": {
    "sourceText": "Write down what happened while it is fresh; you can decide what it means after you have had some distance.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Anota lo que ocurrió mientras lo tienes fresco; puedes decidir qué significa después de tomar un poco de distancia.",
    "fr": "Notez ce qui s’est passé tant que c’est frais ; vous pourrez en chercher le sens après avoir pris un peu de recul."
  },
  "daily-2026-10-30-resilience-07": {
    "sourceText": "Reassembling a scattered week can begin with checking which promises still need an answer.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Reorganizar una semana dispersa puede empezar por revisar qué compromisos aún necesitan una respuesta.",
    "fr": "Remettre de l’ordre dans une semaine éparpillée peut commencer par vérifier quels engagements attendent encore une réponse."
  },
  "daily-2026-10-30-resilience-08": {
    "sourceText": "A delay can change the order of your day without erasing everything you intended.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Un retraso puede cambiar el orden del día sin borrar todo lo que tenías previsto.",
    "fr": "Un retard peut changer l’ordre de votre journée sans effacer tout ce que vous aviez prévu."
  },
  "daily-2026-10-30-resilience-09": {
    "sourceText": "Being able to name a limit gives your next plan something solid to work with.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Poder nombrar un límite le da a tu próximo plan una base concreta.",
    "fr": "Pouvoir nommer une limite donne à votre prochain plan une base solide."
  },
  "daily-2026-10-30-resilience-10": {
    "sourceText": "Loosen a knot before pulling harder; a difficult moment may need a different kind of attention.",
    "sourceCategory": "Resilience",
    "sourceAuthor": "A Motive reminder",
    "es": "Afloja un nudo antes de tirar más fuerte; un momento difícil quizá necesite otra forma de atención.",
    "fr": "Desserrez un nœud avant de tirer plus fort ; un moment difficile a peut-être besoin d’une autre forme d’attention."
  },
  "daily-2026-10-30-growth-01": {
    "sourceText": "Learn the name of a tool you have used for years; familiarity can still hold a discovery.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Aprende el nombre de una herramienta que llevas años usando; lo familiar aún puede guardar un descubrimiento.",
    "fr": "Apprenez le nom d’un outil que vous utilisez depuis des années ; ce qui est familier peut encore réserver une découverte."
  },
  "daily-2026-10-30-growth-02": {
    "sourceText": "Look for the assumption inside an instruction you have always followed.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Busca la suposición que hay dentro de una instrucción que siempre has seguido.",
    "fr": "Cherchez ce qu’une consigne que vous suivez depuis toujours tient pour acquis."
  },
  "daily-2026-10-30-growth-03": {
    "sourceText": "Let one unfamiliar word lead you to a question instead of a quick guess.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja que una palabra desconocida te lleve a una pregunta en lugar de a una suposición rápida.",
    "fr": "Laissez un mot inconnu vous mener à une question plutôt qu’à une supposition rapide."
  },
  "daily-2026-10-30-growth-04": {
    "sourceText": "Bring two examples to a lesson: one that worked and one you cannot yet explain.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Lleva dos ejemplos a una clase: uno que funcionó y otro que todavía no puedes explicar.",
    "fr": "Apportez deux exemples à un cours : un qui a fonctionné et un que vous ne pouvez pas encore expliquer."
  },
  "daily-2026-10-30-growth-05": {
    "sourceText": "Watching how someone corrects a mistake can teach you more than seeing their finished work.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Observar cómo alguien corrige un error puede enseñarte más que ver su trabajo terminado.",
    "fr": "Observer comment quelqu’un corrige une erreur peut vous apprendre davantage que voir son travail terminé."
  },
  "daily-2026-10-30-growth-06": {
    "sourceText": "Make a sketch of a process you usually describe in words and see what was missing.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Dibuja un esquema de un proceso que sueles describir con palabras y observa qué faltaba.",
    "fr": "Faites un croquis d’un processus que vous décrivez d’habitude avec des mots et voyez ce qui manquait."
  },
  "daily-2026-10-30-growth-07": {
    "sourceText": "Share an unfinished observation with someone who enjoys wondering alongside you.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Comparte una observación aún incompleta con alguien a quien le guste hacerse preguntas contigo.",
    "fr": "Partagez une observation encore incomplète avec quelqu’un qui aime s’interroger à vos côtés."
  },
  "daily-2026-10-30-growth-08": {
    "sourceText": "Try remembering how you solved a problem before searching for an entirely new method.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Intenta recordar cómo resolviste un problema antes de buscar un método completamente nuevo.",
    "fr": "Essayez de vous rappeler comment vous avez résolu un problème avant de chercher une méthode entièrement nouvelle."
  },
  "daily-2026-10-30-growth-09": {
    "sourceText": "The skill you use to help a beginner may be one you forgot you had learned.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "La habilidad que usas para ayudar a alguien que empieza quizá sea una que olvidaste haber aprendido.",
    "fr": "La compétence dont vous vous servez pour aider une personne qui débute est peut-être une de celles que vous aviez oublié avoir apprises."
  },
  "daily-2026-10-30-growth-10": {
    "sourceText": "Keep the question that survived the lesson; it may be the most useful thing you take home.",
    "sourceCategory": "Growth",
    "sourceAuthor": "A Motive reminder",
    "es": "Conserva la pregunta que quedó después de la lección; quizá sea lo más útil que te llevas a casa.",
    "fr": "Gardez la question qui reste après le cours ; c’est peut-être ce que vous rapportez de plus utile."
  },
  "daily-2026-10-30-calm-01": {
    "sourceText": "You may choose the seat with the comfortable back instead of the best view.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes elegir el asiento con respaldo cómodo en lugar del que tiene la mejor vista.",
    "fr": "Vous pouvez choisir le siège au dossier confortable plutôt que celui qui offre la meilleure vue."
  },
  "daily-2026-10-30-calm-02": {
    "sourceText": "Your shoelaces can be tied without rehearsing the whole day at the doorway.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Puedes atarte los cordones sin repasar todo el día en la puerta.",
    "fr": "Vous pouvez nouer vos lacets sans répéter toute la journée dans votre tête, sur le pas de la porte."
  },
  "daily-2026-10-30-calm-03": {
    "sourceText": "Notice the warmth left in a towel before folding it into the cupboard.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Nota el calor que queda en una toalla antes de doblarla y guardarla.",
    "fr": "Remarquez la chaleur qui reste dans une serviette avant de la plier et de la ranger."
  },
  "daily-2026-10-30-calm-04": {
    "sourceText": "Try letting a pleasant smell stay unnamed for a moment.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Prueba a dejar un aroma agradable sin ponerle nombre durante un momento.",
    "fr": "Accordez un instant à une odeur agréable sans chercher à la nommer."
  },
  "daily-2026-10-30-calm-05": {
    "sourceText": "An empty patch of the table may remain empty for a while.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Un espacio vacío de la mesa puede seguir vacío un rato.",
    "fr": "Un espace libre sur la table peut rester libre un moment."
  },
  "daily-2026-10-30-calm-06": {
    "sourceText": "Watch one ripple reach the edge of a bowl and disappear.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Observa cómo una onda llega al borde de un cuenco y desaparece.",
    "fr": "Regardez une ondulation atteindre le bord d’un bol, puis disparaître."
  },
  "daily-2026-10-30-calm-07": {
    "sourceText": "Set the book down with a bookmark; you do not need to hold its place in your mind.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Deja el libro con un marcapáginas; no necesitas recordar por dónde ibas.",
    "fr": "Posez le livre avec un marque-page ; vous n’avez pas besoin de garder la page en mémoire."
  },
  "daily-2026-10-30-calm-08": {
    "sourceText": "Take the cushion you keep saving for a visitor and use it yourself.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Usa tú ese cojín que siempre reservas para una visita.",
    "fr": "Prenez le coussin que vous gardez toujours pour les invités et utilisez-le pour vous."
  },
  "daily-2026-10-30-calm-09": {
    "sourceText": "Your hands can stay empty during the short walk from one room to another.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "Tus manos pueden ir vacías en el corto trayecto de una habitación a otra.",
    "fr": "Vos mains peuvent rester vides pendant le court trajet d’une pièce à une autre."
  },
  "daily-2026-10-30-calm-10": {
    "sourceText": "The quietest corner of a gathering is still a place to belong.",
    "sourceCategory": "Calm",
    "sourceAuthor": "A Motive reminder",
    "es": "El rincón más tranquilo de una reunión también es un lugar donde pertenecer.",
    "fr": "Le coin le plus calme d’une réunion est aussi un endroit où vous avez votre place."
  }
};
if(typeof module!=='undefined')module.exports=motiveQuoteLocales;
