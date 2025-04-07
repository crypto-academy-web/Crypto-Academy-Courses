import React from 'react'
import Image from 'next/image'

import Button from '@/components/ui/Button'
import Text from '@/components/ui/Text'

import herobg from "@/public/images/home/herobg (2).png"

const HeroSection = () => {
    return (
        <div className='min-h-[638px] h-screen mob:h-full bg-accent px-5 flex items-center relative'>
            <div className="w-full flex flex-wrap gap-16 max-w-[1313px] mx-auto mob:mt-[150px]">
                <div className="max-w-[423px] relative z-10">
                    <Text as='h1'>Crypto Academy</Text>
                    <Text className='text-white text-[28px] font-light '>Master Crypto Shape Your Future!</Text>
                    <Text className='text-white text-[16px] font-light mt-5 mb-6'>
                        Unleash your trading potential with the best lessons, courses
                        and quizzes from AvaAcademy.
                    </Text>

                    <div className="flex gap-5 ">
                        <Button className='max-w-[91px]'>Login</Button>
                        <Button className='max-w-[124px] text-primary bg-[#FFFFFF]'>Get Started</Button>
                    </div>
                </div>
<Image className=' h-full object-cover w-auto absolute top-0 right-0  z-0 mob:relative mob:max-w-full mob:w-full ' src={herobg} alt="herobg" />
            </div>
        </div>
    )
}

export default HeroSection
