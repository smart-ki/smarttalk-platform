export default function ImpressumPage() {
  return (
    <div className="bg-cream py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-apricot-600 block mb-5">Legal</span>
        <h1 className="font-serif text-4xl sm:text-5xl text-ink leading-tight mb-10">Impressum</h1>
        <div className="space-y-6 text-ink-soft leading-relaxed">
          <section className="bg-white rounded-3xl shadow-soft p-7">
            <h2 className="font-serif text-xl text-ink mb-3">Anbieter</h2>
            <p>SmartTalk<br />Bildungszentrum<br />Zentralschweiz, Schweiz</p>
          </section>
          <section className="bg-white rounded-3xl shadow-soft p-7">
            <h2 className="font-serif text-xl text-ink mb-3">Kontakt</h2>
            <p>E-Mail: <a href="mailto:jeannine.germann@smarttalk.ch" className="text-apricot-600 hover:underline underline-offset-4">jeannine.germann@smarttalk.ch</a></p>
          </section>
          <section className="bg-white rounded-3xl shadow-soft p-7">
            <h2 className="font-serif text-xl text-ink mb-3">Haftungsausschluss</h2>
            <p>Alle Angaben auf dieser Website wurden sorgfältig geprüft. SmartTalk übernimmt keine Gewähr für die Aktualität, Richtigkeit und Vollständigkeit der bereitgestellten Informationen.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
