import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Footer from './Pages/Footer'
import LoginPage from './Pages/LoginPage'
import ContactPage from './Pages/ContactPage'
import Mail from './Components/Contact/Mail'
import About from './Pages/About'
import QrPage from './Pages/QrPage'

const AppLayout = () => (
  <div>
    <Navbar />
    <div className='min-h-screen'>
      <Outlet />
    </div>
    <Footer />
  </div>
)

function App() {

  return (
    <Router basename='/rssassociates'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<AppLayout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/mail' element={<Mail/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/consultationfee' element={<QrPage/>} />
          <Route path='*' element={<Home/>} />
        </Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
