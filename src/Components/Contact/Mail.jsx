import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Mail = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_vnx5e2n'
    const templateID = 'template_7vr9ypp'
    const publicKey = '6kq8W8hQw-Y7SmBfX'

    const templateParams = {
      name: name,
      email: email,
      message: message,
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then((response) => {
      alert("Mail Sent Successfully")
      setName('')
      setEmail('')
      setMessage('')
    })
    .catch((error) => {
      alert('Error Happened')
    })
  }

  const navigate = useNavigate();
  const EmailSent = () => {
    navigate("/home")
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center -mt-20">
      <form onSubmit={handleSubmit} className="flex flex-col rounded-2xl p-10 bg-gray-400 shadow-xl shadow-gray-700 mdmax:p-5">
        <h1 className="m-auto text-xl text-red-600 font-bold">Mail Us</h1>
        <input type="text" name="user_name" placeholder="Name" autoComplete='off' className="my-2 w-80 mdmax:w-48 h-10 rounded-lg p-2 placeholder:text-gray-600" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" name="user_email" placeholder='Email' autoComplete='off' className="my-2 w-80 mdmax:w-48 h-10 rounded-lg p-2 placeholder:text-gray-600" value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea name="message" placeholder='Message' autoComplete='off' className="my-2 w-80 mdmax:w-48 h-10 rounded-lg p-2 resize-none placeholder:text-gray-600" value={message} onChange={(e) => setMessage(e.target.value)}/>
        <input type="submit" value="Send" onClick={EmailSent} className="w-32 h-10 my-2 rounded-lg font-bold m-auto bg-blue-500 active:bg-blue-900 active:scale-110" />
      </form>
    </div>
  )
}

export default Mail