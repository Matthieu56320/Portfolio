const testimonials = [
  {
    quote: "Matthieu a livré notre boutique en ligne en deux semaines, bien avant nos attentes. Le site est élégant, rapide et mes clientes l'adorent. Je gère tout moi-même maintenant sans avoir besoin d'aide technique.",
    name: 'Julie B.',
    role: 'Créatrice de bijoux',
    company: 'Maison Julie',
    initials: 'JB',
  },
  {
    quote: "Ce qui m'a frappé c'est qu'il a posé les bonnes questions dès le début. Il n'a pas juste codé ce que je lui demandais — il a réfléchi avec moi à ce dont mon activité avait vraiment besoin. Le résultat dépasse mes attentes.",
    name: 'Thomas R.',
    role: 'Consultant RH',
    company: 'Indépendant',
    initials: 'TR',
  },
  {
    quote: "Avant, je passais des heures à gérer mes devis et relances. L'outil que Matthieu a développé a tout automatisé. Je récupère facilement 6 à 8 heures par semaine. C'est un investissement qui s'est rentabilisé en un mois.",
    name: 'Sophie M.',
    role: 'Architecte d\'intérieur',
    company: 'Studio SM',
    initials: 'SM',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 lg:py-36" style={{ background: '#0A0A0A' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-16 reveal">
          <span className="section-label">— Témoignages</span>
          <h2
            className="font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.03em' }}
          >
            Ce que disent mes clients
          </h2>
          <p style={{ color: '#A1A1AA', fontSize: 17, lineHeight: 1.65 }}>
            La confiance se construit projet après projet.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal glass-card rounded-2xl p-7 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#4F46E5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p
                className="flex-grow mb-7"
                style={{ color: '#A1A1AA', fontSize: 15, lineHeight: 1.75, fontStyle: 'italic' }}
              >
                "{t.quote}"
              </p>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-5"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #818CF8 100%)' }}
                >
                  <span className="text-white font-bold text-xs">{t.initials}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p style={{ color: '#A1A1AA', fontSize: 12 }}>{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
