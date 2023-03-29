import React from 'react'
import { Box, Text  } from '@chakra-ui/react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3.5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  const mobile = [
    {src : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQU73?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1676920930838",
   text:"New",
    text1 :"iPhone 14 Silicone Case with MagSafe - Canary Yellow",
    text2:"MRP ₹4900.00 (Incl. of all taxes)"
  },
  {src : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPPJ3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1662046154499",
  text:"New",
   text1 :"iPhone 14 Pro Leather Case with MagSafe - Ink",
   text2:"MRP ₹54900.00 (Incl. of all taxes)"
 },
 {src : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MR1L3ref?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1676350846083",
   text:"New",
    text1 :"45mm Purple Fog Braided Solo Loop - Size 6",
    text2:"MRP ₹94900.00 (Incl. of all taxes)"
  },
  {src : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1678830752232",
  text:"New",
   text1 :"iPhone 14 Pro Clear Case with MagSafe",
   text2:"MRP ₹4900.00 (Incl. of all taxes)"
 },
 {src : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQX53ref?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1676356749795",
   text:"New",
    text1 :"45mm Spring Green Solo Loop - Size 6",
    text2:"MRP ₹7200.00 (Incl. of all taxes)"
  },
  {src : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPPX3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1661458144539",
  text:"New",
   text1 :"iPhone 14 Silicone Case with MagSafe - Canary Yellow",
   text2:"MRP ₹8900.00 (Incl. of all taxes)"
 },
 {src : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQU73?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1676920930838",
   text:"New",
    text1 :"iPhone 14 Silicone Case with MagSafe - Canary Yellow",
    text2:"MRP ₹4900.00 (Incl. of all taxes)"
  },
 



  ]

const Carousel3 = () => {
  return (
    <Box w="90%"  mt="3%" ml={"130px"}  >
    <Carousel responsive={responsive}>
      {mobile && mobile.map((el,i)=>(
        <Box key={i} h = {"500px"} w="95%" pt = {"80px"}cursor={"pointer"} backgroundImage = {el.src }  bgRepeat="no-repeat" bgPosition={"center"} borderRadius={"20px"} bgColor = {"white"}  >

          <Text pt={"30px"} ml="40px" mt = {"240px"} color = {"red"}>{el.text}</Text>
          <Text pl="40px" mt={"8px"} fontSize = "18px" fontWeight={"bold"}>{el.text1}</Text>
          <Text pl="40px" mt={"4px"}  fontSize = {"15px"}>{el.text2}</Text>

         
        </Box>
      ))}
</Carousel>;
   </Box> 
  )
}

export default Carousel3