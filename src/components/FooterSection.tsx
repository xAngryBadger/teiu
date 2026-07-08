import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { restaurant, getDayHours } from '../data/restaurant'
import { easeQuartOut } from '../data/motion'

const dayOrder = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

function getTodayKey(): string {
  const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  return days[new Date().getDay()]
}

export default function FooterSection() {
  const [locIndex, setLocIndex] = useState(0)
  const [locOpen, setLocOpen] = useState(false)
  const loc = restaurant.locations[locIndex]
  const todayKey = getTodayKey()

  return (
    <footer className="py-16" style={{ backgroundColor: '#0d0d0d' }}>
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand + address */}
          <div>
            <h3 className="font-display text-h4 leading-h4 tracking-h4 text-white mb-4">
              Villa Bellini
            </h3>
            <p className="text-body-sm" style={{ color: '#a09888' }}>
              {loc.address}
            </p>
            <p className="text-body-sm mt-2" style={{ color: '#c8a96e' }}>
              {loc.phone}
            </p>
            <p className="text-body-sm mt-1" style={{ color: '#6b6358' }}>
              {loc.email}
            </p>

            {/* Multi-location */}
            <div className="relative mt-6">
              <button
                onClick={() => setLocOpen(!locOpen)}
                className="flex items-center gap-2 text-body-sm tracking-label uppercase"
                style={{ color: '#c8a96e' }}
              >
                {loc.city}, {loc.country}
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <AnimatePresence>
                {locOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: easeQuartOut }}
                    className="absolute bottom-full left-0 mb-2 min-w-[180px]"
                    style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
                  >
                    {restaurant.locations.map((l, i) => (
                      <button
                        key={l.city}
                        onClick={() => { setLocIndex(i); setLocOpen(false) }}
                        className={`block w-full text-left px-4 py-2 text-body-sm transition-colors ${
                          i === locIndex ? 'text-white' : 'text-white/50 hover:text-white'
                        }`}
                      >
                        {l.city}
                        <span className="block text-label" style={{ color: '#6b6358' }}>{l.country}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-body-sm tracking-label uppercase mb-4" style={{ color: '#6b6358' }}>Horários</h4>
            <div className="space-y-1">
              {dayOrder.map((day) => {
                const isToday = day === todayKey
                const { isClosed, shifts } = getDayHours(loc.hours, day)

                if (isClosed) {
                  return (
                    <div key={day} className="flex justify-between text-body-sm" style={{ color: isToday ? '#c8a96e' : '#3a3a3a' }}>
                      <span>{day}</span>
                      <span>Fechado</span>
                    </div>
                  )
                }

                return (
                  <div key={day} className="flex justify-between text-body-sm" style={{ color: isToday ? '#c8a96e' : '#a09888' }}>
                    <span>{day}</span>
                    <span>
                      {shifts.map((s, i) => (
                        <span key={i}>{i > 0 ? ' · ' : ''}{s.open}–{s.close}</span>
                      ))}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Social + Nav */}
          <div>
            <h4 className="text-body-sm tracking-label uppercase mb-4" style={{ color: '#6b6358' }}>Redes</h4>
            <div className="flex gap-4 mb-8">
              <a
                href={restaurant.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm hover:text-primary transition-colors"
                style={{ color: '#a09888' }}
              >
                Instagram
              </a>
              <a
                href={restaurant.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm hover:text-primary transition-colors"
                style={{ color: '#a09888' }}
              >
                Facebook
              </a>
              <a
                href={restaurant.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm hover:text-primary transition-colors"
                style={{ color: '#a09888' }}
              >
                WhatsApp
              </a>
            </div>

            <h4 className="text-body-sm tracking-label uppercase mb-3" style={{ color: '#6b6358' }}>Navegação</h4>
            <nav className="space-y-1">
              <a href="#menu" className="block text-body-sm hover:text-primary transition-colors" style={{ color: '#a09888' }}>Menu</a>
              <a href="#about" className="block text-body-sm hover:text-primary transition-colors" style={{ color: '#a09888' }}>Sobre</a>
              <a href="#gallery" className="block text-body-sm hover:text-primary transition-colors" style={{ color: '#a09888' }}>Galeria</a>
              <a href="#reservation" className="block text-body-sm hover:text-primary transition-colors" style={{ color: '#a09888' }}>Reservas</a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 text-center" style={{ borderTop: '1px solid #1f1f1f' }}>
          <p className="text-body-sm" style={{ color: '#3a3a3a' }}>
            &copy; {new Date().getFullYear()} Ristorante Villa Bellini. Todos os direitos reservados.
          </p>
          <p className="text-label mt-1" style={{ color: '#3a3a3a' }}>
            São Paulo · Milão · Nova York
          </p>
        </div>
      </div>
    </footer>
  )
}
