import AboutSection from "@/components/sections/AboutSection";
import ConnectSection from "@/components/sections/ConnectSection";
import EducationSection from "@/components/sections/EducationSection";
import ExcitinigSection from "@/components/sections/ExcitinigSection";
import HeroSection from "@/components/sections/HeroSections";
import LearningSection from "@/components/sections/LearningSection";
import MyDoingsSection from "@/components/sections/MyDoingsSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <section className="relative container mx-auto max-w-3xl">
      <div className="flex flex-col items-center justify-center py-10 space-y-10">
        {/* Hero Section */}
        <HeroSection />

        {/* <AboutSection />

        <LearningSection />

        <EducationSection />

        <SkillsSection />

        <ExcitinigSection />

        <MyDoingsSection />

        <ConnectSection /> */}
      </div>
    </section>
  );
}
