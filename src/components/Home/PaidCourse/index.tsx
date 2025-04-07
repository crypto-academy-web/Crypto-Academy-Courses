"use client"
import React, { useState } from 'react'
import Image from 'next/image';

import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button';

import course1 from "@/public/images/home/course1.png"
import clock from "@/public/icons/clock.svg"
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

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className='pt-14 pb-12  bg-[#2026301A] px-5'>
            <div className="max-w-[1313px] w-full mx-auto">
                <div className="flex justify-between">
                    <Text as="h2" className=''>Paid Courses</Text>

                    <div className="w-[302px] h-[57px]">
                        <div className="relative">
                            <select
                                id="dropdown"
                                value={selectedOption}
                                onChange={handleChange}
                                className="mt-2 block w-full px-4 py-2 h-[57px] bg-white border-[0.2px] rounded-none border-[#000000]/20 focus:outline-none appearance-none pr-8 text-[14px] text-primary font-helvetica font-light"
                            >
                                <option className='text-[14px] text-primary font-helvetica font-light' value="" disabled>Release date (newest first)</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                                <option value="option4">Option 4</option>
                            </select>
                            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>

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
