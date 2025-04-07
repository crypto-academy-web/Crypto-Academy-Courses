import Button from '@/components/ui/Button'
import Text from '@/components/ui/Text'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='min-h-[638px] h-screen bg-accent px-5 flex items-center'>
            <div className="w-full  max-w-[1313px] mx-auto">
                <div className="max-w-[423px]">
                    <Text as='h1'>Crypto Academy</Text>
                    <Text className='text-white text-[28px] font-light '>Master Crypto Shape Your Future!</Text>
                    <Text className='text-white text-[16px] font-light mt-5 mb-6'>
                        Unleash your trading potential with the best lessons, courses
                        and quizzes from AvaAcademy.
                    </Text>

                    <div className="flex gap-5">
                        <Button className='max-w-[91px]'>Login</Button>
                        <Button className='max-w-[124px] text-primary bg-[#FFFFFF]'>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
