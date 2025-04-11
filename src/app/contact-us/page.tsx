import React from "react";

import Text from "@/components/ui/Text";
import ContactInfo from "@/components/Contact-us/Contact-Info";
import WriteUs from "@/components/Contact-us/Write-to-us";

const ContactUs = () => {
  return (
    <>
      <div className="w-full px-[70px] mob:px-5 bg-[#F6F6F6] h-[44px] mb-[68px] flex items-center">
        <Text className="text-[10px] text-[#20263033]/20">
          Home {`>>`} Contact Us
        </Text>
      </div>
      <ContactInfo />
      <WriteUs />
    </>
  );
};

export default ContactUs;
