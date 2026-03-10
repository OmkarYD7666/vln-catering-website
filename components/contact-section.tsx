"use client"

import { useEffect, useRef, useState } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 88888 72700",
    href: "tel:+918888872700",
    description: "Mon-Sat, 9 AM - 9 PM",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 96731 30070",
    href: "https://wa.me/919673130070?text=Hello%20VLN%20Catering!%20I%20would%20like%20to%20inquire%20about%20your%20catering%20services.",
    description: "Quick response guaranteed",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "operations@vln.com",
    href: "mailto:operations@vln.com",
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Anand Nagar Lane No.03 Wadgaon Sheri Pune 411014",
    href: "https://maps.google.com/?q=Anand+Nagar+Lane+No.03+Wadgaon+Sheri+Pune+411014",
    description: "Walk-in consultations welcome",
  },
]

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-background py-24 lg:py-32"
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 text-center transition-all duration-700 lg:mb-20 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Get in Touch
          </span>
          <h2 className="mb-6 font-sans text-3xl font-bold text-cream md:text-5xl">
            Let&apos;s Plan Your <span className="text-gold-gradient">Next Event</span>
          </h2>
          <div className="mx-auto flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
            Ready to create an unforgettable culinary experience? Reach out to us through
            any of the channels below. We would love to hear from you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - Contact Methods */}
          <div
            className={`transition-all delay-200 duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {contactMethods.map((method, index) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.label === "WhatsApp" || method.label === "Visit Us" ? "_blank" : undefined}
                  rel={method.label === "WhatsApp" || method.label === "Visit Us" ? "noopener noreferrer" : undefined}
                  className="hover-lift group rounded-sm border border-border/30 bg-card p-6 transition-all hover:border-gold/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm border border-gold/20 bg-gold/5 transition-colors group-hover:border-gold/40 group-hover:bg-gold/10">
                    <method.icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="mb-1 font-sans text-base font-semibold text-cream">
                    {method.label}
                  </h3>
                  <p className="mb-2 font-mono text-sm text-gold">{method.value}</p>
                  <p className="font-mono text-[11px] text-muted-foreground">
                    {method.description}
                  </p>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mt-6 rounded-sm border border-gold/15 bg-gold/5 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-gold" />
                <h3 className="font-sans text-base font-semibold text-cream">
                  Business Hours
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="font-mono text-xs text-cream/70">Monday - Saturday</p>
                  <p className="font-mono text-sm font-medium text-gold">
                    9:00 AM - 9:00 PM
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs text-cream/70">Sunday</p>
                  <p className="font-mono text-sm font-medium text-gold">
                    10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Google Map */}
          <div
            className={`transition-all delay-300 duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-sm border border-border/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.5438903428254!2d73.86453987520405!3d18.577611682498568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c4e5d5d5d5d5%3A0x5d5d5d5d5d5d5d5d!2sWadgaon%20Sheri%2C%20Pune!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="400"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VLN Catering Location - Anand Nagar Lane No.03 Wadgaon Sheri Pune"
                className="rounded-sm"
              />
              {/* Map overlay info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card via-card/90 to-transparent p-6 pt-12">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <div>
                    <p className="font-sans text-sm font-semibold text-cream">
                      VLN Catering & Event Management
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      Pune, Maharashtra, India
                    </p>
                    <a
                      href="https://maps.google.com/?q=Anand+Nagar+Lane+No.03+Wadgaon+Sheri+Pune+411014"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block font-mono text-xs text-gold underline underline-offset-4 transition-colors hover:text-gold-light"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <a
              href="https://wa.me/919673130070?text=Hello%20VLN%20Catering!%20I%20would%20like%20to%20inquire%20about%20your%20catering%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-3 rounded-sm bg-[#25D366] px-6 py-4 font-mono text-sm uppercase tracking-wider text-white transition-all hover:bg-[#22bf5b] hover:shadow-lg hover:shadow-[#25D366]/20"
            >
              <MessageCircle className="h-5 w-5" />
              Chat with Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
