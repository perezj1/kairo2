// Traducciones de tareas por ID
export interface TaskTranslation {
  title: string;
  description: string;
}

export const TASK_TRANSLATIONS: Record<string, Record<string, TaskTranslation>> = {
  // Bajar peso
  "c911ced7-5abb-4d31-8ee8-7c5738875989": {
    es: { title: "Camina 15 minutos", description: "Da un paseo corto después de comer para activar tu metabolismo" },
    en: { title: "Walk 15 minutes", description: "Take a short walk after eating to activate your metabolism" },
    de: { title: "15 Minuten gehen", description: "Machen Sie nach dem Essen einen kurzen Spaziergang, um Ihren Stoffwechsel zu aktivieren" }
  },
  "3fb61f5a-db02-4611-8e58-31134075abc9": {
    es: { title: "Bebe agua antes de comer", description: "Toma un vaso de agua 20 minutos antes de cada comida" },
    en: { title: "Drink water before eating", description: "Drink a glass of water 20 minutes before each meal" },
    de: { title: "Trinken Sie Wasser vor dem Essen", description: "Trinken Sie 20 Minuten vor jeder Mahlzeit ein Glas Wasser" }
  },
  "94318711-1403-49e1-9565-8afbb9db6e0d": {
    es: { title: "Usa escaleras", description: "Sube escaleras en lugar del ascensor hoy" },
    en: { title: "Use stairs", description: "Take the stairs instead of the elevator today" },
    de: { title: "Benutze die Treppe", description: "Nehmen Sie heute die Treppe statt den Aufzug" }
  },
  "a49985bd-8213-4cf5-8585-75bc5a0e7afa": {
    es: { title: "Porciones más pequeñas", description: "Usa un plato más pequeño en tu próxima comida" },
    en: { title: "Smaller portions", description: "Use a smaller plate for your next meal" },
    de: { title: "Kleinere Portionen", description: "Verwenden Sie einen kleineren Teller für Ihre nächste Mahlzeit" }
  },
  "e515b06d-5262-4bbe-97f9-dae1f2e39fc3": {
    es: { title: "Mastica despacio", description: "Tómate al menos 20 minutos para comer tu próxima comida" },
    en: { title: "Chew slowly", description: "Take at least 20 minutes to eat your next meal" },
    de: { title: "Langsam kauen", description: "Nehmen Sie sich mindestens 20 Minuten Zeit für Ihre nächste Mahlzeit" }
  },

  // Ahorrar
  "89b20ce0-1e30-4d99-b3c0-26010408941f": {
    es: { title: "Regla 24 horas", description: "Espera 24 horas antes de hacer una compra impulsiva" },
    en: { title: "24-hour rule", description: "Wait 24 hours before making an impulse purchase" },
    de: { title: "24-Stunden-Regel", description: "Warten Sie 24 Stunden, bevor Sie einen Impulskauf tätigen" }
  },
  "a29aa29b-132e-4566-b9cb-67e36ff23436": {
    es: { title: "Café en casa", description: "Prepara tu café en casa en lugar de comprarlo" },
    en: { title: "Coffee at home", description: "Make your coffee at home instead of buying it" },
    de: { title: "Kaffee zu Hause", description: "Machen Sie Ihren Kaffee zu Hause, anstatt ihn zu kaufen" }
  },
  "d03ff73b-e599-409d-918f-573360eea66f": {
    es: { title: "Lista de compras", description: "Haz una lista antes de ir al supermercado y síguela" },
    en: { title: "Shopping list", description: "Make a list before going to the supermarket and follow it" },
    de: { title: "Einkaufsliste", description: "Erstellen Sie eine Liste, bevor Sie zum Supermarkt gehen, und befolgen Sie sie" }
  },
  "1a784256-3711-40e9-be83-a398b2929a1f": {
    es: { title: "Revisa suscripciones", description: "Revisa tus suscripciones y cancela las que no uses" },
    en: { title: "Review subscriptions", description: "Review your subscriptions and cancel the ones you don't use" },
    de: { title: "Abonnements überprüfen", description: "Überprüfen Sie Ihre Abonnements und kündigen Sie die, die Sie nicht nutzen" }
  },
  "7e7b869c-d311-485d-b4f1-cdaf1f5bf807": {
    es: { title: "Comida casera", description: "Cocina en casa en lugar de pedir comida" },
    en: { title: "Home-cooked meal", description: "Cook at home instead of ordering food" },
    de: { title: "Hausgemachtes Essen", description: "Kochen Sie zu Hause, anstatt Essen zu bestellen" }
  },

  // Mantenerse en forma
  "6eeae41b-8b89-4d4d-bb33-e2c8245e2108": {
    es: { title: "10 flexiones", description: "Haz 10 flexiones ahora mismo" },
    en: { title: "10 push-ups", description: "Do 10 push-ups right now" },
    de: { title: "10 Liegestütze", description: "Machen Sie jetzt 10 Liegestütze" }
  },
  "2eecd1b6-d1f0-4207-8db7-47598b08508c": {
    es: { title: "Estira 5 minutos", description: "Toma 5 minutos para estirar todo tu cuerpo" },
    en: { title: "Stretch 5 minutes", description: "Take 5 minutes to stretch your whole body" },
    de: { title: "5 Minuten dehnen", description: "Nehmen Sie sich 5 Minuten Zeit, um Ihren ganzen Körper zu dehnen" }
  },
  "09ec9bfc-0d8c-4eed-b14e-e76e9ff90e24": {
    es: { title: "20 sentadillas", description: "Realiza 20 sentadillas con buena forma" },
    en: { title: "20 squats", description: "Perform 20 squats with good form" },
    de: { title: "20 Kniebeugen", description: "Führen Sie 20 Kniebeugen mit guter Form aus" }
  },
  "d7f57a6b-68f2-47d1-ad7a-6e48f38f1b1a": {
    es: { title: "Plank 30 segundos", description: "Mantén la posición de plancha durante 30 segundos" },
    en: { title: "Plank 30 seconds", description: "Hold a plank position for 30 seconds" },
    de: { title: "Plank 30 Sekunden", description: "Halten Sie eine Plank-Position für 30 Sekunden" }
  },
  "b29ef8c1-5426-4f47-b91e-2e9c0a8d7e3b": {
    es: { title: "Salta la cuerda", description: "Salta la cuerda durante 3 minutos" },
    en: { title: "Jump rope", description: "Jump rope for 3 minutes" },
    de: { title: "Seilspringen", description: "Springen Sie 3 Minuten Seil" }
  },

  // Dejar de fumar
  "a17a32a2-6eca-4fec-9b38-519fedd5b3de": {
    es: { title: "Respira profundo", description: "Cuando sientas el deseo, respira profundamente 10 veces" },
    en: { title: "Breathe deeply", description: "When you feel the urge, breathe deeply 10 times" },
    de: { title: "Tief atmen", description: "Wenn Sie das Verlangen spüren, atmen Sie 10 Mal tief ein" }
  },
  "c2dc75d6-e918-440d-bb18-ff31f04c7737": {
    es: { title: "Bebe agua", description: "Mantén una botella de agua cerca y bebe cuando tengas ganas" },
    en: { title: "Drink water", description: "Keep a water bottle nearby and drink when you feel the urge" },
    de: { title: "Wasser trinken", description: "Halten Sie eine Wasserflasche bereit und trinken Sie, wenn Sie das Verlangen spüren" }
  },
  "7d01f5cb-9f2e-4bc8-b093-237764296b3f": {
    es: { title: "Mastica chicle", description: "Ten chicle sin azúcar a mano para ocupar tu boca" },
    en: { title: "Chew gum", description: "Keep sugar-free gum handy to keep your mouth busy" },
    de: { title: "Kaugummi kauen", description: "Halten Sie zuckerfreien Kaugummi bereit, um Ihren Mund zu beschäftigen" }
  },
  "ebf7838f-6ee8-4eca-ae1a-feb0bf421126": {
    es: { title: "Llama a alguien", description: "Habla con un amigo durante 5 minutos cuando sientas el impulso" },
    en: { title: "Call someone", description: "Talk to a friend for 5 minutes when you feel the urge" },
    de: { title: "Rufen Sie jemanden an", description: "Sprechen Sie 5 Minuten mit einem Freund, wenn Sie das Verlangen spüren" }
  },
  "b540727c-4b25-45fb-aa16-21fe6e916a48": {
    es: { title: "Camina 5 minutos", description: "Sal a caminar cuando aparezca el deseo de fumar" },
    en: { title: "Walk 5 minutes", description: "Go for a walk when the urge to smoke appears" },
    de: { title: "5 Minuten gehen", description: "Gehen Sie spazieren, wenn das Verlangen zu rauchen auftritt" }
  },

  // Comer más sano
  "99d4cf91-942c-42ca-a493-568851436f40": {
    es: { title: "Añade una fruta", description: "Incluye una fruta en tu próxima comida o snack" },
    en: { title: "Add a fruit", description: "Include a fruit in your next meal or snack" },
    de: { title: "Fügen Sie Obst hinzu", description: "Fügen Sie eine Frucht zu Ihrer nächsten Mahlzeit oder Snack hinzu" }
  },
  "07cb09da-d1a7-48ea-8e3a-011944da0ab3": {
    es: { title: "Proteína en el desayuno", description: "Incluye proteína en tu desayuno de mañana" },
    en: { title: "Protein at breakfast", description: "Include protein in tomorrow's breakfast" },
    de: { title: "Protein zum Frühstück", description: "Fügen Sie Protein zu Ihrem morgigen Frühstück hinzu" }
  },
  "4fd33685-4585-4881-b8be-3ff3ac7c938b": {
    es: { title: "Evita procesados", description: "Elige alimentos sin procesar en tu próxima comida" },
    en: { title: "Avoid processed foods", description: "Choose unprocessed foods in your next meal" },
    de: { title: "Vermeiden Sie verarbeitete Lebensmittel", description: "Wählen Sie unverarbeitete Lebensmittel für Ihre nächste Mahlzeit" }
  },
  "dbf7a39c-9430-475a-9ad9-3aad03d90e4e": {
    es: { title: "Snack de vegetales", description: "Prepara palitos de zanahoria o apio como snack" },
    en: { title: "Vegetable snack", description: "Prepare carrot or celery sticks as a snack" },
    de: { title: "Gemüse-Snack", description: "Bereiten Sie Karotten- oder Selleriesticks als Snack vor" }
  },
  "38d688ce-9b7c-45e0-906d-a00bb69a7048": {
    es: { title: "Ensalada de entrada", description: "Empieza tu comida con una ensalada pequeña" },
    en: { title: "Salad starter", description: "Start your meal with a small salad" },
    de: { title: "Salat als Vorspeise", description: "Beginnen Sie Ihre Mahlzeit mit einem kleinen Salat" }
  },

  // Dormir mejor
  "546c2025-f05a-41f3-b23a-c9eee5c621bc": {
    es: { title: "Rutina de sueño", description: "Ve a la cama a la misma hora esta noche" },
    en: { title: "Sleep routine", description: "Go to bed at the same time tonight" },
    de: { title: "Schlafroutine", description: "Gehen Sie heute Abend zur gleichen Zeit ins Bett" }
  },
  "4732bc2c-28c4-42fc-8df0-414bcf50d126": {
    es: { title: "Sin pantallas 1 hora antes", description: "Apaga todos los dispositivos 1 hora antes de dormir" },
    en: { title: "No screens 1 hour before", description: "Turn off all devices 1 hour before sleep" },
    de: { title: "Keine Bildschirme 1 Stunde vorher", description: "Schalten Sie alle Geräte 1 Stunde vor dem Schlafengehen aus" }
  },
  "f8441ac3-38f4-4d2a-a628-f470b8a8d819": {
    es: { title: "Té relajante", description: "Prepara una infusión relajante antes de dormir" },
    en: { title: "Relaxing tea", description: "Prepare a relaxing tea before sleep" },
    de: { title: "Entspannender Tee", description: "Bereiten Sie einen entspannenden Tee vor dem Schlafengehen vor" }
  },
  "cd9b2ab8-e13f-492e-8ef9-5f54a7b727c0": {
    es: { title: "Oscurece tu habitación", description: "Asegúrate de que tu cuarto esté completamente oscuro" },
    en: { title: "Darken your room", description: "Make sure your room is completely dark" },
    de: { title: "Verdunkeln Sie Ihr Zimmer", description: "Stellen Sie sicher, dass Ihr Zimmer vollständig dunkel ist" }
  },
  "f5d50683-7d44-4e9e-922e-3a76b026a45e": {
    es: { title: "Temperatura fresca", description: "Mantén tu habitación fresca (18-20°C)" },
    en: { title: "Cool temperature", description: "Keep your room cool (18-20°C)" },
    de: { title: "Kühle Temperatur", description: "Halten Sie Ihr Zimmer kühl (18-20°C)" }
  },

  // Eliminar estrés
  "eab559a6-77df-40da-b877-efe06e642816": {
    es: { title: "Desconecta 15 minutos", description: "Apaga el teléfono y descansa 15 minutos" },
    en: { title: "Disconnect 15 minutes", description: "Turn off your phone and rest for 15 minutes" },
    de: { title: "15 Minuten abschalten", description: "Schalten Sie Ihr Telefon aus und ruhen Sie sich 15 Minuten aus" }
  },
  "f5f8d115-d2d6-47eb-9fe1-f4ff434099de": {
    es: { title: "Meditación 5 minutos", description: "Practica 5 minutos de meditación guiada" },
    en: { title: "5-minute meditation", description: "Practice 5 minutes of guided meditation" },
    de: { title: "5 Minuten Meditation", description: "Üben Sie 5 Minuten geführte Meditation" }
  },
  "25b1c526-7405-4e94-b883-c4898477fddb": {
    es: { title: "Escribe 3 cosas positivas", description: "Anota 3 cosas buenas que te pasaron hoy" },
    en: { title: "Write 3 positive things", description: "Write down 3 good things that happened today" },
    de: { title: "Schreiben Sie 3 positive Dinge", description: "Schreiben Sie 3 gute Dinge auf, die heute passiert sind" }
  },
  "b7585f73-6441-4bec-b3e1-863436296842": {
    es: { title: "Respira 4-7-8", description: "Practica la técnica 4-7-8: inhala 4, retén 7, exhala 8" },
    en: { title: "Breathe 4-7-8", description: "Practice the 4-7-8 technique: inhale 4, hold 7, exhale 8" },
    de: { title: "Atmen Sie 4-7-8", description: "Üben Sie die 4-7-8-Technik: einatmen 4, halten 7, ausatmen 8" }
  },
  "17a3cf51-a551-4dee-adc8-beb800f5dabd": {
    es: { title: "Música relajante", description: "Escucha música tranquila durante 10 minutos" },
    en: { title: "Relaxing music", description: "Listen to calm music for 10 minutes" },
    de: { title: "Entspannende Musik", description: "Hören Sie 10 Minuten lang ruhige Musik" }
  },

  // Mejorar el medio ambiente
  "a5e3f0b1-2c4d-4e5f-a6b7-8c9d0e1f2a3b": {
    es: { title: "Lleva tu bolsa", description: "Usa tu propia bolsa reutilizable para las compras" },
    en: { title: "Bring your bag", description: "Use your own reusable bag for shopping" },
    de: { title: "Bringen Sie Ihre Tasche mit", description: "Verwenden Sie Ihre eigene wiederverwendbare Tasche zum Einkaufen" }
  },
  "b6f4a1c2-3d5e-4f6a-b7c8-9d0e1f2a3b4c": {
    es: { title: "Desconecta aparatos", description: "Desconecta los aparatos que no estés usando" },
    en: { title: "Unplug devices", description: "Unplug devices you're not using" },
    de: { title: "Geräte ausstecken", description: "Trennen Sie Geräte, die Sie nicht verwenden" }
  },
  "c7a5b2d3-4e6f-5a7b-c8d9-0e1f2a3b4c5d": {
    es: { title: "Ducha corta", description: "Reduce tu ducha en 2 minutos hoy" },
    en: { title: "Short shower", description: "Reduce your shower by 2 minutes today" },
    de: { title: "Kurze Dusche", description: "Verkürzen Sie Ihre Dusche heute um 2 Minuten" }
  },
  "d8b6c3e4-5f7a-6b8c-d9e0-1f2a3b4c5d6e": {
    es: { title: "Recicla correctamente", description: "Separa tu basura en reciclaje, orgánico y general" },
    en: { title: "Recycle properly", description: "Separate your waste into recycling, organic and general" },
    de: { title: "Richtig recyceln", description: "Trennen Sie Ihren Müll in Recycling, organisch und allgemein" }
  },
  "e9c7d4f5-6a8b-7c9d-e0f1-2a3b4c5d6e7f": {
    es: { title: "Transporte sostenible", description: "Usa bicicleta, camina o transporte público hoy" },
    en: { title: "Sustainable transport", description: "Use bike, walk or public transport today" },
    de: { title: "Nachhaltiger Transport", description: "Nutzen Sie heute Fahrrad, gehen Sie zu Fuss oder nutzen Sie öffentliche Verkehrsmittel" }
  },

  // Reducir uso de pantallas
  "f0d8e5a6-7b9c-8d0e-f1a2-3b4c5d6e7f8a": {
    es: { title: "Sin teléfono en comidas", description: "Guarda el teléfono durante las comidas" },
    en: { title: "No phone during meals", description: "Put away your phone during meals" },
    de: { title: "Kein Telefon beim Essen", description: "Legen Sie Ihr Telefon während der Mahlzeiten weg" }
  },
  "a1e9f6b7-8c0d-9e1f-a2b3-4c5d6e7f8a9b": {
    es: { title: "Lee 15 minutos", description: "Lee un libro físico durante 15 minutos" },
    en: { title: "Read 15 minutes", description: "Read a physical book for 15 minutes" },
    de: { title: "15 Minuten lesen", description: "Lesen Sie 15 Minuten lang ein physisches Buch" }
  },
  "b2f0a7c8-9d1e-0f2a-b3c4-5d6e7f8a9b0c": {
    es: { title: "Modo avión 1 hora", description: "Activa modo avión durante 1 hora" },
    en: { title: "Airplane mode 1 hour", description: "Turn on airplane mode for 1 hour" },
    de: { title: "Flugmodus 1 Stunde", description: "Aktivieren Sie den Flugmodus für 1 Stunde" }
  },
  "c3a1b8d9-0e2f-1a3b-c4d5-6e7f8a9b0c1d": {
    es: { title: "Paseo sin móvil", description: "Sal a caminar 20 minutos sin tu teléfono" },
    en: { title: "Walk without phone", description: "Go for a 20-minute walk without your phone" },
    de: { title: "Spaziergang ohne Telefon", description: "Machen Sie einen 20-minütigen Spaziergang ohne Ihr Telefon" }
  },
  "d4b2c9e0-1f3a-2b4c-d5e6-7f8a9b0c1d2e": {
    es: { title: "Desactiva notificaciones", description: "Silencia las notificaciones de redes sociales hoy" },
    en: { title: "Disable notifications", description: "Silence social media notifications today" },
    de: { title: "Benachrichtigungen deaktivieren", description: "Stummschalten Sie heute Social-Media-Benachrichtigungen" }
  },

  // Ahorrar - 30 tareas
  "EASY_ahorrar_1": { 
  "es": { "title": "Haz un presupuesto mensual", "description": "Haz un presupuesto rápido: ingresos y 5–10 gastos fijos/variables en una nota o app." }, 
  "en": { "title": "Make a monthly budget", "description": "Draft a quick budget: income and 5–10 fixed/variable expenses in a note or app." }, 
  "de": { "title": "Erstelle ein Monatsbudget", "description": "Schnelles Budget: Einnahmen und 5–10 fixe/variable Ausgaben in Notiz oder App festhalten." } 
},
"EASY_ahorrar_2": { 
  "es": { "title": "Cocina en casa hoy", "description": "Prepara una comida sencilla (omelette, pasta, ensalada) en vez de pedir delivery." }, 
  "en": { "title": "Cook at home today", "description": "Make a simple meal (omelet, pasta, salad) instead of ordering delivery." }, 
  "de": { "title": "Koche heute zu Hause", "description": "Bereite eine einfache Mahlzeit (Omelett, Pasta, Salat) statt zu bestellen." } 
},
"MEDIUM_ahorrar_3": { 
  "es": { "title": "Cancela una suscripción que no uses", "description": "Revisa tus suscripciones y cancela al menos una que no utilices." }, 
  "en": { "title": "Cancel a subscription you don’t use", "description": "Review your subscriptions and cancel at least one you don’t use." }, 
  "de": { "title": "Kündige ein ungenutztes Abo", "description": "Prüfe deine Abos und kündige mindestens eines, das du nicht nutzt." } 
},
"MEDIUM_ahorrar_4": { 
  "es": { "title": "Compara precios antes de comprar", "description": "Compara online en 3 webs/apps y guarda el mejor precio." }, 
  "en": { "title": "Compare prices before buying", "description": "Check 3 sites/apps online and save the best price." }, 
  "de": { "title": "Preise vor dem Kauf vergleichen", "description": "Vergleiche online in 3 Websites/Apps und speichere den besten Preis." } 
},
"EASY_ahorrar_5": { 
  "es": { "title": "Lleva tu propia botella de agua", "description": "Llena una botella reutilizable para evitar comprar bebidas fuera." }, 
  "en": { "title": "Bring your own water bottle", "description": "Fill a reusable bottle to avoid buying drinks outside." }, 
  "de": { "title": "Eigene Wasserflasche mitnehmen", "description": "Fülle eine wiederverwendbare Flasche, um unterwegs nichts zu kaufen." } 
},
"HARD_ahorrar_6": { 
  "es": { "title": "Usa transporte público hoy", "description": "Si sales, prioriza transporte público o combina recados." }, 
  "en": { "title": "Use public transport today", "description": "If you go out, prioritize public transport or combine errands." }, 
  "de": { "title": "Heute mit ÖV fahren", "description": "Wenn du rausgehst, nutze ÖV oder kombiniere Wege." } 
},
"EASY_ahorrar_7": { 
  "es": { "title": "Haz una lista antes del súper", "description": "Crea una lista en casa y cíñete a ella para evitar impulsos." }, 
  "en": { "title": "Make a list before the grocery store", "description": "Write a list at home and stick to it to avoid impulse buys." }, 
  "de": { "title": "Einkaufsliste vor dem Supermarkt", "description": "Erstelle zu Hause eine Liste und halte dich daran, um Impulskäufe zu vermeiden." } 
},
"HARD_ahorrar_8": { 
  "es": { "title": "Repara algo en vez de comprar nuevo", "description": "Dedica 20–30 min a arreglar o mantener un objeto." }, 
  "en": { "title": "Repair something instead of buying new", "description": "Spend 20–30 min fixing or maintaining an item." }, 
  "de": { "title": "Etwas reparieren statt neu kaufen", "description": "Nimm dir 20–30 Min., um einen Gegenstand zu reparieren oder zu pflegen." } 
},
"HARD_ahorrar_9": { 
  "es": { "title": "Ahorra el 10% de tus ingresos", "description": "Programa una transferencia automática (objetivo 10%)." }, 
  "en": { "title": "Save 10% of your income", "description": "Set up an automatic transfer (goal 10%)." }, 
  "de": { "title": "10 % des Einkommens sparen", "description": "Richte eine automatische Überweisung ein (Ziel 10 %)." } 
},
"EASY_ahorrar_10": { 
  "es": { "title": "Evita el café de cafetería", "description": "Prepara tu café en casa y calcula el ahorro." }, 
  "en": { "title": "Skip café coffee", "description": "Brew your coffee at home and estimate the savings." }, 
  "de": { "title": "Kaffee nicht im Café kaufen", "description": "Koche deinen Kaffee zu Hause und berechne die Ersparnis." } 
},
"HARD_ahorrar_11": { 
  "es": { "title": "Vende algo que no uses", "description": "Publica un artículo en una app de segunda mano (fotos y precio)." }, 
  "en": { "title": "Sell something you don’t use", "description": "List an item on a second-hand app (photos and price)." }, 
  "de": { "title": "Verkaufe etwas Unbenutztes", "description": "Stelle einen Artikel in eine Secondhand-App (Fotos und Preis)." } 
},
"EASY_ahorrar_12": { 
  "es": { "title": "Usa cupones de descuento", "description": "Antes de pagar online, busca y aplica un cupón." }, 
  "en": { "title": "Use discount coupons", "description": "Before paying online, search and apply a coupon." }, 
  "de": { "title": "Gutscheincodes nutzen", "description": "Suche vor dem Online-Bezahlen nach einem Code und wende ihn an." } 
},
"MEDIUM_ahorrar_13": { 
  "es": { "title": "Planifica tus comidas semanales", "description": "Diseña 3–5 menús sencillos y lista ingredientes." }, 
  "en": { "title": "Plan your weekly meals", "description": "Draft 3–5 simple menus and list ingredients." }, 
  "de": { "title": "Wöchentliche Mahlzeiten planen", "description": "Erstelle 3–5 einfache Menüs und schreibe die Zutaten auf." } 
},
"MEDIUM_ahorrar_14": { 
  "es": { "title": "Compra productos de segunda mano", "description": "Busca desde casa un artículo que necesites en marketplaces." }, 
  "en": { "title": "Buy second-hand items", "description": "From home, find something you need on marketplaces." }, 
  "de": { "title": "Secondhand kaufen", "description": "Suche von zu Hause aus ein benötigtes Produkt in Marktplätzen." } 
},
"EASY_ahorrar_15": { 
  "es": { "title": "Reduce el consumo de energía", "description": "Apaga regletas, luces innecesarias y activa modo ahorro." }, 
  "en": { "title": "Reduce energy use", "description": "Turn off power strips, unnecessary lights, and enable eco modes." }, 
  "de": { "title": "Energieverbrauch senken", "description": "Steckerleisten und unnötiges Licht ausschalten, Sparmodus aktivieren." } 
},
"EASY_ahorrar_16": { 
  "es": { "title": "Espera 24h antes de compras grandes", "description": "Añade al carrito y espera ≥24h antes de pagar." }, 
  "en": { "title": "Wait 24h before big purchases", "description": "Add to cart and wait ≥24h before paying." }, 
  "de": { "title": "24 Std. vor Großkäufen warten", "description": "In den Warenkorb legen und ≥24 Std. mit dem Kauf warten." } 
},
"MEDIUM_ahorrar_17": { 
  "es": { "title": "Usa apps de cashback", "description": "Instala/activa una app de cashback y vincúlala." }, 
  "en": { "title": "Use cashback apps", "description": "Install/enable a cashback app and link it." }, 
  "de": { "title": "Cashback-Apps nutzen", "description": "Installiere/aktiviere eine Cashback-App und verknüpfe sie." } 
},
"MEDIUM_ahorrar_18": { 
  "es": { "title": "Prepara tu almuerzo para mañana", "description": "Deja listo un almuerzo sencillo en la nevera." }, 
  "en": { "title": "Pack tomorrow’s lunch", "description": "Prepare a simple lunch and store it in the fridge." }, 
  "de": { "title": "Morgenessen vorbereiten", "description": "Bereite ein einfaches Lunch vor und stelle es in den Kühlschrank." } 
},
"HARD_ahorrar_19": { 
  "es": { "title": "Negocia tus facturas de servicios", "description": "Solicita una mejor tarifa por chat o teléfono." }, 
  "en": { "title": "Negotiate your utility bills", "description": "Ask for a better rate via chat or phone." }, 
  "de": { "title": "Nebenkosten verhandeln", "description": "Fordere per Chat oder Telefon einen besseren Tarif an." } 
},
"EASY_ahorrar_20": { 
  "es": { "title": "Evita compras online impulsivas", "description": "Elimina métodos de pago guardados o usa bloqueo temporal." }, 
  "en": { "title": "Avoid impulsive online buys", "description": "Remove saved payment methods or use a temporary block." }, 
  "de": { "title": "Impulskäufe online vermeiden", "description": "Gespeicherte Zahlungsmittel entfernen oder temporär sperren." } 
},
"HARD_ahorrar_21": { 
  "es": { "title": "Usa la regla de 30 días", "description": "Crea una nota “Lista de espera 30 días” para compras no esenciales." }, 
  "en": { "title": "Use the 30-day rule", "description": "Create a “30-day waitlist” note for non-essential purchases." }, 
  "de": { "title": "30-Tage-Regel anwenden", "description": "Lege eine „30-Tage-Warteliste“ für nicht notwendige Käufe an." } 
},
"MEDIUM_ahorrar_22": { 
  "es": { "title": "Organiza actividades gratuitas", "description": "Planifica hoy una actividad gratuita en casa." }, 
  "en": { "title": "Plan free activities", "description": "Plan a free at-home activity today." }, 
  "de": { "title": "Kostenlose Aktivitäten planen", "description": "Plane heute eine kostenlose Aktivität zu Hause." } 
},
"EASY_ahorrar_23": { 
  "es": { "title": "Revisa tus gastos hormiga", "description": "Detecta 1–2 pequeños gastos y define cómo recortarlos." }, 
  "en": { "title": "Audit your small “leak” expenses", "description": "Identify 1–2 small expenses and decide how to cut them." }, 
  "de": { "title": "Kleine „Leck“-Ausgaben prüfen", "description": "Finde 1–2 kleine Ausgaben und bestimme, wie du sie reduzierst." } 
},
"MEDIUM_ahorrar_24": { 
  "es": { "title": "Compra al por mayor no perecederos", "description": "Haz lista de básicos para comprar en cantidad al reponer." }, 
  "en": { "title": "Buy non-perishables in bulk", "description": "List basic items to buy in bulk when restocking." }, 
  "de": { "title": "Haltbares auf Vorrat kaufen", "description": "Liste Basisartikel, die du beim Auffüllen in Mengen kaufst." } 
},
"HARD_ahorrar_25": { 
  "es": { "title": "Usa la biblioteca pública", "description": "Saca tarjeta online o usa el catálogo digital." }, 
  "en": { "title": "Use the public library", "description": "Get a card online or use the digital catalog." }, 
  "de": { "title": "Öffentliche Bibliothek nutzen", "description": "Online Ausweis beantragen oder digitalen Katalog nutzen." } 
},
"HARD_ahorrar_26": { 
  "es": { "title": "Haz regalos caseros", "description": "Prepara un regalo DIY con materiales de casa." }, 
  "en": { "title": "Make DIY gifts", "description": "Create a homemade gift with materials you already have." }, 
  "de": { "title": "Selbstgemachte Geschenke", "description": "Bereite ein DIY-Geschenk mit vorhandenen Materialien." } 
},
"EASY_ahorrar_27": { 
  "es": { "title": "Congela alimentos a tiempo", "description": "Congela porciones y etiqueta con fecha." }, 
  "en": { "title": "Freeze food on time", "description": "Freeze portions and label them with dates." }, 
  "de": { "title": "Lebensmittel rechtzeitig einfrieren", "description": "Portionen einfrieren und mit Datum beschriften." } 
},
"HARD_ahorrar_28": { 
  "es": { "title": "Camina o usa bici para distancias cortas", "description": "Para recados cercanos, prioriza caminar o bici." }, 
  "en": { "title": "Walk or bike short distances", "description": "For nearby errands, choose walking or biking." }, 
  "de": { "title": "Kurze Strecken zu Fuß/Fahrrad", "description": "Für nahe Erledigungen zu Fuß oder mit dem Velo fahren." } 
},
"HARD_ahorrar_29": { 
  "es": { "title": "Compara seguros anualmente", "description": "Pide 2–3 cotizaciones y guarda la mejor." }, 
  "en": { "title": "Compare insurance yearly", "description": "Get 2–3 quotes and keep the best." }, 
  "de": { "title": "Versicherungen jährlich vergleichen", "description": "Hole 2–3 Offerten ein und speichere die beste." } 
},
"MEDIUM_ahorrar_30": { 
  "es": { "title": "Establece metas de ahorro específicas", "description": "Define monto/fecha y activa una regla de ahorro automático." }, 
  "en": { "title": "Set specific savings goals", "description": "Define amount/date and enable an automatic savings rule." }, 
  "de": { "title": "Konkrete Sparziele festlegen", "description": "Betrag/Datum definieren und automatische Sparregel aktivieren." } 
},

  // 100 Tareas para Bajar Peso
  "HARD_weight_loss_001": { "es": { "title": "Camina 10,000 pasos", "description": "Alcanza 10,000 pasos para activar tu metabolismo." }, "en": { "title": "Walk 10,000 steps", "description": "Hit 10,000 steps to activate your metabolism." }, "de": { "title": "Gehe 10.000 Schritte", "description": "Erreiche 10.000 Schritte, um den Stoffwechsel anzuregen." } },
  "EASY_weight_loss_002": { "es": { "title": "Bebe 2 litros de agua", "description": "Mantén tu cuerpo hidratado durante todo el día." }, "en": { "title": "Drink 2 liters of water", "description": "Keep your body hydrated throughout the day." }, "de": { "title": "Trinke 2 Liter Wasser", "description": "Halte deinen Körper den ganzen Tag über hydriert." } },
  "EASY_weight_loss_003": { "es": { "title": "Come sin distracciones", "description": "Disfruta tu comida sin TV, móvil ni pantallas." }, "en": { "title": "Eat without distractions", "description": "Enjoy your meal without TV, phone, or screens." }, "de": { "title": "Ohne Ablenkungen essen", "description": "Genieße dein Essen ohne TV, Handy oder Bildschirme." } },
  "EASY_weight_loss_004": { "es": { "title": "Desayuna proteína", "description": "Incluye huevos, yogur griego o proteína en el desayuno." }, "en": { "title": "Protein for breakfast", "description": "Include eggs, Greek yogurt, or protein at breakfast." }, "de": { "title": "Proteinreich frühstücken", "description": "Integriere Eier, griechischen Joghurt oder Protein ins Frühstück." } },
  "MEDIUM_weight_loss_005": { "es": { "title": "Sube escaleras", "description": "Usa las escaleras al menos 3 veces hoy." }, "en": { "title": "Take the stairs", "description": "Use the stairs at least three times today." }, "de": { "title": "Treppen steigen", "description": "Nutze heute mindestens dreimal die Treppe." } },
  "EASY_weight_loss_006": { "es": { "title": "Evita azúcar añadida", "description": "No consumas alimentos con azúcares añadidos hoy." }, "en": { "title": "Avoid added sugar", "description": "Skip foods with added sugars today." }, "de": { "title": "Zuckerzusatz vermeiden", "description": "Verzichte heute auf Lebensmittel mit zugesetztem Zucker." } },
  "EASY_weight_loss_007": { "es": { "title": "Duerme 7–8 horas", "description": "Asegura un sueño reparador para regular hormonas." }, "en": { "title": "Sleep 7–8 hours", "description": "Get restorative sleep to balance your hormones." }, "de": { "title": "7–8 Stunden schlafen", "description": "Sorge für erholsamen Schlaf zur Hormonregulation." } },
  "MEDIUM_weight_loss_008": { "es": { "title": "Verduras en cada comida", "description": "Incluye al menos una porción de verduras en cada plato." }, "en": { "title": "Veggies at every meal", "description": "Include at least one serving of vegetables per plate." }, "de": { "title": "Gemüse zu jeder Mahlzeit", "description": "Füge zu jedem Teller mindestens eine Portion Gemüse hinzu." } },
  "MEDIUM_weight_loss_009": { "es": { "title": "Haz 20 sentadillas", "description": "Fortalece piernas y glúteos con 20 sentadillas." }, "en": { "title": "Do 20 squats", "description": "Strengthen legs and glutes with 20 squats." }, "de": { "title": "Mache 20 Kniebeugen", "description": "Stärke Beine und Gesäß mit 20 Kniebeugen." } },
  "EASY_weight_loss_010": { "es": { "title": "Medita 10 minutos", "description": "Reduce el estrés que desencadena el comer emocional." }, "en": { "title": "Meditate for 10 minutes", "description": "Lower stress that triggers emotional eating." }, "de": { "title": "10 Minuten meditieren", "description": "Reduziere Stress, der emotionales Essen auslöst." } },
  "MEDIUM_weight_loss_011": { "es": { "title": "Planifica tus comidas", "description": "Organiza el menú del día para evitar impulsos." }, "en": { "title": "Plan your meals", "description": "Plan your day’s menu to avoid impulsive choices." }, "de": { "title": "Mahlzeiten planen", "description": "Plane dein Tagesmenü, um Impulskäufe zu vermeiden." } },
  "EASY_weight_loss_012": { "es": { "title": "Camina tras cenar", "description": "Da un paseo de 15 minutos después de la última comida." }, "en": { "title": "Walk after dinner", "description": "Take a 15-minute walk after your last meal." }, "de": { "title": "Nach dem Abendessen gehen", "description": "Mache einen 15-minütigen Spaziergang nach der letzten Mahlzeit." } },
  "EASY_weight_loss_013": { "es": { "title": "Come fruta fresca", "description": "Elige fruta entera en lugar de jugos." }, "en": { "title": "Eat fresh fruit", "description": "Choose whole fruit instead of juices." }, "de": { "title": "Frisches Obst essen", "description": "Wähle ganzes Obst statt Säfte." } },
  "MEDIUM_weight_loss_014": { "es": { "title": "Haz 10 flexiones", "description": "Fortalece el tren superior con 10 flexiones." }, "en": { "title": "Do 10 push-ups", "description": "Strengthen your upper body with 10 push-ups." }, "de": { "title": "Mache 10 Liegestütze", "description": "Stärke den Oberkörper mit 10 Liegestützen." } },
  "EASY_weight_loss_015": { "es": { "title": "Pésate a la misma hora", "description": "Registra tu peso en ayunas para ver el progreso." }, "en": { "title": "Weigh in at the same time", "description": "Record a fasted weight to track progress." }, "de": { "title": "Zur gleichen Zeit wiegen", "description": "Dokumentiere dein Nüchterngewicht für den Fortschritt." } },
  "MEDIUM_weight_loss_016": { "es": { "title": "Cocina en casa", "description": "Prepara al menos dos comidas caseras hoy." }, "en": { "title": "Cook at home", "description": "Make at least two home-cooked meals today." }, "de": { "title": "Zu Hause kochen", "description": "Bereite heute mindestens zwei hausgemachte Mahlzeiten zu." } },
  "EASY_weight_loss_017": { "es": { "title": "Lee etiquetas", "description": "Revisa calorías e ingredientes antes de comprar." }, "en": { "title": "Read labels", "description": "Check calories and ingredients before buying." }, "de": { "title": "Etiketten lesen", "description": "Prüfe Kalorien und Zutaten vor dem Kauf." } },
  "HARD_weight_loss_018": { "es": { "title": "Haz 30 burpees", "description": "Quema calorías con un ejercicio de cuerpo completo." }, "en": { "title": "Do 30 burpees", "description": "Burn calories with a full-body exercise." }, "de": { "title": "Mache 30 Burpees", "description": "Verbrenne Kalorien mit einer Ganzkörperübung." } },
  "EASY_weight_loss_019": { "es": { "title": "Usa platos pequeños", "description": "Controla porciones usando platos más pequeños." }, "en": { "title": "Use smaller plates", "description": "Control portions by using smaller plates." }, "de": { "title": "Kleinere Teller nutzen", "description": "Kontrolliere Portionen mit kleineren Tellern." } },
  "EASY_weight_loss_020": { "es": { "title": "Mastica despacio", "description": "Mastica al menos 20 veces cada bocado." }, "en": { "title": "Chew slowly", "description": "Chew each bite at least 20 times." }, "de": { "title": "Langsam kauen", "description": "Kaue jeden Bissen mindestens 20-mal." } },
  "MEDIUM_weight_loss_021": { "es": { "title": "Yoga 20 minutos", "description": "Mejora flexibilidad y reduce el estrés." }, "en": { "title": "20 minutes of yoga", "description": "Improve flexibility and reduce stress." }, "de": { "title": "20 Minuten Yoga", "description": "Verbessere die Flexibilität und reduziere Stress." } },
  "EASY_weight_loss_022": { "es": { "title": "Evita alcohol hoy", "description": "Elimina calorías vacías del alcohol." }, "en": { "title": "Skip alcohol today", "description": "Cut empty calories from alcohol." }, "de": { "title": "Heute keinen Alkohol", "description": "Spare leere Kalorien aus Alkohol." } },
  "EASY_weight_loss_023": { "es": { "title": "Grasas saludables", "description": "Incluye aguacate, nueces o aceite de oliva." }, "en": { "title": "Healthy fats", "description": "Add avocado, nuts, or olive oil." }, "de": { "title": "Gesunde Fette", "description": "Füge Avocado, Nüsse oder Olivenöl hinzu." } },
  "MEDIUM_weight_loss_024": { "es": { "title": "50 jumping jacks", "description": "Activa tu sistema cardiovascular con saltos." }, "en": { "title": "50 jumping jacks", "description": "Boost your cardio with jumping jacks." }, "de": { "title": "50 Hampelmänner", "description": "Aktiviere dein Herz-Kreislauf-System mit Hampelmännern." } },
  "EASY_weight_loss_025": { "es": { "title": "Bebe té verde", "description": "Aprovecha sus antioxidantes." }, "en": { "title": "Drink green tea", "description": "Benefit from its antioxidants." }, "de": { "title": "Grünen Tee trinken", "description": "Profitiere von den Antioxidantien." } },
  "EASY_weight_loss_026": { "es": { "title": "Lista de compras", "description": "Planifica compras para evitar tentaciones." }, "en": { "title": "Make a shopping list", "description": "Plan purchases to avoid temptations." }, "de": { "title": "Einkaufsliste erstellen", "description": "Plane Einkäufe, um Versuchungen zu vermeiden." } },
  "HARD_weight_loss_027": { "es": { "title": "Corre 15 minutos", "description": "Corre o trota en sitio durante 15 minutos." }, "en": { "title": "Run for 15 minutes", "description": "Run or jog in place for 15 minutes." }, "de": { "title": "15 Minuten laufen", "description": "Laufe oder jogge 15 Minuten (auch auf der Stelle)." } },
  "MEDIUM_weight_loss_028": { "es": { "title": "Come pescado azul", "description": "Incluye salmón, atún o sardinas." }, "en": { "title": "Eat oily fish", "description": "Include salmon, tuna, or sardines." }, "de": { "title": "Fettreichen Fisch essen", "description": "Integriere Lachs, Thunfisch oder Sardinen." } },
  "MEDIUM_weight_loss_029": { "es": { "title": "Plancha 1 minuto", "description": "Fortalece el core con una plancha de 60 s." }, "en": { "title": "1-minute plank", "description": "Strengthen your core with a 60-second plank." }, "de": { "title": "1-Minute Plank", "description": "Stärke den Core mit einer 60-Sekunden-Plank." } },
  "MEDIUM_weight_loss_030": { "es": { "title": "Evita fritos", "description": "Elige métodos de cocción más saludables." }, "en": { "title": "Avoid fried food", "description": "Choose healthier cooking methods." }, "de": { "title": "Frittiertes vermeiden", "description": "Wähle gesündere Garmethoden." } },
  "EASY_weight_loss_031": { "es": { "title": "Sol 15 minutos", "description": "Sintetiza vitamina D para tu metabolismo." }, "en": { "title": "15 minutes of sun", "description": "Synthesize vitamin D for metabolism support." }, "de": { "title": "15 Minuten Sonne", "description": "Unterstütze den Stoffwechsel mit Vitamin D." } },
  "HARD_weight_loss_032": { "es": { "title": "100 abdominales", "description": "Divide en series y cuida la técnica." }, "en": { "title": "100 sit-ups", "description": "Split into sets and keep good form." }, "de": { "title": "100 Sit-ups", "description": "Teile in Sätze auf und achte auf die Technik." } },
  "EASY_weight_loss_033": { "es": { "title": "Nueces naturales", "description": "Toma 30 g de nueces sin sal como snack." }, "en": { "title": "Natural nuts", "description": "Have 30 g of unsalted nuts as a snack." }, "de": { "title": "Natürliche Nüsse", "description": "Iss 30 g ungesalzene Nüsse als Snack." } },
  "EASY_weight_loss_034": { "es": { "title": "Agua antes de comer", "description": "Bebe un vaso 20 minutos antes de cada comida." }, "en": { "title": "Water before meals", "description": "Drink a glass 20 minutes before each meal." }, "de": { "title": "Wasser vor dem Essen", "description": "Trinke 20 Minuten vor jeder Mahlzeit ein Glas Wasser." } },
  "EASY_weight_loss_035": { "es": { "title": "Estiramientos", "description": "Dedica 15 minutos a estirar todo el cuerpo." }, "en": { "title": "Stretching", "description": "Spend 15 minutes stretching your whole body." }, "de": { "title": "Dehnen", "description": "Dehne 15 Minuten den ganzen Körper." } },
  "MEDIUM_weight_loss_036": { "es": { "title": "Lentejas o legumbres", "description": "Aporta proteína vegetal y fibra." }, "en": { "title": "Lentils or legumes", "description": "Add plant protein and fiber." }, "de": { "title": "Linsen oder Hülsenfrüchte", "description": "Bringe pflanzliches Eiweiß und Ballaststoffe ein." } },
  "MEDIUM_weight_loss_037": { "es": { "title": "Saltar la cuerda 10′", "description": "Quema calorías con cardio eficaz." }, "en": { "title": "Jump rope 10 min", "description": "Burn calories with efficient cardio." }, "de": { "title": "10 Min Seilspringen", "description": "Verbrenne Kalorien mit effektivem Cardio." } },
  "EASY_weight_loss_038": { "es": { "title": "Evita bebidas azucaradas", "description": "Nada de refrescos o energéticas hoy." }, "en": { "title": "Skip sugary drinks", "description": "No sodas or energy drinks today." }, "de": { "title": "Zuckergetränke meiden", "description": "Heute keine Softdrinks oder Energydrinks." } },
  "MEDIUM_weight_loss_039": { "es": { "title": "Batch cooking", "description": "Cocina varias comidas saludables para la semana." }, "en": { "title": "Batch cooking", "description": "Cook several healthy meals for the week." }, "de": { "title": "Vorkochen", "description": "Bereite mehrere gesunde Mahlzeiten für die Woche vor." } },
  "HARD_weight_loss_040": { "es": { "title": "Ciclismo 30 minutos", "description": "Pedalea al aire libre o en estática." }, "en": { "title": "Cycle for 30 minutes", "description": "Ride outdoors or on a stationary bike." }, "de": { "title": "30 Minuten Radfahren", "description": "Fahre draußen oder auf dem Heimtrainer." } },
  "EASY_weight_loss_041": { "es": { "title": "Come en 20 minutos", "description": "Dedica al menos 20 minutos a cada comida." }, "en": { "title": "Eat in 20 minutes", "description": "Spend at least 20 minutes per meal." }, "de": { "title": "In 20 Minuten essen", "description": "Nimm dir pro Mahlzeit mindestens 20 Minuten." } },
  "MEDIUM_weight_loss_042": { "es": { "title": "Zancadas", "description": "3 series de 15 por pierna." }, "en": { "title": "Lunges", "description": "3 sets of 15 per leg." }, "de": { "title": "Ausfallschritte", "description": "3 Sätze à 15 pro Bein." } },
  "EASY_weight_loss_043": { "es": { "title": "Café solo", "description": "Evita azúcar y cremas." }, "en": { "title": "Black coffee", "description": "Skip sugar and cream." }, "de": { "title": "Schwarzer Kaffee", "description": "Ohne Zucker und Sahne." } },
  "MEDIUM_weight_loss_044": { "es": { "title": "Baila 30 minutos", "description": "Quema calorías divirtiéndote." }, "en": { "title": "Dance for 30 minutes", "description": "Burn calories while having fun." }, "de": { "title": "30 Minuten tanzen", "description": "Verbrenne Kalorien mit Spaß." } },
  "MEDIUM_weight_loss_045": { "es": { "title": "Quinoa o avena", "description": "Incluye cereales integrales." }, "en": { "title": "Quinoa or oats", "description": "Include whole grains." }, "de": { "title": "Quinoa oder Hafer", "description": "Integriere Vollkorngetreide." } },
  "HARD_weight_loss_046": { "es": { "title": "Ejercicio en ayunas", "description": "Entrena 20 minutos antes del desayuno." }, "en": { "title": "Fasted workout", "description": "Train 20 minutes before breakfast." }, "de": { "title": "Nüchtern trainieren", "description": "Trainiere 20 Minuten vor dem Frühstück." } },
  "EASY_weight_loss_047": { "es": { "title": "Evita pan blanco", "description": "Elige integral o prescinde hoy." }, "en": { "title": "Avoid white bread", "description": "Choose whole-grain or skip it today." }, "de": { "title": "Weißbrot meiden", "description": "Wähle Vollkorn oder lass es heute weg." } },
  "HARD_weight_loss_048": { "es": { "title": "Nada 30 minutos", "description": "Bajo impacto y alta efectividad." }, "en": { "title": "Swim for 30 minutes", "description": "Low impact, high effectiveness." }, "de": { "title": "30 Minuten schwimmen", "description": "Geringe Belastung, hohe Wirkung." } },
  "EASY_weight_loss_049": { "es": { "title": "Brócoli al vapor", "description": "Inclúyelo como guarnición o plato." }, "en": { "title": "Steamed broccoli", "description": "Add it as a side or main." }, "de": { "title": "Gedämpfter Brokkoli", "description": "Als Beilage oder Hauptgericht hinzufügen." } },
  "HARD_weight_loss_050": { "es": { "title": "HIIT 15 minutos", "description": "Intervalos de alta intensidad controlada." }, "en": { "title": "15-minute HIIT", "description": "High-intensity intervals with control." }, "de": { "title": "15 Minuten HIIT", "description": "Hochintensive Intervalle mit Kontrolle." } },
  "EASY_weight_loss_051": { "es": { "title": "Vinagre de manzana", "description": "Una cucharada en agua antes de comer." }, "en": { "title": "Apple cider vinegar", "description": "One tablespoon in water before meals." }, "de": { "title": "Apfelessig", "description": "Ein Esslöffel in Wasser vor dem Essen." } },
  "HARD_weight_loss_052": { "es": { "title": "Mountain climbers", "description": "3 series de 20 repeticiones." }, "en": { "title": "Mountain climbers", "description": "3 sets of 20 reps." }, "de": { "title": "Mountain Climbers", "description": "3 Sätze à 20 Wiederholungen." } },
  "EASY_weight_loss_053": { "es": { "title": "Huevos duros", "description": "Snack proteico y saciante." }, "en": { "title": "Boiled eggs", "description": "A protein-rich, filling snack." }, "de": { "title": "Gekochte Eier", "description": "Proteinreicher, sättigender Snack." } },
  "EASY_weight_loss_054": { "es": { "title": "Camina descalzo", "description": "Conecta con la tierra 15 minutos." }, "en": { "title": "Walk barefoot", "description": "Ground yourself for 15 minutes." }, "de": { "title": "Barfuß gehen", "description": "15 Minuten erden und verbinden." } },
  "EASY_weight_loss_055": { "es": { "title": "Evita snacks procesados", "description": "Nada de galletas, chips o dulces industriales." }, "en": { "title": "Avoid processed snacks", "description": "Skip cookies, chips, and candy." }, "de": { "title": "Verarbeitete Snacks meiden", "description": "Keine Kekse, Chips oder Süßigkeiten." } },
  "MEDIUM_weight_loss_056": { "es": { "title": "Boxing shadow", "description": "Boxea en el aire durante 15 minutos." }, "en": { "title": "Shadow boxing", "description": "Box in the air for 15 minutes." }, "de": { "title": "Schattenboxen", "description": "15 Minuten in die Luft boxen." } },
  "EASY_weight_loss_057": { "es": { "title": "Espinacas frescas", "description": "Añádelas a ensaladas o batidos." }, "en": { "title": "Fresh spinach", "description": "Add to salads or smoothies." }, "de": { "title": "Frischer Spinat", "description": "Zu Salaten oder Smoothies hinzufügen." } },
  "MEDIUM_weight_loss_058": { "es": { "title": "Sube y baja banco", "description": "Step-ups: 3 series de 15 por pierna." }, "en": { "title": "Step-ups", "description": "3 sets of 15 per leg." }, "de": { "title": "Step-ups", "description": "3 Sätze à 15 pro Bein." } },
  "EASY_weight_loss_059": { "es": { "title": "Agua con limón", "description": "Empieza el día con agua tibia y limón." }, "en": { "title": "Lemon water", "description": "Start your day with warm lemon water." }, "de": { "title": "Wasser mit Zitrone", "description": "Starte den Tag mit warmem Zitronenwasser." } },
  "MEDIUM_weight_loss_060": { "es": { "title": "Sentadillas sumo", "description": "3 series de 20 repeticiones." }, "en": { "title": "Sumo squats", "description": "3 sets of 20 reps." }, "de": { "title": "Sumo-Kniebeugen", "description": "3 Sätze à 20 Wiederholungen." } },
  "EASY_weight_loss_061": { "es": { "title": "Pepino y zanahoria", "description": "Snack crujiente y bajo en calorías." }, "en": { "title": "Cucumber & carrot", "description": "A crunchy, low-calorie snack." }, "de": { "title": "Gurke & Karotte", "description": "Knuspriger, kalorienarmer Snack." } },
  "HARD_weight_loss_062": { "es": { "title": "Jumping lunges", "description": "Ejercicio explosivo: 3×10 por lado." }, "en": { "title": "Jumping lunges", "description": "Explosive move: 3×10 per side." }, "de": { "title": "Sprung-Ausfallschritte", "description": "Explosiv: 3×10 pro Seite." } },
  "EASY_weight_loss_063": { "es": { "title": "Evita lácteos enteros", "description": "Elige desnatados o vegetales." }, "en": { "title": "Skip full-fat dairy", "description": "Choose low-fat or plant-based options." }, "de": { "title": "Vollfett-Milchprodukte meiden", "description": "Wähle fettarme oder pflanzliche Alternativen." } },
  "MEDIUM_weight_loss_064": { "es": { "title": "Remo con banda", "description": "Ejercita la espalda con banda elástica." }, "en": { "title": "Band rows", "description": "Work your back with a resistance band." }, "de": { "title": "Rudern mit Band", "description": "Trainiere den Rücken mit einem Fitnessband." } },
  "EASY_weight_loss_065": { "es": { "title": "Tomate natural", "description": "Bajo en calorías y rico en licopeno." }, "en": { "title": "Fresh tomato", "description": "Low-calorie and rich in lycopene." }, "de": { "title": "Frische Tomate", "description": "Kalorienarm und lycopinreich." } },
  "MEDIUM_weight_loss_066": { "es": { "title": "Wall sits", "description": "Mantén 3 veces 45 segundos." }, "en": { "title": "Wall sits", "description": "Hold 3 × 45 seconds." }, "de": { "title": "Wandsitz", "description": "Halte 3×45 Sekunden." } },
  "EASY_weight_loss_067": { "es": { "title": "Infusión digestiva", "description": "Manzanilla, jengibre o menta tras comer." }, "en": { "title": "Digestive tea", "description": "Chamomile, ginger, or mint after meals." }, "de": { "title": "Verdauungstee", "description": "Kamille, Ingwer oder Minze nach dem Essen." } },
  "HARD_weight_loss_068": { "es": { "title": "Escaladores laterales", "description": "Cross-body: 3 series de 15." }, "en": { "title": "Cross-body climbers", "description": "3 sets of 15 reps." }, "de": { "title": "Seitliche Mountain Climbers", "description": "3 Sätze à 15 Wiederholungen." } },
  "EASY_weight_loss_069": { "es": { "title": "Apio con hummus", "description": "Snack nutritivo y saciante." }, "en": { "title": "Celery with hummus", "description": "A nutritious, filling snack." }, "de": { "title": "Sellerie mit Hummus", "description": "Nahrhafter, sättigender Snack." } },
  "MEDIUM_weight_loss_070": { "es": { "title": "Fondos de tríceps", "description": "Usa una silla: 3 series de 12." }, "en": { "title": "Tricep dips", "description": "Use a chair: 3 sets of 12." }, "de": { "title": "Trizeps-Dips", "description": "Mit Stuhl: 3 Sätze à 12." } },
  "EASY_weight_loss_071": { "es": { "title": "Cena temprano", "description": "Evita comer 3 horas antes de dormir." }, "en": { "title": "Eat early", "description": "Avoid eating 3 hours before bed." }, "de": { "title": "Früh essen", "description": "Iss 3 Stunden vor dem Schlafen nichts mehr." } },
  "MEDIUM_weight_loss_072": { "es": { "title": "Peso muerto", "description": "Con botellas o pesas: 3 series de 15." }, "en": { "title": "Deadlifts", "description": "Use bottles or weights: 3×15." }, "de": { "title": "Kreuzheben", "description": "Mit Flaschen oder Gewichten: 3×15." } },
  "EASY_weight_loss_073": { "es": { "title": "Calabacín al horno", "description": "Ligero y muy versátil." }, "en": { "title": "Baked zucchini", "description": "Light and very versatile." }, "de": { "title": "Gebackene Zucchini", "description": "Leicht und vielseitig." } },
  "HARD_weight_loss_074": { "es": { "title": "Duck walks", "description": "Camina en cuclillas durante 2 minutos." }, "en": { "title": "Duck walks", "description": "Walk in a squat for 2 minutes." }, "de": { "title": "Entengang", "description": "Gehe 2 Minuten in der Hocke." } },
  "MEDIUM_weight_loss_075": { "es": { "title": "Probióticos naturales", "description": "Yogur, kéfir o chucrut." }, "en": { "title": "Natural probiotics", "description": "Yogurt, kefir, or sauerkraut." }, "de": { "title": "Natürliche Probiotika", "description": "Joghurt, Kefir oder Sauerkraut." } },
  "MEDIUM_weight_loss_076": { "es": { "title": "Bicycle crunches", "description": "3 series de 20 repeticiones." }, "en": { "title": "Bicycle crunches", "description": "3 sets of 20 reps." }, "de": { "title": "Fahrrad-Crunches", "description": "3 Sätze à 20 Wiederholungen." } },
  "MEDIUM_weight_loss_077": { "es": { "title": "Pechuga de pollo", "description": "Proteína magra a la plancha o al horno." }, "en": { "title": "Chicken breast", "description": "Lean protein, grilled or baked." }, "de": { "title": "Hähnchenbrust", "description": "Mageres Protein, gegrillt oder gebacken." } },
  "MEDIUM_weight_loss_078": { "es": { "title": "Skaters", "description": "Saltos laterales: 3 series de 20." }, "en": { "title": "Skaters", "description": "Lateral jumps: 3×20." }, "de": { "title": "Skater-Sprünge", "description": "Seitliche Sprünge: 3×20." } },
  "EASY_weight_loss_079": { "es": { "title": "Sin salsas comerciales", "description": "Usa especias y hierbas frescas." }, "en": { "title": "Skip store-bought sauces", "description": "Use spices and fresh herbs instead." }, "de": { "title": "Fertigsaucen meiden", "description": "Nutze stattdessen Gewürze und frische Kräuter." } },
  "MEDIUM_weight_loss_080": { "es": { "title": "Inchworms", "description": "Movilidad: 3 series de 10." }, "en": { "title": "Inchworms", "description": "Mobility exercise: 3×10." }, "de": { "title": "Inchworms", "description": "Mobilitätsübung: 3×10." } },
  "EASY_weight_loss_081": { "es": { "title": "Batido verde", "description": "Espinacas, plátano, manzana y agua." }, "en": { "title": "Green smoothie", "description": "Spinach, banana, apple, and water." }, "de": { "title": "Grüner Smoothie", "description": "Spinat, Banane, Apfel und Wasser." } },
  "MEDIUM_weight_loss_082": { "es": { "title": "Goblet squats", "description": "Sentadillas con peso: 3×15." }, "en": { "title": "Goblet squats", "description": "Weighted squats: 3×15." }, "de": { "title": "Goblet-Kniebeugen", "description": "Kniebeugen mit Gewicht: 3×15." } },
  "EASY_weight_loss_083": { "es": { "title": "Canela en infusión", "description": "Ayuda a regular el azúcar en sangre." }, "en": { "title": "Cinnamon tea", "description": "May help regulate blood sugar." }, "de": { "title": "Zimttee", "description": "Kann den Blutzucker regulieren helfen." } },
  "HARD_weight_loss_084": { "es": { "title": "Pike push-ups", "description": "3 series de 10 repeticiones." }, "en": { "title": "Pike push-ups", "description": "3 sets of 10 reps." }, "de": { "title": "Pike-Liegestütze", "description": "3 Sätze à 10 Wiederholungen." } },
  "EASY_weight_loss_085": { "es": { "title": "Edamame", "description": "Soja verde rica en proteína." }, "en": { "title": "Edamame", "description": "Protein-rich green soybeans." }, "de": { "title": "Edamame", "description": "Proteinreiche grüne Sojabohnen." } },
  "HARD_weight_loss_086": { "es": { "title": "Jumping squats", "description": "Sentadillas con salto: 3×12." }, "en": { "title": "Jumping squats", "description": "Squat jumps: 3×12." }, "de": { "title": "Sprung-Kniebeugen", "description": "Kniebeugen mit Sprung: 3×12." } },
  "EASY_weight_loss_087": { "es": { "title": "Evita embutidos", "description": "Elige proteínas magras y frescas." }, "en": { "title": "Avoid cold cuts", "description": "Choose fresh, lean proteins instead." }, "de": { "title": "Wurstwaren meiden", "description": "Wähle stattdessen frische, magere Proteine." } },
  "HARD_weight_loss_088": { "es": { "title": "Bear crawls", "description": "3 series de 30 segundos." }, "en": { "title": "Bear crawls", "description": "3 sets of 30 seconds." }, "de": { "title": "Bärenlauf", "description": "3 Sätze à 30 Sekunden." } },
  "EASY_weight_loss_089": { "es": { "title": "Pimientos asados", "description": "Ricos en vitamina C y fibra." }, "en": { "title": "Roasted peppers", "description": "Rich in vitamin C and fiber." }, "de": { "title": "Geröstete Paprika", "description": "Reich an Vitamin C und Ballaststoffen." } },
  "MEDIUM_weight_loss_090": { "es": { "title": "Russian twists", "description": "Giros rusos: 3×20." }, "en": { "title": "Russian twists", "description": "3 sets of 20 twists." }, "de": { "title": "Russian Twists", "description": "3 Sätze à 20 Drehungen." } },
  "EASY_weight_loss_091": { "es": { "title": "Agua de coco", "description": "Hidratación natural sin azúcares añadidos." }, "en": { "title": "Coconut water", "description": "Natural hydration without added sugars." }, "de": { "title": "Kokoswasser", "description": "Natürliche Hydration ohne zugesetzten Zucker." } },
  "HARD_weight_loss_092": { "es": { "title": "Pistol squats", "description": "Sentadilla a una pierna: 3×5 por lado." }, "en": { "title": "Pistol squats", "description": "One-leg squats: 3×5 per side." }, "de": { "title": "Pistol Squats", "description": "Einbeinige Kniebeugen: 3×5 pro Seite." } },
  "EASY_weight_loss_093": { "es": { "title": "Champiñones", "description": "Bajos en calorías y nutritivos." }, "en": { "title": "Mushrooms", "description": "Low-calorie and nutrient-rich." }, "de": { "title": "Champignons", "description": "Kalorienarm und nährstoffreich." } },
  "HARD_weight_loss_094": { "es": { "title": "Plank jacks", "description": "Plancha con saltos: 3×15." }, "en": { "title": "Plank jacks", "description": "3 sets of 15 plank jacks." }, "de": { "title": "Plank Jacks", "description": "3 Sätze à 15 Plank-Sprünge." } },
  "EASY_weight_loss_095": { "es": { "title": "Sin postres azucarados", "description": "Elige fruta fresca como postre." }, "en": { "title": "Skip sugary desserts", "description": "Choose fresh fruit instead." }, "de": { "title": "Keine zuckrigen Desserts", "description": "Wähle stattdessen frisches Obst." } },
  "MEDIUM_weight_loss_096": { "es": { "title": "Donkey kicks", "description": "3 series de 15 por pierna." }, "en": { "title": "Donkey kicks", "description": "3 sets of 15 per leg." }, "de": { "title": "Donkey Kicks", "description": "3 Sätze à 15 pro Bein." } },
  "EASY_weight_loss_097": { "es": { "title": "Col rizada", "description": "Kale en ensalada o al vapor." }, "en": { "title": "Kale", "description": "Enjoy in a salad or steamed." }, "de": { "title": "Grünkohl", "description": "Als Salat oder gedämpft genießen." } },
  "HARD_weight_loss_098": { "es": { "title": "Tuck jumps", "description": "Saltos con rodillas al pecho: 3×10." }, "en": { "title": "Tuck jumps", "description": "Knees-to-chest jumps: 3×10." }, "de": { "title": "Tuck Jumps", "description": "Knie-zur-Brust-Sprünge: 3×10." } },
  "EASY_weight_loss_099": { "es": { "title": "Cúrcuma con pimienta", "description": "Antiinflamatorio natural sencillo." }, "en": { "title": "Turmeric with pepper", "description": "A simple natural anti-inflammatory." }, "de": { "title": "Kurkuma mit Pfeffer", "description": "Ein einfaches, natürliches Antientzündungsmittel." } },
  "HARD_weight_loss_100": { "es": { "title": "Box jumps", "description": "Saltos al cajón: 3×12." }, "en": { "title": "Box jumps", "description": "Jump onto a box or step: 3×12." }, "de": { "title": "Box Jumps", "description": "Sprünge auf die Box oder Stufe: 3×12." } },


  // Mejorar el medio ambiente - 30 tareas
  "EASY_ambiente_1": { "es": { "title": "Usa una bolsa reutilizable", "description": "Evita plásticos de un solo uso al hacer compras." }, "en": { "title": "Use a reusable bag", "description": "Avoid single-use plastics when shopping." }, "de": { "title": "Verwende eine wiederverwendbare Tasche", "description": "Vermeide Einwegplastik beim Einkaufen." } },
  "EASY_ambiente_2": { "es": { "title": "Recicla correctamente", "description": "Separa tus residuos según las normas locales." }, "en": { "title": "Recycle properly", "description": "Separate your waste according to local rules." }, "de": { "title": "Richtig recyceln", "description": "Trenne deinen Müll nach lokalen Vorgaben." } },
  "EASY_ambiente_3": { "es": { "title": "Reduce el consumo de agua", "description": "Cierra el grifo mientras te cepillas los dientes." }, "en": { "title": "Reduce water use", "description": "Turn off the tap while brushing your teeth." }, "de": { "title": "Wasserverbrauch reduzieren", "description": "Wasserhahn beim Zähneputzen zudrehen." } },
  "EASY_ambiente_4": { "es": { "title": "Comida sin carne", "description": "Elige una comida vegetariana para bajar tu huella." }, "en": { "title": "Meat-free meal", "description": "Choose a vegetarian meal to lower your footprint." }, "de": { "title": "Fleischfreie Mahlzeit", "description": "Wähle eine vegetarische Mahlzeit für einen kleineren Fußabdruck." } },
  "EASY_ambiente_5": { "es": { "title": "Apaga luces innecesarias", "description": "Ahorra energía apagando lo que no uses." }, "en": { "title": "Turn off unnecessary lights", "description": "Save energy by switching off what you don't use." }, "de": { "title": "Unnötiges Licht ausschalten", "description": "Energie sparen, indem unbenutztes Licht aus ist." } },
  "MEDIUM_ambiente_6": { "es": { "title": "Camina o usa bici", "description": "Muévete hoy sin emisiones siempre que puedas." }, "en": { "title": "Walk or bike today", "description": "Choose emission-free transport whenever you can." }, "de": { "title": "Zu Fuß oder mit dem Rad", "description": "Heute nach Möglichkeit ohne Emissionen unterwegs sein." } },
  "MEDIUM_ambiente_7": { "es": { "title": "Compra productos locales", "description": "Reduce transporte eligiendo cercanía." }, "en": { "title": "Buy local products", "description": "Cut transport emissions by choosing nearby." }, "de": { "title": "Regionale Produkte kaufen", "description": "Transportwege verkürzen durch regionale Auswahl." } },
  "EASY_ambiente_8": { "es": { "title": "Evita exceso de empaque", "description": "Prefiere productos a granel o con poco envase." }, "en": { "title": "Avoid over-packaging", "description": "Choose bulk or low-packaging options." }, "de": { "title": "Übermäßige Verpackung vermeiden", "description": "Lose oder wenig verpackte Produkte wählen." } },
  "MEDIUM_ambiente_9": { "es": { "title": "Lleva tu propia taza", "description": "Evita vasos desechables en la cafetería." }, "en": { "title": "Bring your own cup", "description": "Skip disposable cups at the café." }, "de": { "title": "Eigene Tasse mitnehmen", "description": "Einwegbecher im Café vermeiden." } },
  "HARD_ambiente_10": { "es": { "title": "Compostea orgánicos", "description": "Reduce basura y crea abono natural." }, "en": { "title": "Compost organics", "description": "Cut waste and create natural fertilizer." }, "de": { "title": "Bioabfall kompostieren", "description": "Müll reduzieren und natürlichen Dünger gewinnen." } },
  "EASY_ambiente_11": { "es": { "title": "Desconecta aparatos", "description": "Evita el consumo fantasma de energía." }, "en": { "title": "Unplug devices", "description": "Avoid phantom power use." }, "de": { "title": "Geräte vom Strom trennen", "description": "Standby-Verbrauch vermeiden." } },
  "MEDIUM_ambiente_12": { "es": { "title": "Limpieza ecológica", "description": "Usa productos con menos químicos dañinos." }, "en": { "title": "Eco-friendly cleaners", "description": "Use products with fewer harmful chemicals." }, "de": { "title": "Umweltfreundliche Reiniger", "description": "Produkte mit weniger schädlichen Chemikalien nutzen." } },
  "MEDIUM_ambiente_13": { "es": { "title": "Repara en vez de tirar", "description": "Alarga la vida útil de tus objetos." }, "en": { "title": "Repair, don’t replace", "description": "Extend the lifespan of your items." }, "de": { "title": "Reparieren statt wegwerfen", "description": "Lebensdauer deiner Dinge verlängern." } },
  "MEDIUM_ambiente_14": { "es": { "title": "Planta o cuida una planta", "description": "Genera oxígeno y absorbe CO₂." }, "en": { "title": "Plant or care for a plant", "description": "Create oxygen and absorb CO₂." }, "de": { "title": "Pflanze setzen oder pflegen", "description": "Sauerstoff erzeugen und CO₂ binden." } },
  "MEDIUM_ambiente_15": { "es": { "title": "Usa servilletas de tela", "description": "Reemplaza las de papel desechables." }, "en": { "title": "Use cloth napkins", "description": "Replace disposable paper ones." }, "de": { "title": "Stoffservietten verwenden", "description": "Papier-Einwegware ersetzen." } },
  "MEDIUM_ambiente_16": { "es": { "title": "Compra de segunda mano", "description": "Reduce la producción de artículos nuevos." }, "en": { "title": "Buy second-hand", "description": "Reduce production of new goods." }, "de": { "title": "Secondhand kaufen", "description": "Produktion neuer Waren verringern." } },
  "EASY_ambiente_17": { "es": { "title": "Duchas más cortas", "description": "Ahorra agua caliente con duchas breves." }, "en": { "title": "Shorter showers", "description": "Save hot water with brief showers." }, "de": { "title": "Kürzer duschen", "description": "Warmwasser mit kurzen Duschen sparen." } },
  "EASY_ambiente_18": { "es": { "title": "Sin popotes de plástico", "description": "Recházalos o lleva uno reutilizable." }, "en": { "title": "Skip plastic straws", "description": "Refuse or bring a reusable one." }, "de": { "title": "Keine Plastikstrohhalme", "description": "Ablehnen oder wiederverwendbaren nutzen." } },
  "MEDIUM_ambiente_19": { "es": { "title": "Dona ropa que no uses", "description": "Dale una segunda vida útil." }, "en": { "title": "Donate unused clothes", "description": "Give garments a second life." }, "de": { "title": "Ungetragene Kleidung spenden", "description": "Den Stücken ein zweites Leben geben." } },
  "MEDIUM_ambiente_20": { "es": { "title": "Usa baterías recargables", "description": "Reduce residuos tóxicos a largo plazo." }, "en": { "title": "Use rechargeable batteries", "description": "Reduce toxic waste over time." }, "de": { "title": "Akkus verwenden", "description": "Langfristig giftigen Abfall reduzieren." } },
  "MEDIUM_ambiente_21": { "es": { "title": "Compra a granel", "description": "Minimiza envases y desperdicio." }, "en": { "title": "Buy in bulk", "description": "Minimize packaging and waste." }, "de": { "title": "Unverpackt/lose kaufen", "description": "Verpackung und Abfall minimieren." } },
  "MEDIUM_ambiente_22": { "es": { "title": "Pañuelos de tela", "description": "Reemplaza los desechables." }, "en": { "title": "Cloth handkerchiefs", "description": "Replace disposable tissues." }, "de": { "title": "Stofftaschentücher", "description": "Einwegtücher ersetzen." } },
  "MEDIUM_ambiente_23": { "es": { "title": "Recoge basura en la calle", "description": "Cada acción cuenta para tu entorno." }, "en": { "title": "Pick up litter", "description": "Every small action helps your area." }, "de": { "title": "Müll aufsammeln", "description": "Jede kleine Aktion hilft der Umgebung." } },
  "HARD_ambiente_24": { "es": { "title": "Instala iluminación LED", "description": "Consume hasta 80% menos energía." }, "en": { "title": "Switch to LED lighting", "description": "Use up to 80% less energy." }, "de": { "title": "Auf LED-Beleuchtung umstellen", "description": "Bis zu 80 % weniger Energieverbrauch." } },
  "MEDIUM_ambiente_25": { "es": { "title": "Evita el fast fashion", "description": "Compra ropa de calidad y duradera." }, "en": { "title": "Avoid fast fashion", "description": "Choose quality, long-lasting clothes." }, "de": { "title": "Fast Fashion vermeiden", "description": "Hochwertige, langlebige Kleidung wählen." } },
  "EASY_ambiente_26": { "es": { "title": "Lava con agua fría", "description": "Reduce el gasto energético del lavado." }, "en": { "title": "Wash with cold water", "description": "Lower the energy used for laundry." }, "de": { "title": "Kalt waschen", "description": "Energie beim Waschen sparen." } },
  "MEDIUM_ambiente_27": { "es": { "title": "Apoya negocios sostenibles", "description": "Vota con tu dinero por mejores prácticas." }, "en": { "title": "Support sustainable businesses", "description": "Vote with your wallet for better practices." }, "de": { "title": "Nachhaltige Unternehmen unterstützen", "description": "Mit deinem Geldbeutel für bessere Praxis stimmen." } },
  "MEDIUM_ambiente_28": { "es": { "title": "Reduce desperdicio de alimentos", "description": "Planifica, porciona y almacena bien." }, "en": { "title": "Reduce food waste", "description": "Plan, portion, and store properly." }, "de": { "title": "Lebensmittelverschwendung reduzieren", "description": "Planen, portionieren und richtig lagern." } },
  "MEDIUM_ambiente_29": { "es": { "title": "Envases reutilizables", "description": "Lleva tus propios recipientes para comida." }, "en": { "title": "Reusable food containers", "description": "Bring your own food boxes." }, "de": { "title": "Wiederverwendbare Behälter", "description": "Eigene Essensdosen mitnehmen." } },
  "EASY_ambiente_30": { "es": { "title": "Educa a otros", "description": "Comparte un tip ambiental que aprendiste." }, "en": { "title": "Educate others", "description": "Share one eco tip you learned." }, "de": { "title": "Andere informieren", "description": "Teile einen Umwelt-Tipp, den du gelernt hast." } },

  // Reducir uso de pantallas - 30 tareas
  "EASY_pantallas_1": { "es": { "title": "No mires el móvil al despertar", "description": "Espera al menos 30 minutos." }, "en": { "title": "Don’t check phone on waking", "description": "Wait at least 30 minutes." }, "de": { "title": "Nach dem Aufwachen nicht aufs Handy", "description": "Mindestens 30 Minuten warten." } },
  "MEDIUM_pantallas_2": { "es": { "title": "Zonas sin celular", "description": "Define comedor o dormitorio como libres de móvil." }, "en": { "title": "Phone-free zones", "description": "Make dining room or bedroom phone-free." }, "de": { "title": "Handyfreie Zonen", "description": "Esszimmer oder Schlafzimmer handyfrei machen." } },
  "EASY_pantallas_3": { "es": { "title": "Desactiva notificaciones", "description": "Quita las no esenciales para menos interrupciones." }, "en": { "title": "Disable non-essential alerts", "description": "Reduce constant interruptions." }, "de": { "title": "Nicht nötige Benachrichtigungen aus", "description": "Ständige Unterbrechungen reduzieren." } },
  "MEDIUM_pantallas_4": { "es": { "title": "Lee 30 min en papel", "description": "Reemplaza lectura en pantalla por libro físico." }, "en": { "title": "Read 30 min on paper", "description": "Swap screen reading for a physical book." }, "de": { "title": "30 Min. analog lesen", "description": "Bildschirmlektüre durch ein Buch ersetzen." } },
  "MEDIUM_pantallas_5": { "es": { "title": "Sal 1 hora sin móvil", "description": "Reconecta con el mundo real." }, "en": { "title": "Go out 1 hour phone-free", "description": "Reconnect with the real world." }, "de": { "title": "1 Stunde ohne Handy rausgehen", "description": "Wieder mit der realen Welt verbinden." } },
  "MEDIUM_pantallas_6": { "es": { "title": "Usa despertador clásico", "description": "Deja el móvil fuera del dormitorio." }, "en": { "title": "Use a classic alarm clock", "description": "Keep your phone out of the bedroom." }, "de": { "title": "Klassischen Wecker nutzen", "description": "Handy aus dem Schlafzimmer verbannen." } },
  "EASY_pantallas_7": { "es": { "title": "Actividad offline", "description": "Dedica tiempo a un hobby sin tecnología." }, "en": { "title": "Offline activity", "description": "Spend time on a no-tech hobby." }, "de": { "title": "Offline-Aktivität", "description": "Zeit für ein Hobby ohne Technik." } },
  "MEDIUM_pantallas_8": { "es": { "title": "Charla cara a cara", "description": "Sustituye mensajes por conversación real." }, "en": { "title": "Face-to-face chat", "description": "Replace texts with a real conversation." }, "de": { "title": "Persönliches Gespräch", "description": "Nachrichten durch echtes Reden ersetzen." } },
  "MEDIUM_pantallas_9": { "es": { "title": "Fija un «sunset digital»", "description": "Sin pantallas después de cierta hora." }, "en": { "title": "Set a digital sunset", "description": "No screens after a chosen time." }, "de": { "title": "Digitalen Feierabend festlegen", "description": "Nach einer bestimmten Uhrzeit keine Bildschirme." } },
  "MEDIUM_pantallas_10": { "es": { "title": "Elimina apps «roba-tiempo»", "description": "Identifícalas y bórralas hoy." }, "en": { "title": "Remove time-wasting apps", "description": "Identify and delete them today." }, "de": { "title": "Zeitfresser-Apps löschen", "description": "Heute identifizieren und entfernen." } },
  "EASY_pantallas_11": { "es": { "title": "Modo escala de grises", "description": "Haz tu móvil menos atractivo visualmente." }, "en": { "title": "Grayscale mode", "description": "Make your phone visually less tempting." }, "de": { "title": "Graustufenmodus", "description": "Handy optisch weniger verlockend machen." } },
  "EASY_pantallas_12": { "es": { "title": "Come sin pantallas", "description": "Practica alimentación consciente." }, "en": { "title": "Eat without screens", "description": "Practice mindful eating." }, "de": { "title": "Ohne Bildschirm essen", "description": "Achtsames Essen üben." } },
  "EASY_pantallas_13": { "es": { "title": "Temporizador para redes", "description": "Limita tu tiempo diario en apps." }, "en": { "title": "Social timer", "description": "Limit your daily time on apps." }, "de": { "title": "Timer für soziale Apps", "description": "Tägliche App-Zeit begrenzen." } },
  "EASY_pantallas_14": { "es": { "title": "Ejercicio sin audio", "description": "Haz deporte sin música ni podcast." }, "en": { "title": "Exercise without audio", "description": "Work out without music or podcasts." }, "de": { "title": "Training ohne Audio", "description": "Sport ohne Musik oder Podcast." } },
  "EASY_pantallas_15": { "es": { "title": "Diario en papel", "description": "Escribe a mano en vez de notas digitales." }, "en": { "title": "Paper journal", "description": "Write by hand instead of digital notes." }, "de": { "title": "Tagebuch auf Papier", "description": "Handschriftlich statt digital notieren." } },
  "HARD_pantallas_16": { "es": { "title": "Día familiar sin pantallas", "description": "Organiza tiempo de calidad juntos." }, "en": { "title": "Family screen-free day", "description": "Plan quality time together." }, "de": { "title": "Familientag ohne Bildschirme", "description": "Gemeinsame Qualitätszeit planen." } },
  "HARD_pantallas_17": { "es": { "title": "Navega sin GPS", "description": "Usa mapas físicos o pregunta direcciones." }, "en": { "title": "Navigate without GPS", "description": "Use paper maps or ask for directions." }, "de": { "title": "Ohne GPS navigieren", "description": "Papierkarten nutzen oder nach dem Weg fragen." } },
  "EASY_pantallas_18": { "es": { "title": "Observa la naturaleza", "description": "20 minutos sin fotos ni grabaciones." }, "en": { "title": "Observe nature", "description": "20 minutes without photos or recording." }, "de": { "title": "Natur beobachten", "description": "20 Minuten ohne Fotos oder Aufnahmen." } },
  "MEDIUM_pantallas_19": { "es": { "title": "Juegos de mesa", "description": "Alternativa a los videojuegos." }, "en": { "title": "Board games", "description": "Choose them instead of video games." }, "de": { "title": "Brettspiele", "description": "Statt Videospielen wählen." } },
  "HARD_pantallas_20": { "es": { "title": "Practica un instrumento", "description": "Actividad creativa sin pantallas." }, "en": { "title": "Practice an instrument", "description": "A creative, screen-free activity." }, "de": { "title": "Ein Instrument üben", "description": "Kreative Aktivität ohne Bildschirm." } },
  "MEDIUM_pantallas_21": { "es": { "title": "Cocina sin video", "description": "Prepara una receta nueva sin tutoriales." }, "en": { "title": "Cook without video", "description": "Make a new recipe without tutorials." }, "de": { "title": "Kochen ohne Video", "description": "Neues Rezept ohne Tutorial zubereiten." } },
  "EASY_pantallas_22": { "es": { "title": "Lista de tareas en papel", "description": "Usa papel en vez de apps de productividad." }, "en": { "title": "Paper to-do list", "description": "Use paper instead of productivity apps." }, "de": { "title": "To-do-Liste auf Papier", "description": "Papier statt Produktivitäts-Apps nutzen." } },
  "EASY_pantallas_23": { "es": { "title": "Medita sin apps", "description": "Solo silencio o sonidos naturales." }, "en": { "title": "Meditate without apps", "description": "Use silence or natural sounds only." }, "de": { "title": "Meditieren ohne Apps", "description": "Nur Stille oder natürliche Geräusche." } },
  "MEDIUM_pantallas_24": { "es": { "title": "Desinstala redes por un día", "description": "Observa cómo te sientes sin ellas." }, "en": { "title": "Uninstall socials for a day", "description": "Notice how you feel without them." }, "de": { "title": "Soziale Apps für einen Tag löschen", "description": "Achte darauf, wie du dich ohne sie fühlst." } },
  "EASY_pantallas_25": { "es": { "title": "Escucha música sin video", "description": "Disfruta solo el audio." }, "en": { "title": "Music without video", "description": "Enjoy audio only." }, "de": { "title": "Musik ohne Video", "description": "Nur den Ton genießen." } },
  "MEDIUM_pantallas_26": { "es": { "title": "Haz jardinería", "description": "Conecta con la tierra y desconecta de pantallas." }, "en": { "title": "Do some gardening", "description": "Connect to the earth and disconnect from screens." }, "de": { "title": "Gärtnern", "description": "Mit der Erde verbinden und Bildschirme meiden." } },
  "MEDIUM_pantallas_27": { "es": { "title": "Visita a alguien", "description": "Prefiere ver a la persona en vez de videollamar." }, "en": { "title": "Visit someone in person", "description": "Choose in-person instead of video call." }, "de": { "title": "Jemanden persönlich besuchen", "description": "Persönlich statt Videocall wählen." } },
  "MEDIUM_pantallas_28": { "es": { "title": "Fotografía analógica/mental", "description": "Prueba analógico o solo mira sin capturar." }, "en": { "title": "Analog/mental photography", "description": "Try analog or just observe without capturing." }, "de": { "title": "Analoge/mentale Fotografie", "description": "Analog probieren oder nur beobachten ohne aufzunehmen." } },
  "EASY_pantallas_29": { "es": { "title": "Manualidades", "description": "Crea algo con tus manos sin tecnología." }, "en": { "title": "Crafts", "description": "Make something with your hands—no tech." }, "de": { "title": "Basteln/Handarbeit", "description": "Etwas mit den Händen schaffen – ohne Technik." } },
  "EASY_pantallas_30": { "es": { "title": "Revisa tu tiempo de pantalla", "description": "Mira estadísticas y toma conciencia." }, "en": { "title": "Check screen-time stats", "description": "Review usage and build awareness." }, "de": { "title": "Bildschirmzeit prüfen", "description": "Nutzung ansehen und Bewusstsein schaffen." } },

  // Comer Sano (comer_1 a comer_30)
  "EASY_comer_1": { "es": { "title": "5 porciones de frutas y verduras", "description": "Reparte 5 porciones con lo que tengas." }, "en": { "title": "5 servings fruit & veg", "description": "Spread 5 servings through the day." }, "de": { "title": "5 Portionen Obst & Gemüse", "description": "5 Portionen über den Tag verteilen." } },
"EASY_comer_2": { "es": { "title": "8 vasos de agua", "description": "Usa una botella y marca 8 tomas." }, "en": { "title": "8 glasses of water", "description": "Use a bottle and tick off 8 drinks." }, "de": { "title": "8 Gläser Wasser", "description": "Flasche nutzen und 8 Trinkeinheiten markieren." } },
"EASY_comer_3": { "es": { "title": "Sin bebidas azucaradas", "description": "Elige agua o infusiones." }, "en": { "title": "No sugary drinks", "description": "Choose water or tea." }, "de": { "title": "Keine zuckrigen Getränke", "description": "Wasser oder Tee wählen." } },
"MEDIUM_comer_4": { "es": { "title": "Proteína en cada comida", "description": "Huevo, yogur, legumbres o pollo." }, "en": { "title": "Protein every meal", "description": "Eggs, yogurt, legumes, or chicken." }, "de": { "title": "Protein zu jeder Mahlzeit", "description": "Ei, Joghurt, Hülsenfrüchte oder Huhn." } },
"MEDIUM_comer_5": { "es": { "title": "Menos azúcar añadido", "description": "Revisa 2–3 etiquetas y elige mejor." }, "en": { "title": "Cut added sugar", "description": "Check 2–3 labels and pick lower sugar." }, "de": { "title": "Weniger zugesetzten Zucker", "description": "2–3 Etiketten prüfen und besser wählen." } },
"MEDIUM_comer_6": { "es": { "title": "Receta saludable nueva", "description": "Prueba algo simple al horno/plancha." }, "en": { "title": "New healthy recipe", "description": "Try something simple baked or grilled." }, "de": { "title": "Neues gesundes Rezept", "description": "Einfaches Ofen- oder Pfannengericht probieren." } },
"EASY_comer_7": { "es": { "title": "Come más despacio", "description": "Deja el cubierto y mastica 10–15 veces." }, "en": { "title": "Eat more slowly", "description": "Put down cutlery; chew 10–15 times." }, "de": { "title": "Langsamer essen", "description": "Besteck ablegen; 10–15 Mal kauen." } },
"MEDIUM_comer_8": { "es": { "title": "Prepárate 1–2 tuppers", "description": "Deja comida lista para mañana." }, "en": { "title": "Meal prep 1–2 boxes", "description": "Prepare food for tomorrow." }, "de": { "title": "1–2 Boxen vorkochen", "description": "Essen für morgen vorbereiten." } },
"EASY_comer_9": { "es": { "title": "Grasas saludables", "description": "Aguacate, frutos secos u oliva." }, "en": { "title": "Healthy fats", "description": "Avocado, nuts, or olive oil." }, "de": { "title": "Gesunde Fette", "description": "Avocado, Nüsse oder Olivenöl." } },
"MEDIUM_comer_10": { "es": { "title": "Evita procesados hoy", "description": "Elige fresco o con pocos ingredientes." }, "en": { "title": "Skip processed foods", "description": "Choose fresh or few-ingredient options." }, "de": { "title": "Heute ohne Fertigprodukte", "description": "Frische oder wenige Zutaten wählen." } },
"MEDIUM_comer_11": { "es": { "title": "Pescado 2 veces/semana", "description": "Planifica 2 comidas con pescado." }, "en": { "title": "Fish twice a week", "description": "Plan 2 meals with fish." }, "de": { "title": "Zweimal pro Woche Fisch", "description": "2 Fischmahlzeiten einplanen." } },
"EASY_comer_12": { "es": { "title": "Snack fruta o frutos secos", "description": "Sustituye ultraprocesados." }, "en": { "title": "Fruit or nuts snack", "description": "Swap out ultra-processed snacks." }, "de": { "title": "Snack Obst oder Nüsse", "description": "Statt stark verarbeiteter Snacks." } },
"MEDIUM_comer_13": { "es": { "title": "Lee etiquetas", "description": "Compara azúcar, sal y fibra." }, "en": { "title": "Read labels", "description": "Compare sugar, salt, and fiber." }, "de": { "title": "Etiketten lesen", "description": "Zucker, Salz und Ballaststoffe vergleichen." } },
"EASY_comer_14": { "es": { "title": "Menos sal", "description": "Usa especias y prueba antes." }, "en": { "title": "Reduce salt", "description": "Use spices and taste first." }, "de": { "title": "Weniger Salz", "description": "Gewürze nutzen und erst probieren." } },
"EASY_comer_15": { "es": { "title": "Plato más pequeño", "description": "Controla porciones sin pensar." }, "en": { "title": "Smaller plate", "description": "Control portions effortlessly." }, "de": { "title": "Kleinerer Teller", "description": "Portionen ohne Aufwand steuern." } },
"EASY_comer_16": { "es": { "title": "No te saltes el desayuno", "description": "Incluye proteína y fruta." }, "en": { "title": "Don’t skip breakfast", "description": "Include protein and fruit." }, "de": { "title": "Frühstück nicht auslassen", "description": "Protein und Obst einbauen." } },
"MEDIUM_comer_17": { "es": { "title": "Granos integrales", "description": "Sustituye pan/arroz/pasta por integral." }, "en": { "title": "Whole grains", "description": "Swap bread/rice/pasta for whole-grain." }, "de": { "title": "Vollkorn", "description": "Brot/Reis/Nudeln durch Vollkorn ersetzen." } },
"EASY_comer_18": { "es": { "title": "Sin pantallas al comer", "description": "Come con atención plena." }, "en": { "title": "No screens while eating", "description": "Practice mindful eating." }, "de": { "title": "Ohne Bildschirm essen", "description": "Achtsam essen." } },
"MEDIUM_comer_19": { "es": { "title": "Proteína vegetal", "description": "Incluye legumbres o tofu." }, "en": { "title": "Plant protein", "description": "Add legumes or tofu." }, "de": { "title": "Pflanzliches Protein", "description": "Hülsenfrüchte oder Tofu einbauen." } },
"EASY_comer_20": { "es": { "title": "Smoothie verde", "description": "Hojas verdes + fruta + agua/leche." }, "en": { "title": "Green smoothie", "description": "Leafy greens + fruit + water/milk." }, "de": { "title": "Grüner Smoothie", "description": "Grünes Blattgemüse + Obst + Wasser/Milch." } },
"MEDIUM_comer_21": { "es": { "title": "3 colores de verduras", "description": "Añade al menos 3 colores al plato." }, "en": { "title": "3 veggie colors", "description": "Add at least 3 colors to your plate." }, "de": { "title": "3 Gemüsefarben", "description": "Mindestens 3 Farben auf dem Teller." } },
"MEDIUM_comer_22": { "es": { "title": "Ajusta carbohidratos", "description": "½ verduras, ¼ proteína, ¼ carbohidratos." }, "en": { "title": "Tweak carbs", "description": "½ veg, ¼ protein, ¼ carbs." }, "de": { "title": "Kohlenhydrate anpassen", "description": "½ Gemüse, ¼ Protein, ¼ Kohlenhydrate." } },
"EASY_comer_23": { "es": { "title": "Sin picoteo nocturno", "description": "Define la última hora de comer." }, "en": { "title": "No late-night snacking", "description": "Set a last eating time." }, "de": { "title": "Kein spätes Naschen", "description": "Letzte Essenszeit festlegen." } },
"MEDIUM_comer_24": { "es": { "title": "Aderezo casero", "description": "Aceite, limón y especias; sin azúcar." }, "en": { "title": "Homemade dressing", "description": "Oil, lemon, spices; no sugar." }, "de": { "title": "Hausgemachtes Dressing", "description": "Öl, Zitrone, Gewürze; ohne Zucker." } },
"EASY_comer_25": { "es": { "title": "Más fibra", "description": "Legumbres, fruta con piel o verduras." }, "en": { "title": "More fiber", "description": "Legumes, skin-on fruit, or veg." }, "de": { "title": "Mehr Ballaststoffe", "description": "Hülsenfrüchte, Obst mit Schale oder Gemüse." } },
"EASY_comer_26": { "es": { "title": "Fruta como postre", "description": "Termina con 1 pieza de fruta." }, "en": { "title": "Fruit for dessert", "description": "Finish with one piece of fruit." }, "de": { "title": "Obst zum Dessert", "description": "Mit einem Stück Obst abschließen." } },
"MEDIUM_comer_27": { "es": { "title": "Plan semanal", "description": "3–5 platos base y su lista." }, "en": { "title": "Weekly plan", "description": "List 3–5 base dishes and ingredients." }, "de": { "title": "Wochenplan", "description": "3–5 Grundgerichte und Zutaten notieren." } },
"MEDIUM_comer_28": { "es": { "title": "Sin frituras hoy", "description": "Usa horno, vapor, plancha o airfryer." }, "en": { "title": "No frying today", "description": "Use oven, steam, grill, or air fryer." }, "de": { "title": "Heute nicht frittieren", "description": "Ofen, Dampf, Grill oder Heißluftfritteuse nutzen." } },
"MEDIUM_comer_29": { "es": { "title": "Probióticos naturales", "description": "Yogur/kéfir o fermentados." }, "en": { "title": "Natural probiotics", "description": "Yogurt/kefir or fermented foods." }, "de": { "title": "Natürliche Probiotika", "description": "Joghurt/Kefir oder Fermentiertes." } },
"EASY_comer_30": { "es": { "title": "Escucha tu hambre", "description": "Come con hambre real y para con saciedad." }, "en": { "title": "Listen to hunger cues", "description": "Eat when truly hungry; stop comfortably full." }, "de": { "title": "Auf Hungersignale hören", "description": "Bei echtem Hunger essen; angenehm satt aufhören." } },

// Dormir Bien (dormir_1 a dormir_30)
"EASY_dormir_1": { "es": { "title": "Acuéstate a la misma hora", "description": "Elige una hora fija y respétala." }, "en": { "title": "Go to bed at the same time", "description": "Pick a fixed bedtime and stick to it." }, "de": { "title": "Zur selben Zeit schlafen gehen", "description": "Feste Schlafenszeit wählen und einhalten." } },
"EASY_dormir_2": { "es": { "title": "Sin pantallas 1 hora antes", "description": "Luz cálida o lectura ligera." }, "en": { "title": "No screens 1 hour before", "description": "Use warm light or light reading." }, "de": { "title": "1 Stunde ohne Bildschirm", "description": "Warmlicht oder leichte Lektüre." } },
"EASY_dormir_3": { "es": { "title": "Ducha tibia", "description": "Relaja cuerpo y mente antes de dormir." }, "en": { "title": "Warm shower", "description": "Relax body and mind before bed." }, "de": { "title": "Warme Dusche", "description": "Körper und Geist vor dem Schlafen entspannen." } },
"EASY_dormir_4": { "es": { "title": "Lee 10–15 minutos", "description": "Lectura calmada sin pantallas." }, "en": { "title": "Read 10–15 minutes", "description": "Calm reading without screens." }, "de": { "title": "10–15 Min. lesen", "description": "Ruhige Lektüre ohne Bildschirm." } },
"EASY_dormir_5": { "es": { "title": "Hab. fresca (18–20°C)", "description": "Ventila unos minutos si es posible." }, "en": { "title": "Cool room (18–20°C)", "description": "Air out for a few minutes if possible." }, "de": { "title": "Kühles Zimmer (18–20°C)", "description": "Wenn möglich kurz lüften." } },
"EASY_dormir_6": { "es": { "title": "Sin cafeína tarde", "description": "Después de las 14:00, mejor infusión." }, "en": { "title": "No late caffeine", "description": "After 2 pm, switch to herbal tea." }, "de": { "title": "Keine späte Koffeinzufuhr", "description": "Nach 14 Uhr lieber Kräutertee." } },
"EASY_dormir_7": { "es": { "title": "Oscuridad total", "description": "Persianas/cortinas o antifaz." }, "en": { "title": "Total darkness", "description": "Blinds/curtains or a sleep mask." }, "de": { "title": "Komplette Dunkelheit", "description": "Rollläden/Vorhänge oder Schlafmaske." } },
"EASY_dormir_8": { "es": { "title": "Respiración 4-7-8", "description": "4 inhala, 7 retén, 8 exhala (4–6 ciclos)." }, "en": { "title": "4-7-8 breathing", "description": "4 inhale, 7 hold, 8 exhale (4–6 cycles)." }, "de": { "title": "4-7-8-Atmung", "description": "4 einatmen, 7 halten, 8 ausatmen (4–6 Runden)." } },
"MEDIUM_dormir_9": { "es": { "title": "Ejercicio diurno", "description": "15–20 min; evita justo antes de dormir." }, "en": { "title": "Daytime exercise", "description": "15–20 min; not right before bed." }, "de": { "title": "Tagesbewegung", "description": "15–20 Min.; nicht direkt vor dem Schlafen." } },
"EASY_dormir_10": { "es": { "title": "Siestas cortas", "description": "Máx. 20 min y antes de las 16:00." }, "en": { "title": "Short naps", "description": "Max 20 min and before 4 pm." }, "de": { "title": "Kurze Nickerchen", "description": "Max. 20 Min. und vor 16 Uhr." } },
"EASY_dormir_11": { "es": { "title": "Ruido blanco", "description": "Lluvia suave o ruido blanco." }, "en": { "title": "White noise", "description": "Soft rain or white noise." }, "de": { "title": "Weißes Rauschen", "description": "Sanfter Regen oder White Noise." } },
"MEDIUM_dormir_12": { "es": { "title": "Escribe preocupaciones", "description": "3 pendientes y una acción por cada uno." }, "en": { "title": "Write worries down", "description": "List 3 concerns and one action each." }, "de": { "title": "Sorgen notieren", "description": "3 Punkte und je eine Maßnahme notieren." } },
"EASY_dormir_13": { "es": { "title": "Té relajante", "description": "Manzanilla o tila 60–90 min antes." }, "en": { "title": "Relaxing tea", "description": "Chamomile or linden 60–90 min before bed." }, "de": { "title": "Beruhigender Tee", "description": "Kamille oder Lindenblüte 60–90 Min. vorher." } },
"HARD_dormir_14": { "es": { "title": "Evalúa tu colchón", "description": "Investiga 2–3 opciones de calidad." }, "en": { "title": "Evaluate your mattress", "description": "Research 2–3 quality options." }, "de": { "title": "Matratze prüfen", "description": "2–3 hochwertige Optionen recherchieren." } },
"EASY_dormir_15": { "es": { "title": "Rutina nocturna", "description": "Ducha, té y lectura, en ese orden." }, "en": { "title": "Night routine", "description": "Shower, tea, and reading in order." }, "de": { "title": "Abendroutine", "description": "Dusche, Tee und Lesen in Reihenfolge." } },
"EASY_dormir_16": { "es": { "title": "Sin alcohol antes de dormir", "description": "Elige agua o infusión." }, "en": { "title": "No alcohol before bed", "description": "Choose water or herbal tea." }, "de": { "title": "Kein Alkohol vor dem Schlafen", "description": "Wasser oder Kräutertee wählen." } },
"EASY_dormir_17": { "es": { "title": "Medita 10 minutos", "description": "Céntrate en la respiración." }, "en": { "title": "Meditate 10 minutes", "description": "Focus on your breath." }, "de": { "title": "10 Minuten meditieren", "description": "Auf die Atmung fokussieren." } },
"EASY_dormir_18": { "es": { "title": "Lavanda", "description": "Difusor o gota en la almohada." }, "en": { "title": "Lavender", "description": "Diffuser or a drop on your pillow." }, "de": { "title": "Lavendel", "description": "Diffuser oder ein Tropfen aufs Kissen." } },
"MEDIUM_dormir_19": { "es": { "title": "Cena ligera y temprano", "description": "Termina ≥3 h antes de dormir." }, "en": { "title": "Light, early dinner", "description": "Finish ≥3 h before bedtime." }, "de": { "title": "Leicht und früh essen", "description": "Mind. 3 Std. vor dem Schlafen." } },
"EASY_dormir_20": { "es": { "title": "Luz natural matutina", "description": "Ventana o balcón 5–10 min." }, "en": { "title": "Morning daylight", "description": "Window or balcony for 5–10 min." }, "de": { "title": "Morgenlicht", "description": "5–10 Min. ans Fenster/Balkon." } },
"EASY_dormir_21": { "es": { "title": "Estira suave", "description": "5–10 min de relajación muscular." }, "en": { "title": "Gentle stretches", "description": "5–10 min of relaxing stretches." }, "de": { "title": "Sanftes Dehnen", "description": "5–10 Min. entspannendes Dehnen." } },
"EASY_dormir_22": { "es": { "title": "Solo dormir en la cama", "description": "Evita trabajar o ver TV en la cama." }, "en": { "title": "Bed is for sleep", "description": "Avoid work/TV in bed." }, "de": { "title": "Bett nur zum Schlafen", "description": "Kein Arbeiten/TV im Bett." } },
"EASY_dormir_23": { "es": { "title": "Calcetines si pies fríos", "description": "Pies calientes ayudan a conciliar." }, "en": { "title": "Socks if feet are cold", "description": "Warm feet help you fall asleep." }, "de": { "title": "Socken bei kalten Füßen", "description": "Warme Füße erleichtern das Einschlafen." } },
"MEDIUM_dormir_24": { "es": { "title": "Si no duermes, levántate", "description": "Tras 20 min despierto, cambia de estancia." }, "en": { "title": "Can’t sleep? Get up", "description": "After 20 min awake, change rooms." }, "de": { "title": "Kannst du nicht schlafen?", "description": "Nach 20 Min. aufstehen und den Raum wechseln." } },
"EASY_dormir_25": { "es": { "title": "Menos líquidos tarde", "description": "Evita beber la última hora." }, "en": { "title": "Limit late fluids", "description": "Avoid drinking in the last hour." }, "de": { "title": "Spät weniger trinken", "description": "In der letzten Stunde nichts mehr trinken." } },
"EASY_dormir_26": { "es": { "title": "Gratitud nocturna", "description": "Escribe 3 cosas buenas del día." }, "en": { "title": "Night gratitude", "description": "Write 3 good things from today." }, "de": { "title": "Abendliche Dankbarkeit", "description": "3 gute Dinge des Tages notieren." } },
"EASY_dormir_27": { "es": { "title": "Almohadas adecuadas", "description": "Ajusta altura y posición del cuello." }, "en": { "title": "Proper pillows", "description": "Adjust pillow height and neck position." }, "de": { "title": "Passende Kissen", "description": "Höhe und Nackenlage anpassen." } },
"EASY_dormir_28": { "es": { "title": "Evita discusiones", "description": "Temas difíciles, mejor mañana." }, "en": { "title": "Avoid arguments", "description": "Save tough talks for tomorrow." }, "de": { "title": "Streit vermeiden", "description": "Schwere Themen auf morgen verschieben." } },
"EASY_dormir_29": { "es": { "title": "Escaneo corporal", "description": "Relaja de pies a cabeza 3–5 min." }, "en": { "title": "Body scan", "description": "Relax head to toe for 3–5 min." }, "de": { "title": "Körper-Scan", "description": "3–5 Min. von Kopf bis Fuß entspannen." } },
"EASY_dormir_30": { "es": { "title": "Levántate a la misma hora", "description": "Incluido fin de semana." }, "en": { "title": "Wake up at the same time", "description": "Even on weekends." }, "de": { "title": "Zur gleichen Zeit aufstehen", "description": "Auch am Wochenende." } },


  // Eliminar estrés (stress_1 a stress_30)
  "EASY_stress_1": { "es": { "title": "Respira 5 minutos", "description": "Inhala 4s, exhala 6s durante 5 min." }, "en": { "title": "Breathe for 5 minutes", "description": "Inhale 4s, exhale 6s for 5 min." }, "de": { "title": "5 Minuten atmen", "description": "4 Sek. ein, 6 Sek. aus für 5 Min." } },
  "EASY_stress_2": { "es": { "title": "Medita 10 minutos", "description": "Meditación guiada corta en casa." }, "en": { "title": "Meditate 10 minutes", "description": "Short guided session at home." }, "de": { "title": "10 Min. meditieren", "description": "Kurze geführte Einheit zu Hause." } },
  "MEDIUM_stress_3": { "es": { "title": "Paseo consciente", "description": "10–15 min cerca de casa o pasillo." }, "en": { "title": "Mindful walk", "description": "10–15 min near home or hallway." }, "de": { "title": "Achtsamer Spaziergang", "description": "10–15 Min. nahe der Wohnung oder im Flur." } },
  "EASY_stress_4": { "es": { "title": "Diario breve", "description": "3–5 líneas: qué sientes y qué necesitas." }, "en": { "title": "Short journaling", "description": "3–5 lines: what you feel and need." }, "de": { "title": "Kurzes Journaling", "description": "3–5 Zeilen: was du fühlst und brauchst." } },
  "MEDIUM_stress_5": { "es": { "title": "Yoga 20 minutos", "description": "Secuencia suave en esterilla/alfombra." }, "en": { "title": "Yoga 20 minutes", "description": "Gentle sequence on mat or carpet." }, "de": { "title": "Yoga 20 Min.", "description": "Sanfte Abfolge auf Matte/Teppich." } },
  "EASY_stress_6": { "es": { "title": "Música relajante", "description": "Lista calmada 10–15 min." }, "en": { "title": "Relaxing music", "description": "Calm playlist for 10–15 min." }, "de": { "title": "Entspannungsmusik", "description": "Ruhige Playlist 10–15 Min." } },
  "EASY_stress_7": { "es": { "title": "Habla con alguien", "description": "Llama o manda audio." }, "en": { "title": "Talk to someone", "description": "Call or send a voice note." }, "de": { "title": "Mit jemandem reden", "description": "Anrufen oder Sprachnachricht senden." } },
  "EASY_stress_8": { "es": { "title": "Practica gratitud", "description": "Escribe 3 cosas buenas de hoy." }, "en": { "title": "Practice gratitude", "description": "Write down 3 good things today." }, "de": { "title": "Dankbarkeit üben", "description": "3 gute Dinge des Tages notieren." } },
  "MEDIUM_stress_9": { "es": { "title": "Pausa de redes 1–3h", "description": "Activa modo concentración." }, "en": { "title": "Social-media break 1–3h", "description": "Use focus/do-not-disturb mode." }, "de": { "title": "Soziale Medien pausieren", "description": "1–3 Std. Fokus-Modus aktivieren." } },
  "MEDIUM_stress_10": { "es": { "title": "Baño relajante", "description": "Tibio con sal o espuma 15–20 min." }, "en": { "title": "Relaxing bath", "description": "Warm bath with salt/foam 15–20 min." }, "de": { "title": "Entspannungsbad", "description": "Warm, mit Salz/Schaum 15–20 Min." } },
  "MEDIUM_stress_11": { "es": { "title": "Cardio suave 15–20 min", "description": "Libera tensión con movimiento." }, "en": { "title": "Light cardio 15–20 min", "description": "Release tension with movement." }, "de": { "title": "Leichtes Cardio 15–20 Min.", "description": "Spannung mit Bewegung lösen." } },
  "EASY_stress_12": { "es": { "title": "Mindful eating", "description": "Una comida sin pantallas, saboreando." }, "en": { "title": "Mindful eating", "description": "One screen-free, savoring meal." }, "de": { "title": "Achtsames Essen", "description": "Eine Mahlzeit ohne Bildschirm, bewusst genießen." } },
  "EASY_stress_13": { "es": { "title": "Organiza un cajón", "description": "Ordena 10–15 minutos." }, "en": { "title": "Tidy a drawer", "description": "Declutter for 10–15 minutes." }, "de": { "title": "Eine Schublade ordnen", "description": "10–15 Min. aufräumen." } },
  "MEDIUM_stress_14": { "es": { "title": "Di que no", "description": "Pon un límite respetuoso por mensaje." }, "en": { "title": "Say no", "description": "Set a respectful boundary via message." }, "de": { "title": "Nein sagen", "description": "Wertschätzend per Nachricht abgrenzen." } },
  "EASY_stress_15": { "es": { "title": "Visualiza tu lugar tranquilo", "description": "3–5 min con respiración lenta." }, "en": { "title": "Visualize a calm place", "description": "3–5 min with slow breathing." }, "de": { "title": "Ruhigen Ort visualisieren", "description": "3–5 Min. mit ruhiger Atmung." } },
  "MEDIUM_stress_16": { "es": { "title": "Pausa digital 1 hora", "description": "Sin móvil ni PC salvo llamadas." }, "en": { "title": "Digital break 1 hour", "description": "No phone/PC except calls." }, "de": { "title": "Digitale Pause 1 Std.", "description": "Ohne Handy/PC, außer Anrufe." } },
  "EASY_stress_17": { "es": { "title": "Ríe un rato", "description": "Clip divertido 5–10 min." }, "en": { "title": "Have a laugh", "description": "Watch a funny clip 5–10 min." }, "de": { "title": "Lachen", "description": "5–10 Min. lustigen Clip schauen." } },
  "EASY_stress_18": { "es": { "title": "Acaricia una mascota", "description": "5–10 min de mimos conscientes." }, "en": { "title": "Pet a cat/dog", "description": "5–10 min of mindful cuddles." }, "de": { "title": "Haustier streicheln", "description": "5–10 Min. bewusst kuscheln." } },
  "EASY_stress_19": { "es": { "title": "Estira 10 minutos", "description": "Cuello, hombros y espalda." }, "en": { "title": "Stretch 10 minutes", "description": "Neck, shoulders, back." }, "de": { "title": "10 Minuten dehnen", "description": "Nacken, Schultern, Rücken." } },
  "MEDIUM_stress_20": { "es": { "title": "Técnica Pomodoro", "description": "2 ciclos: 25 min foco + 5 min descanso." }, "en": { "title": "Pomodoro technique", "description": "2 rounds: 25 min focus + 5 min break." }, "de": { "title": "Pomodoro-Technik", "description": "2 Runden: 25 Min. Fokus + 5 Min. Pause." } },
  "EASY_stress_21": { "es": { "title": "Té de hierbas", "description": "Infusión calmante, bébela despacio." }, "en": { "title": "Herbal tea", "description": "Soothing infusion, sip slowly." }, "de": { "title": "Kräutertee", "description": "Beruhigender Tee, langsam trinken." } },
  "EASY_stress_22": { "es": { "title": "Abrazo de 20–30s", "description": "Con alguien de confianza o autoabrazo." }, "en": { "title": "20–30s hug", "description": "With someone you trust or self-hug." }, "de": { "title": "20–30 Sek. Umarmung", "description": "Mit Vertrauensperson oder Selbstumarmung." } },
  "MEDIUM_stress_23": { "es": { "title": "Tai chi/movimiento lento", "description": "10–15 min de movimientos guiados." }, "en": { "title": "Tai chi/slow movement", "description": "10–15 min guided motions." }, "de": { "title": "Tai-Chi/langsame Bewegung", "description": "10–15 Min. geführte Bewegungen." } },
  "MEDIUM_stress_24": { "es": { "title": "Prioriza 1 tarea", "description": "Lista 3 y marca una prioridad real." }, "en": { "title": "Prioritize 1 task", "description": "List 3 and pick one true priority." }, "de": { "title": "1 Aufgabe priorisieren", "description": "3 notieren und eine echte Priorität wählen." } },
  "EASY_stress_25": { "es": { "title": "Haz algo creativo", "description": "Dibuja, colorea o cocina algo simple." }, "en": { "title": "Do something creative", "description": "Draw, color, or cook something simple." }, "de": { "title": "Kreativ sein", "description": "Zeichnen, malen oder etwas Einfaches kochen." } },
  "MEDIUM_stress_26": { "es": { "title": "Relajación muscular", "description": "Tensa/relaja grupos 8–10 min." }, "en": { "title": "Muscle relaxation", "description": "Tense/release groups for 8–10 min." }, "de": { "title": "Muskelentspannung", "description": "Muskelgruppen 8–10 Min. an-/entspannen." } },
  "EASY_stress_27": { "es": { "title": "Aromaterapia casera", "description": "Difusor o gota en muñecas." }, "en": { "title": "Home aromatherapy", "description": "Diffuser or a drop on wrists." }, "de": { "title": "Aromatherapie zuhause", "description": "Diffuser oder Tropfen auf die Handgelenke." } },
  "MEDIUM_stress_28": { "es": { "title": "Delega cuando puedas", "description": "Pide ayuda con 1 tarea concreta." }, "en": { "title": "Delegate when possible", "description": "Ask help for one concrete task." }, "de": { "title": "Delegieren, wenn möglich", "description": "Um Hilfe bei einer konkreten Aufgabe bitten." } },
  "EASY_stress_29": { "es": { "title": "Observa el atardecer", "description": "Ventana/balcón y respiración lenta." }, "en": { "title": "Watch the sunset", "description": "Window/balcony with slow breathing." }, "de": { "title": "Sonnenuntergang ansehen", "description": "Am Fenster/Balkon langsam atmen." } },
  "EASY_stress_30": { "es": { "title": "Afirmaciones positivas", "description": "Repite 3 frases de apoyo personal." }, "en": { "title": "Positive affirmations", "description": "Repeat 3 self-supportive phrases." }, "de": { "title": "Positive Affirmationen", "description": "3 selbststärkende Sätze wiederholen." } },

    // Dejar de fumar (fumar_1 a fumar_30)
  "EASY_fumar_1": { "es": { "title": "Retrasa el primer cigarro", "description": "Espera 60 min y ocúpate con algo breve." }, "en": { "title": "Delay the first cigarette", "description": "Wait 60 min and keep busy with a quick task." }, "de": { "title": "Erste Zigarette verzögern", "description": "60 Min. warten und kurz beschäftigen." } },
"EASY_fumar_2": { "es": { "title": "Bebe agua al tener ganas", "description": "Toma 200–300 ml cuando aparezca el impulso." }, "en": { "title": "Drink water when cravings hit", "description": "Have 200–300 ml when the urge appears." }, "de": { "title": "Wasser bei Verlangen trinken", "description": "200–300 ml trinken, wenn das Verlangen kommt." } },
"EASY_fumar_3": { "es": { "title": "10 respiraciones profundas", "description": "Patrón 4-4-6 durante 10 ciclos." }, "en": { "title": "10 deep breaths", "description": "Use a 4-4-6 pattern for 10 cycles." }, "de": { "title": "10 tiefe Atemzüge", "description": "Muster 4-4-6 für 10 Runden." } },
"MEDIUM_fumar_4": { "es": { "title": "Llama a un amigo", "description": "Sustituye el cigarro por una llamada o audio." }, "en": { "title": "Call a friend", "description": "Replace the cigarette with a call or voice note." }, "de": { "title": "Rufe einen Freund an", "description": "Zigarette durch Anruf oder Sprachnachricht ersetzen." } },
"MEDIUM_fumar_5": { "es": { "title": "Cambia tu rincón de fumar", "description": "Evita lugares que asocias al tabaco." }, "en": { "title": "Change your smoking spot", "description": "Avoid places you associate with smoking." }, "de": { "title": "Rauchplatz wechseln", "description": "Orte meiden, die du mit Rauchen verbindest." } },
"EASY_fumar_6": { "es": { "title": "Mastica chicle sin azúcar", "description": "Úsalo en picos de ganas." }, "en": { "title": "Chew sugar-free gum", "description": "Use it during cravings." }, "de": { "title": "Zuckerfreien Kaugummi kauen", "description": "Bei starkem Verlangen verwenden." } },
"EASY_fumar_7": { "es": { "title": "Calcula el ahorro", "description": "Apunta lo no gastado por cigarro evitado." }, "en": { "title": "Track your savings", "description": "Note what you save per avoided cigarette." }, "de": { "title": "Ersparnis berechnen", "description": "Notiere die Ersparnis pro vermiedener Zigarette." } },
"MEDIUM_fumar_8": { "es": { "title": "Ejercicio breve", "description": "2–5 min: sentadillas o jumping jacks." }, "en": { "title": "Short workout", "description": "2–5 min: squats or jumping jacks." }, "de": { "title": "Kurzes Workout", "description": "2–5 Min.: Kniebeugen oder Hampelmänner." } },
"EASY_fumar_9": { "es": { "title": "Medita 10 minutos", "description": "Guía breve o respiración consciente." }, "en": { "title": "Meditate 10 minutes", "description": "Short guided session or mindful breathing." }, "de": { "title": "10 Minuten meditieren", "description": "Kurze Anleitung oder achtsames Atmen." } },
"MEDIUM_fumar_10": { "es": { "title": "Tira ceniceros extra", "description": "Elimina recordatorios del hábito." }, "en": { "title": "Throw out spare ashtrays", "description": "Remove reminders of the habit." }, "de": { "title": "Zusatz-Aschenbecher entsorgen", "description": "Erinnerungen an die Gewohnheit entfernen." } },
"EASY_fumar_11": { "es": { "title": "Fruta contra antojos", "description": "Sustituye con fruta o frutos secos." }, "en": { "title": "Fruit for cravings", "description": "Swap in fruit or nuts." }, "de": { "title": "Obst gegen Gelüste", "description": "Durch Obst oder Nüsse ersetzen." } },
"EASY_fumar_12": { "es": { "title": "Lávate los dientes", "description": "Corta el impulso tras comer." }, "en": { "title": "Brush your teeth", "description": "Cut the post-meal urge." }, "de": { "title": "Zähne putzen", "description": "Unterbricht den Drang nach dem Essen." } },
"EASY_fumar_13": { "es": { "title": "Escribe tus motivos", "description": "Anota 3 razones y déjalas visibles." }, "en": { "title": "Write your reasons", "description": "List 3 reasons and keep them visible." }, "de": { "title": "Gründe aufschreiben", "description": "3 Gründe notieren und sichtbar platzieren." } },
"MEDIUM_fumar_14": { "es": { "title": "Evita alcohol hoy", "description": "Reduce disparadores de fumar." }, "en": { "title": "Skip alcohol today", "description": "Avoid smoking triggers." }, "de": { "title": "Heute keinen Alkohol", "description": "Rauch-Auslöser reduzieren." } },
"EASY_fumar_15": { "es": { "title": "Marca tu día sin fumar", "description": "✅ en el calendario y mini-recompensa." }, "en": { "title": "Mark smoke-free days", "description": "Add a ✅ and give yourself a small reward." }, "de": { "title": "Rauchfreie Tage markieren", "description": "✅ im Kalender und kleine Belohnung." } },
"MEDIUM_fumar_16": { "es": { "title": "Únete a un grupo online", "description": "Busca apoyo y comparte avances." }, "en": { "title": "Join an online group", "description": "Get support and share progress." }, "de": { "title": "Online-Gruppe beitreten", "description": "Unterstützung holen und Fortschritt teilen." } },
"EASY_fumar_17": { "es": { "title": "Relajación muscular", "description": "Progresa 5–10 min por grupos." }, "en": { "title": "Muscle relaxation", "description": "Progressive 5–10 min by groups." }, "de": { "title": "Muskelentspannung", "description": "Progressiv 5–10 Min. nach Muskelgruppen." } },
"EASY_fumar_18": { "es": { "title": "Cambia de ambiente", "description": "Vete a otra habitación y haz algo breve." }, "en": { "title": "Change your environment", "description": "Go to another room and do a quick task." }, "de": { "title": "Umgebung wechseln", "description": "In einen anderen Raum gehen und kurz etwas tun." } },
"EASY_fumar_19": { "es": { "title": "Manos ocupadas", "description": "Pelota antiestrés, lápiz o plastilina." }, "en": { "title": "Keep hands busy", "description": "Stress ball, pen, or putty." }, "de": { "title": "Hände beschäftigen", "description": "Antistress-Ball, Stift oder Knete." } },
"EASY_fumar_20": { "es": { "title": "Visualiza pulmones sanos", "description": "2 min imaginando tu mejora." }, "en": { "title": "Visualize healthy lungs", "description": "2 minutes imagining improvement." }, "de": { "title": "Gesunde Lungen visualisieren", "description": "2 Min. Verbesserung vorstellen." } },
"EASY_fumar_21": { "es": { "title": "Lee testimonios", "description": "1–2 historias breves de exfumadores." }, "en": { "title": "Read testimonials", "description": "1–2 short ex-smoker stories." }, "de": { "title": "Erfahrungen lesen", "description": "1–2 kurze Ex-Raucher-Geschichten." } },
"MEDIUM_fumar_22": { "es": { "title": "Evita café si dispara", "description": "Cámbialo por infusión o agua con limón." }, "en": { "title": "Skip coffee if it triggers you", "description": "Swap for tea or lemon water." }, "de": { "title": "Kein Kaffee bei Trigger", "description": "Durch Tee oder Zitronenwasser ersetzen." } },
"MEDIUM_fumar_23": { "es": { "title": "Recompensa con tu ahorro", "description": "Separa el dinero y elige premio saludable." }, "en": { "title": "Reward with your savings", "description": "Set aside money and pick a healthy reward." }, "de": { "title": "Mit Ersparnis belohnen", "description": "Geld beiseitelegen und gesunde Belohnung wählen." } },
"MEDIUM_fumar_24": { "es": { "title": "Parches o chicles de nicotina", "description": "Úsalos según indicaciones y regístralo." }, "en": { "title": "Nicotine gum/patch", "description": "Use as directed and log it." }, "de": { "title": "Nikotin-Kaugummi/Pflaster", "description": "Nach Anleitung nutzen und notieren." } },
"EASY_fumar_25": { "es": { "title": "Lista de disparadores", "description": "3 situaciones y tu respuesta." }, "en": { "title": "Trigger list", "description": "Note 3 situations and your response." }, "de": { "title": "Trigger-Liste", "description": "3 Situationen und deine Reaktion notieren." } },
"MEDIUM_fumar_26": { "es": { "title": "Practica decir «no»", "description": "Ensaya respuestas para rechazar." }, "en": { "title": "Practice saying “no”", "description": "Rehearse lines to refuse cigarettes." }, "de": { "title": "„Nein“ sagen üben", "description": "Sätze zum Ablehnen üben." } },
"MEDIUM_fumar_27": { "es": { "title": "Casa sin olor a tabaco", "description": "Ventila, lava telas y usa ambientador suave." }, "en": { "title": "Remove smoke smell", "description": "Air out, wash fabrics, use a mild freshener." }, "de": { "title": "Rauchgeruch entfernen", "description": "Lüften, Textilien waschen, milden Duft verwenden." } },
"EASY_fumar_28": { "es": { "title": "Duerme bien hoy", "description": "Pantallas fuera y 7–8 horas." }, "en": { "title": "Sleep well tonight", "description": "No screens late and aim for 7–8 hours." }, "de": { "title": "Heute gut schlafen", "description": "Späte Bildschirme vermeiden, 7–8 Std. anstreben." } },
"EASY_fumar_29": { "es": { "title": "Snacks saludables", "description": "Zanahoria, manzana o frutos secos." }, "en": { "title": "Healthy snacks", "description": "Carrot, apple, or nuts." }, "de": { "title": "Gesunde Snacks", "description": "Karotte, Apfel oder Nüsse." } },
"MEDIUM_fumar_30": { "es": { "title": "Diario del proceso", "description": "Fecha, ganas (0–10) y qué ayudó." }, "en": { "title": "Quit diary", "description": "Date, urge (0–10), and what helped." }, "de": { "title": "Rauchstopp-Tagebuch", "description": "Datum, Verlangen (0–10) und was half." } },

// Mantenerse en forma (forma_1 a forma_30)
"EASY_forma_1": { "es": { "title": "Haz 20 sentadillas", "description": "20 sentadillas sin material. Espalda recta." }, "en": { "title": "Do 20 squats", "description": "20 bodyweight squats. Keep your back straight." }, "de": { "title": "Mache 20 Kniebeugen", "description": "20 Kniebeugen ohne Equipment. Rücken gerade halten." } },
"HARD_forma_2": { "es": { "title": "Camina 10,000 pasos", "description": "Suma pasos en casa o fuera hasta 10,000." }, "en": { "title": "Walk 10,000 steps", "description": "Accumulate steps at home or outside to reach 10,000." }, "de": { "title": "Gehe 10.000 Schritte", "description": "Zuhause oder draußen Schritte sammeln bis 10.000." } },
"MEDIUM_forma_3": { "es": { "title": "Escalón 10 minutos", "description": "Sube y baja un escalón o escalera 10 min." }, "en": { "title": "Step-ups 10 minutes", "description": "Go up and down a step or stairs for 10 min." }, "de": { "title": "Step-Ups 10 Minuten", "description": "10 Min. eine Stufe oder Treppe hoch und runter." } },
"MEDIUM_forma_4": { "es": { "title": "Haz 15 flexiones", "description": "Con rodillas apoyadas si lo necesitas." }, "en": { "title": "Do 15 push-ups", "description": "Knees on the floor if needed." }, "de": { "title": "Mache 15 Liegestütze", "description": "Bei Bedarf auf den Knien." } },
"EASY_forma_5": { "es": { "title": "Estira 10 minutos", "description": "Cuello, hombros y piernas con suavidad." }, "en": { "title": "Stretch 10 minutes", "description": "Gently stretch neck, shoulders, and legs." }, "de": { "title": "10 Minuten dehnen", "description": "Nacken, Schultern und Beine sanft dehnen." } },
"MEDIUM_forma_6": { "es": { "title": "Plancha 1 minuto", "description": "Mantén 60 s; descansa si hace falta." }, "en": { "title": "Plank 1 minute", "description": "Hold for 60s; rest if needed." }, "de": { "title": "Plank 1 Minute", "description": "60 Sek. halten; bei Bedarf pausieren." } },
"EASY_forma_7": { "es": { "title": "Baila 15 minutos", "description": "Pon música y muévete libre en casa." }, "en": { "title": "Dance 15 minutes", "description": "Play music and move freely at home." }, "de": { "title": "15 Minuten tanzen", "description": "Musik an und frei zu Hause bewegen." } },
"MEDIUM_forma_8": { "es": { "title": "Yoga 20 minutos", "description": "Clase corta en vídeo o rutina propia." }, "en": { "title": "Yoga 20 minutes", "description": "Follow a short video class or your own flow." }, "de": { "title": "Yoga 20 Minuten", "description": "Kurzes Video oder eigene Routine folgen." } },
"MEDIUM_forma_9": { "es": { "title": "Saltar cuerda 5 minutos", "description": "Sin cuerda, simula el movimiento." }, "en": { "title": "Jump rope 5 minutes", "description": "No rope? Simulate the motion." }, "de": { "title": "Seilspringen 5 Minuten", "description": "Ohne Seil die Bewegung simulieren." } },
"MEDIUM_forma_10": { "es": { "title": "30 abdominales", "description": "3×10 repeticiones con buena respiración." }, "en": { "title": "30 crunches", "description": "3×10 reps with good breathing." }, "de": { "title": "30 Crunches", "description": "3×10 Wiederholungen mit ruhiger Atmung." } },
"HARD_forma_11": { "es": { "title": "Trote 20 min en sitio", "description": "Trota en el lugar o pasillo 20 minutos." }, "en": { "title": "Jog in place 20 min", "description": "Jog in place or hallway for 20 minutes." }, "de": { "title": "20 Min. auf der Stelle joggen", "description": "20 Minuten auf der Stelle oder im Flur joggen." } },
"HARD_forma_12": { "es": { "title": "Burpees 3 minutos", "description": "Intervalos 30 s on / 15 s off." }, "en": { "title": "Burpees 3 minutes", "description": "Intervals 30s on / 15s off." }, "de": { "title": "Burpees 3 Minuten", "description": "Intervalle 30 Sek. an / 15 Sek. aus." } },
"EASY_forma_13": { "es": { "title": "Equilibrio a una pierna", "description": "3×30 s por pierna junto a una pared." }, "en": { "title": "Single-leg balance", "description": "3×30s per leg next to a wall." }, "de": { "title": "Einbein-Stand", "description": "3×30 Sek. pro Bein an der Wand." } },
"MEDIUM_forma_14": { "es": { "title": "20 zancadas", "description": "10 por pierna; añade peso con botellas." }, "en": { "title": "20 lunges", "description": "10 per leg; add bottle weights if you like." }, "de": { "title": "20 Ausfallschritte", "description": "10 pro Bein; mit Flaschen als Gewicht." } },
"HARD_forma_15": { "es": { "title": "Bajo impacto 30 min", "description": "Cardio suave en casa, sin saltos." }, "en": { "title": "Low-impact 30 min", "description": "Gentle at-home cardio, no jumping." }, "de": { "title": "Low-Impact 30 Min.", "description": "Sanftes Cardio zu Hause, ohne Springen." } },
"HARD_forma_16": { "es": { "title": "Bici o pedaleo 30 min", "description": "Bici estática o pedaleo simulado amplio." }, "en": { "title": "Bike or pedal 30 min", "description": "Stationary bike or simulated pedaling." }, "de": { "title": "Velo/Simulieren 30 Min.", "description": "Heimtrainer oder Pedalbewegung simulieren." } },
"MEDIUM_forma_17": { "es": { "title": "Circuito peso corporal", "description": "Sentadillas, flexiones y plancha 10–15 min." }, "en": { "title": "Bodyweight circuit", "description": "Squats, push-ups, plank for 10–15 min." }, "de": { "title": "Körpergewichts-Zirkel", "description": "Kniebeugen, Liegestütze, Plank 10–15 Min." } },
"HARD_forma_18": { "es": { "title": "Cardio en casa 45 min", "description": "Clase online de cardio o baile." }, "en": { "title": "At-home cardio 45 min", "description": "Online cardio or dance class." }, "de": { "title": "Cardio zu Hause 45 Min.", "description": "Online-Cardio oder Tanz-Workout." } },
"MEDIUM_forma_19": { "es": { "title": "Movilidad 10–15 min", "description": "Articulaciones: cuello, hombros, cadera, tobillos." }, "en": { "title": "Mobility 10–15 min", "description": "Joints: neck, shoulders, hips, ankles." }, "de": { "title": "Mobilität 10–15 Min.", "description": "Gelenke: Nacken, Schultern, Hüfte, Knöchel." } },
"EASY_forma_20": { "es": { "title": "Camina tras cada comida", "description": "5–10 min de paseo suave en casa." }, "en": { "title": "Walk after meals", "description": "Take a gentle 5–10 min walk at home." }, "de": { "title": "Nach dem Essen gehen", "description": "5–10 Min. sanft zu Hause umhergehen." } },
"EASY_forma_21": { "es": { "title": "Respiración diafragmática", "description": "Respira profundo 5–10 minutos." }, "en": { "title": "Diaphragmatic breathing", "description": "Deep breathing for 5–10 minutes." }, "de": { "title": "Zwerchfellatmung", "description": "5–10 Minuten tief atmen." } },
"MEDIUM_forma_22": { "es": { "title": "Tai chi 15 minutos", "description": "Sigue un vídeo corto en el salón." }, "en": { "title": "Tai chi 15 minutes", "description": "Follow a short video at home." }, "de": { "title": "Tai-Chi 15 Minuten", "description": "Kurzes Video im Wohnzimmer folgen." } },
"EASY_forma_23": { "es": { "title": "Jumping jacks 3–5 min", "description": "A ritmo suave en casa." }, "en": { "title": "Jumping jacks 3–5 min", "description": "Easy pace at home." }, "de": { "title": "Hampelmänner 3–5 Min.", "description": "In ruhigem Tempo zu Hause." } },
"EASY_forma_24": { "es": { "title": "Postura 10 minutos", "description": "Alinea cabeza, hombros y cadera frente al espejo." }, "en": { "title": "Posture 10 minutes", "description": "Align head, shoulders, hips in a mirror." }, "de": { "title": "Haltung 10 Minuten", "description": "Kopf, Schultern, Hüfte vor dem Spiegel ausrichten." } },
"MEDIUM_forma_25": { "es": { "title": "Espalda fuerte", "description": "Superman y remo con botellas 10–15 min." }, "en": { "title": "Stronger back", "description": "Superman + bottle rows for 10–15 min." }, "de": { "title": "Rücken stärken", "description": "Superman und Rudern mit Flaschen 10–15 Min." } },
"MEDIUM_forma_26": { "es": { "title": "Core 12–15 min", "description": "Plancha, dead bug y elevación pélvica." }, "en": { "title": "Core 12–15 min", "description": "Plank, dead bug, and hip raises." }, "de": { "title": "Core 12–15 Min.", "description": "Plank, Dead Bug und Hüftheben." } },
"HARD_forma_27": { "es": { "title": "HIIT 15 minutos", "description": "Tabata: 8×(20 s trabajo/10 s pausa)." }, "en": { "title": "HIIT 15 minutes", "description": "Tabata: 8×(20s work/10s rest)." }, "de": { "title": "HIIT 15 Minuten", "description": "Tabata: 8×(20 Sek. Arbeit/10 Sek. Pause)." } },
"EASY_forma_28": { "es": { "title": "Estira zona lumbar", "description": "5–10 min de estiramientos suaves." }, "en": { "title": "Lower back stretch", "description": "5–10 minutes of gentle stretches." }, "de": { "title": "Lendenbereich dehnen", "description": "5–10 Min. sanft dehnen." } },
"MEDIUM_forma_29": { "es": { "title": "Brazos con botellas", "description": "Tonifica brazos 12–15 min con botellas." }, "en": { "title": "Arms with bottles", "description": "Tone arms 12–15 min using bottles." }, "de": { "title": "Arme mit Flaschen", "description": "Arme 12–15 Min. mit Flaschen trainieren." } },
"HARD_forma_30": { "es": { "title": "Natur 45 minutos", "description": "Camina al aire libre o 30 min de cardio en casa." }, "en": { "title": "Nature walk 45 min", "description": "Walk outdoors or do 30 min cardio at home." }, "de": { "title": "Naturspaziergang 45 Min.", "description": "Draußen gehen oder 30 Min. Cardio zu Hause." } },


};

export const getTaskTranslation = (taskId: string, locale: string = 'es'): TaskTranslation | null => {
  const task = TASK_TRANSLATIONS[taskId];
  if (!task) return null;
  return task[locale] || task.es;
};
