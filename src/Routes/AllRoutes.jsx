import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Store from '../Pages/Store'
import Mac from '../Pages/Mac'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/store' element={<Store />}/>
        <Route path = '/mac' element = {<Mac/>}/>
        
    </Routes>
  )
}

export default AllRoutes