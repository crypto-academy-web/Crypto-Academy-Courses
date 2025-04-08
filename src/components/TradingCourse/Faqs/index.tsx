import React from 'react'
import Text from '@/components/ui/Text'

const reasons = [
    {
        title: "Why AvaAcademy Stands Out:",
        description: "If you’re looking to learn trading, AvaAcademy offers free online trading courses that allow you to learn anywhere and anytime. With a variety of resources tailored to your skill level, AvaAcademy provides a convenient and effective way to enhance your trading knowledge."
    },
    {
        title: "Why AvaAcademy Stands Out:",
        description: "If you’re looking to learn trading, AvaAcademy offers free online trading courses that allow you to learn anywhere and anytime. With a variety of resources tailored to your skill level, AvaAcademy provides a convenient and effective way to enhance your trading knowledge."
    },
    {
        title: "Why AvaAcademy Stands Out:",
        description: "If you’re looking to learn trading, AvaAcademy offers free online trading courses that allow you to learn anywhere and anytime. With a variety of resources tailored to your skill level, AvaAcademy provides a convenient and effective way to enhance your trading knowledge."
    },
    {
        title: "Why AvaAcademy Stands Out:",
        description: "If you’re looking to learn trading, AvaAcademy offers free online trading courses that allow you to learn anywhere and anytime. With a variety of resources tailored to your skill level, AvaAcademy provides a convenient and effective way to enhance your trading knowledge."
    },
  
]

const Faqs = () => {
    return (
        <div className='my-16 px-5'>
            <Text as='h2' className='text-[36px] text-center mb-8'>Trading courses - FAQ</Text>

            <div className="w-full max-w-[1313px] mx-auto grid grid-cols-2 mob:grid-cols-1 gap-8 ">
                {reasons.map((section, index) => (
                    <div key={index} className="w-full min-h-[294px] mob:min-h-full mob:w-full bg-[#e5e5e5] px-6 py-7">
                        <Text as='h2' className='text-[21px]'>
                            {section.title}
                        </Text>
                        <Text className='text-[15px] font-normal leading-[20px] mt-4 max-w-[544px]'>
                            {section.description}
                        </Text>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Faqs
