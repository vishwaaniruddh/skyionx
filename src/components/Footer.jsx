import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const footerLinks = {
  Services: [
    { name: 'Network Management System', path: '/services/network-management' },
    { name: 'Managed Services', path: '/services/managed-services' },
    { name: 'SecureWAN Solutions', path: '/services/secure-wan' },
    { name: 'Satellite Communication', path: '/services/satellite-communication' },
    { name: 'IT Managed Services', path: '/services/it-managed-services' },
    { name: 'Helpdesk Support', path: '/services/helpdesk-support' },
  ],
  Company: [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer id="site-footer" className="relative">
      {/* CTA Banner */}
      <section id="contact-cta" className="relative">
        <div className="site-container py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* CTA Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-[length:200%_100%]"
              style={{ animation: 'gradient-shift 6s ease-in-out infinite' }}
            ></div>

            {/* Background text pattern */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-4 right-8 text-8xl lg:text-[10rem] font-bold font-heading text-white/5 leading-none select-none">
                SATELLITE<br />NETWORKING
              </div>
            </div>

            <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-20">
              <h2 className="text-3xl lg:text-5xl font-bold font-heading text-white mb-6">
                Ready to transform<br />your network?
              </h2>
              <p className="text-white/80 text-lg max-w-xl mb-8">
                Let's discuss how SkyionX can power your enterprise with reliable, secure, and scalable connectivity.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-navy-950 text-white font-semibold rounded-xl hover:bg-navy-800 transition-all duration-300 text-sm"
              >
                Connect With Us
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer links */}
      <div className="border-t border-white/5">
        <div className="site-container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Logo & social */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4L26 10L20 16L14 10L20 4Z" fill="#00e5ff" opacity="0.9"/>
                  <path d="M10 14L16 20L10 26L4 20L10 14Z" fill="#00b8d4" opacity="0.7"/>
                  <path d="M30 14L36 20L30 26L24 20L30 14Z" fill="#00b8d4" opacity="0.7"/>
                  <path d="M20 24L26 30L20 36L14 30L20 24Z" fill="#00e5ff" opacity="0.9"/>
                </svg>
                <span className="text-xl font-bold font-heading">
                  <span className="text-white">Skyion</span>
                  <span className="text-cyan-500">X</span>
                </span>
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
                Pioneering satellite communication and enterprise networking solutions with carrier-grade reliability and security.
              </p>

              {/* Social */}
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/skyionx-space-innovations-bab520415"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-semibold font-heading text-lg mb-6">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-gray-500 hover:text-cyan-400 text-sm transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div className="md:col-span-2 lg:col-span-1">
              {/* Intentionally no extra Contact column — info is in CTA */}
            </div>
          </div>

          {/* Contact info */}
          <div className="border-t border-white/5 mt-12 pt-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex flex-wrap gap-8 text-sm text-gray-500">
                <a href="mailto:connect@skyionx.com" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  connect@skyionx.com
                </a>
                <a href="tel:+912245803512" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 22-45803512
                </a>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  1301, Rupa Sapphire, 13th Floor, Plot 12, Sector 18, Vashi, Navi Mumbai - 400703
                </span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/5 mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} SkyionX. All rights reserved. | Make in India 🇮🇳
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
