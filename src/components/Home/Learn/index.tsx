import React from 'react'
import Image from 'next/image'

import Text from '@/components/ui/Text'
import icon1 from "@/public/images/home/icon1.png"
import icon2 from "@/public/images/home/icon2.png"
import icon3 from "@/public/images/home/icon3.png"
import icon4 from "@/public/images/home/icon4.png"
import icon5 from "@/public/images/home/icon5.png"
import icon6 from "@/public/images/home/icon6.png"

const items = [
    {
        id: 1,
        image: icon1,
        text: 'How to Trade Crypto',
    },
    {
        id: 2,
        image: icon2,
        text: 'How to Trade Crypto',
    },
    {
        id: 3,
        image: icon3,
        text: 'How to Trade Crypto',
    },
    {
        id: 4,
        image: icon4,
        text: 'How to Trade Crypto',
    },
    {
        id: 5,
        image: icon5,
        text: 'How to Trade Crypto',
    },
    {
        id: 6,
        image: icon6,
        text: 'How to Trade Crypto',
    },
];
const Learn = () => {
    return (
        <div className='pb-20 px-5'>
            <Text as='h2' className=' text-center font-medium'>What will you learn?</Text>

            <Text className=' text-center font-normal max-w-[609px] mx-auto leading-[100%] mt-8 mb-16'>
                Work your way through courses on all aspects of trading, complete quizzes
                at the end of each level to test your knowledge and practice the newly
                learned materials in real-time trading simulator. Learn how, when and what
                to trade.
            </Text>

            <div className="flex flex-wrap justify-center gap-10 mt-28 mx-auto">
                {items.map((item) => (
                    <div key={item.id} className="course-shadow w-[150px] rounded-[20px] py-5 px-5">
                        <div className="h-[40px]">
                            <Image className="mx-auto h-full w-auto" src={item.image} alt="icon" width={27} height={45} />
                        </div>
                        <Text className="text-center text-[13px] mt-3">{item.text}</Text>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Learn
