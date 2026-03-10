"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

const videos = [
  {
    title: "Grand Wedding Setup",
    description: "A glimpse into how we transform venues into culinary wonderlands",
    src: "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
    poster: "/images/wedding-catering.jpg",
  },
  {
    title: "Live Kitchen in Action",
    description: "Watch our chefs create magic at interactive cooking stations",
    src: "https://videos.pexels.com/video-files/3298572/3298572-uhd_2560_1440_25fps.mp4",
    poster: "/images/live-counter.jpg",
  },
  {
    title: "Corporate Excellence",
    description: "Precision catering for Pune's leading IT companies and corporations",
    src: "https://videos.pexels.com/video-files/6893990/6893990-uhd_2732_1440_25fps.mp4",
    poster: "/images/corporate-event.jpg",
  },
]

function VideoCard({
  video,
  index,
  isVisible,
}: {
  video: (typeof videos)[0]
  index: number
  isVisible: boolean
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-sm border border-border/30 bg-card transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative aspect-video overflow-hidden">
        <video
          ref={videoRef}
          muted={isMuted}
          loop
          playsInline
          poster={video.poster}
          preload="none"
          loading="lazy"
          className="h-full w-full object-cover"
          onEnded={() => setIsPlaying(false)}
        >
          <source src={video.src} type="video/mp4" />
        </video>

        {/* Overlay Controls */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all group-hover:bg-black/40">
          <button
            onClick={togglePlay}
            className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/60 bg-black/50 text-gold backdrop-blur-sm transition-all hover:scale-110 hover:border-gold hover:bg-black/70"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="ml-1 h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mute button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-cream/70 backdrop-blur-sm transition-all hover:text-gold"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </button>
      </div>

      <div className="p-6">
        <h3 className="mb-2 font-sans text-lg font-semibold text-cream">
          {video.title}
        </h3>
        <p className="font-mono text-xs leading-relaxed text-muted-foreground">
          {video.description}
        </p>
      </div>
    </div>
  )
}

export default function VideoSection() {
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
    <section ref={sectionRef} className="relative bg-background py-24 lg:py-32">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Experience
          </span>
          <h2 className="mb-6 font-sans text-3xl font-bold text-cream md:text-5xl">
            See Us <span className="text-gold-gradient">In Action</span>
          </h2>
          <div className="mx-auto flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/40" />
            <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
            Watch how we orchestrate grand culinary experiences, from meticulous
            preparation to flawless execution.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <VideoCard
              key={video.title}
              video={video}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
