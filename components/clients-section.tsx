"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Hotel, Landmark } from "lucide-react"

const hotelClients = [
  "Hyatt Pune",
  "Hyatt Regency",
  "Four Points by Sheraton",
]

const corporateClients = [
  "Amdocs",
  "SLB Commerzone",
  "Michelin EON IT Park",
  "ABIL",
  "Panchshil Tech Park (ITPP)",
  "Pentybawes ITPP",
]

const clientCategories = [
  {
    icon: Hotel,
    title: "5-Star Hotels",
    description: "Trusted catering partner for Pune's most prestigious hospitality brands.",
    clients: hotelClients,
  },
  {
    icon: Building2,
    title: "IT & Corporate",
    description: "Serving daily meals and events for Pune's leading tech companies.",
    clients: corporateClients,
  },
  {
    icon: Landmark,
    title: "Event Venues",
    description: "Preferred caterer for premium banquet halls and convention centres.",
    clients: ["Grand Celebrations", "Premium Wedding Venues", "Corporate Convention Centres"],
  },
]

export default function ClientsSection() {
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

  const allClients = [...hotelClients, ...corporateClients]

  return (
    <section
      id="clients"
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
            Our Clients
          </span>
          <h2 className="mb-6 font-sans text-3xl font-bold text-cream md:text-5xl">
            Trusted by <span className="text-gold-gradient">Industry Leaders</span>
          </h2>
          <div className="mx-auto flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
            From 5-star hotels to multinational corporations, our client list reflects
            the trust and confidence that Pune&apos;s finest establishments place in VLN Catering.
          </p>
        </div>

        {/* Client scrolling banner */}
        <div
          className={`mb-16 overflow-hidden transition-all delay-200 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />
            <div className="flex animate-marquee gap-8">
              {[...allClients, ...allClients].map((client, idx) => (
                <div
                  key={`${client}-${idx}`}
                  className="flex-shrink-0 rounded-sm border border-border/30 bg-card px-8 py-5"
                >
                  <span className="whitespace-nowrap font-mono text-sm font-medium text-cream/80">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <style jsx>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>

        {/* Client categories */}
        <div className="grid gap-8 md:grid-cols-3">
          {clientCategories.map((category, index) => (
            <div
              key={category.title}
              className={`hover-lift rounded-sm border border-border/30 bg-card p-8 transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-sm border border-gold/20 bg-gold/5">
                <category.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="mb-3 font-sans text-xl font-semibold text-cream">
                {category.title}
              </h3>
              <p className="mb-6 font-mono text-xs leading-relaxed text-muted-foreground">
                {category.description}
              </p>
              <ul className="flex flex-col gap-2.5">
                {category.clients.map((client) => (
                  <li key={client} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rotate-45 bg-gold/60" />
                    <span className="font-mono text-xs text-cream/70">{client}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
