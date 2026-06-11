import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function CircularProgress({ value, label, color = '#00e5ff' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setProgress(value), 300)
      return () => clearTimeout(timer)
    }
  }, [isInView, value])

  const radius = 80
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div ref={ref} className="relative inline-flex items-center justify-center">
      <svg width="200" height="200" className="-rotate-90">
        {/* Background circle */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="8"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
      </svg>
      <div className="absolute text-center">
        <span className="text-4xl font-bold font-heading gradient-text">
          {progress}%
        </span>
        <p className="text-gray-400 text-xs mt-1">{label}</p>
      </div>
    </div>
  )
}

export default function NetworkMonitoring() {
  return (
    <section id="monitoring-section" className="py-20 lg:py-28 relative">
      <div className="site-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-cyan-500/40"></div>
            <span className="text-cyan-400 text-sm font-mono font-bold">07</span>
            <div className="w-12 h-px bg-cyan-500/40"></div>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-4">
            LIVE NETWORK <span className="gradient-text">MONITORING</span>
          </h2>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Network Uptime */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-400 text-sm font-semibold tracking-wider uppercase">Live</span>
            </div>

            <CircularProgress value={99} label="Network Uptime" />

            <h3 className="text-xl font-bold font-heading mt-6 mb-2">Network Uptime</h3>
            <p className="text-gray-400 text-sm">Real-time uptime across all operational nodes</p>
          </motion.div>

          {/* Active Sites */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Active</span>
            </div>

            <div className="py-8">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
                className="text-7xl font-bold font-heading gradient-text"
              >
                14,892
              </motion.div>
              <p className="text-gray-400 text-sm mt-2">Active endpoints monitored</p>
            </div>

            <h3 className="text-xl font-bold font-heading mt-6 mb-2">Active Sites</h3>
            <p className="text-gray-400 text-sm">Sites currently transmitting data across the network</p>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/5">
              <div>
                <p className="text-cyan-400 text-lg font-bold">3</p>
                <p className="text-gray-500 text-xs">Countries</p>
              </div>
              <div>
                <p className="text-cyan-400 text-lg font-bold">8+</p>
                <p className="text-gray-500 text-xs">Industries</p>
              </div>
              <div>
                <p className="text-cyan-400 text-lg font-bold">24/7</p>
                <p className="text-gray-500 text-xs">NOC Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
