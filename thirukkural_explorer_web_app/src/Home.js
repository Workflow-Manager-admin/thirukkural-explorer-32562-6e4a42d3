import React from "react";
import AthigaaramCard from "./components/AthigaaramCard";

// Small dataset for 5 demo Athigaarams with Kurals
const athigaaramsData = [
  {
    title: "அறத்துப்பால் (Virtue)",
    kurals: [
      {
        number: 1,
        tamil: "அகர முதல எழுத்தெல்லாம் ஆதி\nபகவன் முதற்றே உலகு.",
        english: "A, as its first of letters, every speech maintains;\nThe 'Primal Deity' is first through all the world's domains.",
        explanation: "As 'A' is the first of all letters, so is the Primal God first in the world.",
      },
      {
        number: 2,
        tamil: "கற்றது கைமண் அளவு\nகல்லாதது உலகளவு.",
        english: "What you have learned is a mere handful;\nWhat you haven’t is the size of the world.",
        explanation: "Human knowledge is limited; what remains unknown is vast.",
      },
    ],
  },
  {
    title: "இன்பத்துப்பால் (Wealth)",
    kurals: [
      {
        number: 3,
        tamil: "அற்றான் அமர்பின் இளையர்\nஅறம் செய்யின் மற்றுஅற்றார் மன்ற கொளல்.",
        english: "If the poor do virtue, their poverty disappears;\nTheir gain outshines their want, when rightly spent.",
        explanation: "Virtuous acts help remove poverty and bring honor.",
      },
    ],
  },
  {
    title: "பொருட்பால் (Right Conduct)",
    kurals: [
      {
        number: 4,
        tamil: "கேடில் விழுச்செல்வம் கல்வி யொருவற்குத்\nதாளைநின் றதாம் உலகு.",
        english: "Learning is the true, imperishable wealth;\nIt stands by a man and supports him in all life's stages.",
        explanation: "Education is the only wealth that remains forever.",
      },
    ],
  },
  {
    title: "காமத்துப்பால் (Love)",
    kurals: [
      {
        number: 5,
        tamil: "முகத்துச் சிரிப்பது நட்பின் குறிக்கொண்டும்\nஉணர்வது அம்பின் இலன்.",
        english: "A friendly smile shows the mark of friendship,\nbut deeper love is not easily perceived.",
        explanation: "Outward signs can show friendship, but not real love.",
      },
    ],
  },
  {
    title: "வாழ்க்கை நெறிகள் (Life's Ways)",
    kurals: [
      {
        number: 6,
        tamil: "உடையான் உயர்ந்தான் உலகில் கடையனும்\nகேடில் கிடைக்குங் கணி.",
        english: "The rich are treated as great in this world,\nEven the meanest earns respect if he gains wealth.",
        explanation: "Wealth often brings respect, even if undeserved.",
      },
    ],
  },
];

// PUBLIC_INTERFACE
function Home() {
  return (
    <div className="home-page-main">
      <section className="hero hero--home" tabIndex={-1}>
        <div className="subtitle" style={{ textAlign: "center" }}>
          Explore Thirukkural by Chapter (அதிகாரம்)
        </div>
        <h1 className="title" style={{ fontSize: "2.8rem", margin: "10px 0 4px 0", letterSpacing: "-1px" }}>
          Home
        </h1>
        <div className="description" style={{margin:'0 auto 18px',textAlign:'center',maxWidth:'520px'}}>
          Select an Athigaaram (chapter) to view some sample Kurals. Click each card to expand or collapse its Kurals.
        </div>
      </section>
      <div className="athigaaram-list" style={{
        display: 'grid',
        gap: '22px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        margin: '16px 0 36px',
      }}>
        {athigaaramsData.map((athigaaram, idx) => (
          <AthigaaramCard
            key={athigaaram.title}
            title={athigaaram.title}
            kurals={athigaaram.kurals}
            initiallyExpanded={false}
          />
        ))}
      </div>
      {/* Inline style for responsivity and theming, move to App.css for future extension */}
      <style>{`
        .home-page-main {
          max-width: 880px;
          margin: 0 auto;
          padding: 0 12px 44px 12px;
        }
        @media (max-width: 820px) {
          .home-page-main {
            max-width: none;
            padding: 0 2px 28px 2px;
          }
        }
        .athigaaram-list {
          width: 100%;
        }
      `}
      </style>
    </div>
  );
}

export default Home;
