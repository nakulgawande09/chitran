import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown';

interface ResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  score: number;
  severity: string;
  type: string;
  email: string;
  aiSummary: string;
}

export default function ResultsModal({
  isOpen,
  onClose,
  score,
  severity,
  type,
  email,
  aiSummary
}: ResultsModalProps) {
  if (!isOpen) return null;

  const getExplanation = (severity: string, type: string) => {
    const explanations: Record<string, Record<string, string>> = {
      anxiety: {
        "Minimal Anxiety": "Your anxiety levels are within a normal range.",
        "Mild Anxiety": "You're experiencing some anxiety symptoms.",
        "Moderate Anxiety": "Your anxiety levels are notable.",
        "Severe Anxiety": "You're experiencing significant anxiety."
      },
      stress: {
        "Minimal Stress": "Your stress levels are manageable.",
        "Mild Stress": "You're handling some stress.",
        "Moderate Stress": "Your stress levels are elevated.",
        "Severe Stress": "You're experiencing high stress levels."
      },
      sleep: {
        "Good Sleep Quality": "You're maintaining healthy sleep patterns.",
        "Mild Sleep Disturbance": "You're experiencing some sleep issues.",
        "Moderate Sleep Issues": "Your sleep quality is affected.",
        "Severe Sleep Problems": "You're experiencing significant sleep difficulties."
      }
    };

    return explanations[type]?.[severity] || "Assessment complete.";
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Assessment Results</h2>
        
        <div className="space-y-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">Results sent to:</p>
            <p className="text-blue-600 font-medium">{email}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Score:</p>
              <p className="text-2xl font-semibold text-gray-900">{score} points</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Assessment:</p>
              <p className="text-2xl font-semibold text-gray-900">{severity}</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Clinical Interpretation:</p>
            <p className="text-gray-900">{getExplanation(severity, type)}</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg prose prose-blue max-w-none">
            <p className="text-sm text-blue-600 mb-2">AI-Generated Summary:</p>
            <ReactMarkdown
              components={{
                h1: ({children}) => <h1 className="text-xl font-bold text-gray-900 mb-4">{children}</h1>,
                h2: ({children}) => <h2 className="text-lg font-semibold text-gray-800 mt-4 mb-2">{children}</h2>,
                p: ({children}) => <p className="text-gray-700 mb-2">{children}</p>,
                ul: ({children}) => <ul className="list-disc pl-4 mb-2">{children}</ul>,
                li: ({children}) => <li className="text-gray-700">{children}</li>
              }}
            >
              {aiSummary}
            </ReactMarkdown>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => window.print()}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Download Report
          </button>
        </div>
      </motion.div>
    </div>
  );
} 