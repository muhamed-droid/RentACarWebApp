import React, { useState } from 'react';
import './css/FAQ.css'; // Stilizacija može biti u odvojenom CSS fajlu

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    { question: 'Warum möchten Sie bei uns ein Auto mieten?', answer: 'Weil wir Ihnen Qualität für weniger Geld bieten.' },
    { question: 'Kann ich an einem Ort ein Auto mieten und es an einem anderen wieder abgeben?', answer: 'Absolut! Zwischen vielen unserer Standorte sind Einwegmieten möglich. Je nach Abhol- und Rückgabeort kann eine zusätzliche Gebühr für die Einwegmiete anfallen.' },
    { question: 'Was ist im Mietpreis enthalten?', answer: 'Unsere Standardmietpreise beinhalten in der Regel eine Vollkaskoversicherung (CDW), einen Diebstahlschutz (TP), eine Haftpflichtversicherung und die Mehrwertsteuer.' },
    { question: 'Was soll ich tun, wenn ich mit dem Mietwagen einen Unfall habe?', answer: 'Bitte sorgen Sie im Falle eines Unfalls für die Sicherheit aller Beteiligten und rufen Sie gegebenenfalls die örtlichen Behörden an. Dann wenden Sie sich unter der in Ihrem Mietvertrag angegebenen Nummer an unseren 24-Stunden-Pannendienst.' }
  ]);

  const toggleFAQ = (index) => {
    const newFaqs = [...faqs];
    newFaqs[index].open = !newFaqs[index].open;
    setFaqs(newFaqs);
  };

  return (
    <div className="faq-container">
      <h2 class="question-box">Häufig gestellte Fragen</h2>
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
