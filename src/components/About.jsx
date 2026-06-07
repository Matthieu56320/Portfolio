const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'Vite', icon: '⚡' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'Intégration API', icon: '🔗' },
  { name: 'Google Apps Script', icon: '📊' },
  { name: 'Automatisation', icon: '🤖' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'SQL / NoSQL', icon: '🗄️' },
]

const traits = [
  {
    title: 'Performance first',
    desc: 'Sites optimisés pour un chargement éclair et un excellent score Lighthouse. Chaque milliseconde compte.',
  },
  {
    title: 'Mobile avant tout',
    desc: 'Chaque interface est conçue et testée sur mobile en priorité. Votre site est parfait sur tous les écrans.',
  },
  {
    title: 'Sur-mesure & évolutif',
    desc: "Pas de templates génériques. Une architecture pensée pour s'adapter et grandir avec votre activité.",
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0c1829]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-14">
          <div className="section-divider" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">
            À propos <span className="text-white/40">&amp;</span> Expertise
          </h2>
          <p className="text-white/45 text-base sm:text-lg max-w-lg">
            Développeur indépendant, je transforme vos idées en produits web qui performent.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-14">
          {/* Text */}
          <div className="flex flex-col gap-5">
            <p className="text-white/70 text-base leading-relaxed">
              Je suis <strong className="text-white font-semibold">Matthieu Berthier</strong>, développeur web freelance spécialisé dans la création de sites modernes et performants pour les indépendants, artisans et petites entreprises.
            </p>
            <p className="text-white/50 text-base leading-relaxed">
              Mon approche : comprendre votre activité en profondeur, livrer un produit qui vous ressemble, et rester disponible après la mise en ligne. Polyvalent, je couvre aussi bien les sites vitrines élégants, les boutiques e-commerce complètes, que les automatisations métier.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-2">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#07101f] text-sm font-semibold"
              >
                Discutons de votre projet
              </a>
              <a
                href="mailto:matthieustudio@proton.me"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/12 text-white/60 text-sm hover:text-white transition-colors"
              >
                matthieustudio@proton.me
              </a>
            </div>
          </div>

          {/* Traits */}
          <div className="flex flex-col gap-3">
            {traits.map(({ title, desc }) => (
              <div
                key={title}
                className="glass-card rounded-xl p-5"
              >
                <h4 className="text-white font-semibold text-sm mb-1.5">{title}</h4>
                <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <p className="text-xs uppercase tracking-widest text-white/30 mb-4">Stack & Outils</p>
          <div className="flex flex-wrap gap-2">
            {skills.map(({ name, icon }) => (
              <span key={name} className="skill-badge flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium cursor-default">
                <span className="text-base leading-none">{icon}</span>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}