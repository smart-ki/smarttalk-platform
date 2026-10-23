/**
 * Studio-Client fuer SmartTalk
 *
 * Liest Kurse und Termine aus Studio (SmartTalks eigenes CMS, Site "ki", Typ "course")
 * mit ISR (Next.js cached fuer `revalidate` Sekunden). Loest seit 23.10.2026 Strapi ab.
 *
 * Env-Vars:
 *   STUDIO_URL   Basis-URL von Studio, serverseitig, ohne Auth (Prod: http://127.0.0.1:3150)
 *
 * Falls STUDIO_URL nicht gesetzt ist, faellt der Client auf http://127.0.0.1:3150 zurueck.
 *
 * Vertrag: Studio-Eintrag je Kurs mit `slug`, `title` und `fields` (alle bisherigen
 * Strapi-Kursattribute, `termine` als Array im Feld). Filtern nach `fields.kategorie` und
 * Sortieren nach `fields.nummer` macht dieser Client.
 */

import type { KiKurs } from '@/data/ki-kurse'
import type { KommKurs } from '@/data/komm-kurse'
import type { Termin } from '@/data/termin'

const STUDIO_URL = process.env.STUDIO_URL || 'http://127.0.0.1:3150'
const REVALIDATE = 60 // Sekunden: wie schnell Aenderungen aus Studio auf der Live-Site landen

type StudioTermin = {
  datum: string
  endDatum?: string | null
  uhrzeit?: string | null
  ort: string
  maxTeilnehmer?: number | null
  anmeldefrist?: string | null
  status?: 'offen' | 'wenige_plaetze' | 'ausgebucht' | 'abgesagt'
  bemerkung?: string | null
}

type StudioKursFields = {
  kategorie: 'ki' | 'kommunikation'
  nummer?: number | null
  titel?: string | null
  untertitel?: string | null
  level?: string | null
  levelFarbe?: string | null
  highlight?: string | null
  highlightFarbe?: string | null
  kurzbeschreibung: string
  ausfuehrlicheBeschreibung?: string | null
  lernziele?: string[] | null
  inhalte?: string[] | null
  sessions?: KiKurs['sessions'] | null
  zielgruppe?: string | null
  format?: string | null
  dauer?: string | null
  anzahlSessions?: number | null
  minutenProSession?: number | null
  preisAb?: string | null
  preisDetail?: string | null
  preisAbFirma?: string | null
  seoTitel?: string | null
  metaBeschreibung?: string | null
  keywords?: string[] | null
  termine?: StudioTermin[] | null
}

export type StudioItem = {
  slug: string
  title: string
  metaTitle?: string | null
  metaDescription?: string | null
  fields: StudioKursFields
}

async function studioGet<T>(path: string, fallback: T): Promise<T> {
  const url = `${STUDIO_URL}${path}`
  try {
    const res = await fetch(url, { next: { revalidate: REVALIDATE } })
    if (!res.ok) {
      if (res.status !== 404) console.warn(`Studio ${res.status} bei ${path}`)
      return fallback
    }
    return (await res.json()) as T
  } catch (err) {
    // Studio nicht erreichbar (z.B. lokaler Build ohne laufendes Backend): leeres Resultat statt Build-Abbruch
    console.warn(`Studio unerreichbar bei ${path}:`, (err as Error).message)
    return fallback
  }
}

function studioToTermin(t: StudioTermin): Termin {
  return {
    datum: t.datum,
    endDatum: t.endDatum ?? undefined,
    uhrzeit: t.uhrzeit ?? undefined,
    ort: t.ort,
    maxTeilnehmer: t.maxTeilnehmer ?? undefined,
    anmeldefrist: t.anmeldefrist ?? undefined,
    status: t.status,
    bemerkung: t.bemerkung ?? undefined,
  }
}

