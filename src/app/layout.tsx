import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: { default: 'SmartTalk – Future Skills', template: '%s | SmartTalk' },
  description: 'Future Skills für Menschen und Organisationen in der Zentralschweiz. KI-Kompetenz und Kommunikationstraining.',
  keywords: ['Future Skills', 'KI Kurse', 'Kommunikation', 'Auftrittskompetenz', 'Weiterbildung Zentralschweiz'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
