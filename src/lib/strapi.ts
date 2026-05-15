/**
 * Strapi-Client für SmartTalk
 *
 * Liest Kurse und Termine aus Strapi mit ISR (Next.js cached für `revalidate` Sekunden).
 *
 * Env-Vars:
 *   STRAPI_URL              z.B. https://smarttalk-cms.strapiapp.com (oder http://localhost:1337 für lokal)
 *   STRAPI_API_TOKEN        Read-only-Token (optional, falls Inhalte privat sind)
 *
 * Falls STRAPI_URL nicht gesetzt ist, fällt der Client auf http://localhost:1337 zurück.
 */

import type { KiKurs } from '@/data/ki-kurse'
import type { KommKurs } from '@/data/komm-kurse'
import type { Termin } from '@/data/termin'

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337'
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN
const REVALIDATE = 60 // Sekunden — wie schnell Änderungen aus Strapi auf der Live-Site landen

type StrapiKurs = {
  documentId: string
  slug: string
  kategorie: 'ki' | 'kommunikation'
  nummer?: number
  titel: string
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
  termine?: StrapiTermin[]
}

type StrapiTermin = {
  documentId: string
  datum: string
  endDatum?: string | null
  uhrzeit?: string | null
  ort: string
  maxTeilnehmer?: number | null
  anmeldefrist?: string | null
  status?: 'offen' | 'wenige_plaetze' | 'ausgebucht' | 'abgesagt'
  bemerkung?: string | null
}

async function strapiGet<T>(path: string, opts?: { revalidate?: number }): Promise<T> {
  const url = `${STRAPI_URL}${path}`
  const headers: Record<string, string> = {}
  if (STRAPI_API_TOKEN) headers.Authorization = `Bearer ${STRAPI_API_TOKEN}`

  try {
    const res = await fetch(url, {
      headers,
      next: { revalidate: opts?.revalidate ?? REVALIDATE },
    })
    if (!res.ok) {
      console.warn(`Strapi ${res.status} bei ${path}`)
      return { data: [] } as T
    }
    return res.json() as Promise<T>
  } catch (err) {
    // Strapi nicht erreichbar (z.B. lokaler Build ohne laufendes Backend): leeres Resultat statt Build-Abbruch
    console.warn(`Strapi unerreichbar bei ${path}:`, (err as Error).message)
    return { data: [] } as T
  }
}

function strapiToTermin(t: StrapiTermin): Termin {
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

function strapiToKiKurs(s: StrapiKurs): KiKurs {
  return {
    slug: s.slug,
    nummer: s.nummer ?? 0,
    level: s.level ?? '',
    levelFarbe: s.levelFarbe ?? '',
    titel: s.titel,
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
    termine: s.termine?.map(strapiToTermin),
    seoTitel: s.seoTitel ?? '',
    metaBeschreibung: s.metaBeschreibung ?? '',
    keywords: s.keywords ?? [],
  }
}

function strapiToKommKurs(s: StrapiKurs): KommKurs {
  return {
    slug: s.slug,
    nummer: s.nummer ?? 0,
    level: s.level ?? '',
    levelFarbe: s.levelFarbe ?? '',
    titel: s.titel,
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
    termine: s.termine?.map(strapiToTermin),
    seoTitel: s.seoTitel ?? '',
    metaBeschreibung: s.metaBeschreibung ?? '',
    keywords: s.keywords ?? [],
  }
}

// ─── Public API ─────────────────────────────────────────────────────────────

export async function getKiKurse(): Promise<KiKurs[]> {
  const json = await strapiGet<{ data: StrapiKurs[] }>(
    '/api/kurse?filters[kategorie][$eq]=ki&populate=termine&sort=nummer:asc&pagination[pageSize]=50'
  )
  return json.data.map(strapiToKiKurs)
}

export async function getKommKurse(): Promise<KommKurs[]> {
  const json = await strapiGet<{ data: StrapiKurs[] }>(
    '/api/kurse?filters[kategorie][$eq]=kommunikation&populate=termine&sort=nummer:asc&pagination[pageSize]=50'
  )
  return json.data.map(strapiToKommKurs)
}

export async function getKiKursBySlug(slug: string): Promise<KiKurs | null> {
  const json = await strapiGet<{ data: StrapiKurs[] }>(
    `/api/kurse?filters[slug][$eq]=${encodeURIComponent(slug)}&filters[kategorie][$eq]=ki&populate=termine&pagination[pageSize]=1`
  )
  const found = json.data[0]
  return found ? strapiToKiKurs(found) : null
}

export async function getKommKursBySlug(slug: string): Promise<KommKurs | null> {
  const json = await strapiGet<{ data: StrapiKurs[] }>(
    `/api/kurse?filters[slug][$eq]=${encodeURIComponent(slug)}&filters[kategorie][$eq]=kommunikation&populate=termine&pagination[pageSize]=1`
  )
  const found = json.data[0]
  return found ? strapiToKommKurs(found) : null
}

/** Alle Kurse mit ihren Terminen, für /termine-Seite. */
export async function getAlleKurseMitTerminen(): Promise<
  Array<{
    slug: string
    titel: string
    kategorie: 'ki' | 'kommunikation'
    termine: Termin[]
  }>
> {
  const json = await strapiGet<{ data: StrapiKurs[] }>(
    '/api/kurse?populate=termine&pagination[pageSize]=100'
  )
  return json.data.map((s) => ({
    slug: s.slug,
    titel: s.titel,
    kategorie: s.kategorie,
    termine: (s.termine ?? []).map(strapiToTermin),
  }))
}
