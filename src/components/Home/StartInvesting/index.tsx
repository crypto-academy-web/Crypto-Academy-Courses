import React from 'react'
import Image from 'next/image'

import bg from "@/public/images/home/investbg.png"
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
const StartInvesting = () => {
    return (
        <div className='min-h-[484px] relative flex items-center justify-center'>
            <Image className='w-full h-full object-cover absolute z-0' src={bg} alt="bg" />
            <div className="bg-black absolute w-full h-full opacity-50 z-0"></div>
            <div className="max-w-[564px] w-full mx-auto relative z-10 py-10 mob:px-5">
                <Text as='h2' className='text-center text-white'>It’s time to <span className="text-accent"> start investing </span> in yourself</Text>

                <Text className='text-[18px] text-white text-center font-normal leading-[171%] mt-12 mb-14'>
                    Ava Academy online courses open the opportunity for learning to any
                    trader regardless of his/her level or scheduling commitments

                </Text>

                <Button className='max-w-[186px] h-[45px] text-white border-accent bg-accent rounded-[7px] mx-auto '>Get Started</Button>

            </div>
        </div>
    )
}

export default StartInvesting
