import { motion } from 'framer-motion'

export default function UptimeBanner() {
  return (
    <section id="uptime-banner" className="py-20 relative overflow-hidden">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0, 229, 255, 0.15) 0%, rgba(10, 14, 26, 0.95) 70%)',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 via-transparent to-navy-900/60"></div>

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(0, 229, 255, 0.3) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10 py-20 lg:py-28 px-8 lg:px-16 text-center">
            {/* Animated rings */}
            <div className="relative inline-block mb-8">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-8 border border-cyan-500/20 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.05, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -inset-16 border border-cyan-500/10 rounded-full"
              ></motion.div>

              <div className="text-7xl lg:text-9xl font-bold font-heading gradient-text">
                99.5%
              </div>
            </div>

            <h3 className="text-2xl lg:text-4xl font-bold font-heading mb-4">
              Network Uptime <span className="text-cyan-400">Guaranteed</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              SkyionX ensures carrier-grade reliability with intelligent failover systems,
              redundant pathways, and proactive monitoring — keeping your business always connected.
            </p>

            <a href="#contact-cta" className="glow-btn inline-flex items-center gap-2">
              View SLA Details
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
