import React from 'react';

import { Container, Section, SectionTitle } from '@/components';
import { Principles, Laser, Electro } from './components/index';
import aboutData from './helpers/data.json';

const AboutUs = () => {
  return (
    <Section className="pb-[120px] bg-neutral-800 text-stone-50">
      <Container>
        <SectionTitle className="mb-12 md:mb-[72px]">Про нас</SectionTitle>
        <p
          className="mb-12 text-base font-medium
        md:text-xl md:font-normal"
        >
          Студія PlanB - це команда фахівців, які знають, наскільки важлива для
          вас гладка та доглянута шкіра. Наша студія створена, щоб ви відчували
          себе комфортно та впевнено, отримуючи найвищу якість послуг.
        </p>
        <ul className="flex flex-col justify-center gap-20 md:gap-24">
          {aboutData.map((item, index) =>
            item.principles ? (
              <li
                key={index}
                className="md:ml-auto md:max-w-[523px] xl:max-w-[566px]"
              >
                <Principles items={item.principles} />
              </li>
            ) : null
          )}
          {aboutData.map((item, index) =>
            item.laser ? (
              <li key={index} className="md:min-h-[628px]">
                <Laser items={item.laser} />
              </li>
            ) : null
          )}
          {aboutData.map((item, index) =>
            item.electro ? (
              <li key={index} className="md:min-h-[487px] ">
                <Electro items={item.electro} />
              </li>
            ) : null
          )}
        </ul>
      </Container>
    </Section>
  );
};

export default AboutUs;
