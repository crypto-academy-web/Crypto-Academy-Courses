import React from 'react'

import Button from '@/components/ui/Button'
import Text from '@/components/ui/Text'

const TakeMe = () => {
    return (
        <div className='bg-primary py-8 mb-20'>
            <Text className='text-[19px] text-white text-center px-5 font-bold mb-5'>
                Unleash the incredible potential of your trading knowledge with a free complimentary trading account on AvaTrade’s cutting-edge platform.
            </Text>
            <div className="flex justify-center">
                <Button className='max-w-[235px] rounded-[110px]'>Take me there</Button>
            </div>
        </div>
    )
}

export default TakeMe
