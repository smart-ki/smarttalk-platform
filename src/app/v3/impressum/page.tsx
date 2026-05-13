export default function V3ImpressumPage() {
  return (
    <div className="bg-paper py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-600 block mb-5">Legal</span>
        <h1 className="font-serif text-4xl sm:text-5xl text-ink leading-tight mb-12 pb-6 border-b border-ink/15">Impressum</h1>
        <div className="space-y-10 text-ink-soft leading-relaxed font-serif">
          <section>
            <h2 className="font-serif text-xl text-ink mb-3">Anbieter</h2>
            <p>SmartTalk<br />Bildungszentrum<br />Zentralschweiz, Schweiz</p>
          </section>
          <section className="pt-8 border-t border-ink/10">
            <h2 className="font-serif text-xl text-ink mb-3">Kontakt</h2>
            <p>E-Mail: <a href="mailto:jeannine.germann@smarttalk.ch" className="text-terracotta-600 hover:underline underline-offset-4">jeannine.germann@smarttalk.ch</a></p>
          </section>
          <section className="pt-8 border-t border-ink/10">
            <h2 className="font-serif text-xl text-ink mb-3">Haftungsausschluss</h2>
            <p>Alle Angaben auf dieser Website wurden sorgfältig geprüft. SmartTalk übernimmt keine Gewähr für die Aktualität, Richtigkeit und Vollständigkeit der bereitgestellten Informationen.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
