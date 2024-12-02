'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    quote: "Chitran helped me find the perfect therapist. The platform made the entire process comfortable and easy.",
    author: "Sarah Chen",
    role: "Product Designer",
    avatar: "/avatars/sarah.jpg"
  },
  {
    quote: "The resource library has been invaluable in my mental health journey. I feel supported every step of the way.",
    author: "Michael Rodriguez",
    role: "Software Engineer",
    avatar: "/avatars/michael.jpg"
  },
  {
    quote: "As a mental health professional, Chitran has transformed how I connect with and support my clients.",
    author: "Dr. Emily Watson",
    role: "Clinical Psychologist",
    avatar: "/avatars/emily.jpg"
  }
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-semibold text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Stories of Transformation
        </motion.h2>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <blockquote className="text-2xl md:text-3xl text-gray-900 leading-relaxed mb-8">
                "{testimonials[current].quote}"
              </blockquote>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-200 mb-4 overflow-hidden">
                  {testimonials[current].avatar && (
                    <img 
                      src={testimonials[current].avatar} 
                      alt={testimonials[current].author}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <cite className="not-italic">
                  <div className="font-semibold text-lg text-gray-900">
                    {testimonials[current].author}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[current].role}
                  </div>
                </cite>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}