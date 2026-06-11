import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const scaleX = useSpring(0, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      const pct = total > 0 ? scrolled / total : 0
      setProgress(pct)
      scaleX.set(pct)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [scaleX])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #00e5ff, #3b82f6, #00e5ff)',
        boxShadow: '0 0 12px rgba(0, 229, 255, 0.5)',
      }}
    />
  )
}
