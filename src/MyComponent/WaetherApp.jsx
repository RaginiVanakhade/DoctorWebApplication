import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DoctorHome from './DoctorWebPage/DoctorHome'
import Appointment from './DoctorWebPage/Appointment'
import Home from './DoctorWebPage/Home'
import About from './DoctorWebPage/About'
const WaetherApp = () => {
  return (
    <> 
    <Routes>
      <Route path='/' element={<DoctorHome/>}/> 
      <Route path='/appointment' element={<Appointment/>}/> 
      <Route path='/' element={<Home/>}/> 
      <Route path='/about' element={<About/>}/> 
    </Routes>
    </>
  )
}

export default WaetherApp