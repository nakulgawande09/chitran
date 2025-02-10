import TherapistGrid from '@/components/TherapistGrid';

export default function BookAppointmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <section className="pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-teal-900 mb-4">
          Our Mental Health Professionals
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Connect with experienced therapists, psychologists, and psychiatrists who can help you on your journey to better mental health.
        </p>
      </section>
      
      <TherapistGrid />
    </main>
  );
} 