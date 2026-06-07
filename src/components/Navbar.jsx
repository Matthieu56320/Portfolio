import { useState, useEffect } from 'react'

const links = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Réalisations', href: '#portfolio' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'border-b'
          : ''
      }`}
      style={{
        background: scrolled ? 'rgba(7,16,31,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderColor: 'rgba(255,255,255,0.07)',
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img src="/favicon.png" alt="Matthieu Berthier" className="w-8 h-8 rounded-lg" />

          <div>
            <p className="font-bold text-white text-sm leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>
              Matthieu Berthier
            </p>
            <p className="text-white/35 text-[10px] leading-none mt-0.5 tracking-widest uppercase">
              Développeur Freelance
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(({ label, href }) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
          <a
            href="#contact"
            className="btn-primary ml-1 px-4 py-2 rounded-lg border border-white/15 text-white text-sm font-medium hover:bg-white/8 transition-all"
          >
            Devis gratuit
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-white/70 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white/70 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white/70 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div
          className="border-t px-6 py-5 flex flex-col gap-4"
          style={{ background: 'rgba(7,16,31,0.96)', borderColor: 'rgba(255,255,255,0.07)' }}
        >
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="nav-link text-base py-1"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary mt-1 px-5 py-2.5 rounded-lg border border-white/15 text-white text-sm font-medium text-center hover:bg-white/8 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Devis gratuit
          </a>
        </div>
      </div>
    </header>
  )
}