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
    highlight: 'Nur CHF 49. Der perfekte Einstieg.',
    highlightFarbe: 'bg-green-50 border-green-200 text-green-800',
    kurzbeschreibung:
      'Du hast von KI gehört, aber noch nie wirklich damit gearbeitet? In diesen 90 Minuten erlebst du KI live, probierst selbst aus und weisst danach, ob und wie KI etwas für dich sein kann.',
    ausfuehrlicheBeschreibung:
      'Kein Vorwissen, kein Druck, keine Fachbegriffe. In 90 Minuten erlebst du KI live und probierst sie selbst aus. Du siehst, wie ChatGPT und Claude auf typische Aufgaben aus deinem Alltag reagieren, und formulierst deinen ersten eigenen Prompt. Du gehst nicht als KI-Expertin nach Hause, aber du weisst genau, was KI für dich leisten kann.',
    lernziele: [
      'KI live erleben ohne Vorkenntnisse und ohne Hemmungen',
      'Den ersten eigenen Prompt selbst ausprobieren',
      'Verstehen, was KI kann und wo ihre Grenzen liegen',
      'Entscheiden, ob ein vertiefender Kurs der nächste Schritt ist',
    ],
    zielgruppe: 'Alle. Kein Vorwissen nötig.',
    format: 'Online oder Präsenz',
    dauer: '1x 90 Min.',
    anzahlSessions: 1,
    minutenProSession: 90,
    preisAb: 'CHF 49',
    preisDetail: 'CHF 49 / Person',
    seoTitel: 'KI einfach ausprobieren. 90 Min. Schnupperkurs | SmartTalk',
    metaBeschreibung:
      'KI live erleben in 90 Minuten. Schnupperkurs für Einsteiger, CHF 49. Online oder Präsenz. Jetzt anmelden.',
    keywords: ['KI Schnupperkurs', 'KI Einstieg', 'ChatGPT ausprobieren', 'KI für Anfänger Schweiz'],
  },
  {
    slug: 'ki-berufsalltag',
    nummer: 2,
    level: 'PRAXIS',
    levelFarbe: 'bg-orange-100 text-orange-800',
    titel: 'KI konkret für meinen Berufsalltag',
    untertitel: 'Du bringst deine Aufgaben mit. Wir lösen sie gemeinsam mit KI.',
    highlight: 'Ideal nach dem Einstiegskurs.',
    highlightFarbe: 'bg-orange-50 border-orange-200 text-orange-800',
    kurzbeschreibung:
      'Du weisst, was KI ist. Jetzt wendest du sie auf deinen Alltag an. In diesem Halbtageskurs bringst du drei echte Aufgaben aus deinem Job mit und erarbeitest direkt fertige Lösungen mit KI. Du nimmst Prompt-Vorlagen mit, die du ab morgen sofort einsetzt.',
    ausfuehrlicheBeschreibung:
      'Vom Ausprobieren zum echten Nutzen. In diesem praxisorientierten Halbtageskurs arbeitest du ausschliesslich mit deinen eigenen Aufgaben. Ob E-Mails, Berichte, Zusammenfassungen, Präsentationen oder Recherche: Wir nehmen, was dich täglich beschäftigt, und machen es mit KI schneller und besser. Du gehst mit einem fertigen Set an Prompt-Vorlagen nach Hause, das direkt einsatzbereit ist.',
    lernziele: [
      'Eigene Berufsaufgaben mit KI lösen und dabei Zeit sparen',
      'Fertige Prompt-Vorlagen für deinen Joballtag entwickeln',
      'Verstehen, welche KI-Tools für welche Aufgaben am besten passen',
      'KI als echten Arbeitsassistenten einsetzen, nicht nur als Spielzeug',
    ],
    zielgruppe: 'Berufsleute nach dem Einstiegskurs oder mit ersten KI-Erfahrungen',
    format: 'Präsenz (Halbtag)',
    dauer: 'Halbtag (ca. 3.5h)',
    preisAb: 'CHF 149',
    preisDetail: 'CHF 149 / Person',
    preisAbFirma: 'auf Anfrage',
    seoTitel: 'KI konkret für den Berufsalltag. Halbtageskurs | SmartTalk',
    metaBeschreibung:
      'KI direkt auf eigene Berufsaufgaben anwenden. Halbtageskurs CHF 149. Mit fertigen Prompt-Vorlagen nach Hause. Zentralschweiz.',
    keywords: ['KI Berufsalltag', 'KI Praxiskurs Schweiz', 'Prompt Vorlagen', 'KI im Job'],
  },
  {
    slug: 'ki-auf-dem-desktop',
    nummer: 3,
    level: 'VERTIEFUNG',
    levelFarbe: 'bg-red-100 text-red-800',
    titel: 'KI auf meinem Desktop',
    untertitel: 'Prompting, Tools und dein persönlicher KI-Arbeitsplatz.',
    kurzbeschreibung:
      'Du weisst, was KI kann, und hast sie selbst ausprobiert. Jetzt richtest du sie ein. In vier Lektionen lernst du, wie du mit dem richtigen Prompt wirklich gute Ergebnisse bekommst, welches Tool für welche Aufgabe passt, und wie KI ein fester Bestandteil deines digitalen Arbeitsplatzes wird.',
    ausfuehrlicheBeschreibung:
      'ChatGPT, Claude, Copilot in Word und Outlook, Notion AI: Es gibt viele KI-Tools. Aber welches nutzt du wofür? Und wie formulierst du deine Anfragen so, dass du wirklich gute Ergebnisse bekommst? In vier wöchentlichen Lektionen à 90 Minuten lernst du das bewährte CARE-Prinzip für strukturiertes Prompting, vergleichst die führenden Tools direkt miteinander und richtest deinen persönlichen KI-Arbeitsplatz ein. Alle Übungen basieren auf echten Berufsaufgaben.',
    sessions: [
      {
        woche: 1,
        titel: 'Tools im Überblick: ChatGPT, Claude, Gemini und Copilot',
        inhalt: [
          'Wie funktionieren Sprachmodelle? Einfach erklärt.',
          'ChatGPT, Claude, Gemini und Microsoft Copilot im Vergleich.',
          'Gratis vs. Bezahlversionen: Wann lohnt es sich?',
          'Erste Übungen mit eigenen Aufgaben.',
        ],
      },
      {
        woche: 2,
        titel: 'Prompting mit dem CARE-Prinzip',
        inhalt: [
          'Warum der Prompt alles entscheidet.',
          'Das CARE-Prinzip: Kontext, Aufgabe, Rolle, Ergebnis-Format.',
          'Typische Fehler und wie du sie vermeidest.',
          'Erste Prompts für Büroaufgaben schreiben.',
        ],
      },
      {
        woche: 3,
        titel: 'KI auf dem Desktop: Copilot, Notion AI und mehr',
        inhalt: [
          'Microsoft Copilot in Word, Outlook und Teams einrichten.',
          'Notion AI: Projekte, Notizen und Wissen organisieren.',
          'KI für Recherche und Zusammenfassungen einsetzen.',
          'Prompts verbessern mit Iteration und Rollen-Prompting.',
        ],
      },
      {
        woche: 4,
        titel: 'Mein persönlicher KI-Arbeitsplatz',
        inhalt: [
          'Wiederverwendbare Prompt-Vorlagen erstellen.',
          'Persönliche KI-Toolbox: Welches Tool für welche Aufgabe.',
          'Mein Setup: KI fest in den Arbeitsalltag integrieren.',
          'Fragen und Austausch in der Gruppe.',
        ],
      },
    ],
    lernziele: [
      'Das CARE-Prinzip anwenden: Kontext, Aufgabe, Rolle, Ergebnis-Format',
      'ChatGPT, Claude, Gemini, Copilot und Notion AI direkt vergleichen',
      'Prompts für E-Mails, Berichte, Zusammenfassungen und Präsentationen erstellen',
      'Microsoft Copilot in Office-Anwendungen sinnvoll einsetzen',
      'Den eigenen KI-Arbeitsplatz einrichten und wiederverwendbare Vorlagen entwickeln',
    ],
    zielgruppe: 'Berufsleute, die KI fest in ihren digitalen Arbeitsalltag integrieren wollen',
    format: 'Online oder Präsenz. 1x pro Woche.',
    dauer: '4x 90 Min. über 4 Wochen',
    anzahlSessions: 4,
    minutenProSession: 90,
    preisAb: 'CHF 450',
    preisDetail: 'CHF 450 / Person. Auch als Inhouse-Training buchbar.',
    preisAbFirma: 'auf Anfrage',
    seoTitel: 'KI auf dem Desktop. Prompting und Tools für den Berufsalltag | SmartTalk',
    metaBeschreibung:
      'KI optimal einsetzen: Prompting, Tools und persönlicher KI-Arbeitsplatz. 4x 90 Min., CHF 450. Für Berufsleute in der Zentralschweiz.',
    keywords: ['KI Desktop einrichten', 'Prompting Kurs Schweiz', 'Microsoft Copilot Kurs', 'KI Arbeitsplatz'],
  },
]

export function getKursBySlug(slug: string): KiKurs | undefined {
  return kiKurse.find((k) => k.slug === slug)
}

export function getKiKursBySlug(slug: string): KiKurs | undefined {
  return kiKurse.find((k) => k.slug === slug)
}
