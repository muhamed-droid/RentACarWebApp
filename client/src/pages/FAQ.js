import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/FAQ.css'; // Ensure the path matches your project structure

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    { question: 'Warum möchten Sie bei uns ein Auto mieten?', answer: 'Weil wir Ihnen Qualität für weniger Geld bieten.' },
    { question: 'Kann ich an einem Ort ein Auto mieten und es an einem anderen wieder abgeben?', answer: 'Absolut! Zwischen vielen unserer Standorte sind Einwegmieten möglich. Je nach Abhol- und Rückgabeort kann eine zusätzliche Gebühr für die Einwegmiete anfallen.' },
    { question: 'Was ist im Mietpreis enthalten?', answer: 'Unsere Standardmietpreise beinhalten in der Regel eine Vollkaskoversicherung (CDW), einen Diebstahlschutz (TP), eine Haftpflichtversicherung und die Mehrwertsteuer.' },
    { question: 'Was soll ich tun, wenn ich mit dem Mietwagen einen Unfall habe?', answer: 'Bitte sorgen Sie im Falle eines Unfalls für die Sicherheit aller Beteiligten und rufen Sie gegebenenfalls die örtlichen Behörden an. Dann wenden Sie sich unter der in Ihrem Mietvertrag angegebenen Nummer an unseren 24-Stunden-Pannendienst.' },
    {question: ' Welche Dokumente benötige ich, um ein Auto in Österreich zu mieten?', answer: 'Um ein Auto in Österreich zu mieten, benötigen Sie in der Regel einen gültigen Führerschein, einen Personalausweis oder Reisepass sowie eine Kreditkarte als Zahlungsmittel. Einige Vermietungsunternehmen können auch ein Mindestalter oder eine bestimmte Fahrerfahrung voraussetzen. Es ist ratsam, vor der Anmietung die genauen Anforderungen des Vermieters zu überprüfen.'},
    {question: 'Welche Versicherungen sind in der Autovermietung in Österreich üblicherweise enthalten?', answer: 'In der Regel sind in der Autovermietung in Österreich die Haftpflichtversicherung (Third Party Liability) und die Diebstahlversicherung (Theft Protection) im Mietpreis enthalten. Zusätzliche Versicherungen wie eine Vollkaskoversicherung oder eine Zusatzhaftpflichtversicherung können optional gegen Aufpreis hinzugebucht werden. Es ist wichtig, die Versicherungsbedingungen sorgfältig zu prüfen und bei Bedarf ergänzende Versicherungen in Anspruch zu nehmen.'},
    {question: 'Gibt es Besonderheiten bei der Rückgabe des Mietwagens in Österreich?', answer: ' Bei der Rückgabe des Mietwagens in Österreich sollten Sie darauf achten, das Fahrzeug rechtzeitig und im vereinbarten Zustand zurückzugeben. Dies beinhaltet oft das vollgetankte Fahrzeug sowie die Rückgabe an der vereinbarten Mietstation während der Öffnungszeiten. Eventuelle Schäden oder Verstöße gegen die Mietbedingungen sollten vor der Rückgabe dokumentiert und mit dem Vermieter geklärt werden.'},
    {question: 'Welche Vorteile bietet eine langfristige Autovermietung in Österreich?', answer: ' Eine langfristige Autovermietung in Österreich bietet verschiedene Vorteile, darunter Flexibilität, da Sie das Fahrzeug für einen längeren Zeitraum nutzen können, ohne sich langfristig zu binden. Darüber hinaus sind oft günstigere Tarife verfügbar, wenn Sie das Fahrzeug für mehrere Wochen oder Monate mieten. Dies kann besonders nützlich sein, wenn Sie eine längere Reise planen oder temporär einen zusätzlichen Wagen benötigen.'},
  

  ]);

  const toggleFAQ = (index) => {
    const newFaqs = [...faqs];
    newFaqs[index].open = !newFaqs[index].open;
    setFaqs(newFaqs);
  };

  return (
    <div className="faq-container">
      <h2 className="question-box">Häufig gestellte Fragen - Anmietung</h2>
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
