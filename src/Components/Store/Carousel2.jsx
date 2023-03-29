import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
      src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-14-202303_GEO_IN?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1677558947906",
      text1:"IPHONE 14",
      text2:"Wonderfull.",
      text3 :"From ₹79900.00‡"
    },
    {
      src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-macbook-pro-202301?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1671578693545",
      textb1:"MACBOOK PRO 14” AND 16”",
      textb2:"Boundary breaker.",
      textb3:"From ₹199900.00‡"

    },
    {
      src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-14-pro-202303_GEO_IN?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1677311461271",
      textb1:"IPHONE 14 PRO”",
      textb2:"Pro. Beyond.",
      textb3:"From ₹129900.00‡"
      
    },
    {
      src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-s8-202303_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1677224522308",
      textb1:"APPLE WATCH SERIES 8”",
      textb2:"A healthy leap ahead.",
      textb3:"From ₹149900.00‡"
      
    },
    {
      src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-202210?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1667423432053",
      text1:"IPAD",
      text2:"Loveable. Drawable. Magical.",
      text3 :"From ₹44900.00‡"
    },
    {
      src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-homepod-202301?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1670389217441",
      textb1:"IPAD PRO",
      textb2:"Profound sound.",
      textb3:"From 37900.00‡"
      
    },
    {
      src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-ultra-202209_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1661382550267",
      text1:"APPLE WATCH ULTRA",
      text2:"Adventure awaits.",
      text3 :"From ₹28900.00‡"


    },
    {
      src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-pro-202210_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1667506331714",
      textb1:"IPAD PRO",
      textb2:"Supercharged by M2..",
      textb3:"From 889000.00‡"
     
    },
    {
      src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-se-202303_GEO_IN?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1677306368408",
      text1:"APPLE WATCH SE",
      text2:"A great deal to love.",
      text3:"From ₹129900.00‡"
    },
  
     
  ]

const Carousel2 = () => {
  return (
    <Box w="90%"  mt="5%" ml={"130px"}>
    <Carousel responsive={responsive}>
      {content && content.map((el,i)=>(
        <Box key={i} h="500px" w="95%" ml = "20px"cursor={"pointer"} backgroundImage = {el.src}  
        bgRepeat="no-repeat" bgPosition="center"bgSize="cover"  borderRadius={"20px"} >

          <Text pt={"30px"} ml="40px">{el.text1}</Text>
          <Text pl="40px" mt={"8px"} fontSize = "28px" fontWeight={"bold"}>{el.text2}</Text>
          <Text pl="40px" mt={"4px"}  fontSize = {"20px"}>{el.text3}</Text>

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

export default Carousel2