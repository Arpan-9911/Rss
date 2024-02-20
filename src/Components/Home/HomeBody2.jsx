import { Box, Heading, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'aos/dist/aos.css'
import Aos from 'aos'
import img3 from '../../assets/EPFO-Img1.jpg'
import img4 from '../../assets/EPFO-Img2.jpeg'
import img5 from '../../assets/ESI-Img1.png'
import img6 from '../../assets/ESI-Img2.png'
import img7 from '../../assets/FA-Img1.jpg'
import img8 from '../../assets/FA-Img2.jpg'

const HomeBody2 = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);
  return (
    <div data-aos = "fade-up" className="px-4 w-full mdmax:w-full">
      <MyCarousel/>
    </div>
  )
}

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showIndicators={false}
    showArrows={false}
  >
    <Box className="h-fit mdmax:h-52">
      <Image src={img3} className="w-full h-80 xlmax:h-96 mdmax:max-h-36"/>
      <Heading className="text-2xl w-full h-full bg-gray-600 text-white p-4 text-center font-bold mdmax:text-base smmax:py-2 smmax:px-10">Employee Provident Fund Organisation</Heading>
    </Box>
    <Box className="h-fit mdmax:h-52">
      <Image src={img4} className="w-full h-80 xlmax:h-96 mdmax:max-h-36"/>
      <Heading className="text-2xl w-full h-full bg-gray-600 text-white p-4 text-center font-bold mdmax:text-base smmax:py-2 smmax:px-10">Employee Provident Fund Organisation</Heading>
    </Box>
    <Box className="h-fit mdmax:h-52">
      <Image src={img5} className="w-full h-80 xlmax:h-96 mdmax:max-h-36"/>
      <Heading className="text-2xl w-full h-full bg-gray-600 text-white p-4 text-center font-bold mdmax:text-base smmax:py-2 smmax:px-10">Employee State Insurance Corporation</Heading>
    </Box>
    <Box className="h-fit mdmax:h-52">
      <Image src={img6} className="w-full h-80 xlmax:h-96 mdmax:max-h-36"/>
      <Heading className="text-2xl w-full h-full bg-gray-600 text-white p-4 text-center font-bold mdmax:text-base smmax:py-2 smmax:px-10">Employee State Insurance Corporation</Heading>
    </Box>
    <Box className="h-fit mdmax:h-52">
      <Image src={img7} className="w-full h-80 xlmax:h-96 mdmax:max-h-36"/>
      <Heading className="text-2xl w-full h-full bg-gray-600 text-white p-4 text-center font-bold mdmax:text-base">Factory Act</Heading>
    </Box>
    <Box className="h-fit mdmax:h-52">
      <Image src={img8} className="w-full h-80 xlmax:h-96 mdmax:max-h-36"/>
      <Heading className="text-2xl w-full h-full bg-gray-600 text-white p-4 text-center font-bold mdmax:text-base"><div>Factory Act</div></Heading>
    </Box>
  </Carousel>
)

export default HomeBody2