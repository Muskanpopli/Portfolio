export default function HeroStats() {
  const stats = [
    { number: "3+", label: "Projects" },
    { number: "8.18", label: "CGPA" },
    { number: "3rd", label: "Rank" },
  ]

  return (
    <div className="hero-stats row g-3">
      {stats.map((stat, index) => (
        <div key={index} className="col-4">
          <div className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
