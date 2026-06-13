export default function CTA() {
  return (
    <section className="py-28 lg:py-36" style={{ background: '#0A0A0A' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="reveal relative rounded-3xl overflow-hidden px-8 py-20 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(79,70,229,0.15) 0%, rgba(99,102,241,0.08) 50%, rgba(129,140,248,0.12) 100%)',
            border: '1px solid rgba(99,102,241,0.25)',
          }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(79,70,229,0.20) 0%, transparent 60%)',
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="section-label justify-center mb-6">— Prêt à démarrer ?</span>

            <h2
              className="font-bold text-white mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', letterSpacing: '-0.035em', lineHeight: 1.1 }}
            >
              Transformons votre idée en produit qui convertit.
            </h2>

            <p
              className="mb-10"
              style={{ color: '#A1A1AA', fontSize: 18, lineHeight: 1.65 }}
            >
              Premier appel gratuit de 30 minutes. Sans engagement.
              Je vous dis honnêtement si je peux vous aider et comment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-accent px-9 py-4 rounded-xl text-base font-semibold"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                Réserver un appel gratuit
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="mailto:matthieustudio@proton.me"
                className="btn-primary px-9 py-4 rounded-xl text-base font-semibold"
                style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#A1A1AA', display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                Envoyer un email
              </a>
            </div>

            <p className="mt-7" style={{ color: 'rgba(255,255,255,0.28)', fontSize: 13 }}>
              Réponse sous 24h · Devis gratuit · Aucun engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
