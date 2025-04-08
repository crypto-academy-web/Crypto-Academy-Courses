"use client"
import Image from 'next/image'
import React, { useState } from 'react'

import course1 from "@/public/images/trading-guide/course.png"
import Text from '@/components/ui/Text'

import arrownext from "@/public/icons/arrownext.svg"
import plus from "@/public/icons/plussign.svg"

const courses = [
    { title: "5 Bold Signs You’re Leveling Up", description: "Moving from financial stability to building exceptional wealth isn’t just about earning more, it’s about transforming how you think, manage, and grow your money. These five signs indicate you’re stepping up to a stronger financial position. 1. Your Career Is Driving Real Growth You’re no longer relying on small, routine pay raises. Instead, you’re taking […]", image: course1 },
    { title: "5 Bold Signs You’re Leveling Up", description: "Moving from financial stability to building exceptional wealth isn’t just about earning more, it’s about transforming how you think, manage, and grow your money. These five signs indicate you’re stepping up to a stronger financial position. 1. Your Career Is Driving Real Growth You’re no longer relying on small, routine pay raises. Instead, you’re taking […]", image: course1 },
    { title: "5 Bold Signs You’re Leveling Up", description: "Moving from financial stability to building exceptional wealth isn’t just about earning more, it’s about transforming how you think, manage, and grow your money. These five signs indicate you’re stepping up to a stronger financial position. 1. Your Career Is Driving Real Growth You’re no longer relying on small, routine pay raises. Instead, you’re taking […]", image: course1 },
    { title: "5 Bold Signs You’re Leveling Up", description: "Moving from financial stability to building exceptional wealth isn’t just about earning more, it’s about transforming how you think, manage, and grow your money. These five signs indicate you’re stepping up to a stronger financial position. 1. Your Career Is Driving Real Growth You’re no longer relying on small, routine pay raises. Instead, you’re taking […]", image: course1 },
    { title: "5 Bold Signs You’re Leveling Up", description: "Moving from financial stability to building exceptional wealth isn’t just about earning more, it’s about transforming how you think, manage, and grow your money. These five signs indicate you’re stepping up to a stronger financial position. 1. Your Career Is Driving Real Growth You’re no longer relying on small, routine pay raises. Instead, you’re taking […]", image: course1 },
    { title: "5 Bold Signs You’re Leveling Up", description: "Moving from financial stability to building exceptional wealth isn’t just about earning more, it’s about transforming how you think, manage, and grow your money. These five signs indicate you’re stepping up to a stronger financial position. 1. Your Career Is Driving Real Growth You’re no longer relying on small, routine pay raises. Instead, you’re taking […]", image: course1 },
    { title: "5 Bold Signs You’re Leveling Up", description: "Moving from financial stability to building exceptional wealth isn’t just about earning more, it’s about transforming how you think, manage, and grow your money. These five signs indicate you’re stepping up to a stronger financial position. 1. Your Career Is Driving Real Growth You’re no longer relying on small, routine pay raises. Instead, you’re taking […]", image: course1 },
    { title: "5 Bold Signs You’re Leveling Up", description: "Moving from financial stability to building exceptional wealth isn’t just about earning more, it’s about transforming how you think, manage, and grow your money. These five signs indicate you’re stepping up to a stronger financial position. 1. Your Career Is Driving Real Growth You’re no longer relying on small, routine pay raises. Instead, you’re taking […]", image: course1 },
    { title: "5 Bold Signs You’re Leveling Up", description: "Moving from financial stability to building exceptional wealth isn’t just about earning more, it’s about transforming how you think, manage, and grow your money. These five signs indicate you’re stepping up to a stronger financial position. 1. Your Career Is Driving Real Growth You’re no longer relying on small, routine pay raises. Instead, you’re taking […]", image: course1 },
    { title: "5 Bold Signs You’re Leveling Up", description: "Moving from financial stability to building exceptional wealth isn’t just about earning more, it’s about transforming how you think, manage, and grow your money. These five signs indicate you’re stepping up to a stronger financial position. 1. Your Career Is Driving Real Growth You’re no longer relying on small, routine pay raises. Instead, you’re taking […]", image: course1 },
    { title: "5 Bold Signs You’re Leveling Up", description: "Moving from financial stability to building exceptional wealth isn’t just about earning more, it’s about transforming how you think, manage, and grow your money. These five signs indicate you’re stepping up to a stronger financial position. 1. Your Career Is Driving Real Growth You’re no longer relying on small, routine pay raises. Instead, you’re taking […]", image: course1 },
    { title: "5 Bold Signs You’re Leveling Up", description: "Moving from financial stability to building exceptional wealth isn’t just about earning more, it’s about transforming how you think, manage, and grow your money. These five signs indicate you’re stepping up to a stronger financial position. 1. Your Career Is Driving Real Growth You’re no longer relying on small, routine pay raises. Instead, you’re taking […]", image: course1 },
    { title: "5 Bold Signs You’re Leveling Up", description: "Moving from financial stability to building exceptional wealth isn’t just about earning more, it’s about transforming how you think, manage, and grow your money. These five signs indicate you’re stepping up to a stronger financial position. 1. Your Career Is Driving Real Growth You’re no longer relying on small, routine pay raises. Instead, you’re taking […]", image: course1 },
    { title: "5 Bold Signs You’re Leveling Up", description: "Moving from financial stability to building exceptional wealth isn’t just about earning more, it’s about transforming how you think, manage, and grow your money. These five signs indicate you’re stepping up to a stronger financial position. 1. Your Career Is Driving Real Growth You’re no longer relying on small, routine pay raises. Instead, you’re taking […]", image: course1 },
    { title: "5 Bold Signs You’re Leveling Up", description: "Moving from financial stability to building exceptional wealth isn’t just about earning more, it’s about transforming how you think, manage, and grow your money. These five signs indicate you’re stepping up to a stronger financial position. 1. Your Career Is Driving Real Growth You’re no longer relying on small, routine pay raises. Instead, you’re taking […]", image: course1 },
];

