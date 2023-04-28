import { Box ,Text ,Flex} from '@chakra-ui/react'
import React from 'react'
import styles from "../../Styles/Mac.module.css"
import { AiOutlineRight } from "react-icons/ai";


const Mac_Mac = () => {
  return (
    <Box>
      <Text textAlign={'center'} fontSize = '3.5rem' fontWeight={'600'} mt = '20px'>What makes a Mac a Mac?</Text>


      <Box  w = '95%' m = 'auto' mt = '4%' >
        <Flex justifyContent={'space-between'}>
          <Box   w = '40%'  bgColor={'#fafafa'}>
          <Text textAlign={'center'} pt = '30%' fontSize={'26px'} fontWeight={'600'}>macOS Ventura</Text>
          <Text textAlign={'center'}fontSize={'40px'} fontWeight={'bold'}>Works smarter.</Text>
          <Text textAlign={'center'}fontSize={'40px'} fontWeight={'bold'} mt = '-10px'>Plays harder.</Text>
          <Text textAlign={'center'}fontSize={'40px'} fontWeight={'bold'} mt = '-10px'>Goes further.</Text>

          <Box w = "22%" m = 'auto' > 
              <Flex justifyContent={"space-between"} alignItems="center">
                <Box>
                  <Text cursor={"pointer"} color="#1285f0" fontSize={18}>
                    Learn more
                  </Text>
                </Box>
                <Box>
                  <Text cursor={"pointer"} color="#1285f0" mt="6px" fontSize={'14'}>
                    <AiOutlineRight />
                  </Text>
                </Box>
              </Flex>
            </Box>




          </Box>
          <Box   w = '60%'  className={styles.mac_Mac} ></Box>
        </Flex>

       
   
      </Box>

    </Box>
  )
}

export default Mac_Mac