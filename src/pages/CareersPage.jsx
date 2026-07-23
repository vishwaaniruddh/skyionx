import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { jobsData } from '../data/jobs'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function CareersPage() {
  const heroRef = useRef(null)

  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(heroProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0])

  return (
    <div className="min-h-screen pb-20">
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img src="/images/careers-hero.png" alt="Careers at SkyionX" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/50 to-navy-950"></div>
        </motion.div>
        <motion.div className="relative z-10 text-center" style={{ opacity: heroOpacity }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-cyan-400 text-sm font-medium tracking-[0.3em] uppercase mb-4">
            <Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            Careers
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="text-4xl lg:text-6xl font-bold font-heading">
            Join the <span className="gradient-text">SkyionX Team</span>
          </motion.h1>
        </motion.div>
      </section>

      <div className="site-container -mt-10 lg:-mt-20 relative z-20">
        <div className="space-y-12">
          
          {/* 01 - Introduction */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: '-50px' }} 
            variants={fadeUp} 
            className="glass-card p-8 lg:p-12"
          >
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase block mb-4">01 — Careers at SkyionX</span>
            <h2 className="text-2xl lg:text-3xl font-bold font-heading mb-6">Build the Future of <span className="gradient-text">Communication</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Join SkyionX Space Innovations Pvt. Ltd. and be a part of innovative projects in communication technology, networking, and enterprise solutions. We provide opportunities for ambitious professionals and fresh talent to gain practical industry experience and develop impactful careers.
            </p>
          </motion.section>

          {/* 02 - Current Openings (Cards) */}
          <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: '-50px' }} 
            variants={fadeUp}
            className="space-y-6"
          >
            <div className="flex items-center justify-between flex-wrap gap-4 mb-2">
              <div>
                <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase block mb-2">02 — Open Positions</span>
                <h2 className="text-2xl lg:text-3xl font-bold font-heading text-white">Current Openings</h2>
              </div>
              <span className="text-gray-400 text-sm">{jobsData.length} Active Positions</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {jobsData.map((job) => (
                <Link
                  key={job.id}
                  to={`/careers/${job.id}`}
                  className="block group"
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="glass-card p-8 flex flex-col justify-between h-full group-hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all"></div>
                    
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider border border-cyan-500/20">
                          {job.badge}
                        </span>
                        <span className="text-xs text-cyan-400/80 font-medium">
                          {job.openings} Openings
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold font-heading text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {job.title}
                      </h3>

                      <p className="text-gray-400 text-sm line-clamp-3 mb-6 leading-relaxed">
                        {job.overview}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs text-gray-400 pt-4 border-t border-white/10 mb-6">
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.duration}
                        </span>
                      </div>

                      <div className="w-full py-3 px-4 rounded-xl bg-white/5 group-hover:bg-cyan-500 text-white group-hover:text-navy-950 font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 group-hover:border-cyan-500 text-center">
                        View Details & Apply
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.section>

          {/* General Contact Box */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
            className="glass-card p-8 text-center border-cyan-500/20"
          >
            <h3 className="text-xl font-bold font-heading text-white mb-2">Have Questions About Careers at SkyionX?</h3>
            <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6">
              Reach out to our talent acquisition team directly for any queries regarding application process or available roles.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a href="mailto:hr@skyionx.com" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 font-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hr@skyionx.com
              </a>
              <span className="text-gray-600">|</span>
              <a href="tel:02245803512" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 font-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                022-45803512
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
