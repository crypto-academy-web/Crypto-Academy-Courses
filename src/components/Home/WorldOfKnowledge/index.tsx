import React from 'react'
import Image from 'next/image'

import knowledge from "@/public/images/home/knowledge.png"
import Text from '@/components/ui/Text'
const WorldOfKnowledge = () => {
  return (
    <div className='px-5 mob:mb-10'>
        <div className="w-full max-w-[1313px] flex flex-wrap gap-20 items-center">
            <Image src={knowledge} alt="knowledge" width={607} height={604} />

            <div className="max-w-[508px]">
                <Text as="h2" className='text-[43px] leading-[131%]'>
                A World of Knowledge in 
                The Palm of Your Hand!
                </Text>
                <Text as="h2" className='text-[17px] font-normal leading-[171%] mt-8'>
                With the AvaAcademy mobile version you can continue learning as you travel, work or even take a bath (but don’t drop the phone!). All you need is a mobile device and an open mind!
                </Text>
            </div>
        </div>
      
    </div>
  )
}

export default WorldOfKnowledge
