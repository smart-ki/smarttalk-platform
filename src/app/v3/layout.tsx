import Header from '@/components/v3/Header'
import Footer from '@/components/v3/Footer'

export const metadata = {
  title: 'v3 Editorial Warm · SmartTalk Future Skills',
}

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-paper text-ink">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
