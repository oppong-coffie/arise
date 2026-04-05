import React from 'react';
import flagshipImg from '../../assets/flagship.png';

const FlagshipSection: React.FC = () => {
  const cards = [
    "A Day In Tech - With Kane Mani.",
    "Project Management Training BootCamp.",
    "Tech & Chiils With Kane Mani."
  ];

  return (
    <section className="flagship-section">
      <div className="flagship-header">
        <h1>A Day In Tech - Our Flagship Experience</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit 
          sollicitudin quam, porta sollicitudin magna pretium at. Duis tortor metus, 
          tristique vel diam vitae, venenatis laoreet risus.
        </p>
      </div>
      <div className="flagship-cards">
        {cards.map((title, index) => (
          <div key={index} className="flagship-card">
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

export default FlagshipSection;
