const values = [
  {
    title: 'Orienté résultats',
    desc: 'Je ne livre pas du code — je livre des résultats. Chaque décision technique est guidée par l\'impact business.',
  },
  {
    title: 'Transparent',
    desc: 'Prix clairs, délais respectés, communication directe. Vous savez toujours où en est votre projet.',
  },
  {
    title: 'Partenaire long terme',
    desc: 'Je prends vos projets comme si c\'était les miens. La relation ne s\'arrête pas à la livraison.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-36" style={{ background: '#0D0D0D' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — photo placeholder + card */}
          <div className="reveal">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ background: '#151515', border: '1px solid rgba(255,255,255,0.08)', aspectRatio: '4/3' }}
            >
              {/* Photo — remplacez le src par votre vraie photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)' }}
                >
                  <span className="text-white font-bold text-3xl">M</span>
                </div>
              </div>

              {/* Card overlay */}
              <div
                className="absolute bottom-4 left-4 right-4 rounded-xl p-4"
                style={{ background: 'rgba(10,10,10,0.88)', border: '1px solid rgba(255,255,255,0.10)', backdropFilter: 'blur(12px)' }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)' }}
                  >
                    <span className="text-white font-bold text-sm">M</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Matthieu Berthier</p>
                    <p style={{ color: '#A1A1AA', fontSize: 12 }}>Développeur Freelance · Morbihan, Bretagne</p>
                  </div>
                  <div className="ml-auto">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(52,211,153,0.12)', color: '#34d399' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Disponible
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="reveal">
            <span className="section-label">— À propos</span>
            <h2
              className="font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '-0.03em' }}
            >
              Un développeur qui pense comme un entrepreneur
            </h2>

            <div className="flex flex-col gap-4 mb-8" style={{ color: '#A1A1AA', fontSize: 16, lineHeight: 1.7 }}>
              <p>
                Je m'appelle Matthieu. Basé en Bretagne, je travaille en freelance avec des startups,
                des PME et des entrepreneurs qui veulent aller vite sans sacrifier la qualité.
              </p>
              <p>
                Mon approche est simple : comprendre votre business avant de toucher au code.
                Un produit bien pensé prend moins de temps à développer, coûte moins cher à maintenir,
                et rapporte plus.
              </p>
              <p>
                Quand je ne développe pas, je construis des outils d'automatisation, j'explore
                l'IA appliquée aux workflows métiers, et j'étudie comment les meilleurs produits
                tech sont conçus — pour le réappliquer à vos projets.
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-col gap-4">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div
                    className="w-1 rounded-full flex-shrink-0"
                    style={{ background: 'linear-gradient(to bottom, #4F46E5, #818CF8)' }}
                  />
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">{v.title}</p>
                    <p style={{ color: '#A1A1AA', fontSize: 13, lineHeight: 1.6 }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
