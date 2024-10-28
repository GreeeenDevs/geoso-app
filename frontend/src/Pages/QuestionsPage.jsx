import React from 'react';
import Hero from '../Components/FAQ/FAQHero/FAQHero';
import FAQList from '../Components/FAQ/FAQList/FAQList';
import DarkMode from '../Components/Acessibility/DarkMode/Darkmode';

function QuestionPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FAQList />
      <DarkMode />
    </div>
  );
}

export default QuestionPage;