export function studioToKiKurs(item: StudioItem): KiKurs {
  const s = item.fields
  return {
    slug: item.slug,
    nummer: s.nummer ?? 0,
    level: s.level ?? '',
    levelFarbe: s.levelFarbe ?? '',
    titel: s.titel ?? item.title,
    untertitel: s.untertitel ?? '',
    highlight: s.highlight ?? undefined,
    highlightFarbe: s.highlightFarbe ?? undefined,
    kurzbeschreibung: s.kurzbeschreibung,
    ausfuehrlicheBeschreibung: s.ausfuehrlicheBeschreibung ?? '',
    sessions: s.sessions ?? undefined,
    lernziele: s.lernziele ?? [],
    zielgruppe: s.zielgruppe ?? '',
    format: s.format ?? '',
    dauer: s.dauer ?? '',
    anzahlSessions: s.anzahlSessions ?? undefined,
    minutenProSession: s.minutenProSession ?? undefined,
    preisAb: s.preisAb ?? '',
    preisDetail: s.preisDetail ?? '',
    preisAbFirma: s.preisAbFirma ?? undefined,
    termine: s.termine?.map(studioToTermin),
    seoTitel: s.seoTitel ?? item.metaTitle ?? '',
    metaBeschreibung: s.metaBeschreibung ?? item.metaDescription ?? '',
    keywords: s.keywords ?? [],
  }
}

export function studioToKommKurs(item: StudioItem): KommKurs {
  const s = item.fields
  return {
    slug: item.slug,
    nummer: s.nummer ?? 0,
    level: s.level ?? '',
    levelFarbe: s.levelFarbe ?? '',
    titel: s.titel ?? item.title,
    untertitel: s.untertitel ?? '',
    highlight: s.highlight ?? undefined,
    highlightFarbe: s.highlightFarbe ?? undefined,
    kurzbeschreibung: s.kurzbeschreibung,
    ausfuehrlicheBeschreibung: s.ausfuehrlicheBeschreibung ?? '',
    lernziele: s.lernziele ?? [],
    inhalte: s.inhalte ?? [],
    zielgruppe: s.zielgruppe ?? '',
    format: s.format ?? '',
    dauer: s.dauer ?? '',
    preisAb: s.preisAb ?? '',
    preisDetail: s.preisDetail ?? '',
    preisAbFirma: s.preisAbFirma ?? undefined,
    termine: s.termine?.map(studioToTermin),
    seoTitel: s.seoTitel ?? item.metaTitle ?? '',
    metaBeschreibung: s.metaBeschreibung ?? item.metaDescription ?? '',
    keywords: s.keywords ?? [],
  }
}

async function alleItems(): Promise<StudioItem[]> {
  const json = await studioGet<{ items?: StudioItem[] }>('/api/public/entries?site=ki&type=course', {})
  return json.items ?? []
}

async function kurseNachKategorie(kategorie: 'ki' | 'kommunikation'): Promise<StudioItem[]> {
  // Strapi sortierte per sort=nummer:asc; Studio liefert unsortiert, daher hier.
  return (await alleItems())
    .filter((i) => i.fields?.kategorie === kategorie)
    .sort((a, b) => (a.fields.nummer ?? 0) - (b.fields.nummer ?? 0))
}

async function kursBySlug(slug: string, kategorie: 'ki' | 'kommunikation'): Promise<StudioItem | null> {
  const item = await studioGet<StudioItem | null>(
    `/api/public/entries/ki/course/${encodeURIComponent(slug)}`,
    null
  )
  return item && item.fields?.kategorie === kategorie ? item : null
}

// --- Public API ---------------------------------------------------------------

export async function getKiKurse(): Promise<KiKurs[]> {
  return (await kurseNachKategorie('ki')).map(studioToKiKurs)
}

export async function getKommKurse(): Promise<KommKurs[]> {
  return (await kurseNachKategorie('kommunikation')).map(studioToKommKurs)
}

export async function getKiKursBySlug(slug: string): Promise<KiKurs | null> {
  const item = await kursBySlug(slug, 'ki')
  return item ? studioToKiKurs(item) : null
}

export async function getKommKursBySlug(slug: string): Promise<KommKurs | null> {
  const item = await kursBySlug(slug, 'kommunikation')
  return item ? studioToKommKurs(item) : null
}

/** Alle Kurse mit ihren Terminen, fuer /termine-Seite. Reihenfolge wie von Studio geliefert (wie bei Strapi ohne sort). */
export async function getAlleKurseMitTerminen(): Promise<
  Array<{
    slug: string
    titel: string
    kategorie: 'ki' | 'kommunikation'
    termine: Termin[]
  }>
> {
  return (await alleItems()).map((i) => ({
    slug: i.slug,
    titel: i.fields.titel ?? i.title,
    kategorie: i.fields.kategorie,
    termine: (i.fields.termine ?? []).map(studioToTermin),
  }))
}
