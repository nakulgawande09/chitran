'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Using similar styling to HeroSection.tsx */}
      <section className="relative min-h-[60vh] bg-gradient-to-b from-blue-50 to-white pt-32">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-semibold text-gray-900 mb-6"
          >
            About us
          </motion.h1>
        </div>
      </section>

      {/* Mission Section - Using CTASection.tsx color scheme */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl md:text-4xl font-semibold mb-6 text-white"
            >
              We reimagine mental healthcare for everyone
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xl text-blue-100 leading-relaxed"
            >
              At Chitran, we believe that mental wellness should be accessible to all. Our platform connects individuals with qualified mental health professionals, providing a safe space for healing and growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Founder Section - Using FeaturesGrid.tsx styling */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900"
              >
                A letter from our Founder
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Our journey began with a simple yet powerful vision: to make mental healthcare accessible, affordable, and stigma-free. Through technology and compassion, we&apos;re building a platform that connects people with the support they need, when they need it.
              </motion.p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/founder.jpg"
                alt="Founder"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Using AssessmentGrid.tsx card styling */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-gray-900">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Accessibility',
                description: 'Making mental healthcare available to everyone, everywhere.'
              },
              {
                title: 'Empathy',
                description: 'Understanding and supporting each individuals unique journey.'
              },
              {
                title: 'Innovation',
                description: 'Using technology to create better mental healthcare solutions.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 