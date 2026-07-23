import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Proactive Monitoring',
    desc: 'Continuous monitoring of IT infrastructure, networking environment, and critical business systems, identifying issues before they impact operations.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Security Management',
    desc: 'End-to-end security management including patch management, vulnerability assessment, threat monitoring, and compliance across your IT environment.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Performance Optimization',
    desc: 'Regular performance tuning and capacity planning to ensure your IT infrastructure is always optimized for peak business performance.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Dedicated Professionals',
    desc: 'A dedicated team of IT professionals supporting your business, minimizing downtime, and resolving technical challenges before they escalate.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: 'Infrastructure Management',
    desc: 'Comprehensive management of servers, storage, networking, and cloud infrastructure, ensuring high availability and operational continuity.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Reporting & Analytics',
    desc: 'Regular reporting on IT health, performance metrics, and incident summaries, providing transparent insights into your technology ecosystem.',
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

export default function ItmsPage() {
  const heroRef = useRef(null)

  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(heroProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0])

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img src="/images/services/managed-hero.png" alt="IT Managed Services" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/50 to-navy-950"></div>
        </motion.div>
        <motion.div className="relative z-10 text-center" style={{ opacity: heroOpacity }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-cyan-400 text-sm font-medium tracking-[0.3em] uppercase mb-4">
            <Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link to="/services" className="hover:text-cyan-300 transition-colors">Services</Link>
            <span className="mx-2 text-gray-500">/</span>
            ITMS
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="text-4xl lg:text-6xl font-bold font-heading">
            IT Managed <span className="gradient-text">Services</span>
          </motion.h1>
        </motion.div>
      </section>

      {/* ── Overview ── */}
      <section className="py-20 lg:py-28">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <motion.span variants={fadeUp} custom={0} className="text-cyan-400 text-sm font-medium tracking-widest uppercase">01 — Overview</motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-4xl font-bold font-heading mt-4 mb-6">
                Focus on Your Business. <span className="gradient-text">We'll Handle the Tech.</span>
              </motion.h2>
              <motion.div variants={fadeUp} custom={2} className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  SkyionX provides end-to-end IT Managed Services designed to help organizations manage and optimize their IT infrastructure, networking environment, and critical business systems. Our services focus on ensuring high availability, security, and operational efficiency through proactive monitoring and management.
                </p>
                <p>
                  With a dedicated team of professionals, we support businesses in maintaining reliable network performance, minimizing downtime, and addressing technical challenges before they impact operations. Our ITMS solutions enable organizations to focus on their core business while we manage their technology ecosystem.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ── Services ── */}
      <section className="py-20 lg:py-28 relative">
        <div className="site-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-16">
            <motion.span variants={fadeUp} custom={0} className="text-cyan-400 text-sm font-medium tracking-widest uppercase">02 — What We Offer</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-4xl font-bold font-heading mt-4">
              Our <span className="gradient-text">ITMS Services</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, i) => (
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
