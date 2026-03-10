"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const galleryImages = [
  {
    src: "/images/hero-buffet.jpg",
    alt: "Elaborate Indian buffet spread",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/wedding-reception.jpg",
    alt: "Grand wedding catering reception setup",
    span: "md:col-span-2",
  },
  {
    src: "/images/paneer-dish.jpg",
    alt: "Paneer tikka masala in copper bowl",
    span: "",
  },
  {
    src: "/images/sweets.jpg",
    alt: "Traditional Indian sweets platter",
    span: "",
  },
  {
    src: "/images/live-counter.jpg",
    alt: "Chef at live cooking station",
    span: "md:col-span-2",
  },
  {
    src: "/images/chef-plating.jpg",
    alt: "Chef carefully plating gourmet dishes",
    span: "",
  },
  {
    src: "/images/biryani.jpg",
    alt: "Fragrant vegetable biryani in copper handi",
    span: "",
  },
  {
    src: "/images/corporate-catering.jpg",
    alt: "Premium corporate event catering",
    span: "md:col-span-2",
  },
  {
    src: "/images/dal-tadka.jpg",
    alt: "Dal tadka with aromatic tempering",
    span: "",
  },
  {
    src: "/images/chaat-counter.jpg",
    alt: "Mumbai street food chaat counter",
    span: "",
  },
  {
    src: "/images/appetizer-spread.jpg",
    alt: "Elegant appetizer and starter platter",
    span: "",
  },
  {
    src: "/images/dessert-counter.jpg",
    alt: "Luxurious dessert counter display",
    span: "md:col-span-2",
  },
  {
    src: "/images/thali.jpg",
    alt: "Traditional Indian thali",
    span: "",
  },
  {
    src: "/images/curry-preparation.jpg",
    alt: "Chef preparing aromatic curry in kitchen",
    span: "",
  },
  {
    src: "/images/banquet-hall.jpg",
    alt: "Grand banquet hall with luxurious setup",
    span: "md:col-span-2",
  },
]

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section
        id="gallery"
        ref={sectionRef}
        className="relative bg-darker-bg py-24 lg:py-32"
      >
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="mx-auto max-w-7xl px-6">
          {/* Section header */}
          <div
            className={`mb-16 text-center transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-gold">
              Gallery
            </span>
            <h2 className="mb-6 font-sans text-3xl font-bold text-cream md:text-5xl">
              A Visual <span className="text-gold-gradient">Feast</span>
            </h2>
            <div className="mx-auto flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gold/40" />
              <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
              <div className="h-px w-12 bg-gold/40" />
            </div>
            <p className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
              A glimpse into our world of exquisite flavours, elaborate setups, and unforgettable events.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {galleryImages.map((img, index) => (
              <div
                key={img.src}
                className={`group relative cursor-pointer overflow-hidden rounded-sm ${img.span} transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
                onClick={() => setSelectedImage(img.src)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 25vw, 25vw"
                    quality={85}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/30" />
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="font-mono text-xs text-cream">{img.alt}</p>
                  </div>
                  {/* Gold corner accent */}
                  <div className="absolute left-0 top-0 h-0 w-0 border-l-2 border-t-2 border-gold/0 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-gold/60" />
                  <div className="absolute bottom-0 right-0 h-0 w-0 border-b-2 border-r-2 border-gold/0 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-gold/60" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-6 top-6 font-mono text-2xl text-cream/60 transition-colors hover:text-cream"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            {"x"}
          </button>
          <div className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-sm">
            <Image
              src={selectedImage}
              alt="Gallery image fullscreen"
              width={1200}
              height={800}
              className="h-auto max-h-[85vh] w-auto object-contain"
              quality={90}
              priority
            />
          </div>
        </div>
      )}
    </>
  )
}
