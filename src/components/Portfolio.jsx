const projects = [
  {
    title: 'Maison Julie — Boutique E-Commerce',
    category: 'E-Commerce & Application Web',
    problem: `Une créatrice de bijoux artisanaux vendait uniquement via Instagram, sans moyen d'encaisser en ligne ni de gérer ses commandes.`,
    solution: `Boutique e-commerce complète avec catalogue, panier, paiement Stripe, espace client Firebase Auth, et tableau de bord admin pour gérer les commandes et les expéditions.`,
    result: 'Première vente en ligne 48h après la mise en ligne. Gestion des commandes entièrement autonome.',
    tags: ['React', 'Node.js', 'Stripe', 'Firebase', 'Railway'],
    metrics: [
      { value: '48h', label: 'Première vente' },
      { value: '100%', label: 'Autonomie client' },
    ],
    accent: '#4F46E5',
  },
  {
    title: 'MB Studio — Portfolio Freelance',
    category: 'Site Vitrine & Branding',
    problem: 'Absence de présence en ligne professionnelle pour démarcher de nouveaux clients et légitimer le positionnement premium.',
    solution: `Site vitrine avec design éditorial sombre, formulaire de contact relié à un backend Express, envoi d'emails via Resend, déployé en production sur Railway.`,
    result: 'Identité professionnelle immédiate, pipeline de prospection automatisé.',
    tags: ['React', 'Vite', 'Tailwind', 'Express', 'Resend'],
    metrics: [
      { value: '2j', label: 'Délai de livraison' },
      { value: 'A+', label: 'Score Lighthouse' },
    ],
    accent: '#6366F1',
  },
  {
    title: `Outil d'audit de prospects`,
    category: 'Automatisation & SaaS interne',
    problem: 'La prospection manuelle depuis Google Maps prenait plusieurs heures par semaine, avec une qualification approximative des leads.',
    solution: 'Application Python avec interface Tkinter, import CSV Google Maps, analyse IA via Mistral pour qualifier les prospects en français, export des leads chauds.',
    result: 'Prospection 10x plus rapide. Qualification automatique avec score de pertinence IA.',
    tags: ['Python', 'Tkinter', 'Mistral AI', 'Google Maps', 'CSV'],
    metrics: [
      { value: '×10', label: 'Rapidité' },
      { value: 'IA', label: 'Qualification auto' },
    ],
    accent: '#818CF8',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 lg:py-36" style={{ background: '#0D0D0D' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-16 reveal">
          <span className="section-label">— Projets</span>
          <h2
            className="font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.03em' }}
          >
            Études de cas récentes
          </h2>
          <p style={{ color: '#A1A1AA', fontSize: 17, lineHeight: 1.65 }}>
            Chaque projet est une réponse à un problème concret. Voici comment je travaille
            et les résultats obtenus.
          </p>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="reveal glass-card rounded-2xl overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="grid lg:grid-cols-5">
                {/* Left colored band */}
                <div
                  className="lg:col-span-1 p-7 flex flex-col justify-between min-h-[180px]"
                  style={{ background: `${p.accent}14`, borderRight: `1px solid ${p.accent}22` }}
                >
                  <div>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: `${p.accent}20`, color: p.accent }}
                    >
                      {p.category}
                    </span>
                  </div>
                  {/* Metrics */}
                  <div className="flex flex-col gap-4 mt-6 lg:mt-0">
                    {p.metrics.map((m, j) => (
                      <div key={j}>
                        <p
                          className="font-bold"
                          style={{ color: p.accent, fontSize: 28, letterSpacing: '-0.04em', lineHeight: 1 }}
                        >
                          {m.value}
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, marginTop: 2 }}>{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right content */}
                <div className="lg:col-span-4 p-7 lg:p-8">
                  <h3
                    className="font-bold text-white mb-6"
                    style={{ fontSize: 22, letterSpacing: '-0.02em' }}
                  >
                    {p.title}
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.25)' }}>Problème</p>
                      <p style={{ color: '#A1A1AA', fontSize: 14, lineHeight: 1.65 }}>{p.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.25)' }}>Solution</p>
                      <p style={{ color: '#A1A1AA', fontSize: 14, lineHeight: 1.65 }}>{p.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: p.accent }}>Résultat</p>
                      <p style={{ color: 'white', fontSize: 14, lineHeight: 1.65, fontWeight: 500 }}>{p.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
