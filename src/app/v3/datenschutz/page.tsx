export default function V3DatenschutzPage() {
  return (
    <div className="bg-paper py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-600 block mb-5">Legal</span>
        <h1 className="font-serif text-4xl sm:text-5xl text-ink leading-tight mb-12 pb-6 border-b border-ink/15">Datenschutzerklärung</h1>
        <div className="space-y-10 text-ink-soft leading-relaxed font-serif">
          <section>
            <h2 className="font-serif text-xl text-ink mb-3">1. Verantwortliche Stelle</h2>
            <p>SmartTalk<br />Jeannine Germann<br />Zentralschweiz<br />E-Mail: jeannine.germann@smarttalk.ch</p>
          </section>
          <section className="pt-8 border-t border-ink/10">
            <h2 className="font-serif text-xl text-ink mb-3">2. Erhebung von Daten</h2>
            <p>Wir erheben personenbezogene Daten nur, wenn Sie uns diese freiwillig mitteilen – zum Beispiel über unser Kontakt- oder Buchungsformular. Diese Daten verwenden wir ausschliesslich zur Bearbeitung Ihrer Anfrage.</p>
          </section>
          <section className="pt-8 border-t border-ink/10">
            <h2 className="font-serif text-xl text-ink mb-3">3. Keine Weitergabe</h2>
            <p>Ihre Daten werden nicht an Dritte weitergegeben, verkauft oder für Werbezwecke genutzt.</p>
          </section>
          <section className="pt-8 border-t border-ink/10">
            <h2 className="font-serif text-xl text-ink mb-3">4. Ihre Rechte</h2>
            <p>Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer gespeicherten Daten. Wenden Sie sich dafür an: <a href="mailto:jeannine.germann@smarttalk.ch" className="text-terracotta-600 hover:underline underline-offset-4">jeannine.germann@smarttalk.ch</a></p>
          </section>
        </div>
      </div>
    </div>
  )
}
