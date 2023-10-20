import { useState } from "react";

import {
  HeaderSection,
  PrimaryFeatureSection,
  FooterSection,
  HeroSection,
  NewsLetterSection,
  SecondaryFeatureSection,
  TestimonialSection,
  LogoCloud,
} from "./components";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <HeaderSection
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
      <main>
        <HeroSection />
        <LogoCloud />
        <PrimaryFeatureSection />
        <SecondaryFeatureSection />
        <NewsLetterSection />
        <TestimonialSection />
      </main>
      <FooterSection />
    </div>
  );
}
