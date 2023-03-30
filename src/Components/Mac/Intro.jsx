import { Box  ,Text} from '@chakra-ui/react'
import React from 'react'

const Intro = () => {
  return (
    <Box>
        <Box border = {"1px solid black"} bgColor = "black" h = {"400px"} cursor = {"pointer"}>
            <Text textAlign={"center"}color = {'white'} fontSize = {"50px"} fontWeight = "bold" pt = {"80px"}>Introducing the new</Text>
            <Text textAlign={"center"}color = {'white'} fontSize = {"50px"} fontWeight= "bold" mt = {"-20px"}>MacBook Pro and Mac mini.</Text>
            <Box borderRadius={"50px"} bgColor = {"white"} width = "20%" margin={"auto"} p = {"10px"} mt = {"30px"} >
            <Text textAlign={"center"}color = {'black'}>Watch the annoucement</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default Intro