import { useState } from 'react'

const faqs = [
  {
    q: 'Combien coûte un projet ?',
    a: 'Les tarifs varient selon la complexité. Un site vitrine démarre à 590 €, une boutique e-commerce ou une application sur-mesure à partir de 1 990 €. Je fournis toujours un devis détaillé et gratuit avant de commencer — sans engagement de votre côté.',
  },
  {
    q: 'Combien de temps faut-il pour livrer ?',
    a: 'Un site vitrine est généralement livré en 5 à 10 jours ouvrés. Une application web complexe prend 3 à 8 semaines selon les fonctionnalités. Je vous communique un planning précis dès la validation du devis, et je le tiens.',
  },
  {
    q: 'Comment travaille-t-on ensemble ?',
    a: 'Tout commence par un appel de 30 minutes pour comprendre votre projet. Je vous envoie ensuite une proposition détaillée. Une fois validée, je travaille en itérations avec des points réguliers pour que vous voyiez l\'avancement en temps réel. Vous restez impliqué autant que vous le souhaitez.',
  },
  {
    q: 'Quels types de clients accompagnez-vous ?',
    a: 'J\'accompagne des artisans, commerçants, créateurs, consultants, startups et PME — principalement en France mais aussi à distance partout en Europe. Ce qui compte, c\'est que vous ayez un objectif clair et que vous soyez prêt à collaborer.',
  },
  {
    q: 'Que se passe-t-il après la livraison ?',
    a: 'Je vous forme à la prise en main de votre produit. Un support est inclus pendant la première semaine. Au-delà, je propose des formules de maintenance mensuelle, et je reste disponible pour faire évoluer votre produit dans la durée.',
  },
  {
    q: 'Travaillez-vous avec des clients hors Bretagne ?',
    a: 'Oui, sans problème. Je travaille à distance avec des clients partout en France et en Europe. Les échanges se font par visio, email et messagerie. La distance n\'a jamais empêché un projet de bien se passer.',
  },
]

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div
      className="border-b cursor-pointer"
      style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      onClick={onClick}
    >
      <div className="flex items-center justify-between py-5 gap-4">
        <p
          className="font-semibold text-white"
          style={{ fontSize: 16, letterSpacing: '-0.01em' }}
        >
          {q}
        </p>
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
          style={{
            background: isOpen ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.05)',
            color: isOpen ? '#818CF8' : 'rgba(255,255,255,0.4)',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '400px' : '0px' }}
      >
        <p className="pb-5" style={{ color: '#A1A1AA', fontSize: 15, lineHeight: 1.7 }}>{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-28 lg:py-36" style={{ background: '#0D0D0D' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div className="reveal">
            <span className="section-label">— FAQ</span>
            <h2
              className="font-bold leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.03em' }}
            >
              Questions fréquentes
            </h2>
            <p style={{ color: '#A1A1AA', fontSize: 17, lineHeight: 1.65 }}>
              Une question qui n'est pas là ? Écrivez-moi directement —
              je réponds sous 24h.
            </p>
            <a
              href="mailto:matthieustudio@proton.me"
              className="inline-flex items-center gap-2 mt-6"
              style={{ color: '#818CF8', fontSize: 14, fontWeight: 500 }}
            >
              matthieustudio@proton.me
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right — accordion */}
          <div className="reveal">
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
