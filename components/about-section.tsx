"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Award, Users, Utensils, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Utensils,
    title: "Authentic Taste",
    description:
      "Traditional Indian recipes prepared with handpicked spices and time-honoured techniques that evoke nostalgia.",
  },
  {
    icon: ShieldCheck,
    title: "ISO Certified",
    description:
      "Rigorous quality assurance at every step, from sourcing ingredients to plating. Certified food safety standards.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "A team of 35+ skilled chefs, servers, and event coordinators delivering flawless execution at scale.",
  },
  {
    icon: Award,
    title: "Trusted Partner",
    description:
      "Trusted by Pune's top 5-star hotels, multinational IT companies, and premier event venues for over a decade.",
  },
]

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-darker-bg py-24 lg:py-32"
    >
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 text-center transition-all duration-700 lg:mb-20 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-gold">
            About Us
          </span>
          <h2 className="mb-6 font-sans text-3xl font-bold text-cream md:text-5xl">
            A Legacy of <span className="text-gold-gradient">Culinary Excellence</span>
          </h2>
          <div className="mx-auto flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
        </div>

        {/* Content grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Image */}
          <div
            className={`relative transition-all delay-200 duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src="/images/wedding-catering.jpg"
                alt="VLN Catering grand event setup"
                width={700}
                height={500}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darker-bg/60 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 rounded-sm border border-gold/20 bg-card p-5 shadow-xl shadow-black/30 md:-right-8">
              <p className="text-gold-gradient font-sans text-3xl font-bold">25+</p>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Years in Business
              </p>
            </div>
            {/* Gold accent border */}
            <div className="absolute -left-3 -top-3 h-24 w-24 border-l-2 border-t-2 border-gold/30" />
          </div>

          {/* Right - Text */}
          <div
            className={`transition-all delay-300 duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            <h3 className="mb-6 font-sans text-2xl font-semibold text-cream md:text-3xl">
              Crafting Unforgettable <span className="text-gold">Culinary Experiences</span> Since 1999
            </h3>
            <p className="mb-6 font-mono text-sm leading-relaxed text-muted-foreground">
              VLN Catering and Event Management has been the preferred catering partner for
              Pune&apos;s most prestigious establishments. From intimate corporate lunches at
              EON IT Park to grand wedding celebrations at The Hyatt, we bring the authentic
              flavours of India to every table.
            </p>
            <p className="mb-10 font-mono text-sm leading-relaxed text-muted-foreground">
              Our commitment to hygiene, quality, and the art of traditional Indian cooking
              has earned us ISO certification and the trust of over 20 corporate clients
              across Pune. Every dish we serve is a homage to India&apos;s rich culinary
              heritage, prepared with love and served with pride.
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group rounded-sm border border-border/50 bg-secondary/50 p-5 transition-all hover:border-gold/30 hover:bg-secondary"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <feature.icon className="mb-3 h-6 w-6 text-gold transition-transform group-hover:scale-110" />
                  <h4 className="mb-1.5 font-sans text-sm font-semibold text-cream">
                    {feature.title}
                  </h4>
                  <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
