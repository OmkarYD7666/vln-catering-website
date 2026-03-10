import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import StatsSection from "@/components/stats-section"
import ServicesSection from "@/components/services-section"
import NostalgiaSection from "@/components/nostalgia-section"
import GallerySection from "@/components/gallery-section"
import VideoSection from "@/components/video-section"
import ClientsSection from "@/components/clients-section"
import HygieneSection from "@/components/hygiene-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <NostalgiaSection />
      <GallerySection />
      <VideoSection />
      <ClientsSection />
      <HygieneSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  )
}
