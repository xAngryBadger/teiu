import { motion, useMotionValue, useSpring } from 'motion/react'
import type { ReactNode } from 'react'

export function useMagneticHover(strength = 0.3) {
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

export function MagneticButton({ children, className, onClick }: { children: ReactNode; className?: string; onClick?: () => void }) {
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
