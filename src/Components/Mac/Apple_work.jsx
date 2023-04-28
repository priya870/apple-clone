import React from 'react'
import { Box ,Text} from '@chakra-ui/react'

const Apple_work = () => {
  return (
     
    <Box>
        <Box w = {'95%'} m = 'auto' h = '600px' 
         mt = '3%' mb = '3%'
         bgImage="url('https://www.apple.com/v/mac/home/bs/images/overview/get-more/business__dhhbnntkcwuq_large.jpg')"
         bgPosition="center"
         bgRepeat="no-repeat"
        > 
      <Text textAlign={'center'} pt = '18%'color={'white'} fontSize={'4rem'}>Apple at Work</Text>
      <Text textAlign={'center'}color={'white'} fontSize={'20px'}>Get the power to take your business to the next level.</Text>
      <Text textAlign={'center'}color={'white'} _hover={{textDecoration:"underline"}} cursor={'pointer'}>Learn about Apple at Work</Text>
        </Box>
    </Box>
  )
}

export default Apple_work