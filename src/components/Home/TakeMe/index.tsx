import React from "react";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import Link from "next/link";

const TakeMe = () => {
  return (
    <div className="bg-primary py-8 mb-20">
      <Text className="text-[19px] text-white text-center px-5 font-bold mb-5">
        Unleash the incredible potential of your trading knowledge with a free
        complimentary trading account on AvaTrade’s cutting-edge platform.
      </Text>
      <div className="w-[235px] mx-auto mt-[54px] mb-5">
        <Link href="/trading-courses" className="w-[235px]">
          {/* <div className="flex justify-center "> */}
          <Button className="max-w-[235px] rounded-[110px]">
            Take me There
          </Button>
          {/* </div> */}
        </Link>
      </div>
    </div>
  );
};

export default TakeMe;
