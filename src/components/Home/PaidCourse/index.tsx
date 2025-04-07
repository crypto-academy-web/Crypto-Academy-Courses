import React from 'react'

import Text from '@/components/ui/Text'

import course1 from "@/public/images/home/course1.png"
import clock from "@/public/icons/clock.svg"
import Image from 'next/image';
import Button from '@/components/ui/Button';
const courses = [
    {
        id: 1,
        imageSrc: course1, 
        title: 'All Assets Trading Course',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '80 minutes',
        price: 'Free',
    },
    {
        id: 2,
        imageSrc: course1,
        title: 'Beginner Trading Course',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '60 minutes',
        price: 'Free',
    },
    {
        id: 3,
        imageSrc: course1,
        title: 'Advanced Trading Strategies',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '120 minutes',
        price: 'Free',
    },
    {
        id: 4,
        imageSrc: course1,
        title: 'Crypto Trading Basics',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '90 minutes',
        price: 'Free',
    },
    {
        id: 5,
        imageSrc: course1, 
        title: 'All Assets Trading Course',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '80 minutes',
        price: 'Free',
    },
    {
        id: 6,
        imageSrc: course1, 
        title: 'Beginner Trading Course',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '60 minutes',
        price: 'Free',
    },
    {
        id: 7,
        imageSrc: course1, 
        title: 'Advanced Trading Strategies',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '120 minutes',
        price: 'Free',
    },
    {
        id: 8,
        imageSrc: course1, 
        title: 'Crypto Trading Basics',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '90 minutes',
        price: 'Free',
    },
];

const PaidCourse = () => {
    return (
        <div className='pt-14 pb-12  bg-[#2026301A] px-5'>
            <div className="max-w-[1313px] w-full mx-auto">
                <Text as="h2" className=''>Paid Courses</Text>

                <div className="w-full max-w-[1313px] mx-auto flex flex-wrap items-center justify-between mob:justify-center gap-8 mt-12">
                    {courses.map((course) => (
                        <div key={course.id} className="w-[300px] rounded-[20px] course-shadow bg-white relative">
                            <button className='bg-[#FF0000] w-[39px] h-[21px] rounded-[3px] absolute top-[15px] right-[15px] uppercase text-[9px] font-helvetica font-normal text-white '>HOT</button>
                            <Image
                                className="w-full h-[154px] object-cover rounded-t-[20px]"
                                src={course.imageSrc}
                                alt={course.title}
                                width={300}
                                height={154}
                            />
                            <div className="px-[23px] py-[16px]">
                                <Text className="text-[#0000004D] text-[13px] font-light">{course.title}</Text>
                                <Text className="text-[15px] font-bold leading-[20px] mb-5">
                                    {course.description}
                                </Text>

                                <hr className="h-[0.8px] w-full bg-black" />
                                <div className="flex justify-between items-center mt-1">
                                    <div className="flex items-center gap-2">
                                        <Image src={clock} alt="clock" width={10} height={10} />
                                        <Text className="text-[9px] text-black">{course.duration}</Text>
                                    </div>
                                    <Text className="text-[12px] font-bold">{course.price}</Text>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Button className='mx-auto mt-20 bg-primary text-white rounded-[7px] max-w-[186px] h-[45px] text-[17px] font-medium'>Load More</Button>
            </div>
        </div>
    )
}

export default PaidCourse
