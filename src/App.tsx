import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import './App.css'

import Footer from './Components/Layouts/Footer'
import Header from './Components/Layouts/Header'
import About from './Pages/About'
import Home from './Pages/Home'
import Subjects from './Pages/Subjects'
import Tutor from './Pages/Tutor'
import Terms from './Pages/Terms and Conditions'
import Privacy from './Pages/Privacy policy'
import Refund from './Pages/Refund Policy'
import Contact from './Pages/Contact'
function App() {

  const location=useLocation()

  useEffect(() => {
    return () => {
      window.scrollTo({
        behavior:"smooth",
        top:0,
        left:0,
      })
    }
  }, [location])
  

  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tutor' element={<Tutor />} />
        <Route path='/about' element={<About />} />
        <Route path='/subject' element={<Subjects />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/refund' element={<Refund />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
