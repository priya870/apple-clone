import { Box } from '@chakra-ui/react'
import React from 'react'
import Mac_nav from '../Components/Mac/Mac_nav'
import Intro from '../Components/Mac/Intro'
import Mac_mini from '../Components/Mac/Mac_mini'
import Mac_book from '../Components/Mac/Mac_book'
import Laptop from '../Components/Mac/Laptop'
import Behindmac from '../Components/Mac/Behindmac'
import Macicons from '../Components/Mac/Macicons'
import Mac_Mac from '../Components/Mac/Mac_Mac'
import Built_App from '../Components/Mac/Built_App'
import One from '../Components/Mac/One'
import Apple from '../Components/Mac/Apple'
import Apple_work from '../Components/Mac/Apple_work'



const Mac = () => {
  return (
    <Box>
    <Mac_nav/>
    <Intro/>
    <Mac_book/>
    <Mac_mini/>
    <Laptop/>  
    <Behindmac/>
    <Macicons/>
    <Mac_Mac/>
    <Built_App/>
    <One/>
    <Apple_work/>
    <Apple/>
    
    </Box>

  )
}

export default Mac