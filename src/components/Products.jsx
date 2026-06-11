import { motion } from 'framer-motion'

const products = [
  {
    name: 'ASB21 Series',
    type: '4G LTE Enterprise Router',
    tag: 'Best Seller',
    features: [
      'Dual-SIM 4G LTE Cat 6',
      'VPN & Firewall Built-in',
      'Easy Deployment',
      'Remote Monitoring',
      'ATM Networks & Branch Offices',
      'Retail & Enterprise Connectivity',
    ],
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'ASB90 Series',
    type: '5G Enterprise Gateway',
    tag: 'Premium',
    features: [
      '5G Sub-6 GHz & mmWave',
      'Mission-Critical Communication',
      'Secure Connectivity',
      'Remote Monitoring',
      'Satellite & Industrial IoT',
      'Smart Infrastructure Projects',
    ],
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'ASB50 Series',
    type: 'Multi-WAN SD-WAN Router',
    tag: 'Enterprise',
    features: [
      'SD-WAN Capable',
      'Secure Communication',
      'Scalable Connectivity',
      'Easy Deployment',
      'BFSI & Government Networks',
      'Smart Cities & Enterprise',
    ],
    gradient: 'from-indigo-500 to-violet-600',
  },
]

export default function Products() {
  return (
    <section id="products-section" className="py-20 lg:py-28 relative">
      <div className="site-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-cyan-400 text-sm font-mono font-bold">04</span>
            <div className="w-12 h-px bg-cyan-500/40"></div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-3xl lg:text-5xl font-bold font-heading">
              PRODUCTS <span className="gradient-text">PORTFOLIO</span>
            </h2>
            <p className="text-gray-400 text-lg mt-4 lg:mt-0 max-w-md">
              Industrial-grade routers designed for demanding enterprise environments.
            </p>
          </div>
        </motion.div>

        <div className="section-divider mb-16"></div>

        {/* Product cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="glass-card overflow-hidden group relative"
            >
              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${product.gradient}`}></div>

              <div className="p-8">
                {/* Tag */}
                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${product.gradient} text-white mb-6`}>
                  {product.tag}
                </span>

                {/* Product name */}
                <h3 className="text-2xl font-bold font-heading mb-2 group-hover:text-cyan-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-8">{product.type}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm group/link"
                >
                  View Specs
                  <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
