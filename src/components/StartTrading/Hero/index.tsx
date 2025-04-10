import React from 'react'

import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'

import category from "@/public/images/start-trading/category.png"
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='bg-[#202630] min-h-[318px] py-10 px-5'>
            <div className="max-w-[1313px] mx-auto">
                <div className="w-full max-w-[792px]">
                    <Button className='bg-[#FF0000] rounded-[6px] px-2 py-1 text-[10px] font-bold font-helvetica border-none max-w-[76px]'>
                        Hot Course
                    </Button>
                    <Text as='h1' className='text-[36px] text-white  mt-10' >
                        Start Trading Course Now... Quick  & Dirty
                    </Text>
                    <Text className='text-[14px] text-white leading-[133%] font-normal mt-2' >
                        Ready to dive into the trading world? If you are eager to embark on a trading journey, our "Start Trading Now... <span className='text-[#7B6FFE]'> Show more</span>
                    </Text>

                    <div className="flex mt-8">
                        <div className="flex gap-2">
                            <Image src={category} alt="category" width={28} height={36} />
                            <div className="">
                                <Text className='text-[14px] text-white/70 leading-[20px] font-bold ' >
                                    Category
                                </Text>
                                <Text className='text-[16px] text-white leading-[20px] font-bold mt-1' >
                                    All Assets Trading Course
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
