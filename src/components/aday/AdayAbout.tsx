import React from 'react';

const AdayAbout: React.FC = () => {
  const focusAreas = [
    {
      icon: "👁️", // Use Lucide icons or Svgs later if needed
      title: "Key Focus Areas",
      description: "Tech Awareness & Literacy Educating attendees on the latest technologies, innovations, and digital tools in simple, relatable terms."
    },
    {
      icon: "👥",
      title: "Community Building",
      description: "Bringing together professionals, students, creatives, and enthusiasts to form a growing network of tech-conscious individuals."
    },
    {
      icon: "⚡",
      title: "Inspiring Adoption",
      description: "Encouraging the use of digital solutions in everyday life through product showcases, real-world use cases, and interactive demos."
    }
  ];

  return (
    <section className="aday-about-section">
      <div className="aday-about-header">
        <h1>What A Day In Tech Is all About</h1>
        <div className="aday-about-text">
          <p>
            A Day In Tech is a monthly tech engagement series powered by Arise Labs 
            that brings the world of technology closer to everyday people. Held on 
            the last Saturday of each month, the event provides a vibrant platform 
            for conversations, demonstrations, and interactions that demystify 
            technology and highlight its role in daily life, work, and business.
          </p>
          <p>
            The initiative was born out of the need to bridge the gap between engineers 
            building products and the consumers who often don't understand or adopt them. 
            By hosting industry experts, innovators, entrepreneurs, and tech enthusiasts, 
            A Day In Tech sparks awareness, promotes understanding, and encourages 
            curiosity in a relaxed, welcoming environment.
          </p>
          <p>
            Each session is a unique opportunity to experience live discussions, 
            product showcases, Q&A sessions, and networking moments aimed at building 
            a tech-conscious community ready to embrace digital transformation. It 
            is not only a learning experience but also a movement to prepare Africa 
            for the tech-driven future.
          </p>
        </div>
      </div>
      
      <div className="focus-areas-grid">
        {focusAreas.map((area, index) => (
          <div key={index} className="focus-card">
            <div className="focus-icon">{area.icon}</div>
            <div className="focus-content">
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdayAbout;
