import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Academics from './pages/Academics'
import Facilities from './pages/Facilities'
import Events from './pages/Events'
import Contact from './pages/Contact'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/academics' element={<Academics/>}/>
      <Route path='/facilities' element={<Facilities/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/contact' element={<Contact/>}/>





    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
