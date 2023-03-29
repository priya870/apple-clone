
import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2.5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.5
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

  const content = [

    {
      src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-applemusic-202303?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1677003263514",
      textb1:"APPLE MUSIC",
      textb2:"Rihanna’s iconic hits now in Spatial Audio.^",
      
    },
    {
      src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-subscriptions-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1626375547000",
      text2:"Four Apple services. One easy subscription.",
      

    },
    {
      src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-applecare-202209?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1669753330903",
      text1:"NEW",
      text2:"We’ve got you covered",
      text3:"AppleCare+ now comes with unlimited repairs for accidental damage protection."
      
    },
    {
      src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-homekit-202301_GEO_IN?wid=480&hei=500&fmt=jpeg&qlt=95&.v=1671143502232",
      text1:"HOME",
      text2:"See how one app can control your entire home.",
      
      
    },
    {
        src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-202210?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1667423432053",
        text1:"IPAD",
        text2:"Loveable. Drawable. Magical.",
        
      },
   
     
  ]

const Carousel5 = () => {
  return (
    <Box w="90%"  mt="3%" ml={"130px"}>
    <Carousel responsive={responsive}>
      {content && content.map((el,i)=>(
        <Box key={i} h="500px" w="95%" ml = "20px"cursor={"pointer"} backgroundImage = {el.src}  
        bgRepeat="no-repeat" bgPosition="center"bgSize="cover"  borderRadius={"20px"} >

          <Text pt={"28px"} ml="40px">{el.text1}</Text>
          <Text pl="40px" mt={"8px"}  width = {"80%"}fontSize = "25px" fontWeight={"bold"}>{el.text2}</Text>
          <Text pl="40px" mt={"4px"}  width = {"80%"}fontSize = {"18px"}>{el.text3}</Text>

          <Text  color="white" mt={"20px"} ml="40px">{el.textb1}</Text>
          <Text  color="white" ml="40px" mt={"7px"} fontSize = "26px" fontWeight={"bold"}>{el.textb2}</Text>
          <Text  color="white" ml="40px" mt={"5px"}  fontSize = {"20px"}>{el.textb3}</Text>
          <Text></Text>
        </Box>
      ))}
</Carousel>;
   </Box>
  )
}

export default Carousel5