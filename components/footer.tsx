import Image from "next/image"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
]

const services = [
  "Pure Veg Delicacies",
  "Traditional Sweets",
  "Live Cooking Counters",
  "Chaat & Street Food",
  "Corporate Catering",
  "Grand Event Catering",
]

export default function Footer() {
  return (
    <footer className="relative bg-darker-bg">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="VLN Caterers Logo"
                width={60}
                height={60}
                className="h-14 w-auto"
              />
              <div>
                <p className="text-gold-gradient font-sans text-lg font-bold tracking-wider">
                  VLN Caterers
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  {"& Event Management"}
                </p>
              </div>
            </div>
            <p className="mb-4 font-mono text-xs leading-relaxed text-muted-foreground">
              ISO Certified premium catering services delivering authentic Indian
              vegetarian cuisine to Pune&apos;s finest hotels, corporates, and events since 2009.
            </p>
            <p className="mb-6 font-mono text-[10px] text-muted-foreground">
              <span className="text-gold font-semibold">Managing Director:</span> Mr. Gajanan Sharma
            </p>
            <div className="flex items-center gap-2 rounded-sm border border-gold/20 bg-gold/5 px-3 py-2 w-fit">
              <div className="h-2 w-2 rounded-full bg-gold" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-gold">
                ISO 22000 Certified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 font-sans text-sm font-semibold uppercase tracking-wider text-cream">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-gold"
                  >
                    <span className="h-px w-3 bg-border transition-all group-hover:w-5 group-hover:bg-gold" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 font-sans text-sm font-semibold uppercase tracking-wider text-cream">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="group flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-gold"
                  >
                    <span className="h-px w-3 bg-border transition-all group-hover:w-5 group-hover:bg-gold" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 font-sans text-sm font-semibold uppercase tracking-wider text-cream">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+918888872700"
                  className="flex items-center gap-3 font-mono text-xs text-muted-foreground transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-gold/60" />
                  +91 88888 72700
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919673130070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-mono text-xs text-muted-foreground transition-colors hover:text-gold"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0 text-gold/60" />
                  +91 96731 30070
                </a>
              </li>
              <li>
                <a
                  href="mailto:operations@vln.com"
                  className="flex items-center gap-3 font-mono text-xs text-muted-foreground transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-gold/60" />
                  operations@vln.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold/60" />
                  <span className="font-mono text-xs text-muted-foreground">
                    Anand Nagar Lane No.03, Wadgaon Sheri, Pune 411014
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-border/30 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-mono text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} VLN Catering & Event Management. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-gold/40" />
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Crafted with passion in Pune, India
              </p>
              <div className="h-1 w-1 rounded-full bg-gold/40" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
