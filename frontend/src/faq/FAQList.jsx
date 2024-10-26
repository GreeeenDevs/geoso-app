import React from 'react';
import AccordionItem from './FAQItem';
import styles from './FAQList.module.css';

const FAQList = () => {
  const questions = [
    "Pergunta ?",
    "Pergunta ?",
    "Pergunta ?",
    "Pergunta ?"
  ];

  return (
    <section className={styles.services}>
      <div className={styles.accordion}>
        {questions.map((question, index) => (
          <AccordionItem key={index} title={question} />
        ))}
      </div>
    </section>
  );
};

export default FAQList;