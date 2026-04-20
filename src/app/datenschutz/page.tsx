export default function DatenschutzPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Datenschutzerklärung</h1>
      <div className="space-y-6 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Verantwortliche Stelle</h2>
          <p>SmartTalk<br />Jeannine Germann<br />Zentralschweiz<br />E-Mail: jeannine.germann@smarttalk.ch</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Erhebung von Daten</h2>
          <p>Wir erheben personenbezogene Daten nur, wenn Sie uns diese freiwillig mitteilen – zum Beispiel über unser Kontakt- oder Buchungsformular. Diese Daten verwenden wir ausschliesslich zur Bearbeitung Ihrer Anfrage.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Keine Weitergabe</h2>
          <p>Ihre Daten werden nicht an Dritte weitergegeben, verkauft oder für Werbezwecke genutzt.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Ihre Rechte</h2>
          <p>Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer gespeicherten Daten. Wenden Sie sich dafür an: jeannine.germann@smarttalk.ch</p>
        </section>
      </div>
    </div>
  )
}
