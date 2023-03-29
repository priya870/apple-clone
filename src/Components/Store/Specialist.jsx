import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Styles from "../../Styles/Store.module.css";

const Specialist = () => {
  return (
    <Box>
      <Box
        // border={"1px solid red"}
        h="500px"
        width="75%"
        m={"auto"}
        mt={"30px"}
      >
        <Flex justifyContent={"space-between"}>
          <Box
            width={"48%"}
            // border={"1px solid black"}
            height={"500px"}
            borderRadius = {"15px"}
            className={Styles.special}
          >
            <Text ml = {"20px"} p = {"10px"} mt = {"20px"} fontSize = {"14px"}>APPLE SPECIALIST</Text>
            <Text fontSize={"26px"} ml = {"20px"} p = {"10px"} fontWeight = {"700"}>Shop one on one with a Specialist online.</Text>
          </Box>

          <Box width={"50%"} height={"500px"}
           borderRadius = {"15px"}
          >
            <Flex flexDirection={"column"} gap = {"30px"}>
                <Box  height = {"235px"} width = {"100%"} borderRadius = {"15px"} className = {Styles.device_img1}>
                    <Text p = {"40px"} fontWeight = {"500"} fontSize = {"24px"}>Get to know your new device with a free Personal Session.</Text>
                </Box>
                <Box height = {"235px"} borderRadius = {"15px"}className = {Styles.device_img2}>
                <Text p = {"40px"} fontWeight = {"500"} fontSize = {"24px"} width = {"55%"}>Service and support. We’re here to help.</Text>
                </Box>
            </Flex>


          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Specialist;
