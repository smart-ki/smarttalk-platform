export interface KommKurs {
  slug: string
  nummer: number
  level: string
  levelFarbe: string
  titel: string
  untertitel: string
  kurzbeschreibung: string
  ausfuehrlicheBeschreibung: string
  lernziele: string[]
  inhalte: string[]
  zielgruppe: string
  format: string
  dauer: string
  preisAb: string
  preisDetail?: string
  preisAbFirma?: string
  highlight?: string
  highlightFarbe?: string
  seoTitel: string
  metaBeschreibung: string
  keywords: string[]
}

export const kommKurse: KommKurs[] = [
  {
    slug: 'sicher-auftreten-praesentieren',
    nummer: 1,
    level: 'GRUNDKURS',
    levelFarbe: 'bg-purple-100 text-purple-800',
    titel: 'Sicher auftreten & präsentieren',
    untertitel: 'Körpersprache, Stimme und Wirkung bewusst einsetzen.',
    kurzbeschreibung: 'Wie du etwas sagst, entscheidet oft mehr als was du sagst. Dieser Tageskurs gibt dir konkrete Werkzeuge für einen souveränen Auftritt: Körpersprache lesen und einsetzen, die Stimme als Führungsinstrument nutzen und Inhalte wirkungsvoll präsentieren.',
    ausfuehrlicheBeschreibung: 'In Meetings und Präsentationen entscheidet nicht nur der Inhalt, sondern wie du ihn vermittelst. Bist du präsent? Wirkst du überzeugend? Wirst du ernst genommen? Dieser praxisnahe Tageskurs zeigt dir, wie Körpersprache, Stimme und Struktur zusammenwirken – und wie du sie bewusst einsetzen kannst. Mit Übungen, Feedback und konkreten Situationen aus deinem Alltag.',
    lernziele: [
      'Körpersprache bewusst wahrnehmen und gezielt einsetzen',
      'Stimme und Tonalität als Führungsinstrument nutzen',
      'Inhalte klar strukturieren und wirkungsvoll präsentieren',
      'Sicher und präsent auftreten – auch unter Druck',
    ],
    inhalte: [
      'Körpersprache: Haltung, Gestik, Blickkontakt',
      'Stimme: Tempo, Tonlage, Pausen richtig einsetzen',
      'Struktur: Inhalte aufbauen, die ankommen',
      'Wortwahl: Starke Sprache statt Weichmacher',
      'Praxisübungen mit direktem Feedback',
    ],
    zielgruppe: 'Fachpersonen, Führungskräfte, alle die überzeugend auftreten wollen',
    format: 'Präsenz (Ganztag) · auch als Inhouse buchbar',
    dauer: 'Ganztag (ca. 7h)',
    preisAb: 'CHF 460',
    preisDetail: 'CHF 460 / Person | Inhouse ab CHF 1'800 / Gruppe',
    preisAbFirma: 'ab CHF 1\'800 / Gruppe',
    seoTitel: 'Sicher auftreten & präsentieren – Tageskurs | SmartTalk',
    metaBeschreibung: 'Körpersprache, Stimme und Präsentation gezielt einsetzen. Tageskurs CHF 450, auch als Inhouse-Training. Zentralschweiz.',
    keywords: ['Auftrittskompetenz', 'Präsentationstraining Schweiz', 'Körpersprache Training', 'Kommunikationskurs'],
  },
  {
    slug: 'kommunikation-team-fuehrung',
    nummer: 2,
    level: 'AUFBAU',
    levelFarbe: 'bg-purple-100 text-purple-800',
    titel: 'Kommunikation im Team & Führung',
    untertitel: 'Zuhören. Raum geben. Verbindung schaffen.',
    kurzbeschreibung: 'Führung ist zu einem grossen Teil Kommunikation. Dieser Tageskurs zeigt dir, wie du mit gewaltfreier Kommunikation, aktivem Zuhören und echtem Raum-geben ein Umfeld schaffst, in dem Menschen offen sprechen – und gehört werden.',
    ausfuehrlicheBeschreibung: 'Ob Teamgespräch, Mitarbeitendengespräch oder Konfliktmoment: Wie du kommunizierst, prägt die Kultur. Dieser Tageskurs bringt dir die wichtigsten Werkzeuge für eine wirkungsvolle, menschliche Kommunikation – als Führungsperson und als Teammitglied. Wir arbeiten mit echten Situationen, üben aktiv und reflektieren gemeinsam.',
    lernziele: [
      'Gewaltfreie Kommunikation im Alltag anwenden',
      'Aktiv zuhören – wirklich verstehen und präsent sein',
      'Raum geben: andere zu Wort kommen lassen und stärken',
      'Gespräche führen, die verbinden und weiterbringen',
    ],
    inhalte: [
      'Grundlagen der gewaltfreien Kommunikation (GFK)',
      'Aktives Zuhören: Techniken und Übungen',
      'Raum lassen: Stille, Pausen, Fragen stellen',
      'Umgang mit schwierigen Gesprächssituationen',
      'Feedback geben und empfangen',
    ],
    zielgruppe: 'Führungskräfte, Teamleiter:innen, alle die besser kommunizieren wollen',
    format: 'Präsenz (Ganztag) · auch als Inhouse buchbar',
    dauer: 'Ganztag (ca. 7h)',
    preisAb: 'CHF 490',
    preisDetail: 'CHF 490 / Person | Inhouse ab CHF 1'800 / Gruppe',
    preisAbFirma: 'ab CHF 1\'800 / Gruppe',
    seoTitel: 'Kommunikation im Team & Führung – Tageskurs | SmartTalk',
    metaBeschreibung: 'Gewaltfreie Kommunikation, aktives Zuhören, Raum lassen. Tageskurs CHF 450, auch als Inhouse-Training. Zentralschweiz.',
    keywords: ['Kommunikationstraining Führung', 'Gewaltfreie Kommunikation Schweiz', 'Teamkommunikation', 'Führungskräftetraining'],
  },
  {
    slug: 'fuehren-hybrid',
    nummer: 3,
    level: 'AUFBAU',
    levelFarbe: 'bg-purple-100 text-purple-800',
    titel: 'Führen in der hybriden Arbeitswelt',
    untertitel: 'Vertrauen aufbauen, Teams verbinden, Präsenz zeigen – auch auf Distanz.',
    highlight: 'Sehr gefragt · Auch als Inhouse buchbar',
    highlightFarbe: 'bg-purple-50 border-purple-200 text-purple-800',
    kurzbeschreibung: 'Hybride Teams, Remote-Arbeit, generationsgemischte Gruppen: Führung heute ist anspruchsvoller denn je. Dieser Tageskurs gibt Führungskräften konkrete Werkzeuge, um auch auf Distanz Verbindung, Vertrauen und Wirkung zu schaffen.',
    ausfuehrlicheBeschreibung: 'Wie führe ich Menschen, die ich nicht täglich sehe? Wie halte ich ein Team zusammen, das halb im Büro, halb zu Hause ist? Wie schaffe ich Vertrauen, ohne körperliche Präsenz? Dieser praxisnahe Tageskurs gibt Führungskräften und Teamleitenden die Antworten – mit konkreten Techniken, echten Übungen und direktem Austausch. New Work ist kein Trend mehr, sondern gelebte Realität.',
    lernziele: [
      'Hybride Teams wirksam führen und zusammenhalten',
      'Vertrauen und Verbindung auch auf Distanz aufbauen',
      'Klare Kommunikation in Remote- und Hybridmeetings',
      'New Work Prinzipien im eigenen Führungsalltag verankern',
    ],
    inhalte: [
      'Hybride Führung: Chancen und typische Stolpersteine',
      'Vertrauen schaffen ohne physische Präsenz',
      'Remote-Meetings leiten, die wirklich verbinden',
      'Generationenübergreifend führen: Erwartungen und Stärken nutzen',
      'New Work in der Praxis: Autonomie, Verantwortung, Kultur',
    ],
    zielgruppe: 'Führungskräfte, Teamleitende, HR-Verantwortliche',
    format: 'Präsenz (Ganztag) · auch als Inhouse buchbar',
    dauer: 'Ganztag (ca. 7h)',
    preisAb: 'CHF 490',
    preisDetail: 'CHF 490 / Person | Inhouse ab CHF 1'800 / Gruppe',
    preisAbFirma: 'ab CHF 1\'800 / Gruppe',
    seoTitel: 'Führen in der hybriden Arbeitswelt – Tageskurs | SmartTalk',
    metaBeschreibung: 'Hybride Teams führen, Vertrauen aufbauen, New Work leben. Tageskurs CHF 450 für Führungskräfte, auch als Inhouse-Training. Zentralschweiz.',
    keywords: ['Hybrides Führen Kurs', 'New Work Führung Schweiz', 'Remote Leadership Training', 'Hybride Teams führen'],
  },
]

export function getKommKursBySlug(slug: string) {
  return kommKurse.find((k) => k.slug === slug)
}
