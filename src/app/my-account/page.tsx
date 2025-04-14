"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore"

// import ProtectedRoute from '@/components/Layouts/ProtectedRoutes'
import clock from "@/public/icons/clock.svg"

import Text from '@/components/ui/Text'
import avatar from "@/public/images/myaccount/avatar.png"
import Button from '@/components/ui/Button'

import { useUser, useUserId } from '../store/user'
import { db } from "@/firebase"
import { useRouter } from 'next/navigation'
import { useCourseStore } from '../store/useCourseStore'
import { Course } from '@/lib/constants/courses'

const MyAccountPage = () => {
  const user = useUser()
  const userId = useUserId()
  const setSelectedCourse = useCourseStore((state) => state.setSelectedCourse)
  const router = useRouter()

  const [purchasedCourses, setPurchasedCourses] = useState<Course[]>([])

  useEffect(() => {
    const fetchPurchasedCourses = async () => {
      if (!userId) return;

      try {
        const userRef = doc(db, "users", userId)
        const userSnap = await getDoc(userRef)

        if (userSnap.exists()) {
          const data = userSnap.data()
          setPurchasedCourses(data.purchasedCourses || [])
        }
      } catch (error) {
        console.error("Failed to fetch purchased courses:", error)
      }
    }

    fetchPurchasedCourses()
  }, [userId])

  return (
    <div>
      <div className="w-full px-[70px] mob:px-5 bg-[#F6F6F6] h-[44px] mb-[68px] flex items-center">
        <div className="w-full max-w-[1313px] mx-auto">
          <Text className="text-[10px] text-[#20263033]/20">
            Home {`>>`} Trading Courses {`>>`} My Account
          </Text>
        </div>
      </div>

      <div className="max-w-[1313px] w-full mx-auto tab:px-5 mb-16">
        <div className="flex gap-10">
          {/* Left Sidebar */}
          <div>
            <Image className='w-full max-w-[230px]' src={avatar} alt="avatar" />
            <Text className='text-[18px] font-bold mt-7 leading-[100%] text-center'>
              {user?.firstName} {user?.lastName}
            </Text>
            <Text className='text-[14px] font-medium mt-3 leading-[100%] text-center'>
              Student
            </Text>

            <div className="w-full p-[35px] max-w-[240px] course-shadow mt-7 rounded-[10px]">
              <Text className='text-[20px] font-bold leading-[100%] text-center'>
                Have a question?
              </Text>
              <Text className='text-[13px] font-light mt-3 leading-[100%] text-center'>
                Here you can send a direct request to the site owner.
              </Text>
              <Button className='max-w-[146px] h-[36px] bg-accent border-none rounded-[7px] mt-5 mx-auto'>
                Send Request?
              </Button>
            </div>
          </div>

          {/* Main Profile Content */}
          <div className="max-w-[644px] w-full">
            <Text className='text-[36px] leading-[100%] font-bold mt-20'>My Profile</Text>
            <hr className='h-[2px] bg-black my-5' />

            <div className="flex flex-wrap gap-[37px] mt-12 mob:justify-center">
              {purchasedCourses.length === 0 ? (
                <Text className='text-[18px] text-gray-600'>No purchased courses yet.</Text>
              ) : (
                purchasedCourses.map((course, index) => (
                  <div key={index}
                    onClick={() => {
                      setSelectedCourse(course)
                      router.push('/start-trading-course')
                    }}
                    className="w-[300px] rounded-[20px] course-shadow bg-white relative cursor-pointer">
                    {/* {course.isHot && ( */}
                      <button className='bg-[#FF0000] w-[39px] h-[21px] rounded-[3px] absolute top-[15px] right-[15px] uppercase text-[9px] text-white'>HOT</button>
                    {/* )} */}
                    <Image
                      className="w-full h-[154px] object-cover rounded-t-[20px]"
                      src={course.imageSrc || "/images/home/course1.png"}
                      alt={course.title}
                      width={300}
                      height={154}
                    />
                    <div className="px-[23px] py-[16px]">
                      <Text className="text-[#0000004D] text-[13px] font-light">{course.title}</Text>
                      <Text className="text-[15px] font-bold leading-[20px] mb-5">{course.description}</Text>
                      <hr className="h-[0.8px] w-full bg-black" />
                      <div className="flex justify-between items-center mt-1">
                        <div className="flex items-center gap-2">
                          <Image src={clock} alt="clock" width={10} height={10} />
                          <Text className="text-[9px] text-black">{course.duration || "Self-paced"}</Text>
                        </div>
                        <Text className="text-[12px] font-bold">Purchased</Text>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccountPage
