import Image from 'next/image'
import React from 'react'

import Text from '@/components/ui/Text'

import avatar from "@/public/images/myaccount/avatar.png"
import Button from '@/components/ui/Button'

const MyAccountPage = () => {
  return (
    <div className=' '>
      <div className="w-full px-[70px] mob:px-5 bg-[#F6F6F6] h-[44px] mb-[68px] flex items-center">
        <div className="w-full max-w-[1313px] mx-auto">
          <Text className="text-[10px] text-[#20263033]/20">
            Home {`>>`} Trading Courses {`>>`} Start Trading Course Now... Quick
            & Dirty
          </Text>
        </div>
      </div>

      <div className="max-w-[1313px] w-full mx-auto tab:px-5 mb-16">
        <div className="flex  gap-10">
          {/* user avatar */}
          <div className="">
            <Image className='w-full max-w-[230px]' src={avatar} alt="avatar" />
            <Text className='text-[18px] font-bold mt-7 leading-[100%] text-center'>
              YOUR NAME HERE
            </Text>
            <Text className='text-[14px] font-medium mt-3 leading-[100%] text-center'>
              Student
            </Text>

            <div className="w-full p-[35px] max-w-[240px] course-shadow mt-7 rounded-[10px]">
              <Text className='text-[20px] font-bold  leading-[100%] text-center'>
                Have a question?
              </Text>
              <Text className='text-[13px] font-light mt-3 leading-[100%] text-center'>
                Here you can send a direct
                request to the site owner.
              </Text>

              <Button className='max-w-[146px] h-[36px] bg-accent border-none rounded-[7px] mt-5 mx-auto'>Send Request?</Button>
            </div>

          </div>

          {/*my profile  */}
          <div className="max-w-[644px] w-full">
            <Text className='text-[36px] leading-[100%] font-bold mt-20'>My Profile</Text>
            <hr className='h-[2px] bg-black my-5 ' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccountPage
