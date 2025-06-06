import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * Expandable card showing a chapter (Athigaaram); when expanded, lists its Kurals.
 * Props:
 *   - title: string (chapter name)
 *   - kurals: array of { number, tamil, english, explanation }
 *   - initiallyExpanded: boolean (optional, default: false)
 */
function AthigaaramCard({ title, kurals, initiallyExpanded }) {
  const [expanded, setExpanded] = useState(initiallyExpanded || false);

  const handleToggle = () => setExpanded((prev) => !prev);

  return (
    <div className="athigaaram-card" tabIndex={0} aria-expanded={expanded}>
      <button
        className="athigaaram-title"
        onClick={handleToggle}
        aria-controls={`kurals-list-${title}`}
        aria-label={expanded ? `Collapse ${title}` : `Expand ${title} to view Kurals`}
        tabIndex={0}
      >
        <span>{title}</span>
        <span
          className="expand-icon"
          style={{
            marginLeft: 12,
            transition: "transform 0.18s cubic-bezier(.4,0,.2,1)",
            transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
            display: "inline-block",
          }}
          aria-hidden="true"
        >
          ▶
        </span>
      </button>
      {expanded && (
        <div className="kurals-list" id={`kurals-list-${title}`}>
          {kurals && kurals.length > 0 ? (
            kurals.map((kural) => (
              <div key={kural.number} className="kural-entry">
                <div className="kural-tamil">{kural.tamil}</div>
                <div className="kural-english">{kural.english}</div>
                <div className="kural-expl">{kural.explanation}</div>
              </div>
            ))
          ) : (
            <div className="kural-empty">No Kurals available for this demo.</div>
          )}
        </div>
      )}
      {/* Styling directly here; real code would move styles to a .css file */}
      <style>{`
        .athigaaram-card {
          background: var(--secondary);
          border-radius: 7px;
          box-shadow: 0 2px 12px rgba(45,58,74,0.05);
          margin: 16px 0;
          padding: 0;
          overflow: hidden;
          border: 1.5px solid var(--border-color);
          transition: box-shadow 0.16s;
        }
        .athigaaram-card:focus-within, .athigaaram-card:focus-visible {
          box-shadow: 0 0 0 2px var(--accent);
        }
        .athigaaram-title {
          width: 100%;
          background: none;
          border: none;
          outline: none;
          color: var(--primary);
          font-size: 1.17rem;
          font-weight: 600;
          padding: 22px 24px;
          text-align: left;
          display: flex;
          align-items: center;
          cursor: pointer;
          border-bottom: 1px solid #eee;
          transition: background 0.12s;
          border-radius: 7px 7px 0 0;
        }
        .athigaaram-title:hover, .athigaaram-title:focus {
          background: rgba(193, 154, 107, 0.05);
        }
        .kurals-list {
          padding: 16px 22px 16px 32px;
          background: #fffaf5;
          animation: fadeinKural 0.25s;
        }
        @keyframes fadeinKural {
          0% { opacity: 0; transform: translateY(-7px);}
          100%{opacity:1; transform: translateY(0);}
        }
        .kural-entry {
          margin-bottom: 18px;
          padding-bottom: 10px;
          border-bottom: 1px solid #f1e8de;
        }
        .kural-entry:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }
        .kural-tamil {
          font-family: 'Noto Sans Tamil', 'Latha', Arial, sans-serif;
          font-size: 1.12rem;
          font-weight: 500;
          color: #2d3a4a;
          margin-bottom: 2px;
        }
        .kural-english {
          font-size: 1.02rem;
          color: #785e38;
          margin-bottom: 2px;
        }
        .kural-expl {
          font-size: 0.98rem;
          color: #555;
        }
        @media (max-width: 600px) {
          .athigaaram-title { font-size: 1.03rem; padding: 16px 12px;}
          .kurals-list { padding: 12px 8px 12px 18px;}
        }
      `}</style>
    </div>
  );
}

export default AthigaaramCard;
