import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};
const content = [
  {
    // src:"",
    text:""
  },


  {
    src:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-14-16-mac-nav-202301?wid=200&hei=130&fmt=png-alpha&.v=1670959891635",
    text:"Mac"
  },
  {
    src:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202209_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1661027785546",
    text:"iPhone"
  },
  {
    src:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664912135437",
    text:"iPad"
  },
  {
    src:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202303?wid=200&hei=130&fmt=png-alpha&.v=1677701613598",
    text:"Apple Watch"
  },
  {
    src:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1660676485885",
    text:"AirPods"
  },
  {
    src:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000",
    text:"AirTag"
  },
  {
    src:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664628458484",
    text:"Apple TV 4K"
  },
  {
    src:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=200&hei=130&fmt=png-alpha&.v=1670389216654",
    text:"HomePod"
  },
  {
    src:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202303?wid=200&hei=130&fmt=png-alpha&.v=1677172796005",
    text:"Accessories",

    src:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=200&hei=130&fmt=png-alpha&.v=1653339351054",
    text:"Apple Gift Card"
  },
]
const Carousell = () => {
  return (
   <Box w="90%" margin={"auto"} mt="5%">
    <Carousel responsive={responsive}>
      {content && content.map((el,i)=>(
        <Box key={i} h="150px" w="100%" cursor={"pointer"}>
          <Image src={el.src} alt="" h="80px"/>
          <Text fontWeight={"500"} fontSize={15} color="black" _hover={{textDecoration:"underline"}} mt="6%" textAlign={"center"}>{el.text}</Text>
        </Box>
      ))}
</Carousel>;
   </Box>
  )
}

export default Carousell