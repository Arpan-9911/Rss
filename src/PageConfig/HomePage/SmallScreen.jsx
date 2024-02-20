import React from 'react'
import HomeBody1 from '../../Components/Home/HomeBody1'
import HomeBody2 from '../../Components/Home/HomeBody2'
import PaymentLinks from '../../Components/Home/PaymentLinks'
import QuickLinks from '../../Components/Home/QuickLinks'

const SmallScreen = () => {
  return (
    <div>
      <div><HomeBody1/></div>
      <div><HomeBody2/></div>
      <div><PaymentLinks/></div>
      <div className="p-3"><QuickLinks/></div>
    </div>
  )
}

export default SmallScreen