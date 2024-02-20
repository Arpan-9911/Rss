import React from 'react'

const FooterBody = () => {
  return (
    <>
      <div className="w-full sticky bottom-0 h-fit px-4 py-1 bg-blue-300 text-center mt-7 mdmax:m-0">
        <div className="w-1/2 m-auto border-b-4 pb-1 mdmax:w-60">
          <h1 className="text-xl font-bold mdmax:text-lg">Follow Us</h1>
          <div className='flex justify-between w-80 m-auto mdmax:w-52'>
            <h2 className="text-base font-semibold"><a href="/">Facebook</a></h2>
            <h2 className="text-base font-semibold"><a href="/">Instagram</a></h2>
          </div>
        </div>
        <div className="mt-1 text-xl mdmax:text-base">
          <h1>All rights reserved © Arpan-2024</h1>
        </div>
      </div>
    </>
  )
}

export default FooterBody