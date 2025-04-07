import React from 'react'
import Image from 'next/image'

import Text from '@/components/ui/Text'

import course1 from "@/public/images/home/course1.png"
import clock from "@/public/icons/clock.svg"

const courses = [
  {
    id: 1,
    imageSrc: course1, // Use the imported image here
    title: 'All Assets Trading Course',
    description: 'Start Trading Course Now... Quick & Dirty',
    duration: '80 minutes',
    price: 'Free',
  },
  {
    id: 2,
    imageSrc: course1, // Use the imported image here for the second course (or another image if needed)
    title: 'Beginner Trading Course',
    description: 'Start Trading Course Now... Quick & Dirty',
    duration: '60 minutes',
    price: 'Free',
  },
  {
    id: 3,
    imageSrc: course1, // Same image for this one as well (or replace with another image)
    title: 'Advanced Trading Strategies',
    description: 'Start Trading Course Now... Quick & Dirty',
    duration: '120 minutes',
    price: 'Free',
  },
  {
    id: 4,
    imageSrc: course1, // Same for the last one
    title: 'Crypto Trading Basics',
    description: 'Start Trading Course Now... Quick & Dirty',
    duration: '90 minutes',
    price: 'Free',
  },
];

const FreeCourses = () => {
  return (
    <div className='px-5 pb-20'>
      <div className="w-full max-w-[1313px] mx-auto flex justify-between items-end">
        <Text as='h2'>Free Courses</Text>
        <Text className='text-[14px] font-medium'>View All</Text>
      </div>
      <div className="w-full max-w-[1313px] mx-auto flex flex-wrap items-center justify-between gap-8 mt-8">
        {courses.map((course) => (
          <div key={course.id} className="w-[300px] rounded-[20px] course-shadow">
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

    </div>
  )
}

export default FreeCourses
