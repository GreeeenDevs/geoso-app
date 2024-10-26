import React from 'react';
import Hero from './faq/Hero';
import FAQList from './faq/FAQList';
import DarkMode from './darkmode/Darkmode';

function FrequentlyAskedQuestions() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FAQList />
      <DarkMode />
    </div>
  );
}

export default FrequentlyAskedQuestions;