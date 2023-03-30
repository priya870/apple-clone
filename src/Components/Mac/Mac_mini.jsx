import { Box ,Flex,Text } from '@chakra-ui/react'
import React from 'react'
import styles from '../../Styles/Mac.module.css'
import { AiOutlineRight} from "react-icons/ai";


const Mac_mini = () => {
  return (
    <Box>
        <Box className={styles.macmini} mt = {"10px"} pt = {"60px"}>
            <Text className={styles.minitext} color = {"red"}>New</Text>
            <Text className={styles.minitext} fontSize = {"60px"} fontWeight = {"600"}>Mac mini</Text>
            <Text className={styles.minitext} fontSize = {"30px"} fontWeight = {"600"}>More muscle. More hustle.</Text>
            <Text className={styles.minitext} fontSize = {'20px'}>From ₹59900.00*</Text>

            <Box width = {'18%'} m = {"auto"}  mt = {'20px'}>
                <Flex justifyContent={"space-between"}>
                    <Box>
                        <Box  bgColor = '#1285f0' borderRadius={"12px"} p = '6px' width = {"60px"} mt = {'10px'}>
                        <Text  className= {styles.minitext} fontWeight = '600'>Buy</Text>
                        </Box>
                    </Box>

                    <Box w={'110px'} >
                        <Flex justifyContent={"space-between"} >
                            <Box>
                                <Text cursor={'pointer'} color = '#1285f0' mt = {'10px'} fontSize= {"17px"} >Learn more</Text>
                            </Box>
                            <Box>
                                <Text cursor={'pointer'}  color = '#1285f0'  mt = {'15px'}><AiOutlineRight/></Text>
                            </Box>
                        </Flex>

                    </Box>

                </Flex>
            </Box>

        </Box>
    </Box>
  )
}

export default Mac_mini