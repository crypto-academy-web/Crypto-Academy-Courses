import React from 'react'
import Image from 'next/image'

import Text from '@/components/ui/Text'

import searchbar from "@/public/icons/searchbar.svg"
const Products = () => {
    return (
        <div className='w-full px-5'>
            <div className="max-w-[1313px] mx-auto w-full">
                <div className="flex justify-between">
                    <Text as='h1' className='text-black text-[36px] '>
                        Trading Courses
                    </Text>

                    <div className="flex items-center space-x-[2px]   max-w-[199px] w-full">
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
                    Unlock your trading potential with AvaAcademy! Register for free and gain exclusive access to advanced courses on trading platforms, asset classes, online strategies, and more. Dive
                    deep into the world of trading with expert insights on fundamental and technical analysis, risk management, and the dynamics of financial markets. Start your comprehensive trading
                    education journey today!
                </Text>

                <div className="flex">
                    
                </div>

            </div>
        </div>
    )
}

export default Products
