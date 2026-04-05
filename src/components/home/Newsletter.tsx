import React from 'react';
import newsletterImg from '../../assets/newsletter.png';

const Newsletter: React.FC = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-card">
        <div className="newsletter-content">
          <h1>Stay In The Loop</h1>
          <p>
            Get tech tips, program updates, and event invites 
            delivered straight to your inbox.
          </p>
        </div>
        <img src={newsletterImg} alt="Newsletter" className="newsletter-bg" />
      </div>
    </section>
  );
};

export default Newsletter;
