import React from 'react';
import flagshipImg from '../../assets/flagship.png';

const Impact: React.FC = () => {
  const cards = [
    "A Day In Tech - With Kane Mani.",
    "Project Management Training BootCamp.",
    "Tech & Chiils With Kane Mani."
  ];

  return (
    <section className="impact-section">
      <div className="impact-header">
        <h1>Tech for the People. Change for the Continent.</h1>
        <p>Arise is a tech company driving awareness, literacy, and adoption to empower Africa's future.</p>
      </div>
      <div className="impact-cards">
        {cards.map((title, index) => (
          <div key={index} className="impact-card">
            <div className="overlay">
              <p>{title}</p>
            </div>
            <img src={flagshipImg} alt={title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
