import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Stext from "../Components/Store/Stext";
import Carousell from "../Components/Store/Carousell";
import  Styles  from "../Styles/Store.module.css"
import Carousel2 from "../Components/Store/Carousel2";
import Carousel3 from "../Components/Store/Carousel3";
import Carousel4 from "../Components/Store/Carousel4";
import Carousel5 from "../Components/Store/Carousel5";
import Specialist from "../Components/Store/Specialist";

const Store = () => {
  return (
    <Box className={Styles.main_box}   >
      <Box >
        <Text
          p={"20px"}
          fontSize={"15px"}
          textAlign={"center"}
          bgColor={"white"}
          _hover={{backgroundColor:"#2996fd",color:"white"}}  >
          Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you
          trade in iPhone 11 or higher.
          <span style={{ color: "blue" }}> Shop iPhone</span>
        </Text>  
      </Box>

      <Stext />
        <Carousell />

        <Text fontSize={"30px"} marginLeft= {"180px"} fontWeight= {600}>The latest. <span style = {{color:"grey"}}> Take a look at what’s new, right now.</span></Text>
        <Carousel2/>

        <Text fontSize={"30px"} marginLeft= {"180px"} fontWeight= {600} mt = "30px" >Help is here.<span style = {{color:"grey"}}> Whenever and however you need it.</span></Text>

        <Specialist/>

        <Text fontSize={"30px"} marginLeft= {"180px"} fontWeight= {600} mt = "50px" >Accessories.<span style = {{color:"grey"}}>  Essentials that pair perfectly with your favourite devices.</span></Text>
        <Carousel3/>

        <Text fontSize={"30px"} marginLeft= {"180px"} fontWeight= {600} mt = "50px" >Loud and clear.<span style = {{color:"grey"}}> Unparalleled choices for rich, high-quality sound.</span></Text>
        <Carousel4/>

    
        <Text fontSize={"30px"} marginLeft= {"180px"} fontWeight= {600} mt = "50px" >The Apple experience.<span style = {{color:"grey"}}> Do even more with Apple products and services.</span></Text>
        <Carousel5/>

    </Box>
  );
};

export default Store;
