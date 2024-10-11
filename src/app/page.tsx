import { BenefitsSection } from "@/components/layout/sections/About";
import { CommunitySection } from "@/components/layout/sections/Community";
import { FAQSection } from "@/components/layout/sections/Faq";
import { FooterSection } from "@/components/layout/sections/Footer";
import { HeroSection } from "@/components/layout/sections/Hero";
import { SponsorsSection } from "@/components/layout/sections/Sponsors";
import { TeamSection } from "@/components/layout/sections/Team";
import { TestimonialSection } from "@/components/layout/sections/Testimonial";
import { TextHoverEffectSection } from "@/components/layout/sections/TextHoverEffectSection";

export const metadata = {
  title: "MU-ACM",
  description: "MU-ACM - Medicaps University ACM Student Chapter",
  icons: {
    icon: "/logo.png", 
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <TeamSection />
      <TestimonialSection />
      <CommunitySection />
      <FAQSection />
      <TextHoverEffectSection />
      <FooterSection />
    </>
  );
}
