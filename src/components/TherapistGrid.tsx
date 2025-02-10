import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Therapist {
  id: string;
  name: string;
  title: string;
  qualification: string;
  imageUrl: string;
  expertise: string[];
  languages: string[];
  counsellingType: string[];
  nextSlot: string;
  videoEnabled: boolean;
}

const therapists: Therapist[] = [
  {
    id: '1',
    name: 'Aditi Ghosh Dastidar',
    title: 'Therapist',
    qualification: 'M.A. Clinical Psychology',
    imageUrl: '/therapists/aditi.jpg',
    expertise: ['Stress', 'Anxiety', 'Loneliness', 'Emotional Regulation', 'Confidence', 'Self Esteem', 'Lifestyle', 'Workplace'],
    languages: ['Bengali', 'English', 'Hindi'],
    counsellingType: ['Individual'],
    nextSlot: 'Sun, 09 Feb 05:00 PM',
    videoEnabled: true
  },
  // Add more therapists here
];

export default function TherapistGrid() {
  const router = useRouter();

  const handleBookAppointment = (therapistId: string) => {
    router.push(`/book-appointment/${therapistId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {therapists.map((therapist) => (
          <motion.div
            key={therapist.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            {/* Header Section */}
            <div className="bg-teal-700 p-4 text-white">
              <div className="flex items-start gap-4">
                <div className="relative w-20 h-20">
                  <Image
                    src={therapist.imageUrl}
                    alt={therapist.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{therapist.name}</h3>
                  <p className="text-teal-100">{therapist.qualification}</p>
                  <div className="flex gap-2 mt-2">
                    {therapist.videoEnabled && (
                      <span className="flex items-center gap-1">
                        <span>Video</span>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z" />
                          <path d="M3 6a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Expertise Section */}
            <div className="p-4">
              <h4 className="font-semibold mb-2">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {therapist.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-sm bg-teal-50 text-teal-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages Section */}
            <div className="p-4 border-t">
              <h4 className="font-semibold mb-2">Languages</h4>
              <div className="flex gap-2">
                {therapist.languages.map((language) => (
                  <span key={language} className="text-gray-600">
                    {language}
                  </span>
                ))}
              </div>
            </div>

            {/* Counselling Type */}
            <div className="p-4 border-t">
              <h4 className="font-semibold mb-2">Counselling</h4>
              <div className="flex gap-2">
                {therapist.counsellingType.map((type) => (
                  <span key={type} className="text-gray-600">
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Next Available Slot & Action Button */}
            <div className="p-4 bg-gray-50">
              <p className="text-sm text-gray-600 mb-3">
                Next Available Slot: {therapist.nextSlot}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleBookAppointment(therapist.id)}
                  className="flex-1 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Book Appointment
                </button>
                <button 
                  onClick={() => router.push(`/therapist/${therapist.id}`)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  View Profile
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 