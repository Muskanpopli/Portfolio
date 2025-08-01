import { ABOUT_CARDS } from "@/constants/content"
import AboutCard from "@/components/ui/AboutCard"

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Passionate developer with a focus on innovation</p>
        </div>
        <div className="row g-4">
          {ABOUT_CARDS.map((card, index) => (
            <div key={index} className="col-md-4">
              <AboutCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
