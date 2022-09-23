import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Followers from '../Pages/Followers'
import Followersdetails from './Followersdetails'
import Hompage from '../Pages/Homepage'
import SingelRepo from '../Pages/SingelRepo'


const Allrout = () => {
  return (
    <Routes>
        <Route path="/" element={<Hompage/>} /> 
        <Route path="/repo/:id" element={<SingelRepo/>} /> 
        <Route path="/followers" element={<Followers/>}/> 
        <Route path="/:id/:follwers" element={<Followersdetails/>} /> 
    </Routes>
  )
}

export default Allrout