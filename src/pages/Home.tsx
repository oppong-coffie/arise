import React from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import FlagshipSection from '../components/home/FlagshipSection';
import Newsletter from '../components/home/Newsletter';

const Home: React.FC = () => {
  return (
    <main className="home-page">
      <Hero />
      <AboutSection />
      <FlagshipSection />
      <Newsletter />
    </main>
  );
};

export default Home;
