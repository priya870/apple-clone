import {
  Box,
  Text,
  Flex,
  Input,
  Select,
  Stack,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const Register = () => {
  const [first_Name, setFirst_Name] = useState("");
  const [last_Name, setLast_Name] = useState("");
  const [country, setCountry] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [number, setNumber] = useState("+91");

  let data = JSON.parse(localStorage.getItem("data")) || [];

  const handleContinue = (e) => {
    e.preventDefault();

    let newData = {
      first_Name: first_Name,
      last_Name: last_Name,
      country: country,
      dob: dob,
      email: email,
      password: password,
      confirmPass: confirmPass,
      number: number,
    };
    data.push(newData);
    console.log(data);
    
    localStorage.setItem("data",JSON.stringify(data))
  };
  return (
    <Box>
      <Box w="80%" m="auto" p="10px">
        <Flex justifyContent="space-between" alignItems={"center"}>
          <Box>
            <Text>Apple ID</Text>
          </Box>
          <Box w="25%" h="20px">
            <Flex justifyContent="space-between">
              <Box>
                <Text fontSize={"13px"}>sign in</Text>
              </Box>
              <Box>
                <Text fontSize={"13px"}>Create Your Apple ID</Text>
              </Box>
              <Box>
                <Text fontSize={"13px"}> FAQ</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <hr></hr>
      <Text
        textAlign={"center"}
        fontSize="40px"
        fontWeight={"600"}
        fontFamily={"sans-serif"}
        mt="20px"
      >
        Create Your Apple ID
      </Text>

      <Text textAlign={"center"} fontSize="19px">
        One Apple ID is all you need to access all Apple services.
      </Text>

      <Text textAlign={"center"} fontSize="19px">
        You already have an Apple ID?{" "}
        <span style={{ color: "blue", cursor: "pointer" }}>Find it here</span>{" "}
      </Text>

      <Box w="35%" m="auto" mt="20px" h="auto" pb="40px">
        <Flex justifyContent={"space-between"} gap="10px">
          <Input
            type="text"
            placeholder="First Name"
            size="lg"
            value={first_Name}
            onChange={(e) => setFirst_Name(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Last Name"
            size="lg"
            value={last_Name}
            onChange={(e) => setLast_Name(e.target.value)}
          />
            {" "}
          
        </Flex>

        <Text fontSize={"20px"} p="10px">
          Country/Region
        </Text>

        <Select
          size="lg"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="option1">India</option>
          <option value="option2">China</option>
          <option value="option3">Bangladesh</option>
          <option value="option4">USA</option>
          <option value="option5">UK</option>
        </Select>
        <br></br>

        <Input
          type="date"
          placeholder="dob"
          size="lg"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <Input
          type="email"
          placeholder="Email"
          mt="20px"
          size="lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          mt="20px"
          size="lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Confirm Password"
          mt="20px"
          size="lg"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />

        <Select size="lg" mt="20px" placeholder="+91(India)">
          <option value="option1">+36(Hungary)</option>
          <option value="option2">+354(Iceland)</option>
          <option value="option3">+81(Japan)</option>
        </Select>

        <Input
          type="number"
          placeholder="Mobile Number"
          mt="20px"
          size="lg"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <Text mt="14px">
          Make sure you enter a phone number you can always access. It will be
          used to verify your identity any time you sign in on a new device or
          web browser. Messaging or data rates may apply.
        </Text>

        <Stack spacing={10} direction="row" mt="20px">
          <Text fontSize={"20px"}>Verify with a :</Text>
          <Checkbox colorScheme="red" defaultChecked>
            Text Message
          </Checkbox>
          <Checkbox colorScheme="green" defaultChecked>
            Phone Call
          </Checkbox>
        </Stack>

        <Box
          width="20%"
          m="auto"
          mt="40px"
          h="50px"
          bgImage="url('https://appleid.cdn-apple.com/static/bin/cb1900903086/dist/assets/privacy-icon.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
        ></Box>

        <Text fontSize={"12px"} mt="16px">
          Your Apple ID information is used to allow you to sign in securely and
          access your data. Apple records certain data for security, support and
          reporting purposes. If you agree, Apple may also use your Apple ID
          information to send you marketing emails and communications, including
          based on your use of Apple services.{" "}
          <span style={{ color: "blue" }}>See how your data is managed.</span>
        </Text>

        <Button
          w={"30%"}
          mt="6%"
          ml="35%"
          p="10px"
          color={"white"}
          bgColor="#519EEC"
          onClick={handleContinue}
        >
          {" "}
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
