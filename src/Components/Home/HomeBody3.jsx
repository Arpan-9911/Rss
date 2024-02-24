import React, { useEffect } from 'react'
import profile from '../../assets/userProfile.png'
import { useNavigate } from 'react-router-dom'

const HomeBody3 = () => {
  const navigate = useNavigate();
  const LoggedIn = () => {
    const name = document.querySelector("#username").value
    const pass = document.querySelector('#password').value
    if (name == 'Ravi' && pass == 'Ravi@999'){
      alert('Login Successful')
      navigate("/dashboard")
    }
    else{
      alert('Invalid Credentials')
    }
  }
  return (
    <div className="m-auto w-full h-52 mt-7">
      <form className="flex m-auto py-2 px-5 flex-col bg-gray-300 items-center w-fit justify-center rounded-2xl border-4 border-black">
        <img src={profile} alt="Login" className="w-16 h-16 mb-4" />
        <input type="text" name="username" id="username" required autoComplete='off' placeholder="Username" className="w-52 text-black placeholder:text-gray-600 outline-none shadow-md shadow-black rounded-lg px-2 py-1 mb-2" />
        <input type="password" name="password" id="password" required autoComplete='off' placeholder="Password" className="w-52 text-black placeholder:text-gray-600 outline-none shadow-md shadow-black rounded-lg px-2 py-1 mb-2" />
        <div data-aos className="w-52 text-black h-8 rounded-lg flex justify-evenly">
          <input type="submit" value="Login" id='login' onClick={LoggedIn} className="w-16 cursor-pointer bg-blue-500 text-white rounded-lg transition-all duration-300 shadow-md shadow-black active:scale-110 active:bg-blue-900"/>
          <input type="reset" value="Reset" className="w-16 cursor-pointer bg-red-500 text-white rounded-lg transition-all duration-300 shadow-md shadow-black active:scale-110 active:bg-red-900"/>
        </div>
      </form>
    </div>
  )
}

export default HomeBody3