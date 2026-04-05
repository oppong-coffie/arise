import React from 'react';
import WhyHero from '../components/why/WhyHero';
import Empowerment from '../components/why/Empowerment';
import Newsletter from '../components/home/Newsletter';

const Why: React.FC = () => {
  return (
    <main className="why-page">
      <WhyHero />
      <Empowerment />
      <Newsletter />
    </main>
  );
};

export default Why;
