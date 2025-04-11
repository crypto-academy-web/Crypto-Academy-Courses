import React from 'react'

import Text from '@/components/ui/Text'
import CheckoutSection from '@/components/CheckoutSection'

const Checkoutpage = () => {
  return (
    <div>
      <div className="w-full px-5 bg-[#F6F6F6] h-[44px] mb-[68px] flex items-center">
        <div className="w-full max-w-[1193px] mx-auto">
          <Text className="text-[10px] text-[#20263033]/20">
            Home {`>>`} Checkout
          </Text>
        </div>
      </div>
      <CheckoutSection />
    </div>
  )
}

export default Checkoutpage
