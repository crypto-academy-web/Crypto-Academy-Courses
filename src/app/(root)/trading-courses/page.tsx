import AvaAcademy from "@/components/TradingCourse/AvaAcademy";
import Faqs from "@/components/TradingCourse/Faqs";
import Products from "@/components/TradingCourse/Products";
import Text from "@/components/ui/Text";
import React from "react";

const TradingCourses = () => {
  return (
    <>
      <div className="w-full px-5 bg-[#F6F6F6] h-[44px] mb-[68px] flex items-center">
        <div className="w-full max-w-[1313px] mx-auto">
          <Text className="text-[10px] text-[#20263033]/20">
            Home {`>>`} Trading Courses
          </Text>
        </div>
      </div>
      <Products />
      <AvaAcademy />
      <Faqs />
    </>
  );
};

export default TradingCourses;
