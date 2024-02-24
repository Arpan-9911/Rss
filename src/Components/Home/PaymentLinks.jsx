import React from 'react'
import { Link } from 'react-router-dom'

const PaymentLinks = () => {
  return (
    <div className="mt-2 px-5 w-full mdmax:p-3">
      <div className="w-full text-center text-2xl text-red-600 mb-2 font-bold">Payment Links</div>
      <div className="text-white font-semibold flex justify-evenly flex-wrap mdmax:text-center">
        <div><button className="rounded-lg xlmax:min-w-40 bg-blue-600 my-0.5 transition-all duration-300 p-2 active:bg-blue-900 active:scale-110"><a href="https://www.esic.in/ESICInsurance1/RevenueOne/Monthly%20Contribution/eChallan.aspx" target='blank'>ESIC</a></button></div>
        <div><button className="rounded-lg xlmax:min-w-40 bg-blue-600 my-0.5 transition-all duration-300 p-2 active:bg-blue-900 active:scale-110"><a href="https://unifiedportal-emp.epfindia.gov.in/epfo/" target='blank'>EPFO</a></button></div>
        <div><button className="rounded-lg xlmax:min-w-40 bg-blue-600 my-0.5 transition-all duration-300 p-2 active:bg-blue-900 active:scale-110"><a href="https://niveshmitra.up.nic.in/" target='blank'>Nivesh Mitra</a></button></div>
        <div><button className="rounded-lg xlmax:min-w-40 bg-blue-600 my-0.5 transition-all duration-300 p-2 active:bg-blue-900 active:scale-110"><Link to={"/consultationfee"}>Consultation Fee</Link></button></div>
        <div><button className="rounded-lg xlmax:min-w-40 bg-blue-600 my-0.5 transition-all duration-300 p-2 active:bg-blue-900 active:scale-110"><Link to={"/consultationfee"}>DSC Payment</Link></button></div>
        <div><button className="rounded-lg xlmax:min-w-40 bg-blue-600 my-0.5 transition-all duration-300 p-2 active:bg-blue-900 active:scale-110"><a href="https://payment.gst.gov.in/payment/" target='blank'>GST Pay</a></button></div>
      </div>
    </div>
  )
}

export default PaymentLinks