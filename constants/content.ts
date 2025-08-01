import { GraduationCap, Award, Code, Database, Server, Smartphone, Mail, Phone, Linkedin } from "lucide-react"

export const HERO_ROLES = ["Full Stack Developer", "AI Enthusiast", "Problem Solver", "Tech Innovator"]

export const ABOUT_CARDS = [
  {
    icon: GraduationCap,
    title: "Education",
    content: "B.E. Computer Science",
    detail: "CGPA: 8.18 (Rank: 3rd)",
    color: "primary",
  },
  {
    icon: Award,
    title: "Achievements",
    content: "SIH Finalist",
    detail: "Multiple Certifications",
    color: "success",
  },
  {
    icon: Code,
    title: "Experience",
    content: "3+ Projects",
    detail: "Full Stack & AI",
    color: "warning",
  },
]

export const PROJECTS = [
  {
    title: "Career Compass",
    description: "AI-powered job portal with secure authentication and intelligent matching system.",
    tech: ["ReactJS", "NodeJS", "MongoDB", "Redux"],
    highlights: ["500+ jobs monthly", "20% faster loads", "Secure uploads"],
    links: { code: "https://github.com/Muskanpopli/CareerCompass",
       video: "https://drive.google.com/file/d/1P7bWOb4BH7es1EHb7Dksw5u6G69yice_/view",
        live: "https://jobportal-fas2.onrender.com/" },
    color: "primary",
  },
  {
    title: "Wealth Finance Tracker",
    description: "ML-based financial platform with predictive analytics and real-time insights.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Gemini AI"],
    highlights: ["95% accuracy", "35% engagement boost", "10K+ users"],
    links: { code: "https://github.com/Muskanpopli/Welth",
       video: "https://drive.google.com/file/d/1cvhd_dCm9K2-qBNfGM70CI4PNHe7K4oT/view",
        live: "https://welth-afjz.vercel.app/" },
    color: "success",
  },
  {
    title: "Shop Sphere",
    description: "Full-featured e-commerce platform with comprehensive admin dashboard.",
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
    highlights: ["Secure routes", "Admin dashboard", "Enhanced UX"],
    links: { code: "https://github.com/Muskanpopli/Shop-sphere", 
      video: "https://drive.google.com/file/d/1saBqsiL52pTLgzJ8vVlZr3RM71Les9oy/view" },
    color: "warning",
  },
]

export const SKILLS = {
  Languages: { items: ["C++", "Python", "JavaScript", "HTML/CSS", "SQL"], icon: Code },
  Frontend: { items: ["ReactJS", "Next.js", "Bootstrap", "Redux"], icon: Smartphone },
  Backend: { items: ["NodeJS", "ExpressJS", "Prisma ORM"], icon: Server },
  Databases: { items: ["PostgreSQL", "MongoDB"], icon: Database },
  Tools: { items: ["Git", "GitHub", "VSCode", "Postman"], icon: Award },
}

export const CONTACT_METHODS = [
  
  { icon: Phone, label: "+91 8168933848", href: "tel:+918168933848" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muskan-popli6/",
  },{
    icon: Mail,
    label: "Email",
    
    href: "mailto:muskan1popli@gmail.com",
  },
]
