import React from 'react'
import Image from 'next/image'

import Text from '@/components/ui/Text'

import signin from "@/public/images/home/signin.png"
import cources from "@/public/images/home/cources.png"
import learning from "@/public/images/home/learning.png"
const HowItWorks = () => {
    return (
        <div className='py-24'>
            <Text as="h2" className='text-center'>How it works?</Text>

            <div className="flex flex-wrap gap-[67px] mob:gap-16 justify-center mt-16 mx-auto w-full max-w-[930px]">
                {/* col1 */}
                <div className="w-full max-w-[265px]">
                    <Image className='mx-auto' src={signin} alt="" width={112} height={112} />
                    <Text className='text-accent text-center text-[21px] font-bold my-4'>Sign Up</Text>
                    <Text className=' text-center text-[12px] font-normal leading-[100%]'>
                        Choose your level, pick a topic that interests you
                        and follow the pre-set curriculums</Text>
                </div>

                {/* col2 */}
                <div className="w-full max-w-[265px]">
                    <Image className='mx-auto' src={cources} alt="" width={112} height={112} />
                    <Text className='text-accent text-center text-[21px] font-bold my-4'>Select your courses</Text>
                    <Text className=' text-center text-[12px] font-normal leading-[100%]'>
                        Fill in your details and get immediate access to a
                        world of financial knowledge
                    </Text>
                </div>

                {/* col3 */}
                <div className="w-full max-w-[265px]">
                    <Image className='mx-auto' src={learning} alt="" width={53} height={112} />
                    <Text className='text-accent text-center text-[21px] font-bold my-4'>Start Learning</Text>
                    <Text className=' text-center text-[12px] font-normal leading-[100%]'>
                        Watch videos, explore articles and tutorials, take
                        quizzes and practice all you’ve learned to enhance
                        your trading skills
                    </Text>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
