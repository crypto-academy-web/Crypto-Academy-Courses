import React from "react";
import AboutHero from "@/components/About/Hero";
import AboutSignUp from "@/components/About/SignupForFree";

import Text from "@/components/ui/Text";
const AboutUs = () => {
  return (
    <>
      <div className="w-full px-[70px] mob:px-5 bg-[#F6F6F6] h-[44px] mb-[68px] flex items-center">
        <Text className="text-[10px] text-[#20263033]/20">
          Home {`>>`} About Us
        </Text>
      </div>
      <AboutHero />
      <AboutSignUp />
    </>
  );
};

export default AboutUs;
