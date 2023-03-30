import { Box } from '@chakra-ui/react'
import React from 'react'
import Mac_nav from '../Components/Mac/Mac_nav'
import Intro from '../Components/Mac/Intro'
import Mac_mini from '../Components/Mac/Mac_mini'
import Mac_book from '../Components/Mac/Mac_book'
import Laptop from '../Components/Mac/Laptop'
import Behindmac from '../Components/Mac/Behindmac'
import Macicons from '../Components/Mac/Macicons'


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
    </Box>

  )
}

export default Mac