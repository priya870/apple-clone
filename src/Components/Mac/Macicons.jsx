import { Box ,Text,Flex,Image} from '@chakra-ui/react'
import React from 'react'
import styles from '../../Styles/Mac.module.css'
import { AiOutlineRight } from "react-icons/ai";


const Macicons = () => {
  return (
   <Box>
    <Box width ='80%' margin={'auto'}  mt = {'50px'} height = {'200px'}>
        <Flex justifyContent={'space-between'}>
            {/* <Box w = '30%' border = '1px solid black'> */}
              <Box className={styles.iconimage} width = "30%" mt = {'-24px'}>
                <Text textAlign={'center'} pt = '100px' fontSize={'24px'} fontWeight ='600'>Free delivery</Text>
                <Text textAlign={'center'} fontSize = {'18px'}>Get free delivery direct to your door.</Text>
                <Box width={'36%'}  m = 'auto'>
                    <Flex justifyContent={'space-between'}>
                        <Box>
                            <Text fontSize={'19px'} cursor = 'pointer' _hover={{textDecoration:"underline"}} fontWeight = '400' color = 'blue'>Learn more</Text>
                        </Box>
                        <Box>
                            <Text mt = '10px' fontSize={'13px'} color = 'blue'><AiOutlineRight/></Text>
                        </Box>
                    </Flex>
                </Box>
              </Box>


              <Box className={styles.iconimage2} width = "30%" >
                <Text textAlign={'center'} pt = '80px' fontSize={'24px'} fontWeight ='600'>Ways to buy</Text>
                <Text textAlign={'center'} fontSize = {'18px'}>Choose the way that’s right for you..</Text>
                <Box width={'36%'}  m = 'auto'>
                    <Flex justifyContent={'space-between'}>
                        <Box>
                            <Text fontSize={'19px'} cursor = 'pointer' _hover={{textDecoration:"underline"}} fontWeight = '400' color = 'blue'>Learn more</Text>
                        </Box>
                        <Box>
                            <Text mt = '10px' fontSize={'13px'} color = 'blue'><AiOutlineRight/></Text>
                        </Box>
                    </Flex>
                </Box>
              </Box>
              <Box className={styles.iconimage3} width = "30%" >
                <Text textAlign={'center'} pt = '80px' fontSize={'24px'} fontWeight ='600'>Get help buying</Text>
                <Text textAlign={'center'} fontSize = {'18px'}>Have a question? Call a Specialist</Text>
                <Box width={'36%'}  m = 'auto'>
                    <Flex justifyContent={'space-between'}>
                        <Box>
                            <Text fontSize={'19px'} cursor = 'pointer' _hover={{textDecoration:"underline"}} fontWeight = '400' color = 'blue'>Contact Us</Text>
                        </Box>
                        <Box>
                            <Text mt = '10px' fontSize={'13px'} color = 'blue'><AiOutlineRight/></Text>
                        </Box>
                    </Flex>
                </Box>
              </Box>

            
        </Flex>
    </Box>
   </Box>
  )
}

export default Macicons