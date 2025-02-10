'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function BookAppointmentPage() {
  const params = useParams();
  const therapistId = params.therapistId;

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">
            Book Your Appointment
          </h1>
          
          {/* Add your booking form here */}
          <p className="text-gray-600 mb-4">
            Booking appointment with therapist ID: {therapistId}
          </p>
          
          {/* Placeholder for booking form */}
          <div className="space-y-4">
            <p className="text-gray-600">
              Booking functionality coming soon...
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 