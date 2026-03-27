import { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  ChevronRight,
} from "lucide-react";
import quizQuestions from "../data/quiz";

const grades = [
  { min: 90, label: "Git Master 🏆", color: "#3fb950", message: "Outstanding! You truly understand Git inside and out!" },
  { min: 70, label: "Git Pro ⭐", color: "#2f81f7", message: "Great job! You have a solid grasp of Git fundamentals." },
  { min: 50, label: "Getting There 📚", color: "#d29922", message: "Good start! Review the topics you missed and try again." },
  { min: 0, label: "Git Beginner 🌱", color: "#f85149", message: "Don't worry — read through the lessons and come back stronger!" },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion) / quizQuestions.length) * 100;

  const handleAnswer = (index) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    const isCorrect = index === question.correctAnswer;
    if (isCorrect) setScore((s) => s + 1);
    setAnswers((prev) => [...prev, { questionId: question.id, selected: index, correct: isCorrect }]);
  };

  const handleNext = () => {
    if (currentQuestion + 1 >= quizQuestions.length) {
      setQuizComplete(true);
    } else {
      setCurrentQuestion((c) => c + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswers([]);
    setQuizComplete(false);
  };

  const percentage = Math.round((score / quizQuestions.length) * 100);
  const grade = grades.find((g) => percentage >= g.min);

  if (quizComplete) {
    return (
      <div className="max-w-xl mx-auto text-center">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 animate-fade-in">
          <Trophy size={64} className="mx-auto mb-4" style={{ color: grade.color }} />
          <h3 className="text-3xl font-bold text-[#e6edf3] mb-2">Quiz Complete!</h3>
          <div className="my-6">
            <div className="text-6xl font-bold mb-2" style={{ color: grade.color }}>
              {score}/{quizQuestions.length}
            </div>
            <p className="text-lg text-[#8b949e]">{percentage}% correct</p>
          </div>
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: `${grade.color}20`, color: grade.color }}
          >
            {grade.label}
          </div>
          <p className="text-[#8b949e] mb-8">{grade.message}</p>

          {/* Answer summary */}
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-8">
            {answers.map((a, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                  a.correct
                    ? "bg-[#3fb950]/20 text-[#3fb950]"
                    : "bg-[#f85149]/20 text-[#f85149]"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>

          <button
            onClick={handleRetry}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2f81f7] text-white
              rounded-lg font-medium hover:bg-[#2f81f7]/80 transition-colors"
          >
            <RotateCcw size={16} /> Retry Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-[#8b949e]">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
          <span className="text-sm font-medium text-[#2f81f7]">
            Score: {score}
          </span>
        </div>
        <div className="h-2 bg-[#21262d] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#2f81f7] rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestion + (showExplanation ? 1 : 0)) / quizQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 animate-fade-in">
        <h3 className="text-lg font-semibold text-[#e6edf3] mb-6 leading-relaxed">
          {question.question}
        </h3>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            let borderColor = "border-[#30363d]";
            let bgColor = "bg-[#0d1117]";
            let icon = null;

            if (showExplanation) {
              if (index === question.correctAnswer) {
                borderColor = "border-[#3fb950]";
                bgColor = "bg-[#3fb950]/10";
                icon = <CheckCircle2 size={18} className="text-[#3fb950] shrink-0" />;
              } else if (index === selectedAnswer && index !== question.correctAnswer) {
                borderColor = "border-[#f85149]";
                bgColor = "bg-[#f85149]/10";
                icon = <XCircle size={18} className="text-[#f85149] shrink-0" />;
              }
            } else if (index === selectedAnswer) {
              borderColor = "border-[#2f81f7]";
              bgColor = "bg-[#2f81f7]/10";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showExplanation}
                className={`w-full flex items-center gap-3 p-4 rounded-lg border ${borderColor} ${bgColor}
                  text-left transition-all ${
                    !showExplanation
                      ? "hover:border-[#2f81f7] hover:bg-[#2f81f7]/5 cursor-pointer"
                      : "cursor-default"
                  }`}
              >
                <span className="w-7 h-7 rounded-full border border-[#30363d] flex items-center justify-center text-xs font-mono text-[#8b949e] shrink-0">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-sm text-[#e6edf3] flex-1">{option}</span>
                {icon}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="mt-6 p-4 bg-[#0d1117] border border-[#30363d] rounded-lg animate-fade-in">
            <p className="text-sm text-[#8b949e] leading-relaxed">
              <span className="text-[#2f81f7] font-semibold">Explanation: </span>
              {question.explanation}
            </p>
          </div>
        )}

        {/* Next button */}
        {showExplanation && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2f81f7] text-white
                rounded-lg font-medium hover:bg-[#2f81f7]/80 transition-colors text-sm"
            >
              {currentQuestion + 1 >= quizQuestions.length ? "See Results" : "Next Question"}
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
