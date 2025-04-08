import React from 'react'

import Text from '@/components/ui/Text'
import HeroGuide from '@/components/TradingGuides/HeroGuide'
import CoursesGuide from '@/components/TradingGuides/CoursesGuide'

const TradingGuides = () => {
    return (
        <>
            <div className="w-full px-[70px] mob:px-5 bg-[#F6F6F6] h-[44px] mb-[68px] flex items-center">
                <Text className="text-[10px] text-[#20263033]/20">
                    Home {`>>`} Trading Guides
                </Text>
            </div>
            <HeroGuide />
            <CoursesGuide/>
        </>
    )
}

export default TradingGuides
