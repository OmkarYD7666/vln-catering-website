"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const heroStats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "150+", label: "Meals Daily" },
  { value: "35+", label: "Skilled Chefs" },
  { value: "20+", label: "Corporate Partners" },
]

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-buffet.jpg"
          preload="metadata"
          className="h-full w-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/8951886/8951886-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* ISO Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-gold" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
              ISO Certified
            </span>
          </div>

          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/images/logo.png"
              alt="VLN Caterers"
              width={180}
              height={180}
              className="mx-auto h-32 w-auto lg:h-44"
              priority
            />
          </div>

          {/* Headline */}
          <h1 className="mb-4 font-sans text-4xl font-bold leading-tight tracking-tight text-cream md:text-6xl lg:text-7xl">
            <span className="text-gold-gradient">Exquisite</span> Indian Flavours
          </h1>
          <p className="mb-2 font-sans text-2xl font-light text-cream/80 md:text-3xl">
            for Every Grand Occasion
          </p>

          {/* Divider */}
          <div className="mx-auto my-8 flex items-center gap-4">
            <div className="h-px w-16 bg-gold/40 md:w-24" />
            <div className="h-2 w-2 rotate-45 border border-gold/60" />
            <div className="h-px w-16 bg-gold/40 md:w-24" />
          </div>

          {/* Sub text */}
          <p className="mx-auto mb-10 max-w-2xl font-mono text-sm leading-relaxed text-foreground/60 md:text-base">
            Premium vegetarian catering services delivering authentic Indian taste.
            Trusted by Pune&apos;s finest hotels, IT corporates, and event venues.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-4 font-mono text-sm uppercase tracking-wider text-primary-foreground transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-sm border border-gold/40 px-8 py-4 font-mono text-sm uppercase tracking-wider text-gold transition-all hover:border-gold hover:bg-gold/10"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className={`mt-16 grid w-full max-w-4xl grid-cols-2 gap-6 md:mt-20 md:grid-cols-4 md:gap-0 md:divide-x md:divide-gold/20 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.5s" }}
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-4 py-2">
              <span className="text-gold-gradient font-sans text-3xl font-bold md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 font-mono text-xs uppercase tracking-wider text-foreground/50">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gold/60 transition-colors hover:text-gold"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  )
}
