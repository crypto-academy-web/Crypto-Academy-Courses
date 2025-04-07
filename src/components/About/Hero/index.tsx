import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import welcome from "@/public/images/about/welcome.png";

const AboutHero = () => {
  return (
    <div className="w-full h-full relative mb-[142px] mob:mb-10">
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-[1162px] px-5 flex justify-between items-center lg:flex-col-reverse lg:gap-10">
          <div className="w-full max-w-[488px]">
            <Text as="h1" className="mb-[31px] text-black text-[36px]">
              Welcome to AvaAcademy!
            </Text>
            <Text className="text-[14px] text-black">
              Our interests here at AvaAcademy (formerly known as SharpTrader
              Academy) are directly aligned with yours. The more you learn,
              hopefully the better you trade and the longer you stay trading
              with AvaTrade!
              <br />
              <br />
              Learn at your own pace, with small digestible learning chunks –
              study as much, or as little as you want. Get the basics or go
              in-depth, it’s all up to you, and we’re always here to help!
            </Text>
          </div>
          <Image
            src={welcome}
            className="w-full max-w-[532px]"
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
