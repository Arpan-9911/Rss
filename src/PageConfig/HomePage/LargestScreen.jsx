import React from 'react'
import HomeBody1 from '../../Components/Home/HomeBody1'
import HomeBody2 from '../../Components/Home/HomeBody2'
import HomeBody3 from '../../Components/Home/HomeBody3'
import QuickLinks from '../../Components/Home/QuickLinks'
import PaymentLinks from '../../Components/Home/PaymentLinks'

const LargestScreen = () => {
  return (
    <div className="flex">
      <div className="w-1/5 py-2 pr-5"><HomeBody1/></div>
      <div className='m-auto w-1/2 border-x-4 mt-5 py-2'>
        <HomeBody2/><PaymentLinks/>
      </div>
      <div  className='m-auto w-1/3'>
        <HomeBody3 /><QuickLinks/>
      </div>
    </div>
  )
}

export default LargestScreen