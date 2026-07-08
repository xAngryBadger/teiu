import { motion } from 'motion/react'
import { restaurant } from '../data/restaurant'
import ImagePlaceholder from './ImagePlaceholder'
import { easeQuartOut } from '../data/motion'

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
            transition={{ duration: 0.8, ease: easeQuartOut }}
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeQuartOut }}
          >
            <ImagePlaceholder type="chef" label={`Chef ${restaurant.chef.name}`} className="absolute inset-0" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
