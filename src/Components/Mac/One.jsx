import { Box ,Text ,Flex ,Image,Center ,HStack} from '@chakra-ui/react'
import React from 'react'
import { AiFillApple ,AiOutlineRight  } from "react-icons/ai";

const One = () => {
  return (
    <Box>
        <Text textAlign={'center'} fontSize={'4rem'} fontWeight={'600'} mt ='4%'>Get more out of Mac</Text>
        <Box w = '95%' h = "550px" m = 'auto' mt = '3%' bgColor={'#fbfbfd'}>
            <Box  p = '7%'>
                <Flex justifyContent={'center'} alignItems={'center'}>
                    <Box  w = "50%" h = '400px' 
                      bgImage="url('https://www.apple.com/in/mac/home/images/overview/get-more/bundle__eqmvgz1saumq_large.jpg')"
                      bgPosition="center"
                      bgRepeat="no-repeat"
                   
                    >
                       
                    </Box>

                    <Box w = "50%" h = '400px'>
                        <Box w = '70%' m = 'auto'>
                   <Flex alignItems={'center'}>
                    <Box>
                        <Text fontSize={'7rem'} ><AiFillApple/></Text>
                    </Box>
                    <Box>
                        <Text fontSize={'8rem'} fontWeight={'600'} fontFamily={'heading'}>One</Text>
                       
                    </Box>

                   </Flex>
                   <Text textAlign={'center'} fontSize={'25px'} fontWeight={'600'} mt = '-30px'>Bundle four Apple services.</Text>
                        <Text textAlign={'center'} fontSize={'25px'} fontWeight={'600'} mt = '-10px'>And enjoy more for less.</Text>

                        <Box w = "30%" m = 'auto' > 
              <Flex alignItems="center">
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
                   </Box>

                 
                </Flex>
            </Box>



        </Box>
    </Box>
  )
}

export default One