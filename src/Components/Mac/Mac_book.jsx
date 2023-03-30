import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import styles from "../../Styles/Mac.module.css";
import { AiOutlineRight } from "react-icons/ai";

const Mac_book = () => {
  return (
    <Box>
      <Box
        className={styles.macbook}
        mt={"10px"}
        pt={"60px"}
        bgColor={"black"}
        h="750px"
      >
        <Text className={styles.minitext} color={"red"}>
          New
        </Text>
        <Text className={styles.minitext} fontSize={"60px"} fontWeight={"600"}>
          MacBook Pro
        </Text>
        <Text className={styles.minitext} fontSize={"30px"} fontWeight={"600"}>
          Mover. Maker. Boundary breaker.
        </Text>
        <Text className={styles.minitext} fontSize={"20px"}>
          From ₹199900.00*
        </Text>

        <Box width={"18%"} m={"auto"} mt={"20px"}>
          <Flex justifyContent={"space-between"}>
            <Box>
              <Box
                bgColor="#1285f0"
                borderRadius={"12px"}
                p="6px"
                width={"60px"}
                mt={"10px"}
              >
                <Text className={styles.minitext} fontWeight="600">
                  Buy
                </Text>
              </Box>
            </Box>

            <Box w={"110px"}>
              <Flex justifyContent={"space-between"}>
                <Box>
                  <Text
                    cursor={"pointer"}
                    color="#1285f0"
                    mt={"10px"}
                    fontSize={"17px"}
                  >
                    Learn more
                  </Text>
                </Box>
                <Box>
                  <Text cursor={"pointer"} color="#1285f0" mt={"15px"}>
                    <AiOutlineRight />
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box mt="70px" ml={"120px"}>
          <Image src="https://www.apple.com/v/mac/home/bs/images/overview/hero/macbook_pro_14_16__dmqm5vr9l7yq_large.jpg"></Image>
        </Box>
      </Box>
    </Box>
  );
};

export default Mac_book;
