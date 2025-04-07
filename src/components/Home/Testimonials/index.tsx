import React from 'react'
import Image from 'next/image'

import Text from '@/components/ui/Text'

import dots from "@/public/images/home/dots.png"
import user from "@/public/images/home/user.png"
const Testimonials = () => {
    return (
        <div className='mt-20 mb-10 px-5'>
            <div className="w-full max-w-[1313px] mx-auto bg-[#20263040] py-8 rounded-[30px] mob:px-5">
                <Text as='h2' className='text-center text-[34px] '>
                    People Say The Nicest Things
                </Text>
                <Image className='mx-auto mt-12' src={dots} alt="dots" />
                <Text className='text-center text-[17px] font-normal leading-[131%] max-w-[648px] mx-auto mt-2'>
                    “I knew the basics of trading, but I didn’t understand the important of things like technical analysis, Stop-Loss and Take Profit orders. AvaAcademy, you have
                    given me the gift of knowledge. Much appreciated”
                </Text>
                <Text className='text-center text-[19px] font-bold leading-[134%] mt-4'>
                    Carol Schwartz
                </Text>

                <Image className='mx-auto mt-6' src={user} alt="user" width={50} height={50} />

            </div>
        </div>
    )
}

export default Testimonials
