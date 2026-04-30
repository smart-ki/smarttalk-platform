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
    preisAb: 'CHF 450',
    preisDetail: 'CHF 450 / Person | Inhouse-Training auf Anfrage',
    preisAbFirma: 'auf Anfrage',
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
    preisAb: 'CHF 450',
    preisDetail: 'CHF 450 / Person | Inhouse-Training auf Anfrage',
    preisAbFirma: 'auf Anfrage',
    seoTitel: 'Kommunikation im Team & Führung – Tageskurs | SmartTalk',
    metaBeschreibung: 'Gewaltfreie Kommunikation, aktives Zuhören, Raum lassen. Tageskurs CHF 450, auch als Inhouse-Training. Zentralschweiz.',
    keywords: ['Kommunikationstraining Führung', 'Gewaltfreie Kommunikation Schweiz', 'Teamkommunikation', 'Führungskräftetraining'],
  },
  {
    slug: 'kommunikation-digital',
    nummer: 3,
    level: 'GRUNDKURS',
    levelFarbe: 'bg-purple-100 text-purple-800',
    titel: 'Kommunikation digital',
    untertitel: 'Online-Meetings, Mails und digitale Zusammenarbeit – professionell und wirkungsvoll.',
    kurzbeschreibung: 'Digitale Kommunikation ist heute Alltag – aber nicht immer gut. Dieser Tageskurs gibt dir das Handwerkszeug für wirksame Online-Meetings, klare E-Mails und professionelle digitale Zusammenarbeit in Teams.',
    ausfuehrlicheBeschreibung: 'Remote-Arbeit und hybride Teams stellen neue Anforderungen an die Kommunikation. Was im persönlichen Gespräch selbstverständlich klappt, geht digital oft verloren. In diesem Tageskurs lernst du, wie du online präsent und wirkungsvoll kommunizierst – in Meetings, per Mail und in digitalen Kollaborationstools. Mit konkreten Techniken, die du sofort anwenden kannst.',
    lernziele: [
      'Online-Meetings strukturiert leiten und aktiv mitgestalten',
      'E-Mails klar, präzise und situationsgerecht schreiben',
      'Digitale Präsenz aufbauen: Kamera, Ton, Aufmerksamkeit',
      'Digitale Zusammenarbeit in Teams stärken',
    ],
    inhalte: [
      'Online-Meetings leiten und moderieren',
      'Kamera, Mikrofon, Körpersprache im digitalen Raum',
      'E-Mails: Struktur, Tonalität, Effizienz',
      'Digitale Tools für Zusammenarbeit (Teams, Slack & Co.)',
      'Übungen: echte Situationen aus dem digitalen Alltag',
    ],
    zielgruppe: 'Alle die remote arbeiten oder in hybriden Teams unterwegs sind',
    format: 'Präsenz (Ganztag) · auch als Inhouse buchbar',
    dauer: 'Ganztag (ca. 7h)',
    preisAb: 'CHF 450',
    preisDetail: 'CHF 450 / Person | Inhouse-Training auf Anfrage',
    preisAbFirma: 'auf Anfrage',
    seoTitel: 'Kommunikation digital – Online-Meetings & Mails | SmartTalk',
    metaBeschreibung: 'Online-Meetings leiten, E-Mails professionell schreiben, digitale Zusammenarbeit stärken. Tageskurs CHF 450, auch Inhouse. Zentralschweiz.',
    keywords: ['Online Meeting Kommunikation', 'Digitale Kommunikation Kurs', 'Remote Work Kommunikation', 'E-Mail Kurs Schweiz'],
  },
]

export function getKommKursBySlug(slug: string) {
  return kommKurse.find((k) => k.slug === slug)
}
