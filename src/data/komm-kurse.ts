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
  seoTitel: string
  metaBeschreibung: string
  keywords: string[]
}

export const kommKurse: KommKurs[] = [
  {
    slug: 'sicher-auftreten-meetings',
    nummer: 1,
    level: 'GRUNDKURS',
    levelFarbe: 'bg-purple-100 text-purple-800',
    titel: 'Sicher auftreten in Meetings',
    untertitel: 'Körpersprache, Stimme und Wortwahl gezielt einsetzen.',
    kurzbeschreibung: 'Du weisst, was du sagen willst – aber wie du es sagst, macht den Unterschied. Dieser Halbtageskurs gibt dir konkrete Werkzeuge für einen souveränen Auftritt: Körpersprache lesen und gezielt einsetzen, die Stimme als Führungsinstrument nutzen und Worte wählen, die ankommen.',
    ausfuehrlicheBeschreibung: 'In Meetings entscheidet oft nicht nur der Inhalt, sondern wie du ihn vermittelst. Bist du präsent? Wirkst du überzeugend? Wirst du ernst genommen? Dieser praxisnahe Halbtageskurs zeigt dir, wie Körpersprache, Stimme und Wortwahl zusammenwirken – und wie du sie bewusst einsetzen kannst. Mit Übungen, Feedback und konkreten Situationen aus deinem Alltag.',
    lernziele: [
      'Körpersprache bewusst wahrnehmen und gezielt einsetzen',
      'Stimme und Tonalität als Führungsinstrument nutzen',
      'Worte wählen, die Wirkung erzeugen',
      'Sicher und präsent auftreten – auch unter Druck',
    ],
    inhalte: [
      'Körpersprache: Haltung, Gestik, Blickkontakt',
      'Stimme: Tempo, Tonlage, Pausen richtig einsetzen',
      'Tonalität: Wann sachlich, wann empathisch, wann bestimmt?',
      'Wortwahl: Starke Sprache statt Weichmacher',
      'Praxisübungen mit direktem Feedback',
    ],
    zielgruppe: 'Fachpersonen, Führungskräfte, alle die in Meetings präsenter auftreten wollen',
    format: 'Präsenz (Halbtag)',
    dauer: 'Halbtag (ca. 3.5h)',
    preisAb: 'CHF 249',
    preisDetail: 'CHF 249 / Person, Firmenkurse auf Anfrage',
    seoTitel: 'Sicher auftreten in Meetings – Kommunikationstraining | SmartTalk',
    metaBeschreibung: 'Körpersprache, Stimme und Wortwahl gezielt einsetzen. Halbtageskurs für souveränen Auftritt in Meetings. Zentralschweiz.',
    keywords: ['Auftrittskompetenz', 'Körpersprache Training', 'Kommunikationskurs Schweiz', 'Meetings Auftreten'],
  },
  {
    slug: 'kommunizieren-team-fuehrung',
    nummer: 2,
    level: 'AUFBAU',
    levelFarbe: 'bg-purple-100 text-purple-800',
    titel: 'Erfolgreich kommunizieren – im Team und als Führungsperson',
    untertitel: 'Zuhören. Raum geben. Verbindung schaffen.',
    kurzbeschreibung: 'Führung ist zu einem grossen Teil Kommunikation. Dieser Tageskurs zeigt dir, wie du mit gewaltfreier Kommunikation, aktivem Zuhören und dem Bewusstsein für Raum und Dynamik ein Umfeld schaffst, in dem Menschen offen sprechen – und gehört werden.',
    ausfuehrlicheBeschreibung: 'Ob Teamgespräch, Mitarbeitendengespräch oder Konfliktmoment: Wie du kommunizierst, prägt die Kultur. Dieser Tageskurs bringt dir die wichtigsten Werkzeuge für eine wirkungsvolle, menschliche Kommunikation – als Führungsperson und als Teammitglied. Wir arbeiten mit echten Situationen, üben aktiv und reflektieren gemeinsam.',
    lernziele: [
      'Gewaltfreie Kommunikation im Alltag anwenden',
      'Aktiv zuhören – wirklich verstehen, nicht nur warten',
      'Raum lassen: andere zu Wort kommen lassen',
      'Gespräche führen, die verbinden statt trennen',
    ],
    inhalte: [
      'Grundlagen der gewaltfreien Kommunikation (GFK)',
      'Aktives Zuhören: Techniken und Übungen',
      'Raum lassen: Stille, Pausen, Fragen stellen',
      'Umgang mit schwierigen Gesprächssituationen',
      'Feedback geben und empfangen',
    ],
    zielgruppe: 'Führungskräfte, Teamleiter:innen, alle die besser kommunizieren wollen',
    format: 'Präsenz (Ganztag)',
    dauer: 'Ganztag (ca. 7h)',
    preisAb: 'CHF 349',
    preisDetail: 'CHF 349 / Person, Firmenkurse auf Anfrage',
    seoTitel: 'Kommunikation im Team und als Führungsperson – Training | SmartTalk',
    metaBeschreibung: 'Gewaltfreie Kommunikation, aktives Zuhören und Raum lassen. Tageskurs für Führungskräfte und Teams. Zentralschweiz.',
    keywords: ['Kommunikationstraining Führung', 'Gewaltfreie Kommunikation Schweiz', 'Teamkommunikation', 'Führungskräftetraining'],
  },
  {
    slug: 'sicher-sprechen-klar-kommunizieren',
    nummer: 3,
    level: 'GRUNDKURS',
    levelFarbe: 'bg-purple-100 text-purple-800',
    titel: 'Sicher sprechen, klar kommunizieren',
    untertitel: 'Ich-Botschaften, klare Sprache und das 4-Ohren-Modell.',
    kurzbeschreibung: 'Missverständnisse entstehen nicht aus bösem Willen – sondern weil Botschaften unterschiedlich gehört werden. Dieser Halbtageskurs gibt dir ein solides Fundament: klare Sprache, Ich-Botschaften und das 4-Ohren-Modell als Werkzeuge für den Alltag.',
    ausfuehrlicheBeschreibung: 'Sprechen tun wir alle. Aber wirklich klar kommunizieren ist eine Fähigkeit, die man lernen kann. In diesem Halbtageskurs arbeitest du mit dem bewährten 4-Ohren-Modell von Schulz von Thun, lernst Ich-Botschaften zu formulieren und trainierst eine Sprache, die ankommt – ohne Weichmacher, ohne Missverständnisse.',
    lernziele: [
      'Das 4-Ohren-Modell verstehen und anwenden',
      'Ich-Botschaften formulieren statt Du-Botschaften',
      'Klar und direkt sprechen – ohne hart zu wirken',
      'Missverständnisse erkennen und auflösen',
    ],
    inhalte: [
      'Das 4-Ohren-Modell (Schulz von Thun) – Theorie und Praxis',
      'Ich-Botschaften: Konstruktiv statt vorwurfsvoll',
      'Klare Sprache: Konkret, direkt, verständlich',
      'Gewaltfreie Kommunikation als Ergänzung',
      'Alltagsübungen: Situationen aus deinem Berufsalltag',
    ],
    zielgruppe: 'Alle die klarer kommunizieren wollen – im Job und privat',
    format: 'Präsenz (Halbtag)',
    dauer: 'Halbtag (ca. 3.5h)',
    preisAb: 'CHF 249',
    preisDetail: 'CHF 249 / Person, Firmenkurse auf Anfrage',
    seoTitel: 'Sicher sprechen, klar kommunizieren – Kurs | SmartTalk',
    metaBeschreibung: 'Ich-Botschaften, klare Sprache und 4-Ohren-Modell. Halbtageskurs für klare Kommunikation im Berufsalltag. Zentralschweiz.',
    keywords: ['Kommunikationskurs', '4-Ohren-Modell', 'Ich-Botschaften', 'Klare Sprache Kurs Schweiz'],
  },
]

export function getKommKursBySlug(slug: string) {
  return kommKurse.find((k) => k.slug === slug)
}
