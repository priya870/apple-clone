import { Box, Flex, Text, Input, Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [flag, setFlag] = useState(false);

  let data = JSON.parse(localStorage.getItem("data")) || [];

  const handleLogin = (e) => {
    e.preventDefault();

    data.forEach((e) => {
      if (e.password === pass && e.email === email) {
        setFlag(true);
      }
    });
    if (flag) {
      alert("login success");
      localStorage.setItem("loginSuccess",flag);
    } else {
      alert("login fail");
    }
  };
  return (
    <Box>
      <Box h="600px" width={"100%"}>
        <Text
          textAlign={"center"}
          fontSize={"40px"}
          mt={"20px"}
          fontWeight={"bold"}
          color="#2C1E4D"
          fontFamily={"sans-serif"}
        >
          Sign in for faster checkout.
        </Text>

        <Box width={"50%"} m="auto" mt="50px" h={"400px"} boxShadow={"2xl"}>
          <Flex justifyContent={"space-between"}>
            <Box
              w="45%"
              bgImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1pzKVHI0pg8hcVqYnAaKHfuWHcL6Totsldg&usqp=CAU')"
              bgPosition="center"
              bgRepeat="no-repeat"
            ></Box>

            <Box w="52%" p={"20px"}>
              <Text
                textAlign={"center"}
                mt={"30px"}
                fontSize={"30px"}
                fontFamily={"cursive"}
              >
                {" "}
                Login Here.
              </Text>
              <Input
                mt={"30px"}
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                mt={"20px"}
                type="password"
                placeholder="Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />

              <Text
                mt={"20px"}
                color="blue"
                _hover={{ textDecoration: "underline" }}
                cursor="pointer"
              >
                Forgot Password
              </Text>

              <Button
                mt={"20px"}
                ml="20px"
                w="80%"
                bgColor="#993b7c"
                color="white"
                onClick={handleLogin}
              >
                Login
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
