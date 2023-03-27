import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BsApple } from 'react-icons/bs'
import { BsSearch , BsBag} from 'react-icons/bs'
const Navbar = () => {
  return (
    // <div>Navbar</div>
    <Box h="40px" py={"5px"} bg="#434344" color={"white"} position = {"sticky"}>
      <Flex justifyContent={"center"} alignItems="center" gap="2%">

        <BsApple/>
        
        <Text>Store</Text>
        <Text>Mac</Text>
        <Text>iPad</Text>
        <Text>iPhone</Text>
        <Text>Watch</Text>
        <Text>AirPods</Text>
        <Text>Tv & Home</Text>
        <Text>Entertainment</Text>
        <Text>Accessories</Text>
        <Text>Support</Text>
        <BsSearch/>
        <BsBag/>
      </Flex>
    </Box>

    
    

  )
}

export default Navbar