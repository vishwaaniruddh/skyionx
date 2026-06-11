import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const benefits = [
  "Lower TCO",
  "Free-up IT teams to focus on Strategic priorities",
  "Ensure latest technology and equipment",
  "Minimize expenses",
  "Minimize downtime with committed Service-Level Agreements (SLAs)",
  "Minimal time to provision",
  "No hassles of wires / cabling",
  "High Network Availability with Dual SIM Built-In",
  "Robust security through IPSEC",
  "Proactive Monitoring and Management",
  "Simplify compliance and ensure security",
  "Optimized Performance & productivity",
  "Ride on SkyionX's expertise and experience of top-notch network services"
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
            Managed Secure Network Services
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="text-4xl lg:text-6xl font-bold font-heading">
            Managed Secure <span className="gradient-text">Network Services</span>
          </motion.h1>
        </motion.div>
      </section>

      {/* ── Content Area: Overview + Image ── */}
      <section className="py-20 lg:py-28">
        <div className="site-container">
          <div className="max-w-4xl mx-auto mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <motion.span variants={fadeUp} custom={0} className="text-cyan-400 text-sm font-medium tracking-widest uppercase">01 — Overview</motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-4xl font-bold font-heading mt-4 mb-6">
                Simplifying Edge <span className="gradient-text">Network Management</span>
              </motion.h2>
              <motion.div variants={fadeUp} custom={2} className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  Large organizations with remote branch offices and business locations manage a lot of network devices, data, and manpower to ensure business availability at all times. Organizations need to manage each device to ensure organizational cybersecurity policies are applied and in compliance.
                </p>
                <p>
                  This type of business requirement needs to be very agile and proactive along with continuous monitoring and management of the edge network. With humongous numbers of edge devices, it is hard for businesses to meet all requirements with limited budget and resources.
                </p>
                <p>
                  SkyionX, a managed secure network services provider, helps businesses manage the complex edge network infrastructure along with built-in security. SkyionX understands that today network technologies are hybrid, hyper-connected, evolving fast — not just a set of boxes, but a series of network devices with services which can be quickly and easily deployed and managed.
                </p>
                <p>
                  With SkyionX in place, businesses can focus on their core operations by ensuring that the secure network is always available. SkyionX also ensures that the business's budget is not compromised by making undue investments in expensive technology.
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

      {/* ── Benefits List ── */}
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
                {/* Background glow on hover */}
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
