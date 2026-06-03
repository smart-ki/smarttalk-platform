import Link from 'next/link'
import type { Metadata } from 'next'
import { getKiKurse, getKommKurse } from '@/lib/strapi'
import type { Termin } from '@/data/termin'
import { formatTerminBereich, isVergangen, statusLabel } from '@/data/termin'

export const metadata: Metadata = {
  title: 'Termine | SmartTalk Future Skills',
  description: 'Alle Kurstermine von SmartTalk auf einen Blick: KI & Digital, Kommunikation, Beratung.',
}

type KursGruppe = {
  kursTitel: string
  kursSlug: string
  kursTyp: 'ki' | 'kommunikation'
  termine: Termin[]
}

async function kursGruppen(): Promise<KursGruppe[]> {
  const [kiKurse, kommKurse] = await Promise.all([getKiKurse(), getKommKurse()])
  const gruppen: KursGruppe[] = []

  for (const k of kiKurse) {
    const kommende = (k.termine ?? [])
      .filter((t) => !isVergangen(t.datum))
      .sort((a, b) => a.datum.localeCompare(b.datum))
    if (kommende.length > 0)
      gruppen.push({ kursTitel: k.titel, kursSlug: k.slug, kursTyp: 'ki', termine: kommende })
  }
  for (const k of kommKurse) {
    const kommende = (k.termine ?? [])
      .filter((t) => !isVergangen(t.datum))
      .sort((a, b) => a.datum.localeCompare(b.datum))
    if (kommende.length > 0)
      gruppen.push({ kursTitel: k.titel, kursSlug: k.slug, kursTyp: 'kommunikation', termine: kommende })
  }
  return gruppen
}

const TYP_BADGE = {
  ki: { label: 'KI & Digital', cls: 'text-[#F5821F]', bg: 'bg-orange-50', border: 'border-orange-200' },
  kommunikation: { label: 'Kommunikation', cls: 'text-[#7C3AED]', bg: 'bg-purple-50', border: 'border-purple-200' },
}

const TYP_ACCENT = {
  ki: { heading: 'text-[#F5821F]', bar: 'bg-[#F5821F]', rowHover: 'hover:bg-orange-50' },
  kommunikation: { heading: 'text-[#7C3AED]', bar: 'bg-[#7C3AED]', rowHover: 'hover:bg-purple-50' },
}

function detailLink(kursTyp: 'ki' | 'kommunikation', slug: string): string {
  return kursTyp === 'ki' ? `/ki/${slug}` : `/kommunikation/${slug}`
}

export default async function TerminePage() {
  const gruppen = await kursGruppen()
  const kiGruppen = gruppen.filter((g) => g.kursTyp === 'ki')
  const kommGruppen = gruppen.filter((g) => g.kursTyp === 'kommunikation')

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 px-4 border-b border-gray-100">
        <div className="max-w-5xl mx-auto text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#F5821F] transition-colors">Startseite</Link>
          <span>/</span>
          <span className="text-gray-900">Termine</span>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-orange-50 via-white to-purple-50 py-20 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5821F] block mb-4">Übersicht</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">Kurstermine 2026</h1>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Wähle deinen Kurs und buche den passenden Termin direkt online.
            </p>
          </div>

          {gruppen.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
              <p className="text-gray-500 text-lg mb-6">
                Aktuell sind keine Termine ausgeschrieben. Schreib uns für ein Inhouse-Training oder lass dich auf die Warteliste setzen.
              </p>
              <Link href="/#kontakt" className="btn-primary py-3 px-6 text-sm">Kontakt aufnehmen</Link>
            </div>
          ) : (
            <div className="space-y-16">

              {/* ── KI & Digital ── */}
              {kiGruppen.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-1 h-8 rounded-full bg-[#F5821F]" />
                    <h2 className="text-2xl font-extrabold text-gray-900">KI & Digital</h2>
                  </div>
                  <div className="space-y-6">
                    {kiGruppen.map((g) => (
                      <KursBlock key={g.kursSlug} gruppe={g} />
                    ))}
                  </div>
                </div>
              )}

              {/* ── Kommunikation ── */}
              {kommGruppen.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-1 h-8 rounded-full bg-[#7C3AED]" />
                    <h2 className="text-2xl font-extrabold text-gray-900">Kommunikation & Führung</h2>
                  </div>
                  <div className="space-y-6">
                    {kommGruppen.map((g) => (
                      <KursBlock key={g.kursSlug} gruppe={g} />
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

          <div className="mt-14 bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <p className="text-sm text-gray-500">
              Kein passender Termin? Wir bieten alle Kurse auch als <strong className="text-gray-900">Inhouse-Training</strong> für Teams an.{' '}
              <Link href="/#kontakt" className="text-[#0D9488] font-medium hover:underline underline-offset-4">Jetzt anfragen →</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

function KursBlock({ gruppe }: { gruppe: KursGruppe }) {
  const typ = TYP_BADGE[gruppe.kursTyp]
  const accent = TYP_ACCENT[gruppe.kursTyp]
  const link = detailLink(gruppe.kursTyp, gruppe.kursSlug)

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Course header */}
      <div className="px-6 py-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <span className={`text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${typ.bg} ${typ.cls} ${typ.border} border inline-block mb-2`}>
            {typ.label}
          </span>
          <h3 className={`text-xl font-extrabold ${accent.heading}`}>
            <Link href={link} className="hover:underline underline-offset-4">
              {gruppe.kursTitel}
            </Link>
          </h3>
        </div>
        <Link href={link} className="text-sm text-gray-400 hover:text-gray-700 transition-colors shrink-0">
          Kursbeschreibung →
        </Link>
      </div>

      {/* Date rows */}
      <div className="divide-y divide-gray-50">
        {gruppe.termine.map((t, i) => {
          const status = statusLabel(t.status)
          const kannBuchen = t.status !== 'ausgebucht' && t.status !== 'abgesagt'
          return (
            <div
              key={`${t.datum}-${i}`}
              className={`px-6 py-4 grid grid-cols-12 gap-3 items-center transition-colors ${accent.rowHover}`}
            >
              {/* Date */}
              <div className="col-span-12 sm:col-span-3">
                <span className="font-semibold text-gray-900 text-sm">{formatTerminBereich(t)}</span>
                {t.uhrzeit && <span className="text-gray-400 text-sm ml-2">{t.uhrzeit}</span>}
              </div>

              {/* Location + details */}
              <div className="col-span-12 sm:col-span-5 flex flex-wrap gap-x-4 gap-y-0.5 text-sm text-gray-500">
                <span>{t.ort}</span>
                {t.maxTeilnehmer && <span>max. {t.maxTeilnehmer} Plätze</span>}
                {t.anmeldefrist && (
                  <span>Anmeldung bis {formatTerminBereich({ datum: t.anmeldefrist, ort: '' })}</span>
                )}
                {t.bemerkung && <span className="text-gray-400">· {t.bemerkung}</span>}
              </div>

              {/* Status + CTA */}
              <div className="col-span-12 sm:col-span-4 flex items-center justify-start sm:justify-end gap-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${status.klasse}`}>
                  {status.text}
                </span>
                {kannBuchen && (
                  <Link href={link} className="btn-primary text-xs py-2 px-4 shrink-0">
                    Anmelden →
                  </Link>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
