import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
// import styles from "../Styles/"
const Footer = () => {
  return (
    <Box w={"100%"} bg="#f5f5f7">
      <Flex
        gap={"5%"}
        w="80%"
        justifyContent={"center"}
        m={"auto"}
        paddingTop={"20px"}
        borderBottom={"1px solid #dbdad5"}
        pt={"40px"}
        borderTop={"1px solid #dbdad5"}
      >
        <Box w={"20%"}>
          <Text fontSize={"14px"} fontWeight="bold">
            Shop and Learn
          </Text>

          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Store
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Mac
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            iPad
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            iPhone
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Watch
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            AirPods
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            TV & Home
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Accessories
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Gift Cards
          </Text>
          <Text
            fontSize={"14px"}
            lineHeight={"30PX"}
            fontWeight="bold"
            marginTop={"8px"}
          >
            Apple Wallet
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Wallet
          </Text>
        </Box>

        <Box w={"20%"}>
          <Text fontSize={"14px"} fontWeight="bold">
            Account
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Manage Your Apple ID
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Apple Store Account
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            iCloud.com
          </Text>

          <Text
            fontSize={"14px"}
            fontWeight="bold"
            lineHeight={"30PX"}
            marginTop={"8px"}
          >
            Entertainment
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Apple One
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Apple Music
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Apple Arcade
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Apple Podcasts
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Apple Books
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            App Store
          </Text>
        </Box>

        <Box w={"20%"}>
          <Text fontSize={"14px"} lineHeight={"30PX"} fontWeight="bold">
            Apple Store
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Apple Trade In
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Ways to Buy
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Recycling Programme
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Order Status
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Shopping Help
          </Text>
        </Box>

        <Box w={"20%"}>
          <Text fontSize={"14px"} lineHeight={"30PX"} fontWeight="bold">
            For Business
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Apple and Business
          </Text>
          <Text
            fontSize={"14px"}
            lineHeight={"30PX"}
            fontWeight="bold"
            marginTop={"8px"}
          >
            For Education
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Apple and Education
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Shop for Education
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Shop for University
          </Text>
          <Text
            fontSize={"14px"}
            lineHeight={"30PX"}
            fontWeight="bold"
            marginTop={"8px"}
          >
            For Healthcare
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Apple in Healthcare
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Health on Apple Watch
          </Text>
        </Box>

        <Box w={"20%"}>
          <Text fontSize={"14px"} lineHeight={"30PX"} fontWeight="bold">
            Apple Values
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Accessibility
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Education
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Environment
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Privacy
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Supplier Responsibility
          </Text>
          <Text
            fontSize={"14px"}
            lineHeight={"30PX"}
            fontWeight="bold"
            marginTop={"8px"}
          >
            About Apple
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Newsroom
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Apple Leadership
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Career Opportunities
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Investors
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Ethics & Compliance
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Events
          </Text>
          <Text fontSize={"14px"} lineHeight={"30PX"}>
            Contact Apple
          </Text>
        </Box>
      </Flex>

      <Text ml={"-430px"} fontSize={"14px"}>
        More ways to shop:
        <span style={{ color: "blue" }}>
          {" "}
          Find an Apple Store or other retailer{" "}
        </span>{" "}
        near you. Or call 1-800-MY-APPLE.
      </Text>
      <Text ml={"-300px"} fontSize={"14px"} mt={"12px"} pb={"40px"}>
        Copyright <span style={{ color: "blue" }}> © </span>2023{" "}
        <span style={{ color: "blue" }}>Apple Inc </span>. All rights reserved.
        Privacy Policy | Terms of Use | Sales and Refunds | Legal Site Map
      </Text>
    </Box>
  );
};

export default Footer;
