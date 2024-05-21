import React from 'react';
import { ListSection, FAQSection } from './index';
import { Container, Section, SectionTitle } from '@/components';

interface PageContentProps {
  description: string;
  steps_title: string;
  steps: { title: string; description: string }[];
  benefits_title: string;
  benefits: { title: string; description: string }[];
  faq_title: string;
  faq: { question: string; answer: string }[];
  ELECTRO: string;
  SUGARING: string;
  LASER: string;
}
const PageComponent = ({
  description,
  steps_title,
  steps,
  benefits_title,
  benefits,
  faq_title,
  faq,
  ELECTRO,
  SUGARING,
  LASER,
}: PageContentProps) => {
  return (
    <>
      <Section className="bg-stone-50">
        <Container className="text-stone-900">
          <SectionTitle
            className="mb-12  text-[56px] leading-none tracking-[-2.24px] text-stone-900
          md:mb-[72px] md:text-7xl"
          >
            {SUGARING || ELECTRO || LASER}
          </SectionTitle>
          <p
            className="mb-12 text-xl tracking-[-0.1px]
        md:text-xl"
          >
            {description}
          </p>
          <ListSection title={steps_title} items={steps} />
          <ListSection title={benefits_title} items={benefits} />
          <FAQSection title={faq_title} items={faq} />
        </Container>
      </Section>
    </>
  );
};
export default PageComponent;
