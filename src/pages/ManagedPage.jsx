import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const benefits = [
  'Continuous monitoring and proactive maintenance',
  'Centralized management of critical network environments',
  'Improved network availability and uptime',
  'Enhanced security compliance across all locations',
  'Optimized operational efficiency and performance',
  'Support for business continuity',
  'Reduced burden on internal IT teams',
  'Lower operational costs and minimized downtime',
  'No significant investments in managing complex technology',
  'Proactive issue resolution before business impact',
  'Expertise in modern networking, security & connectivity',
  'Scalable services that grow with your business',
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function ManagedPage() {
  const heroRef = useRef(null)

  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(heroProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0])

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img src="/images/services/managed-hero.png" alt="Managed Services" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/50 to-navy-950"></div>
        </motion.div>
        <motion.div className="relative z-10 text-center" style={{ opacity: heroOpacity }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-cyan-400 text-sm font-medium tracking-[0.3em] uppercase mb-4">
            <Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link to="/services" className="hover:text-cyan-300 transition-colors">Services</Link>
            <span className="mx-2 text-gray-500">/</span>
            Managed Services
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="text-4xl lg:text-6xl font-bold font-heading">
            Managed <span className="gradient-text">Services</span>
          </motion.h1>
        </motion.div>
      </section>

      {/* ── Overview ── */}
      <section className="py-20 lg:py-28">
        <div className="site-container">
          <div className="max-w-4xl mx-auto mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <motion.span variants={fadeUp} custom={0} className="text-cyan-400 text-sm font-medium tracking-widest uppercase">01 — Overview</motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-4xl font-bold font-heading mt-4 mb-6">
                Your Network. <span className="gradient-text">Our Responsibility.</span>
              </motion.h2>
              <motion.div variants={fadeUp} custom={2} className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  SkyionX provides comprehensive Managed Services to help organizations efficiently monitor, manage, and secure their network infrastructure across multiple locations. As businesses expand their operations, managing network devices, connectivity, security policies, and operational performance becomes increasingly complex.
                </p>
                <p>
                  Our managed services ensure continuous monitoring, proactive maintenance, and centralized management of critical network environments. With expertise in modern networking, security, and connectivity technologies, SkyionX helps organizations maintain reliable and secure operations while reducing the burden on internal IT teams.
                </p>
                <p>
                  Our services are designed to improve network availability, enhance security compliance, optimize operational efficiency, and support business continuity. By leveraging SkyionX Managed Services, organizations can focus on their core business objectives while we ensure that their network infrastructure remains secure, resilient, and always available.
                </p>
                <p>
                  This approach helps reduce operational costs, minimize downtime, and eliminate the need for significant investments in managing complex technology environments.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Full Width Image Area */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10 border border-cyan-500/20 bg-white/5 p-4 md:p-8"
          >
            <img
              src="/images/services/futuristic_managed_service.png"
              alt="Managed Services Overview Architecture"
              className="w-full h-auto object-contain max-h-[600px] mx-auto"
            />
          </motion.div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ── Benefits ── */}
      <section className="py-20 lg:py-28 relative">
        <div className="site-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-16">
            <motion.span variants={fadeUp} custom={0} className="text-cyan-400 text-sm font-medium tracking-widest uppercase">02 — Benefits</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-4xl font-bold font-heading mt-4">
              Why Choose <span className="gradient-text">SkyionX</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i % 3}
                className="glass-card p-6 flex items-start gap-4 group hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-transparent transition-all duration-500"></div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300 z-10">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300 leading-relaxed pt-2 font-medium z-10 group-hover:text-white transition-colors">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
