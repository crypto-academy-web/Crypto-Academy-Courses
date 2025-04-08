import React from 'react'
import Image from 'next/image'

import bg from "@/public/images/trading-guide/guidebg.png"
import Text from '@/components/ui/Text'
const HeroGuide = () => {
    return (
        <div className='px-5'>
            <div className="mx-auto max-w-[829px] relative min-h-[190px] flex items-center justify-center">
                <Image className='w-full h-full object-cover absolute z-0' src={bg} alt="guidebg" />

                <Text as='h1' className='text-center z-10'>Trading Guides</Text>
            </div>
        </div>
    )
}

export default HeroGuide
