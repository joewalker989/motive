'use strict';
// Reviewed built-in control text only. Never pass personal records to these helpers.
const motiveInterfaceLocales={
"Give your quotes your own meaning":{"es": "Da tu propio significado a tus citas", "fr": "Donnez votre propre sens à vos citations"},
"Tags for the current quote · commas":{"es": "Etiquetas para esta cita · separa con comas", "fr": "Étiquettes pour cette citation · séparez-les par des virgules"},
"Morning, hard days, work":{"es": "Mañana, días difíciles, trabajo", "fr": "Matin, jours difficiles, travail"},
"Save tags":{"es": "Guardar etiquetas", "fr": "Enregistrer les étiquettes"},
"Find a tag":{"es": "Buscar una etiqueta", "fr": "Rechercher une étiquette"},
"Type a tag":{"es": "Escribe una etiqueta", "fr": "Saisissez une étiquette"},
"Show more tagged quotes":{"es": "Mostrar más citas etiquetadas", "fr": "Afficher plus de citations étiquetées"},
"Tags saved.":{"es": "Etiquetas guardadas.", "fr": "Étiquettes enregistrées."},
"No matching tagged quotes":{"es": "No hay citas etiquetadas coincidentes", "fr": "Aucune citation étiquetée correspondante"},
"Save tags for a quote, or try a different tag.":{"es": "Guarda etiquetas para una cita o prueba otra etiqueta.", "fr": "Enregistrez des étiquettes pour une citation ou essayez une autre étiquette."},
"Tagged quotes shown: {count}.":{"es": "Citas etiquetadas mostradas: {count}.", "fr": "Citations étiquetées affichées : {count}."},
"Your tags stay on this device and are included in full studio backups. Tag searches use your own words, not translated labels.":{"es": "Tus etiquetas se guardan en este dispositivo y se incluyen en las copias completas del estudio. Las búsquedas usan tus propias palabras, sin traducir las etiquetas.", "fr": "Vos étiquettes restent sur cet appareil et sont incluses dans les sauvegardes complètes du studio. La recherche utilise vos propres mots, sans traduire les étiquettes."},
"Open a quote before saving its tags.":{"es": "Abre una cita antes de guardar sus etiquetas.", "fr": "Ouvrez une citation avant d’enregistrer ses étiquettes."},

"Habits that fit your life":{"es": "Hábitos que encajan en tu vida", "fr": "Des habitudes adaptées à votre vie"},
"A small action":{"es": "Una pequeña acción", "fr": "Une petite action"},
"Step outside, read a page…":{"es": "Salir un momento, leer una página…", "fr": "Sortir un instant, lire une page…"},
"Repeat":{"es": "Repetición", "fr": "Répétition"},
"Daily":{"es": "Cada día", "fr": "Chaque jour"},
"Weekly · Monday start":{"es": "Cada semana · empieza el lunes", "fr": "Chaque semaine · début le lundi"},
"Monthly":{"es": "Cada mes", "fr": "Chaque mois"},
"Times each period":{"es": "Veces por período", "fr": "Nombre de fois par période"},
"Add habit":{"es": "Añadir hábito", "fr": "Ajouter une habitude"},
"Mark each occurrence as it happens. Undo removes your most recent mark today. Skipped days have no penalty. Archived habits keep their history in your full backup.":{"es": "Marca cada vez que lo hagas. Deshacer quita tu marca más reciente de hoy. Saltarse días no tiene penalización. Los hábitos archivados conservan su historial en la copia completa.", "fr": "Marquez chaque action lorsque vous la réalisez. Annuler retire votre dernière marque d’aujourd’hui. Les jours manqués ne sont pas pénalisés. Les habitudes archivées gardent leur historique dans la sauvegarde complète."},
"Smaller habit steps & planned days":{"es": "Pasos más pequeños y días planificados", "fr": "Des étapes plus petites et des jours prévus"},
"Habit to plan":{"es": "Hábito que quieres planificar", "fr": "Habitude à planifier"},
"The smallest useful version":{"es": "La versión útil más pequeña", "fr": "La plus petite version utile"},
"Read one paragraph":{"es": "Leer un párrafo", "fr": "Lire un paragraphe"},
"If this happens, I can take my small step":{"es": "Si esto ocurre, puedo dar mi pequeño paso", "fr": "Si cela arrive, je peux faire mon petit pas"},
"After I put my cup away":{"es": "Después de guardar mi taza", "fr": "Après avoir rangé ma tasse"},
"Days I plan to practice":{"es": "Días en que planeo practicar", "fr": "Jours où je prévois de pratiquer"},
"Save habit plan":{"es": "Guardar plan del hábito", "fr": "Enregistrer le plan d’habitude"},
"Sunday":{"es": "Domingo", "fr": "Dimanche"},
"Monday":{"es": "Lunes", "fr": "Lundi"},
"Tuesday":{"es": "Martes", "fr": "Mardi"},
"Wednesday":{"es": "Miércoles", "fr": "Mercredi"},
"Thursday":{"es": "Jueves", "fr": "Jeudi"},
"Friday":{"es": "Viernes", "fr": "Vendredi"},
"Saturday":{"es": "Sábado", "fr": "Samedi"},
"Plan saved. Unplanned days have no penalty.":{"es": "Plan guardado. Los días no planificados no tienen penalización.", "fr": "Plan enregistré. Les jours non prévus ne sont pas pénalisés."},
"✦ A small step kept.":{"es": "✦ Un pequeño paso cumplido.", "fr": "✦ Un petit pas accompli."},
"{count} of {target} · daily":{"es": "{count} de {target} · cada día", "fr": "{count} sur {target} · chaque jour"},
"{count} of {target} · weekly":{"es": "{count} de {target} · cada semana", "fr": "{count} sur {target} · chaque semaine"},
"{count} of {target} · monthly":{"es": "{count} de {target} · cada mes", "fr": "{count} sur {target} · chaque mois"},
"Small version":{"es": "Versión pequeña", "fr": "Petite version"},
"My cue":{"es": "Mi señal para empezar", "fr": "Mon repère pour commencer"},
"A day off your plan":{"es": "Un día fuera de tu plan", "fr": "Un jour hors de votre programme"},
"Your previous steps stay saved.":{"es": "Tus pasos anteriores siguen guardados.", "fr": "Vos étapes précédentes restent enregistrées."},
"Mark one done":{"es": "Marcar una vez realizada", "fr": "Marquer une action accomplie"},
"Undo today’s last mark":{"es": "Deshacer la última marca de hoy", "fr": "Annuler la dernière marque d’aujourd’hui"},
"Archive habit":{"es": "Archivar hábito", "fr": "Archiver l’habitude"},
"Start with one small habit":{"es": "Empieza con un pequeño hábito", "fr": "Commencez par une petite habitude"},
"Add a habit above to give it a manageable plan.":{"es": "Añade un hábito arriba para darle un plan manejable.", "fr": "Ajoutez une habitude ci-dessus pour lui donner un programme abordable."},
"Give your habit a name and a target from 1 to 31.":{"es": "Pon un nombre al hábito y un objetivo de 1 a 31.", "fr": "Donnez un nom à votre habitude et un objectif de 1 à 31."},
"Choose a repeat period.":{"es": "Elige un período de repetición.", "fr": "Choisissez une période de répétition."},
"Habit added. Keep it small enough to fit your day.":{"es": "Hábito añadido. Procura que sea pequeño y encaje en tu día.", "fr": "Habitude ajoutée. Gardez-la assez petite pour qu’elle trouve sa place dans votre journée."},

"Progress at your pace":{"es": "Progreso a tu ritmo", "fr": "Avancer à votre rythme"},
"Hide visit streaks, completion totals and habit counts":{"es": "Ocultar rachas de visitas, totales de tareas y recuentos de hábitos", "fr": "Masquer les séries de visites, les totaux et les comptes d’habitudes"},
"Show a small celebration after a habit step":{"es": "Mostrar una pequeña celebración tras un paso de hábito", "fr": "Afficher une petite célébration après une étape d’habitude"},
"Habit plans are ordinary unencrypted preferences included in quote backups. Tracking stays saved when counts are hidden. Celebrations are off by default and respect reduced motion.":{"es": "Los planes de hábitos son preferencias sin cifrar incluidas en las copias de citas. El seguimiento se conserva aunque ocultes los recuentos. Las celebraciones están desactivadas al principio y respetan la reducción de movimiento.", "fr": "Les plans d’habitudes sont des préférences non chiffrées incluses dans les sauvegardes de citations. Le suivi reste enregistré lorsque les nombres sont masqués. Les célébrations sont désactivées par défaut et respectent la réduction des animations."},
"My recent timeline":{"es": "Mi actividad reciente", "fr": "Mon activité récente"},
"Dates of saved journal entries, mood check-ins and habit steps. Journal words are excluded; this list is ordinary local activity metadata.":{"es": "Fechas de entradas guardadas del diario, registros de ánimo y pasos de hábitos. No incluye las palabras del diario; esta lista es información local de actividad sin cifrar.", "fr": "Dates des entrées du journal, des bilans d’humeur et des étapes d’habitudes enregistrés. Les mots du journal sont exclus ; cette liste contient des métadonnées locales d’activité non chiffrées."},
"Show recent activity":{"es": "Mostrar actividad reciente", "fr": "Afficher l’activité récente"},
"Journal entry":{"es": "Entrada del diario", "fr": "Entrée du journal"},
"Habit step":{"es": "Paso de hábito", "fr": "Étape d’habitude"},
"No activity to show yet":{"es": "Todavía no hay actividad para mostrar", "fr": "Aucune activité à afficher pour le moment"},
"Check-ins throughout a day":{"es": "Registros de ánimo a lo largo del día", "fr": "Des bilans d’humeur au fil de la journée"},
"Save check-in adds another moment; the calendar shows the most recently saved feeling for each date. The earlier arrival shortcut still updates its one daily check-in.":{"es": "Guardar registro de ánimo añade otro momento; el calendario muestra la última emoción guardada de cada fecha. El acceso rápido de llegada sigue actualizando su único registro diario.", "fr": "Enregistrer le bilan d’humeur ajoute un moment ; le calendrier affiche la dernière émotion enregistrée pour chaque date. Le raccourci d’accueil continue de mettre à jour son unique bilan quotidien."},
"Show recent check-ins":{"es": "Mostrar registros de ánimo recientes", "fr": "Afficher les bilans d’humeur récents"},
"Earlier check-in":{"es": "Registro de ánimo anterior", "fr": "Bilan d’humeur antérieur"},
"No recent check-ins yet":{"es": "Todavía no hay registros de ánimo recientes", "fr": "Aucun bilan d’humeur récent pour le moment"},

"Your daily practice":{"es": "Tu práctica diaria", "fr": "Votre pratique quotidienne"},
"Today":{"es": "Hoy", "fr": "Aujourd’hui"},
"Habits":{"es": "Hábitos", "fr": "Habitudes"},
"Mood history":{"es": "Historial de ánimo", "fr": "Historique des humeurs"},
"Quote tags":{"es": "Etiquetas de citas", "fr": "Étiquettes des citations"},
"Sleep":{"es": "Descanso nocturno", "fr": "Repos nocturne"},
"Movement":{"es": "Movimiento", "fr": "Mouvement"},
"Connections":{"es": "Conexiones", "fr": "Connexions"},
"Close daily practice":{"es": "Cerrar práctica diaria", "fr": "Fermer la pratique quotidienne"},
"Daily practice sections":{"es": "Secciones de práctica diaria", "fr": "Sections de la pratique quotidienne"},
"SMALL THINGS, OFTEN":{"es": "PEQUEÑAS COSAS, A MENUDO", "fr": "DE PETITES CHOSES, SOUVENT"},

"Check in, in your own words":{"es": "Registra cómo te sientes, con tus palabras", "fr": "Faites le point avec vos propres mots"},
"Feeling":{"es": "Emoción", "fr": "Émotion"},
"Activities · separate with commas":{"es": "Actividades · separa con comas", "fr": "Activités · séparez-les par des virgules"},
"Walk, reading, time with friends":{"es": "Paseo, lectura, tiempo con amistades", "fr": "Promenade, lecture, moments entre amis"},
"Save check-in":{"es": "Guardar registro de ánimo", "fr": "Enregistrer le bilan d’humeur"},
"Add a feeling":{"es": "Añadir una emoción", "fr": "Ajouter une émotion"},
"Name":{"es": "Nombre", "fr": "Nom"},
"Symbol or emoji":{"es": "Símbolo o emoji", "fr": "Symbole ou émoji"},
"Color":{"es": "Color", "fr": "Couleur"},
"Add feeling":{"es": "Añadir emoción", "fr": "Ajouter l’émotion"},
"Mood names and activities are ordinary local records outside the journal vault. Use the encrypted journal for private details.":{"es": "Los nombres de emociones y las actividades son registros locales sin el cifrado del diario. Usa el diario cifrado para detalles privados.", "fr": "Les noms d’émotions et les activités sont des données locales hors du coffre chiffré du journal. Utilisez le journal chiffré pour les détails privés."},
"Your days, in color":{"es": "Tus días, en color", "fr": "Vos journées en couleurs"},
"Month":{"es": "Mes", "fr": "Mois"},
"Show the whole year":{"es": "Mostrar todo el año", "fr": "Afficher toute l’année"},
"Activities beside feelings":{"es": "Actividades junto a emociones", "fr": "Activités et émotions"},
"Counts describe your check-ins. They do not show that an activity caused a feeling. Missing days are left blank; feelings are not scored.":{"es": "Los recuentos describen tus registros. No demuestran que una actividad haya causado una emoción. Los días sin registro quedan vacíos; las emociones no se puntúan.", "fr": "Les nombres décrivent vos bilans. Ils ne montrent pas qu’une activité a causé une émotion. Les jours sans bilan restent vides ; les émotions ne sont pas notées."},
"Download mood CSV":{"es": "Descargar CSV de ánimo", "fr": "Télécharger le CSV des humeurs"},
"No check-in":{"es": "Sin registro de ánimo", "fr": "Aucun bilan d’humeur"},
"Build a little history":{"es": "Empieza a crear tu historial", "fr": "Commencez un petit historique"},
"Add an activity alongside a check-in to see counts here.":{"es": "Añade una actividad a un registro para ver recuentos aquí.", "fr": "Ajoutez une activité à un bilan pour voir les nombres ici."},
"Days with this activity: {count}. Feelings:":{"es": "Días con esta actividad: {count}. Emociones:", "fr": "Jours avec cette activité : {count}. Émotions :"},
"Days without this activity: {count}. Feelings:":{"es": "Días sin esta actividad: {count}. Emociones:", "fr": "Jours sans cette activité : {count}. Émotions :"},
"No recorded feelings":{"es": "Sin emociones registradas", "fr": "Aucune émotion enregistrée"},
"Add a name and choose a color.":{"es": "Añade un nombre y elige un color.", "fr": "Ajoutez un nom et choisissez une couleur."},
"Feeling added to your list.":{"es": "Emoción añadida a tu lista.", "fr": "Émotion ajoutée à votre liste."},
"Choose today or an earlier date.":{"es": "Elige hoy o una fecha anterior.", "fr": "Choisissez aujourd’hui ou une date antérieure."},
"Choose a feeling.":{"es": "Elige una emoción.", "fr": "Choisissez une émotion."},
"Check-in saved for {day}.":{"es": "Registro de ánimo guardado para el {day}.", "fr": "Bilan d’humeur enregistré pour le {day}."},
"Activities":{"es": "Actividades", "fr": "Activités"},
"CSV labels follow your language. Dates, custom feeling names and activities stay as written. The full backup keeps original records.":{"es": "Las etiquetas del CSV usan tu idioma. Las fechas, las emociones personalizadas y las actividades se conservan como las escribiste. La copia completa mantiene los registros originales.", "fr": "Les libellés du CSV suivent votre langue. Les dates, les émotions personnalisées et les activités restent tels que vous les avez écrits. La sauvegarde complète conserve les données originales."},

"{count} matching moment":{"es":"{count} momento coincidente","fr":"{count} moment correspondant"},
"{count} matching recoverable deleted entry":{"es":"{count} entrada eliminada recuperable coincidente","fr":"{count} entrée supprimée récupérable correspondante"},
"Moment":{"es":"Momento","fr":"Moment"},
"Low energy":{"es":"Con poca energía","fr":"Peu d’énergie"},
"Scattered":{"es":"Con la atención dispersa","fr":"Dispersé"},
"Stuck":{"es":"Con sensación de bloqueo","fr":"Bloqué"},
"Curious":{"es":"Con curiosidad","fr":"Curieux"},
"Overwhelmed":{"es":"Con sensación de agobio","fr":"Débordé"},
"Earlier reflection":{"es": "Reflexión anterior", "fr": "Réflexion antérieure"},
"Reflection":{"es": "Reflexión", "fr": "Réflexion"},
"Earlier moment":{"es": "Momento anterior", "fr": "Moment antérieur"},
"Recovery bin":{"es": "Papelera de recuperación", "fr": "Corbeille de récupération"},
"Photo or voice reflection":{"es": "Reflexión con foto o voz", "fr": "Réflexion en photo ou en audio"},
"Media reflection":{"es": "Reflexión multimedia", "fr": "Réflexion avec média"},
"Restore entry":{"es": "Restaurar entrada", "fr": "Restaurer l’entrée"},
"Permanently remove content":{"es": "Eliminar contenido de forma permanente", "fr": "Effacer définitivement le contenu"},
"Permanently remove this entry? It cannot be restored from this device.":{"es": "¿Eliminar esta entrada de forma permanente? No se podrá restaurar desde este dispositivo.", "fr": "Effacer définitivement cette entrée ? Elle ne pourra plus être restaurée depuis cet appareil."},
"Remove":{"es": "Quitar", "fr": "Retirer"},
"Your journal photo":{"es": "Tu foto del diario", "fr": "Votre photo de journal"},
"Motive · my moments":{"es": "Motive · mis momentos", "fr": "Motive · mes moments"},
"Date":{"es": "Fecha", "fr": "Date"},
"Week of {day}":{"es": "Semana del {day}", "fr": "Semaine du {day}"},
"Review your own words at your pace. Current journal search filters also apply.":{"es": "Revisa tus propias palabras a tu ritmo. También se aplican los filtros actuales de búsqueda del diario.", "fr": "Relisez vos propres mots à votre rythme. Les filtres actuels de recherche du journal s’appliquent aussi."},
"No matching reflections this week":{"es": "No hay reflexiones coincidentes esta semana", "fr": "Aucune réflexion correspondante cette semaine"},
"You can begin with a few words whenever you want.":{"es": "Puedes empezar con unas palabras cuando quieras.", "fr": "Vous pouvez commencer par quelques mots quand vous le souhaitez."},
"Some entries use another vault passphrase. Import them on the original device to read them.":{"es": "Algunas entradas usan otra contraseña de cifrado. Impórtalas en el dispositivo original para leerlas.", "fr": "Certaines entrées utilisent une autre phrase secrète. Importez-les sur l’appareil d’origine pour les lire."},
"CSV and printed copies contain readable journal words. Period labels use your chosen language; dates and your entries stay as written.":{"es": "Los CSV y las copias impresas contienen palabras legibles del diario. Las etiquetas del momento usan tu idioma elegido; las fechas y tus entradas se conservan tal como están escritas.", "fr": "Les CSV et les copies imprimées contiennent le texte lisible du journal. Les libellés des moments utilisent la langue choisie ; les dates et vos entrées restent tels qu’ils sont écrits."},
"Morning":{"es": "Mañana", "fr": "Matin"},
"Evening":{"es": "Noche", "fr": "Soir"},

"{count} matching moments":{"es":"{count} momentos coincidentes","fr":"{count} moments correspondants"},
"{count} matching recoverable deleted entries":{"es":"{count} entradas eliminadas recuperables coincidentes","fr":"{count} entrées supprimées récupérables correspondantes"},
"Morning preparation & evening reflection":{"es": "Preparación de la mañana y reflexión de la noche", "fr": "Préparation du matin et réflexion du soir"},
"Your journal is encrypted. Unlock it in Settings to read or write.":{"es": "Tu diario está cifrado. Desbloquéalo en Ajustes para leer o escribir.", "fr": "Votre journal est chiffré. Déverrouillez-le dans les réglages pour lire ou écrire."},
"Unlock journal →":{"es": "Desbloquear diario →", "fr": "Déverrouiller le journal →"},
"Start with a few words…":{"es": "Empieza con unas palabras…", "fr": "Commencez par quelques mots…"},
"Add a photo (optional)":{"es": "Añadir una foto (opcional)", "fr": "Ajouter une photo (facultatif)"},
"Record a voice reflection":{"es": "Grabar una reflexión de voz", "fr": "Enregistrer une réflexion vocale"},
"Stop recording":{"es": "Detener grabación", "fr": "Arrêter l’enregistrement"},
"Save this moment":{"es": "Guardar este momento", "fr": "Enregistrer ce moment"},
"Saving again adds another entry. Earlier entries are kept until you delete them.":{"es": "Guardar de nuevo añade otra entrada. Las anteriores se conservan hasta que las elimines.", "fr": "Un nouvel enregistrement ajoute une entrée. Les précédentes sont conservées jusqu’à leur suppression."},
"Your last seven check-ins":{"es": "Tus siete registros más recientes", "fr": "Vos sept derniers bilans"},
"Different feelings, without a score. Only days you checked in are shown.":{"es": "Distintas emociones, sin puntuación. Solo aparecen los días en que registraste cómo te sentías.", "fr": "Des émotions variées, sans note. Seuls les jours où vous avez fait un bilan sont affichés."},
"Your recent moments":{"es": "Tus momentos recientes", "fr": "Vos moments récents"},
"Find a moment":{"es": "Buscar un momento", "fr": "Retrouver un moment"},
"Words or a date":{"es": "Palabras o una fecha", "fr": "Des mots ou une date"},
"A name, a memory, 2026-10…":{"es": "Un nombre, un recuerdo, 2026-10…", "fr": "Un nom, un souvenir, 2026-10…"},
"From":{"es": "Desde", "fr": "À partir du"},
"Through":{"es": "Hasta", "fr": "Jusqu’au"},
"Show recovery bin":{"es": "Mostrar papelera de recuperación", "fr": "Afficher la corbeille de récupération"},
"Deleted entries can be restored until you permanently remove them. Entries deleted before this update may no longer contain recoverable content. Locking the journal also locks its recovery bin.":{"es": "Las entradas eliminadas se pueden restaurar hasta que las borres de forma permanente. Las eliminadas antes de esta actualización pueden no tener contenido recuperable. Bloquear el diario también bloquea su papelera.", "fr": "Les entrées supprimées peuvent être restaurées jusqu’à leur effacement définitif. Celles supprimées avant cette mise à jour peuvent ne plus contenir de données récupérables. Le verrouillage du journal verrouille aussi sa corbeille."},
"Export matching entries · CSV":{"es": "Exportar entradas coincidentes · CSV", "fr": "Exporter les entrées correspondantes · CSV"},
"Print / save as PDF":{"es": "Imprimir / guardar como PDF", "fr": "Imprimer / enregistrer en PDF"},
"Exports contain readable text. Save them somewhere private. Photos and audio stay in full backups.":{"es": "Las exportaciones contienen texto legible. Guárdalas en un lugar privado. Las fotos y el audio permanecen en las copias completas.", "fr": "Les exports contiennent du texte lisible. Conservez-les dans un endroit privé. Les photos et l’audio restent dans les sauvegardes complètes."},
"Show more moments":{"es": "Mostrar más momentos", "fr": "Afficher plus de moments"},
"Draft recovery, writing templates & weekly review":{"es": "Recuperación de borradores, plantillas y revisión semanal", "fr": "Récupération des brouillons, modèles et bilan hebdomadaire"},
"Keep a recovery draft of my journal words":{"es": "Conservar un borrador de recuperación de mi diario", "fr": "Conserver un brouillon de récupération de mon journal"},
"Optional text-only recovery on this device, included in full backups. Photos and unsaved voice attachments are not drafts. When journal lock is on, drafts use the same encryption and need unlocking. With lock off, drafts are ordinary local text. Turning recovery off stops future saves; Discard removes the saved recovery draft.":{"es": "Recuperación opcional de texto en este dispositivo, incluida en las copias completas. Las fotos y los audios sin guardar no son borradores. Con el bloqueo del diario activo, los borradores usan el mismo cifrado y necesitan desbloqueo. Sin bloqueo, son texto local sin cifrar. Desactivar la recuperación detiene los guardados futuros; Descartar elimina el borrador guardado.", "fr": "Récupération facultative du texte sur cet appareil, incluse dans les sauvegardes complètes. Les photos et les pièces vocales non enregistrées ne sont pas des brouillons. Si le journal est verrouillé, les brouillons utilisent le même chiffrement et doivent être déverrouillés. Sinon, ce sont des textes locaux non chiffrés. Désactiver la récupération arrête les futurs enregistrements ; Supprimer efface le brouillon sauvegardé."},
"Restore saved draft into an empty editor":{"es": "Restaurar el borrador en un editor vacío", "fr": "Restaurer le brouillon dans un éditeur vide"},
"Discard recovery draft":{"es": "Descartar borrador de recuperación", "fr": "Supprimer le brouillon de récupération"},
"Writing template":{"es": "Plantilla de escritura", "fr": "Modèle d’écriture"},
"Notice & next step":{"es": "Observar y dar el siguiente paso", "fr": "Observer et choisir la prochaine étape"},
"A kinder perspective":{"es": "Una perspectiva más amable", "fr": "Un regard plus bienveillant"},
"Weekly reflection":{"es": "Reflexión semanal", "fr": "Réflexion hebdomadaire"},
"Add template to my words":{"es": "Añadir plantilla a mis palabras", "fr": "Ajouter le modèle à mon texte"},
"A date in the week to review":{"es": "Una fecha de la semana que quieres revisar", "fr": "Une date de la semaine à revoir"},
"Review this week’s reflections":{"es": "Revisar las reflexiones de esta semana", "fr": "Revoir les réflexions de cette semaine"},
"Unlock the journal before saving.":{"es": "Desbloquea el diario antes de guardar.", "fr": "Déverrouillez le journal avant d’enregistrer."},
"Add a few words, a photo, or a voice reflection first.":{"es": "Primero añade unas palabras, una foto o una reflexión de voz.", "fr": "Ajoutez d’abord quelques mots, une photo ou une réflexion vocale."},
"Saved on this device.":{"es": "Guardado en este dispositivo.", "fr": "Enregistré sur cet appareil."},
"Voice reflection ready. Tap Save this moment to keep it.":{"es": "Reflexión de voz lista. Pulsa Guardar este momento para conservarla.", "fr": "Réflexion vocale prête. Touchez Enregistrer ce moment pour la conserver."},
"Recording… tap Stop when you are ready (maximum 1 minute).":{"es": "Grabando… pulsa Detener cuando quieras (máximo 1 minuto).", "fr": "Enregistrement… touchez Arrêter quand vous voulez (1 minute maximum)."},
"Recovery words saved on this device.":{"es": "Texto de recuperación guardado en este dispositivo.", "fr": "Texte de récupération enregistré sur cet appareil."},
"Recovery words saved on this device with journal encryption.":{"es": "Texto de recuperación guardado en este dispositivo con el cifrado del diario.", "fr": "Texte de récupération enregistré sur cet appareil avec le chiffrement du journal."},
"Draft could not be saved. Keep your words in the editor and save the entry.":{"es": "No se pudo guardar el borrador. Conserva tus palabras en el editor y guarda la entrada.", "fr": "Le brouillon n’a pas pu être enregistré. Gardez votre texte dans l’éditeur et enregistrez l’entrée."},
"Recovery draft discarded. Saved journal entries remain.":{"es": "Borrador de recuperación descartado. Las entradas guardadas se conservan.", "fr": "Brouillon de récupération supprimé. Les entrées enregistrées sont conservées."},
"Save or clear the current editor before restoring a draft.":{"es": "Guarda o vacía el editor antes de restaurar un borrador.", "fr": "Enregistrez ou videz l’éditeur avant de restaurer un brouillon."},
"Unlock the journal to restore its draft.":{"es": "Desbloquea el diario para restaurar su borrador.", "fr": "Déverrouillez le journal pour restaurer son brouillon."},
"No recovery draft is saved.":{"es": "No hay ningún borrador de recuperación guardado.", "fr": "Aucun brouillon de récupération n’est enregistré."},
"Draft restored. Save it as a journal entry when ready.":{"es": "Borrador restaurado. Guárdalo como entrada del diario cuando quieras.", "fr": "Brouillon restauré. Enregistrez-le comme entrée du journal quand vous le souhaitez."},
"Unlock your journal before writing.":{"es": "Desbloquea tu diario antes de escribir.", "fr": "Déverrouillez votre journal avant d’écrire."},
"Save the current entry before adding this template.":{"es": "Guarda la entrada actual antes de añadir esta plantilla.", "fr": "Enregistrez l’entrée actuelle avant d’ajouter ce modèle."},
"Unlock your journal to search, restore, or export.":{"es": "Desbloquea tu diario para buscar, restaurar o exportar.", "fr": "Déverrouillez votre journal pour chercher, restaurer ou exporter."},
"Journal locked.":{"es": "Diario bloqueado.", "fr": "Journal verrouillé."},
"Readable CSV downloaded.":{"es": "CSV con texto legible descargado.", "fr": "CSV en texte lisible téléchargé."},
"Unlock your journal first.":{"es": "Primero desbloquea tu diario.", "fr": "Déverrouillez d’abord votre journal."},
"Choose a valid date.":{"es": "Elige una fecha válida.", "fr": "Choisissez une date valide."},
"One thing I noticed:\n\nWhat I need next:\n\nOne thing that can wait:":{"es": "Algo que he observado:\n\nLo que necesito ahora:\n\nAlgo que puede esperar:", "fr": "Une chose que j’ai remarquée :\n\nCe dont j’ai besoin maintenant :\n\nUne chose qui peut attendre :"},
"Something that was difficult:\n\nWhat I would say to a friend:\n\nA kind next step:":{"es": "Algo que fue difícil:\n\nLo que le diría a una amistad:\n\nUn siguiente paso amable:", "fr": "Quelque chose de difficile :\n\nCe que je dirais à un proche :\n\nUne prochaine étape bienveillante :"},
"A small moment I want to keep:\n\nSomething I learned:\n\nWhat I want to make room for next week:":{"es": "Un pequeño momento que quiero recordar:\n\nAlgo que he aprendido:\n\nA qué quiero hacer espacio la próxima semana:", "fr": "Un petit moment que je veux garder :\n\nQuelque chose que j’ai appris :\n\nCe à quoi je veux faire une place la semaine prochaine :"},

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
  },
  "Room for new roots": {
    "es": "Espacio para nuevas raíces",
    "fr": "De la place pour de nouvelles racines"
  },
  "Patient observation and looking for growth in more than one place.": {
    "es": "Observar con paciencia y buscar crecimiento en más de un lugar.",
    "fr": "Observer avec patience et chercher la croissance à plusieurs endroits."
  },
  "A rhythm you can keep": {
    "es": "Un ritmo que puedes mantener",
    "fr": "Un rythme que vous pouvez tenir"
  },
  "Patient practice, deliberate attention, and room between commitments.": {
    "es": "Practicar con paciencia, prestar atención y dejar espacio entre compromisos.",
    "fr": "Pratiquer avec patience, porter une attention réfléchie et laisser de l’espace entre les engagements."
  },
  "Something to share": {
    "es": "Algo para compartir",
    "fr": "Quelque chose à partager"
  },
  "Cooperation, belonging, and the everyday value of a contribution.": {
    "es": "Cooperación, pertenencia y el valor cotidiano de aportar algo.",
    "fr": "La coopération, le sentiment d’appartenance et la valeur quotidienne d’une contribution."
  },
  "One fold at a time": {
    "es": "Un pliegue a la vez",
    "fr": "Un pli à la fois"
  },
  "Learning through small adjustments and letting an unfamiliar shape emerge.": {
    "es": "Aprender con pequeños ajustes y dejar que surja una forma nueva.",
    "fr": "Apprendre par de petits ajustements et laisser apparaître une forme nouvelle."
  },
  "A soft place to rest": {
    "es": "Un lugar acogedor para descansar",
    "fr": "Un endroit douillet pour se reposer"
  },
  "Everyday comfort and permission to leave a quiet moment unmeasured.": {
    "es": "El bienestar cotidiano y el permiso de disfrutar un momento tranquilo sin medirlo.",
    "fr": "Le réconfort quotidien et la liberté de ne pas mesurer un moment de calme."
  },
  "A patient repair": {
    "es": "Una reparación con paciencia",
    "fr": "Une réparation patiente"
  },
  "Care, resourcefulness, and continuing with what can still be useful.": {
    "es": "Cuidar, buscar recursos y seguir con lo que todavía puede servir.",
    "fr": "Le soin, l’ingéniosité et la poursuite avec ce qui peut encore être utile."
  },
  "Hands at work": {
    "es": "Manos que crean",
    "fr": "Des mains à l’œuvre"
  },
  "Patience, practice, and the courage to make something imperfect.": {
    "es": "Paciencia, práctica y el valor de crear algo imperfecto.",
    "fr": "La patience, la pratique et le courage de créer quelque chose d’imparfait."
  },
  "A little support": {
    "es": "Un poco de apoyo",
    "fr": "Un peu de soutien"
  },
  "A reminder that help, friendship, and belonging can be part of your strength.": {
    "es": "Un recordatorio de que la ayuda, la amistad y la pertenencia pueden ser parte de tu fortaleza.",
    "fr": "Un rappel que l’aide, l’amitié et le sentiment d’appartenance peuvent faire partie de votre force."
  },
  "Room for possibility": {
    "es": "Espacio para lo posible",
    "fr": "De la place pour les possibles"
  },
  "Color and movement for fresh ideas, self-expression, and a new direction.": {
    "es": "Color y movimiento para nuevas ideas, expresarte y encontrar otro rumbo.",
    "fr": "Des couleurs et du mouvement pour des idées nouvelles, l’expression de soi et une nouvelle direction."
  },
  "Mountain path": {
    "es": "Sendero de montaña",
    "fr": "Sentier de montagne"
  },
  "A reminder that progress is made one step at a time.": {
    "es": "Un recordatorio de que se avanza un paso a la vez.",
    "fr": "Un rappel que l’on avance un pas à la fois."
  },
  "Open horizon": {
    "es": "Horizonte abierto",
    "fr": "Horizon ouvert"
  },
  "A little light for courage, confidence, and new possibilities.": {
    "es": "Un poco de luz para el valor, la confianza y nuevas posibilidades.",
    "fr": "Un peu de lumière pour le courage, la confiance et de nouvelles possibilités."
  },
  "Growing forest": {
    "es": "Bosque en crecimiento",
    "fr": "Forêt en croissance"
  },
  "Growth takes patience, curiosity, and room to change.": {
    "es": "Crecer requiere paciencia, curiosidad y espacio para cambiar.",
    "fr": "Grandir demande de la patience, de la curiosité et de la place pour changer."
  },
  "Still water": {
    "es": "Agua en calma",
    "fr": "Eau paisible"
  },
  "Space to breathe, rest, and return to the present.": {
    "es": "Espacio para respirar, descansar y volver al presente.",
    "fr": "De l’espace pour respirer, se reposer et revenir au présent."
  },
  "A quiet workspace": {
    "es": "Un espacio tranquilo para trabajar",
    "fr": "Un espace de travail calme"
  },
  "A clear space for attention, practice, and purposeful work.": {
    "es": "Un espacio despejado para la atención, la práctica y el trabajo con intención.",
    "fr": "Un espace dégagé pour l’attention, la pratique et un travail réfléchi."
  },
  "A scene for your words.": {
    "es": "Una imagen para tus palabras.",
    "fr": "Une image pour vos mots."
  },
  "Close background settings": {
    "es": "Cerrar ajustes del fondo",
    "fr": "Fermer les réglages du fond"
  },
  "Choose automatic matching, a different picture with every quote, or one favorite picture. Automatic matching can keep the same scene for quotes with a similar meaning.": {
    "es": "Elige el ajuste automático, una imagen distinta con cada cita o una imagen favorita. El ajuste automático puede conservar la misma imagen para citas con un significado parecido.",
    "fr": "Choisissez l’association automatique, une image différente à chaque citation ou une image favorite. L’association automatique peut garder la même image pour des citations de sens proche."
  },
  "Quote background": {
    "es": "Fondo de la cita",
    "fr": "Fond de la citation"
  },
  "Match the quote automatically": {
    "es": "Ajustar a la cita automáticamente",
    "fr": "Associer automatiquement à la citation"
  },
  "Change picture with every quote": {
    "es": "Cambiar imagen con cada cita",
    "fr": "Changer d’image à chaque citation"
  },
  "Plain background": {
    "es": "Fondo liso",
    "fr": "Fond uni"
  },
  "Photo darkness": {
    "es": "Oscuridad de la foto",
    "fr": "Assombrissement de la photo"
  },
  "Darker photos make the words easier to read. Your choice is remembered and used in quote images and phone wallpapers.": {
    "es": "Las fotos más oscuras facilitan la lectura. Tu elección se guarda y se usa en las imágenes de citas y fondos del teléfono.",
    "fr": "Des photos plus sombres facilitent la lecture. Votre choix est mémorisé et utilisé pour les images de citations et les fonds du téléphone."
  },
  "Choose a picture": {
    "es": "Elegir una imagen",
    "fr": "Choisir une image"
  },
  "Browse backgrounds": {
    "es": "Explorar fondos",
    "fr": "Parcourir les fonds"
  },
  "All subjects": {
    "es": "Todos los temas",
    "fr": "Tous les sujets"
  },
  "My photo favorites": {
    "es": "Mis fotos favoritas",
    "fr": "Mes photos favorites"
  },
  "Scenery": {
    "es": "Paisajes",
    "fr": "Paysages"
  },
  "Objects": {
    "es": "Objetos",
    "fr": "Objets"
  },
  "People": {
    "es": "Personas",
    "fr": "Personnes"
  },
  "Creative work": {
    "es": "Trabajo creativo",
    "fr": "Création"
  },
  "Animals": {
    "es": "Animales",
    "fr": "Animaux"
  },
  "Abstract artwork": {
    "es": "Arte abstracto",
    "fr": "Art abstrait"
  },
  "Subjects for matching and rotation": {
    "es": "Temas para el ajuste y la rotación",
    "fr": "Sujets pour l’association et la rotation"
  },
  "Use these picture subjects": {
    "es": "Usar estos temas de imágenes",
    "fr": "Utiliser ces sujets d’images"
  },
  "Avoid the last few pictures": {
    "es": "Evitar las últimas imágenes",
    "fr": "Éviter les dernières images"
  },
  "Only the usual consecutive-picture rule": {
    "es": "Solo la regla habitual de imágenes consecutivas",
    "fr": "Uniquement la règle habituelle des images consécutives"
  },
  "Last picture": {
    "es": "Última imagen",
    "fr": "Dernière image"
  },
  "Last 3 pictures": {
    "es": "Últimas 3 imágenes",
    "fr": "3 dernières images"
  },
  "Last 5 pictures": {
    "es": "Últimas 5 imágenes",
    "fr": "5 dernières images"
  },
  "Last 9 pictures": {
    "es": "Últimas 9 imágenes",
    "fr": "9 dernières images"
  },
  "When there are too few eligible pictures, the least recent available picture is reused. Fixed scenes and per-quote pins override rotation choices.": {
    "es": "Si hay pocas imágenes disponibles, se reutiliza la menos reciente. Las imágenes fijas y las fijadas a una cita tienen prioridad sobre la rotación.",
    "fr": "Si trop peu d’images conviennent, l’image disponible la moins récente est réutilisée. Les images fixes et celles épinglées à une citation priment sur la rotation."
  },
  "Keep this picture for this quote": {
    "es": "Conservar esta imagen para esta cita",
    "fr": "Garder cette image pour cette citation"
  },
  "Remove this quote's picture pin": {
    "es": "Quitar la imagen fijada a esta cita",
    "fr": "Retirer l’image épinglée à cette citation"
  },
  "Make an image to keep": {
    "es": "Crear una imagen para guardar",
    "fr": "Créer une image à garder"
  },
  "Quote image shape": {
    "es": "Forma de la imagen de cita",
    "fr": "Format de l’image de citation"
  },
  "Portrait · 1080 × 1350": {
    "es": "Vertical · 1080 × 1350",
    "fr": "Portrait · 1080 × 1350"
  },
  "Square · 1080 × 1080": {
    "es": "Cuadrada · 1080 × 1080",
    "fr": "Carré · 1080 × 1080"
  },
  "Story · 1080 × 1920": {
    "es": "Historia · 1080 × 1920",
    "fr": "Story · 1080 × 1920"
  },
  "Wide · 1600 × 900": {
    "es": "Horizontal · 1600 × 900",
    "fr": "Paysage · 1600 × 900"
  },
  "Download format": {
    "es": "Formato de descarga",
    "fr": "Format de téléchargement"
  },
  "WebP · where supported": {
    "es": "WebP · si es compatible",
    "fr": "WebP · si pris en charge"
  },
  "Automatic readability · high contrast colors and at least 70% photo shade": {
    "es": "Legibilidad automática · alto contraste y al menos un 70 % de oscurecimiento",
    "fr": "Lisibilité automatique · contraste élevé et assombrissement d’au moins 70 %"
  },
  "Turn this off to use your own download text color and shading. Personal photo/video choices still take precedence over Motive scenes. These choices apply to the website, not your installed widget.": {
    "es": "Desactívalo para usar tu propio color de texto y oscuridad en las descargas. Tus fotos y vídeos personales siguen teniendo prioridad. Estos ajustes se aplican al sitio web, no al widget instalado.",
    "fr": "Désactivez cette option pour utiliser vos couleurs de texte et votre assombrissement dans les téléchargements. Vos photos et vidéos personnelles restent prioritaires. Ces choix s’appliquent au site, pas au widget installé."
  },
  "Picture crop · left to right": {
    "es": "Recorte de imagen · de izquierda a derecha",
    "fr": "Cadrage de l’image · de gauche à droite"
  },
  "Picture crop · top to bottom": {
    "es": "Recorte de imagen · de arriba abajo",
    "fr": "Cadrage de l’image · de haut en bas"
  },
  "Quote text · horizontal position": {
    "es": "Texto de la cita · posición horizontal",
    "fr": "Texte de la citation · position horizontale"
  },
  "Quote text · vertical position": {
    "es": "Texto de la cita · posición vertical",
    "fr": "Texte de la citation · position verticale"
  },
  "Drag on the preview to move the text, or use the sliders. Text fitting keeps it inside the readable area. Phone wallpaper downloads keep the top space for your clock.": {
    "es": "Arrastra sobre la vista previa para mover el texto o usa los controles. El texto se ajusta al área legible. Los fondos de teléfono dejan espacio arriba para el reloj.",
    "fr": "Faites glisser le texte sur l’aperçu ou utilisez les curseurs. Le texte reste dans la zone lisible. Les fonds du téléphone gardent de la place en haut pour l’horloge."
  },
  "Preview of this quote image": {
    "es": "Vista previa de esta imagen de cita",
    "fr": "Aperçu de cette image de citation"
  },
  "Save this design": {
    "es": "Guardar este diseño",
    "fr": "Enregistrer ce modèle"
  },
  "Design name": {
    "es": "Nombre del diseño",
    "fr": "Nom du modèle"
  },
  "My quiet card": {
    "es": "Mi tarjeta tranquila",
    "fr": "Ma carte paisible"
  },
  "Save design preset": {
    "es": "Guardar diseño",
    "fr": "Enregistrer le modèle"
  },
  "Saved designs": {
    "es": "Diseños guardados",
    "fr": "Modèles enregistrés"
  },
  "Apply saved design": {
    "es": "Aplicar diseño guardado",
    "fr": "Appliquer le modèle enregistré"
  },
  "Presets keep your font, alignment, size, color, shape, and text position. They do not copy private photo files or quote text.": {
    "es": "Los diseños guardan la fuente, la alineación, el tamaño, el color, la forma y la posición del texto. No copian fotos privadas ni el texto de las citas.",
    "fr": "Les modèles conservent la police, l’alignement, la taille, la couleur, le format et la position du texte. Ils ne copient ni photos privées ni texte des citations."
  },
  "Download this quote image": {
    "es": "Descargar esta imagen de cita",
    "fr": "Télécharger cette image de citation"
  },
  "Download phone wallpaper": {
    "es": "Descargar fondo para el teléfono",
    "fr": "Télécharger le fond du téléphone"
  },
  "Choose a saved design": {
    "es": "Elegir un diseño guardado",
    "fr": "Choisir un modèle enregistré"
  },
  "This quote keeps in Auto match: {label}": {
    "es": "Esta cita conserva en ajuste automático: {label}",
    "fr": "Cette citation conserve en association automatique : {label}"
  },
  "This quote follows your current picture choice.": {
    "es": "Esta cita sigue tu elección actual de imagen.",
    "fr": "Cette citation suit votre choix d’image actuel."
  },
  "♥ {label} is a favorite": {
    "es": "♥ {label} está en favoritas",
    "fr": "♥ {label} est dans les favoris"
  },
  "♡ Favorite {label}": {
    "es": "♡ Añadir {label} a favoritas",
    "fr": "♡ Ajouter {label} aux favoris"
  },
  "Preview unavailable. Your original photo and quote are still kept.": {
    "es": "Vista previa no disponible. Tu foto original y la cita se conservan.",
    "fr": "Aperçu indisponible. Votre photo originale et la citation sont conservées."
  },
  "Choose a Motive scene first. Personal photos and videos keep their separate setting.": {
    "es": "Elige primero una imagen de Motive. Las fotos y vídeos personales mantienen su ajuste independiente.",
    "fr": "Choisissez d’abord une image de Motive. Les photos et vidéos personnelles gardent leur réglage distinct."
  },
  "Choose at least one picture subject.": {
    "es": "Elige al menos un tema de imágenes.",
    "fr": "Choisissez au moins un sujet d’image."
  },
  "Matching and rotation now use your selected subjects. Manual pictures and pinned quotes keep their explicit choices.": {
    "es": "El ajuste y la rotación usan ahora los temas elegidos. Las imágenes manuales y fijadas a citas conservan su elección.",
    "fr": "L’association et la rotation utilisent vos sujets choisis. Les images manuelles et épinglées gardent leur choix explicite."
  },
  "Give this design a name.": {
    "es": "Ponle nombre a este diseño.",
    "fr": "Donnez un nom à ce modèle."
  },
  "Design preset saved on this device and included in backups.": {
    "es": "Diseño guardado en este dispositivo e incluido en las copias de seguridad.",
    "fr": "Modèle enregistré sur cet appareil et inclus dans les sauvegardes."
  },
  "Choose a saved design first.": {
    "es": "Elige primero un diseño guardado.",
    "fr": "Choisissez d’abord un modèle enregistré."
  },
  "Image downloaded. Personal photos and quote words are included only in this local file.": {
    "es": "Imagen descargada. Las fotos personales y las palabras de la cita solo se incluyen en este archivo local.",
    "fr": "Image téléchargée. Les photos personnelles et les mots de la citation sont inclus uniquement dans ce fichier local."
  },
  "Could not make the image. Your original photo and quote are still kept.": {
    "es": "No se pudo crear la imagen. Tu foto original y la cita se conservan.",
    "fr": "Impossible de créer l’image. Votre photo originale et la citation sont conservées."
  },
  "Your personal photo · Change it in Wellbeing studio → Settings": {
    "es": "Tu foto personal · Cámbiala en Bienestar → Ajustes",
    "fr": "Votre photo personnelle · À modifier dans Bien-être → Réglages"
  },
  "Your muted video · A still frame is used in downloads.": {
    "es": "Tu vídeo sin sonido · Las descargas usan una imagen fija.",
    "fr": "Votre vidéo sans son · Une image fixe est utilisée dans les téléchargements."
  },
  "This photo could not load. Your quote is still here. Reconnect and retry, or use a plain background.": {
    "es": "No se pudo cargar esta foto. Tu cita sigue aquí. Vuelve a conectarte y reinténtalo o usa un fondo liso.",
    "fr": "Cette photo n’a pas pu se charger. Votre citation est toujours là. Reconnectez-vous et réessayez, ou utilisez un fond uni."
  },
  "Plain background · A little room for your words.": {
    "es": "Fondo liso · Un poco de espacio para tus palabras.",
    "fr": "Fond uni · Un peu de place pour vos mots."
  },
  "Pictures will change with every new quote.": {
    "es": "Las imágenes cambiarán con cada cita nueva.",
    "fr": "Les images changeront à chaque nouvelle citation."
  },
  "Backgrounds now follow each quote’s meaning.": {
    "es": "Los fondos siguen ahora el significado de cada cita.",
    "fr": "Les fonds suivent maintenant le sens de chaque citation."
  },
  "Auto match": {
    "es": "Ajuste automático",
    "fr": "Association automatique"
  },
  "Changes with every quote": {
    "es": "Cambia con cada cita",
    "fr": "Change à chaque citation"
  },
  "Fixed picture": {
    "es": "Imagen fija",
    "fr": "Image fixe"
  },
  "Your photo ▾": {
    "es": "Tu foto ▾",
    "fr": "Votre photo ▾"
  },
  "A beginning that fits": {
    "es": "Un comienzo a tu medida",
    "fr": "Un départ à votre mesure"
  },
  "Practical preparation, adjusting your support, and starting at an unhurried pace.": {
    "es": "Prepararte de forma práctica, ajustar lo que te sostiene y empezar sin prisas.",
    "fr": "Se préparer concrètement, ajuster ses appuis et commencer sans hâte."
  },
  "A little forward, every day": {
    "es": "Un poco hacia adelante, cada día",
    "fr": "Un petit pas, chaque jour"
  },
  "Read a quote, tap Read aloud, save a favorite, or choose Another perspective. The website avoids repeats until your available set is complete.": {
    "es": "Lee una cita, toca Leer en voz alta, guarda una favorita o elige Otra perspectiva. El sitio evita repeticiones hasta completar el conjunto disponible.",
    "fr": "Lisez une citation, touchez Lire à voix haute, enregistrez un favori ou choisissez Un autre regard. Le site évite les répétitions jusqu’à la fin de la série disponible."
  },
  "Find what you need": {
    "es": "Encuentra lo que necesitas",
    "fr": "Trouvez ce dont vous avez besoin"
  },
  "Use Quotes, Saved, Wellbeing, Practice, and Space. Wellbeing contains calming sessions and your journal; Practice contains habits, mood history, sleep, and focus.": {
    "es": "Usa Citas, Guardadas, Bienestar, Práctica y Mi espacio. Bienestar contiene las sesiones de calma y tu diario; Práctica incluye hábitos, el historial de ánimo, descanso y concentración.",
    "fr": "Utilisez Citations, Enregistrées, Bien-être, Pratique et Mon espace. Bien-être contient les séances de calme et votre journal ; Pratique regroupe les habitudes, l’historique des humeurs, le repos et la concentration."
  },
  "Make the home feel lighter": {
    "es": "Una pantalla de inicio más ligera",
    "fr": "Allégez l’accueil"
  },
  "Simple home keeps the main quote and essential actions in view. Your other tools remain available in the menu. You can change back at any time.": {
    "es": "El inicio sencillo mantiene a la vista la cita principal y las acciones esenciales. Las demás herramientas siguen en el menú. Puedes volver a la vista completa cuando quieras.",
    "fr": "L’accueil simplifié garde la citation principale et les actions essentielles en vue. Les autres outils restent dans le menu. Vous pouvez revenir à la vue complète à tout moment."
  },
  "Keep your words safe": {
    "es": "Cuida tus palabras",
    "fr": "Gardez vos mots en sécurité"
  },
  "Everything is kept on this browser unless you export or connect your own sync. A full backup includes journal entries and media; a smaller quote backup does not. Save unfinished writing before reopening an update.": {
    "es": "Todo se guarda en este navegador, salvo que exportes o conectes tu propia sincronización. Una copia completa incluye el diario y los archivos multimedia; una copia de citas más pequeña no. Guarda lo que estés escribiendo antes de reabrir una actualización.",
    "fr": "Tout reste dans ce navigateur, sauf si vous exportez ou connectez votre propre synchronisation. Une sauvegarde complète inclut le journal et les médias ; une sauvegarde de citations plus petite ne les inclut pas. Enregistrez vos textes en cours avant de rouvrir une mise à jour."
  },
  "Step {step} of {total}": {
    "es": "Paso {step} de {total}",
    "fr": "Étape {step} sur {total}"
  },
  "Skip tour": {
    "es": "Omitir recorrido",
    "fr": "Passer la visite"
  },
  "Back": {
    "es": "Atrás",
    "fr": "Retour"
  },
  "Next": {
    "es": "Siguiente",
    "fr": "Suivant"
  },
  "Finish": {
    "es": "Terminar",
    "fr": "Terminer"
  },
  "Show full home": {
    "es": "Mostrar inicio completo",
    "fr": "Afficher l’accueil complet"
  },
  "Use simple home": {
    "es": "Usar inicio sencillo",
    "fr": "Utiliser l’accueil simplifié"
  },
  "A home that suits you": {
    "es": "Un inicio a tu medida",
    "fr": "Un accueil qui vous convient"
  },
  "Use a simpler home screen": {
    "es": "Usar una pantalla de inicio más sencilla",
    "fr": "Utiliser un accueil plus simple"
  },
  "Keep the quote and essential actions in view. Everything else remains available in the menu.": {
    "es": "Mantén a la vista la cita y las acciones esenciales. Todo lo demás sigue en el menú.",
    "fr": "Gardez la citation et les actions essentielles en vue. Tout le reste demeure dans le menu."
  },
  "Show me around": {
    "es": "Mostrarme cómo funciona",
    "fr": "Me faire visiter"
  },
  "Background gallery & image design": {
    "es": "Galería de fondos y diseño de imágenes",
    "fr": "Galerie de fonds et création d’images"
  },
  "Change color theme": {
    "es": "Cambiar tema de color",
    "fr": "Changer le thème de couleur"
  },
  "Theme: Light": {
    "es": "Tema: Claro",
    "fr": "Thème : Clair"
  },
  "Theme: Sage": {
    "es": "Tema: Salvia",
    "fr": "Thème : Sauge"
  },
  "Theme: Dark": {
    "es": "Tema: Oscuro",
    "fr": "Thème : Sombre"
  },
  "✧ {count} day of showing up": {
    "es": "✧ {count} día por aquí",
    "fr": "✧ {count} jour de présence"
  },
  "✧ {count} days of showing up": {
    "es": "✧ {count} días por aquí",
    "fr": "✧ {count} jours de présence"
  },
  "{count} intention followed through": {
    "es": "{count} intención cumplida",
    "fr": "{count} intention concrétisée"
  },
  "{count} intentions followed through": {
    "es": "{count} intenciones cumplidas",
    "fr": "{count} intentions concrétisées"
  },
  "Words that fit today": {
    "es": "Palabras para hoy",
    "fr": "Des mots pour aujourd’hui"
  },
  "Mix your quote themes": {
    "es": "Combinar los temas de citas",
    "fr": "Mélanger les thèmes de citations"
  },
  "Wording": {
    "es": "Estilo del texto",
    "fr": "Style de formulation"
  },
  "A mix of styles": {
    "es": "Una mezcla de estilos",
    "fr": "Un mélange de styles"
  },
  "Gentler reminders": {
    "es": "Recordatorios más suaves",
    "fr": "Des rappels plus doux"
  },
  "Direct, practical prompts": {
    "es": "Propuestas directas y prácticas",
    "fr": "Des pistes directes et pratiques"
  },
  "Length": {
    "es": "Longitud",
    "fr": "Longueur"
  },
  "Any length": {
    "es": "Cualquier longitud",
    "fr": "Sans limite de longueur"
  },
  "Short · up to 12 words": {
    "es": "Breves · hasta 12 palabras",
    "fr": "Courtes · jusqu’à 12 mots"
  },
  "Medium · 13–23 words": {
    "es": "Medias · de 13 a 23 palabras",
    "fr": "Moyennes · de 13 à 23 mots"
  },
  "Longer · 24 words or more": {
    "es": "Largas · 24 palabras o más",
    "fr": "Longues · 24 mots ou plus"
  },
  "What is happening today?": {
    "es": "¿Qué está pasando hoy?",
    "fr": "Que se passe-t-il aujourd’hui ?"
  },
  "Everyday encouragement": {
    "es": "Ánimo para cada día",
    "fr": "Encouragement au quotidien"
  },
  "Starting something": {
    "es": "Empezar algo",
    "fr": "Commencer quelque chose"
  },
  "After a setback": {
    "es": "Después de un contratiempo",
    "fr": "Après un revers"
  },
  "A busy day": {
    "es": "Un día ajetreado",
    "fr": "Une journée chargée"
  },
  "Trusting yourself": {
    "es": "Confiar en ti",
    "fr": "Se faire confiance"
  },
  "Making room to rest": {
    "es": "Hacer espacio para descansar",
    "fr": "Faire une place au repos"
  },
  "A season of change": {
    "es": "Una etapa de cambios",
    "fr": "Une période de changement"
  },
  "Words or phrases to leave out · separated by commas": {
    "es": "Palabras o frases que excluir · separadas por comas",
    "fr": "Mots ou expressions à exclure · séparés par des virgules"
  },
  "For example: competition, deadlines": {
    "es": "Por ejemplo: competition, deadlines",
    "fr": "Par exemple : competition, deadlines"
  },
  "Suggest a saved favorite to revisit": {
    "es": "Sugerir una cita favorita para releer",
    "fr": "Suggérer un favori enregistré à relire"
  },
  "Preferences guide future quotes. Search and saved favorites remain available. Wording groups are approximate; no emotional assessment is made.": {
    "es": "Las preferencias orientan las próximas citas. La búsqueda y las favoritas siguen disponibles. Los grupos de estilo son aproximados; no se evalúan tus emociones.",
    "fr": "Les préférences orientent les prochaines citations. La recherche et les favoris restent accessibles. Les groupes de formulation sont approximatifs ; aucune évaluation émotionnelle n’est faite."
  },
  "For built-in quotes, style, length, situations and excluded words use the original English. Personal words are matched as written.": {
    "es": "En las citas incluidas, el estilo, la longitud, las situaciones y las palabras excluidas usan el original en inglés. Tus palabras personales se comparan tal como las escribiste.",
    "fr": "Pour les citations intégrées, le style, la longueur, les situations et les mots exclus utilisent l’anglais d’origine. Vos mots personnels sont comparés tels que vous les avez écrits."
  },
  "Save quote preferences": {
    "es": "Guardar preferencias de citas",
    "fr": "Enregistrer les préférences de citations"
  },
  "{count} quote hidden from future rotation. Saved favorites stay accessible.": {
    "es": "{count} cita oculta de la rotación futura. Las favoritas siguen disponibles.",
    "fr": "{count} citation masquée des prochaines sélections. Les favoris restent accessibles."
  },
  "{count} quotes hidden from future rotation. Saved favorites stay accessible.": {
    "es": "{count} citas ocultas de la rotación futura. Las favoritas siguen disponibles.",
    "fr": "{count} citations masquées des prochaines sélections. Les favoris restent accessibles."
  },
  "Choose at least one theme.": {
    "es": "Elige al menos un tema.",
    "fr": "Choisissez au moins un thème."
  },
  "No quotes match that combination. Try fewer muted words, another length, or another tone.": {
    "es": "Ninguna cita coincide con esa combinación. Prueba a excluir menos palabras, otra longitud u otro estilo.",
    "fr": "Aucune citation ne correspond à cette combinaison. Essayez moins de mots exclus, une autre longueur ou un autre style."
  },
  "Preferences saved. Your saved quotes and reading history were kept.": {
    "es": "Preferencias guardadas. Tus citas guardadas y el historial de lectura se conservan.",
    "fr": "Préférences enregistrées. Vos citations enregistrées et votre historique de lecture sont conservés."
  },
  "This is your last matching quote. Broaden your preferences before hiding it.": {
    "es": "Esta es la última cita que coincide. Amplía tus preferencias antes de ocultarla.",
    "fr": "C’est votre dernière citation correspondante. Élargissez vos préférences avant de la masquer."
  },
  "Hidden from future rotation. Your saved favorites were kept.": {
    "es": "Oculta de la rotación futura. Tus favoritas se conservan.",
    "fr": "Masquée des prochaines sélections. Vos favoris enregistrés sont conservés."
  },
  "Quote restored to future rotation.": {
    "es": "Cita devuelta a la rotación futura.",
    "fr": "Citation rétablie dans les prochaines sélections."
  },
  "Hidden quotes restored. Reading history stays where it was.": {
    "es": "Citas ocultas restauradas. El historial de lectura sigue donde estaba.",
    "fr": "Citations masquées rétablies. L’historique de lecture reste à sa place."
  },
  "Quote preferences reset. Your saved words are still here.": {
    "es": "Preferencias de citas restablecidas. Tus palabras guardadas siguen aquí.",
    "fr": "Préférences de citations réinitialisées. Vos mots enregistrés sont toujours là."
  },
  "Restore hidden quotes": {
    "es": "Restaurar citas ocultas",
    "fr": "Rétablir les citations masquées"
  },
  "Reset quote preferences": {
    "es": "Restablecer preferencias de citas",
    "fr": "Réinitialiser les préférences de citations"
  },
  "Why this reminder?": {
    "es": "¿Por qué este recordatorio?",
    "fr": "Pourquoi ce rappel ?"
  },
  "One of your own reminders.": {
    "es": "Uno de tus propios recordatorios.",
    "fr": "Un de vos propres rappels."
  },
  "A reminder in {category}.": {
    "es": "Un recordatorio de {category}.",
    "fr": "Un rappel sur le thème {category}."
  },
  "Situation: {pack} · Theme: {category}.": {
    "es": "Situación: {pack} · Tema: {category}.",
    "fr": "Situation : {pack} · Thème : {category}."
  },
  "Attribution you supplied: {author}": {
    "es": "Autoría que indicaste: {author}",
    "fr": "Attribution que vous avez indiquée : {author}"
  },
  "Original Motive reminder. No celebrity attribution.": {
    "es": "Recordatorio original de Motive. Sin atribución a una persona famosa.",
    "fr": "Rappel original de Motive. Aucune attribution à une célébrité."
  },
  "Original Motive reminder · added {date}. No celebrity attribution.": {
    "es": "Recordatorio original de Motive · añadido el {date}. Sin atribución a una persona famosa.",
    "fr": "Rappel original de Motive · ajouté le {date}. Aucune attribution à une célébrité."
  },
  "Your context note · outside the journal vault": {
    "es": "Tu nota de contexto · fuera del diario cifrado",
    "fr": "Votre note de contexte · hors du journal chiffré"
  },
  "What would you like to remember about this quote?": {
    "es": "¿Qué te gustaría recordar sobre esta cita?",
    "fr": "Que souhaitez-vous retenir de cette citation ?"
  },
  "Save quote note": {
    "es": "Guardar nota de la cita",
    "fr": "Enregistrer la note de citation"
  },
  "Copy link to this built-in quote": {
    "es": "Copiar enlace a esta cita incluida",
    "fr": "Copier le lien de cette citation intégrée"
  },
  "Quote note saved here. It is outside the journal vault and included in backups.": {
    "es": "Nota guardada aquí. Está fuera del diario cifrado y se incluye en las copias de seguridad.",
    "fr": "Note enregistrée ici. Elle reste hors du journal chiffré et figure dans les sauvegardes."
  },
  "Quote link copied. Personal notes and saved preferences are not in the link.": {
    "es": "Enlace copiado. El enlace no incluye notas personales ni preferencias guardadas.",
    "fr": "Lien copié. Les notes personnelles et les préférences enregistrées ne figurent pas dans le lien."
  },
  "Clipboard unavailable. Use Share quote to share its words instead.": {
    "es": "Portapapeles no disponible. Usa Compartir cita para compartir sus palabras.",
    "fr": "Presse-papiers indisponible. Utilisez Partager la citation pour partager ses mots."
  },
  "Words to practice": {
    "es": "Palabras para practicar",
    "fr": "Des mots à pratiquer"
  },
  "I": {
    "es": "Yo",
    "fr": "Je"
  },
  "You": {
    "es": "Tú",
    "fr": "Vous"
  },
  "Read practice words": {
    "es": "Leer palabras de práctica",
    "fr": "Lire les mots à pratiquer"
  },
  "A separate original affirmation for this theme.": {
    "es": "Una afirmación original independiente para este tema.",
    "fr": "Une affirmation originale distincte pour ce thème."
  },
  "A saved reminder to revisit": {
    "es": "Un recordatorio guardado para releer",
    "fr": "Un rappel enregistré à relire"
  },
  "Explore a related reminder": {
    "es": "Explorar un recordatorio relacionado",
    "fr": "Explorer un rappel proche"
  },
  "Matched locally by shared wording and themes. Reading again keeps the unread rotation where it is.": {
    "es": "Se relacionan en este dispositivo por palabras y temas compartidos. Volver a leer conserva tu recorrido de citas sin leer.",
    "fr": "Rapprochement sur cet appareil par les mots et les thèmes communs. Relire conserve votre progression parmi les citations non lues."
  },
  "I can give my own experience a place in this decision.": {
    "es": "Puedo dar lugar a mi propia experiencia en esta decisión.",
    "fr": "Je peux donner une place à ma propre expérience dans cette décision."
  },
  "You can give your own experience a place in this decision.": {
    "es": "Puedes dar lugar a tu propia experiencia en esta decisión.",
    "fr": "Vous pouvez donner une place à votre propre expérience dans cette décision."
  },
  "I can choose one useful task and give it a little attention.": {
    "es": "Puedo elegir una tarea útil y dedicarle un poco de atención.",
    "fr": "Je peux choisir une tâche utile et lui accorder un peu d’attention."
  },
  "You can choose one useful task and give it a little attention.": {
    "es": "Puedes elegir una tarea útil y dedicarle un poco de atención.",
    "fr": "Vous pouvez choisir une tâche utile et lui accorder un peu d’attention."
  },
  "I can adjust this attempt without deciding the whole story is over.": {
    "es": "Puedo ajustar este intento sin decidir que toda la historia terminó.",
    "fr": "Je peux ajuster cet essai sans décider que toute l’histoire est finie."
  },
  "You can adjust this attempt without deciding the whole story is over.": {
    "es": "Puedes ajustar este intento sin decidir que toda la historia terminó.",
    "fr": "Vous pouvez ajuster cet essai sans décider que toute l’histoire est finie."
  },
  "I can be curious before I expect myself to be skilled.": {
    "es": "Puedo sentir curiosidad antes de exigirme habilidad.",
    "fr": "Je peux faire preuve de curiosité avant d’attendre de moi de l’habileté."
  },
  "You can be curious before you expect yourself to be skilled.": {
    "es": "Puedes sentir curiosidad antes de exigirte habilidad.",
    "fr": "Vous pouvez faire preuve de curiosité avant d’attendre de vous de l’habileté."
  },
  "I can leave a little space around the next thing I do.": {
    "es": "Puedo dejar un poco de espacio alrededor de lo próximo que haga.",
    "fr": "Je peux laisser un peu d’espace autour de ma prochaine action."
  },
  "You can leave a little space around the next thing you do.": {
    "es": "Puedes dejar un poco de espacio alrededor de lo próximo que hagas.",
    "fr": "Vous pouvez laisser un peu d’espace autour de votre prochaine action."
  },
  "Find something in Motive": {
    "es": "Encuentra algo en Motive",
    "fr": "Trouvez quelque chose dans Motive"
  },
  "Close Motive search": {
    "es": "Cerrar búsqueda de Motive",
    "fr": "Fermer la recherche Motive"
  },
  "Words to find on this device": {
    "es": "Palabras que buscar en este dispositivo",
    "fr": "Mots à chercher sur cet appareil"
  },
  "Look in": {
    "es": "Buscar en",
    "fr": "Chercher dans"
  },
  "All included areas": {
    "es": "Todas las áreas incluidas",
    "fr": "Tous les espaces inclus"
  },
  "Collections": {
    "es": "Colecciones",
    "fr": "Collections"
  },
  "Recording names": {
    "es": "Nombres de grabaciones",
    "fr": "Noms des enregistrements"
  },
  "Habit names": {
    "es": "Nombres de hábitos",
    "fr": "Noms des habitudes"
  },
  "Motive tools": {
    "es": "Herramientas de Motive",
    "fr": "Outils de Motive"
  },
  "Journal text · opt in below": {
    "es": "Texto del diario · activar abajo",
    "fr": "Texte du journal · à activer ci-dessous"
  },
  "Include journal text in this search": {
    "es": "Incluir el texto del diario en esta búsqueda",
    "fr": "Inclure le texte du journal dans cette recherche"
  },
  "Local search only. Journal text is excluded by default and requires an unlocked journal when encryption is enabled. Results clear when you close search or lock the journal.": {
    "es": "Búsqueda solo en este dispositivo. El texto del diario se excluye por defecto y requiere desbloquearlo si está cifrado. Los resultados se borran al cerrar la búsqueda o bloquear el diario.",
    "fr": "Recherche uniquement sur cet appareil. Le texte du journal est exclu par défaut et nécessite son déverrouillage si le chiffrement est activé. Les résultats s’effacent à la fermeture de la recherche ou au verrouillage du journal."
  },
  "Built-in quotes match their original English words. Tool names also match the selected language. Personal records match their own words.": {
    "es": "Las citas incluidas se buscan por sus palabras originales en inglés. Los nombres de herramientas también se buscan en el idioma elegido. Los registros personales se buscan tal como están escritos.",
    "fr": "Les citations intégrées sont recherchées dans leur anglais d’origine. Les noms d’outils sont aussi recherchés dans la langue choisie. Les données personnelles sont recherchées avec leurs propres mots."
  },
  "Search this device": {
    "es": "Buscar en este dispositivo",
    "fr": "Rechercher sur cet appareil"
  },
  "Show more search results": {
    "es": "Mostrar más resultados",
    "fr": "Afficher plus de résultats"
  },
  "Searching this device…": {
    "es": "Buscando en este dispositivo…",
    "fr": "Recherche sur cet appareil…"
  },
  "{count} matching item on this device.": {
    "es": "{count} resultado en este dispositivo.",
    "fr": "{count} résultat sur cet appareil."
  },
  "{count} matching items on this device.": {
    "es": "{count} resultados en este dispositivo.",
    "fr": "{count} résultats sur cet appareil."
  },
  "Search again to apply the journal choice.": {
    "es": "Busca de nuevo para aplicar la opción del diario.",
    "fr": "Relancez la recherche pour appliquer le choix concernant le journal."
  },
  "Unlock the journal before including its text.": {
    "es": "Desbloquea el diario antes de incluir su texto.",
    "fr": "Déverrouillez le journal avant d’inclure son texte."
  },
  "The journal was locked. Search again after unlocking.": {
    "es": "El diario se bloqueó. Desbloquéalo y busca de nuevo.",
    "fr": "Le journal a été verrouillé. Relancez la recherche après l’avoir déverrouillé."
  },
  "Stop and save your recording before switching areas.": {
    "es": "Detén y guarda la grabación antes de cambiar de área.",
    "fr": "Arrêtez et enregistrez votre enregistrement avant de changer d’espace."
  },
  "Save your unfinished journal entry before leaving. Closing this area locks the journal and clears unsaved words and attachments.": {
    "es": "Guarda la entrada del diario antes de salir. Cerrar esta área bloquea el diario y borra las palabras y adjuntos sin guardar.",
    "fr": "Enregistrez votre entrée du journal avant de quitter cet espace. Sa fermeture verrouille le journal et efface les mots et pièces jointes non enregistrés."
  },
  "Quote collection": {
    "es": "Colección de citas",
    "fr": "Collection de citations"
  },
  "Daily practice habit": {
    "es": "Hábito de práctica diaria",
    "fr": "Habitude de pratique quotidienne"
  },
  "Local audio recording": {
    "es": "Grabación de audio local",
    "fr": "Enregistrement audio local"
  },
  "Motive tool · {area}": {
    "es": "Herramienta de Motive · {area}",
    "fr": "Outil de Motive · {area}"
  },
  "Calming sessions and breathing timers": {
    "es": "Sesiones de calma y temporizadores de respiración",
    "fr": "Séances de calme et minuteurs de respiration"
  },
  "Your listening queue": {
    "es": "Tu cola de escucha",
    "fr": "Votre file d’écoute"
  },
  "Trim a recording and download a short WAV clip": {
    "es": "Recortar una grabación y descargar un fragmento WAV",
    "fr": "Découper un enregistrement et télécharger un extrait WAV"
  },
  "Write a recording transcript": {
    "es": "Escribir la transcripción de una grabación",
    "fr": "Écrire la transcription d’un enregistrement"
  },
  "Choose read-aloud voices": {
    "es": "Elegir voces de lectura",
    "fr": "Choisir les voix de lecture"
  },
  "Journal and private reflections": {
    "es": "Diario y reflexiones privadas",
    "fr": "Journal et réflexions privées"
  },
  "Sleep stories and audio timer": {
    "es": "Cuentos para dormir y temporizador de audio",
    "fr": "Histoires pour dormir et minuteur audio"
  },
  "Mood history and check-ins": {
    "es": "Historial de ánimo y registros personales",
    "fr": "Historique des humeurs et points personnels"
  },
  "Download a full backup with media": {
    "es": "Descargar copia completa con archivos multimedia",
    "fr": "Télécharger une sauvegarde complète avec médias"
  },
  "Choose quote themes, length and wording": {
    "es": "Elegir temas, longitud y estilo de citas",
    "fr": "Choisir les thèmes, la longueur et le style des citations"
  },
  "Print a quote pack": {
    "es": "Imprimir un conjunto de citas",
    "fr": "Imprimer une sélection de citations"
  },
  "Print up to 40 quotes matching this library's filters. Choose Save as PDF in your browser if available.": {
    "es": "Imprime hasta 40 citas que coincidan con los filtros de esta biblioteca. Elige Guardar como PDF en el navegador si está disponible.",
    "fr": "Imprimez jusqu’à 40 citations correspondant aux filtres de la bibliothèque. Choisissez Enregistrer au format PDF dans votre navigateur si cette option est proposée."
  },
  "Include my own quotes in this readable export": {
    "es": "Incluir mis propias citas en esta exportación legible",
    "fr": "Inclure mes propres citations dans cet export lisible"
  },
  "Print matching quote pack": {
    "es": "Imprimir las citas que coinciden",
    "fr": "Imprimer la sélection correspondante"
  },
  "No quotes match this pack. Adjust your filters.": {
    "es": "Ninguna cita coincide con este conjunto. Ajusta los filtros.",
    "fr": "Aucune citation ne correspond à cette sélection. Ajustez les filtres."
  },
  "Allow the print window, then try again.": {
    "es": "Permite la ventana de impresión y vuelve a intentarlo.",
    "fr": "Autorisez la fenêtre d’impression, puis réessayez."
  },
  "Motive quote pack": {
    "es": "Conjunto de citas de Motive",
    "fr": "Sélection de citations Motive"
  },
  "Words to carry with you": {
    "es": "Palabras para llevar contigo",
    "fr": "Des mots à emporter"
  },
  "Print pack opened with {count} matching quotes, up to 40. Choose Save as PDF if your browser offers it.": {
    "es": "Se abrió la impresión con {count} citas, hasta un máximo de 40. Elige Guardar como PDF si el navegador lo permite.",
    "fr": "La sélection à imprimer contient {count} citations, dans la limite de 40. Choisissez Enregistrer au format PDF si votre navigateur le propose."
  },
  "Make a note about a content problem": {
    "es": "Anotar un problema del contenido",
    "fr": "Noter un problème de contenu"
  },
  "Download the currently displayed quote and your note for your own review. Nothing is sent or published.": {
    "es": "Descarga la cita actual y tu nota para revisarlas por tu cuenta. No se envía ni publica nada.",
    "fr": "Téléchargez la citation affichée et votre note pour votre propre examen. Rien n’est envoyé ni publié."
  },
  "What needs attention?": {
    "es": "¿Qué necesita atención?",
    "fr": "Quel point mérite attention ?"
  },
  "Download review note": {
    "es": "Descargar nota de revisión",
    "fr": "Télécharger la note de révision"
  },
  "Add a note about what needs attention.": {
    "es": "Añade una nota sobre lo que necesita atención.",
    "fr": "Ajoutez une note sur le point qui mérite attention."
  },
  "Review note downloaded. Nothing was sent or published.": {
    "es": "Nota de revisión descargada. No se envió ni publicó nada.",
    "fr": "Note de révision téléchargée. Rien n’a été envoyé ni publié."
  },
  "⌁ Your personal quotes, saved favorites, and intentions stay in this browser. Back them up in “Your space.”": {
    "es": "⌁ Tus citas personales, favoritas e intenciones se quedan en este navegador. Haz una copia en «Mi espacio».",
    "fr": "⌁ Vos citations personnelles, favoris et intentions restent dans ce navigateur. Sauvegardez-les dans «Mon espace»."
  },
  "A little perspective can change your whole day.": {
    "es": "Un poco de perspectiva puede cambiar tu día.",
    "fr": "Un peu de perspective peut changer votre journée."
  },
  "MADE FOR YOUR EVERYDAY": {
    "es": "PARA TU DÍA A DÍA",
    "fr": "POUR VOTRE QUOTIDIEN"
  },
  "{category} · {author}": {
    "es": "{category} · {author}",
    "fr": "{category} · {author}"
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
