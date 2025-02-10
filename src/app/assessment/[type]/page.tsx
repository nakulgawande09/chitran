/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import QuestionNav from "@/components/assessment/QuestionNav";
import Timer from "@/components/assessment/Timer";
import { AssessmentProgress, AssessmentTest } from "@/types/assessment";
import { AnimatePresence, motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import EmailInputModal from "@/components/assessment/EmailInputModal";
import ResultsModal from "@/components/assessment/ResultsModal";
import { generateAISummaryWithGroq } from "@/utils/ai";
export default function AssessmentPage() {
  const params = useParams();
  const router = useRouter();
  const [test, setTest] = useState<AssessmentTest | null>(null);
  const [progress, setProgress] = useState<AssessmentProgress>({
    currentQuestion: 0,
    answeredQuestions: [],
    timeRemaining: 0,
    answers: {},
    email: "",
  });
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [severity, setSeverity] = useState('');
  const [aiSummary, setAiSummary] = useState('');
  const [showEmailModal, setShowEmailModal] = useState(false);

  useEffect(() => {
    // Fetch questions based on assessment type
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`/api/assessments/${params.type}`);
        const data = await response.json();
        setTest(data);
        setProgress((prev) => ({
          ...prev,
          timeRemaining: data.timeLimit * 60, // Convert to seconds
        }));
      } catch (error) {
        console.error("Error fetching questions:", error);
        router.push("/assessment");
      }
    };

    fetchQuestions();
  }, [params.type, router]);

  const handleAnswer = (questionId: number, answerId: number) => {
    setProgress((prev) => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: answerId },
      answeredQuestions: [...new Set([...prev.answeredQuestions, questionId])],
    }));
  };

  const handleTimeUp = () => {
    // Submit assessment when time is up
    handleSubmit();
  };

  const generateAISummary = async (answers: Record<number, number>, type: string, severity: string) => {
    return await generateAISummaryWithGroq(answers, type, severity);
  };

  const handleSubmit = async () => {
    if (!progress.email) {
      setShowEmailModal(true);
      return;
    }

    try {
      const calculatedScore = calculateScore(
        Object.values(progress.answers).map((value) => ({
          id: value,
          value: value,
        }))
      );

      const severityLevel = getSeverityLevel(calculatedScore, params.type as string);
      const summary = await generateAISummary(progress.answers, params.type as string, severityLevel);

      setScore(calculatedScore);
      setSeverity(severityLevel);
      setAiSummary(summary);
      setShowResults(true);
    } catch (error) {
      console.error("Error submitting assessment:", error);
    }
  };

  const handleEmailSubmit = (email: string) => {
    setProgress(prev => ({ ...prev, email }));
    setShowEmailModal(false);
    handleSubmit();
  };

  /**
   * Function to calculate the total score for a questionnaire
   * @param {Array} responses - Array of user responses in the format [{id: 1, value: 2}, {id: 2, value: 3}, ...]
   * @returns {number} - Total score
   */
  function calculateScore(responses: { id: number; value: number }[]) {
    return responses.reduce((total, response) => total + response.value, 0);
  }

  /**
   * Function to determine the severity level based on score thresholds
   * @param {number} score - The total questionnaire score
   * @param {string} type - Type of questionnaire ('anxiety', 'stress', 'sleep')
   * @returns {string} - Severity level
   */
  function getSeverityLevel(score: number, type: string) {
    const severityLevels = {
      anxiety: [
        { min: 0, max: 4, level: "Minimal Anxiety" },
        { min: 5, max: 9, level: "Mild Anxiety" },
        { min: 10, max: 14, level: "Moderate Anxiety" },
        { min: 15, max: 21, level: "Severe Anxiety" },
      ],
      stress: [
        { min: 0, max: 5, level: "Minimal Stress" },
        { min: 6, max: 10, level: "Mild Stress" },
        { min: 11, max: 15, level: "Moderate Stress" },
        { min: 16, max: 21, level: "Severe Stress" },
      ],
      sleep: [
        { min: 0, max: 5, level: "Good Sleep Quality" },
        { min: 6, max: 10, level: "Mild Sleep Disturbance" },
        { min: 11, max: 15, level: "Moderate Sleep Issues" },
        { min: 16, max: 21, level: "Severe Sleep Problems" },
      ],
    };

    const levels = severityLevels[type as keyof typeof severityLevels];
    if (!levels) return "Unknown Severity";

    return (
      levels.find((level) => score >= level.min && score <= level.max)?.level ||
      "Unknown Severity"
    );
  }

  if (!test) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header with Timer */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              {test.title}
            </h1>
            <Timer
              initialTime={test.timeLimit * 60}
              onTimeUp={handleTimeUp}
              className="text-xl font-mono"
            />
          </div>

          <div className="flex gap-6">
            {/* Question Navigation */}
            <QuestionNav
              totalQuestions={test.totalQuestions}
              answeredQuestions={progress.answeredQuestions}
              currentQuestion={progress.currentQuestion}
              onQuestionSelect={(q) =>
                setProgress((prev) => ({ ...prev, currentQuestion: q }))
              }
            />

            {/* Question Content */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={progress.currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-xl shadow-lg p-8 mb-6"
                >
                  <h2 className="text-2xl text-gray-900 mb-8 font-medium">
                    {test.questions[progress.currentQuestion].text}
                  </h2>
                  <div className="space-y-4">
                    {test.questions[progress.currentQuestion].options.map(
                      (option) => (
                        <motion.button
                          key={option.id}
                          onClick={() =>
                            handleAnswer(progress.currentQuestion, option.id)
                          }
                          className={`w-full text-left p-6 rounded-xl border-2 transition-all
                          ${
                            progress.answers[progress.currentQuestion] ===
                            option.id
                              ? "border-blue-500 bg-blue-50 shadow-md"
                              : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                          }
                        `}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="text-lg font-medium block text-gray-900">
                            {option.text}
                          </span>
                          {option.value !== undefined && (
                            <span className="text-sm text-gray-500 mt-1 block">
                              Score: {option.value}
                            </span>
                          )}
                        </motion.button>
                      )
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Submit Button */}
              <motion.div
                className="flex justify-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <button
                  onClick={handleSubmit}
                  className={`
                    px-8 py-4 rounded-xl text-lg font-medium
                    ${
                      progress.answeredQuestions.length === test.totalQuestions
                        ? "bg-blue-500 hover:bg-blue-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }
                    transition-all duration-200
                  `}
                  disabled={
                    progress.answeredQuestions.length !== test.totalQuestions
                  }
                >
                  {progress.answeredQuestions.length === test.totalQuestions
                    ? "Submit Assessment"
                    : `Answer all questions (${progress.answeredQuestions.length}/${test.totalQuestions})`}
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <EmailInputModal
        isOpen={showEmailModal}
        onSubmit={handleEmailSubmit}
        onClose={() => setShowEmailModal(false)}
      />
      
      <ResultsModal
        isOpen={showResults}
        onClose={() => setShowResults(false)}
        score={score}
        severity={severity}
        type={params.type as string}
        email={progress.email}
        aiSummary={aiSummary}
      />
    </div>
  );
}
