import React from 'react'
import profile from '../../assets/userProfile.png'

const Login = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
        <form className="flex bg-gray-400 shadow-xl shadow-gray-600 -mt-20 p-10 flex-col items-center w-fit justify-center rounded-2xl" onLoad={"reset"}>
          <img src={profile} alt="Login" className="w-16 h-16 mb-4 text-white" />
          <input type="text" name="username" id="username" placeholder="Username" className="w-52 text-black outline-none rounded-lg px-2 py-1 mb-2" />
          <input type="password" name="password" id="password" placeholder="Password" className="w-52 text-black outline-none h-8 rounded-lg px-2 py-1 mb-5" />
          <div data-aos className="w-52 text-black h-8 rounded-lg flex justify-evenly">
            <input type="submit" value="Login" className="w-16 bg-blue-500 text-white rounded-lg transition-all duration-300 active:scale-110 active:bg-blue-900"/>
            <input type="reset" value="Reset" className="w-16 bg-red-500 text-white rounded-lg transition-all duration-300 active:scale-110 active:bg-red-900"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login