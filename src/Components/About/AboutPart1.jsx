import React from 'react'
import img9 from '../../assets/Img-3-1.jpg'
import img10 from '../../assets/Img-3-2.jpg'
import img11 from '../../assets/Img-3-3.jpg'

const AboutPart1 = () => {
  return (
    <div className="mdsmax:mb-20">
      <h1 className="w-screen h-fit text-6xl mdsmax:text-4xl my-5 text-center font-bold text-green-600">About Us</h1>
      <div className="flex w-screen h-fit items-center justify-center flex-wrap mdsmax:block">
        <div className="w-1/2 h-60 px-20 my-10 mdsmax:w-full mdmax:px-5">
          <img src={img9} className="w-full h-full bg-contain"/>
        </div>
        <div className="w-1/2 px-20 text-center mdsmax:w-full mdmax:px-5">
          <h1 className="text-4xl mb-5 font-bold font-serif text-red-500 mdsmax:text-3xl">Our Expertise</h1>
          <p>We have a team of highly skilled professionals with expertise in various areas. We provide a wide range of consultation.</p>
        </div>
      </div>
      <div className="flex items-center justify-center flex-wrap mdsmax:block">
        <div className="w-1/2 h-60 px-20 my-10 hidden mdsmax:block mdsmax:w-full mdmax:px-5">
          <img src={img10} className="w-full h-full bg-contain"/>
        </div>
        <div className="w-1/2 px-20 text-center mdsmax:w-full mdmax:px-5">
          <h1 className="text-4xl mb-5 font-bold font-serif text-red-500 mdsmax:text-3xl">Our Approach</h1>
          <p>We believe in taking a personalized approach to each client's needs. We work closely with our clients to understand their goals and develop customized solutions to help them.</p>
        </div>
        <div className="w-1/2 h-60 px-20 my-10 mdsmax:hidden">
          <img src={img10} className="w-full h-full bg-contain"/>
        </div>
      </div>
      <div className="flex items-center justify-center flex-wrap mdsmax:block">
        <div className="w-1/2 h-60 px-20 my-10 mdsmax:w-full mdmax:px-5">
          <img src={img11} className="w-full h-full bg-contain"/>
        </div>
        <div className="w-1/2 px-20 text-center mdsmax:w-full mdmax:px-5">
          <h1 className="text-4xl mb-5 font-bold font-serif text-red-500 mdsmax:text-3xl">Our Success Stories</h1>
          <p>Over the years, we have helped numerous clients achieve their goals and make them financially secure. Check out our success stories to see how we have made a difference for our clients.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPart1