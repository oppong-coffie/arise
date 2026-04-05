import React from 'react';
import AdayAbout from '../components/aday/AdayAbout';
import AppFeatures from '../components/aday/AppFeatures';
import AdayFlagship from '../components/aday/AdayFlagship';
import Download from '../components/aday/Download';
import Newsletter from '../components/home/Newsletter';

const Aday: React.FC = () => {
  return (
    <main className="aday-page">
      <AdayAbout />
      <AppFeatures />
      <AdayFlagship />
      <Download />
      <Newsletter />
    </main>
  );
};

export default Aday;
