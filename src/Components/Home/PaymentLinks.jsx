import React from 'react'

const PaymentLinks = () => {
  return (
    <div className="mt-2 px-5 w-full mdmax:p-3">
      <div className="w-full text-center text-2xl text-red-600 mb-2 font-bold">Payment Links</div>
      <div className="text-white font-semibold flex justify-evenly flex-wrap mdmax:text-center">
        <div><button className="rounded-lg xlmax:min-w-40 bg-blue-600 my-0.5 transition-all duration-300 p-2 active:bg-blue-900 active:scale-110"><a href="/">ESIC</a></button></div>
        <div><button className="rounded-lg xlmax:min-w-40 bg-blue-600 my-0.5 transition-all duration-300 p-2 active:bg-blue-900 active:scale-110"><a href="/">EPFO</a></button></div>
        <div><button className="rounded-lg xlmax:min-w-40 bg-blue-600 my-0.5 transition-all duration-300 p-2 active:bg-blue-900 active:scale-110"><a href="/">Nivesh Mitra</a></button></div>
        <div><button className="rounded-lg xlmax:min-w-40 bg-blue-600 my-0.5 transition-all duration-300 p-2 active:bg-blue-900 active:scale-110"><a href="/">Consultation Fee</a></button></div>
        <div><button className="rounded-lg xlmax:min-w-40 bg-blue-600 my-0.5 transition-all duration-300 p-2 active:bg-blue-900 active:scale-110"><a href="/">DSC Payment</a></button></div>
        <div><button className="rounded-lg xlmax:min-w-40 bg-blue-600 my-0.5 transition-all duration-300 p-2 active:bg-blue-900 active:scale-110"><a href="/">Others</a></button></div>
      </div>
    </div>
  )
}

export default PaymentLinks