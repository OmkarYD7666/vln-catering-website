"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  Salad,
  CakeSlice,
  ChefHat,
  Flame,
  Sparkles,
  HandPlatter,
} from "lucide-react"

const services = [
  {
    icon: Salad,
    title: "Pure Veg Delicacies",
    description:
      "An expansive menu of 200+ vegetarian dishes crafted from the finest seasonal produce. From Rajasthani dal baati to Maharashtrian puran poli, every region of India finds a place at our table.",
    image: "/images/thali.jpg",
  },
  {
    icon: CakeSlice,
    title: "Traditional Sweets",
    description:
      "Handcrafted Indian mithai prepared fresh on-site. Gulab jamun, rasmalai, jalebi, kaju katli, gajar ka halwa, and artisan desserts that bring the warmth of Indian festivities to every bite.",
    image: "/images/sweets.jpg",
  },
  {
    icon: ChefHat,
    title: "Live Cooking Counters",
    description:
      "Interactive live stations where our master chefs prepare dishes right before your guests. Dosa stations, chaat corners, pasta bars, tandoor counters, and more for an immersive culinary theatre.",
    image: "/images/live-counter.jpg",
  },
  {
    icon: Flame,
    title: "Chaat & Street Food",
    description:
      "Authentic Mumbai-style chaat counters featuring pani puri, bhel puri, sev puri, dahi puri, vada pav, pav bhaji, and all the beloved street flavours presented with gourmet finesse and impeccable hygiene.",
    image: "/images/chaat-counter.jpg",
  },
  {
    icon: HandPlatter,
    title: "Corporate Catering",
    description:
      "Tailored meal plans for office lunches, board meetings, conferences, and corporate celebrations. We serve 10,000+ meals daily to Pune's leading IT companies with consistency and punctuality.",
    image: "/images/corporate-event.jpg",
  },
  {
    icon: Sparkles,
    title: "Grand Event Catering",
    description:
      "End-to-end catering for weddings, receptions, engagement ceremonies, and milestone celebrations. From intimate gatherings of 50 to grand events of 5,000+ guests, we scale with grace.",
    image: "/images/wedding-catering.jpg",
  },
]

export default function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="relative bg-background py-24 lg:py-32">
      {/* Top line */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 text-center transition-all duration-700 lg:mb-20 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Our Services
          </span>
          <h2 className="mb-6 font-sans text-3xl font-bold text-cream md:text-5xl">
            A Feast for <span className="text-gold-gradient">Every Occasion</span>
          </h2>
          <div className="mx-auto flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
            From traditional vegetarian thalis to interactive live counters, we offer a
            comprehensive range of catering services designed to make your event truly memorable.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`hover-lift group overflow-hidden rounded-sm border border-border/30 bg-card transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={80}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-sm border border-gold/30 bg-card/80 backdrop-blur-sm">
                  <service.icon className="h-6 w-6 text-gold" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 font-sans text-xl font-semibold text-cream transition-colors group-hover:text-gold">
                  {service.title}
                </h3>
                <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all delay-700 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-6 font-mono text-sm text-muted-foreground">
            Looking for a custom menu? We tailor every event to your unique preferences.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-sm border border-gold/40 px-8 py-4 font-mono text-sm uppercase tracking-wider text-gold transition-all hover:border-gold hover:bg-gold/10"
          >
            Discuss Your Event
          </a>
        </div>
      </div>
    </section>
  )
}
