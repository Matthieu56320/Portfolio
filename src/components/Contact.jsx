import { useState } from 'react'

const projectTypes = [
  { value: '', label: 'Type de projet...' },
  { value: 'vitrine', label: 'Site Vitrine' },
  { value: 'ecommerce', label: 'Boutique E-Commerce' },
  { value: 'webapp', label: 'Application Web / SaaS' },
  { value: 'automatisation', label: 'Automatisation / Outil sur-mesure' },
  { value: 'autre', label: 'Autre' },
]

const contactInfo = [
  { label: 'Email', value: 'matthieustudio@proton.me', href: 'mailto:matthieustudio@proton.me' },
  { label: 'Téléphone', value: '07 49 70 56 09', href: 'tel:+33749705609' },
  { label: 'Localisation', value: 'Morbihan & toute la France', href: null },
]

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

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
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', projectType: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-28 lg:py-36" style={{ background: '#0D0D0D' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-16 reveal">
          <span className="section-label">— Contact</span>
          <h2
            className="font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.03em' }}
          >
            Démarrons votre projet
          </h2>
          <p style={{ color: '#A1A1AA', fontSize: 17, lineHeight: 1.65 }}>
            Devis gratuit et sans engagement. Je vous réponds sous 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 reveal">
          {/* Left info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="glass-card rounded-2xl p-7">
              <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: 'rgba(255,255,255,0.28)' }}>
                Contact direct
              </p>
              <div className="flex flex-col gap-6">
                {contactInfo.map(({ label, value, href }) => (
                  <div key={label}>
                    <p className="text-xs font-medium uppercase tracking-widest mb-1.5" style={{ color: 'rgba(255,255,255,0.28)' }}>{label}</p>
                    {href ? (
                      <a href={href} className="text-white text-sm font-medium hover:text-accent-glow transition-colors" style={{ '--tw-text-opacity': 1 }}>
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
              className="rounded-2xl p-6"
              style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.20)' }}
            >
              <p className="text-white font-semibold text-sm mb-2">Premier appel offert</p>
              <p style={{ color: '#A1A1AA', fontSize: 14, lineHeight: 1.65 }}>
                30 minutes pour échanger sur votre projet. Je vous donne
                une estimation honnête, sans engagement.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-7 lg:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-4 py-14 text-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)' }}
                  >
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#34d399" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white">Message envoyé !</h4>
                  <p style={{ color: '#A1A1AA', fontSize: 14, maxWidth: 280 }}>
                    Merci ! Je vous répondrai dans les 24h.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-sm hover:text-white transition-colors"
                    style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'underline', textUnderlineOffset: 4 }}
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
                        Nom / Entreprise *
                      </label>
                      <input
                        type="text" name="name" value={form.name}
                        onChange={handleChange} required
                        placeholder="Julie Dupont"
                        className="form-input w-full rounded-xl px-4 py-3 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
                        Email *
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
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
                      Type de projet
                    </label>
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
                        <option key={value} value={value} style={{ background: '#151515', color: 'white' }}>{label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
                      Décrivez votre projet *
                    </label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Votre activité, votre objectif, vos inspirations, votre délai..."
                      className="form-input w-full rounded-xl px-4 py-3 text-sm resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm text-center">
                      Une erreur est survenue. Réessayez ou écrivez-moi directement.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-accent w-full py-3.5 rounded-xl text-sm font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Envoi en cours...
                      </>
                    ) : 'Envoyer ma demande'}
                  </button>

                  <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.22)' }}>
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
