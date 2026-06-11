import { motion } from 'framer-motion'

const solutions = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Network Management System',
    desc: 'Centralized NMS for monitoring, configuring, and managing thousands of endpoints from a single dashboard.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Satellite Communication',
    desc: 'LEO and GEO satellite connectivity solutions for remote and underserved regions worldwide.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
      </svg>
    ),
    title: 'IoT Connectivity',
    desc: 'M2M and IoT solutions connecting industrial sensors, smart devices, and edge computing nodes.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Managed Security Services',
    desc: 'End-to-end security with threat detection, VPN management, and compliance monitoring.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: 'SD-WAN Solutions',
    desc: 'Software-defined WAN for optimized multi-site connectivity with centralized policy management.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Managed Network Services',
    desc: 'Fully managed NOC operations with SLA-backed performance, dedicated support, and proactive maintenance.',
  },
]

export default function Solutions() {
  return (
    <section id="solutions-section" className="py-20 lg:py-28 relative">
      <div className="site-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-cyan-400 text-sm font-mono font-bold">06</span>
            <div className="w-12 h-px bg-cyan-500/40"></div>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-heading">
            SOLUTIONS <span className="gradient-text">OVERVIEW</span>
          </h2>
        </motion.div>

        <div className="section-divider mb-16"></div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 bg-gradient-to-br from-navy-800/50 to-navy-900/50 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Accent bar on hover */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-700"></div>

              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500/20 transition-colors duration-500">
                {solution.icon}
              </div>

              <h3 className="text-lg font-bold font-heading mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {solution.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {solution.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
