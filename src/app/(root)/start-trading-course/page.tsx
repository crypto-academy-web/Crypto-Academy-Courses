import Description from "@/components/StartTrading/Description";
import Hero from "@/components/StartTrading/Hero";
import Text from "@/components/ui/Text";
import React from "react";

const STartTradingPage = () => {
  return (
    <div>
      <div className="w-full px-[70px] mob:px-5 bg-[#F6F6F6] h-[44px] flex items-center">
        <div className="w-full max-w-[1313px] mx-auto">
          <Text className="text-[10px] text-[#20263033]/20">
            Home {`>>`} Trading Courses {`>>`} Start Trading Course Now... Quick
            & Dirty
          </Text>
        </div>
      </div>
      <Hero />
      <Description />
    </div>
  );
};

export default STartTradingPage;
