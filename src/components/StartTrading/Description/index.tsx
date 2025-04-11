import React from 'react'
import Image from 'next/image';

import Button from '@/components/ui/Button'
import Text from '@/components/ui/Text'

import course1 from "@/public/images/home/course1.png";
import heart from "@/public/icons/heart.svg";
import share from "@/public/icons/share.svg";
import time from "@/public/images/start-trading/time.png";
import book from "@/public/images/start-trading/book.png";
import video from "@/public/images/start-trading/video.png";
import quiz from "@/public/images/start-trading/quiz.png";
import level from "@/public/images/start-trading/level.png";
import fullvid from "@/public/images/start-trading/video.png";
import tv from "@/public/images/start-trading/tv.png";
// import clock from "@/public/icons/clock.svg";

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

];

const Description = () => {
    return (
        <div className='px-5 '>
            <div className="w-full max-w-[1313px] mx-auto flex tab:flex-wrap gap-10 mob:gap-5 justify-between">

                {/* description */}
                <div className="w-full max-w-[792px] px-4 py-7  border-[0.5px] border-black rounded-[20px] my-12">
                    <div className="flex gap-10">
                        <button className='text-[14px] font-bold leading-[100%]'>Description</button>
                        <button className='text-[14px] font-bold leading-[100%]'>Curriculum</button>
                    </div>
                    <hr className='w-full h-[1.5px] bg-black mt-3 mb-5' />
                    <Text className='text-[16px] font-normal leading-[133%] max-w-[728px] mb-5'>
                        For those of us who have a basic understanding of finance but have never traded, it may be sufficient
                        to learn the fundamentals of financial markets. This course provides a short recap of our extended
                        courses, enabling us to tie together what we know with what is required. We will learn what financial
                        markets are, what Forex is and how to trade it with relative ease and safety.
                    </Text>

                    <Text as='h2' className='text-[21px] leading-[20px] ' >What We Will Learn:

                        <ul className='mt-3 list-disc pl-5 text-[16px] font-normal leading-[144%]'>
                            <li><span className='font-bold'>Fundamental Ties:</span> Link your financial understanding to trading essentials, seamlessly.</li>
                            <li><span className='font-bold'>Forex Unveiled:</span> Demystify foreign exchange markets and learn safe, accessible trading techniques.</li>
                            <li><span className='font-bold'>Smart Instrument Use:</span> Grasp the convenience of Contracts for Difference (CFDs) in financial markets.</li>
                            <li><span className='font-bold'>Market Mastery:</span> Dive into market orders for strategic investment decisions.</li>
                            <li><span className='font-bold'>Analytical Insights:</span> Extract valuable insights from financial analysis.</li>
                        </ul>
                    </Text>
                    <Text as='h2' className='text-[21px] leading-[20px] mt-8 ' >Level:
                        <ul className='mt-3 list-disc pl-5 text-[16px] font-normal leading-[144%]'>
                            <li>Beginner</li>
                        </ul>
                    </Text>
                    <Text as='h2' className='text-[21px] leading-[20px] mt-8 ' > Pre-requisites
                        <ul className='mt-3 list-disc pl-5 text-[16px] font-normal leading-[144%]'>
                            <li>We strongly recommend you <span className="text-[#7B6FFE] italic underline"> log into your trading account </span> at AvaTrade for practice purposes</li>
                            <li>Some lessons might appear in multiple courses due to their relevance</li>
                        </ul>
                    </Text>

                    <Button className='bg-accent max-w-[351px] mx-auto h-[50px] rounded-[7px] my-10'> OPEN YOUR FREE TRADING ACCOUNT</Button>

                    <Text as='h2' className='text-[21px] leading-[20px] mt-8 ' >
                        Related Course
                    </Text>
                    <hr className='w-full h-[1.5px] bg-black mt-3 mb-5' />

                    <div className="w-full  flex flex-wrap items-center mob:justify-center gap-3">
                        {courses.map((course, index) => (
                            <div key={index} className="max-w-[244px] rounded-[20px] course-shadow relative">
                                <button className='bg-[#FF0000] w-[39px] h-[21px] rounded-[3px] absolute top-[15px] right-[15px] uppercase text-[9px] font-helvetica font-normal text-white'>HOT</button>
                                <Image
                                    className="w-full h-[126px] object-cover rounded-t-[20px]"
                                    src={course.imageSrc}
                                    alt={course.title}
                                    width={300}
                                    height={126}
                                />
                                <div className="px-[23px] py-[16px]">
                                    <Text className="text-[#0000004D] text-[10px] font-light">{course.title}</Text>
                                    <Text className="text-[12px] font-bold leading-[20px] mb-3">
                                        {course.description}
                                    </Text>
                                    <Text className="text-[12px] font-bold leading-[20px] ">
                                        Free
                                    </Text>



                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* register */}
                <div className="w-full max-w-[401px] mt-[-250px] xl:mt-[50px] tab:mt-[0px] tab:mb-[40px]">
                <div className="w-full max-w-[401px] px-4 py-5 bg-white border-[0.5px] border-black rounded-[20px]">
                    <Image className='w-full max-h-[183px] object-cover rounded-[10px]' src={course1} alt="course1" />

                    <Button className='bg-accent  mx-auto h-[47px] rounded-[7px] my-5 text-[17px]'>Login/Register</Button>

                    <div className="flex justify-center gap-5">
                        <div className="flex gap-1 items-center">
                            <Image className='' src={heart} alt="heart" width={13} height={12} />
                            <Text className='text-[8px] text-[#00000080] leading-[100%]'>Add to Wishlist</Text>
                        </div>
                        <div className="flex gap-1 items-center">
                            <Image className='' src={share} alt="share" width={12} height={12} />
                            <Text className='text-[8px] text-[#00000080] leading-[100%]'>Share</Text>
                        </div>
                    </div>

                    <Text className='text-[11px] text-[#00000080] font-bold  my-6'>30-Day Money-Back Guarantee</Text>

                    <Text className='text-[11px] text-[#00000080] font-bold'>Course Details</Text>
                    <hr className='h-[1.7px] w-full bg-black/40 mb-3 mt-2' />

                    <div className="flex items-center justify-between">
                        <div className="flex gap-1 items-center">
                            <Image className='w-[12px] h-[12px]' src={time} alt="share" width={12} height={12} />
                            <Text className='text-[10px] text-[#000000] leading-[100%] '>Duration</Text>
                        </div>
                        <Text className='text-[10px]  leading-[100%] font-bold'>80 minutes</Text>
                    </div>

                    <hr className='h-[1.7px] w-full bg-black/40 mb-3 mt-2' />
                    <div className="flex items-center justify-between">
                        <div className="flex gap-1 items-center">
                            <Image className='w-[12px] h-[12px]' src={book} alt="share" width={12} height={12} />
                            <Text className='text-[10px] text-[#000000] leading-[100%] '>Lectures</Text>
                        </div>
                        <Text className='text-[10px]  leading-[100%] font-bold'>23</Text>
                    </div>

                    <hr className='h-[1.7px] w-full bg-black/40 mb-3 mt-2' />
                    <div className="flex items-center justify-between">
                        <div className="flex gap-1 items-center">
                            <Image className='w-[12px] h-[12px]' src={video} alt="share" width={12} height={12} />
                            <Text className='text-[10px] text-[#000000] leading-[100%] '>Videos</Text>
                        </div>
                        <Text className='text-[10px]  leading-[100%] font-bold'>43 minutes</Text>
                    </div>
                    <hr className='h-[1.7px] w-full bg-black/40 mb-3 mt-2' />
                    <div className="flex items-center justify-between">
                        <div className="flex gap-1 items-center">
                            <Image className='w-[12px] h-[12px]' src={quiz} alt="share" width={12} height={12} />
                            <Text className='text-[10px] text-[#000000] leading-[100%] '>Quizzes</Text>
                        </div>
                        <Text className='text-[10px]  leading-[100%] font-bold'>9</Text>
                    </div>
                    <hr className='h-[1.7px] w-full bg-black/40 mb-3 mt-2' />
                    <div className="flex items-center justify-between">
                        <div className="flex gap-1 items-center">
                            <Image className='w-[12px] h-[12px]' src={level} alt="share" width={12} height={12} />
                            <Text className='text-[10px] text-[#000000] leading-[100%] '>Level</Text>
                        </div>
                        <Text className='text-[10px]  leading-[100%] font-bold'>Beginner</Text>
                    </div>
                    <hr className='h-[1.7px] w-full bg-black/40 mb-3 mt-2' />
                    <div className="flex items-center justify-between">
                        <div className="flex gap-1 items-center">
                            <Image className='w-[12px] h-[12px]' src={fullvid} alt="share" width={12} height={12} />
                            <Text className='text-[10px] text-[#000000] leading-[100%] '>Full-LifeTime Access</Text>
                        </div>
                    </div>
                    <hr className='h-[1.7px] w-full bg-black/40 mb-3 mt-2' />
                    <div className="flex items-center justify-between">
                        <div className="flex gap-1 items-center">
                            <Image className='w-[12px] h-[12px]' src={tv} alt="share" width={12} height={12} />
                            <Text className='text-[10px] text-[#000000] leading-[100%] '>Access on mobile and TV</Text>
                        </div>
                    </div>

                </div>
                </div>

            </div>

        </div>
    )
}

export default Description
