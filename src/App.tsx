import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

import Footer from './Components/Layouts/Footer'
import Header from './Components/Layouts/Header'
import About from './Pages/About'
import Home from './Pages/Home'
import Subjects from './Pages/Subjects'
import Tutor from './Pages/Tutor'
import Terms from './Pages/Terms and Conditions'
function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tutor' element={<Tutor />} />
        <Route path='/about' element={<About />} />
        <Route path='/subject' element={<Subjects />} />
        <Route path='/terms' element={<Terms />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App
