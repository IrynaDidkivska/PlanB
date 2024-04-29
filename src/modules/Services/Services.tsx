import React from 'react';
import { Container, Section, SectionTitle } from '@/components';
import { ServicesList } from './components/ServicesList';

const Services = () => {
  return (
    <Section className="bg-stone-50 w-full py-[120px] md:py-36">
      <Container>
        <SectionTitle className="mb-[72px] text-stone-900">
          Послуги
        </SectionTitle>
        <ServicesList />
      </Container>
    </Section>
  );
};

export default Services;
