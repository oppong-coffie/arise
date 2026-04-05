import React from 'react';
import expertImg from '../../assets/expert.png';

const AdayFlagship: React.FC = () => {
  const cards = [
    "A Day In Tech - With Kane Mani.",
    "Project Management Training BootCamp.",
    "Tech & Chiils With Kane Mani."
  ];

  return (
    <section className="aday-flagship-section">
      <div className="aday-flagship-header">
        <span className="tag">A Day in Tech</span>
        <h1>A Day in Tech – Our Flagship Experience</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit 
          sollicitudin quam, porta sollicitudin magna pretium at. Duis tortor metus, 
          tristique vel diam vitae, venenatis laoreet risus.
        </p>
      </div>
      <div className="aday-flagship-grid">
        {cards.map((title, index) => (
          <div key={index} className="aday-flagship-card">
            <div className="overlay">
              <p>{title}</p>
            </div>
            <img src={expertImg} alt={title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdayFlagship;
