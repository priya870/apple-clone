import { Box, Text, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/Home.module.css";
import { AiOutlineRight, AiFillApple } from "react-icons/ai";
import Carousel from "../Components/Home/Carousel";

const Home = () => {
  return (
    <Box>
      <Box>
        <Text p={"10px"} fontSize={"15px"}>
          Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you
          trade in iPhone 11 or higher.
          <span style={{ color: "blue" }}>Shop iPhone</span>
        </Text>
      </Box>
      {/* first section */}
      <Box className={styles.pro}>
        <Text className={styles.box1}>iPhone 14 Pro</Text>
        <Text className={styles.box2}>Pro. Beyond.</Text>
        <Box w={"18%"} m={"auto"}>
          <Flex justifyContent={"space-between"}>
            <Box w={"70%"} margin={"auto"}>
              <Flex alignItems={"center"}>
                <Text className={styles.text1}>Learn more </Text>
                <Text
                  className={styles.text1}
                  fontSize={"12px"}
                  mt={"8px"}
                  marginLeft={"5px"}
                >
                  <AiOutlineRight />
                </Text>
              </Flex>
            </Box>
            <Box w={"40%"} margin={"auto"}>
              <Flex alignItems={"center"} justifyContent={"center"}>
                <Text className={styles.text1}> Buy </Text>
                <Text
                  className={styles.text1}
                  fontSize={"12px"}
                  mt={"8px"}
                  marginLeft={"5px"}
                >
                  <AiOutlineRight />
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* second image section */}

      <Box className={styles.post}>
        <Text className={styles.p1}> iPhone 14</Text>
        <Text className={styles.p2}>Two great sizes.</Text>
        <Text className={styles.p2}>Now with a splash of yelllow. </Text>
        <Box w={"18%"} m={"auto"}>
          <Flex justifyContent={"space-between"}>
            <Box w={"70%"} margin={"auto"}>
              <Flex alignItems={"center"}>
                <Text className={styles.text1}>Learn more </Text>
                <Text
                  className={styles.text1}
                  fontSize={"12px"}
                  mt={"8px"}
                  marginLeft={"5px"}
                >
                  <AiOutlineRight />
                </Text>
              </Flex>
            </Box>
            <Box w={"40%"} margin={"auto"}>
              <Flex alignItems={"center"} justifyContent={"center"}>
                <Text className={styles.text1}> Buy </Text>
                <Text
                  className={styles.text1}
                  fontSize={"12px"}
                  mt={"8px"}
                  marginLeft={"5px"}
                >
                  <AiOutlineRight />
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* third image section */}

      <Box className={styles.pre}>
        <box className={styles.watch}>
          <Flex justifyContent={"center"} gap={"2px"} pt={"50px"}>
            <Text fontSize={"50px"}>
              <AiFillApple />
            </Text>
            <Text>WATCH</Text>
          </Flex>
        </box>
        <Text color={"red"} fontSize={"20px"} letterSpacing={"2px"} ml={"22px"}>
          SERIES 8
        </Text>
        <Text fontSize={"30px"} color="white">
          A healthy leap ahead
        </Text>

        <Box w={"18%"} m={"auto"}>
          <Flex justifyContent={"space-between"}>
            <Box w={"70%"} margin={"auto"}>
              <Flex alignItems={"center"}>
                <Text className={styles.text1}>Learn more </Text>
                <Text
                  className={styles.text1}
                  fontSize={"13px"}
                  mt={"8px"}
                  marginLeft={"5px"}
                >
                  <AiOutlineRight />
                </Text>
              </Flex>
            </Box>
            <Box w={"40%"} margin={"auto"}>
              <Flex alignItems={"center"} justifyContent={"center"}>
                <Text className={styles.text1}> Buy </Text>
                <Text
                  className={styles.text1}
                  fontSize={"13px"}
                  mt={"8px"}
                  marginLeft={"5px"}
                >
                  <AiOutlineRight />
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={3}
        h={"auto"}
        width={"98%"}
        margin={"auto"}
        marginTop={"10px"}
      >
        <GridItem height={"550px"} className={styles.gridcol1}>
          <Text className={styles.ipad} fontSize={"35px"}>
            iPad
          </Text>
          <Text fontSize={"23px"} cursor={"pointer"}>
            Lovable. Drwable. Magical
          </Text>
          <Box w={"28%"} m={"auto"}>
            <Flex justifyContent={"space-between"}>
              <Box w={"80%"} margin={"auto"}>
                <Flex alignItems={"center"}>
                  <Text className={styles.text1} fontSize={"17px"}>
                    Learn more{" "}
                  </Text>
                  <Text
                    className={styles.text1}
                    fontSize={"11px"}
                    mt={"5px"}
                    marginLeft={"5px"}
                  >
                    <AiOutlineRight />
                  </Text>
                </Flex>
              </Box>
              <Box w={"40%"} margin={"auto"}>
                <Flex alignItems={"center"} justifyContent={"center"}>
                  <Text className={styles.text1} fontSize={"17px"}>
                    {" "}
                    Buy{" "}
                  </Text>
                  <Text
                    className={styles.text1}
                    fontSize={"11px"}
                    mt={"5px"}
                    marginLeft={"5px"}
                  >
                    <AiOutlineRight />
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </GridItem>
        <GridItem height={"550px"} className={styles.gridcol2}>
          <Text className={styles.mac}>MacBook Pro</Text>
          <Text color={"white"} fontSize={"22px"}>
            Surcharged by M2 Pro and M2 Max
          </Text>
          <Box w={"28%"} m={"auto"}>
            <Flex justifyContent={"space-between"}>
              <Box w={"80%"} margin={"auto"}>
                <Flex alignItems={"center"}>
                  <Text className={styles.text1} fontSize={"17px"}>
                    Learn more{" "}
                  </Text>
                  <Text
                    className={styles.text1}
                    fontSize={"11px"}
                    mt={"5px"}
                    marginLeft={"5px"}
                  >
                    <AiOutlineRight />
                  </Text>
                </Flex>
              </Box>
              <Box w={"40%"} margin={"auto"}>
                <Flex alignItems={"center"} justifyContent={"center"}>
                  <Text className={styles.text1} fontSize={"17px"}>
                    {" "}
                    Buy{" "}
                  </Text>
                  <Text
                    className={styles.text1}
                    fontSize={"11px"}
                    mt={"5px"}
                    marginLeft={"5px"}
                  >
                    <AiOutlineRight />
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </GridItem>
        <GridItem height={"550px"} className={styles.gridcol3}>
          <Text className={styles.ipad} color={"white"} fontSize={"35px"}>
            HomePod
          </Text>
          <Text fontSize={"20px"} cursor={"pointer"} color={"white"}>
            Profound Sound.
          </Text>
          <Box w={"28%"} m={"auto"}>
            <Flex justifyContent={"space-between"}>
              <Box w={"80%"} margin={"auto"}>
                <Flex alignItems={"center"}>
                  <Text className={styles.text1} fontSize={"17px"}>
                    Learn more{" "}
                  </Text>
                  <Text
                    className={styles.text1}
                    fontSize={"11px"}
                    mt={"5px"}
                    marginLeft={"5px"}
                  >
                    <AiOutlineRight />
                  </Text>
                </Flex>
              </Box>
              <Box w={"40%"} margin={"auto"}>
                <Flex alignItems={"center"} justifyContent={"center"}>
                  <Text className={styles.text1} fontSize={"17px"}>
                    {" "}
                    Buy{" "}
                  </Text>
                  <Text
                    className={styles.text1}
                    fontSize={"11px"}
                    mt={"5px"}
                    marginLeft={"5px"}
                  >
                    <AiOutlineRight />
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </GridItem>

        <GridItem height={"550px"} className={styles.gridcol4}>
          <Text className={styles.ipad} fontSize={"35px"}>
            AirPods Pro
          </Text>
          <Text fontSize={"23px"} cursor={"pointer"}>
            Upto 2x more
          </Text>
          <Text fontSize={"23px"} cursor={"pointer"}>
            Active Noise Cancellation.
          </Text>
          <Box w={"28%"} m={"auto"}>
            <Flex justifyContent={"space-between"}>
              <Box w={"80%"} margin={"auto"}>
                <Flex alignItems={"center"}>
                  <Text
                    className={styles.text1}
                    fontSize={"17px"}
                    color={"white"}
                  >
                    Learn more{" "}
                  </Text>
                  <Text
                    className={styles.text1}
                    fontSize={"11px"}
                    color={"white"}
                    mt={"5px"}
                    marginLeft={"5px"}
                  >
                    <AiOutlineRight />
                  </Text>
                </Flex>
              </Box>
              <Box w={"40%"} margin={"auto"}>
                <Flex alignItems={"center"} justifyContent={"center"}>
                  <Text
                    className={styles.text1}
                    fontSize={"17px"}
                    color={"white"}
                  >
                    {" "}
                    Buy{" "}
                  </Text>
                  <Text
                    className={styles.text1}
                    fontSize={"11px"}
                    color={"white"}
                    mt={"5px"}
                    marginLeft={"5px"}
                  >
                    <AiOutlineRight />
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </GridItem>

        <GridItem height={"600px"} className={styles.gridcol5}>
          <box className={styles.watch}>
            <Flex justifyContent={"center"} gap={"2px"} pt={"50px"}>
              <Text fontSize={"50px"} color={"black"}>
                <AiFillApple />
              </Text>
              <Text color={"black"}>Fitness+</Text>
            </Flex>
          </box>
          <Text fontSize={"20px"}>Welcome to the year of you.</Text>
          <Text fontSize={"20px"}>Now all you need is iPhone.</Text>
          <Box w={"36%"} m={"auto"}>
            <Flex justifyContent={"space-between"}>
              <Box w={"80%"} margin={"auto"}>
                <Flex alignItems={"center"}>
                  <Text className={styles.text1} fontSize={"17px"}>
                    Learn more{" "}
                  </Text>
                  <Text
                    className={styles.text1}
                    fontSize={"11px"}
                    mt={"5px"}
                    marginLeft={"5px"}
                  >
                    <AiOutlineRight />
                  </Text>
                </Flex>
              </Box>
              <Box w={"80%"} margin={"auto"}>
                <Flex alignItems={"center"} justifyContent={"center"}>
                  <Text className={styles.text1} fontSize={"17px"}>
                    Try it free{" "}
                  </Text>
                  <Text
                    className={styles.text1}
                    fontSize={"11px"}
                    mt={"5px"}
                    marginLeft={"5px"}
                  >
                    <AiOutlineRight />
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </GridItem>
        <GridItem height={"600px"} className={styles.gridcol6}>
          <box className={styles.watch}>
            <Flex justifyContent={"center"} gap={"2px"} pt={"50px"}>
              <Text fontSize={"50px"} color={"black"}>
                <AiFillApple />
              </Text>
              <Text color={"black"}>Card</Text>
            </Flex>
          </box>
          <Text fontSize={"20px"}>Get upto 3% Daily Cash back</Text>
          <Text fontSize={"20px"}>with every purchase</Text>
          <Box w={"36%"} m={"auto"}>
            <Flex justifyContent={"space-between"}>
              <Box w={"80%"} margin={"auto"}>
                <Flex alignItems={"center"}>
                  <Text className={styles.text1} fontSize={"17px"}>
                    Learn more{" "}
                  </Text>
                  <Text
                    className={styles.text1}
                    fontSize={"11px"}
                    mt={"5px"}
                    marginLeft={"5px"}
                  >
                    <AiOutlineRight />
                  </Text>
                </Flex>
              </Box>
              <Box w={"80%"} margin={"auto"}>
                <Flex alignItems={"center"} justifyContent={"center"}>
                  <Text className={styles.text1} fontSize={"17px"}>
                    Apply now{" "}
                  </Text>
                  <Text
                    className={styles.text1}
                    fontSize={"11px"}
                    mt={"5px"}
                    marginLeft={"5px"}
                  >
                    <AiOutlineRight />
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
      <Box border height={"500px"} width={"90%"} margin={"auto"} mt = {"12px"}>
        <Carousel />
      </Box>

<Box w={"100%"} bg="#f5f5f7" mt={"-10px"}>
  <Box w = {"80%"} margin = {"auto"}>
    <Flex flexDirection={"column"}>
  <Text fontSize={"13px"} pt = {"20px"} color = {"grey"} >
       1.Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices.</Text>

       <Text fontSize={"13px"} pt = {"10px"} color = {"grey"}>2. Apple Fitness+ requires iPhone 8 or later, or Apple Watch Series 3 or later paired with iPhone 6s or later. New subscribers only. $9.99/month after trial. Plan automatically renews until cancelled.</Text>

       <Text fontSize={"13px"} pt = {"10px"} color = {"grey"}> A subscription is required for Apple Fitness+.</Text>

       <Text fontSize={"13px"} pt = {"10px"} color = {"grey"}> Apple Fitness+ requires an iPhone 8 or later with iOS 16.1.</Text>

       <Text fontSize={"13px"} pt = {"10px"} color = {"grey"} pb = {"30px"}>Apple Fitness+ requires an Apple Watch Series 3 or later. Available when paired with iPhone 6s or later with iOS 14.3 or later.</Text>
       </Flex>
</Box>
       </Box>
    </Box>
  );
};

export default Home;
