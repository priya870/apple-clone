import { Box ,Text} from '@chakra-ui/react'
import React from 'react'
import styles from '../../Styles/Store.module.css'



const Stories = () => {
  return (
    <Box>
        <Box width = {"30%"} height = {"500px"} ml = {"180px"} mt = {"30px"} borderRadius = {"18px"} className = {styles.stories} cursor = {"pointer"}>
            <Text pt={"30px"} ml="40px">EDUCATION</Text>
            <Text  pl="40px" mt={"8px"} fontSize = "28px" fontWeight={"bold"}> Save on Mac or iPad with education pricing.</Text>

        </Box>
    </Box>
  )
}

export default Stories