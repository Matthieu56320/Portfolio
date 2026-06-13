const plans = [
  {
    name: 'Site Essentiel',
    tagline: "L'essentiel pour être présent en ligne avec professionnalisme.",
    target: "Artisans, indépendants, petites entreprises.",
    price: '590',
    priceLabel: null,
    popular: false,
    features: [
      "Jusqu'à 5 pages",
      'Design responsive (mobile, tablette, desktop)',
      'Formulaire de contact',
      'Intégration Google Maps',
      'Mise en ligne incluse',
      '1 semaine de support après livraison',
    ],
    cta: 'Démarrer ce projet',
  },
  {
    name: 'Site Professionnel',
    tagline: 'Un site complet pour développer votre visibilité et votre crédibilité.',
    target: "Entreprises qui veulent aller plus loin.",
    price: '990',
    priceLabel: null,
    popular: true,
    features: [
      "Tout inclus dans l'offre Essentielle",
      'Galerie photos & médias',
      'Blog / Actualités',
      'SEO de base optimisé',
      'Gestion autonome du contenu',
      'Formulaires avancés',
      'Optimisation des performances',
    ],
    cta: 'Démarrer ce projet',
  },
  {
    name: 'Projet sur-mesure',
    tagline: 'Des fonctionnalités avancées adaptées à vos besoins spécifiques.',
    target: "Entreprises avec des besoins spécifiques.",
    price: '1 990',
    priceLabel: 'À partir de',
    popular: false,
    features: [
      "Tout inclus dans l'offre Professionnelle",
      'Comptes utilisateurs / Espace client',
      'Tableau de bord personnalisé',
      'Paiements en ligne (Stripe)',
      'Emails automatiques',
      'Automatisations métiers',
      'Intégrations API tierces',
    ],
    cta: 'Demander un devis',
  },
]

const addons = [
  { name: 'Création de contenu (textes)', price: '+100 à 300 €' },
  { name: 'Création de logo', price: '+150 €' },
  { name: 'Page supplémentaire', price: '+50 € / page' },
  { name: 'Maintenance & mises à jour', price: '20 à 50 € / mois' },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 lg:py-36" style={{ background: '#0D0D0D' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-16 reveal">
          <span className="section-label">— Tarifs</span>
          <h2
            className="font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.03em' }}
          >
            Des tarifs clairs, sans surprises
          </h2>
          <p style={{ color: '#A1A1AA', fontSize: 17, lineHeight: 1.65 }}>
            Chaque projet démarre par un devis gratuit et détaillé. Vous savez exactement
            ce que vous payez, et pourquoi.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 reveal">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col ${plan.popular ? 'pricing-popular' : 'glass-card'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold tracking-widest whitespace-nowrap uppercase"
                    style={{ background: 'rgba(99,102,241,0.20)', border: '1px solid rgba(99,102,241,0.35)', color: '#818CF8' }}
                  >
                    Populaire
                  </span>
                </div>
              )}

              <div className="mb-2">
                <h3 className="font-bold text-white text-lg" style={{ letterSpacing: '-0.01em' }}>{plan.name}</h3>
                <p className="mt-1 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{plan.target}</p>
              </div>

              <div className="py-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', marginBottom: '1.5rem' }}>
                {plan.priceLabel && (
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.28)' }}>{plan.priceLabel}</p>
                )}
                <div className="flex items-end gap-1">
                  <span className="font-bold text-white" style={{ fontSize: 40, letterSpacing: '-0.04em', lineHeight: 1 }}>
                    {plan.price}
                  </span>
                  <span className="mb-1 text-lg" style={{ color: 'rgba(255,255,255,0.4)' }}>€</span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    <svg className="flex-shrink-0 mt-0.5" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke={plan.popular ? '#818CF8' : 'rgba(255,255,255,0.35)'} strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`text-center py-3.5 px-5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'btn-accent'
                    : 'btn-primary'
                }`}
                style={!plan.popular ? { border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)' } : {}}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div
          className="reveal rounded-2xl p-6 lg:p-8"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.28)' }}>
            Options complémentaires
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {addons.map(({ name, price }) => (
              <div
                key={name}
                className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{name}</p>
                <p className="text-xs font-semibold text-white whitespace-nowrap">{price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-10 text-center">
          <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>Pas sûr de l'offre la plus adaptée ?</p>
          <a
            href="#contact"
            className="btn-accent inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold"
          >
            Devis gratuit — réponse sous 24h
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
