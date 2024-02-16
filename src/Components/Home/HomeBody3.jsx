import React, { useEffect } from 'react'
import profile from '../../assets/userProfile.png'
import 'aos/dist/aos.css'
import Aos from 'aos'

const HomeBody3 = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []); 
  return (
    <div className="w-80 m-auto h-52 mt-4 rounded-2xl border-4" data-aos="fade-left" >
      <form className="flex flex-col items-center justify-center" onLoad={"reset"}>
        <img src={profile} alt="Login" className="w-16 h-16 mb-4" />
        <input type="text" name="username" id="username" placeholder="Username" className="w-60 text-black outline-none rounded-lg px-2 py-1 mb-2" />
        <input type="password" name="password" id="password" placeholder="Password" className="w-60 text-black outline-none h-8 rounded-lg px-2 py-1 mb-2" />
        <div data-aos className="w-60 text-black h-8 rounded-lg flex justify-evenly">
          <input type="submit" value="Login" className="w-20 tracking-wider bg-blue-500 text-white rounded-lg transition-all duration-300 active:scale-110 active:bg-blue-900"/>
          <input type="reset" value="Reset" className="w-20 tracking-wider bg-red-500 text-white rounded-lg transition-all duration-300 active:scale-110 active:bg-red-900"/>
        </div>
      </form>
    </div>
  )
}

export default HomeBody3