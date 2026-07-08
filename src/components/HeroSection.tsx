import { motion, useMotionValue, useSpring } from 'motion/react'
import { restaurant } from '../data/restaurant'

function useMagneticHover(strength = 0.3) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  function handleMouse(e: React.MouseEvent, leaving: boolean) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    if (leaving) {
      x.set(0)
      y.set(0)
    } else {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      x.set((e.clientX - centerX) * strength)
      y.set((e.clientY - centerY) * strength)
    }
  }

  return { x: springX, y: springY, handleMouse }
}

function MagneticButton({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const { x, y, handleMouse } = useMagneticHover()

  return (
    <motion.button
      className={className}
      style={{ x, y }}
      onMouseMove={(e) => handleMouse(e, false)}
      onMouseLeave={(e) => handleMouse(e, true)}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}

const location = restaurant.locations[0]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#0d0d0d' }}>
      {/* Dark overlay background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, #c8a96e22 0%, transparent 60%)',
        }}
      />

      <div className="relative container z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.p
            className="text-primary text-eyebrow tracking-eyebrow uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
          >
            {restaurant.slogan}
          </motion.p>

          <motion.h1
            className="font-display text-h1 leading-h1 text-white"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0 0)' }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] as never, delay: 0.4 }}
          >
            Villa Bellini
          </motion.h1>

          <motion.p
            className="text-body mt-4 tracking-body"
            style={{ color: '#a09888' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.6 }}
          >
            Desde {restaurant.founded}
          </motion.p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.8 }}
          >
            <MagneticButton
              className="border border-primary text-primary px-8 py-3 text-body-sm tracking-label uppercase hover:bg-primary hover:text-black transition-colors duration-300"
              onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Reservar uma Mesa
            </MagneticButton>
          </motion.div>
        </div>

        {/* Bottom info */}
        <motion.div
          className="absolute bottom-10 left-0 right-0 container flex flex-col sm:flex-row sm:items-end justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div>
            <p className="text-label tracking-label uppercase" style={{ color: '#6b6358' }}>Endereço</p>
            <p className="text-body-sm text-white/80">{location.address}</p>
          </div>
          <div className="text-right">
            <p className="text-label tracking-label uppercase" style={{ color: '#6b6358' }}>Horários</p>
            <p className="text-body-sm text-white/80">Ter–Sex 12h–15h · 19h–23h | Sáb 12h–16h · 19h–00h | Dom 12h–17h</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="scroll-cue flex flex-col items-center gap-1">
          <svg className="w-4 h-4 text-white/40" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 3v10M4 9l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
