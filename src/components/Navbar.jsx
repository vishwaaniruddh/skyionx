import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'Services',
    path: '/services',
    children: [
      { name: 'Network Management System', path: '/services/network-management' },
      { name: 'Managed Services', path: '/services/managed-services' },
      { name: 'SecureWAN Solutions', path: '/services/secure-wan' },
      { name: 'Satellite Communication', path: '/services/satellite-communication' },
      { name: 'IT Managed Services', path: '/services/it-managed-services' },
      { name: 'Helpdesk Support', path: '/services/helpdesk-support' },
    ],
  },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Careers', path: '/careers' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="site-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={scrolled ? "/images/logo1.png" : "/images/logo.png"} 
              alt="SkyionX Logo" 
              className="h-16 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.children ? (
                  <button
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 cursor-default ${
                      location.pathname.startsWith(link.path)
                        ? (scrolled ? 'text-cyan-600' : 'text-cyan-400')
                        : (scrolled ? 'text-gray-700 hover:text-cyan-600 hover:bg-gray-100' : 'text-gray-300 hover:text-white hover:bg-white/5')
                    }`}
                  >
                    {link.name}
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                      location.pathname === link.path
                        ? (scrolled ? 'text-cyan-600' : 'text-cyan-400')
                        : (scrolled ? 'text-gray-700 hover:text-cyan-600 hover:bg-gray-100' : 'text-gray-300 hover:text-white hover:bg-white/5')
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-navy-900/95 backdrop-blur-xl border border-cyan-500/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="block px-5 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 border-b border-white/5 last:border-0"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy-900/98 backdrop-blur-2xl border-t border-cyan-500/10"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.children ? (
                    <div className="block px-4 py-3 text-gray-200 font-medium">
                      {link.name}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className="block px-4 py-3 text-gray-200 hover:text-cyan-400 rounded-lg hover:bg-white/5 transition-all"
                    >
                      {link.name}
                    </Link>
                  )}
                  {link.children && (
                    <div className="ml-6 space-y-1 mt-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
