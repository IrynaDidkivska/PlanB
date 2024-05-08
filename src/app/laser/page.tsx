import React from 'react';
import { Container, Section, SectionTitle } from '@/components';
import { LASER } from '@/assets/consts/services';

export default function Laser() {
  return (
    <Section>
      <Container>
        <SectionTitle className="text-stone-900">{LASER}</SectionTitle>
      </Container>
    </Section>
  );
}
