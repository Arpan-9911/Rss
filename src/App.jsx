import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Footer from './Pages/Footer'
import LoginPage from './Pages/LoginPage'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
