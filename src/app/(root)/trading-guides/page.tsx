import React from "react";

import Text from "@/components/ui/Text";
import HeroGuide from "@/components/TradingGuides/HeroGuide";
import CoursesGuide from "@/components/TradingGuides/CoursesGuide";

const TradingGuides = () => {
  return (
    <>
      <div className="w-full px-5 bg-[#F6F6F6] h-[44px] mb-[68px] flex items-center">
        <div className="w-full max-w-[1313px] mx-auto">
          <Text className="text-[10px] text-[#20263033]/20">
            Home {`>>`} Trading Guides
          </Text>
        </div>
      </div>
      <HeroGuide />
      <CoursesGuide />
    </>
  );
};

export default TradingGuides;
