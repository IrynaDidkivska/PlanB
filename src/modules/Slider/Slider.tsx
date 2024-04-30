import { Container, Section, SectionTitle } from '@/components';
import { SliderComponent } from './components';
import sliderData from './data/slider-data.json';

export default function Slider() {
  return (
    <Section className="py-[120px] md:py-[144px] bg-neutral-800">
      <Container>
        <SectionTitle className="mb-[72px]">Відгуки</SectionTitle>
        <SliderComponent sliderData={sliderData} />
      </Container>
    </Section>
  );
}
