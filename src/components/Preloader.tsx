import { motion } from 'motion/react'

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: '#0d0d0d' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ scale: 1.05, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <p className="text-primary text-eyebrow tracking-eyebrow mb-2 uppercase">
          Ristorante Villa Bellini
        </p>
        <h1
          className="text-5xl md:text-7xl font-display tracking-[0.15em]"
          style={{ color: '#c8a96e' }}
        >
          Villa Bellini
        </h1>
        <div
          className="mx-auto mt-4 h-px w-12"
          style={{ backgroundColor: '#c8a96e' }}
        />
      </motion.div>
    </motion.div>
  )
}
