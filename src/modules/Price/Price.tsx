import { Container, Section, SectionTitle } from '@/components';
import { Accordion, Table } from './components';

export default function Price() {
  return (
    <Section id="price" className="bg-price w-full py-[120px] md:py-[144px]">
      <Container>
        <SectionTitle className="mb-20 md:mb-[72px] text-stone-900">
          Ціни
        </SectionTitle>
        <Accordion />
      </Container>
    </Section>
  );
}
