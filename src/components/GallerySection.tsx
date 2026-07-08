import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { restaurant } from '../data/restaurant'
import ImagePlaceholder from './ImagePlaceholder'
import { easeQuartOut } from '../data/motion'

type Tab = 'photos' | 'awards'

export default function GallerySection() {
  const [tab, setTab] = useState<Tab>('photos')

  return (
    <section id="gallery" className="py-24" style={{ backgroundColor: '#ebe3d5' }}>
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeQuartOut }}
        >
          <p className="text-primary text-eyebrow tracking-eyebrow uppercase mb-3">
            Momentos
          </p>
          <h2 className="font-display text-h2 leading-h2 tracking-h2" style={{ color: '#0d0d0d' }}>
            Galeria
          </h2>
          <div className="mx-auto mt-4 h-px w-16" style={{ backgroundColor: '#c8a96e' }} />
        </motion.div>

        {/* Tab toggle */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setTab('photos')}
            className={`px-6 py-2 text-body-sm tracking-label uppercase transition-colors duration-300 ${
              tab === 'photos'
                ? 'text-white'
                : 'text-text-muted hover:text-text'
            }`}
            style={tab === 'photos' ? { backgroundColor: '#c8a96e', color: '#0d0d0d' } : undefined}
          >
            Fotos
          </button>
          <button
            onClick={() => setTab('awards')}
            className={`px-6 py-2 text-body-sm tracking-label uppercase transition-colors duration-300 ${
              tab === 'awards'
                ? 'text-white'
                : 'text-text-muted hover:text-text'
            }`}
            style={tab === 'awards' ? { backgroundColor: '#c8a96e', color: '#0d0d0d' } : undefined}
          >
            Prêmios & Imprensa
          </button>
        </div>

        <AnimatePresence mode="wait">
          {tab === 'photos' && (
            <motion.div
              key="photos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: easeQuartOut }}
            >
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {restaurant.gallery.map((item, i) => (
                  <motion.div
                    key={i}
                    className="break-inside-avoid relative overflow-hidden group cursor-pointer"
                    style={{ minHeight: i % 3 === 0 ? '320px' : '220px' }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: easeQuartOut }}
                  >
                    <ImagePlaceholder type={item.type} label={item.alt} className="absolute inset-0" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {tab === 'awards' && (
            <motion.div
              key="awards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: easeQuartOut }}
              className="max-w-3xl mx-auto space-y-6"
            >
              {restaurant.awards.map((award, i) => (
                <motion.div
                  key={award.title}
                  className="flex items-start gap-4 p-6"
                  style={{ backgroundColor: '#f5efe5' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: easeQuartOut }}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-lg"
                    style={{ backgroundColor: '#c8a96e', color: '#0d0d0d' }}
                  >
                    ★
                  </div>
                  <div>
                    <h4 className="font-display text-h4 leading-h4 tracking-h4" style={{ color: '#0d0d0d' }}>
                      {award.title}
                    </h4>
                    <p className="text-body-sm mt-1" style={{ color: '#c8a96e' }}>
                      {award.issuer} · {award.year}
                    </p>
                    <p className="text-body-sm mt-1" style={{ color: '#6b6358' }}>
                      {award.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
