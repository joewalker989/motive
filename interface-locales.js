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
