import React from 'react';
import aboutImg from '../../assets/career.png';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1>About Arise Labs</h1>
          <p>
            Arise Labs is a forward-thinking initiative dedicated to bridging Africa's 
            digital divide by empowering individuals with essential technology skills. 
            Through hands-on digital training, immersive programs, and inclusive events 
            like A Day in Tech, we strive to make tech literacy accessible to all. 
            Our mission is to equip every African with the tools and knowledge needed 
            to thrive in today's digital world, fostering innovation, inclusivity, 
            and sustainable development across the continent.
          </p>
        </div>
        <div className="about-image-card">
          <div className="overlay">
            <p>Career Opportunity Assured.</p>
          </div>
          <img src={aboutImg} alt="About Arise Labs" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
