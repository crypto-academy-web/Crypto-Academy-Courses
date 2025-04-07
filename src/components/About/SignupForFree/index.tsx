import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import signup from "@/public/images/about/signup.png";

const AboutSignUp = () => {
  return (
    <div className="w-full h-full relative mb-[142px] mob:mb-10">
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-[1162px] px-5 flex justify-between items-center lg:flex-col lg:gap-10">
          <Image
            src={signup}
            className="w-full max-w-[599px]"
            alt="hero image"
          />
          <div className="w-full max-w-[488px]">
            <Text as="h1" className="mb-[31px] text-black text-[36px]">
              Sign up for FREE and enjoy:
            </Text>
            <ul className="w-full max-w-[480px] list-disc pl-5 mob:pl-4 text-[14px] font-helvetica text-black space-y-[15px]">
              <li>
                Unique content written by market experts with years of
                experience.
              </li>
              <li>
                Unlimited access to dozens of courses on a variety of topics,
                take each at your own pace.
              </li>
              <li>
                Courses dedicated to all kinds of trading assets: Stocks, ETFs,
                Forex, Commodities, Bonds, Indices and Cryptocurrencies.
              </li>
              <li>
                Quizzes to test your skills when you complete each learning
                stage.
              </li>
              <li>Student oriented support and assistance.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSignUp;
