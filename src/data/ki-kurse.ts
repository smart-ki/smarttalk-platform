export interface Session {
  woche: number
  titel: string
  inhalt: string[]
}

export interface KiKurs {
  slug: string
  nummer: number
  level: string
  levelFarbe: string
  titel: string
  untertitel: string
  kurzbeschreibung: string
  ausfuehrlicheBeschreibung: string
  lernziele: string[]
  sessions?: Session[]         // Wöchentliche Lektionen
  zielgruppe: string
  format: string
  dauer: string
  anzahlSessions?: number      // z.B. 4
  minutenProSession?: number   // z.B. 90
  preisAb: string
  preisDetail?: string
  preisAbFirma?: string
  highlight?: string
  highlightFarbe?: string
  externerLink?: string
  seoTitel: string
  metaBeschreibung: string
  keywords: string[]
}

export const kiKurse: KiKurs[] = [
  {
    slug: 'schnupperkurs',
    nummer: 1,
    level: 'EINSTIEG',
    levelFarbe: 'bg-green-100 text-green-800',
    titel: 'Schnupperkurs: KI einfach ausprobieren',
    untertitel: '90 Minuten, die alles verändern können.',
    highlight: 'Nur CHF 49 – auch online',
    highlightFarbe: 'bg-green-50 border-green-200 text-green-800',
    kurzbeschreibung:
      'Du hast von KI gehört, aber noch nie wirklich damit gearbeitet? In diesem kompakten Einstieg bekommst du einen ehrlichen Einblick: Was kann KI wirklich, was nicht – und was kannst du ab morgen damit machen?',
    ausfuehrlicheBeschreibung:
      'Kein Vorwissen, kein Druck, keine Fachbegriffe. Dieser Kurs ist bewusst kurz gehalten – 90 Minuten, in denen du KI live erlebst und selbst ausprobierst. Du lernst, was Sprachmodelle sind, siehst live wie ChatGPT und Claude auf typische Büroaufgaben reagieren und formulierst deinen ersten eigenen Prompt. Du gehst nicht als KI-Experte nach Hause – aber du weisst, ob und wie KI etwas für dich sein kann.',
    lernziele: [
      'KI live erleben – ohne Vorkenntnisse, ohne Hemmungen',
      'Den ersten eigenen Prompt selbst ausprobieren',
      'Verstehen was KI kann – und was sie nicht kann',
      'Entscheiden ob ein vertiefender Kurs der nächste Schritt ist',
    ],
    zielgruppe: 'Alle – kein Vorwissen nötig',
    format: 'Online oder Präsenz',
    dauer: '1x 90 Min.',
    anzahlSessions: 1,
    minutenProSession: 90,
    preisAb: 'CHF 49',
    preisDetail: 'CHF 49 / Person',
    seoTitel: 'KI Schnupperkurs Schweiz – Einstieg in 90 Minuten | SmartTalk',
    metaBeschreibung:
      'KI einfach ausprobieren: 90-Minuten Schnupperkurs für Einsteiger:innen. Online oder Präsenz, CHF 49. Zentralschweiz.',
    keywords: ['KI Schnupperkurs', 'KI Einstieg', 'ChatGPT ausprobieren', 'KI für Anfänger Schweiz'],
  },
  {
    slug: 'grundkompetenzen',
    nummer: 2,
    level: 'GRUNDKURS',
    levelFarbe: 'bg-blue-100 text-blue-800',
    titel: 'Grundkompetenzen mit KI',
    untertitel: 'Kostenlos mit Bildungsgutschein – für Kantone LU, ZG, AG, SZ und OW.',
    highlight: 'Kostenlos mit Bildungsgutschein',
    highlightFarbe: 'bg-blue-50 border-blue-200 text-blue-800',
    kurzbeschreibung:
      'Ein umfassender Einsteigerkurs für alle, die KI von Grund auf lernen wollen – praxisnah, verständlich und vollständig finanziert über den Bildungsgutschein für Einwohner:innen der Kantone Luzern, Zug, Aargau, Schwyz und Obwalden.',
    ausfuehrlicheBeschreibung:
      'Dieser Kurs ist unser umfassendstes Grundangebot: In 21 Lernstunden begleitest du uns durch alle wichtigen Themen – von den Grundlagen der KI über praktisches Prompting bis zu Datenschutz und sicherem Umgang. Bewusst auf das Tempo von Menschen ohne technischen Hintergrund ausgelegt. Kein Fachjargon, viele Übungen, viel Austausch. Bereits auf der SmartTalk-Website unter «Grundkompetenzen» buchbar.',
    lernziele: [
      'KI-Grundlagen solide verstehen – was steckt hinter ChatGPT, Claude & Co.',
      'Eigene Prompts sicher und wirkungsvoll formulieren',
      'KI für alltägliche Aufgaben wie E-Mails, Texte und Recherchen einsetzen',
      'Datenschutz und sicheren Umgang mit KI-Tools kennen',
      'KI-Anwendungen für den eigenen Berufsalltag identifizieren',
    ],
    zielgruppe: 'Alle Berufsleute – kein Vorwissen nötig',
    format: 'Präsenzkurs',
    dauer: '21 Stunden',
    preisAb: 'Kostenlos*',
    preisDetail: 'Kostenlos mit Bildungsgutschein (Kantone LU, ZG, AG, SZ, OW)',
    externerLink: 'https://www.smarttalk.ch/grundkompetenzen',
    seoTitel: 'KI Grundkompetenzen Kurs – Kostenlos mit Bildungsgutschein | SmartTalk',
    metaBeschreibung:
      'KI-Grundkurs kostenlos mit Bildungsgutschein für Kantone Luzern, Zug, Aargau, Schwyz und Obwalden. 21 Stunden, praxisnah, kein Vorwissen nötig.',
    keywords: ['KI Bildungsgutschein', 'KI Kurs kostenlos Luzern', 'Grundkompetenzen KI', 'KI Kurs Zug Aargau Schwyz'],
  },
  {
    slug: 'ki-tools-vergleich',
    nummer: 3,
    level: 'KOMPETENZ',
    levelFarbe: 'bg-purple-100 text-purple-800',
    titel: 'Welche KI kann was? Tools & Produktivität im Vergleich',
    untertitel: 'Den Überblick behalten – und das richtige Tool für jede Aufgabe wählen.',
    kurzbeschreibung:
      'ChatGPT, Claude, Gemini, Copilot, Notion AI – die KI-Welt wächst rasant. In 4 Lektionen à 90 Min. lernst du die wichtigsten Tools kennen, vergleichst KI-Assistenten und Produktivitätstools und baust dir deine persönliche KI-Toolbox auf.',
    ausfuehrlicheBeschreibung:
      'Jeden Monat erscheinen neue KI-Tools – und es wird unübersichtlicher. Statt alles auszuprobieren, bekommst du hier einen strukturierten Überblick: In 4 Lektionen à 90 Minuten vergleichen wir die führenden Sprachmodelle sowie Produktivitätstools wie Microsoft Copilot und Notion AI. Du übst direkt mit eigenen Berufsaufgaben. Am Ende hast du deine persönliche KI-Toolbox – und weisst genau, was du wann einsetzt.',
    sessions: [
      {
        woche: 1,
        titel: 'Überblick: ChatGPT, Claude, Gemini, Copilot – was steckt dahinter?',
        inhalt: [
          'Wie funktionieren Sprachmodelle? (einfach erklärt)',
          'ChatGPT, Claude, Gemini & Microsoft Copilot im Vergleich',
          'Gratis vs. Bezahlversionen – lohnt es sich?',
          'Erste Übungen mit eigenen Aufgaben',
        ],
      },
      {
        woche: 2,
        titel: 'Text-KI im Büroalltag: E-Mails, Berichte, Meetings',
        inhalt: [
          'KI für E-Mails: schneller, besser, persönlicher',
          'Lange Dokumente in Sekunden zusammenfassen',
          'Berichte und Protokolle mit KI erstellen',
          'Microsoft Copilot in Word, Outlook & Teams',
        ],
      },
      {
        woche: 3,
        titel: 'Produktivitäts-KI: Notion AI, Canva AI & Recherche-Tools',
        inhalt: [
          'Notion AI: Projekte, Notizen und Wissen organisieren',
          'Canva AI: Präsentationen und Grafiken in Minuten',
          'KI-Suche und Recherche: Perplexity & Co.',
          'Was passt konkret zu meinem Berufsalltag?',
        ],
      },
      {
        woche: 4,
        titel: 'Meine persönliche KI-Toolbox + Aktionsplan',
        inhalt: [
          'Alles zusammenführen: Welche Tools für welche Aufgaben',
          'Persönliche KI-Toolbox definieren und dokumentieren',
          'Aktionsplan: Was setze ich ab nächster Woche um?',
          'Fragen & Austausch in der Gruppe',
        ],
      },
    ],
    lernziele: [
      'Die wichtigsten KI-Kategorien kennen: Text, Bild, Recherche, Produktivität',
      'ChatGPT, Claude, Gemini, Copilot & Notion AI direkt vergleichen',
      'Das richtige Tool für E-Mails, Texte, Recherche und Präsentationen wählen',
      'Microsoft Copilot in Office-Anwendungen sinnvoll einsetzen',
      'Eine persönliche KI-Toolbox für den eigenen Berufsalltag aufbauen',
    ],
    zielgruppe: 'Berufsleute mit ersten KI-Erfahrungen',
    format: 'Online oder Präsenz · 1x pro Woche',
    dauer: '4x 90 Min. · 4 Wochen',
    anzahlSessions: 4,
    minutenProSession: 90,
    preisAb: 'CHF 249',
    preisDetail: 'CHF 249 / Person | auf Anfrage als Firmenkurs',
    preisAbFirma: 'CHF 320',
    seoTitel: 'KI Tools Vergleich Kurs Schweiz – ChatGPT, Claude, Gemini | SmartTalk',
    metaBeschreibung:
      'Welche KI kann was? 4 Lektionen à 90 Min. zum Vergleich und gezielten Einsatz von KI-Tools. Für Berufsleute in der Zentralschweiz.',
    keywords: ['KI Tools Vergleich Kurs', 'ChatGPT Claude Gemini', 'KI Überblick Schweiz', 'KI Werkzeuge Kurs'],
  },
  {
    slug: 'prompts-die-funktionieren',
    nummer: 4,
    level: 'VERTIEFUNG',
    levelFarbe: 'bg-orange-100 text-orange-800',
    titel: 'Prompts die wirklich funktionieren',
    untertitel: 'Wer gut fragt, bekommt gute Antworten – lern die Kunst des Promptings.',
    kurzbeschreibung:
      'Der Unterschied zwischen mittelmässigen und wirklich guten KI-Ergebnissen ist fast immer der Prompt. In 4 Lektionen à 90 Min. lernst du, wie du KI so anweist, dass sie liefert was du brauchst – für Büroalltag und darüber hinaus.',
    ausfuehrlicheBeschreibung:
      'Prompting ist keine Raketenwissenschaft – aber es gibt Techniken, die den Unterschied machen. In 4 wöchentlichen Lektionen à 90 Minuten lernst du Schritt für Schritt, wie ein guter Prompt aufgebaut ist, wie du Kontext und Rollen einsetzt und wie du mit eigenen Vorlagen dauerhaft Zeit sparst. Alle Übungen basieren auf echten Büroaufgaben: E-Mails schreiben, Texte strukturieren, Ideen entwickeln, Dokumente zusammenfassen.',
    sessions: [
      {
        woche: 1,
        titel: 'Was ist ein Prompt? Das CARE-Prinzip',
        inhalt: [
          'Warum der Prompt alles entscheidet',
          'Das CARE-Prinzip: Kontext, Aufgabe, Rolle, Ergebnis-Format',
          'Häufige Fehler und wie man sie vermeidet',
          'Erste eigene Prompts schreiben und vergleichen',
        ],
      },
      {
        woche: 2,
        titel: 'Prompting für den Büroalltag',
        inhalt: [
          'E-Mails verfassen, kürzen und verbessern',
          'Berichte und Zusammenfassungen erstellen',
          'Meetings vorbereiten und Protokolle schreiben',
          'Übungen mit eigenen Aufgaben aus dem Job',
        ],
      },
      {
        woche: 3,
        titel: 'Besser werden: Iteration, Rollen und Kontext',
        inhalt: [
          'Prompts verbessern: aus schwachen Antworten lernen',
          'Rollen-Prompting: KI als Kollege, Coach oder Lektor',
          'Mehrstufige Prompts für komplexe Aufgaben',
          'KI für Ideen, Brainstorming und kreative Aufgaben',
        ],
      },
      {
        woche: 4,
        titel: 'Eigene Prompt-Vorlagen + persönlicher Aktionsplan',
        inhalt: [
          'Wiederverwendbare Vorlagen für wiederkehrende Aufgaben',
          'Persönliche Prompt-Bibliothek aufbauen',
          'Aktionsplan: 3 Dinge, die ich ab morgen anders mache',
          'Fragen & Austausch in der Gruppe',
        ],
      },
    ],
    lernziele: [
      'Das CARE-Prinzip anwenden: Kontext, Aufgabe, Rolle, Ergebnis-Format',
      'Prompts für E-Mails, Berichte, Zusammenfassungen und Ideen erstellen',
      'Aus schwachen Antworten lernen und Prompts verbessern',
      'Eigene wiederverwendbare Prompt-Vorlagen entwickeln',
      'KI dauerhaft effizienter im Alltag einsetzen',
    ],
    zielgruppe: 'Berufsleute, die KI bereits kennen und mehr herausholen wollen',
    format: 'Online oder Präsenz · 1x pro Woche',
    dauer: '4x 90 Min. · 4 Wochen',
    anzahlSessions: 4,
    minutenProSession: 90,
    preisAb: 'CHF 249',
    preisDetail: 'CHF 249 / Person | auf Anfrage als Firmenkurs',
    preisAbFirma: 'CHF 320',
    seoTitel: 'Prompting Kurs Schweiz – Besser mit KI arbeiten | SmartTalk',
    metaBeschreibung:
      'Prompts die wirklich funktionieren: 4 Lektionen à 90 Min. Lerne wie du KI richtig anweist. Für Berufsleute in der Zentralschweiz.',
    keywords: ['Prompting Kurs Schweiz', 'ChatGPT Prompts', 'KI besser nutzen', 'Prompt Kurs Luzern'],
  },
  {
    slug: 'datenschutz-ethik',
    nummer: 5,
    level: 'SICHERHEIT',
    levelFarbe: 'bg-red-100 text-red-800',
    titel: 'KI, Datenschutz & Ethik: Verantwortungsvoll handeln',
    untertitel: 'KI nutzen – aber richtig. Sicher, rechtskonform und fair.',
    kurzbeschreibung:
      'Welche Daten darf ich einer KI weitergeben? Was sagt das Schweizer Datenschutzgesetz? In 2 Lektionen à 90 Min. bekommst du praxisnahe Antworten – ohne juristischen Fachjargon.',
    ausfuehrlicheBeschreibung:
      'KI-Tools sind mächtig – und mit Macht kommt Verantwortung. In 2 kompakten Lektionen à 90 Minuten lernst du, was das Schweizer Datenschutzgesetz (DSG) und die DSGVO für deinen KI-Einsatz bedeuten, welche Daten du keiner KI anvertrauen darfst und wie du Bias und Diskriminierung erkennst. Du entwickelst eine einfache KI-Richtlinie für dein Team.',
    sessions: [
      {
        woche: 1,
        titel: 'Rechtliche Grundlagen: DSG, DSGVO & EU AI Act',
        inhalt: [
          'Was darf ich einer KI anvertrauen? Praxisregeln',
          'Schweizer Datenschutzgesetz (DSG) im KI-Kontext',
          'DSGVO und EU AI Act – was gilt für uns?',
          'Häufige Fehler im Umgang mit KI und Daten',
        ],
      },
      {
        woche: 2,
        titel: 'Ethik, Bias & KI-Richtlinie für das Team',
        inhalt: [
          'KI-Bias erkennen und vermeiden',
          'Ethische Fragen im Berufsalltag besprechen',
          'KI-Nutzungsrichtlinie für das eigene Team erstellen',
          'Vorlage mitnehmen und direkt einsetzen',
        ],
      },
    ],
    lernziele: [
      'Rechtliche Grundlagen für KI-Einsatz in der Schweiz kennen (DSG, DSGVO, EU AI Act)',
      'Wissen, welche Daten sicher an KI-Tools übermittelt werden dürfen',
      'KI-Bias und Diskriminierung erkennen und vermeiden',
      'Eine einfache KI-Nutzungsrichtlinie für das eigene Team entwickeln',
    ],
    zielgruppe: 'Alle KI-Nutzenden, HR, Führungskräfte, Compliance',
    format: 'Online oder Präsenz · 1x pro Woche',
    dauer: '2x 90 Min. · 2 Wochen',
    anzahlSessions: 2,
    minutenProSession: 90,
    preisAb: 'CHF 129',
    preisDetail: 'CHF 129 / Person | auf Anfrage als Firmenkurs',
    preisAbFirma: 'CHF 180',
    seoTitel: 'KI Datenschutz & Ethik Kurs Schweiz – DSG, DSGVO | SmartTalk',
    metaBeschreibung:
      'KI sicher und rechtskonform einsetzen: DSG, DSGVO, EU AI Act. 2 Lektionen à 90 Min. Für Unternehmen und Mitarbeitende in der Zentralschweiz.',
    keywords: ['KI Datenschutz Kurs', 'DSGVO KI Schweiz', 'KI Ethik', 'DSG KI'],
  },
  {
    slug: 'ki-strategie',
    nummer: 6,
    level: 'STRATEGIE',
    levelFarbe: 'bg-gray-100 text-gray-800',
    titel: 'KI in Geschäftsprozessen implementieren',
    untertitel: 'KI strategisch einführen – nachhaltig, strukturiert und wirksam.',
    kurzbeschreibung:
      'Viele Unternehmen nutzen KI punktuell – aber kaum eines hat eine Strategie. In 4 Lektionen à 90 Min. entwickelst du eine priorisierte KI-Roadmap und lernst, wie du dein Team für die Transformation mitnimmst.',
    ausfuehrlicheBeschreibung:
      'Dieser Kurs richtet sich an Führungskräfte und Entscheidungsträger:innen, die KI nicht nur ausprobieren, sondern strategisch einführen wollen. In 4 wöchentlichen Lektionen à 90 Minuten analysierst du die KI-Potenziale in deinem Unternehmen, entwickelst eine Roadmap und lernst, wie du Umsetzung und Kulturwandel begleitest. Mit echten Praxisbeispielen aus Schweizer KMU.',
    sessions: [
      {
        woche: 1,
        titel: 'KI-Potenziale im eigenen Unternehmen erkennen',
        inhalt: [
          'Wo steckt KI-Potenzial in euren Prozessen?',
          'Systematische Analyse: Quick Wins vs. grosse Projekte',
          'Was andere KMU bereits umgesetzt haben',
          'Eigene Prozesse kartieren und bewerten',
        ],
      },
      {
        woche: 2,
        titel: 'KI-Roadmap entwickeln & Prioritäten setzen',
        inhalt: [
          'Von der Idee zur priorisierten Massnahmenliste',
          'Ressourcen, Kosten und ROI realistisch einschätzen',
          'Make or buy: Welche Tools, welche Partner?',
          'Eigene KI-Roadmap beginnen',
        ],
      },
      {
        woche: 3,
        titel: 'Change Management: Team abholen & mitnehmen',
        inhalt: [
          'Warum KI-Projekte an Menschen scheitern',
          'Ängste ansprechen, Vertrauen aufbauen',
          'Mitarbeitende befähigen statt überfordern',
          'Kommunikationsplan für die KI-Einführung',
        ],
      },
      {
        woche: 4,
        titel: 'Umsetzung, Risiken & konkreter Massnahmenplan',
        inhalt: [
          'Risiken und Stolpersteine kennen und vermeiden',
          'Pilotprojekte definieren und starten',
          'Konkreter Massnahmenplan für die nächsten 90 Tage',
          'Austausch und gegenseitiges Feedback',
        ],
      },
    ],
    lernziele: [
      'KI-Potenziale in eigenen Geschäftsprozessen systematisch identifizieren',
      'Eine priorisierte KI-Roadmap für das Unternehmen entwickeln',
      'Change Management: Team für KI-Transformation begeistern',
      'Risiken, Kosten und ROI realistisch einschätzen',
      'Mit einem 90-Tage-Massnahmenplan nach Hause gehen',
    ],
    zielgruppe: 'Führungskräfte, GL, Projektleiter:innen, KMU-Inhaber:innen',
    format: 'Online oder Präsenz · 1x pro Woche',
    dauer: '4x 90 Min. · 4 Wochen',
    anzahlSessions: 4,
    minutenProSession: 90,
    preisAb: 'CHF 349',
    preisDetail: 'CHF 349 / Person | auf Anfrage als Firmenkurs',
    preisAbFirma: 'CHF 450',
    seoTitel: 'KI Implementierung KMU Schweiz – Strategie & Geschäftsprozesse | SmartTalk',
    metaBeschreibung:
      'KI strategisch in KMU einführen: 4 Lektionen à 90 Min. Roadmap, Change Management, Massnahmenplan. Für Führungskräfte in der Zentralschweiz.',
    keywords: ['KI Implementierung KMU', 'KI Strategie Schweiz', 'KI Roadmap', 'KI Transformation KMU'],
  },
  {
    slug: 'ki-bildung',
    nummer: 7,
    level: 'BILDUNG',
    levelFarbe: 'bg-teal-100 text-teal-800',
    titel: 'KI in der Bildung verantwortungsbewusst einsetzen',
    untertitel: 'KI verändert die Bildung – gestalte diesen Wandel aktiv mit.',
    kurzbeschreibung:
      'KI im Unterricht, in der Kursplanung und in der Verwaltung: In 4 Lektionen à 90 Min. lernst du, wie du KI in deiner Bildungsinstitution sinnvoll, sicher und pädagogisch verantwortungsbewusst einsetzt.',
    ausfuehrlicheBeschreibung:
      'KI verändert die Bildungslandschaft grundlegend. In 4 wöchentlichen Lektionen à 90 Minuten bekommst du Bildungsverantwortliche das Handwerkszeug: von praktischen Anwendungen im Unterricht bis zur KI-Strategie für deine Institution. Mit konkreten Beispielen, Datenschutz-Know-how und Raum für den Austausch mit anderen Bildungsprofis.',
    sessions: [
      {
        woche: 1,
        titel: 'KI in der Bildungslandschaft: Chancen & Risiken',
        inhalt: [
          'Wie KI die Bildung bereits verändert',
          'ChatGPT im Klassenzimmer – Bedrohung oder Chance?',
          'Internationale Erfahrungen und Schweizer Kontext',
          'Diskussion: Wo stehen wir in unserer Institution?',
        ],
      },
      {
        woche: 2,
        titel: 'KI im Unterricht, in der Kursplanung & Verwaltung',
        inhalt: [
          'KI als Unterrichtshilfe: Lektionsplanung, Differenzierung',
          'Verwaltungsaufgaben mit KI vereinfachen',
          'KI in der Lernenden-Kommunikation',
          'Praxisübungen mit eigenen Unterrichtsbeispielen',
        ],
      },
      {
        woche: 3,
        titel: 'Datenschutz, Ethik & pädagogische Verantwortung',
        inhalt: [
          'Datenschutz im Bildungskontext: Was gilt für Schulen?',
          'Umgang mit KI-generierten Texten (Hausaufgaben, Prüfungen)',
          'Pädagogische Ethik: Was wollen wir bewahren?',
          'KI-Nutzungsrichtlinie für die eigene Institution',
        ],
      },
      {
        woche: 4,
        titel: 'KI-Strategie für die eigene Bildungsinstitution',
        inhalt: [
          'Wo anfangen? Priorisierung und erste Schritte',
          'Team und Lehrpersonen für KI begeistern',
          'KI-Roadmap für die eigene Institution entwickeln',
          'Austausch und Abschluss',
        ],
      },
    ],
    lernziele: [
      'KI-Chancen und -Risiken für Bildungsinstitutionen einschätzen',
      'KI in Unterricht, Kursplanung, Verwaltung und Kommunikation einsetzen',
      'Datenschutz, Ethik und pädagogische Verantwortung wahren',
      'Eine KI-Roadmap für die eigene Bildungsinstitution entwickeln',
    ],
    zielgruppe: 'Schulleitungen, Lehrpersonen, Bildungsmanager:innen',
    format: 'Online oder Präsenz · 1x pro Woche',
    dauer: '4x 90 Min. · 4 Wochen',
    anzahlSessions: 4,
    minutenProSession: 90,
    preisAb: 'CHF 349',
    preisDetail: 'CHF 349 / Person | auf Anfrage als Firmenkurs',
    preisAbFirma: 'CHF 450',
    seoTitel: 'KI in der Bildung – Kurs für Schulen & Weiterbildungsanbieter Schweiz | SmartTalk',
    metaBeschreibung:
      'KI verantwortungsbewusst in Bildungsinstitutionen einsetzen. 4 Lektionen à 90 Min. Für Schulleitungen und Bildungsanbieter in der Zentralschweiz.',
    keywords: ['KI Bildung Schweiz', 'KI Schule', 'KI Unterricht', 'Bildungsdigitalisierung'],
  },
]

export function getKursBySlug(slug: string): KiKurs | undefined {
  return kiKurse.find((k) => k.slug === slug)
}

export function getKiKursBySlug(slug: string): KiKurs | undefined {
  return kiKurse.find((k) => k.slug === slug)
}
