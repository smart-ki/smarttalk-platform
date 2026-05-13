import Link from 'next/link'
import type { KommKurs } from '@/data/komm-kurse'

export default function KommKursCard({ kurs }: { kurs: KommKurs }) {
  return (
    <div className="bg-cream rounded-4xl shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col overflow-hidden group">
      <div className="p-7 flex flex-col flex-1">
        {/* Level + Nummer */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-mauve-700 uppercase tracking-widest">
            {kurs.level}
          </span>
          <span className="text-xs text-ink-muted">Kurs {kurs.nummer}</span>
        </div>

        {/* Highlight */}
        {kurs.highlight && (
          <div className="bg-mauve-100 text-mauve-700 text-xs font-medium px-3 py-2 rounded-2xl mb-4">
            {kurs.highlight}
          </div>
        )}

        {/* Format badge */}
        <div className="inline-flex items-center gap-1.5 text-xs font-medium text-mauve-700 mb-4 self-start">
          <span className="w-1.5 h-1.5 rounded-full bg-mauve-500" />
          {kurs.dauer}
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl text-ink leading-tight mb-2 group-hover:text-mauve-700 transition-colors">
          {kurs.titel}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-ink-soft italic mb-5">{kurs.untertitel}</p>

        {/* Description */}
        <p className="text-sm text-ink-soft leading-relaxed mb-5">
          {kurs.kurzbeschreibung}
        </p>

        {/* Inhalte */}
        <div className="mb-6 flex-1">
          <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide mb-3">Inhalte</p>
          <ul className="space-y-2">
            {kurs.inhalte.slice(0, 3).map((inhalt) => (
              <li key={inhalt} className="flex items-start gap-2 text-sm text-ink-soft">
                <span className="text-mauve-500 shrink-0 mt-0.5">›</span>
                {inhalt}
              </li>
            ))}
            {kurs.inhalte.length > 3 && (
              <li className="text-xs text-ink-muted pl-4 italic">+ {kurs.inhalte.length - 3} weitere</li>
            )}
          </ul>
        </div>

        {/* Meta */}
        <div className="border-t border-cream-300 pt-4 mb-5 space-y-1.5 text-xs text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-mauve-500" />
            {kurs.zielgruppe}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-mauve-500" />
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
            <Link href={`/kommunikation/${kurs.slug}`} className="btn-mauve text-sm py-2.5 px-5 whitespace-nowrap">
              Mehr & Buchen
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
