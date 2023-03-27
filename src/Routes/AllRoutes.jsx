import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Store from './Store'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/store' element={<Store />}/>
        
    </Routes>
  )
}

export default AllRoutes