import React from 'react'
import HomeBody1 from '../../Components/Home/HomeBody1'
import HomeBody2 from '../../Components/Home/HomeBody2'
import QuickLinks from '../../Components/Home/QuickLinks'
import PaymentLinks from '../../Components/Home/PaymentLinks'

const MediumScreen = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/4 lgmax:w-1/3"><HomeBody1/></div>
        <div className="w-3/4 mt-10 pl-5 pr-2 lgmax:w-2/3 lgmax:mt-7 lgmax:pr-0"><HomeBody2/></div>
      </div>
      <div className="flex">
        <div className="w-1/2 text-center"><QuickLinks/></div>
        <div className="w-1/2 text-center"><PaymentLinks/></div>
      </div>
    </div>
  )
}

export default MediumScreen