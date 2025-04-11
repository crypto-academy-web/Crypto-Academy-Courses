"use client"
import React, { useState } from 'react';
import Image from 'next/image';

import Text from '@/components/ui/Text';
import SideCategory from './SideCategory';

import searchbar from "@/public/icons/searchbar.svg";
import course1 from "@/public/images/home/course1.png";
import clock from "@/public/icons/clock.svg";
import Button from '@/components/ui/Button';
import Link from 'next/link';

const courses = [
    {
        imageSrc: course1,
        title: 'All Assets Trading Course',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '80 minutes',
        price: 'Free',
    },
    {
        imageSrc: course1,
        title: 'All Assets Trading Course',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '80 minutes',
        price: 'Free',
    },
    {
        imageSrc: course1,
        title: 'All Assets Trading Course',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '80 minutes',
        price: 'Free',
    },
    {
        imageSrc: course1,
        title: 'All Assets Trading Course',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '80 minutes',
        price: 'Free',
    },
    {
        imageSrc: course1,
        title: 'Beginner Trading Course',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '60 minutes',
        price: 'Free',
    },
    {
        imageSrc: course1,
        title: 'Advanced Trading Strategies',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '120 minutes',
        price: 'Free',
    },
    {
        imageSrc: course1,
        title: 'Crypto Trading Basics',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '90 minutes',
        price: 'Free',
    },
    {
        imageSrc: course1,
        title: 'All Assets Trading Course',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '80 minutes',
        price: 'Free',
    },
    {
        imageSrc: course1,
        title: 'Beginner Trading Course',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '60 minutes',
        price: 'Free',
    },
    {
        imageSrc: course1,
        title: 'Advanced Trading Strategies',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '120 minutes',
        price: 'Free',
    },
    {
        imageSrc: course1,
        title: 'Crypto Trading Basics',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '90 minutes',
        price: 'Free',
    },
    {
        imageSrc: course1,
        title: 'All Assets Trading Course',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '80 minutes',
        price: 'Free',
    },
    {
        imageSrc: course1,
        title: 'Beginner Trading Course',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '60 minutes',
        price: 'Free',
    },
    {
        imageSrc: course1,
        title: 'Advanced Trading Strategies',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '120 minutes',
        price: 'Free',
    },
    {
        imageSrc: course1,
        title: 'Crypto Trading Basics',
        description: 'Start Trading Course Now... Quick & Dirty',
        duration: '90 minutes',
        price: 'Free',
    },
];

const Products = () => {
    // State to track the number of courses to display (initially 9 courses)
    const [visibleCourses, setVisibleCourses] = useState(9);

    // Toggle between showing all courses and only the initial 9
    const [isAllCoursesVisible, setIsAllCoursesVisible] = useState(false);

    // Handle "Load More" button click
    const handleLoadMore = () => {
        setVisibleCourses(courses.length); // Show all courses
        setIsAllCoursesVisible(true); // Set the state to show all courses
    };

    // Handle "Show Less" button click
    const handleShowLess = () => {
        setVisibleCourses(9); // Show only the first 9 courses
        setIsAllCoursesVisible(false); // Set the state to show initial courses
    };

    return (
        <div className='w-full px-5'>
            <div className="max-w-[1313px] mx-auto w-full">
                <div className="flex justify-between">
                    <Text as='h1' className='text-black text-[36px]'>
                        Trading Courses
                    </Text>

                    <div className="flex items-center space-x-[2px] max-w-[199px] w-full">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-grow focus:outline-none font-helvetica text-[8px] text-primary border border-[#00000066] px-3 py-2 w-full max-w-[155px] h-[28px]"
                        />
                        <button className="bg-primary w-[40px] h-[28px] flex items-center justify-center">
                            <Image src={searchbar} alt="searchbar" />
                        </button>
                    </div>

                    <div className="flex">
                        <div className="flex items-center">
                            <button className="bg-primary w-[65px] h-[28px] flex items-center justify-center text-[9px] font-helvetica font-medium text-white">
                                Sort By
                            </button>
                            <select
                                className="flex-grow focus:outline-none font-helvetica text-[8px] text-primary border border-[#00000066] px-3 py-2 w-full max-w-[155px] h-[28px] bg-white"
                            >
                                <option value="release_date_desc">Release date (newest first)</option>
                                <option value="release_date_asc">Release date (oldest first)</option>
                                <option value="price_desc">Price (highest first)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <Text className='text-[14px] font-helvetica font-normal leading-[133%] max-w-[1187px] my-8'>
                    Unlock your trading potential with AvaAcademy! Register for free and gain exclusive access to advanced courses on trading platforms, asset classes, online strategies, and more. Dive deep into the world of trading with expert insights on fundamental and technical analysis, risk management, and the dynamics of financial markets. Start your comprehensive trading education journey today!
                </Text>

                <div className="flex justify-end w-full gap-12 mt-14">
                    {/* filter */}
                    <div className="w-full max-w-[251px]">
                        <SideCategory />
                    </div>

                    {/* courses */}
                    <div className="">
                        <div className="w-full max-w-[914px] flex flex-wrap items-center mob:justify-center gap-12">
                            {courses.slice(0, visibleCourses).map((course, index) => (
                                <Link href="/start-trading-course" key={index} className="w-[272.07px] rounded-[20px] course-shadow relative">
                                    <button className='bg-[#FF0000] w-[39px] h-[21px] rounded-[3px] absolute top-[15px] right-[15px] uppercase text-[9px] font-helvetica font-normal text-white'>HOT</button>
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
                                </Link>
                            ))}
                        </div>

                        {isAllCoursesVisible ? (
                            <Button className='mx-auto w-[186px] h-[45px] bg-primary my-12' onClick={handleShowLess}>
                                Show Less
                            </Button>
                        ) : (
                            <Button className='mx-auto w-[186px] h-[45px] bg-primary my-12' onClick={handleLoadMore}>
                                Load More
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
