/**
 * Migration: kopiert alle Kurse und Termine aus den statischen TS-Dateien
 * in eine laufende Strapi-Instanz.
 *
 * Verwendung:
 *   1. Strapi muss laufen (http://localhost:1337)
 *   2. STRAPI_API_TOKEN als Env-Var setzen (Full-Access-Token aus Settings → API Tokens)
 *   3. Ausführen mit: npx tsx scripts/migrate-to-strapi.ts
 *
 * Idempotent: prüft auf existierenden slug bevor erstellt wird.
 */

import { kiKurse } from '../src/data/ki-kurse'
import { kommKurse } from '../src/data/komm-kurse'
import type { Termin } from '../src/data/termin'

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337'
const TOKEN = process.env.STRAPI_API_TOKEN

if (!TOKEN) {
  console.error('❌ STRAPI_API_TOKEN nicht gesetzt. Beispiel:')
  console.error('   STRAPI_API_TOKEN=xxx npx tsx scripts/migrate-to-strapi.ts')
  process.exit(1)
}

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${TOKEN}`,
}

async function strapi(path: string, init?: RequestInit) {
  const res = await fetch(`${STRAPI_URL}${path}`, { ...init, headers: { ...headers, ...(init?.headers || {}) } })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`${res.status} ${res.statusText} on ${path}\n${text}`)
  }
  return res.json()
}

async function findKursBySlug(slug: string): Promise<string | null> {
  const data = await strapi(`/api/kurse?filters[slug][$eq]=${slug}&pagination[pageSize]=1`)
  return data.data?.[0]?.documentId ?? null
}

async function createKurs(kurs: any, kategorie: 'ki' | 'kommunikation'): Promise<string> {
  // Spread und Strapi-spezifische Anpassungen
  const payload = {
    data: {
      slug: kurs.slug,
      kategorie,
      nummer: kurs.nummer,
      titel: kurs.titel,
      untertitel: kurs.untertitel ?? null,
      level: kurs.level ?? null,
      levelFarbe: kurs.levelFarbe ?? null,
      highlight: kurs.highlight ?? null,
      highlightFarbe: kurs.highlightFarbe ?? null,
      kurzbeschreibung: kurs.kurzbeschreibung,
      ausfuehrlicheBeschreibung: kurs.ausfuehrlicheBeschreibung ?? null,
      lernziele: kurs.lernziele ?? null,
      inhalte: kurs.inhalte ?? null,
      sessions: kurs.sessions ?? null,
      zielgruppe: kurs.zielgruppe ?? null,
      format: kurs.format ?? null,
      dauer: kurs.dauer ?? null,
      anzahlSessions: kurs.anzahlSessions ?? null,
      minutenProSession: kurs.minutenProSession ?? null,
      preisAb: kurs.preisAb ?? null,
      preisDetail: kurs.preisDetail ?? null,
      preisAbFirma: kurs.preisAbFirma ?? null,
      seoTitel: kurs.seoTitel ?? null,
      metaBeschreibung: kurs.metaBeschreibung ?? null,
      keywords: kurs.keywords ?? null,
      publishedAt: new Date().toISOString(), // direkt veröffentlichen
    },
  }
  const result = await strapi('/api/kurse', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
  return result.data.documentId
}

async function createTermin(termin: Termin, kursDocId: string) {
  const payload = {
    data: {
      datum: termin.datum,
      endDatum: termin.endDatum ?? null,
      uhrzeit: termin.uhrzeit ?? null,
      ort: termin.ort,
      maxTeilnehmer: termin.maxTeilnehmer ?? null,
      anmeldefrist: termin.anmeldefrist ?? null,
      status: termin.status ?? 'offen',
      bemerkung: termin.bemerkung ?? null,
      kurs: kursDocId,
    },
  }
  await strapi('/api/termine', { method: 'POST', body: JSON.stringify(payload) })
}

async function migrate() {
  console.log(`🚀 Migration zu ${STRAPI_URL}\n`)

  let kursCount = 0
  let terminCount = 0

  const allKurse = [
    ...kiKurse.map((k) => ({ kurs: k, kategorie: 'ki' as const })),
    ...kommKurse.map((k) => ({ kurs: k, kategorie: 'kommunikation' as const })),
  ]

  for (const { kurs, kategorie } of allKurse) {
    const existing = await findKursBySlug(kurs.slug)
    let docId: string
    if (existing) {
      console.log(`⏭️  ${kurs.slug} existiert bereits, überspringe`)
      docId = existing
    } else {
      docId = await createKurs(kurs, kategorie)
      kursCount++
      console.log(`✅ Kurs erstellt: ${kurs.slug} (${kategorie})`)
    }

    // Termine
    const termine = (kurs as any).termine as Termin[] | undefined
    if (termine?.length) {
      for (const t of termine) {
        try {
          await createTermin(t, docId)
          terminCount++
        } catch (e: any) {
          console.error(`   ⚠️  Termin ${t.datum} fehlgeschlagen: ${e.message?.split('\n')[0]}`)
        }
      }
      console.log(`   → ${termine.length} Termine für ${kurs.slug} hinzugefügt`)
    }
  }

  console.log(`\n🎉 Fertig. ${kursCount} Kurse + ${terminCount} Termine migriert.`)
}

migrate().catch((err) => {
  console.error('❌ Migration fehlgeschlagen:', err)
  process.exit(1)
})
