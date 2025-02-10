import { motion } from "framer-motion";

interface EmailInputModalProps {
  isOpen: boolean;
  onSubmit: (email: string) => void;
  onClose: () => void;
}

export default function EmailInputModal({
  isOpen,
  onSubmit,
  onClose,
}: EmailInputModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    onSubmit(email);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-xl p-8 max-w-md w-full"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Enter Your Email
        </h2>
        <p className="text-gray-600 mb-6">
          Please provide your email to receive your assessment results
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              placeholder="your@email.com"
            />
          </div>
          
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Continue
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
} 