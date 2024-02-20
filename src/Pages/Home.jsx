import React, { useEffect, useState } from 'react'
import LargestScreen from '../PageConfig/HomePage/LargestScreen';
import MediumScreen from '../PageConfig/HomePage/MediumScreen';
import SmallScreen from '../PageConfig/HomePage/SmallScreen';

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
     const largescreen = 1200;
     const smallscreen = 620;
      useEffect(() => {
       const handleWindowResize = () => setWidth(window.innerWidth)
       window.addEventListener("resize", handleWindowResize);
       return () => window.removeEventListener("resize", handleWindowResize);
     }, []);
  return (
    <>
      {
        width > largescreen ? <LargestScreen/> : ''
      }
      {
        width > smallscreen && width <= largescreen ? <MediumScreen/> : ''
      }
      {
        width <= smallscreen ? <SmallScreen/> : ''
      }
    </>
  )
}

export default Home