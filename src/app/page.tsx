import Link from 'next/link'
import { getKiKurse, getKommKurse } from '@/lib/strapi'
import KiKursCard from '@/components/KiKursCard'
import KommKursCard from '@/components/KommKursCard'
import KontaktFormular from '@/components/KontaktFormular'

export default async function HomePage() {
  const [kiKurse, kommKurse] = await Promise.all([getKiKurse(), getKommKurse()])
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-cream overflow-hidden py-24 sm:py-32 px-4">
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text-Spalte */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-cream-200 text-ink-soft text-xs font-medium px-4 py-2 rounded-full tracking-wide mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-apricot-500" />
                Future Skills · Zentralschweiz
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05] tracking-tight mb-8">
                <span className="text-apricot-600">Future Skills.</span><br />
                Kompetenz macht <br />den Unterschied.
              </h1>

              <p className="text-lg sm:text-xl text-ink-soft leading-relaxed mb-12 max-w-xl">
                Wir begleiten Menschen und Organisationen beim Aufbau zentraler Kompetenzen für die heutige Arbeitswelt.
              </p>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-muted mb-4">Hier geht es direkt zu den Angeboten</p>
              <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                <Link href="/#ki-digital" className="btn-primary text-sm py-3 px-6">KI →</Link>
                <Link href="/#kommunikation" className="btn-mauve text-sm py-3 px-6">Kommunikation →</Link>
                <Link href="/#beratung" className="btn-eucalyptus text-sm py-3 px-6">Beratung →</Link>
              </div>

              {/* Trust-Zeile */}
              <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-muted">
                {['Mensch im Zentrum', 'Direkt anwendbar', 'Online & Präsenz', 'Inhouse buchbar', 'Zentralschweiz'].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-ink-muted" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual-Spalte: organische Blob-Formen */}
            <div className="relative aspect-square hidden lg:block">
              <div className="absolute inset-0 blob bg-apricot-200 opacity-80" />
              <div className="absolute top-1/4 right-0 w-2/3 h-2/3 blob-2 bg-mauve-200 opacity-70 mix-blend-multiply" />
              <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 blob bg-eucalyptus-200 opacity-70 mix-blend-multiply" />
              {/* Floating dot accents */}
              <div className="absolute top-12 right-12 w-3 h-3 rounded-full bg-apricot-500" />
              <div className="absolute bottom-20 right-6 w-2 h-2 rounded-full bg-mauve-500" />
              <div className="absolute top-1/2 left-8 w-2 h-2 rounded-full bg-eucalyptus-500" />
            </div>

          </div>
        </div>
      </section>

      {/* ─── DER MENSCH IM ZENTRUM ─── */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 blob bg-mauve-100 opacity-60 blur-2xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">Das Fundament</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-ink mt-4 mb-5 leading-tight">
              Der Mensch im Zentrum.
            </h2>
            <p className="text-ink-soft text-lg max-w-2xl mx-auto leading-relaxed">
              Wir leben, wachsen und entwickeln uns in vier Kompetenzbereichen — ein Leben lang.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {/* Digitales */}
            <div className="bg-apricot-50 rounded-3xl p-7 hover:bg-apricot-100 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-apricot-200 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-apricot-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-apricot-700 mb-2">Digitales</div>
              <h3 className="font-serif text-xl text-ink mb-2">Digitale Kompetenz & KI</h3>
              <p className="text-sm text-ink-soft leading-relaxed mb-4">
                Digitale Kompetenz, KI-Kenntnisse, digitale Zusammenarbeit, Datenkompetenz.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs bg-white/60 text-apricot-700 font-medium px-2.5 py-1 rounded-full">KI & Digital Kurse</span>
                <span className="text-xs bg-white/60 text-eucalyptus-700 font-medium px-2.5 py-1 rounded-full">Beratung</span>
              </div>
            </div>

            {/* Zwischenmenschliches */}
            <div className="bg-mauve-50 rounded-3xl p-7 hover:bg-mauve-100 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-mauve-200 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-mauve-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-mauve-700 mb-2">Zwischenmenschliches</div>
              <h3 className="font-serif text-xl text-ink mb-2">Teamarbeit & Führung</h3>
              <p className="text-sm text-ink-soft leading-relaxed mb-4">
                Rollenmodellierung, Vertrauen aufbauen, Kollaboration, Konfliktfähigkeit.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs bg-white/60 text-mauve-700 font-medium px-2.5 py-1 rounded-full">Kommunikation</span>
                <span className="text-xs bg-white/60 text-eucalyptus-700 font-medium px-2.5 py-1 rounded-full">New Work</span>
              </div>
            </div>

            {/* Selbstmanagement */}
            <div className="bg-eucalyptus-50 rounded-3xl p-7 hover:bg-eucalyptus-100 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-eucalyptus-200 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-eucalyptus-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-eucalyptus-700 mb-2">Selbstmanagement</div>
              <h3 className="font-serif text-xl text-ink mb-2">Eigenverantwortung & Resilienz</h3>
              <p className="text-sm text-ink-soft leading-relaxed mb-4">
                Selbstführung, lebenslanges Lernen, Resilienz, Eigenverantwortung.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs bg-white/60 text-mauve-700 font-medium px-2.5 py-1 rounded-full">Führen hybrid</span>
                <span className="text-xs bg-white/60 text-eucalyptus-700 font-medium px-2.5 py-1 rounded-full">New Work</span>
              </div>
            </div>

            {/* Kognitiv */}
            <div className="bg-cream-200 rounded-3xl p-7 hover:bg-cream-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-cream-300 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-ink-soft" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-ink-soft mb-2">Kognitiv</div>
              <h3 className="font-serif text-xl text-ink mb-2">Kritisches Denken & Agilität</h3>
              <p className="text-sm text-ink-soft leading-relaxed mb-4">
                Problemlösung, Planung, geistige Beweglichkeit, Anpassungsfähigkeit.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs bg-white/60 text-eucalyptus-700 font-medium px-2.5 py-1 rounded-full">Future Skills Workshop</span>
                <span className="text-xs bg-white/60 text-ink-soft font-medium px-2.5 py-1 rounded-full">Auf Anfrage</span>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-ink-muted">
            In Anlehnung an: OECD Skills Outlook 2019 und WEF Future of Jobs Report 2023
          </p>
        </div>
      </section>

      {/* ─── ZITAT ─── */}
      <section className="bg-ink py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 blob bg-apricot-500 opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 blob-2 bg-mauve-500 opacity-10 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="w-full md:w-2/5 shrink-0">
              <div className="rounded-4xl overflow-hidden aspect-[40/29] shadow-soft-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/jeannine.jpg" alt="Jeannine Germann bei SmartTalk" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div className="flex-1">
              <div className="font-serif text-apricot-400 text-7xl leading-none mb-6">"</div>
              <p className="font-serif text-2xl sm:text-3xl text-cream leading-snug mb-8">
                Ich glaube, dass jeder Mensch das Potenzial hat, mit den richtigen Kompetenzen wirklich vorwärtszukommen. Genau dafür bin ich hier.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-apricot-400" />
                <div>
                  <p className="text-cream font-medium">Jeannine Germann</p>
                  <p className="text-cream/60 text-sm">Mitglied der Geschäftsleitung, SmartTalk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PILLAR 1: KI & DIGITAL ─── */}
      <section id="ki-digital" className="relative py-24 px-4 overflow-hidden">
        <div className="absolute top-20 left-0 w-72 h-72 blob bg-apricot-100 opacity-50 blur-2xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-apricot-600">Bildung · KI & Digital</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-ink mt-4 mb-5">
              KI & <span className="text-apricot-600">Digital</span>
            </h2>
            <p className="text-ink-soft max-w-xl mx-auto text-lg">
              Online und Präsenz · drei Kurse vom Einstieg bis zum persönlichen KI-Arbeitsplatz
            </p>
            <div className="inline-flex items-center gap-2 bg-apricot-100 text-apricot-700 text-sm font-medium px-5 py-2.5 rounded-full mt-6">
              <span className="w-1.5 h-1.5 rounded-full bg-apricot-500 animate-pulse" />
              Nächster Start: Juli 2026
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {kiKurse.map((kurs) => (
              <KiKursCard key={kurs.slug} kurs={kurs} />
            ))}
          </div>

          {/* Firmenkurs */}
          <div className="bg-ink rounded-4xl p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 blob bg-apricot-500 opacity-20 blur-2xl pointer-events-none" />
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-apricot-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Firmenkurs</span>
                  <span className="bg-white/10 text-cream text-xs font-medium px-3 py-1 rounded-full">Ab 5 Personen</span>
                </div>
                <h3 className="font-serif text-2xl text-cream mb-3">KI für Teams einführen</h3>
                <p className="text-cream/80 text-sm max-w-xl leading-relaxed">
                  Euer Team arbeitet täglich mit Daten, Texten und Prozessen. KI kann dabei entlasten. Dieser Tageskurs bringt alle auf denselben Stand: Was ist KI, wie nutzen wir sie sicher, und wo fangen wir an? Massgeschneidert auf eure Branche und Tools.
                </p>
                <div className="flex flex-wrap gap-4 mt-5 text-xs text-cream/60">
                  <span className="flex items-center gap-1.5"><span className="text-apricot-400">✓</span> Auf euren Alltag zugeschnitten</span>
                  <span className="flex items-center gap-1.5"><span className="text-apricot-400">✓</span> Datenschutz & Regeln für das Team</span>
                  <span className="flex items-center gap-1.5"><span className="text-apricot-400">✓</span> Direkt anwendbare Werkzeuge</span>
                </div>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <div className="text-xs text-cream/50 uppercase tracking-wide mb-1">Ganztag · auf Anfrage</div>
                <div className="text-3xl font-serif text-cream">CHF 1'800</div>
                <div className="text-xs text-cream/50 mb-5">/ Gruppe</div>
                <Link href="/#kontakt" className="btn-primary py-3 px-6 text-sm">
                  Kurs anfragen →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PILLAR 2: KOMMUNIKATION ─── */}
      <section id="kommunikation" className="relative py-24 px-4 bg-mauve-50 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-80 h-80 blob-2 bg-mauve-200 opacity-50 blur-2xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mauve-600">Bildung · Kommunikation</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-ink mt-4 mb-5">
              Kommunikation & <span className="text-mauve-600">Auftreten</span>
            </h2>
            <p className="text-ink-soft max-w-xl mx-auto text-lg">
              Präsenz · 3 Tageskurse für mehr Wirkung, Klarheit und Verbindung
            </p>
            <div className="inline-flex items-center gap-2 bg-white/60 text-mauve-700 text-sm font-medium px-5 py-2.5 rounded-full mt-6">
              <span className="w-1.5 h-1.5 rounded-full bg-mauve-500" />
              Auch als Inhouse-Training buchbar
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kommKurse.map((kurs) => (
              <KommKursCard key={kurs.slug} kurs={kurs} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── BERATUNG & NEW WORK ─── */}
      <section id="beratung" className="relative py-24 px-4 bg-eucalyptus-50 overflow-hidden">
        <div className="absolute top-20 left-0 w-72 h-72 blob bg-eucalyptus-200 opacity-50 blur-2xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-eucalyptus-600">Beratung & New Work</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-ink mt-4 mb-5">
              Beratung & <span className="text-eucalyptus-600">New Work</span>
            </h2>
            <p className="text-ink-soft max-w-xl mx-auto text-lg">
              Für Organisationen, die Future Skills leben wollen – mit Begleitung, die wirklich etwas bewegt.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/60 text-eucalyptus-700 text-sm font-medium px-5 py-2.5 rounded-full mt-6">
              <span className="w-1.5 h-1.5 rounded-full bg-eucalyptus-500" />
              4 freie Slots pro Monat
            </div>
          </div>

          {/* Stufe 1: Erstgespräch */}
          <div className="bg-eucalyptus-500 rounded-4xl p-8 mb-5 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 blob bg-white opacity-10 blur-2xl pointer-events-none" />
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-eucalyptus-100 mb-2">Stufe 01 · Einstieg</div>
                <h3 className="font-serif text-2xl mb-2">Erstgespräch — kostenlos</h3>
                <p className="text-eucalyptus-50 text-sm max-w-xl">
                  Wir hören zu, verstehen eure Situation und zeigen, was möglich ist. Ein offenes Gespräch auf Augenhöhe.
                  <span className="font-semibold text-white"> 4 freie Slots pro Monat.</span>
                </p>
              </div>
              <Link href="/#kontakt" className="bg-white text-eucalyptus-700 font-semibold rounded-full hover:bg-cream transition-colors py-3 px-7 text-sm whitespace-nowrap shadow-soft">
                Gespräch anfragen →
              </Link>
            </div>
          </div>

          {/* Stufe 2: KI-Readiness Check */}
          <div className="bg-cream rounded-4xl p-8 mb-5 shadow-soft">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-eucalyptus-600">Stufe 02 · Diagnose</span>
                  <span className="bg-eucalyptus-100 text-eucalyptus-700 text-xs font-medium px-2.5 py-1 rounded-full">Sehr gefragt</span>
                </div>
                <h3 className="font-serif text-2xl text-ink mb-2">KI-Readiness Check</h3>
                <p className="text-ink-soft text-sm max-w-xl leading-relaxed">
                  Wo steht euer Unternehmen beim Thema KI? Was ist sinnvoll, was zu früh, was dringend? In einem halben Tag analysieren wir eure Ausgangslage und liefern einen konkreten Aktionsplan mit klaren nächsten Schritten.
                </p>
                <div className="flex flex-wrap gap-4 mt-4 text-xs text-ink-muted">
                  <span className="flex items-center gap-1.5"><span className="text-eucalyptus-500">›</span> KI-Potenziale sichtbar machen</span>
                  <span className="flex items-center gap-1.5"><span className="text-eucalyptus-500">›</span> Spielregeln klären</span>
                  <span className="flex items-center gap-1.5"><span className="text-eucalyptus-500">›</span> 3 konkrete nächste Schritte</span>
                </div>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <div className="text-xs text-ink-muted uppercase tracking-wide mb-1">Halbtag</div>
                <div className="text-3xl font-serif text-ink">CHF 900</div>
                <div className="text-xs text-ink-muted mb-4">/ Unternehmen</div>
                <Link href="/#kontakt" className="btn-eucalyptus py-3 px-6 text-sm">
                  Check buchen →
                </Link>
              </div>
            </div>
          </div>

          {/* Stufe 3: Future Skills Diagnose */}
          <div className="bg-cream rounded-4xl p-8 mb-5 shadow-soft">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex-1">
                <div className="text-xs font-semibold uppercase tracking-widest text-eucalyptus-600 mb-2">Stufe 03 · Gesamtbild</div>
                <h3 className="font-serif text-2xl text-ink mb-2">Future Skills Diagnose</h3>
                <p className="text-ink-soft text-sm max-w-xl leading-relaxed">
                  Wo steht eure Organisation in allen vier Kompetenzbereichen? In einem eintägigen Workshop analysieren wir gemeinsam Digitales, Kommunikation, Selbstmanagement und kognitives Potenzial. Das Ergebnis ist ein klares Bild eurer Stärken und ein priorisierter Entwicklungsplan.
                </p>
                <div className="flex flex-wrap gap-4 mt-4 text-xs text-ink-muted">
                  <span className="flex items-center gap-1.5"><span className="text-eucalyptus-500">›</span> Alle 4 Kompetenzbereiche</span>
                  <span className="flex items-center gap-1.5"><span className="text-eucalyptus-500">›</span> Stärken sichtbar machen</span>
                  <span className="flex items-center gap-1.5"><span className="text-eucalyptus-500">›</span> Priorisierter Entwicklungsplan</span>
                </div>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <div className="text-xs text-ink-muted uppercase tracking-wide mb-1">Ganztag</div>
                <div className="text-3xl font-serif text-ink">CHF 1'600</div>
                <div className="text-xs text-ink-muted mb-4">/ Unternehmen</div>
                <Link href="/#kontakt" className="btn-eucalyptus py-3 px-6 text-sm">
                  Diagnose anfragen →
                </Link>
              </div>
            </div>
          </div>

          {/* Stufe 4: Massnahmen */}
          <div className="mt-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-eucalyptus-600 mb-5 px-1">Stufe 04 · Massnahmen: individuell nach Aufwand und Dauer</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { titel: 'KI in Geschäftsprozessen', text: 'KI-Tools in bestehende Abläufe integrieren, Automatisierungspotenziale nutzen und Teams befähigen – mit klaren Prioritäten und messbaren Ergebnissen.' },
                { titel: 'New Work: OKRs & Lohnmodelle', text: 'OKRs einführen, Lohnmodelle überdenken, agile Strukturen etablieren – New Work nicht nur als Konzept, sondern gelebt in der Organisation.' },
                { titel: 'Mitarbeitende schulen', text: 'Inhouse-Trainings zu KI, Kommunikation und Future Skills – massgeschneidert auf eure Prozesse, Tools und Branche.' },
              ].map(({ titel, text }) => (
                <div key={titel} className="bg-cream rounded-3xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow flex flex-col">
                  <div className="w-10 h-1 bg-eucalyptus-400 rounded-full mb-5" />
                  <h3 className="font-serif text-lg text-ink mb-2">{titel}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Inhouse Banner */}
          <div className="bg-ink rounded-4xl p-10 mt-10 text-cream relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 blob bg-eucalyptus-500 opacity-20 blur-2xl pointer-events-none" />
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-eucalyptus-300 mb-3">Für Teams & Unternehmen</div>
                <h3 className="font-serif text-2xl text-cream mb-3">Alle Kurse auch als Inhouse-Training</h3>
                <p className="text-cream/80 text-sm max-w-xl leading-relaxed">
                  Sämtliche KI- und Kommunikationskurse sind als massgeschneiderte Inhouse-Trainings buchbar. Angepasst an eure Prozesse, Tools und Branche. Teams ab 5 Personen.
                </p>
                <div className="flex flex-wrap gap-4 mt-4 text-xs text-cream/60">
                  <span className="flex items-center gap-1.5"><span className="text-eucalyptus-300">✓</span> KI-Kurse inhouse</span>
                  <span className="flex items-center gap-1.5"><span className="text-eucalyptus-300">✓</span> Kommunikationstrainings</span>
                  <span className="flex items-center gap-1.5"><span className="text-eucalyptus-300">✓</span> Kombinationspakete</span>
                  <span className="flex items-center gap-1.5"><span className="text-eucalyptus-300">✓</span> Ab CHF 1'800 / Gruppe</span>
                </div>
              </div>
              <Link href="/#kontakt" className="btn-eucalyptus py-3 px-7 text-sm whitespace-nowrap shrink-0">
                Inhouse anfragen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ÜBER UNS ─── */}
      <section id="ueber-uns" className="py-24 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-apricot-600">Über SmartTalk</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-ink mt-4 mb-5">
              Das Team hinter SmartTalk
            </h2>
            <p className="text-ink-soft max-w-2xl mx-auto text-lg leading-relaxed">
              Gegründet 2016. Rund 100 Menschen in Kursleitung, Administration, Marketing und Geschäftsleitung. Alle vereint durch eine Haltung: Kompetenz wächst, wenn Menschen wachsen dürfen.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 mb-16">
            {[
              { zahl: '2016', label: 'Gegründet' },
              { zahl: '100+', label: 'Mitarbeitende' },
              { zahl: '10 Jahre', label: 'Agile Führung' },
              { zahl: 'Zentralschweiz', label: 'Unser Zuhause' },
            ].map(({ zahl, label }) => (
              <div key={label} className="text-center">
                <div className="font-serif text-2xl text-ink">{zahl}</div>
                <div className="text-xs uppercase tracking-widest text-ink-muted mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { slug: 'florian', name: 'Florian', rolle: 'Inhaber & Geschäftsleiter', accent: 'apricot', bio: 'Wirtschaftsinformatiker und Informatiker mit Leidenschaft für Prozessoptimierung und zeitgemässe Führung. Florian baut SmartTalk seit der Gründung 2016 agil auf, setzt KI täglich in Führung und Betrieb ein und lebt New Work als Haltung.', tags: ['KI & Prozesse', 'New Work', 'Führung'] },
              { slug: 'jeannine', name: 'Jeannine', rolle: 'Mitglied der Geschäftsleitung', accent: 'mauve', bio: 'Bildungsdesignerin, Lerntherapeutin und Dozentin. Jeannine gestaltet Lernerfahrungen, die wirklich wirken, unterrichtet KI in der sozialen Arbeit und verantwortet bei SmartTalk die Entwicklung des Future Skills Angebots.', tags: ['Bildungsdesign', 'KI in Sozialer Arbeit', 'Lerntherapie'] },
              { slug: 'chris', name: 'Chris', rolle: 'Marketing & Teamentwicklung', accent: 'eucalyptus', bio: 'Spezialist für Teamentwicklung, New Work und Menschlichkeit in der Führung. Chris setzt KI gezielt im Marketing ein und sorgt dafür, dass SmartTalk sichtbar wird und die Botschaft ankommt, bei wem sie ankommen soll.', tags: ['Teamentwicklung', 'KI im Marketing', 'New Work'] },
              { slug: 'ruth', name: 'Ruth', rolle: 'People & HR', accent: 'cream', bio: 'Ruth begleitet das SmartTalk-Team in seiner Entwicklung. Durch Partizipation, Projektarbeiten und echte Beteiligung sorgt sie dafür, dass das Team wächst und zusammenwächst. Auch sie nutzt KI täglich in ihrer Arbeit.', tags: ['HR', 'Partizipation', 'KI im Alltag'] },
            ].map(({ slug, name, rolle, accent, bio, tags }) => {
              const colors: Record<string, { text: string; bg: string }> = {
                apricot: { text: 'text-apricot-700', bg: 'bg-apricot-100' },
                mauve: { text: 'text-mauve-700', bg: 'bg-mauve-100' },
                eucalyptus: { text: 'text-eucalyptus-700', bg: 'bg-eucalyptus-100' },
                cream: { text: 'text-ink-soft', bg: 'bg-cream-300' },
              }
              const c = colors[accent]
              return (
                <div key={slug} className="bg-white rounded-4xl shadow-soft hover:shadow-soft-lg transition-shadow overflow-hidden flex flex-col">
                  <div className="aspect-[4/5] w-full bg-cream-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/team-${slug}.jpg`} alt={name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-serif text-xl text-ink mb-1">{name}</h3>
                    <p className={`text-xs font-semibold uppercase tracking-wide mb-3 ${c.text}`}>{rolle}</p>
                    <p className="text-xs text-ink-soft leading-relaxed">{bio}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {tags.map((tag) => (
                        <span key={tag} className={`text-xs font-medium px-2.5 py-1 rounded-full ${c.bg} ${c.text}`}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 bg-cream-200 rounded-4xl p-10 text-center">
            <p className="font-serif text-xl text-ink-soft leading-relaxed max-w-3xl mx-auto">
              Wir leben, was wir lehren. SmartTalk arbeitet agil, nutzt KI-Tools im Alltag, führt mit OKRs und glaubt daran, dass Unternehmen dann wirklich stark sind, wenn die Mitarbeitenden sich entwickeln können.
            </p>
          </div>
        </div>
      </section>

      {/* ─── KONTAKT ─── */}
      <section id="kontakt" className="py-24 px-4 bg-cream-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-apricot-600">Kontakt</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-ink mt-4 mb-5">
              Wir freuen uns über den Austausch.
            </h2>
            <p className="text-ink-soft max-w-lg mx-auto text-lg">
              Ob Kursfragen, Inhouse-Anfragen, Erstgespräch Beratung oder einfach ein erstes Hallo – jede Nachricht ist willkommen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-3 bg-cream rounded-4xl p-8 shadow-soft">
              <KontaktFormular />
            </div>
            <div className="md:col-span-2 space-y-5">
              <div className="bg-cream rounded-3xl p-6 shadow-soft">
                <h3 className="font-serif text-lg text-ink mb-4">Direkt in Kontakt</h3>
                <div className="space-y-3 text-sm">
                  <a href="mailto:jeannine.germann@smarttalk.ch" className="flex items-center gap-3 text-ink-soft hover:text-apricot-600 transition-colors">
                    <div className="w-9 h-9 rounded-2xl bg-apricot-100 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-apricot-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    jeannine.germann@smarttalk.ch
                  </a>
                  <div className="flex items-center gap-3 text-ink-soft">
                    <div className="w-9 h-9 rounded-2xl bg-apricot-100 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-apricot-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    Zentralschweiz
                  </div>
                </div>
              </div>
              <div className="bg-apricot-100 rounded-3xl p-6">
                <p className="font-serif text-base text-apricot-700 mb-1">Schnelle Antwort</p>
                <p className="text-sm text-apricot-700/80">Wir melden uns innerhalb von zwei Werktagen.</p>
              </div>
              <div className="bg-eucalyptus-100 rounded-3xl p-6">
                <p className="font-serif text-base text-eucalyptus-700 mb-1">Beratungs-Erstgespräch</p>
                <p className="text-sm text-eucalyptus-700/80">Kostenlos · 4 freie Slots pro Monat</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
