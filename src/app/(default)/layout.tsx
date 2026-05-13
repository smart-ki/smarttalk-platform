import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
