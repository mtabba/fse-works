import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a variety of services including maintenance, commissioning, and more.",
    },
    {
      question: "Where do you operate?",
      answer: "We operate in multiple countries including the USA, UAE, and more.",
    },
  ];

  return (
    <Container className="py-4">
      <h1>Frequently Asked Questions</h1>
      <Accordion>
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default FAQ;
