import React, { useState } from 'react';
import './css/FAQ.css'; // Stilizacija može biti u odvojenom CSS fajlu

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    { question: 'What sisfasfjas Lorem Ipsum?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { question: 'Why do we use it?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
    { question: 'Where does it come from?', answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.' },
    { question: 'Where can I get some?', answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' }
  ]);

  const toggleFAQ = (index) => {
    const newFaqs = [...faqs];
    newFaqs[index].open = !newFaqs[index].open;
    setFaqs(newFaqs);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div className="faq" key={index}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <i className={faqs[index].open ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
          </div>
          <div className={faqs[index].open ? "faq-answer show" : "faq-answer"}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
