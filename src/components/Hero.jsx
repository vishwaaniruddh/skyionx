import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ParticleWave from './ParticleWave'

const slides = [
  {
    tag: "IT'S TIME TO LEAP TOWARDS",
    heading: 'CONNECTING BUSINESSES THROUGH SATELLITE & ADVANCED NETWORKING TECHNOLOGIES',
    description:
      "SkyionX's 4G LTE and 5G advanced solutions at the edge provide network connectivity with outstanding cellular speed and reliability.",
  },
  {
    tag: 'EMPOWERING DIGITAL INFRASTRUCTURE',
    heading: 'RELIABLE. SECURE. FUTURE-READY.',
    description:
      'From satellite communication to IoT connectivity, SkyionX delivers enterprise-grade networking solutions across multiple industries.',
  },
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = slides[activeSlide]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Wave Background */}
      <ParticleWave />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1]"
        style={{
          background: 'radial-gradient(ellipse at 50% 60%, rgba(0, 229, 255, 0.04) 0%, transparent 60%), linear-gradient(180deg, rgba(5, 10, 20, 0.2) 0%, rgba(5, 10, 20, 0.6) 100%)',
        }}
      />

      {/* Content — centered */}
      <div className="relative z-10 site-container w-full text-center pt-28 pb-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tag line */}
            <motion.p
              className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {slide.tag}
            </motion.p>

            {/* Heading with slide-up animation */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold font-heading leading-[1.15] mb-6 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <span className="gradient-text">
                {slide.heading}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {slide.description}
            </motion.p>

            {/* CTA Buttons — centered */}
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a href="#stats-section" className="glow-btn">
                Explore Solutions
              </a>
              <a
                href="#contact-cta"
                className="px-8 py-3.5 rounded-xl border border-cyan-500/30 text-cyan-400 font-semibold text-sm hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-3 mt-14">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                activeSlide === index
                  ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50 w-8'
                  : 'bg-gray-600 hover:bg-gray-500 w-3'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-cyan-500/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-cyan-400"></div>
        </div>
      </motion.div>
    </section>
  )
}
