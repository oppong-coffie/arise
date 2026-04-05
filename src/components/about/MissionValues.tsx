import React from 'react';

const MissionValues: React.FC = () => {
  const values = [
    {
      title: "Empowerment through Education",
      description: "At Arise, we are committed to transforming Africa's technological landscape by prioritizing education. We understand that for technology to truly impact lives, people must first understand it."
    },
    {
      title: "Innovation with Purpose",
      description: "We don't just create for the sake of creating. Every product, service, and initiative we undertake is driven by a deep sense of purpose: to solve real-world problems and improve lives."
    },
    {
      title: "Community-Centered Growth",
      description: "We believe that the true power of technology lies in its ability to connect people, foster collaboration, and enhance communities. Our focus is on building and sustaining meaningful relationships."
    }
  ];

  return (
    <section className="mission-values-section">
      <div className="mission-container">
        <span className="section-label">Mission</span>
        <h2>
          To drive technology awareness, literacy, and adoption across Africa—empowering 
          everyday people to understand, embrace, and benefit from innovation.
        </h2>
      </div>
      
      <div className="values-container">
        <span className="section-label">Values</span>
        <p className="values-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit 
          sollicitudin quam, porta sollicitudin magna pretium at.
        </p>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionValues;
