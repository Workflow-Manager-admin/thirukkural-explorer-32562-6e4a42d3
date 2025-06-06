import React from "react";

/**
 * PUBLIC_INTERFACE
 * QuizQuestion: Reusable quiz question renderer for MCQ/null-match style questions.
 * Props:
 *   - question: {id, text, choices, correctIndex, explanation?}
 *   - selected: index of user's selected answer (nullable)
 *   - onSelect: function(index) => void
 *   - feedback: "correct" | "incorrect" | null
 *   - showFeedback: boolean (shows correctness after submission)
 *   - showNext: boolean (shows the "Next" button)
 *   - onNext: function to call on clicking "Next" (optional)
 */
function QuizQuestion({
  question,
  selected,
  onSelect,
  feedback,
  showFeedback,
  showNext,
  onNext,
}) {
  // Option labeling: A, B, C, ...
  const optionLabel = (i) => String.fromCharCode(65 + i);

  return (
    <div className="quiz-question-card">
      <div className="quiz-qn-text">
        {question.text}
      </div>
      <div className="quiz-options-list" role="radiogroup" aria-label="Answer choices">
        {question.choices.map((choice, idx) => (
          <button
            key={idx}
            className={
              "quiz-option-btn" +
              (selected === idx ? " selected" : "") +
              ((showFeedback && feedback && selected === idx)
                ? feedback === "correct"
                  ? " correct"
                  : " incorrect"
                : "")
            }
            style={{
              marginBottom: 11,
            }}
            onClick={() => onSelect(idx)}
            disabled={showFeedback}
            aria-label={`Option ${optionLabel(idx)}: ${choice}`}
            tabIndex={0}
          >
            <span className="quiz-option-label">{optionLabel(idx)}</span>
            <span className="quiz-option-text">{choice}</span>
          </button>
        ))}
      </div>
      {showFeedback && (
        <div
          className={
            feedback === "correct"
              ? "quiz-feedback correct"
              : "quiz-feedback incorrect"
          }
          aria-live="polite"
        >
          {feedback === "correct" ? "✅ Correct!" : "❌ Incorrect."}
          {question.explanation && (
            <div className="quiz-qn-expl" style={{ marginTop: 6 }}>
              <b>Explanation:</b> {question.explanation}
            </div>
          )}
        </div>
      )}

      {showNext && (
        <button
          className="btn btn-large"
          style={{ marginTop: 20, minWidth: 120 }}
          onClick={onNext}
          tabIndex={0}
        >
          Next
        </button>
      )}
      {/* Inline styling for isolated component focus */}
      <style>{`
        .quiz-question-card {
          background: var(--secondary);
          border-radius: 8px;
          box-shadow: 0 2px 14px rgba(45,58,74,0.10);
          padding: 28px 16px 20px;
          max-width: 520px;
          margin: 0 auto 20px;
          border: 1.5px solid var(--border-color);
        }
        .quiz-qn-text {
          font-size: 1.22rem;
          color: var(--primary);
          font-weight: 560;
          margin-bottom: 22px;
          text-align: left;
        }
        .quiz-options-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .quiz-option-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          width: 100%;
          background: #fffaf5;
          border: 2px solid #e7d4c0;
          color: #412d12;
          font-size: 1.07rem;
          border-radius: 5px;
          padding: 11px 18px;
          cursor: pointer;
          outline: none;
          transition: border 0.13s, background 0.16s;
        }
        .quiz-option-btn:not(:disabled):hover, .quiz-option-btn:not(:disabled):focus {
          border-color: var(--accent);
          background: #f7ece3;
        }
        .quiz-option-btn.selected {
          border-color: var(--accent);
          background: #faede0;
          color: #2d3a4a;
          font-weight: 600;
        }
        .quiz-option-btn.correct {
          border: 2.5px solid #22a568;
          color: #199a57;
        }
        .quiz-option-btn.incorrect {
          border: 2.5px solid #c71e1e;
          color: #c71e1e;
          background: #ffeded;
        }
        .quiz-option-label {
          font-size: 1.14em;
          font-weight: 500;
          margin-right: 8px;
          display: inline-block;
          min-width: 24px;
          color: var(--accent);
        }
        .quiz-option-text {
          text-align: left;
        }
        .quiz-feedback {
          margin-top: 14px;
          padding: 11px 13px;
          border-radius: 6px;
          background: #ebf7f3;
          color: #1c5c31;
          font-weight: 520;
          font-size: 1.02rem;
        }
        .quiz-feedback.incorrect {
          background: #ffe3e0;
          color: #a0352d;
        }
        .quiz-qn-expl {
          font-size: 0.98em;
          font-weight: 400;
          color: #985f0d;
        }
        @media (max-width: 600px) {
          .quiz-question-card {
            padding: 16px 2vw 14px;
            max-width: 98vw;
          }
          .quiz-qn-text {
            font-size: 1.07rem;
          }
        }
      `}</style>
    </div>
  );
}

export default QuizQuestion;
