import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Store from '../Pages/Store'
import Mac from '../Pages/Mac'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Ipad from "../Pages/Ipad"



const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/store' element={<Store />}/>
        <Route path = '/mac' element = {<Mac/>}/>
        <Route path = '/ipad' element = {<Ipad/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/register' element = {<Register/>}/>

        
    </Routes>
  )
}

export default AllRoutes