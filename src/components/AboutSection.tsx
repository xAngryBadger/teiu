import { motion } from 'motion/react'
import { restaurant } from '../data/restaurant'

export default function AboutSection() {
  return (
    <section id="about" className="py-24" style={{ backgroundColor: '#0d0d0d' }}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            <p className="text-primary text-eyebrow tracking-eyebrow uppercase mb-3">
              La Nostra Storia
            </p>
            <h2 className="font-display text-h2 leading-h2 tracking-h2 text-white mb-6">
              Tradição & Inovação
            </h2>
            <div className="space-y-4 text-body tracking-body" style={{ color: '#a09888' }}>
              <p>
                Fundado em {restaurant.founded} na vibrante São Paulo, o Ristorante Villa Bellini nasceu
                do sonho do Chef {restaurant.chef.name} de trazer a autêntica cozinha italiana
                contemporânea para o Brasil.
              </p>
              <p>
                Três gerações de tradição culinária da Emilia-Romagna encontram-se com os ingredientes
                frescos e a energia do Novo Mundo. Cada prato é uma carta de amor à Itália —
                executada com a precisão de quem aprendeu na fonte e a alma de quem ousa inovar.
              </p>
              <p>
                Hoje, com unidades em São Paulo, Milão e Nova York, o Villa Bellini é reconhecido
                internacionalmente como um dos grandes expoentes da cozinha italiana fora da Itália.
              </p>
            </div>

            {/* Chef quote */}
            <motion.blockquote
              className="mt-8 pl-6 border-l-2 text-h3 font-display leading-h3 tracking-h3 text-white"
              style={{ borderColor: '#c8a96e' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              "Cozinhar é compartilhar um pedaço da sua história."
              <footer className="mt-2 text-body-sm tracking-body" style={{ color: '#6b6358' }}>
                — {restaurant.chef.name}, Chef & Fundador
              </footer>
            </motion.blockquote>
          </motion.div>

          {/* Chef image placeholder */}
          <motion.div
            className="relative aspect-[3/4] w-full overflow-hidden"
            style={{ backgroundColor: '#1a1a1a' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-2 opacity-20" viewBox="0 0 48 48" fill="none" stroke="#c8a96e" strokeWidth="1">
                  <circle cx="24" cy="16" r="8" />
                  <path d="M8 44c0-8.84 7.16-16 16-16s16 7.16 16 16" />
                </svg>
                <p className="text-label tracking-label uppercase" style={{ color: '#3a3a3a' }}>
                  Chef {restaurant.chef.name}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
