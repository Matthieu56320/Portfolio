const steps = [
  {
    num: '01',
    title: 'Découverte',
    desc: 'Un appel de 30 minutes pour comprendre votre activité, vos objectifs et vos contraintes. Pas de jargon technique — on parle résultats.',
  },
  {
    num: '02',
    title: 'Conception',
    desc: 'Je vous soumets une proposition claire : structure, fonctionnalités, délais et budget. Vous validez avant qu\'une ligne de code soit écrite.',
  },
  {
    num: '03',
    title: 'Développement',
    desc: 'Développement itératif avec des points réguliers. Vous voyez l\'avancement et pouvez ajuster en cours de route.',
  },
  {
    num: '04',
    title: 'Livraison',
    desc: 'Mise en ligne, tests complets, formation à la prise en main. Vous partez autonome, avec tout ce qu\'il faut pour gérer votre produit.',
  },
  {
    num: '05',
    title: 'Suivi',
    desc: 'Support disponible après livraison. Je reste un partenaire dans la durée — pas un prestataire qui disparaît une fois la facture payée.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-28 lg:py-36" style={{ background: '#0A0A0A' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — header */}
          <div className="reveal lg:sticky lg:top-28">
            <span className="section-label">— Processus</span>
            <h2
              className="font-bold leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.03em' }}
            >
              Comment on travaille ensemble
            </h2>
            <p style={{ color: '#A1A1AA', fontSize: 17, lineHeight: 1.65, maxWidth: 400 }}>
              Un processus simple et transparent, conçu pour éliminer les surprises
              et vous livrer exactement ce dont vous avez besoin.
            </p>

            <div className="mt-10">
              <a
                href="#contact"
                className="btn-accent inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold"
              >
                Démarrer maintenant
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div
                key={i}
                className="reveal flex gap-6 pb-8"
                style={{
                  transitionDelay: `${i * 70}ms`,
                  borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  marginBottom: i < steps.length - 1 ? '2rem' : 0,
                }}
              >
                {/* Number */}
                <div className="flex-shrink-0">
                  <span
                    className="font-bold"
                    style={{ fontSize: 13, color: 'rgba(255,255,255,0.18)', letterSpacing: '0.05em', fontVariantNumeric: 'tabular-nums' }}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="font-semibold text-white mb-2"
                    style={{ fontSize: 17, letterSpacing: '-0.01em' }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: '#A1A1AA', fontSize: 14, lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
