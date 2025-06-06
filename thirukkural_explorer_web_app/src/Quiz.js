import React, { useState } from "react";
import QuizQuestion from "./components/QuizQuestion";

/**
 * PUBLIC_INTERFACE
 * Quiz page: presents a series of questions (MCQ or Kural-match), tracks progress, supplies basic feedback.
 * Uses modular QuizQuestion component for clarity and reuse.
 */
function Quiz() {
  // Demo quiz data: mix of MCQ and minimalist kural pair MCQ.
  const demoQuestions = [
    {
      id: 1,
      text: "What is the central theme of the Thirukkural?",
      choices: [
        "Cooking recipes",
        "Ethics, wealth, and love",
        "Astronomical calculations",
        "Epic warfare",
      ],
      correctIndex: 1,
      explanation:
        "The Thirukkural's main sections are: Virtue (Aram), Wealth (Porul), and Love (Inbam).",
    },
    {
      id: 2,
      text:
        "Which of these is the first Kural in the Thirukkural?",
      choices: [
        "அகர முதல எழுத்தெல்லாம் ஆதி\nபகவன் முதற்றே உலகு.",
        "பொறிவாயில் ஐந்தவித்தான் போர் வையகம்",
        "உடைமை அழிவினில் உயர்ந்தது யாதெனின்",
        "அருளாளன் அல்லான் புகழார் சிறுநவி",
      ],
      correctIndex: 0,
      explanation:
        "The first Kural is: 'As A is the first of all letters, so is the Primal God first in the world.'",
    },
    {
      id: 3,
      text: "Pick the correct English meaning for: 'கற்றது கைமண் அளவு கல்லாதது உலகளவு.'",
      choices: [
        "The world is smaller than your palm.",
        "Poverty is eternal.",
        "What you have learned is a mere handful; what you haven’t is vast.",
        "The rich are always virtuous.",
      ],
      correctIndex: 2,
      explanation:
        "This Kural reflects on humility and the boundlessness of knowledge.",
    },
    {
      id: 4,
      text:
        "Who authored the Thirukkural?",
      choices: ["Thiruvalluvar", "Ilango Adigal", "Kambar", "Avvaiyar"],
      correctIndex: 0,
      explanation: "Thiruvalluvar is the revered author of the Thirukkural.",
    },
  ];

  // State hooks
  const [current, setCurrent] = useState(0); // current question index
  const [selected, setSelected] = useState(null); // which option user picked
  const [feedback, setFeedback] = useState(null); // 'correct', 'incorrect', or null
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizDone, setQuizDone] = useState(false);
  const [score, setScore] = useState(0);

  // Handler: when user selects an option
  function handleSelect(optionIdx) {
    if (showFeedback || selected !== null) return;
    setSelected(optionIdx);
    const right = demoQuestions[current].correctIndex === optionIdx;
    setFeedback(right ? "correct" : "incorrect");
    setShowFeedback(true);
    if (right) setScore((prev) => prev + 1);
  }

  // Handler: go to next question
  function handleNext() {
    if (current < demoQuestions.length - 1) {
      setCurrent((prev) => prev + 1);
      setSelected(null);
      setFeedback(null);
      setShowFeedback(false);
    } else {
      setQuizDone(true);
    }
  }

  // Handler: restart quiz
  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setFeedback(null);
    setShowFeedback(false);
    setQuizDone(false);
    setScore(0);
  }

  return (
    <section className="hero" tabIndex={-1} aria-labelledby="quiz-title">
      <div className="subtitle" style={{ textAlign: "center" }}>
        Quiz: Test your Thirukkural knowledge!
      </div>
      <h1 className="title" id="quiz-title">
        Quiz
      </h1>

      <div className="quiz-progress" style={{ margin: "14px 0 24px", color: "var(--accent)", fontWeight: 480 }}>
        {!quizDone && (
          <>
            Question <b>{current + 1}</b> of <b>{demoQuestions.length}</b>
          </>
        )}
        {quizDone && (
          <>
            <span style={{ fontSize: "1.19em" }}>Score: {score} / {demoQuestions.length}</span><br />
            <span style={{ color: "#191f26", fontSize: "1.04em" }}>
              {score === demoQuestions.length
                ? "🌟 Perfect! You are a Kural master!"
                : score >= 2
                ? "👏 Well done!"
                : "✨ Try again for a better score!"}
            </span>
          </>
        )}
      </div>

      {!quizDone && (
        <QuizQuestion
          question={demoQuestions[current]}
          selected={selected}
          onSelect={handleSelect}
          feedback={feedback}
          showFeedback={showFeedback}
          showNext={showFeedback} // Show Next button only after feedback
          onNext={handleNext}
        />
      )}

      {quizDone && (
        <div style={{ marginTop: 24, textAlign: "center" }}>
          <button
            className="btn btn-large"
            style={{ minWidth: 160 }}
            onClick={handleRestart}
          >
            Restart Quiz
          </button>
        </div>
      )}

      <div className="description" style={{ maxWidth: 490, margin: "22px auto 0", fontSize: "0.98rem" }}>
        {quizDone
          ? "You can now try again, or explore the chapters for more Thirukkural wisdom!"
          : "Select an answer for each question below. You will get instant feedback after each selection."}
      </div>

      {/* Minimal style for mobile spacing improvement */}
      <style>{`
        @media (max-width: 600px) {
          .quiz-progress { font-size: 0.99em; margin-bottom: 13px;}
        }
      `}</style>
    </section>
  );
}

export default Quiz;
