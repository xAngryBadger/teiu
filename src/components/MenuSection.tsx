import { useState } from 'react'
import { motion } from 'motion/react'
import { restaurant } from '../data/restaurant'
import type { MenuCategory } from '../types'
import { easeQuartOut } from '../data/motion'

const categories: MenuCategory[] = ['Antipasti', 'Primi', 'Secondi', 'Dolci']

const categoryLabels: Record<MenuCategory, string> = {
  Antipasti: 'Entradas',
  Primi: 'Massas & Risotos',
  Secondi: 'Carnes & Peixes',
  Dolci: 'Sobremesas',
}

export default function MenuSection() {
  const [active, setActive] = useState<MenuCategory>('Antipasti')

  return (
    <section id="menu" className="py-24" style={{ backgroundColor: '#f5efe5' }}>
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeQuartOut }}
        >
          <p className="text-primary text-eyebrow tracking-eyebrow uppercase mb-3">
            Il Nostro Menu
          </p>
          <h2 className="font-display text-h2 leading-h2 tracking-h2" style={{ color: '#0d0d0d' }}>
            Carta
          </h2>
          <div className="mx-auto mt-4 h-px w-16" style={{ backgroundColor: '#c8a96e' }} />
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center gap-1 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat)
                document.getElementById(`menu-${cat}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className={`px-5 py-2 text-body-sm tracking-label uppercase transition-colors duration-300 ${
                active === cat
                  ? 'text-white'
                  : 'text-text-muted hover:text-text'
              }`}
              style={active === cat ? { backgroundColor: '#c8a96e', color: '#0d0d0d' } : undefined}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Menu items by category */}
        {categories.map((cat) => (
          <div
            key={cat}
            id={`menu-${cat}`}
            className="scroll-mt-24 mb-16 last:mb-0"
          >
            <motion.h3
              className="font-display text-h3 leading-h3 tracking-h3 text-center mb-10"
              style={{ color: '#0d0d0d' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeQuartOut }}
            >
              {cat}
            </motion.h3>

            <div className="max-w-3xl mx-auto">
              <div style={{ backgroundColor: '#faf5eb', border: '1px solid #e5ddd0', borderRadius: '4px', padding: '2rem' }} className="space-y-8">
              {restaurant.menu[cat].map((item, i) => (
                <motion.div
                  key={item.name}
                  className="flex justify-between items-start gap-4 pb-6"
                  style={{ borderBottom: '1px solid #d4c9b6' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: easeQuartOut }}
                >
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="font-display text-h4 leading-h4 tracking-h4" style={{ color: '#0d0d0d' }}>
                        {item.name}
                      </h4>
                      <span
                        className="text-body-sm font-display whitespace-nowrap"
                        style={{ color: '#c8a96e' }}
                      >
                        {item.price}
                      </span>
                    </div>
                    <p className="text-body-sm mt-1.5" style={{ color: '#6b6358' }}>
                      {item.description}
                    </p>
                    {item.dietary && (
                      <div className="flex gap-2 mt-2">
                        {item.dietary.map((d) => (
                          <span
                            key={d}
                            className="text-label tracking-label uppercase px-2 py-0.5"
                            style={{ backgroundColor: '#ebe3d5', color: '#6b6358' }}
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              </div>
            </div>

            {cat !== 'Dolci' && (
              <div className="mx-auto mt-12 h-px w-24 opacity-30" style={{ backgroundColor: '#c8a96e' }} />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
