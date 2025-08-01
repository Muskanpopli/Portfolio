import { SKILLS } from "@/constants/content"
import SkillCard from "@/components/ui/SkillCard"

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies I use to build amazing things</p>
        </div>
        <div className="row g-4">
          {Object.entries(SKILLS).map(([category, data], index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <SkillCard category={category} data={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
