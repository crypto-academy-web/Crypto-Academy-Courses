import FreeCourses from "@/components/Home/FreeCourses";
import HeroSection from "@/components/Home/HeroSection";
import HowItWorks from "@/components/Home/HowItWorks";
import Learn from "@/components/Home/Learn";
import PaidCourse from "@/components/Home/PaidCourse";
import StartInvesting from "@/components/Home/StartInvesting";
import TakeMe from "@/components/Home/TakeMe";
import Testimonials from "@/components/Home/Testimonials";
import WorldOfKnowledge from "@/components/Home/WorldOfKnowledge";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FreeCourses/>
      <TakeMe/>
      <Learn/>
      <PaidCourse/>
      <Testimonials/>
      <WorldOfKnowledge/>
      <StartInvesting/>
    </>
  );
}
