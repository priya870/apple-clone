import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const IpadNav = () => {
  return (
    <>
      <Box w={"70%"} m={"auto"} pt={"10px"} pb={"20px"}>
        <Flex justifyContent={"space-between"} cursor={"pointer"}>
          <Flex flexDirection={"column"}>
            <Center>
              <Image
                h={"50px"}
                src={
                  "https://www.apple.com/v/ipad/home/cd/images/chapternav/ipadpro_light__eksnhatoqzu6_large.svg"
                }
              ></Image>
            </Center>
            <Text
              fontSize={"13px"}
              textAlign={"center"}
              _hover={{ textDecoration: "underline", color: "blue" }}
            >
              iPad Pro
            </Text>
            <Text fontSize={"12px"} textAlign={"center"} color={"red"}>
              New
            </Text>
          </Flex>

          <Flex flexDirection={"column"}>
            <Center>
              <Image
                h={"50px"}
                src={
                  "https://www.apple.com/v/ipad/home/cd/images/chapternav/ipadair_light__fwcr6ummn722_large.svg"
                }
              ></Image>
            </Center>
            <Text
              fontSize={"13px"}
              textAlign={"center"}
              _hover={{ textDecoration: "underline", color: "blue" }}
            >
              iPad Air
            </Text>
          </Flex>

          <Flex flexDirection={"column"}>
            <Center>
              <Image
                src={
                  "https://www.apple.com/v/ipad/home/cd/images/chapternav/ipad_light__fcshltpasu6i_large.svg"
                }
              ></Image>
            </Center>
            <Text
              fontSize={"13px"}
              textAlign={"center"}
              _hover={{ textDecoration: "underline", color: "blue" }}
            >
              iPad
            </Text>
            <Text
              fontSize={"12px"}
              textAlign={"center"}
              color={"red"}
              _hover={{ textDecoration: "underline", color: "blue" }}
            >
              New
            </Text>
          </Flex>

          <Flex flexDirection={"column"}>
            <Center>
              <Image
                src={
                  "https://www.apple.com/v/ipad/home/cd/images/chapternav/ipadmini_light__fax9y0phijyq_large.svg"
                }
              ></Image>
            </Center>
            <Text
              fontSize={"13px"}
              textAlign={"center"}
              _hover={{ textDecoration: "underline", color: "blue" }}
            >
              iPad mini
            </Text>
          </Flex>

          <Flex flexDirection={"column"}>
            <Center>
              <Image
                src={
                  "https://www.apple.com/v/ipad/home/cd/images/chapternav/ipad_compare_light__bdpd7ul1iasy_large.svg"
                }
              ></Image>
            </Center>
            <Text
              fontSize={"13px"}
              textAlign={"center"}
              _hover={{ textDecoration: "underline", color: "blue" }}
            >
              Compare
            </Text>
          </Flex>

          <Flex flexDirection={"column"}>
            <Center>
              <Image
                h={"50px"}
                src={
                  "https://www.apple.com/v/ipad/home/cd/images/chapternav/apple_pencil_light__b56nts0623aq_large.svg"
                }
              ></Image>
            </Center>
            <Text
              fontSize={"13px"}
              textAlign={"center"}
              _hover={{ textDecoration: "underline", color: "blue" }}
            >
              Apple Pencil
            </Text>
          </Flex>

          <Flex flexDirection={"column"}>
            <Center>
              <Image
                src={
                  "https://www.apple.com/v/ipad/home/cd/images/chapternav/keyboard_light__emvaymybnp6q_large.svg"
                }
              ></Image>
            </Center>
            <Text
              fontSize={"13px"}
              textAlign={"center"}
              _hover={{ textDecoration: "underline", color: "blue" }}
            >
              Keyboards
            </Text>
            <Text
              fontSize={"12px"}
              textAlign={"center"}
              color={"red"}
              _hover={{ textDecoration: "underline", color: "blue" }}
            >
              New
            </Text>
          </Flex>

          <Flex flexDirection={"column"}>
            <Center>
              <Image
                h={"50px"}
                src={
                  "https://www.apple.com/v/ipad/home/cd/images/chapternav/ipad_acc_light__gau97p46jyye_large.svg"
                }
              ></Image>
            </Center>
            <Text
              fontSize={"13px"}
              textAlign={"center"}
              _hover={{ textDecoration: "underline", color: "blue" }}
            >
              Accessories
            </Text>
          </Flex>

          <Flex flexDirection={"column"}>
            <Center>
              <Image
                h={"50px"}
                src={
                  "https://www.apple.com/v/ipad/home/cd/images/chapternav/ipados_light__iolxd8nzzcqe_large.svg"
                }
              ></Image>
            </Center>
            <Text
              fontSize={"13px"}
              textAlign={"center"}
              _hover={{ textDecoration: "underline", color: "blue" }}
            >
              iPadOS
            </Text>
          </Flex>

          <Flex flexDirection={"column"}>
            <Center>
              <Image
                src={
                  "https://www.apple.com/v/ipad/home/cd/images/chapternav/shop_ipad_light__cruwa0cotbwy_large.svg"
                }
              ></Image>
            </Center>
            <Text
              fontSize={"13px"}
              textAlign={"center"}
              _hover={{ textDecoration: "underline", color: "blue" }}
            >
              Shop iPad
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box
        p={"10px"}
        bgColor={"#f5f5f7"}
        w={"100%"}
        _hover={{ backgroundColor: "blue", color: "white" }}
      >
        <Text textAlign={"center"} fontSize={"13px"}>
          Get up to ₹4000.00 instant savings on selected iPad models with
          eligible HDFC Bank cards
          <span style={{ color: "blue" }}>Shop Mac </span>{" "}
        </Text>
      </Box>
    </>
  );
};

export default IpadNav;
