import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Footer from './Pages/Footer'
import LoginPage from './Pages/LoginPage'
import ContactPage from './Pages/ContactPage'
import Mail from './Components/Contact/Mail'
import About from './Pages/About'
import QrPage from './Pages/QrPage'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/mail' element={<Mail/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/consultationfee' element={<QrPage/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
