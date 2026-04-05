import React from 'react';
import heroImg from '../../assets/hero.jpg';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Making the African Consumer Technology Literate</h1>
        <p>
          Building a tech-focused consumer market by empowering Africans with the 
          knowledge and tools to understand, use, and thrive in a technology-driven world.
        </p>
      </div>
      <div className="hero-image-container">
        <img src={heroImg} alt="Arise Hero" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
