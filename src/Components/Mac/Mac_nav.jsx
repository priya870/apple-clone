import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Mac_nav = () => {
  return (
    <Box>
      <Box width={"80%"} margin={"auto"} p={"20px"}>
        <Flex justifyContent={"space-between"}>
          <Box>
            <Image src="https://www.apple.com/v/mac/home/br/images/familybrowser/macbookair_light__f0o95rwae8ae_large.svg"></Image>
            <Text
              _hover={{ textDecoration: "underline", color: "blue" }}
              cursor={"pointer"}
              fontSize={"12px"}
              textAlign={"center"}
            >
              MacBook Air
            </Text>
          </Box>
          <Box>
            <Image src="https://www.apple.com/v/mac/home/br/images/familybrowser/macbook_pro_light__e791sjqzt32a_large.svg"></Image>
            <Text
              _hover={{ textDecoration: "underline", color: "blue" }}
              cursor={"pointer"}
              fontSize={"12px"}
              textAlign={"center"}
            >
              MacBook Pro
            </Text>
          </Box>
          <Box>
            <Image src="https://www.apple.com/v/mac/home/br/images/familybrowser/imac_24_light__colyztscbeeu_large.svg"></Image>
            <Text
              _hover={{ textDecoration: "underline", color: "blue" }}
              cursor={"pointer"}
              fontSize={"12px"}
              textAlign={"center"}
            >
              iMac 24"'
            </Text>
          </Box>
          <Box>
            <Image
              src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_mini_light__frtahmzmd4mm_large.svg"
              height={"50px"}
            ></Image>
            <Text
              _hover={{ textDecoration: "underline", color: "blue" }}
              cursor={"pointer"}
              fontSize={"12px"}
              textAlign={"center"}
            >
              Mac mini
            </Text>
          </Box>
          <Box>
            <Image
              height={"50px"}
              src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_studio_light__ea3pb1auizu6_large.svg"
            ></Image>
            <Text
              _hover={{ textDecoration: "underline", color: "blue" }}
              cursor={"pointer"}
              fontSize={"12px"}
              textAlign={"center"}
            >
              Mac Studio
            </Text>
          </Box>
          <Box>
            <Image
              height={"60px"}
              src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_pro_light__cj4dvg7thx5y_large.svg"
            ></Image>
            <Text
              _hover={{ textDecoration: "underline", color: "blue" }}
              cursor={"pointer"}
              fontSize={"12px"}
              textAlign={"center"}
            >
              Mac Pro
            </Text>
          </Box>
          <Box>
            <Image src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_compare_light__emml1umdv9m6_large.svg"></Image>
            <Text
              _hover={{ textDecoration: "underline", color: "blue" }}
              cursor={"pointer"}
              fontSize={"12px"}
              textAlign={"center"}
            >
              Compare
            </Text>
          </Box>
          <Box>
            <Image src="https://www.apple.com/v/mac/home/br/images/familybrowser/displays_light__ewxqx5obdxci_large.svg"></Image>
            <Text fontSize={"12px"} textAlign={"center"}>
              Displays
            </Text>
          </Box>
          <Box>
            <Image
              height={"60px"}
              src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_accessories_light__cuds10wyptyu_large.svg"
            ></Image>
            <Text
              _hover={{ textDecoration: "underline", color: "blue" }}
              cursor={"pointer"}
              fontSize={"12px"}
              textAlign={"center"}
            >
              Accessories
            </Text>
          </Box>
          <Box>
            <Image src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_os_light__d0zczt34scq6_large.svg"></Image>
            <Text
              _hover={{ textDecoration: "underline", color: "blue" }}
              cursor={"pointer"}
              fontSize={"12px"}
              textAlign={"center"}
            >
              Ventura
            </Text>
          </Box>
          <Box>
            <Image src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_shop_light__layuggud1xe2_large.svg"></Image>
            <Text
              _hover={{ textDecoration: "underline", color: "blue" }}
              cursor={"pointer"}
              fontSize={"12px"}
              textAlign={"center"}
            >
              Shop Mac
            </Text>
          </Box>
        </Flex>
        
      </Box>
      <Box p = {"10px"} bgColor = {"#f5f5f7"}  _hover={{ backgroundColor: "blue", color: "white" }}>
      <Text textAlign={"center"} fontSize = {"13px"}>Get 3- or 6-month No Cost EMI on selected Mac models from most leading banks.‡<span style = {{color:"blue"}}>Shop Mac </span> </Text></Box>
    </Box>
  );
};

export default Mac_nav;
