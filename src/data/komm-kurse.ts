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
    preisAbFirma: 'CHF 320',
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
    format: 'Präsenz (Ganztag)',
    dauer: 'Ganztag (ca. 7h)',
    preisAb: 'CHF 349',
    preisDetail: 'CHF 349 / Person, Firmenkurse auf Anfrage',
    preisAbFirma: 'CHF 450',
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
    highlight: 'Kostenlos mit Bildungsgutschein',
    highlightFarbe: 'bg-purple-50 border-purple-200 text-purple-800',
    kurzbeschreibung: 'Klare Kommunikation ist erlernbar. Dieser Halbtageskurs gibt dir ein solides Fundament: klare Sprache, Ich-Botschaften und das 4-Ohren-Modell als Werkzeuge für den Alltag – verständlich, direkt und sofort anwendbar.',
    ausfuehrlicheBeschreibung: 'Sprechen tun wir alle – klar und wirkungsvoll kommunizieren ist eine Fähigkeit, die man gezielt trainieren kann. In diesem Halbtageskurs arbeitest du mit dem bewährten 4-Ohren-Modell von Schulz von Thun, lernst Ich-Botschaften zu formulieren und trainierst eine Sprache, die direkt ankommt. Dieser Kurs ist Teil des Grundkompetenzen-Angebots und kann mit dem Bildungsgutschein kostenlos besucht werden.',
    lernziele: [
      'Das 4-Ohren-Modell verstehen und im Alltag anwenden',
      'Ich-Botschaften formulieren – konstruktiv und klar',
      'Direkt und verständlich sprechen mit echter Wirkung',
      'Kommunikationsmuster erkennen und gezielt verändern',
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
    preisAb: 'Kostenlos',
    preisDetail: 'Kostenlos mit Bildungsgutschein (Kt. LU, ZG, AG, SZ, OW)',
    preisAbFirma: 'CHF 320',
    seoTitel: 'Sicher sprechen, klar kommunizieren – Kurs | SmartTalk',
    metaBeschreibung: 'Ich-Botschaften, klare Sprache und 4-Ohren-Modell. Kostenlos mit Bildungsgutschein. Halbtageskurs in der Zentralschweiz.',
    keywords: ['Kommunikationskurs', '4-Ohren-Modell', 'Ich-Botschaften', 'Klare Sprache Kurs Schweiz'],
  },
  {
    slug: 'ki-in-der-kommunikation',
    nummer: 4,
    level: 'AUFBAU',
    levelFarbe: 'bg-purple-100 text-purple-800',
    titel: 'KI in der Kommunikation',
    untertitel: 'KI-gestützte Präsentationen und effiziente virtuelle Kommunikation.',
    highlight: 'Neu ab Q3 2026',
    highlightFarbe: 'bg-indigo-50 border-indigo-200 text-indigo-800',
    kurzbeschreibung: 'KI verändert auch die Art, wie wir präsentieren und virtuell kommunizieren. Dieser Tageskurs zeigt dir, wie du KI-Tools für überzeugende Präsentationen nutzt, virtuelle Meetings wirkungsvoller gestaltest und deine digitale Kommunikation auf das nächste Level bringst.',
    ausfuehrlicheBeschreibung: 'Von der KI-gestützten Präsentation bis zur effizienten virtuellen Zusammenarbeit: In diesem Tageskurs verbindest du menschliche Kommunikationskompetenz mit dem Potenzial moderner KI-Tools. Du lernst, wie KI bei der Vorbereitung von Präsentationen hilft, wie virtuelle Meetings klarer und wirkungsvoller werden – und wie du als Mensch dabei immer die Regie behältst.',
    lernziele: [
      'KI-Tools für Präsentationsvorbereitung und -gestaltung einsetzen',
      'Virtuelle Kommunikation strukturieren und professionell führen',
      'KI und menschliche Kommunikation sinnvoll verbinden',
      'Eigene digitale Kommunikationspräsenz stärken',
    ],
    inhalte: [
      'KI-gestützte Präsentationen: Canva AI, Gamma & Co.',
      'Virtuelle Meetings: Vorbereitung, Moderation, Nachbereitung mit KI',
      'Schriftliche Kommunikation mit KI verbessern (E-Mail, Chat, Dokumentation)',
      'Authentisch bleiben: Wann KI hilft – und wann der Mensch übernimmt',
      'Praxisübungen mit eigenen Kommunikationssituationen',
    ],
    zielgruppe: 'Berufsleute, Führungskräfte, alle die hybrid und virtuell kommunizieren',
    format: 'Präsenz (Ganztag)',
    dauer: 'Ganztag (ca. 7h)',
    preisAb: 'CHF 450',
    preisDetail: 'CHF 450 / Person, Firmenkurse CHF 590',
    preisAbFirma: 'CHF 590',
    seoTitel: 'KI in der Kommunikation – Kurs | SmartTalk',
    metaBeschreibung: 'KI-gestützte Präsentationen und effiziente virtuelle Kommunikation. Tageskurs für moderne Kommunikation. Zentralschweiz.',
    keywords: ['KI Kommunikation Kurs', 'KI Präsentation', 'Virtuelle Kommunikation', 'Future Skills Schweiz'],
  },
]

export function getKommKursBySlug(slug: string) {
  return kommKurse.find((k) => k.slug === slug)
}
