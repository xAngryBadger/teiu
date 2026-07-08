import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { restaurant } from '../data/restaurant'

type Step = 1 | 2 | 3 | 4 | 5

interface FormData {
  date: string
  time: string
  guests: number
  name: string
  phone: string
  email: string
  notes: string
}

const timeSlots = [
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '19:00', '19:30', '20:00', '20:30', '21:00', '21:30',
]

const steps: Step[] = [1, 2, 3, 4, 5]

export default function ReservationSection() {
  const [step, setStep] = useState<Step>(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormData>({
    date: '',
    time: '',
    guests: 2,
    name: '',
    phone: '',
    email: '',
    notes: '',
  })

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function next() {
    if (step < 5) setStep((s) => (s + 1) as Step)
  }

  function prev() {
    if (step > 1) setStep((s) => (s - 1) as Step)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reservation" className="py-24" style={{ backgroundColor: '#0d0d0d' }}>
      <div className="container max-w-2xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        >
          <p className="text-primary text-eyebrow tracking-eyebrow uppercase mb-3">
            Reserve
          </p>
          <h2 className="font-display text-h2 leading-h2 tracking-h2 text-white">
            Sua Mesa
          </h2>
          <div className="mx-auto mt-4 h-px w-16" style={{ backgroundColor: '#c8a96e' }} />
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                style={{ backgroundColor: '#c8a96e' }}
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#0d0d0d" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display text-h3 leading-h3 tracking-h3 text-white mb-3">
                Reserva Confirmada!
              </h3>
              <p className="text-body" style={{ color: '#a09888' }}>
                {restaurant.locations[0].city} — {form.date} às {form.time}
              </p>
              <p className="text-body-sm mt-2" style={{ color: '#6b6358' }}>
                Enviaremos a confirmação para {form.email}
              </p>
              <button
                onClick={() => { setSubmitted(false); setStep(1); setForm({ date: '', time: '', guests: 2, name: '', phone: '', email: '', notes: '' }) }}
                className="mt-8 border border-primary text-primary px-6 py-2 text-body-sm tracking-label uppercase hover:bg-primary hover:text-black transition-colors duration-300"
              >
                Nova Reserva
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            >
              {/* Progress */}
              <div className="flex justify-center gap-2 mb-10">
                {steps.map((s) => (
                  <div
                    key={s}
                    className="w-8 h-8 flex items-center justify-center text-body-sm transition-colors duration-300"
                    style={{
                      backgroundColor: s === step ? '#c8a96e' : s < step ? '#c8a96e44' : '#1a1a1a',
                      color: s <= step ? '#0d0d0d' : '#3a3a3a',
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    className="text-center"
                  >
                    <p className="text-body tracking-body text-white mb-6">Qual data você prefere?</p>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => update('date', e.target.value)}
                      className="w-full max-w-xs mx-auto px-4 py-3 text-body text-center border"
                      style={{ backgroundColor: '#1a1a1a', borderColor: '#2a2a2a', color: '#f5efe5' }}
                      required
                    />
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    className="text-center"
                  >
                    <p className="text-body tracking-body text-white mb-6">Que horário?</p>
                    <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => update('time', t)}
                          className="px-3 py-2 text-body-sm transition-colors duration-300"
                          style={{
                            backgroundColor: form.time === t ? '#c8a96e' : '#1a1a1a',
                            color: form.time === t ? '#0d0d0d' : '#a09888',
                            border: '1px solid',
                            borderColor: form.time === t ? '#c8a96e' : '#2a2a2a',
                          }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    className="text-center"
                  >
                    <p className="text-body tracking-body text-white mb-6">Número de pessoas</p>
                    <div className="flex items-center justify-center gap-6">
                      <button
                        type="button"
                        onClick={() => update('guests', Math.max(1, form.guests - 1))}
                        className="w-10 h-10 flex items-center justify-center text-lg border"
                        style={{ borderColor: '#2a2a2a', color: '#a09888' }}
                      >
                        −
                      </button>
                      <span className="font-display text-h3 leading-h3 text-white w-12 text-center">
                        {form.guests}
                      </span>
                      <button
                        type="button"
                        onClick={() => update('guests', Math.min(20, form.guests + 1))}
                        className="w-10 h-10 flex items-center justify-center text-lg border"
                        style={{ borderColor: '#2a2a2a', color: '#a09888' }}
                      >
                        +
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    className="max-w-sm mx-auto space-y-4"
                  >
                    <p className="text-body tracking-body text-white text-center mb-6">Seus dados</p>
                    <input
                      type="text"
                      placeholder="Nome completo"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className="w-full px-4 py-3 text-body border"
                      style={{ backgroundColor: '#1a1a1a', borderColor: '#2a2a2a', color: '#f5efe5' }}
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Telefone"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="w-full px-4 py-3 text-body border"
                      style={{ backgroundColor: '#1a1a1a', borderColor: '#2a2a2a', color: '#f5efe5' }}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="w-full px-4 py-3 text-body border"
                      style={{ backgroundColor: '#1a1a1a', borderColor: '#2a2a2a', color: '#f5efe5' }}
                      required
                    />
                  </motion.div>
                )}

                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    className="max-w-sm mx-auto"
                  >
                    <p className="text-body tracking-body text-white text-center mb-6">Alguma observação?</p>
                    <textarea
                      placeholder="Alergias, ocasião especial, preferências..."
                      value={form.notes}
                      onChange={(e) => update('notes', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 text-body border resize-none"
                      style={{ backgroundColor: '#1a1a1a', borderColor: '#2a2a2a', color: '#f5efe5' }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between mt-10 max-w-sm mx-auto">
                <button
                  type="button"
                  onClick={prev}
                  className="px-5 py-2 text-body-sm tracking-label uppercase border"
                  style={{ borderColor: '#2a2a2a', color: '#6b6358' }}
                >
                  Voltar
                </button>

                {step < 5 ? (
                  <button
                    type="button"
                    onClick={next}
                    className="px-5 py-2 text-body-sm tracking-label uppercase"
                    style={{ backgroundColor: '#c8a96e', color: '#0d0d0d' }}
                  >
                    Avançar
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-5 py-2 text-body-sm tracking-label uppercase"
                    style={{ backgroundColor: '#c8a96e', color: '#0d0d0d' }}
                  >
                    Confirmar
                  </button>
                )}
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
