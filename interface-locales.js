'use strict';
// Reviewed built-in control text only. Never pass personal records to these helpers.
const motiveInterfaceLocales={
  "Quotes": {
    "es": "Citas",
    "fr": "Citations"
  },
  "Saved": {
    "es": "Guardadas",
    "fr": "Enregistrées"
  },
  "Wellbeing": {
    "es": "Bienestar",
    "fr": "Bien-être"
  },
  "Practice": {
    "es": "Práctica",
    "fr": "Pratique"
  },
  "Space": {
    "es": "Mi espacio",
    "fr": "Mon espace"
  },
  "Main navigation": {
    "es": "Navegación principal",
    "fr": "Navigation principale"
  },
  "Motive areas": {
    "es": "Áreas de Motive",
    "fr": "Espaces de Motive"
  },
  "Search Motive": {
    "es": "Buscar en Motive",
    "fr": "Rechercher dans Motive"
  },
  "Personalize your name": {
    "es": "Personalizar tu nombre",
    "fr": "Personnaliser votre nom"
  },
  "Your space ⚙": {
    "es": "Tu espacio ⚙",
    "fr": "Votre espace ⚙"
  },
  "A little of everything": {
    "es": "Un poco de todo",
    "fr": "Un peu de tout"
  },
  "Confidence": {
    "es": "Confianza",
    "fr": "Confiance"
  },
  "Focus & discipline": {
    "es": "Enfoque y disciplina",
    "fr": "Attention et discipline"
  },
  "Keep going": {
    "es": "Seguir adelante",
    "fr": "Continuer"
  },
  "Personal growth": {
    "es": "Crecimiento personal",
    "fr": "Évolution personnelle"
  },
  "A moment of calm": {
    "es": "Un momento de calma",
    "fr": "Un moment de calme"
  },
  "YOUR DAILY REMINDER": {
    "es": "TU RECORDATORIO DIARIO",
    "fr": "VOTRE RAPPEL DU JOUR"
  },
  "CONFIDENCE": {
    "es": "CONFIANZA",
    "fr": "CONFIANCE"
  },
  "FOCUS": {
    "es": "ENFOQUE",
    "fr": "ATTENTION"
  },
  "RESILIENCE": {
    "es": "RESILIENCIA",
    "fr": "RÉSILIENCE"
  },
  "GROWTH": {
    "es": "CRECIMIENTO",
    "fr": "ÉVOLUTION"
  },
  "CALM": {
    "es": "CALMA",
    "fr": "CALME"
  },
  "Save quote": {
    "es": "Guardar cita",
    "fr": "Enregistrer la citation"
  },
  "Another perspective": {
    "es": "Otra perspectiva",
    "fr": "Un autre regard"
  },
  "Copy quote": {
    "es": "Copiar cita",
    "fr": "Copier la citation"
  },
  "↗ Share quote": {
    "es": "↗ Compartir cita",
    "fr": "↗ Partager la citation"
  },
  "↓ Quote image": {
    "es": "↓ Imagen de la cita",
    "fr": "↓ Image de la citation"
  },
  "↓ Phone wallpaper": {
    "es": "↓ Fondo para el teléfono",
    "fr": "↓ Fond d’écran du téléphone"
  },
  "↶ Recently seen": {
    "es": "↶ Vistas recientemente",
    "fr": "↶ Vues récemment"
  },
  "Hide this quote": {
    "es": "Ocultar esta cita",
    "fr": "Masquer cette citation"
  },
  "Undo hide": {
    "es": "Deshacer ocultación",
    "fr": "Annuler le masquage"
  },
  "▧ Photo on": {
    "es": "▧ Foto activada",
    "fr": "▧ Photo activée"
  },
  "▧ Photo off": {
    "es": "▧ Foto desactivada",
    "fr": "▧ Photo désactivée"
  },
  "↻ Change picture": {
    "es": "↻ Cambiar imagen",
    "fr": "↻ Changer l’image"
  },
  "Match quote": {
    "es": "Ajustar a la cita",
    "fr": "Associer à la citation"
  },
  "＋ Collection": {
    "es": "＋ Colección",
    "fr": "＋ Collection"
  },
  "≈ Take a breath": {
    "es": "≈ Tomar un respiro",
    "fr": "≈ Faire une pause"
  },
  "Retry photo": {
    "es": "Reintentar foto",
    "fr": "Réessayer la photo"
  },
  "Use plain background": {
    "es": "Usar fondo liso",
    "fr": "Utiliser un fond uni"
  },
  "▶ Read aloud": {
    "es": "▶ Leer en voz alta",
    "fr": "▶ Lire à voix haute"
  },
  "■ Stop reading": {
    "es": "■ Detener lectura",
    "fr": "■ Arrêter la lecture"
  },
  "Stop reading": {
    "es": "Detener lectura",
    "fr": "Arrêter la lecture"
  },
  "Try automatic voice": {
    "es": "Probar voz automática",
    "fr": "Essayer la voix automatique"
  },
  "Sound help": {
    "es": "Ayuda con el sonido",
    "fr": "Aide pour le son"
  },
  "Voice options": {
    "es": "Opciones de voz",
    "fr": "Options de voix"
  },
  "Choose your reading voice.": {
    "es": "Elige tu voz de lectura.",
    "fr": "Choisissez votre voix de lecture."
  },
  "Close voice options": {
    "es": "Cerrar opciones de voz",
    "fr": "Fermer les options de voix"
  },
  "Voice for English quotes": {
    "es": "Voz para las citas en inglés",
    "fr": "Voix pour les citations en anglais"
  },
  "Reading speed": {
    "es": "Velocidad de lectura",
    "fr": "Vitesse de lecture"
  },
  "Voice tone": {
    "es": "Tono de voz",
    "fr": "Tonalité de la voix"
  },
  "Natural": {
    "es": "Natural",
    "fr": "Naturelle"
  },
  "Lower": {
    "es": "Más grave",
    "fr": "Plus grave"
  },
  "Higher": {
    "es": "Más aguda",
    "fr": "Plus aiguë"
  },
  "Preview voice": {
    "es": "Probar voz",
    "fr": "Écouter la voix"
  },
  "Read this quote": {
    "es": "Leer esta cita",
    "fr": "Lire cette citation"
  },
  "Stop": {
    "es": "Detener",
    "fr": "Arrêter"
  },
  "Reset voice": {
    "es": "Restablecer voz",
    "fr": "Réinitialiser la voix"
  },
  "Test speaker": {
    "es": "Probar altavoz",
    "fr": "Tester le haut-parleur"
  },
  "Automatic · device default": {
    "es": "Automática · predeterminada del dispositivo",
    "fr": "Automatique · réglage de l’appareil"
  },
  "Use regular voice choice / device default": {
    "es": "Usar voz habitual o predeterminada",
    "fr": "Utiliser la voix habituelle ou celle de l’appareil"
  },
  "Voice language": {
    "es": "Idioma de la voz",
    "fr": "Langue de la voix"
  },
  "Available device voice": {
    "es": "Voz disponible del dispositivo",
    "fr": "Voix disponible sur l’appareil"
  },
  "Language for available Motive content": {
    "es": "Idioma del contenido disponible de Motive",
    "fr": "Langue du contenu Motive disponible"
  },
  "Recording tools & voice preferences": {
    "es": "Herramientas de grabación y opciones de voz",
    "fr": "Outils d’enregistrement et préférences vocales"
  },
  "Audio stopped.": {
    "es": "Audio detenido.",
    "fr": "Audio arrêté."
  },
  "Reading aloud…": {
    "es": "Leyendo en voz alta…",
    "fr": "Lecture à voix haute…"
  },
  "Reading with the automatic voice…": {
    "es": "Leyendo con la voz automática…",
    "fr": "Lecture avec la voix automatique…"
  },
  "Trying the automatic voice…": {
    "es": "Probando la voz automática…",
    "fr": "Essai de la voix automatique…"
  },
  "Preparing to read…": {
    "es": "Preparando la lectura…",
    "fr": "Préparation de la lecture…"
  },
  "Finished reading.": {
    "es": "Lectura terminada.",
    "fr": "Lecture terminée."
  },
  "Read aloud is unavailable here. Open Motive in Safari or Chrome.": {
    "es": "La lectura en voz alta no está disponible aquí. Abre Motive en Safari o Chrome.",
    "fr": "La lecture à voix haute est indisponible ici. Ouvrez Motive dans Safari ou Chrome."
  },
  "Read aloud is unavailable in this browser. Try opening Motive in Safari or Chrome.": {
    "es": "La lectura en voz alta no está disponible en este navegador. Prueba a abrir Motive en Safari o Chrome.",
    "fr": "La lecture à voix haute est indisponible dans ce navigateur. Essayez d’ouvrir Motive dans Safari ou Chrome."
  },
  "Your saved voice is unavailable on this device. Automatic voice will be used.": {
    "es": "La voz guardada no está disponible en este dispositivo. Se usará la voz automática.",
    "fr": "Votre voix enregistrée est indisponible sur cet appareil. La voix automatique sera utilisée."
  },
  "Your device has not listed English voices yet. Automatic reading is still available; reopen this panel after voices load.": {
    "es": "El dispositivo aún no ha mostrado voces en inglés. La lectura automática sigue disponible; vuelve a abrir este panel cuando carguen las voces.",
    "fr": "L’appareil n’a pas encore indiqué de voix en anglais. La lecture automatique reste disponible ; rouvrez ce panneau après leur chargement."
  },
  "Voice did not start. Tap Read aloud again, or use Voice options > Reset voice. On iPhone, open Motive in Safari and check media volume.": {
    "es": "La voz no se inició. Pulsa Leer en voz alta de nuevo o usa Opciones de voz > Restablecer voz. En iPhone, abre Motive en Safari y revisa el volumen multimedia.",
    "fr": "La voix n’a pas démarré. Touchez de nouveau Lire à voix haute ou Options de voix > Réinitialiser la voix. Sur iPhone, ouvrez Motive dans Safari et vérifiez le volume multimédia."
  },
  "Tap Read aloud again to allow speech. If this browser stays silent, open Motive in Safari.": {
    "es": "Pulsa Leer en voz alta de nuevo para permitir la lectura. Si este navegador sigue sin sonido, abre Motive en Safari.",
    "fr": "Touchez de nouveau Lire à voix haute pour autoriser la lecture. Si ce navigateur reste silencieux, ouvrez Motive dans Safari."
  },
  "This voice could not play. Use Voice options > Reset voice and try again.": {
    "es": "Esta voz no pudo reproducirse. Usa Opciones de voz > Restablecer voz y vuelve a intentarlo.",
    "fr": "Cette voix n’a pas pu être lue. Utilisez Options de voix > Réinitialiser la voix et réessayez."
  },
  "Your device could not prepare speech. Open Sound help and try again.": {
    "es": "El dispositivo no pudo preparar la lectura. Abre Ayuda con el sonido y vuelve a intentarlo.",
    "fr": "L’appareil n’a pas pu préparer la lecture. Ouvrez Aide pour le son et réessayez."
  },
  "Your device could not start audio. Tap Try automatic voice, or open Sound help.": {
    "es": "El dispositivo no pudo iniciar el audio. Pulsa Probar voz automática o abre Ayuda con el sonido.",
    "fr": "L’appareil n’a pas pu démarrer l’audio. Touchez Essayer la voix automatique ou ouvrez Aide pour le son."
  },
  "Voice reset. Tap Read this quote to try the automatic voice.": {
    "es": "Voz restablecida. Pulsa Leer esta cita para probar la voz automática.",
    "fr": "Voix réinitialisée. Touchez Lire cette citation pour essayer la voix automatique."
  },
  "Sound is not confirmed. Try automatic voice or open Sound help.": {
    "es": "El sonido no está confirmado. Prueba la voz automática o abre Ayuda con el sonido.",
    "fr": "Le son n’est pas confirmé. Essayez la voix automatique ou ouvrez Aide pour le son."
  },
  "This chooses a device voice for text already in that language. Available Motive translations are controlled separately in Settings.": {
    "es": "Esto elige una voz del dispositivo para un texto que ya está en ese idioma. Las traducciones disponibles de Motive se eligen aparte en Ajustes.",
    "fr": "Ce réglage choisit une voix de l’appareil pour un texte déjà dans cette langue. Les traductions Motive disponibles se choisissent séparément dans Réglages."
  },
  "The English voice choice applies to English text. For Spanish/French text, use Listen > Recording tools & voice preferences. Voice availability and offline reading vary by device. Your choices stay in this browser.": {
    "es": "La voz en inglés se aplica a los textos en inglés. Para español o francés, usa Escuchar > Herramientas de grabación y opciones de voz. Las voces y la lectura sin conexión dependen del dispositivo. Tus opciones se guardan en este navegador.",
    "fr": "La voix anglaise s’applique aux textes en anglais. Pour l’espagnol ou le français, utilisez Écouter > Outils d’enregistrement et préférences vocales. Les voix et la lecture hors connexion varient selon l’appareil. Vos choix restent dans ce navigateur."
  },
  "Auto match ▾": {
    "es": "Ajuste automático ▾",
    "fr": "Association automatique ▾"
  },
  "Changes with every quote ▾": {
    "es": "Cambia con cada cita ▾",
    "fr": "Change à chaque citation ▾"
  },
  "Fixed picture ▾": {
    "es": "Imagen fija ▾",
    "fr": "Image fixe ▾"
  },
  "Background settings ▾": {
    "es": "Opciones de fondo ▾",
    "fr": "Réglages du fond ▾"
  },
  "Hear a quote in a voice and pace that feel comfortable.": {
    "es": "Escucha una cita con una voz y un ritmo cómodos.",
    "fr": "Écoutez une citation avec une voix et un rythme confortables."
  },
  "No sound?": {
    "es": "¿No hay sonido?",
    "fr": "Pas de son ?"
  },
  "Turn up media volume, check Bluetooth headphones, and tap Read aloud again. On iPhone, try the site directly in Safari if an in-app browser stays silent. Reset chooses the device’s automatic voice.": {
    "es": "Sube el volumen multimedia, revisa los auriculares Bluetooth y pulsa Leer en voz alta de nuevo. En iPhone, prueba el sitio directamente en Safari si el navegador integrado no suena. Restablecer elige la voz automática del dispositivo.",
    "fr": "Augmentez le volume multimédia, vérifiez les écouteurs Bluetooth et touchez de nouveau Lire à voix haute. Sur iPhone, essayez le site directement dans Safari si le navigateur intégré reste silencieux. Réinitialiser choisit la voix automatique de l’appareil."
  },
  "Check reading on this device": {
    "es": "Comprobar la lectura en este dispositivo",
    "fr": "Vérifier la lecture sur cet appareil"
  },
  "Turn up media volume and check where Bluetooth audio is playing. Play the test sentence, then tell us whether you heard the words. A started message alone does not confirm sound.": {
    "es": "Sube el volumen multimedia y revisa dónde se reproduce el audio Bluetooth. Reproduce la frase de prueba en inglés e indica si escuchaste las palabras. Un mensaje de inicio no confirma que haya sonido.",
    "fr": "Augmentez le volume multimédia et vérifiez où le son Bluetooth est diffusé. Lancez la phrase de test en anglais, puis indiquez si vous l’avez entendue. Un message de démarrage ne confirme pas le son."
  },
  "Read test sentence": {
    "es": "Leer frase de prueba",
    "fr": "Lire la phrase de test"
  },
  "I heard it": {
    "es": "La escuché",
    "fr": "Je l’ai entendue"
  },
  "Still silent": {
    "es": "Sigue sin sonido",
    "fr": "Toujours aucun son"
  },
  "Speaker test is unavailable in this browser.": {
    "es": "La prueba del altavoz no está disponible en este navegador.",
    "fr": "Le test du haut-parleur est indisponible dans ce navigateur."
  },
  "A short tone was requested. If you heard it, the speaker works; try Reset voice next. If not, check volume and Bluetooth.": {
    "es": "Se solicitó un tono breve. Si lo escuchaste, el altavoz funciona; prueba Restablecer voz. Si no, revisa el volumen y Bluetooth.",
    "fr": "Un bref son a été demandé. Si vous l’avez entendu, le haut-parleur fonctionne ; essayez Réinitialiser la voix. Sinon, vérifiez le volume et Bluetooth."
  },
  "Listen for: You can take one small step today. Then choose I heard it or Still silent.": {
    "es": "Escucha la frase de prueba en inglés. Después elige La escuché o Sigue sin sonido.",
    "fr": "Écoutez la phrase de test en anglais. Choisissez ensuite Je l’ai entendue ou Toujours aucun son."
  },
  "You confirmed hearing the test sentence on this device. Now try Read this quote.": {
    "es": "Confirmaste haber escuchado la frase de prueba en este dispositivo. Ahora prueba Leer esta cita.",
    "fr": "Vous avez confirmé avoir entendu la phrase de test sur cet appareil. Essayez maintenant Lire cette citation."
  },
  "Sound is not confirmed. Try Test speaker above, check media volume and Bluetooth, then Reset voice. On iPhone, open Motive directly in Safari and read the test sentence again.": {
    "es": "El sonido no está confirmado. Prueba Probar altavoz, revisa el volumen multimedia y Bluetooth, y después Restablecer voz. En iPhone, abre Motive directamente en Safari y vuelve a leer la frase de prueba.",
    "fr": "Le son n’est pas confirmé. Essayez Tester le haut-parleur, vérifiez le volume multimédia et Bluetooth, puis Réinitialiser la voix. Sur iPhone, ouvrez Motive directement dans Safari et relisez la phrase de test."
  },
  "Make room for a little inspiration.": {
    "es": "Haz espacio para un poco de inspiración.",
    "fr": "Faites une place à un peu d’inspiration."
  },
  "A little inspiration for you, {name}.": {
    "es": "Un poco de inspiración para ti, {name}.",
    "fr": "Un peu d’inspiration pour vous, {name}."
  },
  "You don’t have to have it all figured out. Just take the next step.": {
    "es": "No tienes que tenerlo todo resuelto. Da el siguiente paso.",
    "fr": "Vous n’avez pas besoin d’avoir tout compris. Faites simplement le prochain pas."
  },
  "A fresh perspective, every day": {
    "es": "Una nueva perspectiva cada día",
    "fr": "Un nouveau regard chaque jour"
  },
  "WHAT DO YOU NEED TODAY?": {
    "es": "¿QUÉ NECESITAS HOY?",
    "fr": "DE QUOI AVEZ-VOUS BESOIN AUJOURD’HUI ?"
  },
  "WORDS THAT FEEL LIKE YOU": {
    "es": "PALABRAS QUE VAN CONTIGO",
    "fr": "DES MOTS QUI VOUS RESSEMBLENT"
  },
  "Words worth coming back to.": {
    "es": "Palabras a las que vale la pena volver.",
    "fr": "Des mots à retrouver."
  },
  "Your own kind of motivation.": {
    "es": "Tu propia forma de motivarte.",
    "fr": "Votre propre façon de vous motiver."
  },
  "All your saved reminders, together in one place.": {
    "es": "Todos tus recordatorios guardados en un solo lugar.",
    "fr": "Tous vos rappels enregistrés au même endroit."
  },
  "Keep the words that matter close. Add a reminder in your own voice.": {
    "es": "Ten cerca las palabras que importan. Añade un recordatorio con tu propia voz.",
    "fr": "Gardez près de vous les mots qui comptent. Ajoutez un rappel avec vos propres mots."
  },
  "Find the words you need.": {
    "es": "Encuentra las palabras que necesitas.",
    "fr": "Trouvez les mots dont vous avez besoin."
  },
  "A reminder, in your words.": {
    "es": "Un recordatorio con tus palabras.",
    "fr": "Un rappel avec vos mots."
  },
  "Make these words yours again.": {
    "es": "Vuelve a hacer tuyas estas palabras.",
    "fr": "Réappropriez-vous ces mots."
  },
  "{count} quote": {
    "es": "{count} cita",
    "fr": "{count} citation"
  },
  "{count} quotes": {
    "es": "{count} citas",
    "fr": "{count} citations"
  },
  "Focus": {
    "es": "Enfoque",
    "fr": "Attention"
  },
  "Resilience": {
    "es": "Resiliencia",
    "fr": "Résilience"
  },
  "Growth": {
    "es": "Crecimiento",
    "fr": "Évolution"
  },
  "Calm": {
    "es": "Calma",
    "fr": "Calme"
  },
  "No matching words yet. Try another search or a different theme.": {
    "es": "No hay coincidencias. Prueba otra búsqueda o un tema diferente.",
    "fr": "Aucun résultat pour le moment. Essayez une autre recherche ou un autre thème."
  },
  "No quotes here yet. Save a quote or add your own words to begin.": {
    "es": "Todavía no hay citas aquí. Guarda una cita o añade tus palabras para empezar.",
    "fr": "Il n’y a pas encore de citations ici. Enregistrez une citation ou ajoutez vos mots pour commencer."
  },
  "Save quote: {text}": {
    "es": "Guardar cita: {text}",
    "fr": "Enregistrer la citation : {text}"
  },
  "Unsave quote: {text}": {
    "es": "Quitar de guardadas: {text}",
    "fr": "Retirer des citations enregistrées : {text}"
  },
  "Organize quote: {text}": {
    "es": "Organizar cita: {text}",
    "fr": "Organiser la citation : {text}"
  },
  "Remove quote from collection: {text}": {
    "es": "Quitar cita de la colección: {text}",
    "fr": "Retirer la citation de la collection : {text}"
  },
  "Edit personal quote: {text}": {
    "es": "Editar cita personal: {text}",
    "fr": "Modifier la citation personnelle : {text}"
  },
  "Delete personal quote: {text}": {
    "es": "Eliminar cita personal: {text}",
    "fr": "Supprimer la citation personnelle : {text}"
  },
  "＋ Add your own quote": {
    "es": "＋ Añadir tu propia cita",
    "fr": "＋ Ajouter votre citation"
  },
  "Search every quote": {
    "es": "Buscar en todas las citas",
    "fr": "Rechercher dans toutes les citations"
  },
  "Search all {count} quotes…": {
    "es": "Buscar entre {count} citas…",
    "fr": "Rechercher parmi {count} citations…"
  },
  "Choose a collection": {
    "es": "Elegir una colección",
    "fr": "Choisir une collection"
  },
  "Library quote length": {
    "es": "Longitud de las citas",
    "fr": "Longueur des citations"
  },
  "A few for today": {
    "es": "Algunas para hoy",
    "fr": "Quelques-unes pour aujourd’hui"
  },
  "All quotes": {
    "es": "Todas las citas",
    "fr": "Toutes les citations"
  },
  "Saved quotes": {
    "es": "Citas guardadas",
    "fr": "Citations enregistrées"
  },
  "My own words": {
    "es": "Mis propias palabras",
    "fr": "Mes propres mots"
  },
  "All lengths": {
    "es": "Todas las longitudes",
    "fr": "Toutes les longueurs"
  },
  "Up to 12 words": {
    "es": "Hasta 12 palabras",
    "fr": "Jusqu’à 12 mots"
  },
  "More than 12 words": {
    "es": "Más de 12 palabras",
    "fr": "Plus de 12 mots"
  },
  "Saved only": {
    "es": "Solo guardadas",
    "fr": "Enregistrées uniquement"
  },
  "Browse all →": {
    "es": "Ver todas →",
    "fr": "Tout parcourir →"
  },
  "Remove collection": {
    "es": "Eliminar colección",
    "fr": "Supprimer la collection"
  },
  "Show more quotes": {
    "es": "Mostrar más citas",
    "fr": "Afficher plus de citations"
  },
  "Your quote": {
    "es": "Tu cita",
    "fr": "Votre citation"
  },
  "What do you want to remind yourself?": {
    "es": "¿Qué quieres recordarte?",
    "fr": "Que souhaitez-vous vous rappeler ?"
  },
  "Attribution (optional)": {
    "es": "Autoría (opcional)",
    "fr": "Attribution (facultative)"
  },
  "A note to myself": {
    "es": "Una nota para mí",
    "fr": "Une note pour moi"
  },
  "What does it bring you?": {
    "es": "¿Qué te aporta?",
    "fr": "Que vous apporte-t-elle ?"
  },
  "Keep these words": {
    "es": "Guardar estas palabras",
    "fr": "Garder ces mots"
  },
  "I reviewed the similar reminder and want to keep my wording": {
    "es": "Revisé el recordatorio similar y quiero conservar mis palabras",
    "fr": "J’ai relu le rappel similaire et je souhaite conserver mes mots"
  },
  "These words are already in your library. Try a different reminder.": {
    "es": "Estas palabras ya están en tu biblioteca. Prueba otro recordatorio.",
    "fr": "Ces mots figurent déjà dans votre bibliothèque. Essayez un autre rappel."
  },
  "Add a few words for your reminder.": {
    "es": "Añade unas palabras para tu recordatorio.",
    "fr": "Ajoutez quelques mots pour votre rappel."
  },
  "This resembles a reminder already here: {text}": {
    "es": "Esto se parece a un recordatorio que ya está aquí: {text}",
    "fr": "Cela ressemble à un rappel déjà présent : {text}"
  },
  "Make this space yours.": {
    "es": "Haz tuyo este espacio.",
    "fr": "Faites de cet espace le vôtre."
  },
  "What should we call you?": {
    "es": "¿Cómo quieres que te llamemos?",
    "fr": "Comment souhaitez-vous que l’on vous appelle ?"
  },
  "Your first name": {
    "es": "Tu nombre",
    "fr": "Votre prénom"
  },
  "Save name": {
    "es": "Guardar nombre",
    "fr": "Enregistrer le prénom"
  },
  "Close": {
    "es": "Cerrar",
    "fr": "Fermer"
  },
  "Let these words go?": {
    "es": "¿Quieres dejar ir estas palabras?",
    "fr": "Laisser partir ces mots ?"
  },
  "This removes the personal quote from this browser.": {
    "es": "Esto elimina la cita personal de este navegador.",
    "fr": "Cela supprime la citation personnelle de ce navigateur."
  },
  "Keep quote": {
    "es": "Conservar cita",
    "fr": "Garder la citation"
  },
  "Delete quote": {
    "es": "Eliminar cita",
    "fr": "Supprimer la citation"
  },
  "Swipe or drag for more categories →": {
    "es": "Desliza o arrastra para ver más temas →",
    "fr": "Balayez ou faites glisser pour voir plus de thèmes →"
  },
  "← Swipe or drag to go back": {
    "es": "← Desliza o arrastra para volver",
    "fr": "← Balayez ou faites glisser pour revenir"
  },
  "← More categories →": {
    "es": "← Más temas →",
    "fr": "← Plus de thèmes →"
  },
  "{count} percent scrolled": {
    "es": "Desplazamiento: {count} por ciento",
    "fr": "Défilement : {count} pour cent"
  },
  "Scroll quote categories left or right": {
    "es": "Desplazar los temas de citas a izquierda o derecha",
    "fr": "Faire défiler les thèmes à gauche ou à droite"
  },
  "Built-in quote search uses the original English wording. Your personal words are searched as written.": {
    "es": "La búsqueda de citas incluidas usa el texto original en inglés. Tus palabras personales se buscan tal como las escribiste.",
    "fr": "La recherche des citations intégrées utilise le texte anglais d’origine. Vos mots personnels sont recherchés tels que vous les avez écrits."
  },
  "A LITTLE CHECK-IN": {
    "es": "UN PEQUEÑO MOMENTO PARA TI",
    "fr": "UN PETIT POINT"
  },
  "How are you arriving today?": {
    "es": "¿Cómo te sientes al llegar hoy?",
    "fr": "Comment vous sentez-vous en arrivant aujourd’hui ?"
  },
  "Check in ＋": {
    "es": "Cómo estoy ＋",
    "fr": "Faire le point ＋"
  },
  "Choose how you are arriving": {
    "es": "Elige cómo te sientes al llegar",
    "fr": "Choisissez comment vous vous sentez en arrivant"
  },
  "☀ A bit low": {
    "es": "☀ Un poco de desánimo",
    "fr": "☀ Un peu à plat"
  },
  "◎ Scattered": {
    "es": "◎ Con la mente dispersa",
    "fr": "◎ L’esprit dispersé"
  },
  "↗ Feeling stuck": {
    "es": "↗ Sin saber cómo avanzar",
    "fr": "↗ L’impression de stagner"
  },
  "♧ Ready to grow": {
    "es": "♧ Con ganas de aprender",
    "fr": "♧ Prêt à apprendre"
  },
  "≈ Need some calm": {
    "es": "≈ Necesito calma",
    "fr": "≈ Besoin de calme"
  },
  "A little encouragement, at your pace.": {
    "es": "Un poco de ánimo, a tu ritmo.",
    "fr": "Un peu d’encouragement, à votre rythme."
  },
  "One thing at a time is a place to start.": {
    "es": "Una cosa a la vez es un buen comienzo.",
    "fr": "Une chose à la fois, c’est un point de départ."
  },
  "Let’s look for a manageable way forward.": {
    "es": "Busquemos una forma de avanzar que puedas manejar.",
    "fr": "Cherchons une façon accessible d’avancer."
  },
  "Make a little room for curiosity.": {
    "es": "Haz un poco de espacio para la curiosidad.",
    "fr": "Faites une petite place à la curiosité."
  },
  "Nothing to prove here. Take a little space.": {
    "es": "Aquí no tienes que demostrar nada. Date un poco de espacio.",
    "fr": "Rien à prouver ici. Accordez-vous un peu d’espace."
  },
  "Choose a starting point, or go straight to your quotes.": {
    "es": "Elige un punto de partida o ve directamente a tus citas.",
    "fr": "Choisissez un point de départ, ou passez directement aux citations."
  },
  "A reason to keep showing up, in your own words.": {
    "es": "Una razón para seguir adelante, con tus propias palabras.",
    "fr": "Une raison de continuer, avec vos propres mots."
  },
  "MY WHY": {
    "es": "MI MOTIVO",
    "fr": "MA RAISON"
  },
  "Edit my why": {
    "es": "Editar mi motivo",
    "fr": "Modifier ma raison"
  },
  "Add my why": {
    "es": "Añadir mi motivo",
    "fr": "Ajouter ma raison"
  },
  "What makes it matter to you?": {
    "es": "¿Qué hace que sea importante para ti?",
    "fr": "Qu’est-ce qui rend cela important pour vous ?"
  },
  "Close personal reason": {
    "es": "Cerrar mi motivo",
    "fr": "Fermer ma raison"
  },
  "A person, a hope, or a way you want to live. Keep your own reason close.": {
    "es": "Una persona, una esperanza o una forma de vivir. Ten presente tu propio motivo.",
    "fr": "Une personne, un espoir ou une façon de vivre. Gardez votre raison près de vous."
  },
  "My why": {
    "es": "Mi motivo",
    "fr": "Ma raison"
  },
  "I’m showing up because…": {
    "es": "Sigo adelante porque…",
    "fr": "Je continue parce que…"
  },
  "Only saved in this browser and backups you download. Leave this empty to clear your reason.": {
    "es": "Solo se guarda en este navegador y en las copias que descargues. Deja este campo vacío para borrar tu motivo.",
    "fr": "Enregistré uniquement dans ce navigateur et les sauvegardes téléchargées. Laissez ce champ vide pour effacer votre raison."
  },
  "Keep my reason →": {
    "es": "Guardar mi motivo →",
    "fr": "Garder ma raison →"
  },
  "Your reason is saved on this device.": {
    "es": "Tu motivo está guardado en este dispositivo.",
    "fr": "Votre raison est enregistrée sur cet appareil."
  },
  "FROM WORDS TO A SMALL STEP": {
    "es": "DE LAS PALABRAS A UN PEQUEÑO PASO",
    "fr": "DES MOTS À UN PETIT PAS"
  },
  "Something you could try.": {
    "es": "Algo que podrías probar.",
    "fr": "Une idée à essayer."
  },
  "Use this idea": {
    "es": "Usar esta idea",
    "fr": "Utiliser cette idée"
  },
  "Another idea ↻": {
    "es": "Otra idea ↻",
    "fr": "Une autre idée ↻"
  },
  "Review your intention, then tap the arrow to save it.": {
    "es": "Revisa tu intención y toca la flecha para guardarla.",
    "fr": "Relisez votre intention, puis touchez la flèche pour l’enregistrer."
  },
  "One small thing. Just for today.": {
    "es": "Una pequeña cosa. Solo por hoy.",
    "fr": "Une petite chose. Juste pour aujourd’hui."
  },
  "Turn a little inspiration into a little action.": {
    "es": "Convierte un poco de inspiración en una pequeña acción.",
    "fr": "Transformez un peu d’inspiration en une petite action."
  },
  "Your intention for today": {
    "es": "Tu intención para hoy",
    "fr": "Votre intention pour aujourd’hui"
  },
  "Today, I’ll make time for…": {
    "es": "Hoy, dedicaré tiempo a…",
    "fr": "Aujourd’hui, je prendrai du temps pour…"
  },
  "Save today's intention": {
    "es": "Guardar la intención de hoy",
    "fr": "Enregistrer l’intention du jour"
  },
  "A small promise to yourself. Saved for today.": {
    "es": "Una pequeña promesa para ti. Guardada para hoy.",
    "fr": "Une petite promesse envers vous-même. Enregistrée pour aujourd’hui."
  },
  "Kept for this visit. Browser storage is unavailable.": {
    "es": "Se conserva durante esta visita. El almacenamiento del navegador no está disponible.",
    "fr": "Conservé pour cette visite. Le stockage du navigateur est indisponible."
  },
  "I followed through on today’s intention": {
    "es": "Cumplí mi intención de hoy",
    "fr": "J’ai concrétisé mon intention du jour"
  },
  "You made a little room for what matters.": {
    "es": "Hiciste un poco de espacio para lo que importa.",
    "fr": "Vous avez fait une petite place à ce qui compte."
  },
  "A MOMENT TO NOTICE": {
    "es": "UN MOMENTO PARA OBSERVAR",
    "fr": "UN INSTANT POUR REMARQUER"
  },
  "What do you want to carry from today?": {
    "es": "¿Qué quieres llevarte de hoy?",
    "fr": "Que souhaitez-vous retenir de cette journée ?"
  },
  "Write a reflection": {
    "es": "Escribir una reflexión",
    "fr": "Écrire une réflexion"
  },
  "Your reflection for today is saved.": {
    "es": "Tu reflexión de hoy está guardada.",
    "fr": "Votre réflexion du jour est enregistrée."
  },
  "A few words about what mattered today.": {
    "es": "Unas palabras sobre lo que importó hoy.",
    "fr": "Quelques mots sur ce qui a compté aujourd’hui."
  },
  "A few words for yourself.": {
    "es": "Unas palabras para ti.",
    "fr": "Quelques mots pour vous-même."
  },
  "Close reflection": {
    "es": "Cerrar reflexión",
    "fr": "Fermer la réflexion"
  },
  "What mattered today, or what would you like to remember?": {
    "es": "¿Qué importó hoy o qué te gustaría recordar?",
    "fr": "Qu’est-ce qui a compté aujourd’hui, ou que souhaitez-vous retenir ?"
  },
  "A small win, something I noticed, or a thought to keep…": {
    "es": "Un pequeño logro, algo que noté o un pensamiento para recordar…",
    "fr": "Une petite réussite, une observation ou une pensée à garder…"
  },
  "Private to this browser. Download a backup in Your space to keep your notes. Your latest 90 daily entries are kept.": {
    "es": "Privado en este navegador. Descarga una copia en Mi espacio para conservar tus notas. Se guardan tus últimas 90 entradas diarias.",
    "fr": "Privé dans ce navigateur. Téléchargez une sauvegarde dans Mon espace pour conserver vos notes. Les 90 dernières entrées quotidiennes sont conservées."
  },
  "Save reflection →": {
    "es": "Guardar reflexión →",
    "fr": "Enregistrer la réflexion →"
  },
  "Saved on this device. Included when you download a backup.": {
    "es": "Guardado en este dispositivo. Se incluye al descargar una copia de seguridad.",
    "fr": "Enregistré sur cet appareil. Inclus lorsque vous téléchargez une sauvegarde."
  },
  "Earlier moments": {
    "es": "Momentos anteriores",
    "fr": "Moments précédents"
  },
  "Your most recent seven reflections from earlier days.": {
    "es": "Tus siete reflexiones más recientes de días anteriores.",
    "fr": "Vos sept dernières réflexions des jours précédents."
  },
  "Words you’ve crossed paths with.": {
    "es": "Palabras que has encontrado.",
    "fr": "Des mots que vous avez croisés."
  },
  "Close recently seen quotes": {
    "es": "Cerrar citas recientes",
    "fr": "Fermer les citations récentes"
  },
  "Your last 30 quotes. Reading one again keeps your new-quote rotation where it is.": {
    "es": "Tus últimas 30 citas. Volver a leer una mantiene tu recorrido de citas nuevas donde estaba.",
    "fr": "Vos 30 dernières citations. En relire une conserve votre progression parmi les nouvelles citations."
  },
  "Your recently seen quotes will appear here.": {
    "es": "Tus citas recientes aparecerán aquí.",
    "fr": "Vos citations récentes apparaîtront ici."
  },
  "Reading now": {
    "es": "Leyendo ahora",
    "fr": "Lecture actuelle"
  },
  "Read again": {
    "es": "Volver a leer",
    "fr": "Relire"
  },
  "Revisited. Your new-quote rotation is kept.": {
    "es": "Has vuelto a leerla. Tu recorrido de citas nuevas se conserva.",
    "fr": "Citation relue. Votre progression parmi les nouvelles citations est conservée."
  },
  "Keep these words together.": {
    "es": "Guarda estas palabras juntas.",
    "fr": "Gardez ces mots ensemble."
  },
  "Close collection dialog": {
    "es": "Cerrar colecciones",
    "fr": "Fermer les collections"
  },
  "Create a new collection below": {
    "es": "Crear una nueva colección abajo",
    "fr": "Créer une collection ci-dessous"
  },
  "Or name a new collection": {
    "es": "O nombra una nueva colección",
    "fr": "Ou nommer une nouvelle collection"
  },
  "Morning courage, Workday focus…": {
    "es": "Ánimo por la mañana, Concentración en el trabajo…",
    "fr": "Courage du matin, Concentration au travail…"
  },
  "Add quote to collection →": {
    "es": "Añadir cita a la colección →",
    "fr": "Ajouter la citation à la collection →"
  },
  "Choose a collection, or give your new one a name.": {
    "es": "Elige una colección o ponle nombre a una nueva.",
    "fr": "Choisissez une collection ou donnez un nom à la nouvelle."
  },
  "Kept in {name}.": {
    "es": "Guardado en {name}.",
    "fr": "Conservé dans {name}."
  },
  "Remove this collection?": {
    "es": "¿Eliminar esta colección?",
    "fr": "Supprimer cette collection ?"
  },
  "Your quotes and saved favorites will stay in your library.": {
    "es": "Tus citas y favoritos guardados seguirán en tu biblioteca.",
    "fr": "Vos citations et favoris enregistrés resteront dans votre bibliothèque."
  },
  "Keep collection": {
    "es": "Conservar colección",
    "fr": "Garder la collection"
  },
  "Name one contribution you made today, even if nobody noticed.": {
    "es": "Nombra una contribución que hiciste hoy, aunque nadie la haya notado.",
    "fr": "Nommez une contribution faite aujourd’hui, même si personne ne l’a remarquée."
  },
  "Write one preference you want to express kindly.": {
    "es": "Escribe una preferencia que quieras expresar con amabilidad.",
    "fr": "Notez une préférence que vous souhaitez exprimer avec bienveillance."
  },
  "Keep one encouraging message somewhere you can find it.": {
    "es": "Guarda un mensaje de ánimo donde puedas encontrarlo.",
    "fr": "Gardez un message encourageant dans un endroit facile à retrouver."
  },
  "Give yourself credit for one thing you prepared for.": {
    "es": "Reconoce algo para lo que te preparaste.",
    "fr": "Reconnaissez le mérite d’une chose que vous avez préparée."
  },
  "Ask one clear question instead of guessing what is expected.": {
    "es": "Haz una pregunta clara en lugar de adivinar qué se espera.",
    "fr": "Posez une question claire plutôt que de deviner ce qui est attendu."
  },
  "Choose one task and write what finished would look like.": {
    "es": "Elige una tarea y escribe cómo sabrás que está terminada.",
    "fr": "Choisissez une tâche et décrivez ce qu’elle serait une fois terminée."
  },
  "Put one distraction out of reach for your next short work session.": {
    "es": "Deja una distracción fuera de tu alcance durante tu próxima sesión breve de trabajo.",
    "fr": "Éloignez une distraction pour votre prochaine courte séance de travail."
  },
  "Give an unfinished task a clear next instruction.": {
    "es": "Escribe el siguiente paso concreto de una tarea sin terminar.",
    "fr": "Donnez une prochaine consigne claire à une tâche inachevée."
  },
  "Prepare the materials for one manageable beginning.": {
    "es": "Prepara lo que necesitas para empezar con algo manejable.",
    "fr": "Préparez le matériel pour un début accessible."
  },
  "Decide which request can wait while you finish your priority.": {
    "es": "Decide qué petición puede esperar mientras terminas lo prioritario.",
    "fr": "Décidez quelle demande peut attendre pendant que vous terminez votre priorité."
  },
  "Name one part of today that you can make easier.": {
    "es": "Nombra una parte de hoy que puedas hacer más sencilla.",
    "fr": "Nommez une partie de cette journée que vous pouvez rendre plus facile."
  },
  "Ask someone for one specific kind of help.": {
    "es": "Pide a alguien una ayuda concreta.",
    "fr": "Demandez à quelqu’un une aide précise."
  },
  "Adjust one commitment to fit the time and energy you have.": {
    "es": "Ajusta un compromiso al tiempo y la energía que tienes.",
    "fr": "Adaptez un engagement au temps et à l’énergie dont vous disposez."
  },
  "Write down a useful option that is still available.": {
    "es": "Anota una opción útil que todavía tengas.",
    "fr": "Notez une option utile qui reste possible."
  },
  "Choose one small comfort to accompany a difficult task.": {
    "es": "Elige algo reconfortante para acompañar una tarea difícil.",
    "fr": "Choisissez un petit réconfort pour accompagner une tâche difficile."
  },
  "Try one small part of a skill you are curious about.": {
    "es": "Prueba una pequeña parte de una habilidad que te dé curiosidad.",
    "fr": "Essayez une petite partie d’une compétence qui vous intrigue."
  },
  "Write a question you would like to understand better.": {
    "es": "Escribe una pregunta que quieras comprender mejor.",
    "fr": "Notez une question que vous aimeriez mieux comprendre."
  },
  "Compare two attempts and notice one useful change.": {
    "es": "Compara dos intentos y observa un cambio útil.",
    "fr": "Comparez deux essais et remarquez un changement utile."
  },
  "Ask someone how they learned to do something you admire.": {
    "es": "Pregunta a alguien cómo aprendió a hacer algo que admiras.",
    "fr": "Demandez à quelqu’un comment il a appris une chose que vous admirez."
  },
  "Use one idea you recently learned in an ordinary task.": {
    "es": "Usa una idea que aprendiste hace poco en una tarea cotidiana.",
    "fr": "Appliquez une idée récemment apprise à une tâche ordinaire."
  },
  "Spend a minute enjoying something without recording it.": {
    "es": "Dedica un minuto a disfrutar de algo sin grabarlo.",
    "fr": "Prenez une minute pour apprécier quelque chose sans l’enregistrer."
  },
  "Let one comfortable moment remain free of a to-do list.": {
    "es": "Deja que un momento agradable quede libre de tareas pendientes.",
    "fr": "Laissez un moment agréable sans liste de choses à faire."
  },
  "Listen to the end of a favorite song before starting another task.": {
    "es": "Escucha una canción que te guste hasta el final antes de empezar otra tarea.",
    "fr": "Écoutez une chanson favorite jusqu’au bout avant de commencer une autre tâche."
  },
  "Give yourself an unhurried transition between two activities.": {
    "es": "Date una transición sin prisas entre dos actividades.",
    "fr": "Accordez-vous une transition sans hâte entre deux activités."
  },
  "Look for one ordinary detail that you find beautiful.": {
    "es": "Busca un detalle cotidiano que te parezca bonito.",
    "fr": "Cherchez un détail ordinaire que vous trouvez beau."
  },
  "Write one specific request you could make to someone you trust.": {
    "es": "Escribe una petición concreta que puedas hacer a alguien de confianza.",
    "fr": "Notez une demande précise à faire à une personne de confiance."
  },
  "Try one small part once, then name what you noticed.": {
    "es": "Prueba una pequeña parte una vez y describe lo que notaste.",
    "fr": "Essayez une petite partie une fois, puis nommez ce que vous avez remarqué."
  },
  "Make the next transition a little slower, without forcing your breathing.": {
    "es": "Haz la próxima transición un poco más despacio, sin forzar la respiración.",
    "fr": "Ralentissez un peu la prochaine transition, sans forcer votre respiration."
  },
  "Write what finished would look like for one small task.": {
    "es": "Escribe cómo sabrás que una pequeña tarea está terminada.",
    "fr": "Décrivez ce que serait une petite tâche une fois terminée."
  },
  "Write one sentence about what matters to you in this choice.": {
    "es": "Escribe una frase sobre lo que te importa en esta elección.",
    "fr": "Écrivez une phrase sur ce qui compte pour vous dans ce choix."
  }
};
const motiveInterfaceContexts={'save-state':{'Saved':{es:'Guardada',fr:'Enregistrée'}}};
function motiveInterfaceTable(scope){return {...motiveInterfaceLocales,...motiveInterfaceContexts[scope]};}
function motiveInterfaceSource(text,scope){const table=motiveInterfaceTable(scope);if(Object.prototype.hasOwnProperty.call(table,text))return text;return Object.keys(table).find(source=>Object.values(table[source]).includes(text))||text;}
function motiveInterfaceText(source,language,scope){const text=['es','fr'].includes(language)?motiveInterfaceTable(scope)[source]?.[language]:undefined;return {text:text||source,language:text?language:'en'};}
function motiveInterfaceMessage(source,language,area){let m;if(area==='quote-position'&&(m=/^(\d+) of (\d+) explored · No repeats until the set is complete$/.exec(source))){return {text:language==='es'?m[1]+' de '+m[2]+' exploradas · Sin repetir hasta completar el conjunto':language==='fr'?m[1]+' sur '+m[2]+' explorées · Sans répétition avant la fin de la série':source,language:['es','fr'].includes(language)?language:'en'};}if(area==='voice-availability'&&(m=/^(\d+) English voices? (?:is|are) available\. Preview one before choosing\.$/.exec(source))){return {text:language==='es'?m[1]+(m[1]==='1'?' voz en inglés disponible.':' voces en inglés disponibles.')+' Prueba una antes de elegir.':language==='fr'?m[1]+(m[1]==='1'?' voix anglaise disponible.':' voix anglaises disponibles.')+' Écoutez un aperçu avant de choisir.':source,language:['es','fr'].includes(language)?language:'en'};}return motiveInterfaceText(source,language);}
function motiveInterfaceFormat(source,language,values={}){const result=motiveInterfaceText(source,language);return {...result,text:result.text.replace(/\{(\w+)\}/g,(token,key)=>Object.prototype.hasOwnProperty.call(values,key)?String(values[key]):token)};}
function motiveInterfaceCurrent(source,values={}){const language=typeof state==='undefined'?'en':state.studio?.language;return motiveInterfaceFormat(source,['es','fr'].includes(language)?language:'en',values);}
function motiveInterfaceDate(date,language){const locale=language==='es'?'es-ES':language==='fr'?'fr-FR':'en-US';return {text:date.toLocaleDateString(locale,{weekday:'long',month:'long',day:'numeric'}).toLocaleUpperCase(locale),language:['es','fr'].includes(language)?language:'en'};}
if(typeof module!=='undefined')module.exports={motiveInterfaceLocales,motiveInterfaceContexts,motiveInterfaceSource,motiveInterfaceText,motiveInterfaceMessage,motiveInterfaceFormat,motiveInterfaceCurrent,motiveInterfaceDate};
