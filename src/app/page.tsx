import { AboutUs, Hero, Price, Team } from '@/modules';
import { Hero, Price, Services, Team } from '@/modules';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />

      <Services />
      <Price />
      <Team />
    </>
  );
}
