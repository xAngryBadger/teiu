import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { restaurant } from '../data/restaurant'
import { MagneticButton } from '../hooks/useMagneticHover'
import { easeQuartOut } from '../data/motion'

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Sobre', href: '#about' },
  { label: 'Galeria', href: '#gallery' },
  { label: 'Reservas', href: '#reservation' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [locOpen, setLocOpen] = useState(false)
  const [selectedLoc, setSelectedLoc] = useState(0)

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'rgba(13,13,13,0.88)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
      <nav className="container flex items-center justify-between py-4">
        <a
          href="#"
          className="font-display text-lg tracking-[0.12em] text-white"
        >
          Villa Bellini
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-body-sm tracking-label uppercase text-white/70 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="relative">
            <button
              onClick={() => setLocOpen(!locOpen)}
              className="text-body-sm tracking-label uppercase text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-1"
            >
              {restaurant.locations[selectedLoc].city}
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <AnimatePresence>
              {locOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: easeQuartOut }}
                  className="absolute top-full right-0 mt-2 min-w-[160px]"
                  style={{ backgroundColor: '#0d0d0d', border: '1px solid #2a2a2a' }}
                >
                  {restaurant.locations.map((loc, i) => (
                    <button
                      key={loc.city}
                      onClick={() => { setSelectedLoc(i); setLocOpen(false) }}
                      className="block w-full text-left px-4 py-2 text-body-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {loc.city}
                      <span className="block text-label text-white/40">{loc.country}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <li>
            <MagneticButton
              className="border border-white/30 text-white px-5 py-2 text-body-sm tracking-label uppercase hover:bg-white hover:text-black transition-colors duration-300"
              onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Reservar
            </MagneticButton>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: easeQuartOut }}
            className="md:hidden absolute top-full left-0 right-0"
            style={{ backgroundColor: '#0d0d0d', borderBottom: '1px solid #2a2a2a' }}
          >
            <ul className="container py-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-body tracking-label uppercase text-white/70 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => { setMobileOpen(false); document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="w-full border border-white/30 text-white px-5 py-3 text-body tracking-label uppercase"
                >
                  Reservar
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
