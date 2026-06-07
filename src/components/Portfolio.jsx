import { useState, useEffect, useCallback } from 'react'

const SITE_URL = 'https://www.maison-julie-studio.fr'
const AUTOPLAY_DELAY = 4000

const screenshots = [
  {
    id: 'catalogue',
    label: 'Catalogue',
    caption: 'Boutique avec filtres dynamiques — type, collection, prix',
    src: '/screenshots/catalogue.png',
  },
  {
    id: 'produit',
    label: 'Page produit',
    caption: 'Fiche produit avec galerie, CTA panier et paiement immédiat',
    src: '/screenshots/produit.png',
  },
  {
    id: 'temoignages',
    label: 'Témoignages',
    caption: 'Section avis clients intégrée à la page d\'accueil',
    src: '/screenshots/temoignages.png',
  },
  {
    id: 'contact',
    label: 'Contact',
    caption: 'Page contact multi-canaux — Instagram, TikTok, e-mail',
    src: '/screenshots/contact.png',
  },
  {
    id: 'admin',
    label: 'Dashboard admin',
    caption: 'Interface d\'administration — commandes, expéditions, codes promo',
    src: '/screenshots/admin.png',
  },
]

const tags = ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Firestore', 'Stripe', 'Nodemailer', 'Railway']

const caseBlocks = [
  {
    num: '01',
    label: 'Le Défi',
    title: 'Un e-commerce élégant pour une créatrice de bijoux',
    desc: "Concevoir une boutique à l'image d'une marque artisanale premium : design épuré, panier dynamique, paiements sécurisés et gestion complète des commandes — sans template générique.",
  },
  {
    num: '02',
    label: 'La Solution',
    title: 'Architecture full-stack React + Node.js',
    desc: "Frontend React/Vite, API Node.js/Express, webhooks Stripe, base Firestore temps réel, e-mails transactionnels automatiques via Nodemailer, déploiement Railway avec Caddy.",
  },
  {
    num: '03',
    label: 'Le Résultat',
    title: 'Boutique live, performante et évolutive',
    desc: "Paiements Stripe opérationnels, tableau de bord admin complet (commandes, expéditions, codes promo, avis), notifications e-mail automatiques à chaque étape de commande.",
  },
]

/* ── Browser mockup ───────────────────────────────────── */
function BrowserMockup({ src, caption }) {
  const [loaded, setLoaded] = useState(false)

  // Reset loaded state when src changes
  useEffect(() => { setLoaded(false) }, [src])

  return (
    <div className="w-full select-none">
      {/* Chrome bar */}
      <div
        className="rounded-t-xl px-3 sm:px-4 py-2.5 flex items-center gap-2 sm:gap-3"
        style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
        </div>
        <div
          className="flex-1 min-w-0 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs truncate"
          style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.35)' }}
        >
          <svg className="w-3 h-3 flex-shrink-0" style={{ color: 'rgba(74,222,128,0.8)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="truncate">maison-julie-studio.fr</span>
        </div>
        <a
          href={SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 flex items-center gap-1 px-2 py-1 rounded text-xs transition-opacity hover:opacity-70"
          style={{ color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.10)' }}
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <span className="hidden sm:inline">Visiter</span>
        </a>
      </div>

      {/* Screenshot */}
      <div
        className="relative overflow-hidden rounded-b-xl"
        style={{ background: '#f5f0eb', minHeight: '220px' }}
      >
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-5 h-5 rounded-full border-2 animate-spin"
              style={{ borderColor: 'rgba(255,255,255,0.1)', borderTopColor: 'rgba(255,255,255,0.5)' }}
            />
          </div>
        )}
        <img
          key={src}
          src={src}
          alt={caption}
          className="w-full object-cover object-top transition-opacity duration-500"
          style={{ opacity: loaded ? 1 : 0, maxHeight: '340px' }}
          onLoad={() => setLoaded(true)}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(7,16,31,0.7))' }}
        />
      </div>

      {caption && (
        <p className="text-center mt-2.5 text-xs px-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
          {caption}
        </p>
      )}
    </div>
  )
}

