import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const expertise = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Satellite Communication',
    desc: 'End-to-end VSAT and satellite connectivity for remote and underserved regions.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Network Security',
    desc: 'Multi-layered security with AES-256 encryption and proactive threat monitoring.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Cloud Connectivity',
    desc: 'Seamless hybrid cloud integration for enterprise-grade networking at scale.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
      </svg>
    ),
    title: 'Wireless Solutions',
    desc: 'Advanced 4G LTE & 5G routers designed and manufactured in India.',
  },
]

const differentiators = [
  { icon: '⚡', title: 'High-Speed Connectivity', desc: 'Download speeds of 2–20 Mbps per node for reliable remote access.' },
  { icon: '💰', title: '100% Opex Model', desc: 'Products and solutions deployable on a flexible operational expenditure model.' },
  { icon: '🚀', title: 'Minimum Lead Time', desc: 'Fastest deployment timelines compared to every competitor in the market.' },
  { icon: '🏭', title: 'Make in India', desc: '1,000+ daily production capacity with 90%+ indigenous value addition.' },
  { icon: '🌍', title: '15,000+ Sites', desc: 'Successfully operational across enterprise sites in three countries.' },
]

const stats = [
  { label: 'Founded', value: '2026' },
  { label: 'Products', value: '3+' },
  { label: 'Industries', value: '8+' },
  { label: 'Sites Deployed', value: '15K+' },
  { label: 'Countries', value: '3+' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function AboutPage() {
  const heroRef = useRef(null)
  const partnerRef = useRef(null)

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.8], [1, 0])

  const { scrollYProgress: partnerScrollProgress } = useScroll({
    target: partnerRef,
    offset: ['start end', 'end start'],
  })
  const partnerImgY = useTransform(partnerScrollProgress, [0, 1], [80, -80])

  return (
    <div className="min-h-screen">
      {/* ── Hero Banner ── */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Parallax background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <img
            src="/images/about/hero-satellite.png"
            alt="Satellite ground station"
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/50 to-navy-950"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400 text-sm font-medium tracking-[0.3em] uppercase mb-4"
          >
            <Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-5xl lg:text-7xl font-bold font-heading gradient-text"
          >
            ABOUT US
          </motion.h1>
        </motion.div>
      </section>

      {/* ── Section 01: Company Overview ── */}
      <section className="py-20 lg:py-28 relative">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <motion.span variants={fadeUp} custom={0} className="text-cyan-400 text-sm font-medium tracking-widest uppercase">01 — Company Overview</motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-4xl font-bold font-heading mt-4 mb-6">
                Building <span className="gradient-text">Secure & Reliable</span> Communication Infrastructure
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-gray-400 text-lg leading-relaxed">
                SkyionX is a technology-driven company specializing in satellite communication, enterprise networking, IoT connectivity, and advanced communication solutions. We help businesses, government organizations, and industries build secure, reliable, and future-ready communication infrastructure.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-2 gap-4"
            >
              {expertise.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  custom={i}
                  className="glass-card p-6 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ── Section 02: Partner — Parallax image section ── */}
      <section ref={partnerRef} className="py-20 lg:py-28 relative overflow-hidden">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Parallax image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden h-[400px] lg:h-[500px]"
              style={{ y: partnerImgY }}
            >
              <img
                src="/images/about/manufacturing.png"
                alt="SkyionX manufacturing facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
              {/* Floating stat badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 bg-navy-900/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-5"
              >
                <div className="text-3xl font-bold font-heading gradient-text">1,000+</div>
                <div className="text-gray-400 text-sm">Units / Day Production</div>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <motion.span variants={fadeUp} custom={0} className="text-cyan-400 text-sm font-medium tracking-widest uppercase">02 — Our Story</motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-4xl font-bold font-heading mt-4 mb-6">
                Your Partner for <span className="gradient-text">Everlasting Communications</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-gray-400 leading-relaxed mb-4">
                SkyionX was founded by Mr. Sudipto Banerji in the year 2026. With multi-decade experience leading and managing large enterprise telecom-grade networks globally, he clearly understood the gaps and issues faced by organizations in meeting their connectivity requirements.
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="text-gray-400 leading-relaxed mb-4">
                SkyionX provides world-class connectivity with the latest generation of 4G LTE & 5G technology, enabling exceptional throughput and assured uptime of 99.5% at the last mile.
              </motion.p>
              <motion.p variants={fadeUp} custom={4} className="text-gray-400 leading-relaxed">
                With two manufacturing facilities in India and a daily production capacity of 1,000+ units — motherboards, PCBs, and casings built entirely in-house — SkyionX is a proud "Make in India" organization with 90%+ indigenous value addition.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ── Section 03: Key Differentiators ── */}
      <section className="py-20 lg:py-28 relative">
        <div className="site-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} custom={0} className="text-cyan-400 text-sm font-medium tracking-widest uppercase">03 — Key Differentiators</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-4xl font-bold font-heading mt-4">
              What Sets Us <span className="gradient-text">Apart</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i}
                className="glass-card p-8 relative group overflow-hidden"
              >
                {/* Background number */}
                <span className="absolute top-4 right-6 text-6xl font-bold font-heading text-cyan-500/5 select-none group-hover:text-cyan-500/10 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ── Section 04: At a Glance — Stats with parallax ── */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0, 229, 255, 0.4) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>

        <div className="site-container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} custom={0} className="text-cyan-400 text-sm font-medium tracking-widest uppercase">04 — At a Glance</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-4xl font-bold font-heading mt-4 mb-4">
              SkyionX <span className="gradient-text">By the Numbers</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-gray-400 max-w-2xl mx-auto">
              Committed to providing adaptable, smart, and reliable network solutions globally.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-6 text-center group hover:border-cyan-500/30"
              >
                <div className="text-3xl lg:text-4xl font-bold font-heading gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* HQ Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-10 text-center"
          >
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Headquartered in Vashi, Navi Mumbai, Maharashtra, India
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ── Section 05: Leadership — Parallax card ── */}
      <section className="py-20 lg:py-28 relative">
        <div className="site-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} custom={0} className="text-cyan-400 text-sm font-medium tracking-widest uppercase">05 — Leadership</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-4xl font-bold font-heading mt-4">
              Meet Our <span className="gradient-text">Visionary</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card overflow-hidden">
              <div className="grid md:grid-cols-5">
                {/* Image */}
                <div className="md:col-span-2 relative h-64 md:h-auto">
                  <img
                    src="/images/about/leadership.png"
                    alt="Sudipto Banerji"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-900/50 md:block hidden"></div>
                </div>

                {/* Bio */}
                <div className="md:col-span-3 p-8 lg:p-10">
                  <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-medium mb-4">
                    Founder, CEO & CTO
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold font-heading text-white mb-4">
                    Sudipto Banerji
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Before founding SkyionX in 2026, Sudipto served as Global Head of Network for giants like Reliance and Bell Canada. With multi-decade experience leading large enterprise telecom networks globally, he designed & developed SkyionX's advanced 4G LTE & 5G router portfolio.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Under his leadership, SkyionX has grown to serve 15,000+ enterprise sites across three countries, establishing itself as a pioneer in Make-in-India networking solutions.
                  </p>

                  {/* Social links */}
                  <div className="mt-6 flex gap-3">
                    <a
                      href="https://www.linkedin.com/company/skyionx-space-innovations-pvt-ltd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ── Section 07: Timeline ── */}
      <section className="py-20 lg:py-28 relative">
        <div className="site-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} custom={0} className="text-cyan-400 text-sm font-medium tracking-widest uppercase">07 — Our Journey</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-4xl font-bold font-heading mt-4">
              The Journey <span className="gradient-text">Begins</span>
            </motion.h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-cyan-500/10 to-transparent"></div>

            {[
              { year: '2026', title: 'Founded', desc: 'SkyionX established by Sudipto Banerji to bridge connectivity gaps for enterprises.' },
              { year: '2026', title: 'Product Development', desc: 'Began designing the first-generation 4G LTE & 5G router portfolio for enterprise deployment.' },
              { year: '2026', title: 'Manufacturing in India', desc: 'Setting up manufacturing facilities with 1,000+ daily production capacity.' },
            ].map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-20 pb-12 last:pb-0 group"
              >
                {/* Dot */}
                <div className="absolute left-[25px] top-1 w-[11px] h-[11px] rounded-full bg-cyan-500 border-2 border-navy-950 group-hover:scale-150 transition-transform duration-300"></div>

                <div className="text-cyan-400 text-sm font-mono font-medium mb-1">{item.year}</div>
                <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
