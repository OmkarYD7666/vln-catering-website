import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VLN Catering & Event Management | Premium Indian Catering in Pune',
  description:
    'ISO Certified premium catering services in Pune. VLN Caterers specializes in authentic Indian vegetarian cuisine, live counters, sweets, and corporate catering for hotels, IT parks, and grand events.',
  keywords: [
    'VLN Catering',
    'Pune catering',
    'Indian vegetarian catering',
    'corporate catering Pune',
    'wedding catering Pune',
    'ISO certified caterer',
    'live counters',
    'Hyatt Pune caterer',
  ],
  openGraph: {
    title: 'VLN Catering & Event Management',
    description: 'Premium ISO Certified Indian Catering Services in Pune',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1510',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
