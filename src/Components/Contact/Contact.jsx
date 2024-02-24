import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <div className="h-screen">
        <h1 className="w-screen h-20 mdmax:h-fit text-center text-5xl mt-10 text-red-500 font-bold font-serif mb-10 mdmax:mb-0 mddmax:text-3xl">CONTACT US</h1>
        <div className="w-screen flex flex-wrap items-center justify-center">
          <div className="w-1/2 p-5 pl-10 text-xl text-center font-semibold mdsmax:w-fit xlmax:px-2 mdsmax:text-sm border-r-4 border-black mdmax:border-r-0 mdmax:border-b-4">
            <h1 className="my-1 text-2xl font-bold mdsmax:text-lg">Ravi Srivastava</h1>
            <div className='my-1'><h1>F-190A, Nandgram, Ghaziabad,</h1><h1>UttarPradesh - 201003</h1></div>
            <h1 className="my-1">9990295809</h1>
            <h1 className="my-1">rssassociates01@gmail.com</h1>
            <h1 className="my-1">Mon-Sat : 9:00 a.m. - 6:00 pm</h1>
            <div className="flex items-center justify-evenly flex-wrap">
              <h1 className="m-1 px-4 py-2 bg-red-400 text-center w-fit rounded-lg shadow-md shadow-black active:bg-red-700 active:scale-110"><a href="tel:+91 9990295809">Call Us</a></h1>
              <h1 className=" m-1 px-4 py-2 bg-green-400 text-center w-fit rounded-lg shadow-md shadow-black active:bg-green-700 active:scale-110"><a href="https://wa.me/919990295809" target="_blank">Whatsapp Us</a></h1>
              <Link to={"/mail"}  className=" m-1 px-4 py-2 bg-violet-400 text-center w-fit rounded-lg shadow-md shadow-black active:bg-violet-700 active:scale-110">Mail Us</Link>
            </div>
            
          </div>
          <div className="w-1/3 min-w-72 mdmax:w-full p-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0977175252383!2d77.40423947495881!3d28.68672338161869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf05f53c2011b%3A0x1299dd14c28592!2sRSS%20ASSOCIATES!5e0!3m2!1sen!2sin!4v1705604196869!5m2!1sen!2sin" className="w-full h-60 border-2 border-black" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact