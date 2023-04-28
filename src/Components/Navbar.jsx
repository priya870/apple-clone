import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsApple } from "react-icons/bs";
import { BsSearch, BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
const Navbar = () => {
  let login = JSON.parse(localStorage.getItem("loginSuccess")) || false;
  return (
    // <div>Navbar</div>
    <Box h="40px" py={"5px"} bg="#434344" color={"white"} position={"sticky"}>
      <Flex justifyContent={"center"} alignItems="center" gap="2%">
        <BsApple />

        <Link to={"/store"}>
          <Text>Store</Text>
        </Link>
        <Link to={"/mac"}>
          <Text>Mac</Text>
        </Link>
        <Text>iPad</Text>
        <Text>iPhone</Text>
        <Text>Watch</Text>
        <Text>AirPods</Text>
        <Text>Tv & Home</Text>
        <Text>Entertainment</Text>
        <Text>Accessories</Text>

        <Link to = {"/register"}><Text>Register</Text></Link>
        <Link to={"/login"}>
          {login?(<Text onClick={()=>{
            login = false;
            localStorage.setItem("loginSuccess",JSON.stringify(login))
          }}>Logout</Text>):(<Text>Login</Text>)}
        </Link>
        <BsSearch />
        <BsBag />
      </Flex>
    </Box>
  );
};

export default Navbar;
