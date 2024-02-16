import React, { useEffect, useState } from 'react'
import HomeBody1 from '../Components/Home/HomeBody1'
import HomeBody2 from '../Components/Home/HomeBody2'
import HomeBody3 from '../Components/Home/HomeBody3'
import QuickLinks from '../Components/Home/QuickLinks'

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
     const breakpoint = 620;
      useEffect(() => {
       const handleWindowResize = () => setWidth(window.innerWidth)
       window.addEventListener("resize", handleWindowResize);
       return () => window.removeEventListener("resize", handleWindowResize);
     }, []);
  return (
    <>
      <div className="flex mdmax:block">
        <HomeBody1/>
        <HomeBody2/>
        {width < breakpoint ? '' : <div className='m-auto'><HomeBody3 /><QuickLinks/></div>}
        {width < breakpoint ? <div className="pl-2"><QuickLinks/></div> : ''}
      </div>
    </>
  )
}

export default Home