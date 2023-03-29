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
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const mobile = [
    {src : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-select-midnight-202210?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1670557210097",
  text:"Free Engraving",
    text1 :"HomePod - Midnight",
    text2:"MRP ₹344900.00 (Incl. of all taxes)"
  },
  {src : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-select-yellow-202110?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632925510000",
   text1 :"HomePod mini - Yellow",
   text :"New",
   text2:"MRP ₹84700.00 (Incl. of all taxes)"
 },
 {src : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-silver-202011?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1604021221000",
   text:"Free Engraving",
    text1 :"AirPods Max - Silver",
    text2:"MRP ₹94900.00 (Incl. of all taxes)"
  },
  {src : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632861342000",
  text:"New",
   text1 :"AirPods (3rd generation) with Lightning Charging Case",
   text2:"MRP ₹14900.00 (Incl. of all taxes)"
 },
 
 



  ]

const Carousel4= () => {
  return (
    <Box w="90%"  mt="3%" ml={"130px"}  >
    <Carousel responsive={responsive}>
      {mobile && mobile.map((el,i)=>(
        <Box key={i} h = {"450px"} w="95%" pt = {"80px"}cursor={"pointer"} backgroundImage = {el.src }  bgRepeat="no-repeat" bgPosition={"center"} borderRadius={"20px"} bgColor = {"white"}  >

          <Text pt={"30px"} ml="40px" mt = {"200px"} color = {"red"}>{el.text}</Text>
          <Text pl="40px" mt={"8px"} fontSize = "20px" fontWeight={"bold"}>{el.text1}</Text>
          <Text pl="40px" mt={"4px"}  fontSize = {"15px"}>{el.text2}</Text>

         
        </Box>
      ))}
</Carousel>;
   </Box> 
  )
}

export default Carousel4