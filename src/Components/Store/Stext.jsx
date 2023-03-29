import { Box ,Text ,  Flex , Image} from '@chakra-ui/react'
import React from 'react'



const Stext = () => {
  return (
    <Box width = {"70%"} margin = "auto" >
        <Flex justifyContent={"space-between"}>
        <Box>     
        <Text fontSize={"45px"} w = {"80%"} fontWeight = {'bold'} pt = {"60px"} cursor={"pointer"}>Store.<span style = {{color:"grey"}}> The best way to buy the products you love.</span></Text>
        </Box>

        <Box width = {"35%"} pt = {"60px"} cursor={"pointer"}>
            <Flex justifyContent={"space-between"}>
                <Box>
               <Image  style={{
            width: 50,
            height: 50,
            borderRadius: 50/2
          }}
            src = {"https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-1024x1024.jpg"}></Image>
                </Box>
               <Box>
                <Flex flexDirection={"column"}>
                <Text>Need shopping help?</Text>
                <Text> <span style = {{color:"blue"}}>Ask a Specialist</span></Text>
                </Flex>
                </Box>
            </Flex>

        </Box>
        </Flex>
        

    </Box>
  )
}

export default Stext