import { Code, Server, Database } from "lucide-react"

export default function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="floating-card card-1">
        <Code size={24} className="text-primary" />
        <span>Frontend</span>
      </div>
      <div className="floating-card card-2">
        <Server size={24} className="text-success" />
        <span>Backend</span>
      </div>
      <div className="floating-card card-3">
        <Database size={24} className="text-warning" />
        <span>Database</span>
      </div>
      <div className="hero-circle">
        <div className="hero-avatar">
          <Code size={65} className="text-white" />
        </div>
      </div>
    </div>
  )
}
