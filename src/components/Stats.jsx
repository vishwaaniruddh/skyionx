import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 99.5, suffix: '%', label: 'UPTIME ASSURED', desc: 'Guaranteed availability' },
  { value: 15000, suffix: '+', label: 'OPERATIONAL SITES', desc: 'Across three countries' },
  { value: 8, suffix: '+', label: 'INDUSTRIES SERVED', desc: 'BFSI, Telecom, Manufacturing & more' },
  { value: 3, suffix: '+', label: 'PRODUCTS PORTFOLIO', desc: 'Industrial-grade routers' },
]

function AnimatedNumber({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = Date.now()
    const isDecimal = target % 1 !== 0

    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      const current = eased * target

      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current))

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [isInView, target, duration])

  return (
    <span ref={ref} className="gradient-text text-4xl lg:text-5xl font-bold font-heading tabular-nums">
      {count.toLocaleString()}<span className="text-cyan-400">{suffix}</span>
    </span>
  )
}

export default function Stats() {
  return (
    <section id="stats-section" className="relative py-16 lg:py-20">
      {/* Top divider */}
      <div className="section-divider mb-16"></div>

      <div className="site-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="text-center lg:text-left relative"
            >
              {/* Vertical divider (desktop) */}
              {index > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"></div>
              )}

              <div className="lg:pl-8">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                <p className="text-cyan-400/80 text-xs font-bold tracking-[0.2em] mt-3 uppercase">
                  {stat.label}
                </p>
                <p className="text-gray-500 text-sm mt-1">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider mt-16"></div>
    </section>
  )
}