const CoursesGuide = () => {
    const coursesPerPage = 12; // Items per page
    const [currentPage, setCurrentPage] = useState(1);

    // Logic to get the courses for the current page
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

    const totalPages = Math.ceil(courses.length / coursesPerPage);

    // Handle page change
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='px-5 my-20'>
            <div className="mx-auto max-w-[1313px] w-full flex flex-wrap items-center gap-[62px] ">
                {currentCourses.map((course, index) => (
                    <div key={index} className="w-full max-w-[396px]">

                        <div className="h-[207px] flex items-center justify-center relative group">
                            <Image src={course.image} alt={`course${index + 1}`} className="w-full h-full object-cover" />

                            <div className="w-full h-full object-cover bg-black/40 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer"></div>
                            <Image src={plus} alt="plus" className="absolute opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-in-out transform cursor-pointer" />
                        </div>

                        {/* Content */}
                        <div className="mt-4">
                            <Text className='text-[21px] font-bold leading-[133%] mt-4'>{course.title}</Text>
                            <Text className='text-[14px] font-normal leading-[133%] mt-5'>
                                {course.description}
                            </Text>
                        </div>

                        <div className="w-[47px] h-[4.3px] bg-primary mt-8"></div>

                        <div className="flex items-center gap-1 mt-10">
                            <div className="w-[69px] h-[4.3px] bg-accent"></div>
                            <div className="bg-[#000000] w-full h-[1px] mt-[1px]"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex  mt-10 mx-auto max-w-[1313px] ">
                <div className="flex items-center space-x-2">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className="p-2 h-[25px] flex items-center gap-1 justify-center bg-white  border border-[#000000] disabled:opacity-50 text-[12px] font-helvetica font-normal"
                    >
                        <Image className='rotate-[180deg]' src={arrownext} alt="arrownext" width={5} height={5.6} />
                        Prev
                    </button>

                    {/* Display Page Numbers */}
                    {[...Array(totalPages)].map((_, index) => {
                        const pageNumber = index + 1;
                        return (
                            <button
                                key={pageNumber}
                                onClick={() => setCurrentPage(pageNumber)}
                                className={`p-2 h-[26px] w-[26px] flex items-center justify-center text-[12px] font-helvetica font-normal  ${currentPage === pageNumber ? 'bg-accent border border-accent  text-white' : 'bg-white border border-primary text-primary'}`}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}

                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className="p-2 h-[25px] flex items-center gap-1 justify-center bg-white  border border-[#000000] disabled:opacity-50 text-[12px] font-helvetica font-normal"
                    >
                        Next
                        <Image src={arrownext} alt="arrownext" width={5} height={5.6} />
                    </button>
                </div>
            </div>


        </div>
    )
}

export default CoursesGuide;
