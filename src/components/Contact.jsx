import { useState } from 'react'

const projectTypes = [
  { value: '', label: 'Type de projet...' },
  { value: 'vitrine', label: 'Site Vitrine' },
  { value: 'ecommerce', label: 'Boutique E-Commerce' },
  { value: 'automatisation', label: 'Automatisation / Sur-mesure' },
  { value: 'autre', label: 'Autre' },
]

const contactInfo = [
  {
    label: 'E-mail',
    value: 'matthieustudio@proton.me',
    href: 'mailto:matthieustudio@proton.me',
  },
  {
    label: 'Téléphone',
    value: '07 49 70 56 09',
    href: 'tel:+33749705609',
  },
  {
    label: 'Localisation',
    value: 'Morbihan & partout en France',
    href: null,
  },
]

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Server error')

      setStatus('success')
      setForm({ name: '', email: '', projectType: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0c1829]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="section-divider mx-auto" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">
            Démarrons votre projet
          </h2>
          <p className="text-white/45 text-base sm:text-lg max-w-xl mx-auto">
            Devis gratuit et sans engagement. Je vous réponds sous 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-5">Contact direct</h3>
              <div className="flex flex-col gap-5">
                {contactInfo.map(({ label, value, href }) => (
                  <div key={label}>
                    <p className="text-white/30 text-xs uppercase tracking-widest mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="text-white text-sm font-medium hover:text-white/70 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">{value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="glass-card rounded-2xl p-5"
              style={{ borderLeft: '2px solid rgba(255,255,255,0.20)' }}
            >
              <p className="text-white/55 text-sm leading-relaxed">
                <strong className="text-white">Devis gratuit et sans engagement</strong> — Je prends le temps de comprendre votre activité pour vous proposer la solution la plus adaptée.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ border: '1px solid rgba(74,222,128,0.3)', background: 'rgba(74,222,128,0.08)' }}
                  >
                    <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white">Message envoyé !</h4>
                  <p className="text-white/45 text-sm max-w-xs">
                    Merci pour votre message. Je vous répondrai généralement sous 24h.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-white/40 text-sm hover:text-white/70 transition-colors underline underline-offset-4"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/35 text-xs uppercase tracking-widest block mb-2">
                        Nom / Entreprise <span className="text-white/50">*</span>
                      </label>
                      <input
                        type="text" name="name" value={form.name}
                        onChange={handleChange} required
                        placeholder="Julie Dupont"
                        className="form-input w-full rounded-xl px-4 py-3 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-white/35 text-xs uppercase tracking-widest block mb-2">
                        E-mail <span className="text-white/50">*</span>
                      </label>
                      <input
                        type="email" name="email" value={form.email}
                        onChange={handleChange} required
                        placeholder="julie@exemple.fr"
                        className="form-input w-full rounded-xl px-4 py-3 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white/35 text-xs uppercase tracking-widest block mb-2">Type de projet</label>
                    <select
                      name="projectType" value={form.projectType} onChange={handleChange}
                      className="form-input w-full rounded-xl px-4 py-3 text-sm appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.25)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                        backgroundSize: '1.1rem',
                      }}
                    >
                      {projectTypes.map(({ value, label }) => (
                        <option key={value} value={value} className="bg-[#0c1829] text-white">{label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-white/35 text-xs uppercase tracking-widest block mb-2">
                      Décrivez votre projet <span className="text-white/50">*</span>
                    </label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Votre activité, vos objectifs, vos inspirations, votre délai souhaité..."
                      className="form-input w-full rounded-xl px-4 py-3 text-sm resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm text-center">
                      Une erreur est survenue. Réessayez ou contactez-moi directement par e-mail.
                    </p>
                  )}

                  <button
                    type="submit" disabled={status === 'sending'}
                    className="btn-primary w-full py-3.5 rounded-xl bg-white text-[#07101f] font-semibold text-sm disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Envoi en cours...
                      </>
                    ) : 'Envoyer ma demande'}
                  </button>

                  <p className="text-center text-white/25 text-xs">
                    Sans engagement · Réponse sous 24h · Devis gratuit
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}