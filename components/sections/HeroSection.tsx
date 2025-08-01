"use client"
import { Mail, ChevronDown, Star } from "lucide-react"
import { scrollToSection } from "@/utils/navigation"
import { HERO_ROLES } from "@/constants/content"
import HeroVisual from "@/components/ui/HeroVisual"
import HeroStats from "@/components/ui/HeroStats"
import TypingAnimation from "@/components/ui/TypingAnimation"

export default function HeroSection() {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content animate-fade-in">
              
              <h1 className="hero-title mb-3">
                Hi, I'm <span className="text-gradient">Muskan Popli</span>
              </h1>
              <div className="hero-subtitle mb-4">
                <TypingAnimation roles={HERO_ROLES} />
              </div>
              <p className="hero-description mb-4">
                Computer Science student crafting innovative web solutions with AI integration. Passionate about
                building scalable applications that solve real-world problems.
              </p>
              <div className="hero-buttons d-flex gap-3 mb-4">
                <button className="btn btn-primary btn-lg" onClick={() => scrollToSection("contact")}>
                  <Mail className="me-2" size={18} />
                  Let's Connect
                </button>
                <button className="btn btn-outline-primary btn-lg" onClick={() => scrollToSection("projects")}>
                  View Work
                  <ChevronDown className="ms-2" size={18} />
                </button>
              </div>
              <HeroStats />
            </div>
          </div>
          <div className="col-lg-6">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
