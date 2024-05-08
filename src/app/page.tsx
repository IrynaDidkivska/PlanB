import {
  AboutUs,
  Hero,
  Price,
  Services,
  Team,
  Location,
  Feedback,
} from '@/modules';

export default function Home() {
  return (
    <div className="mb-40">
      <Hero />
      <AboutUs />
      <Services />
      <Team />
      <Price />
      <Feedback />
      <Location />
    </div>
  );
}
