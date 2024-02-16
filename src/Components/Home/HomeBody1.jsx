import React, { useEffect } from 'react'
import { Box, Image, Heading} from '@chakra-ui/react';
import 'aos/dist/aos.css'
import Aos from 'aos'

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomeBody1 = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);
  return (
    <>
      <div data-aos = "fade-right" className="max-w-fit mt-5 ml-5 py-2 pr-5 mdmax:m-0 mdmax:p-0 mdmax:flex">
        <Box className="w-60 mdmax:w-36 mdmax:p-2">
          <MyCarousel />
        </Box>
        <div className="w-60 mt-10 mdmax:w-fit mdmax:m-0 mdmax:py-2">
          <h1 className="text-2xl mdmax:text-xl font-bold">Ravi Srivastava</h1>
          <h1 className="text-lg mdmax:text-base">Industrial Consultant</h1>
          <h1 className="text-lg mdmax:text-base mb-10 mdmax:m-0">Labour Law Advisor</h1>
          <h1 className="text-lg mdmax:text-base"><a href="tel:+91 9990295809">9990295809</a></h1>
          <h1 className="text-lg mdmax:text-base">rss1386@gmail.com</h1>
          <h1 className="text-lg mdmax:text-base">rssassociates01@gmail.com</h1>
        </div>
      </div>
    </>
  )
}
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showIndicators={false}
    showArrows={false}
  >
    <Box className="h-52 mdmax:h-36">
      <Image src={img1} className="w-full h-full"/>
    </Box>
    <Box className="h-52 mdmax:h-36">
      <Image src={img2} className="w-full h-full"/>
    </Box>
  </Carousel>
)

export default HomeBody1