import type { LucideIcon } from "lucide-react"

interface ContactMethodProps {
  icon: LucideIcon
  label: string
  href: string
}

export default function ContactMethod({ icon: Icon, label,  href }: ContactMethodProps) {
  return (
    <a href={href} className="contact-method">
      <Icon size={24} />
      <div>
        <div className="method-label">{label}</div>
      </div>
    </a>
  )
}
