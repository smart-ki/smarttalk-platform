/**
 * Minimale Pruefung des Studio-Clients (ohne Test-Framework): npm run check:studio
 * Stellt fetch auf Attrappen um und prueft Mapping, Filter, Sortierung und Fallback.
 */
import assert from 'node:assert/strict'
import {
  getKiKurse,
  getKommKurse,
  getKiKursBySlug,
  getKommKursBySlug,
  getAlleKurseMitTerminen,
} from '../src/lib/studio'

const item = (slug: string, kategorie: string, nummer: number) => ({
  slug,
  title: `Titel ${slug}`,
  metaTitle: 'MT',
  metaDescription: 'MD',
  fields: {
    kategorie,
    nummer,
    titel: `Titel ${slug}`,
    kurzbeschreibung: 'kurz',
    termine: [{ datum: '2026-11-01', ort: 'Online', status: 'offen', endDatum: null }],
  },
})

const items = [item('b', 'ki', 2), item('x', 'kommunikation', 1), item('a', 'ki', 1)]

function mockFetch(handler: (url: string) => Response | Promise<Response>) {
  globalThis.fetch = (async (input: unknown) => handler(String(input))) as typeof fetch
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } })

async function main() {
  mockFetch((url) => {
    if (url.includes('/api/public/entries?site=ki&type=course')) return json({ items })
    const m = url.match(/\/api\/public\/entries\/ki\/course\/(.+)$/)
    const found = items.find((i) => i.slug === m?.[1])
    return found ? json(found) : json({ error: 'not found' }, 404)
  })

  assert.deepEqual((await getKiKurse()).map((k) => k.slug), ['a', 'b'])
  assert.deepEqual((await getKommKurse()).map((k) => k.slug), ['x'])
  assert.deepEqual((await getAlleKurseMitTerminen()).map((k) => k.slug), ['b', 'x', 'a'])
  const ki = await getKiKursBySlug('a')
  assert.equal(ki?.seoTitel, 'MT')
  assert.deepEqual(ki?.termine, [
    {
      datum: '2026-11-01',
      endDatum: undefined,
      uhrzeit: undefined,
      ort: 'Online',
      maxTeilnehmer: undefined,
      anmeldefrist: undefined,
      status: 'offen',
      bemerkung: undefined,
    },
  ])
  assert.equal(await getKiKursBySlug('x'), null, 'falsche Kategorie')
  assert.equal(await getKommKursBySlug('x').then((k) => k?.slug), 'x')
  assert.equal(await getKiKursBySlug('gibt-es-nicht'), null)

  mockFetch(() => {
    throw new Error('ECONNREFUSED')
  })
  assert.deepEqual(await getKiKurse(), [])
  assert.deepEqual(await getAlleKurseMitTerminen(), [])
  assert.equal(await getKommKursBySlug('x'), null)

  mockFetch(() => json({}, 500))
  assert.deepEqual(await getKommKurse(), [])

  console.log('Studio-Client: alle Pruefungen ok')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
