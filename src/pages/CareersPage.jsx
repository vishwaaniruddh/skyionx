import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const jobDetails = [
  { label: 'Location', value: 'Vashi, Navi Mumbai' },
  { label: 'Duration', value: '6 Months' },
  { label: 'Stipend', value: '₹6,000 – ₹10,000 / month' },
  { label: 'Working Hours', value: 'Mon–Sat | 10:00 AM – 7:00 PM' },
  { label: 'Openings', value: '10' },
]

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
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-12">
            
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
                Join SkyionX Space Innovations Pvt. Ltd. and be a part of innovative projects in communication technology, networking, and enterprise solutions. We provide opportunities for students and freshers to gain practical industry experience and develop professional skills in a dynamic work environment.
              </p>
            </motion.section>

            {/* 02 - Current Opening */}
            <motion.section 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: '-50px' }} 
              variants={fadeUp} 
              className="glass-card p-8 lg:p-12 border-cyan-500/30"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase block mb-2">02 — Current Opening</span>
                  <h2 className="text-2xl lg:text-3xl font-bold font-heading text-white">Project Coordinator Intern</h2>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20">
                  Internship
                </span>
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-8 pb-8 border-b border-white/5">
                SkyionX is currently hiring Project Coordinator Interns to support project planning, coordination, documentation, and technical operations. This internship provides hands-on exposure to real-world projects and communication technologies.
              </p>

              <div className="grid md:grid-cols-2 gap-10">
                {/* Eligibility & Requirements */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Eligibility
                    </h3>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">•</span> Freshers & Final-Year Students</li>
                      <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">•</span> Graduates & Diploma Holders</li>
                      <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">•</span> B.E. / B.Tech Candidates</li>
                      <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">•</span> Eligible Branches: IT, Computer Engineering, Computer Science, Electronics & Telecommunication, and related technical streams.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-heading text-white mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Requirements
                    </h3>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">•</span> Strong organizational and communication skills</li>
                      <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">•</span> Basic MS Office knowledge (Word, Excel, PowerPoint)</li>
                      <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">•</span> Willingness to learn and adapt</li>
                    </ul>
                  </div>
                </div>

                {/* What You Will Learn */}
                <div>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/5 h-full">
                    <h3 className="text-xl font-bold font-heading text-white mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      What You Will Learn
                    </h3>
                    <ul className="space-y-4">
                      {['Basic Networking Concepts', 'Device Configuration & Setup', 'Network Monitoring', 'Troubleshooting', 'Real-Time Technical Support'].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-gray-300">
                          <div className="w-6 h-6 rounded bg-cyan-500/10 flex items-center justify-center shrink-0">
                            <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Job Summary Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }}
              className="glass-card p-6 sticky top-28"
            >
              <h3 className="text-lg font-bold font-heading text-white mb-6 border-b border-white/10 pb-4">Role Overview</h3>
              
              <div className="space-y-4 mb-8">
                {jobDetails.map((detail) => (
                  <div key={detail.label} className="flex flex-col">
                    <span className="text-sm text-gray-500 mb-1">{detail.label}</span>
                    <span className="text-gray-200 font-medium">{detail.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-cyan-500/5 rounded-xl p-5 border border-cyan-500/20 text-center mb-6">
                <h4 className="text-white font-bold mb-2">Apply Now</h4>
                <p className="text-sm text-gray-400 mb-4">Ready to kickstart your career in communication technology?</p>
                <a href="https://forms.gle/GJbx6H66HpymoCSKA" target="_blank" rel="noreferrer" className="glow-btn w-full block">
                  Apply via Google Form
                </a>
              </div>

              <div className="text-center text-sm text-gray-400">
                <p className="mb-1">Or contact us at:</p>
                <a href="mailto:hr@skyionx.com" className="text-cyan-400 hover:text-cyan-300 transition-colors block">hr@skyionx.com</a>
                <a href="tel:02245803512" className="text-cyan-400 hover:text-cyan-300 transition-colors block mt-1">022-45803512</a>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  )
}
