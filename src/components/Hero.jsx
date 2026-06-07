export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle radial background — no neon, no particles */}
      <div className="absolute inset-0 bg-[#07101f]" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(79,142,247,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-20 text-center">

        {/* Eyebrow */}
        <div className="animate-fade-up-delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/50 text-sm mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Disponible pour de nouveaux projets
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up-delay-2 text-4xl sm:text-6xl lg:text-[72px] font-extrabold leading-[1.06] tracking-tight mb-7">
          <span className="text-white">Propulsez votre activité</span><br />
          <span className="gradient-text">avec un site web moderne</span><br />
          <span className="text-white">et performant.</span>
        </h1>

        {/* Sub */}
        <p className="animate-fade-up-delay-3 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
          Artisans, commerçants, créateurs — des sites vitrines et boutiques e-commerce
          <span className="text-white/75"> sur-mesure, rapides et pensés pour convertir</span>.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-delay-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#contact"
            className="btn-primary w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#07101f] font-semibold text-base"
          >
            Démarrer un projet
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/15 text-white/70 font-medium text-base hover:bg-white/5 hover:text-white transition-all duration-200 text-center"
          >
            Voir mes réalisations
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-up-delay-4 mt-20 grid grid-cols-3 gap-6 max-w-sm mx-auto pt-10 border-t border-white/[0.08]">
          {[
            { value: '100%', label: 'Responsive' },
            { value: 'Sur-mesure', label: 'Chaque projet' },
            { value: 'Rapide', label: 'Performance first' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-white font-bold text-lg sm:text-xl">{value}</p>
              <p className="text-white/35 text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#07101f] to-transparent" />
    </section>
  )
}