import React from 'react';
import content from './content.json';

export const PageComponent = () => {
  const { description, steps, benefits, faqs } = content;
  return (
    <>
      <p>{description}</p>
      <div>
        <h2>Як Це відбувається:</h2>
        <ul>
          {steps.map((step, index) => (
            <li key={index}>
              <span>{step.title}</span>
              <p>{step.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Переваги Лазерної Епіляції:</h2>
        <ul>
          {benefits.map((benefit, index) => (
            <li key={index}>
              <span>{benefit.title}</span>
              <p>{benefit.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Переваги Лазерної Епіляції:</h2>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index}>
              <span>{faq.question}</span>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
