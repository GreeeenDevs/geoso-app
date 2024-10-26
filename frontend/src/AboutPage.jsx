import React from 'react';
import Hero from './about/Hero';
import AboutSection1 from './about/AboutSection1';
import AboutSection2 from './about/AboutSection2';
import DarkMode from './darkmode/Darkmode';

function AboutPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSection1 />
      <AboutSection2 />
      <DarkMode />
    </div>
  );
}

export default AboutPage;