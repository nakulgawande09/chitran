import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import FeatureCards from '@/components/FeatureCards'

export const metadata: Metadata = {
  title: 'Your Mental Health Matter - keepapp',
  description: 'Take back control of your mental health. Train your brain with pleasure, develop memory, attention and thinking.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <HeroSection />
      <FeatureCards />
    </main>
  )
}
