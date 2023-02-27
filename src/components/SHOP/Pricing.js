import React from 'react'
import Navigation from './Navigation'
import Subscription from './Components_SHOP/Subscription'
const Pricing = () => {
    return (
        <div>
            <Navigation />
            <div className='justify-center  flex flex-wrap gap-x-28  '>
                <Subscription />
                <Subscription />
                <Subscription />
            </div>

        </div>

    )
}

export default Pricing