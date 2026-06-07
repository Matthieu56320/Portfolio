const plans = [
  {
    name: 'Site Essentiel',
    tagline: "L'essentiel pour être présent en ligne avec professionnalisme.",
    target: "Idéal pour les artisans, indépendants et petites entreprises.",
    price: '590',
    priceLabel: null,
    popular: false,
    features: [
      "Jusqu'à 5 pages",
      'Design responsive (mobile, tablette, PC)',
      'Formulaire de contact',
      'Intégration Google Maps',
      'Mise en ligne incluse',
      '1 semaine de support après livraison',
    ],
    cta: 'Choisir ce pack',
  },
  {
    name: 'Site Professionnel',
    tagline: 'Un site complet pour développer votre visibilité et votre crédibilité.',
    target: "Pour les entreprises qui veulent aller plus loin.",
    price: '990',
    priceLabel: null,
    popular: true,
    features: [
      "Tout inclus dans l'offre Essentielle",
      'Galerie photos',
      'Blog / Actualités',
      'SEO de base',
      'Gestion autonome du contenu',
      'Formulaires avancés',
      'Optimisation des performances',
    ],
    cta: 'Choisir ce pack',
  },
  {
    name: 'Projet sur mesure',
    tagline: 'Des fonctionnalités avancées adaptées à vos besoins spécifiques.',
    target: "Pour les entreprises avec des besoins spécifiques et des fonctionnalités sur mesure.",
    price: '1 990',
    priceLabel: 'À partir de',
    popular: false,
    features: [
      "Tout inclus dans l'offre Professionnelle",
      'Comptes utilisateurs / Espace client',
      'Tableau de bord personnalisé',
      'Système de réservations ou paiements en ligne',
      'Suivi des commandes ou des demandes',
      'Gestion des avis clients',
      'Envoi d\'e-mails automatiques',
      'Automatisations métiers',
      'Et bien plus encore…',
    ],
    cta: 'Demander un devis',
    ctaVariant: 'outline',
  },
]

const addons = [
  { name: 'Création de contenu (textes)', price: '+100 à 300 €' },
  { name: 'Création de logo', price: '+150 €' },
  { name: 'Recherche / retouche d\'images', price: '+50 €' },
  { name: 'Page supplémentaire', price: '+50 € / page' },
  { name: 'Maintenance & mises à jour', price: '20 à 50 € / mois' },
  { name: 'Modifications après la 1ère semaine', price: 'Sur devis' },
]

const guarantees = [
  {
    title: 'Sites sécurisés',
    desc: 'Technologies modernes et hébergement fiable.',
  },
  {
    title: 'Livraison rapide',
    desc: 'Délais respectés pour lancer votre activité sereinement.',
  },
  {
    title: 'Accompagnement',
    desc: 'Je vous accompagne avant, pendant et après la livraison.',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-[#07101f]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="section-divider mx-auto" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">
            Services &amp; Tarifs
          </h2>
          <p className="text-white/45 text-base sm:text-lg max-w-xl mx-auto">
            Des offres claires, transparentes, adaptées à chaque étape de votre développement.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card relative rounded-2xl p-7 flex flex-col ${plan.popular ? 'pricing-popular' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="px-3 py-1 rounded-full text-white text-xs font-semibold tracking-wide whitespace-nowrap"
                    style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.20)' }}
                  >
                    POPULAIRE
                  </span>
                </div>
              )}

              {/* Name + tagline */}
              <h3 className="text-lg font-extrabold text-white mb-1">{plan.name}</h3>
              <p className="text-white/40 text-xs leading-relaxed mb-1">{plan.tagline}</p>
              <p className="text-white/55 text-xs leading-relaxed mb-5 italic">{plan.target}</p>

              {/* Price */}
              <div className="mb-7 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                {plan.priceLabel && (
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-1">{plan.priceLabel}</p>
                )}
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-white leading-none">{plan.price}</span>
                  <span className="text-white/40 text-lg mb-0.5">€</span>
                </div>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-8 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/60">
                    <svg className="w-4 h-4 text-white/30 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`btn-primary text-center py-3 px-5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-white text-[#07101f]'
                    : 'border border-white/15 text-white/70 hover:bg-white/8 hover:text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Guarantees row */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 p-6 rounded-2xl"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {guarantees.map(({ title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-white/40 text-xs mt-0.5 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <h3 className="text-xs font-semibold text-white/35 uppercase tracking-widest mb-5">
            Options &amp; Services complémentaires
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {addons.map(({ name, price }) => (
              <div
                key={name}
                className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="text-white/50 text-xs">{name}</p>
                <p className="text-white font-semibold text-xs whitespace-nowrap">{price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-white/35 text-sm mb-4">Un doute sur l'offre la plus adaptée ?</p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#07101f] font-semibold text-sm"
          >
            Devis gratuit et sans engagement
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}