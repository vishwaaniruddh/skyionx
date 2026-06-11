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

const specs = {
  wireless: [
    { label: 'Standard Bandwidth', value: 'IEEE802.11n standard, 100Mbps' },
    { label: 'Safety/Security', value: 'Supports WEP, WAP, WPA2, WPS' },
    { label: 'Transmitted Power', value: '16-17 dBm (11g), 18-20 dBm (11b), 15 dBm (11n)' },
    { label: 'Receive Sensitivity', value: '<-72 dBm @ 54 Mbps' },
  ],
  interface: [
    { label: 'LAN', value: '2 LAN interface, Built-in electromagnetic isolation, Full Duplex 10/100 Mbit/s' },
    { label: 'WAN', value: '1 WAN/LAN interface multiplex' },
    { label: 'SIM/UIM', value: 'SIM/UIM card with shed protection, 1.8V/3V auto detection' },
    { label: 'Power Source', value: 'DC 12V/1A' },
  ],
  environment: [
    { label: 'Operating Temperature', value: '-30°C to 75°C' },
    { label: 'Storage Temperature', value: '-40°C to 85°C' },
    { label: 'Operating Humidity', value: '95% (Unfreezing)' },
    { label: 'Voltage Range', value: 'DC 12V/1A' },
  ]
}

export default function Asb21Page() {
  const heroRef = useRef(null)

  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(heroProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0])

  return (
    <div className="min-h-screen pb-20">
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img src="/images/products/asb21-hero.png" alt="ASB21 Router" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/50 to-navy-950"></div>
        </motion.div>
        <motion.div className="relative z-10 text-center" style={{ opacity: heroOpacity }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-cyan-400 text-sm font-medium tracking-[0.3em] uppercase mb-4">
            <Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-400 cursor-default">Products</span>
            <span className="mx-2 text-gray-500">/</span>
            ASB21
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="text-4xl lg:text-6xl font-bold font-heading">
            ASB21 <span className="gradient-text">Industrial Router</span>
          </motion.h1>
        </motion.div>
      </section>

      <div className="site-container -mt-10 lg:-mt-20 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Product Image */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10 border border-cyan-500/20 bg-white/5 p-8 flex justify-center items-center"
            >
              <img 
                src="/images/products/asb21.png" 
                alt="ASB21 Industrial Router" 
                className="max-w-full h-auto object-contain max-h-[400px]" 
              />
            </motion.div>

            {/* 01 - Overview */}
            <motion.section 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: '-50px' }} 
              variants={fadeUp} 
              className="glass-card p-8 lg:p-12"
            >
              <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase block mb-4">01 — Overview</span>
              <h2 className="text-2xl lg:text-3xl font-bold font-heading mb-6">Compact & Reliable <span className="gradient-text">Connectivity</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Compact and reliable networking device designed for secure and efficient connectivity across distributed networks. ASB21 is an industrial grade 4G LTE and 5G router with IoT capabilities. It supports speeds up to 100mbps and comes with 2 RJ45 ethernet ports, making it ideal for branch office and retail deployments.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    Applications
                  </h3>
                  <ul className="space-y-2 text-gray-400">
                    {['ATM Networks', 'Branch Offices', 'Retail Stores', 'Enterprise Connectivity'].map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    Key Features
                  </h3>
                  <ul className="space-y-2 text-gray-400">
                    {[
                      'Secure Connectivity',
                      'Easy Deployment',
                      'Remote Monitoring',
                      'Support for 2 RJ45 Ethernet ports',
                      'Real time line monitoring',
                      'Remote management and upgrade',
                      'Standard speeds up to 100Mbps',
                      'Support for FDD-LTE Bands 1/3/5/8, TDD-LTE Bands 38/39/40/41'
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-cyan-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Tables Section */}
            <motion.section 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: '-50px' }} 
              variants={fadeUp} 
              className="space-y-8"
            >
              {/* 02 - Wireless */}
              <div className="glass-card overflow-hidden">
                <div className="p-6 border-b border-white/5 bg-white/5">
                  <span className="text-cyan-400 text-xs font-medium tracking-widest uppercase block mb-1">02</span>
                  <h3 className="text-xl font-bold text-white">Wireless Specifications</h3>
                </div>
                <div className="p-6">
                  <div className="divide-y divide-white/5">
                    {specs.wireless.map(spec => (
                      <div key={spec.label} className="py-3 flex flex-col md:flex-row md:items-start gap-1 md:gap-4">
                        <span className="text-gray-400 md:w-1/3 font-medium">{spec.label}</span>
                        <span className="text-gray-200 md:w-2/3">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 03 - Interface */}
              <div className="glass-card overflow-hidden">
                <div className="p-6 border-b border-white/5 bg-white/5">
                  <span className="text-cyan-400 text-xs font-medium tracking-widest uppercase block mb-1">03</span>
                  <h3 className="text-xl font-bold text-white">Interface Types</h3>
                </div>
                <div className="p-6">
                  <div className="divide-y divide-white/5">
                    {specs.interface.map(spec => (
                      <div key={spec.label} className="py-3 flex flex-col md:flex-row md:items-start gap-1 md:gap-4">
                        <span className="text-gray-400 md:w-1/3 font-medium">{spec.label}</span>
                        <span className="text-gray-200 md:w-2/3">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 04 - Environment */}
              <div className="glass-card overflow-hidden">
                <div className="p-6 border-b border-white/5 bg-white/5">
                  <span className="text-cyan-400 text-xs font-medium tracking-widest uppercase block mb-1">04</span>
                  <h3 className="text-xl font-bold text-white">Environment Conditions</h3>
                </div>
                <div className="p-6">
                  <div className="divide-y divide-white/5">
                    {specs.environment.map(spec => (
                      <div key={spec.label} className="py-3 flex flex-col md:flex-row md:items-start gap-1 md:gap-4">
                        <span className="text-gray-400 md:w-1/3 font-medium">{spec.label}</span>
                        <span className="text-gray-200 md:w-2/3">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </motion.section>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }}
              className="glass-card p-6 sticky top-28"
            >
              <div className="bg-navy-900 rounded-xl p-6 border border-white/5 text-center mb-6">
                <h3 className="text-2xl font-bold font-heading text-white mb-2">ASB21</h3>
                <p className="text-sm text-cyan-400">4G LTE & 5G Edge Router</p>
              </div>

              <div className="bg-cyan-500/5 rounded-xl p-5 border border-cyan-500/20 text-center mb-6">
                <h4 className="text-white font-bold mb-2">Interested?</h4>
                <p className="text-sm text-gray-400 mb-4">Get pricing and deployment details for your enterprise.</p>
                <Link to="/contact" className="glow-btn w-full block">
                  Request Quote
                </Link>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link to="/products" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  All Products
                </Link>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
