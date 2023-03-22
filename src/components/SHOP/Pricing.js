import React from 'react'
import Navigation from './Navigation'
import Subscription from './Components_SHOP/Subscription'
import Subscription2 from './Components_SHOP/Subscription2'
import Subscription3 from './Components_SHOP/Subscription3'
const Pricing = () => {



    return (

        <div>
            <Navigation />
            <h1 className=' justify-center flex mt-10 text-4xl font-bold text-gray-500 dark:text-gray-400'>Choose a PLAN that suits you the most and enjoy in benefits</h1>
            <div className='justify-center  flex flex-wrap gap-x-28 mt-12 '>
                <Subscription />
                <Subscription2 />
                <Subscription3 />
            </div>

        </div>

    )
}

export default Pricing