import { AboutUs, Hero, Price, Services, Team, Slider } from '@/modules';

export default function Home() {
  return (
    <div className="mb-40">
      <Hero />
      <AboutUs />
      <Services />
      <Price />
      <Slider />
    </div>
  );
}
