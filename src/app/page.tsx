import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import FeaturesGrid from '@/components/FeaturesGrid'
import StatsSection from '@/components/StatsSection'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Chitran - Mental Health Support Platform',
  description: 'Connect with mental health experts and begin your journey to well-being.',
  openGraph: {
    title: 'Chitran - Mental Health Support Platform',
    description: 'Connect with mental health experts and begin your journey to well-being.',
    type: 'website',
  }
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesGrid />
      <StatsSection />
      <TestimonialCarousel />
      <CTASection />
    </main>
  )
}
