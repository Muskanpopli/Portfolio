import { Mail, Linkedin } from "lucide-react"
import { CONTACT_METHODS } from "@/constants/content"
import ContactMethod from "@/components/ui/ContactMethod"

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <div className="contact-content">
              <h2 className="contact-title">Let's Build Something Amazing</h2>
              <p className="contact-subtitle">
                Ready to turn ideas into reality? Let's connect and create something extraordinary together.
              </p>

              <div className="contact-methods row g-4 mb-5">
                {CONTACT_METHODS.map((method, index) => (
                  <div key={index} className="col-md-4">
                    <ContactMethod {...method} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
