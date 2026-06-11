import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const products = [
  {
    id: 'asb21',
    name: 'ASB21',
    tagline: 'Compact IoT Edge Router',
    description: 'Compact and reliable networking device designed for secure and efficient connectivity across distributed networks. Ideal for ATM networks, branch offices, and retail stores.',
    features: ['Standard speeds up to 100Mbps', '2 LAN Interfaces', 'Built-in electromagnetic isolation', 'IoT Capabilities'],
    image: '/images/products/asb21.png',
    link: '/products/asb21'
  },
  {
    id: 'asb50',
    name: 'ASB50',
    tagline: 'High-Performance Industrial Router',
    description: 'High-performance networking solution designed to support secure communication and scalable connectivity requirements. Features dual SIM support and GPS tracking.',
    features: ['Speeds up to 150Mbps', 'Dual SIM Auto-Failover', 'GPS Location Tracking', '3 LAN / 1 WAN Interfaces'],
    image: '/images/products/ASB50.png',
    link: '/products/asb50'
  },
  {
    id: 'asb90',
    name: 'ASB90',
    tagline: 'Enterprise 5G Edge Router',
    description: 'The most powerful industrial router in our lineup, designed for mission-critical enterprise environments. Delivers ultra-fast 5G speeds and multi-WAN load balancing.',
    features: ['Ultra-fast 5G Integration', '4 Gigabit LAN Ports', 'Multi-WAN Load Balancing', 'Advanced IPSEC VPN'],
    image: '/images/products/ASB90.png',
    link: '/products/asb90'
  }
]

export default function ProductsPage() {
  const heroRef = useRef(null)

  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(heroProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0])

  return (
    <div className="min-h-screen pb-20">
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          {/* Using a placeholder gradient for the hero background since we don't have a specific products hero image */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950"></div>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #00e5ff 0%, transparent 50%)' }}></div>
        </motion.div>
        
        <motion.div className="relative z-10 text-center" style={{ opacity: heroOpacity }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-cyan-400 text-sm font-medium tracking-[0.3em] uppercase mb-4">
            <Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            Products
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="text-4xl lg:text-6xl font-bold font-heading">
            Our <span className="gradient-text">Hardware</span>
          </motion.h1>
        </motion.div>
      </section>

      {/* ── Products List ── */}
      <div className="site-container -mt-10 relative z-20">
        <div className="space-y-12 lg:space-y-20">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: '-100px' }} 
              variants={fadeUp} 
              custom={index}
              className="glass-card overflow-hidden group"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Image Section */}
                <div className="lg:col-span-5 relative bg-white/5 p-8 lg:p-12 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="relative z-10 max-w-full h-auto max-h-[300px] object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Section */}
                <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-2">
                    <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase">{product.tagline}</span>
                  </div>
                  <h2 className="text-3xl font-bold font-heading text-white mb-6">{product.name}</h2>
                  
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {product.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {product.features.map(feature => (
                      <div key={feature} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <Link to={product.link} className="glow-btn inline-flex items-center gap-2">
                      View Specifications
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
