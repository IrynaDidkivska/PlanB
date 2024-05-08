import React from 'react';
import { Container, Section, SectionTitle } from '@/components';
import { SUGARING } from '@/assets/consts/services';

export default function Sugaring() {
  return (
    <Section>
      <Container>
        <SectionTitle className="text-stone-900">{SUGARING}</SectionTitle>
      </Container>
    </Section>
  );
}
