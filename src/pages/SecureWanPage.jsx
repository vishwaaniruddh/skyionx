import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Secure Data Transmission',
    desc: 'End-to-end encryption and secure tunneling across all WAN links, ensuring data integrity and confidentiality between all connected sites.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Intelligent Routing',
    desc: 'Dynamic, policy-based routing that optimizes traffic flow across WAN links for maximum performance, prioritizing business-critical applications.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Cloud & Data Center Connectivity',
    desc: 'Seamless, high-performance connectivity between branch offices, remote sites, data centers, and cloud environments on a unified secure fabric.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: 'Centralized Management',
    desc: 'Single-pane-of-glass visibility and control across your entire WAN. Simplifies operations, reduces complexity, and accelerates troubleshooting.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Business Continuity',
    desc: 'Automated failover and link redundancy ensure continuous network availability. Minimize disruptions to business operations even during link failures.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Optimized Performance',
    desc: 'WAN optimization techniques including traffic shaping, QoS, and application acceleration reduce latency and maximize throughput across all locations.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function SecureWanPage() {
  const heroRef = useRef(null)

  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(heroProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0])

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img src="/images/services/nms-hero.png" alt="SecureWAN Solutions" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/50 to-navy-950"></div>
        </motion.div>
        <motion.div className="relative z-10 text-center" style={{ opacity: heroOpacity }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-cyan-400 text-sm font-medium tracking-[0.3em] uppercase mb-4">
            <Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link to="/services" className="hover:text-cyan-300 transition-colors">Services</Link>
            <span className="mx-2 text-gray-500">/</span>
            SecureWAN
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="text-4xl lg:text-6xl font-bold font-heading">
            SecureWAN <span className="gradient-text">Solutions</span>
          </motion.h1>
        </motion.div>
      </section>

      {/* ── Overview ── */}
      <section className="py-20 lg:py-28">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <motion.span variants={fadeUp} custom={0} className="text-cyan-400 text-sm font-medium tracking-widest uppercase">01 — Overview</motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-4xl font-bold font-heading mt-4 mb-6">
                Secure, Reliable <span className="gradient-text">Wide Area Networks</span>
              </motion.h2>
              <motion.div variants={fadeUp} custom={2} className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  SkyionX SecureWAN Solutions enable organizations to build secure, reliable, and high-performance wide area networks across multiple locations. Our solutions ensure seamless connectivity between branch offices, remote sites, data centers, and cloud environments while maintaining strong security and optimized network performance.
                </p>
                <p>
                  With intelligent routing, secure data transmission, centralized management, and business continuity capabilities, SecureWAN helps organizations improve network efficiency, reduce operational complexity, and support their digital transformation initiatives.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10 border border-cyan-500/20 h-[380px]"
            >
              <img src="/images/services/managed-hero.png" alt="SecureWAN Network" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ── Features ── */}
      <section className="py-20 lg:py-28 relative">
        <div className="site-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-16">
            <motion.span variants={fadeUp} custom={0} className="text-cyan-400 text-sm font-medium tracking-widest uppercase">02 — Capabilities</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-4xl font-bold font-heading mt-4">
              Key <span className="gradient-text">Features</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
              Enterprise-grade WAN capabilities designed to keep your business connected, secure, and agile.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i % 3}
                className="glass-card p-8 group relative overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-transparent transition-all duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300 z-10 relative">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-3 z-10 relative">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed z-10 relative">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
