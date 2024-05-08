import { Master } from '@/types';
import masters from '../Team/components/masters.json';
import { Card } from './components';
import { Container, SectionTitle, Section } from '@/components';

const Team = () => {
  return (
    <Section id="team" className="bg-neutral-800">
      <Container className="pb-[120px] pt-0 xl:pb-[144px]">
        <SectionTitle
          className="font-caveat400 text-[56px] font-normal tracking-normal leading-[56px] 
        md:text-[72px] md:leading-[72px]"
        >
          Наші спеціалісти
        </SectionTitle>

        <ul
          className="flex items-center flex-col gap-2 mt-[72px] 
      md:flex-row md:gap-1
      xl:flex-row xl:gap-[30px]"
        >
          {masters.map((master: Master) => (
            <Card master={master} key={master.name} />
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default Team;
