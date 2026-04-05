import React from 'react';
import badgesImg from '../../assets/badges.png';

const Download: React.FC = () => {
  return (
    <section className="download-section">
      <div className="download-container">
        <img src={badgesImg} alt="Download on App Store and Google Play" />
      </div>
    </section>
  );
};

export default Download;
