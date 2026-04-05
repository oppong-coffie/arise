import React from 'react';
import appMockup from '../../assets/app_mockup.png';

const AppFeatures: React.FC = () => {
  const features = [
    "Event Registration & Participation",
    "Easy Browsing & Registration: View upcoming events, speakers, and agendas; register in one tap.",
    "Digital Ticketing: Receive a QR-coded ticket for seamless check-in.",
    "Real-Time Notifications: Stay updated via push alerts and SMS.",
    "Live Interaction: Engage through Q&A, polls, and chat during events.",
    "Technology Literacy Learning",
    "Microlearning Modules: Short lessons on tech topics like AI, coding, cybersecurity, and more.",
    "Progress Tracking: Earn badges and follow your learning journey.",
    "Quizzes & Certificates: Test knowledge and unlock digital certificates for completed modules."
  ];

  return (
    <section className="app-features-section">
      <div className="app-features-container">
        <div className="app-features-content">
          <h2>A Day In Tech App – Key Features</h2>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="app-mockup-container">
          <img src={appMockup} alt="A Day In Tech App Mockup" />
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
