import React from 'react';
import { Container, Section, SectionTitle } from '@/components';
import { ELECTRO } from '@/assets/consts/services';

export default function Electro() {
  return (
    <Section>
      <Container>
        <SectionTitle className="text-stone-900">{ELECTRO}</SectionTitle>
      </Container>
    </Section>
  );
}
