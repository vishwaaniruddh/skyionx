import Hero from '../components/Hero'
import Stats from '../components/Stats'
import WhySkyionx from '../components/WhySkyionx'
import Industries from '../components/Industries'
import UptimeBanner from '../components/UptimeBanner'
import Products from '../components/Products'
import Solutions from '../components/Solutions'
import NetworkMonitoring from '../components/NetworkMonitoring'
import Clients from '../components/Clients'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <WhySkyionx />
      <Industries />
      <UptimeBanner />
      {/* <Products /> */}
      <Solutions />
      <NetworkMonitoring />
      {/* <Clients /> */}
    </main>
  )
}
