"use client";
import React from "react";
// import Image from "next/image";

import Text from "@/components/ui/Text";

// import sample from "@/public/icons/heart.svg"

const PlaceOrder = () => {
  return (
    <div className="w-full bg-[#F0F0F0] rounded-[13.48px] mt-5 px-[30px] py-[45px]">
      <Text
        as="p"
        className="text-[22px] text-[#000000] font-futuraBT font-normal"
      >
        Order Summary
      </Text>

      {/* Static Example Product */}
      <div className="flex items-center gap-[55px] my-4">
        {/* <Image
          className="rounded-lg"
          src={sample} 
          alt="Product"
          width={64}
          height={64}
        /> */}
        <Text
          as="p"
          className="text-[22px] text-[#000000] font-futuraBT font-normal"
        >
          Sample Product
        </Text>
      </div>

      <div className="flex justify-between mb-2">
        <Text
          as="p"
          className="text-[16px] text-[#575757] font-futuraBT font-normal"
        >
          Items 1
        </Text>
        <Text
          as="p"
          className="text-[16px] text-[#575757] font-futuraBT font-normal"
        >
          $25.00
        </Text>
      </div>

      <div className="flex justify-between mb-2">
        <Text
          as="p"
          className="text-[16px] text-[#575757] font-futuraBT font-normal"
        >
          Shipping and handling:
        </Text>
        <Text
          as="p"
          className="text-[16px] text-[#575757] font-futuraBT font-normal"
        >
          $0
        </Text>
      </div>

      <div className="flex justify-between mb-2">
        <Text
          as="p"
          className="text-[16px] text-[#575757] font-futuraBT font-normal"
        >
          Before tax:
        </Text>
        <Text
          as="p"
          className="text-[16px] text-[#575757] font-futuraBT font-normal"
        >
          $25.00
        </Text>
      </div>

      <div className="flex justify-between mb-2">
        <Text
          as="p"
          className="text-[16px] text-[#575757] font-futuraBT font-normal"
        >
          Tax Collected:
        </Text>
        <Text
          as="p"
          className="text-[16px] text-[#575757] font-futuraBT font-normal"
        >
          $0
        </Text>
      </div>

      <hr className="h-px mb-5 mt-14 bg-[#B0B0B0] border-0" />

      <div className="flex justify-between mb-2">
        <Text
          as="p"
          className="text-[22px] text-[#000000] font-futuraBT font-normal"
        >
          Order Total:
        </Text>
        <Text
          as="p"
          className="text-[22px] text-[#000000] font-futuraBT font-normal"
        >
          $25.00
        </Text>
      </div>
    </div>
  );
};

export default PlaceOrder;
