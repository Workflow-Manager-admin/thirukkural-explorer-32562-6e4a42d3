import React from "react";

/**
 * PUBLIC_INTERFACE
 * About page: Static information about the Thirukkural and Thiruvalluvar, styled with the app theme.
 */
function About() {
  return (
    <section className="hero" tabIndex={-1} aria-labelledby="about-title">
      <div className="subtitle">About Thirukkural</div>
      <h1 className="title" id="about-title">
        The Thirukkural & Thiruvalluvar
      </h1>
      <div className="description" style={{ marginBottom: 30 }}>
        <strong>Thirukkural</strong> is a classic Tamil literary work, composed of 1330 couplets (kurals) on ethics, virtue, wealth, and love. It is one of humanity’s most universal works on moral living, transcending religion, time, and culture. The entire book is divided into three sections: <b>Aram (Virtue)</b>, <b>Porul (Wealth)</b>, and <b>Inbam (Love)</b>.
      </div>
      <div
        className="description"
        style={{
          marginBottom: 22,
          background: "rgba(245,245,245,0.82)",
          color: "#2D3A4A",
          borderRadius: "8px",
          padding: "18px 20px",
          fontWeight: 500,
          boxShadow: "0 2px 8px rgba(45,58,74,0.06)",
          maxWidth: 560,
        }}
      >
        <div style={{ fontSize: "1.04rem", marginBottom: 8 }}>
          <b>About Thiruvalluvar</b>
        </div>
        <div style={{ fontSize: "1.01rem", color: "#444" }}>
          <strong>Thiruvalluvar</strong> was the revered poet and philosopher who authored the Thirukkural. Little is known about his life, but his words have inspired generations as a guide to righteous living and harmony. Valluvar is celebrated for his universal, secular wisdom and humanist outlook.
        </div>
      </div>
      <div
        className="description"
        style={{
          fontSize: "0.99rem",
          lineHeight: 1.6,
          opacity: 0.88,
          maxWidth: 510,
        }}
      >
        <b>Why Explore the Thirukkural?</b>
        <br />
        Its couplets offer timeless advice for all walks of life. With simple yet profound language, the Thirukkural teaches us how to live ethically, build a just society, and form genuine relationships—remaining relevant even after 2000 years.
      </div>
      {/* Inline page-specific styling for subtle emphasis */}
      <style>{`
        @media (max-width: 640px) {
          .hero .title { font-size: 2rem; }
        }
      `}</style>
    </section>
  );
}

export default About;
