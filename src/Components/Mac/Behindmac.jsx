import { Box  ,Text ,Flex} from '@chakra-ui/react'
import React from 'react'
import styles from '../../Styles/Mac.module.css'
import { AiOutlinePlayCircle } from "react-icons/ai";



const Behindmac = () => {
  return (
    <Box>
        <Text textAlign={"center"} fontSize = {'25px'} color = {'blue'}>Compare all Mac   models -   Shop Mac.</Text>
        <Box className={styles.behindmac} w = {'98%'} m = 'auto' mt = {'60px'} >
            <Text className = {styles.behindtext} fontSize = {"30px"} pt = '200px' pl = '160px' fontWeight={'600'}>Behind the Mac</Text>
            <Text className = {styles.behindtext}  pl = '100px' fontSize={'50px'} fontWeight = {'600'} >Hear the Force.</Text>
            <Text className = {styles.behindtext} pl = '120px' >Learn how the pros at Skywalker Sound</Text>
            <Text className = {styles.behindtext} pl = '120px' >push the limits of sonic storytelling.</Text>

            <Box w = '12%' ml = '150px' mt = '20px'>
                <Flex justifyContent={'space-between'}>
                    <Box>
                        <Text color={'#519eeC'} fontSize = {'18px'} _hover = {{textDecoration:"underline"}} cursor = 'pointer'>Watch the flim</Text>
                    </Box>
                    <Box>
                        <Text color={'#519eeC'}  cursor = 'pointer' fontSize = {'23px'} mt = {'3px'} > <AiOutlinePlayCircle/></Text>
                    </Box>
                </Flex>
            </Box>


        </Box>
    </Box>
  )
}

export default Behindmac