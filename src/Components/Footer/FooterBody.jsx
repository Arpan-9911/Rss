import React from 'react'

const FooterBody = () => {
  return (
    <>
      <div className="w-full h-fit px-4 py-6 bg-blue-300 text-center mt-7 mdmax:m-0">
        <div className="w-1/2 m-auto border-b-4 pb-4 mdmax:w-60">
          <h1 className="text-4xl leading-loose font-bold mdmax:text-2xl">Follow Us</h1>
          <div className='flex justify-between w-80 m-auto mdmax:w-52'>
            <h2 className="text-2xl font-semibold mdmax:text-xl"><a href="/">Facebook</a></h2>
            <h2 className="text-2xl font-semibold mdmax:text-xl"><a href="/">Instagram</a></h2>
          </div>
        </div>
        <div className="mt-5 text-xl mdmax:text-base">
          <h1>All rights reserved © Arpan-2024</h1>
        </div>
      </div>
    </>
  )
}

export default FooterBody