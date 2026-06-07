const links = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Réalisations', href: '#portfolio' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t bg-[#07101f]" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="Matthieu Berthier" className="w-8 h-8 rounded-lg" />

            <div>
              <p className="text-white text-sm font-bold leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>Matthieu Berthier</p>
              <p className="text-white/30 text-xs mt-0.5">Développeur Freelance</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {links.map(({ label, href }) => (
              <a key={href} href={href} className="text-white/30 text-xs hover:text-white/60 transition-colors">
                {label}
              </a>
            ))}
          </nav>

          <p className="text-white/25 text-xs">© {year} Matthieu Berthier</p>
        </div>
      </div>
    </footer>
  )
}