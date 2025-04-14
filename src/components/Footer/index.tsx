import React from "react";
import Link from "next/link";
import Image from "next/image";

import Text from "../ui/Text";

import call from "@/public/images/Footer/call.svg";
import location from "@/public/images/Footer/location.svg";
import mail from "@/public/images/Footer/mail.svg";
import arrow from "@/public/icons/arrow.svg"

const Footer = () => {
  return (
    <div className="w-full h-full  bg-[#000080]">
      <div className="w-full flex min-h-[372px] justify-center items-center tab:py-10">
        <div className="w-full flex justify-between items-start max-w-[1162px] px-5 tab:flex-col tab:gap-7">
          <div className="w-full max-w-[270px]">
            <Text className="text-white text-[18px] mb-6 font-bold">
              About AvaAcademy
            </Text>
            <Text className="text-white text-[13px]">
              AvaAcademy, powered by AvaTrade, is one of the best online trading
              academies there is.Learn how to trade Stocks, Crypto, Forex,
              Indices and Commodities from the market experts, practice and
              monetize their knowledge.
            </Text>
          </div>

          {/* pages div */}
          <div>
            <Text className="text-white text-[18px] mb-6 font-bold">Pages</Text>
            <div className="flex gap-[12px] mb-[19px]">
              <Image src={arrow} alt="arrow" width={5} height={9} />
              <Link href="/">
                <Text className="text-white text-[13px] font-bold">Home</Text>
              </Link>
            </div>
            <div className="flex gap-[12px] mb-[19px]">
              <Image src={arrow} alt="arrow" width={5} height={9} />

              <Link href="/about-us">
                <Text className="text-white text-[13px] font-bold">
                  About Us
                </Text>
              </Link>
            </div>
            <div className="flex gap-[12px] mb-[19px]">
              <Image src={arrow} alt="arrow" width={5} height={9} />

              <Link href="/contact-us">
                <Text className="text-white text-[13px] font-bold">
                  Contact Us
                </Text>
              </Link>
            </div>
            <div className="flex gap-[12px]">
              <Image src={arrow} alt="arrow" width={5} height={9} />

              <Link href="/trading-courses">
                <Text className="text-white text-[13px] font-bold">
                  Trading Courses
                </Text>
              </Link>
            </div>
          </div>

          {/* contact div */}
          <div>
            <Text className="text-white text-[18px] mb-6 font-bold">
              Contact
            </Text>
            <div className="flex gap-[12px] mb-[19px]">
              <Image src={call} alt="call" />
              <a href="tel:+353 15137861">
                <Text className="text-white text-[13px]">
                  Tel.: +353 15137861
                </Text>
              </a>
            </div>
            <div className="flex gap-[12px] mb-[19px]">
              <Image src={location} alt="LOcation" />

              <Text className="text-white text-[13px] w-full max-w-[195px]">
                Dockline, Mayor Street, Dublin 1, D01 K8N7, Ireland
              </Text>
            </div>
            <div className="flex gap-[12px] mb-[19px]">
              <Image src={mail} alt="mail" />
              <a href="mailto:academy@gmail.com">
                <Text className="text-white text-[13px]">
                  academy@gmail.com
                </Text>
              </a>
            </div>
          </div>

          {/* legal documents */}
          <div className="">
            <Text className="text-white text-[18px] mb-8 font-bold">
              Legal Documents
            </Text>
            <Text className="text-white text-[13px] mb-[2px]">Terms & Conditions</Text>
            <Text className="text-white text-[13px] mb-[2px]">Cookie Policy</Text>
            <Text className="text-white text-[13px] mb-[2px]">Risk Disclosure</Text>
            <Text className="text-white text-[13px] mb-[2px]">Privacy Policy</Text>
            <Text className="text-white text-[13px] mb-[2px]">Terms of Use</Text>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#202630] h-[80px] flex justify-center items-center mob:px-5 text-center">
        <Text className="text-white text-[15px] font-bold">
          Copyright © 2025 AvaTrade Markets Ltd. All rights reserved.
        </Text>
      </div>
    </div>
  );
};

export default Footer;
