import type { Termin } from './termin'

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
  termine?: Termin[]
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
    termine: [
      // Monatlich ab Juli 2026: 1. Dienstag des Monats, alternierend Online/Luzern.
      { datum: '2026-07-07', uhrzeit: '18:30 – 20:00', ort: 'Online via Zoom', maxTeilnehmer: 12, anmeldefrist: '2026-06-30', status: 'offen' },
      { datum: '2026-08-04', uhrzeit: '18:30 – 20:00', ort: 'Luzern, SmartTalk-Räume', maxTeilnehmer: 12, anmeldefrist: '2026-07-28', status: 'offen' },
      { datum: '2026-09-01', uhrzeit: '18:30 – 20:00', ort: 'Online via Zoom', maxTeilnehmer: 12, anmeldefrist: '2026-08-25', status: 'offen' },
      { datum: '2026-10-06', uhrzeit: '18:30 – 20:00', ort: 'Luzern, SmartTalk-Räume', maxTeilnehmer: 12, anmeldefrist: '2026-09-29', status: 'offen' },
      { datum: '2026-11-03', uhrzeit: '18:30 – 20:00', ort: 'Online via Zoom', maxTeilnehmer: 12, anmeldefrist: '2026-10-27', status: 'offen' },
      { datum: '2026-12-01', uhrzeit: '18:30 – 20:00', ort: 'Luzern, SmartTalk-Räume', maxTeilnehmer: 12, anmeldefrist: '2026-11-24', status: 'offen' },
    ],
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
    titel: 'Meine Aufgaben mit KI lösen',
    untertitel: 'Du bringst drei echte Aufgaben mit. Du nimmst fertige Lösungen nach Hause.',
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
    preisAb: 'CHF 349',
    preisDetail: 'CHF 349 / Person',
    preisAbFirma: 'auf Anfrage',
    termine: [
      // Monatlich ab Juli 2026: 2. Freitag des Monats, vormittags in Luzern.
      { datum: '2026-07-10', uhrzeit: '09:00 – 12:30', ort: 'Luzern, SmartTalk-Räume', maxTeilnehmer: 8, anmeldefrist: '2026-06-26', status: 'offen' },
      { datum: '2026-08-14', uhrzeit: '09:00 – 12:30', ort: 'Luzern, SmartTalk-Räume', maxTeilnehmer: 8, anmeldefrist: '2026-07-31', status: 'offen' },
      { datum: '2026-09-11', uhrzeit: '09:00 – 12:30', ort: 'Luzern, SmartTalk-Räume', maxTeilnehmer: 8, anmeldefrist: '2026-08-28', status: 'offen' },
      { datum: '2026-10-09', uhrzeit: '09:00 – 12:30', ort: 'Luzern, SmartTalk-Räume', maxTeilnehmer: 8, anmeldefrist: '2026-09-25', status: 'offen' },
      { datum: '2026-11-13', uhrzeit: '09:00 – 12:30', ort: 'Luzern, SmartTalk-Räume', maxTeilnehmer: 8, anmeldefrist: '2026-10-30', status: 'offen' },
      { datum: '2026-12-11', uhrzeit: '09:00 – 12:30', ort: 'Luzern, SmartTalk-Räume', maxTeilnehmer: 8, anmeldefrist: '2026-11-27', status: 'offen' },
    ],
    seoTitel: 'Meine Aufgaben mit KI lösen. Halbtageskurs | SmartTalk',
    metaBeschreibung:
      'Eigene Aufgaben mitbringen, sofort mit KI lösen und fertige Prompt-Vorlagen mitnehmen. Halbtageskurs CHF 349. Zentralschweiz.',
    keywords: ['KI Berufsalltag', 'KI Praxiskurs Schweiz', 'Prompt Vorlagen', 'KI im Job'],
  },
]

export function getKursBySlug(slug: string): KiKurs | undefined {
  return kiKurse.find((k) => k.slug === slug)
}

export function getKiKursBySlug(slug: string): KiKurs | undefined {
  return kiKurse.find((k) => k.slug === slug)
}
