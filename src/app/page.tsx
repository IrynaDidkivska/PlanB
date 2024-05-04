import {
  AboutUs,
  Hero,
  Price,
  Services,
  Team,
  Slider,
  Location,
} from '@/modules';

export default function Home() {
  return (
    <div className="mb-40">
      <Hero />
      <AboutUs />
      <Services />
      <Team />
      <Price />
      <Slider />
      <Location />
    </div>
  );
}
