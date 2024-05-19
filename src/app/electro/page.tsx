import React from 'react';
import { Container, Section, SectionTitle } from '@/components';
import { ELECTRO } from '@/assets/consts/services';
import { PageComponent } from '@/components/PageComponent/PageComponent';

export default function Electro() {
  return (
    <Section>
      <Container className="text-stone-900">
        <SectionTitle className="text-stone-900">{ELECTRO}</SectionTitle>
        <PageComponent />
      </Container>
    </Section>
  );
}
