import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import call from "@/public/images/contact/call.svg";
import mail from "@/public/images/contact/mail.svg";
import location from "@/public/images/contact/location.svg";
const ContactInfo = () => {
  return (
    <div className="w-full mt-[84px]">
      <div className="w-full flex justify-center items-center">
        <div className="w-full px-5 max-w-[1242px]">
          <Text className="text-[21px] font-bold text-black mb-[43px]">
            Contact Info:
          </Text>
          <Text className="text-[14px] font-bold pl-10">Postal Address:</Text>
          <div className="flex gap-[28px] items-center mt-[17px] mb-[75px]">
            <Image src={location} alt="LOcation" />

            <Text className="text-black text-[14px] w-full">
              Dockline, Mayor Street, Dublin 1, D01 K8N7, Ireland
            </Text>
          </div>

          <div className="w-full border border-black mb-[42px]"></div>

          <div className="flex mb-[58px] gap-[329px] mob:flex-col mob:gap-10">
            <div>
              <div className="flex gap-[28px] items-center mt-[13px]">
                <Image src={call} alt="Location" />
                <div>
                  <Text className="text-[14px] font-bold mb-[12px]">Phone</Text>

                  <Text className="text-black text-[14px] w-full">
                    +(353)15137861 
                  </Text>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-[28px] items-center mt-[13px]">
                <Image src={mail} alt="LOcation" />
                <div>
                  <Text className="text-[14px] font-bold mb-[12px]">
                    E-mail:
                  </Text>

                  <Text className="text-black text-[14px] w-full">
                    academy@avatrade.com
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border border-black mb-[48px]"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
