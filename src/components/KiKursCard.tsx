import Link from 'next/link'
import type { KiKurs } from '@/data/ki-kurse'

export default function KiKursCard({ kurs }: { kurs: KiKurs }) {
  return (
    <div className="bg-cream rounded-4xl shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col overflow-hidden group">
      <div className="p-7 flex flex-col flex-1">
        {/* Level + Nummer */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-apricot-700 uppercase tracking-widest">
            {kurs.level}
          </span>
          <span className="text-xs text-ink-muted">Kurs {kurs.nummer}</span>
        </div>

        {/* Highlight */}
        {kurs.highlight && (
          <div className="bg-apricot-100 text-apricot-700 text-xs font-medium px-3 py-2 rounded-2xl mb-4">
            {kurs.highlight}
          </div>
        )}

        {/* Title */}
        <h3 className="font-serif text-2xl text-ink leading-tight mb-2 group-hover:text-apricot-700 transition-colors">
          {kurs.titel}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-ink-soft italic mb-5">{kurs.untertitel}</p>

        {/* Description */}
        <p className="text-sm text-ink-soft leading-relaxed flex-1 mb-6">
          {kurs.kurzbeschreibung}
        </p>

        {/* Sessions visualization */}
        {kurs.anzahlSessions && kurs.anzahlSessions > 1 && (
          <div className="flex items-center gap-1.5 mb-5">
            {Array.from({ length: kurs.anzahlSessions }).map((_, i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-apricot-100 border border-apricot-300 flex items-center justify-center text-[10px] font-medium text-apricot-700">
                {i + 1}
              </div>
            ))}
            <span className="ml-2 text-xs text-ink-muted">
              {kurs.anzahlSessions}x {kurs.minutenProSession} Min.
            </span>
          </div>
        )}

        {/* Meta */}
        <div className="border-t border-cream-300 pt-4 mb-5 space-y-1.5 text-xs text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-apricot-500" />
            {kurs.dauer}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-apricot-500" />
            {kurs.zielgruppe}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-apricot-500" />
            {kurs.format}
          </div>
        </div>

        {/* Price + CTA */}
        <div className="mt-auto">
          {kurs.preisAbFirma && (
            <div className="text-xs text-ink-muted mb-2">Firma: {kurs.preisAbFirma}</div>
          )}
          <div className="flex items-end justify-between gap-3">
            <div>
              <span className="text-xs text-ink-muted uppercase tracking-wide">ab</span>
              <span className="block font-serif text-2xl text-ink">{kurs.preisAb}</span>
            </div>
            <Link href={`/ki/${kurs.slug}`} className="btn-primary text-sm py-2.5 px-5 whitespace-nowrap">
              Mehr & Buchen
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
