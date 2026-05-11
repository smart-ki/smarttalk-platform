export type TerminStatus = 'offen' | 'wenige_plaetze' | 'ausgebucht' | 'abgesagt'

export interface Termin {
  datum: string
  endDatum?: string
  uhrzeit?: string
  ort: string
  maxTeilnehmer?: number
  freiePlaetze?: number
  anmeldefrist?: string
  status?: TerminStatus
  bemerkung?: string
}

const MONATE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']

export function formatDatum(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  return `${d}. ${MONATE[m - 1]} ${y}`
}

export function formatDatumKurz(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  return `${String(d).padStart(2, '0')}.${String(m).padStart(2, '0')}.${y}`
}

export function formatTerminBereich(t: Termin): string {
  if (!t.endDatum || t.endDatum === t.datum) return formatDatum(t.datum)
  return `${formatDatumKurz(t.datum)} – ${formatDatumKurz(t.endDatum)}`
}

export function isVergangen(iso: string, heute: Date = new Date()): boolean {
  const heuteIso = heute.toISOString().slice(0, 10)
  return iso < heuteIso
}

export function statusLabel(s: TerminStatus | undefined): { text: string; klasse: string } {
  switch (s) {
    case 'wenige_plaetze':
      return { text: 'Wenige Plätze', klasse: 'bg-amber-50 text-amber-700 border-amber-200' }
    case 'ausgebucht':
      return { text: 'Ausgebucht', klasse: 'bg-gray-100 text-gray-600 border-gray-200' }
    case 'abgesagt':
      return { text: 'Abgesagt', klasse: 'bg-red-50 text-red-700 border-red-200' }
    case 'offen':
    default:
      return { text: 'Plätze frei', klasse: 'bg-green-50 text-green-700 border-green-200' }
  }
}
