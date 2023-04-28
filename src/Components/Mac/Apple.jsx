
import { Box ,Text} from '@chakra-ui/react'
import React from 'react'

const Apple = () => {
  return (
    
    <Box>
        <Box w = {'95%'} m = 'auto' h = '600px' 
         mt = '3%' mb = '3%'
         bgImage="url('https://www.apple.com/v/mac/home/bs/images/overview/get-more/education__bq047y5fu7n6_large.jpg')"
         bgPosition="center"
         bgRepeat="no-repeat"
        > 
      <Text textAlign={'center'} pt = '18%'color={'white'} fontSize={'4rem'}> Apple and Education</Text>
      <Text textAlign={'center'}color={'white'} fontSize={'20px'}>Empowering educators and students to move the world forward.</Text>
      <Text textAlign={'center'}color={'white'} _hover={{textDecoration:"underline"}} cursor={'pointer'}>Learn about Apple and Education</Text>
        </Box>
    </Box>
  )
}

export default Apple
