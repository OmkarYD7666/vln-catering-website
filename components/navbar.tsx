"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-darker-bg/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="VLN Caterers Logo"
            width={60}
            height={60}
            className="h-12 w-auto lg:h-14"
            priority
          />
          <div className="hidden sm:block">
            <p className="text-gold-gradient font-sans text-lg font-bold tracking-wider lg:text-xl">
              VLN Caterers
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {"& Event Management"}
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative font-mono text-sm uppercase tracking-wider text-foreground/80 transition-colors hover:text-gold"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+918888872700"
            className="flex items-center gap-2 rounded-sm border border-gold/30 bg-gold/10 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-primary-foreground"
          >
            <Phone className="h-3.5 w-3.5" />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-gold lg:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          {isMobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          isMobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gold/10 bg-darker-bg/98 px-6 pb-8 pt-4 backdrop-blur-xl">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block border-b border-border/30 pb-3 font-mono text-sm uppercase tracking-wider text-foreground/80 transition-colors hover:text-gold"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:+918888872700"
            className="mt-6 flex items-center justify-center gap-2 rounded-sm border border-gold bg-gold/10 px-5 py-3 font-mono text-sm uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </div>
    </header>
  )
}
