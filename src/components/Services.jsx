const services = [
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Applications Web',
    problem: `Vos processus métiers vous prennent trop de temps et d'énergie.`,
    solution: 'Je conçois des applications web sur-mesure qui automatisent vos tâches répétitives et centralisent vos données.',
    result: `Moins d'opérationnel, plus de valeur — votre équipe se concentre sur ce qui compte.`,
    tags: ['SaaS', 'Tableau de bord', 'API', 'Automatisation'],
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Sites Vitrine',
    problem: `Votre site actuel ne convertit pas — ou vous n'en avez pas encore.`,
    solution: 'Je crée des sites vitrines modernes, rapides et pensés pour donner confiance à vos visiteurs dès la première seconde.',
    result: 'Un outil de vente actif 24h/24 qui attire de nouveaux clients et reflète votre sérieux.',
    tags: ['Design premium', 'SEO', 'Mobile-first', 'Performant'],
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Automatisation & SaaS',
    problem: 'Vous perdez des heures sur des tâches manuelles qui pourraient être automatisées.',
    solution: `J'identifie vos points de friction et je développe des outils sur-mesure : workflows automatiques, intégrations, bots.`,
    result: 'Vos systèmes tournent seuls. Vous récupérez du temps et vous réduisez les erreurs humaines.',
    tags: ['Workflows', 'Intégrations', 'Stripe', 'Firebase'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 lg:py-36" style={{ background: '#0A0A0A' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-16 reveal">
          <span className="section-label">— Services</span>
          <h2
            className="font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.03em' }}
          >
            Ce que je construis pour vous
          </h2>
          <p style={{ color: '#A1A1AA', fontSize: 17, lineHeight: 1.65 }}>
            Pas de technologie pour la technologie. Chaque projet démarre par une question simple :
            quel résultat concret cela va-t-il produire pour votre activité ?
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="reveal glass-card rounded-2xl p-7 flex flex-col group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(99,102,241,0.12)', color: '#818CF8' }}
              >
                {s.icon}
              </div>

              <h3 className="font-bold text-white text-xl mb-5" style={{ letterSpacing: '-0.02em' }}>
                {s.title}
              </h3>

              {/* Problem / Solution / Result */}
              <div className="flex flex-col gap-4 flex-grow mb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'rgba(255,255,255,0.25)' }}>Problème</p>
                  <p style={{ color: '#A1A1AA', fontSize: 14, lineHeight: 1.6 }}>{s.problem}</p>
                </div>
                <div className="h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'rgba(255,255,255,0.25)' }}>Solution</p>
                  <p style={{ color: '#A1A1AA', fontSize: 14, lineHeight: 1.6 }}>{s.solution}</p>
                </div>
                <div className="h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: '#818CF8' }}>Résultat</p>
                  <p style={{ color: 'white', fontSize: 14, lineHeight: 1.6 }}>{s.result}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
