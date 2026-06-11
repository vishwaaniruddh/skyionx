import { motion } from 'framer-motion'

const reasons = [
  {
    num: '01',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'End-to-End Security',
    desc: 'Multi-layered security architecture with AES-256 encryption, ensuring your data stays protected at every touchpoint.',
  },
  {
    num: '02',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Real-Time Monitoring',
    desc: 'AI-powered 24/7 network monitoring with proactive alert systems and automated fault resolution.',
  },
  {
    num: '03',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Seamless Communication',
    desc: 'Unified communication infrastructure bridging satellite, cellular, and fixed-line networks into one platform.',
  },
  {
    num: '04',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Lightning-Fast Deployment',
    desc: 'Rapid plug-and-play deployment within 48 hours. Zero downtime migration from existing infrastructure.',
  },
  {
    num: '05',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Auto-Failover Recovery',
    desc: 'Intelligent redundancy with automatic failover switching in under 10 seconds, ensuring zero disruption.',
  },
  {
    num: '06',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Scalable Architecture',
    desc: 'Cloud-native infrastructure that scales from 10 to 10,000+ endpoints without performance degradation.',
  },
]

export default function WhySkyionx() {
  return (
    <section id="why-skyionx" className="py-12 lg:py-16 relative">
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-cyan-400 text-sm font-mono font-bold">02</span>
              <div className="w-12 h-px bg-cyan-500/40"></div>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold font-heading">
              WHY <span className="gradient-text">SKYIONX</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg mt-6 lg:mt-0 max-w-md lg:text-right"
          >
            Six reasons enterprises trust SkyionX for their communication infrastructure.
          </motion.p>
        </div>

        <div className="section-divider mb-16"></div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-8 group"
            >
              {/* Number */}
              <span className="text-cyan-500/30 text-5xl font-bold font-heading absolute top-6 right-6 group-hover:text-cyan-500/50 transition-colors duration-500">
                {reason.num}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-500">
                {reason.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
