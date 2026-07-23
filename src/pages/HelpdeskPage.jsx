import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Centralized Support',
    desc: 'A single point of contact for all IT, networking, and connectivity-related issues. Streamlined ticketing ensures no request is missed or delayed.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Remote Troubleshooting',
    desc: 'Rapid remote diagnosis and resolution of incidents, minimizing disruption to business operations without requiring on-site visits.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Incident & Request Tracking',
    desc: 'Every incident and service request is logged, tracked, and managed through its lifecycle — ensuring full transparency and accountability.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Escalation Management',
    desc: 'Structured escalation paths ensure critical issues are prioritized and routed to the right experts for rapid, effective resolution.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Reduced Downtime',
    desc: 'Proactive monitoring and fast response times minimize downtime, keeping users productive and business operations running smoothly.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Enhanced User Experience',
    desc: 'Responsive and reliable support that improves end-user satisfaction and maintains operational continuity across all departments.',
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

export default function HelpdeskPage() {
  const heroRef = useRef(null)

  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(heroProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0])

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img src="/images/services/managed-hero.png" alt="Helpdesk Support Services" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/50 to-navy-950"></div>
        </motion.div>
        <motion.div className="relative z-10 text-center" style={{ opacity: heroOpacity }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-cyan-400 text-sm font-medium tracking-[0.3em] uppercase mb-4">
            <Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link to="/services" className="hover:text-cyan-300 transition-colors">Services</Link>
            <span className="mx-2 text-gray-500">/</span>
            Helpdesk Support
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="text-4xl lg:text-6xl font-bold font-heading">
            Helpdesk <span className="gradient-text">Support Services</span>
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
                Always-On <span className="gradient-text">Technical Support</span>
              </motion.h2>
              <motion.div variants={fadeUp} custom={2} className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  SkyionX offers comprehensive Helpdesk Support Services to provide timely and effective technical assistance for IT, networking, and connectivity-related issues. Our structured support model ensures that incidents and service requests are tracked, managed, and resolved efficiently.
                </p>
                <p>
                  Through centralized support, remote troubleshooting, and escalation management, we help organizations reduce downtime, improve user productivity, and maintain seamless business operations. Our goal is to deliver responsive and reliable support that enhances the overall user experience and operational continuity.
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
              <img src="/images/services/nms-hero.png" alt="Helpdesk Support" className="w-full h-full object-cover" />
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
              Support <span className="gradient-text">Features</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
              A structured, responsive support model designed to keep your teams productive and your operations seamless.
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
