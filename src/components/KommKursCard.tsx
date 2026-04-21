import Link from 'next/link'
import type { KommKurs } from '@/data/komm-kurse'

export default function KommKursCard({ kurs }: { kurs: KommKurs }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden group">
      {/* Top accent bar – purple for Kommunikation */}
      <div className="h-1.5 bg-purple-600" />

      <div className="p-6 flex flex-col flex-1">
        {/* Level badge + Nummer */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${kurs.levelFarbe}`}>
            {kurs.level}
          </span>
          <span className="text-xs text-gray-400 font-medium">Kurs {kurs.nummer}</span>
        </div>

        {/* Highlight-Banner (z.B. Kostenlos mit Bildungsgutschein) */}
        {kurs.highlight && (
          <div className={`text-xs font-semibold px-3 py-1.5 rounded-lg border mb-3 flex items-center gap-1.5 ${kurs.highlightFarbe}`}>
            <span>✨</span>
            {kurs.highlight}
          </div>
        )}

        {/* Format badge */}
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border bg-purple-50 border-purple-200 text-purple-700 mb-3 self-start">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {kurs.dauer}
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg text-gray-900 leading-snug mb-2 group-hover:text-purple-700 transition-colors">
          {kurs.titel}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-[#6B6B6B] italic mb-4">{kurs.untertitel}</p>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {kurs.kurzbeschreibung}
        </p>

        {/* Inhalte – max 3 items */}
        <div className="mb-5 flex-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Inhalte</p>
          <ul className="space-y-1.5">
            {kurs.inhalte.slice(0, 3).map((inhalt) => (
              <li key={inhalt} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-purple-500 shrink-0 mt-0.5">›</span>
                {inhalt}
              </li>
            ))}
            {kurs.inhalte.length > 3 && (
              <li className="text-xs text-gray-400 pl-4">+ {kurs.inhalte.length - 3} weitere Punkte</li>
            )}
          </ul>
        </div>

        {/* Meta */}
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-5 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {kurs.zielgruppe}
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {kurs.format}
          </div>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 uppercase tracking-wide">ab</span>
            <span className="block text-xl font-bold text-gray-900">{kurs.preisAb}</span>
            {kurs.preisAbFirma && (
              <span className="text-xs text-gray-400">Firma: {kurs.preisAbFirma}</span>
            )}
          </div>
          <Link
            href={`/kommunikation/${kurs.slug}`}
            className="bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors inline-block text-center text-sm py-2.5 px-5"
          >
            Mehr & Buchen
          </Link>
        </div>
      </div>
    </div>
  )
}
