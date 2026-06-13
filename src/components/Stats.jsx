const stats = [
  { value: '+20', label: 'Projets réalisés' },
  { value: '+15', label: 'Clients accompagnés' },
  { value: '5 ans', label: "D'expérience" },
  { value: '100%', label: 'Satisfaction client' },
]

export default function Stats() {
  return (
    <section className="relative py-12" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: '#0D0D0D' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, label }, i) => (
            <div key={i} className="reveal text-center lg:text-left">
              <p
                className="font-bold mb-1"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', letterSpacing: '-0.04em', color: 'white' }}
              >
                {value}
              </p>
              <p style={{ color: '#A1A1AA', fontSize: 13, fontWeight: 500 }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
