import Button from '@/components/ui/Button';
import Text from '@/components/ui/Text'
import React from 'react'

const CategoryOptions = [
    "How To Trade Crypto",
    "DeFi & Web3",
    "Blockchain",
    "Blockchain",
    "Security & Risks",
    "Trends future",
];
const LevelsOptions = [
    "Beginner",
    "Intermediate",
    "Advanced",
];


const SideCategory = () => {
    return (
        <>
            <div className="w-full max-w-[251px] course-shadow pb-6">

                {/* Category */}
                <div className='w-full max-w-[251px] border-t-[4px] border-accent  px-4 py-8'>
                    <div className="flex items-center justify-between mb-6">
                        <Text className='text-[16px] font-bold'>Category</Text>
                        <div className="w-[19px] h-[1.43px]  bg-primary"></div>
                    </div>

                    {CategoryOptions.map((option, index) => (
                        <div key={index} className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                id={`checkbox${index + 1}`}
                                className="h-[14px] w-[15px] text-primary focus:ring-primary rounded-[1px]"
                            />
                            <label htmlFor={`checkbox${index + 1}`} className="ml-2 text-[12px] text-black font-helvetica font-normal">
                                {option}
                            </label>
                        </div>
                    ))}
                </div>

                {/* Levels */}
                <div className='w-full max-w-[251px] border-t-[1px] border-[#00000080]  px-4 pt-8 '>
                    <div className="flex items-center justify-between mb-6">
                        <Text className='text-[16px] font-bold'>Category</Text>
                        <div className="w-[19px] h-[1.43px]  bg-primary"></div>
                    </div>

                    {LevelsOptions.map((option, index) => (
                        <div key={index} className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                id={`checkbox${index + 1}`}
                                className="h-[14px] w-[15px] text-primary focus:ring-primary rounded-[1px]"
                            />
                            <label htmlFor={`checkbox${index + 1}`} className="ml-2 text-[12px] text-black font-helvetica font-normal">
                                {option}
                            </label>
                        </div>
                    ))}
                </div>

                <Button className='max-w-[156px] h-[38px] rounded-[4px] bg-accent mt-10 text-[12px] font-medium mx-auto'>Show Results</Button>

                <Button className='text-black mx-auto text-[12px] font-normal mt-2'>Reset all</Button>
            </div>
        </>
    )
}

export default SideCategory
