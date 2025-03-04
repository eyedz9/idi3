import { courseJsonLd } from '@/components/seo/metadata';
import JsonLd from '@/components/seo/json-ld';
import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ProgramFeatures from '@/components/sections/program-features';
import ScheduleCost from '@/components/sections/schedule-cost';
import CareerPrograms from '@/components/sections/career-programs';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <JsonLd data={courseJsonLd} />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramFeatures />
        <ScheduleCost />
        <CareerPrograms />
      </main>
      <Footer />
    </>
  );
}
