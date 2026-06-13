import { useEffect, useRef } from 'react'

/* Mini-dashboard SVG — signature visuelle de la page */
function DashboardMockup() {
  return (
    <div className="relative animate-float">
      {/* Glow behind card */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(79,70,229,0.25) 0%, transparent 70%)',
          filter: 'blur(40px)',
          transform: 'scale(1.2)',
        }}
      />

      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: '#111111',
          border: '1px solid rgba(255,255,255,0.10)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
          width: '100%',
          maxWidth: 520,
        }}
      >
        {/* Titlebar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: '#0D0D0D' }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          <div
            className="ml-3 flex-1 rounded px-3 py-1 text-xs"
            style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.3)' }}
          >
            app.mbstudio.fr
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-5">
          {/* Top row stats */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { label: 'Revenus', value: '24 890 €', change: '+18%', up: true },
              { label: 'Commandes', value: '342', change: '+12%', up: true },
              { label: 'Clients', value: '1 204', change: '+9%', up: true },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-3"
                style={{ background: '#181818', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, fontWeight: 500 }}>{s.label}</p>
                <p style={{ color: 'white', fontSize: 15, fontWeight: 700, marginTop: 4, letterSpacing: '-0.02em' }}>{s.value}</p>
                <p style={{ color: '#34d399', fontSize: 10, fontWeight: 600, marginTop: 2 }}>{s.change}</p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div
            className="rounded-xl p-4 mb-4"
            style={{ background: '#181818', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="flex items-center justify-between mb-3">
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11, fontWeight: 600 }}>Performance mensuelle</p>
              <span style={{ background: 'rgba(99,102,241,0.15)', color: '#818CF8', fontSize: 9, fontWeight: 600, padding: '2px 8px', borderRadius: 999 }}>Ce mois</span>
            </div>
            {/* Bar chart */}
            <div className="flex items-end gap-1.5" style={{ height: 56 }}>
              {[40, 55, 35, 70, 50, 85, 65, 90, 75, 95, 80, 88].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 11
                      ? 'linear-gradient(to top, #4F46E5, #818CF8)'
                      : 'rgba(255,255,255,0.08)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Recent orders */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div
              className="px-4 py-2.5 flex items-center justify-between"
              style={{ background: '#181818', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 10, fontWeight: 600 }}>Commandes récentes</p>
              <p style={{ color: '#818CF8', fontSize: 9, fontWeight: 600, cursor: 'pointer' }}>Voir tout →</p>
            </div>
            {[
              { name: 'Sophie M.', product: 'Collier Elara', amount: '89 €', status: 'Livré' },
              { name: 'Antoine R.', product: 'Bracelet Iris', amount: '124 €', status: 'En cours' },
              { name: 'Clara B.', product: 'Bague Soleil', amount: '67 €', status: 'Livré' },
            ].map((o, i) => (
              <div
                key={i}
                className="px-4 py-2.5 flex items-center gap-3"
                style={{
                  background: i % 2 === 0 ? '#141414' : '#121212',
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(99,102,241,0.15)' }}
                >
                  <span style={{ color: '#818CF8', fontSize: 8, fontWeight: 700 }}>{o.name[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p style={{ color: 'white', fontSize: 10, fontWeight: 600 }}>{o.name}</p>
                  <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 9 }}>{o.product}</p>
                </div>
                <p style={{ color: 'white', fontSize: 10, fontWeight: 700 }}>{o.amount}</p>
                <span
                  style={{
                    fontSize: 8,
                    fontWeight: 600,
                    padding: '2px 7px',
                    borderRadius: 999,
                    background: o.status === 'Livré' ? 'rgba(52,211,153,0.12)' : 'rgba(251,191,36,0.12)',
                    color: o.status === 'Livré' ? '#34d399' : '#fbbf24',
                  }}
                >
                  {o.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-bg" />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 20% 50%, rgba(79,70,229,0.12) 0%, transparent 60%)',
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <div className="animate-fade-up-1">
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-8"
                style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)', color: '#818CF8' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Disponible — 2 projets acceptés ce mois
              </span>
            </div>

            <h1
              className="animate-fade-up-2 font-bold leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', letterSpacing: '-0.03em' }}
            >
              Je crée des applications web qui font{' '}
              <span className="gradient-text">gagner du temps</span>{' '}
              et de l'argent à votre entreprise.
            </h1>

            <p
              className="animate-fade-up-3 text-lg leading-relaxed mb-10"
              style={{ color: '#A1A1AA', maxWidth: 480 }}
            >
              Développeur freelance spécialisé dans les applications web modernes,
              les outils SaaS et l'automatisation. Je transforme vos idées en produits
              qui travaillent pour vous, 24h/24.
            </p>

            <div className="animate-fade-up-4 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="btn-accent px-7 py-3.5 rounded-xl text-sm font-semibold text-center"
              >
                Réserver un appel gratuit
              </a>
              <a
                href="#portfolio"
                className="btn-primary px-7 py-3.5 rounded-xl text-sm font-semibold text-center"
                style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#A1A1AA' }}
              >
                Voir mes projets →
              </a>
            </div>

            {/* Trust micro-copy */}
            <div className="animate-fade-up-5 flex items-center gap-6 mt-10">
              <div>
                <p className="text-white font-bold text-xl" style={{ letterSpacing: '-0.03em' }}>+20</p>
                <p style={{ color: '#A1A1AA', fontSize: 12 }}>projets livrés</p>
              </div>
              <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.08)' }} />
              <div>
                <p className="text-white font-bold text-xl" style={{ letterSpacing: '-0.03em' }}>5 ans</p>
                <p style={{ color: '#A1A1AA', fontSize: 12 }}>d'expérience</p>
              </div>
              <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.08)' }} />
              <div>
                <p className="text-white font-bold text-xl" style={{ letterSpacing: '-0.03em' }}>24h</p>
                <p style={{ color: '#A1A1AA', fontSize: 12 }}>temps de réponse</p>
              </div>
            </div>
          </div>

          {/* Right — mockup */}
          <div className="hidden lg:flex justify-end">
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg to-transparent" />
    </section>
  )
}
