import React from 'react';
import Story from '../components/about/Story';
import MissionValues from '../components/about/MissionValues';
import Team from '../components/about/Team';
import Impact from '../components/about/Impact';
import Newsletter from '../components/home/Newsletter';

const About: React.FC = () => {
  return (
    <main className="about-page">
      <Story />
      <MissionValues />
      <Team />
      <Impact />
      <Newsletter />
    </main>
  );
};

export default About;
