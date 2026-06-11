import { motion } from 'framer-motion'

// Client logos from public directory
const clients = [
  { name: 'Client 1', logo: '/images/home/client/t1.png' },
  { name: 'Client 2', logo: '/images/home/client/t2.png' },
  { name: 'Client 3', logo: '/images/home/client/t3.png' },
  { name: 'Client 4', logo: '/images/home/client/t4.png' },
  { name: 'Client 5', logo: '/images/home/client/t5.png' },
  { name: 'Client 6', logo: '/images/home/client/t6.png' },
  { name: 'Client 7', logo: '/images/home/client/t7.png' },
  { name: 'Client 8', logo: '/images/home/client/t8.png' },
  { name: 'Client 9', logo: '/images/home/client/t9.png' },
  { name: 'Client 10', logo: '/images/home/client/t10.png' },
  { name: 'Client 11', logo: '/images/home/client/t11.png' },
]

export default function Clients() {
  // Double the array for seamless marquee
  const doubled = [...clients, ...clients]

  return (
    <section id="clients-section" className="py-20 lg:py-24 relative overflow-hidden">
      <div className="site-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-cyan-500/40"></div>
            <span className="text-cyan-400 text-sm font-mono font-bold">08</span>
            <div className="w-12 h-px bg-cyan-500/40"></div>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-4">
            TRUSTED BY <span className="gradient-text">INDUSTRY LEADERS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Powering critical infrastructure for enterprises across India and beyond.
          </p>
        </motion.div>
      </div>

      <div className="site-container">
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="w-32 h-20 md:w-40 md:h-24 rounded-xl bg-white border border-transparent shadow-lg flex items-center justify-center p-4 transition-all duration-300 cursor-pointer group hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/30"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
