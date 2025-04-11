"use client";
import React from "react";

import Text from "../ui/Text";
import PlaceOrder from "./PlaceOrder";

const CheckoutSection = () => {
  return (
    <div className="flex justify-center px-5 mt-24 mb-16">
      <div className="w-full max-w-[1194px]">
        <div
          className="flex flex-wrap gap-[23px] relative"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          {/* Left Section */}
          <div className="flex-col w-full max-w-[656.74px]">
            {/* Shipping Address */}
            <Text
              as="h2"
              className="text-[22px] text-primary font-helvetica font-normal mb-5"
            >
              Shipping Address
            </Text>
            <form className="w-full border border-black/30 rounded-[7.19px] px-[30px] py-[25px]">
              <div className="flex gap-[16px] mb-3">
                {/* <Image src={radio} alt="" width={35.79} height={35.79} /> */}
                <Text
                  as="p"
                  className="text-[22px] text-primary font-helvetica font-normal"
                >
                  Add New Address
                </Text>
              </div>

              <div className="flex mob:block w-full justify-between mb-2">
                <div className="w-full max-w-[272.22px] mob:max-w-full">
                  <Text as="p" className="text-[16px] text-primary mb-2">
                    First Name
                  </Text>
                  <input
                    placeholder="John"
                    className="w-full h-[60px] border border-[#C8C8C8] rounded-[7.19px] px-5 bg-[#FAFAFA]"
                  />
                </div>
                <div className="w-full max-w-[272.22px] mob:max-w-full">
                  <Text as="p" className="text-[16px] text-primary mb-2">
                    Last Name
                  </Text>
                  <input
                    placeholder="Doe"
                    className="w-full h-[60px] border border-[#C8C8C8] rounded-[7.19px] px-5 bg-[#FAFAFA]"
                  />
                </div>
              </div>

              <div className="mb-2">
                <Text as="p" className="text-[16px] text-primary mb-2">
                  Email
                </Text>
                <input
                  placeholder="john@example.com"
                  className="w-full h-[60px] border border-[#C8C8C8] rounded-[7.19px] px-5 bg-[#FAFAFA]"
                />
              </div>

              <div className="mb-2">
                <Text as="p" className="text-[16px] text-primary mb-2">
                  Street Address
                </Text>
                <input
                  placeholder="123 Main St"
                  className="w-full h-[60px] border border-[#C8C8C8] rounded-[7.19px] px-5 bg-[#FAFAFA]"
                />
              </div>

              <div className="flex mob:block w-full justify-between mb-5">
                <div className="w-full max-w-[182.38px] mob:max-w-full">
                  <Text as="p" className="text-[16px] text-primary mb-2">
                    Apt Number
                  </Text>
                  <input
                    placeholder="12B"
                    className="w-full h-[60px] border border-[#C8C8C8] rounded-[7.19px] px-5 bg-[#FAFAFA]"
                  />
                </div>
                <div className="w-full max-w-[182.38px] mob:max-w-full">
                  <Text as="p" className="text-[16px] text-primary mb-2">
                    State
                  </Text>
                  <input
                    placeholder="California"
                    className="w-full h-[60px] border border-[#C8C8C8] rounded-[7.19px] px-5 bg-[#FAFAFA]"
                  />
                </div>
                <div className="w-full max-w-[182.38px] mob:max-w-full">
                  <Text as="p" className="text-[16px] text-primary mb-2">
                    Zip
                  </Text>
                  <input
                    placeholder="90001"
                    className="w-full h-[60px] border border-[#C8C8C8] rounded-[7.19px] px-5 bg-[#FAFAFA]"
                  />
                </div>
              </div>
            </form>

            {/* Payment Method Title */}
            <Text
              as="h2"
              className="text-[22px] text-primary font-helvetica font-normal mb-5 mt-7"
            >
              Payment Method
            </Text>

            {/* Optionally include a design-only card form (non-functional) if needed */}
            {/* Otherwise, you can skip it entirely */}
          </div>

          {/* Right Section */}
          <div className="flex-col w-full max-w-[514px]">
            <PlaceOrder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSection;
