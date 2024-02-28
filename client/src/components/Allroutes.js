import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Register from '../pages/Register'
import Login from '../pages/Login'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
