import React from 'react';
import ceoImg from '../../assets/images/about/ceo.jpg';

const Story: React.FC = () => {
  return (
    <section className="story-section">
      <div className="story-container">
        <div className="story-content">
          <span className="tag">How it started</span>
          <h1>The Story of Arise</h1>
          <div className="story-text">
            <p>
              Arise was born from a realization—no matter how brilliant the innovations engineers build, 
              their impact is limited if the market isn't ready for them. The founder, driven by a mission 
              to close the gap between innovation and adoption, started Arise to tackle a core challenge: 
              educating the market.
            </p>
            <p>
              It began with a simple insight—Africa's tech potential wasn't being met not because of a lack 
              of talent, but because of a lack of awareness, understanding, and readiness among consumers. 
              People didn't know what to do with the technology being created around them. 
              Arise launched as a media and education initiative focused on tech awareness, literacy, and 
              adoption. The goal was clear: make technology understandable, relevant, and accessible to 
              the average African consumer.
            </p>
            <p>
              Today, Arise is more than a company—it’s a movement preparing the African market to meet 
              innovation with understanding, confidence, and action.
            </p>
          </div>
        </div>
        <div className="story-image-card">
          <img src={ceoImg} alt="Kane Mani, CEO" />
          <div className="overlay">
            <p className="name">Kane Mani, CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
