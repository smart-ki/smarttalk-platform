import Header from '@/components/v2/Header'
import Footer from '@/components/v2/Footer'

export const metadata = {
  title: 'v2 Soft Coaching · SmartTalk Future Skills',
}

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-cream text-ink">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
