"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';

import Button from '../ui/Button';
import Text from '../ui/Text';

import user from "@/public/icons/user.svg"
import email from "@/public/icons/email.svg"
import password from "@/public/icons/password.svg"
import lock from "@/public/icons/lock.svg"
interface AuthProps {
    initialView: 'login' | 'getStarted'; // 👈 new prop
}


const Auth: React.FC<AuthProps> = ({ initialView }) => {

    const [selected, setSelected] = useState<'login' | 'getStarted'>(initialView);

    return (
        <div className="w-full  mx-auto space-y-4  max-h-[98vh]  overflow-y-auto scrollbar-hidden">
            {/* Toggle Buttons */}
            <div className="flex">
                <button
                    onClick={() => setSelected('login')}
                    className={clsx(
                        'text-[15px] font-medium font-helvetica w-[50%] h-[87px] rounded-tl-[56px] py-2 transition',
                        selected === 'login'
                            ? 'bg-gray-200 text-primary'
                            : 'bg-transparent text-primary hover:bg-gray-100'
                    )}
                >
                    Login
                </button>
                <button
                    onClick={() => setSelected('getStarted')}
                    className={clsx(
                        'text-[15px] font-medium font-helvetica w-[50%] py-2 rounded-tr-[56px] transition',
                        selected === 'getStarted'
                            ? 'bg-gray-200 text-primary'
                            : 'bg-transparent text-primary hover:bg-gray-100'
                    )}
                >
                    Get Started
                </button>
            </div>

            {/* Conditional Content */}
            {selected === 'login' && (
                <div className="w-full flex justify-center items-center">
                    <div className="w-full mx-auto max-w-[390px] mt-[49px]">
                        {/* Email Input with Icon */}
                        <div className="relative mb-[20px]">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                <Image src={email} alt="email icon" width={20} height={20} />
                            </span>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full max-w-[391px] pl-12 pr-4 py-3 
            border-b border-[#000000] placeholder:text-[#202630]
            focus:outline-none focus:ring-0 focus:border-[#000000] 
            border-t-0 border-l-0 border-r-0"
                            />
                        </div>

                        {/* Password Input with Icon */}
                        <div className="relative mb-[20px]">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                <Image
                                    src={password}
                                    alt="password icon"
                                    width={20}
                                    height={20}
                                />
                            </span>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full max-w-[391px] pl-12 pr-4 py-3 
            border-b border-[#000000] 
            focus:outline-none focus:ring-0 focus:border-[#000000] placeholder:text-[#202630]
            border-t-0 border-l-0 border-r-0"
                            />
                        </div>
                        <Button className="w-[208px] mx-auto h-[42px] rounded-[56px] bg-[#000080] text-[13px] font-bold font-helvetica text-white mb-[20px] mt-[29px]">
                            Login
                        </Button>
                        <div className="flex gap-1 mb-[48px] justify-center items-center">
                            <Image src={lock} alt="lock" />
                            <Text className="text-[10px] text-[#202630]/70">
                                Please use your AvaTrade credentials to log in
                            </Text>
                        </div>
                        <div className="flex justify-center">
                            <button className="text-center underline font-helvetica mx-auto text-[12px] text-[#202630]/70 mb-[60px]">
                                Forget Your Password?
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {selected === 'getStarted' && (
                <div className="w-full flex justify-center items-center  ">
                    <div className="w-full max-w-[390px] mt-[49px]">
                        {/* FirstName Input with Icon */}
                        <div className="relative mb-[20px]">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                <Image src={user} alt="user icon" width={20} height={20} />
                            </span>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full max-w-[391px] placeholder:text-[#202630] pl-12 pr-4 py-3 border-b border-[#000000] focus:outline-none focus:ring-0 focus:border-[#000000] border-t-0 border-l-0 border-r-0"
                            />
                        </div>

                        {/* LastName Input with Icon */}
                        <div className="relative mb-[20px]">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                <Image src={user} alt="user icon" width={20} height={20} />
                            </span>
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full max-w-[391px] pl-12 pr-4 placeholder:text-[#202630] py-3 border-b border-[#000000] focus:outline-none focus:ring-0 focus:border-[#000000] border-t-0 border-l-0 border-r-0"
                            />
                        </div>

                        {/* Email Input with Icon */}
                        <div className="relative mb-[20px]">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                <Image src={email} alt="email icon" width={20} height={20} />
                            </span>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full max-w-[391px] pl-12 pr-4 py-3 placeholder:text-[#202630] border-b border-[#000000] focus:outline-none focus:ring-0 focus:border-[#000000] border-t-0 border-l-0 border-r-0"
                            />
                        </div>

                        {/* Password Input with Icon */}
                        <div className="relative mb-[20px]">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                <Image
                                    src={password}
                                    alt="password icon"
                                    width={20}
                                    height={20}
                                />
                            </span>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full max-w-[391px] pl-12 placeholder:text-[#202630] pr-4 py-3 border-b border-[#000000] focus:outline-none focus:ring-0 focus:border-[#000000] border-t-0 border-l-0 border-r-0"
                            />
                        </div>
                        <Button className="w-[208px] mx-auto h-[42px] rounded-[56px] bg-[#000080] text-[13px] font-medium font-helvetica text-white mb-[27px] mt-[42px]">
                            Get Started
                        </Button>
                        <div className="flex gap-1 mb-[41px] justify-center items-center w-full max-w-[380px]">
                            <Text className="text-[14px] leading-[22px] font-normal">
                                By creating an account, you agree to the{" "}
                                <span className="text-[#0060FF]">
                                    <Link href="/">privacy policy</Link>
                                </span>{" "}
                                and to receive economic and marketing communications from
                                AvaTrade. You can remove yourself from the mailing list at
                                anytime.
                            </Text>
                        </div>
                        <div className="flex gap-2 mb-[19px] justify-center items-start">
                            <Image src={lock} alt="lock" />
                            <Text className="text-center text-[12px] text-[#202630]/70 font-bold">
                                Safe & Secure Sign Up
                            </Text>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Auth