/* ── Main export ──────────────────────────────────────── */
export default function Portfolio() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(
    () => setActive(i => (i + 1) % screenshots.length),
    []
  )
  const prev = useCallback(
    () => setActive(i => (i - 1 + screenshots.length) % screenshots.length),
    []
  )

  // Autoplay
  useEffect(() => {
    if (paused) return
    const t = setTimeout(next, AUTOPLAY_DELAY)
    return () => clearTimeout(t)
  }, [active, paused, next])

  const current = screenshots[active]

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 overflow-hidden bg-[#07101f]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <div className="mb-14">
          <div className="section-divider" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">
            Réalisations
          </h2>
          <p className="text-white/45 text-base sm:text-lg max-w-lg">
            Des projets concrets, de la conception à la mise en ligne.
          </p>
        </div>

        {/* ── Case study card ── */}
        <div className="glass-card rounded-2xl overflow-hidden">

          {/* Top bar */}
          <div
            className="px-5 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-3 border-b"
            style={{ borderColor: 'rgba(255,255,255,0.07)' }}
          >
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-white/35">
                Étude de cas · E-Commerce
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                Maison Julie
                <span className="text-white/30 mx-2 font-light">—</span>
                <span className="text-white/50 text-lg font-normal">Bijoux &amp; Accessoires</span>
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-white/50 text-xs">Live en production</span>
              </div>
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white border border-white/15 hover:bg-white/10 transition-all"
              >
                Voir le site
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <div className="p-4 sm:p-8">

            {/* ── Two-col: mockup + meta ── */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mb-8">

              {/* Left: mockup + controls */}
              <div
                className="w-full lg:w-3/5"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                {/* Tab pills */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {screenshots.map((s, i) => (
                    <button
                      key={s.id}
                      onClick={() => { setActive(i); setPaused(true) }}
                      className="px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200"
                      style={{
                        background: i === active ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${i === active ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.07)'}`,
                        color: i === active ? 'white' : 'rgba(255,255,255,0.38)',
                      }}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                <BrowserMockup src={current.src} caption={current.caption} />

                {/* Carousel nav */}
                <div className="flex items-center justify-center gap-3 mt-4">
                  <button
                    onClick={() => { prev(); setPaused(true) }}
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-all"
                    style={{ border: '1px solid rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.45)' }}
                    aria-label="Précédent"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Progress dots */}
                  <div className="flex gap-1.5 items-center">
                    {screenshots.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { setActive(i); setPaused(true) }}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: i === active ? '18px' : '5px',
                          height: '5px',
                          background: i === active ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.2)',
                        }}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => { next(); setPaused(true) }}
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-all"
                    style={{ border: '1px solid rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.45)' }}
                    aria-label="Suivant"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right: stack + CTA */}
              <div className="w-full lg:w-2/5 flex flex-col gap-6">
                {/* Stack */}
                <div>
                  <p className="text-xs uppercase tracking-widest mb-2.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    Stack technique
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.09)',
                          color: 'rgba(255,255,255,0.55)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)' }} />

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.50)' }}>
                  Boutique e-commerce full-stack développée sur-mesure pour une créatrice de bijoux. 
                  Du design à la gestion des commandes, en passant par les paiements et les e-mails automatiques.
                </p>

                {/* CTA */}
                <a
                  href={SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-[#07101f] bg-white mt-auto"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Visiter le site en live
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* ── Case blocks ── */}
            <div
              className="pt-6 border-t"
              style={{ borderColor: 'rgba(255,255,255,0.07)' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {caseBlocks.map(({ num, label, title, desc }) => (
                  <div key={num} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold" style={{ color: 'rgba(255,255,255,0.2)' }}>{num}</span>
                      <span
                        className="text-xs font-semibold tracking-widest uppercase"
                        style={{ color: 'rgba(255,255,255,0.35)' }}
                      >
                        {label}
                      </span>
                    </div>
                    <h4 className="text-white font-semibold text-sm leading-snug">{title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.42)' }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Footer ── */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 pt-5 border-t"
              style={{ borderColor: 'rgba(255,255,255,0.07)' }}
            >
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.30)' }}>
                Vous avez un projet similaire ? Discutons-en.
              </p>
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white border border-white/15 hover:bg-white/8 transition-all whitespace-nowrap"
              >
                Démarrer mon projet
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-xs mt-6" style={{ color: 'rgba(255,255,255,0.20)' }}>
          D'autres réalisations disponibles sur demande.
        </p>
      </div>
    </section>
  )
}