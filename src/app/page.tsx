import FreeCourses from "@/components/Home/FreeCourses";
import HeroSection from "@/components/Home/HeroSection";
import HowItWorks from "@/components/Home/HowItWorks";
import Learn from "@/components/Home/Learn";
import TakeMe from "@/components/Home/TakeMe";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FreeCourses/>
      <TakeMe/>
      <Learn/>
    </>
  );
}
