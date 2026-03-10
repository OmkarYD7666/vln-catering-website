"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function NostalgiaSection() {
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
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Parallax Background */}
      <div className="relative min-h-[70vh]">
        <Image
          src="/images/thali.jpg"
          alt="Authentic Indian thali"
          fill
          className="object-cover"
          sizes="100vw"
          quality={80}
          priority
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 py-20 text-center">
          <div
            className={`max-w-3xl transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-gold">
              Our Philosophy
            </span>
            <h2 className="mb-8 font-sans text-3xl font-bold leading-tight text-cream md:text-5xl lg:text-6xl">
              The <span className="text-gold-gradient">Authentic Taste</span> of India,
              <br />
              Served with Nostalgia
            </h2>

            <div className="mx-auto mb-8 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gold/40" />
              <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
              <div className="h-px w-16 bg-gold/40" />
            </div>

            <p className="mb-6 font-mono text-sm leading-relaxed text-cream/70 md:text-base">
              Every dish at VLN is a journey through the heartlands of India. Our recipes
              are inspired by generations of culinary wisdom -- the exact same tadka your
              grandmother perfected, the same slow-cooked dal that filled your childhood
              home with warmth, the same hand-rolled rotis that tasted like love.
            </p>
            <p className="font-mono text-sm leading-relaxed text-cream/70 md:text-base">
              We don&apos;t just cater food. We serve memories. Every spice is measured with
              care, every gravy simmered to perfection, every sweet prepared with the same
              devotion that Indian households have practised for centuries. This is not
              commercial cooking -- this is the soul of Indian hospitality on a grand scale.
            </p>

            {/* Decorative stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="text-gold-gradient font-sans text-3xl font-bold md:text-4xl">
                  200+
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-cream/50">
                  Veg Dishes
                </p>
              </div>
              <div>
                <p className="text-gold-gradient font-sans text-3xl font-bold md:text-4xl">
                  50+
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-cream/50">
                  Sweet Varieties
                </p>
              </div>
              <div>
                <p className="text-gold-gradient font-sans text-3xl font-bold md:text-4xl">
                  12+
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-cream/50">
                  Live Counters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
