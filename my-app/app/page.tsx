import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { DemoGallery } from '@/components/demo-gallery'
import { PricingSection } from '@/components/pricing-section'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'woyangnia.com - Create Your Romantic Couple Website',
  description: 'Build a beautiful, personalized website to celebrate your love story. Custom subdomains, photo galleries, anniversary counters, and romantic themes.',
  keywords: ['couple website', 'romantic website', 'love page', 'anniversary', 'couple gallery'],
  openGraph: {
    title: 'woyangnia.com - Create Your Romantic Couple Website',
    description: 'Build a beautiful, personalized website to celebrate your love story.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <DemoGallery />
      <PricingSection />
      <Footer />
    </main>
  )
}
