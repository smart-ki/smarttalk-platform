import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'opsz'],
})

export const metadata: Metadata = {
  title: { default: 'SmartTalk – Future Skills', template: '%s | SmartTalk' },
  description: 'Future Skills für Menschen und Organisationen in der Zentralschweiz. KI-Kompetenz und Kommunikationstraining.',
  keywords: ['Future Skills', 'KI Kurse', 'Kommunikation', 'Auftrittskompetenz', 'Weiterbildung Zentralschweiz'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased bg-cream text-ink">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
