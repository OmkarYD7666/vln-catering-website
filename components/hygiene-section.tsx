"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ShieldCheck, Thermometer, HandMetal, Leaf, CheckCircle2 } from "lucide-react"

const hygienePoints = [
  {
    icon: ShieldCheck,
    title: "ISO Certified Processes",
    description:
      "Every step from procurement to serving follows ISO-certified food safety protocols.",
  },
  {
    icon: Thermometer,
    title: "Temperature Controlled",
    description:
      "Hot food stays hot, cold food stays cold. Strict temperature monitoring at all times.",
  },
  {
    icon: HandMetal,
    title: "Staff Hygiene Training",
    description:
      "All staff undergo regular hygiene training, health checks, and wear protective equipment.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients Daily",
    description:
      "We source vegetables, dairy, and spices fresh every morning from trusted local suppliers.",
  },
]

const certifications = [
  "FSSAI Licensed",
  "ISO 22000:2018 Certified",
  "HACCP Compliant",
  "Regular Third-Party Audits",
  "Pest Control Management",
  "Water Quality Testing",
]

export default function HygieneSection() {
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
    <section ref={sectionRef} className="relative bg-darker-bg py-24 lg:py-32">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 text-center transition-all duration-700 lg:mb-20 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Hygiene & Quality
          </span>
          <h2 className="mb-6 font-sans text-3xl font-bold text-cream md:text-5xl">
            Uncompromising <span className="text-gold-gradient">Food Safety</span>
          </h2>
          <div className="mx-auto flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Hygiene image */}
          <div
            className={`relative transition-all delay-200 duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src="/images/hygiene.jpg"
                alt="Immaculate VLN kitchen"
                width={700}
                height={500}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darker-bg/50 to-transparent" />
            </div>
            {/* ISO Badge */}
            <div className="absolute -bottom-4 right-4 flex items-center gap-3 rounded-sm border border-gold/30 bg-card p-4 shadow-xl shadow-black/30 md:right-8">
              <ShieldCheck className="h-8 w-8 text-gold" />
              <div>
                <p className="font-sans text-sm font-bold text-cream">ISO 22000</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Certified
                </p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all delay-300 duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            <p className="mb-8 font-mono text-sm leading-relaxed text-muted-foreground">
              At VLN Catering, hygiene is not an afterthought -- it is the foundation of
              everything we do. From our spotless commercial kitchens to the final plate
              served at your event, every step adheres to the highest standards of food
              safety and quality assurance.
            </p>

            {/* Hygiene points */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {hygienePoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-sm border border-border/30 bg-secondary/30 p-4 transition-all hover:border-gold/20"
                >
                  <point.icon className="mb-2 h-5 w-5 text-gold" />
                  <h4 className="mb-1 font-sans text-sm font-semibold text-cream">
                    {point.title}
                  </h4>
                  <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications list */}
            <div className="rounded-sm border border-gold/15 bg-gold/5 p-5">
              <h4 className="mb-3 font-sans text-sm font-semibold text-gold">
                Certifications & Compliance
              </h4>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-gold/70" />
                    <span className="font-mono text-xs text-cream/70">{cert}</span>
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
