'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiSettings } from 'react-icons/fi';
import { GrBook } from "react-icons/gr";
import { MdOutlineQuestionMark } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import { LiaMedalSolid } from "react-icons/lia";
import clsx from 'clsx';

import Text from '../ui/Text';

import togglebtn from "@/public/icons/toggle.svg"
import avatar from "@/public/images/myaccount/avatar.png";

export default function SidebarUser() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div
            className={clsx(
                "fixed top-0 right-0 h-screen bg-white shadow-lg border-l border-gray-200 transition-all duration-300 z-50",
                isOpen ? "w-[257px]" : "w-[60px]"
            )}
        >
            {/* Toggle Button */}
            <div className="flex justify-end p-4 mt-4">
                <button
                    onClick={toggleSidebar}
                    className={clsx(
                        "transition-transform duration-300", // smooth rotate
                        !isOpen && "rotate-180"
                    )}

                >
                    <Image src={togglebtn} alt="togglebtn" width={25} height={25} />
                </button>
            </div>

            {/* Sidebar Content */}
            <div className="flex flex-col items-center space-y-6 mt-10">
                <UserItem isOpen={isOpen} />
                <SidebarItem icon={<GrBook />} label="Enrolled Courses" isOpen={isOpen} />
                <SidebarItem icon={<MdOutlineQuestionMark />} label="Enrolled Quizzes" isOpen={isOpen} />
                <SidebarItem icon={<IoStarSharp />} label="Wishlist" isOpen={isOpen} />
                <SidebarItem icon={<LiaMedalSolid />} label="My Certificates" isOpen={isOpen} />
            </div>
        </div>
    );
}

// ✅ Sidebar Navigation Item
function SidebarItem({
    icon,
    label,
    isOpen,
}: {
    icon: React.ReactNode;
    label: string;
    isOpen: boolean;
}) {
    return (
        <div className="flex items-center justify-between  w-full px-4 py-2 hover:bg-gray-100 rounded-md transition cursor-pointer  sm:justify-start">
            <div className="w-full">
                {isOpen && <span className="text-[14px] text-black font-helvetica font-medium">{label}</span>}
            </div>
            <div className="text-[25px]">{icon}</div>
        </div>
    );
}

// ✅ User Profile Section at the Top
function UserItem({ isOpen }: { isOpen: boolean }) {
    return (
        <div
            className={clsx(
                "flex items-center w-full py-4 hover:bg-gray-100  transition cursor-pointer border-b border-t border-black/30",
                isOpen ? "justify-between px-4" : "justify-end px-4"
            )}
        >
            <div className="flex items-center gap-2">
                <Image
                    src={avatar}
                    alt="avatar"
                    width={58}
                    height={58}
                    className="rounded-full"
                />
                {isOpen && (
                    <div className="ml-3">
                        <Text className="text-[14px] font-bold">xyz</Text>
                        <Text className="text-[14px] text-black/80 font-normal">Student</Text>
                    </div>
                )}
            </div>
            {isOpen && (
                <span className="text-sm text-black"><FiSettings className='text-[20px]' /></span>
            )}


        </div>
    );
}
