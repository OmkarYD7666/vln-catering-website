"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 5000)
    const hideTooltip = setTimeout(() => setShowTooltip(false), 12000)
    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
      clearTimeout(hideTooltip)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="flex items-center gap-2 rounded-lg border border-border/30 bg-card px-4 py-3 shadow-xl shadow-black/30 animate-fade-in-up">
          <p className="font-mono text-xs text-cream">
            Need catering services? Chat with us!
          </p>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-muted-foreground hover:text-cream"
            aria-label="Close tooltip"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hello%20VLN%20Catering!%20I%20would%20like%20to%20inquire%20about%20your%20catering%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white transition-transform group-hover:scale-110" />
        {/* Pulse ring */}
        <span className="absolute h-14 w-14 animate-ping rounded-full bg-[#25D366]/30" />
      </a>
    </div>
  )
}
