import { Container, Section, SectionTitle } from '@/components';
import React from 'react';
import Slider from '../Slider/Slider';

const Feedback = () => {
  return (
    <Section id="price" className="py-[120px] md:py-[144px] bg-neutral-800">
      <Container>
        <SectionTitle className="mb-20 md:mb-[72px] ">Відгуки</SectionTitle>
        <Slider />
      </Container>
    </Section>
  );
};

export default Feedback;
