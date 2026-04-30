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
  sessions?: Session[]
  zielgruppe: string
  format: string
  dauer: string
  anzahlSessions?: number
  minutenProSession?: number
  preisAb: string
  preisDetail?: string
  preisAbFirma?: string
  isBundle?: boolean
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
    titel: 'KI einfach ausprobieren',
    untertitel: '90 Minuten, die alles verändern können.',
    highlight: 'Nur CHF 49 – der perfekte Einstieg',
    highlightFarbe: 'bg-green-50 border-green-200 text-green-800',
    kurzbeschreibung:
      'Du hast von KI gehört, aber noch nie wirklich damit gearbeitet? In diesen 90 Minuten erlebst du KI live, probierst selbst aus und weisst danach, ob und wie KI etwas für dich sein kann.',
    ausfuehrlicheBeschreibung:
      'Kein Vorwissen, kein Druck, keine Fachbegriffe. 90 Minuten, in denen du KI live erlebst und selbst ausprobierst. Du siehst, wie ChatGPT und Claude auf typische Aufgaben aus deinem Alltag reagieren – und formulierst deinen ersten eigenen Prompt. Du gehst nicht als KI-Expertin nach Hause, aber du weisst genau, was KI für dich leisten kann.',
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
    seoTitel: 'KI einfach ausprobieren – 90 Min. Schnupperkurs | SmartTalk',
    metaBeschreibung:
      'KI live erleben in 90 Minuten. Schnupperkurs für Einsteiger:innen, CHF 49. Online oder Präsenz. 2 Slots im Juni – jetzt anmelden.',
    keywords: ['KI Schnupperkurs', 'KI Einstieg', 'ChatGPT ausprobieren', 'KI für Anfänger Schweiz'],
  },
  {
    slug: 'prompting-ki-tools',
    nummer: 2,
    level: 'AUFBAU',
    levelFarbe: 'bg-orange-100 text-orange-800',
    titel: 'Prompting & KI-Tools',
    untertitel: 'Wer gut fragt, bekommt gute Antworten – und nutzt das richtige Tool.',
    kurzbeschreibung:
      'In 4 Lektionen à 90 Min. lernst du, wie du KI so anweist, dass sie wirklich liefert – und welches Tool für welche Aufgabe am besten geeignet ist. Von ChatGPT über Claude bis Microsoft Copilot.',
    ausfuehrlicheBeschreibung:
      'Prompting und Tool-Wahl entscheiden darüber, ob KI im Alltag wirklich hilft oder frustriert. In 4 wöchentlichen Lektionen à 90 Minuten lernst du die Kunst des Promptings – mit dem bewährten CARE-Prinzip – und vergleichst die führenden KI-Tools direkt miteinander. Alle Übungen basieren auf echten Berufsaufgaben: E-Mails schreiben, Texte strukturieren, Präsentationen erstellen, Meetings vorbereiten.',
    sessions: [
      {
        woche: 1,
        titel: 'Tools im Überblick: ChatGPT, Claude, Gemini & Copilot',
        inhalt: [
          'Wie funktionieren Sprachmodelle? (einfach erklärt)',
          'ChatGPT, Claude, Gemini & Microsoft Copilot im Vergleich',
          'Gratis vs. Bezahlversionen – lohnt es sich?',
          'Erste Übungen mit eigenen Aufgaben',
        ],
      },
      {
        woche: 2,
        titel: 'Prompting Grundlagen: Das CARE-Prinzip',
        inhalt: [
          'Warum der Prompt alles entscheidet',
          'Das CARE-Prinzip: Kontext, Aufgabe, Rolle, Ergebnis-Format',
          'Häufige Fehler und wie man sie vermeidet',
          'Erste Prompts für Büroaufgaben schreiben',
        ],
      },
      {
        woche: 3,
        titel: 'Produktivitäts-KI: Copilot, Notion AI & Recherche',
        inhalt: [
          'Microsoft Copilot in Word, Outlook & Teams',
          'Notion AI: Projekte, Notizen, Wissen organisieren',
          'KI für Recherche und Zusammenfassungen',
          'Prompts verbessern: Iteration und Rollen-Prompting',
        ],
      },
      {
        woche: 4,
        titel: 'Meine persönliche KI-Toolbox + Aktionsplan',
        inhalt: [
          'Wiederverwendbare Prompt-Vorlagen erstellen',
          'Persönliche KI-Toolbox: Welches Tool für welche Aufgabe',
          'Aktionsplan: 3 Dinge, die ich ab morgen anders mache',
          'Fragen & Austausch in der Gruppe',
        ],
      },
    ],
    lernziele: [
      'Das CARE-Prinzip anwenden: Kontext, Aufgabe, Rolle, Ergebnis-Format',
      'ChatGPT, Claude, Gemini, Copilot & Notion AI direkt vergleichen',
      'Prompts für E-Mails, Berichte, Zusammenfassungen und Präsentationen erstellen',
      'Microsoft Copilot in Office-Anwendungen sinnvoll einsetzen',
      'Eigene wiederverwendbare Prompt-Vorlagen entwickeln',
    ],
    zielgruppe: 'Berufsleute mit ersten KI-Erfahrungen oder nach dem Schnupperkurs',
    format: 'Online oder Präsenz · 1x pro Woche',
    dauer: '4x 90 Min. · 4 Wochen',
    anzahlSessions: 4,
    minutenProSession: 90,
    preisAb: 'CHF 450',
    preisDetail: 'CHF 450 / Person | auch als Inhouse buchbar',
    preisAbFirma: 'auf Anfrage',
    seoTitel: 'Prompting & KI-Tools Kurs Schweiz – 4x 90 Min. | SmartTalk',
    metaBeschreibung:
      'Prompting und KI-Tools in einem Kurs: ChatGPT, Claude, Copilot & mehr. 4 Lektionen à 90 Min., CHF 450. Für Berufsleute in der Zentralschweiz.',
    keywords: ['Prompting Kurs Schweiz', 'KI Tools Vergleich', 'ChatGPT Kurs', 'Microsoft Copilot Kurs'],
  },
  {
    slug: 'datenschutz-ethik',
    nummer: 3,
    level: 'SICHERHEIT',
    levelFarbe: 'bg-red-100 text-red-800',
    titel: 'KI verantwortungsvoll nutzen',
    untertitel: 'Datenschutz, Ethik und sicherer Umgang – praxisnah und ohne Juristendeutsch.',
    kurzbeschreibung:
      'Welche Daten darf ich einer KI weitergeben? Was sagt das Schweizer Datenschutzgesetz? In diesem Halbtageskurs bekommst du praxisnahe Antworten – und nimmst eine einfache KI-Richtlinie für dein Team mit.',
    ausfuehrlicheBeschreibung:
      'KI-Tools sind mächtig – und mit Macht kommt Verantwortung. In diesem kompakten Halbtageskurs lernst du, was das Schweizer Datenschutzgesetz (DSG) und die DSGVO für deinen KI-Einsatz bedeuten, welche Daten du keiner KI anvertrauen darfst und wie du Bias und Diskriminierung erkennst. Du entwickelst eine einfache KI-Richtlinie, die du direkt im Team einsetzen kannst.',
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
    format: 'Präsenz (Halbtag)',
    dauer: 'Halbtag (ca. 3.5h)',
    preisAb: 'CHF 230',
    preisDetail: 'CHF 230 / Person | auch als Inhouse buchbar',
    preisAbFirma: 'auf Anfrage',
    seoTitel: 'KI Datenschutz & Ethik Kurs Schweiz – DSG, DSGVO | SmartTalk',
    metaBeschreibung:
      'KI sicher und rechtskonform einsetzen: DSG, DSGVO, EU AI Act. Halbtageskurs CHF 230. Für Unternehmen und Mitarbeitende in der Zentralschweiz.',
    keywords: ['KI Datenschutz Kurs', 'DSGVO KI Schweiz', 'KI Ethik', 'DSG KI'],
  },
]

export function getKursBySlug(slug: string): KiKurs | undefined {
  return kiKurse.find((k) => k.slug === slug)
}

export function getKiKursBySlug(slug: string): KiKurs | undefined {
  return kiKurse.find((k) => k.slug === slug)
}
