import {
  Box,
  Flex,
  Image,
  Icon,
  Center,
  Input,
  Checkbox,
  Button,
  ButtonGroup,
  InputRightElement,
  InputGroup,
  Select,
  Radio,
} from "@chakra-ui/react";
import logo from "../assets/spotify-logo2.png";
import { BsApple, BsFacebook, BsGift, BsGoogle } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Favicon from "react-favicon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth_types } from "../redux/types";
import { TbAlertCircleFilled } from "react-icons/tb";

export default function RegisterPage() {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  // useEffect(() => {
  //   const kue = JSON.parse(localStorage.getItem("user"));
  //   if (kue?.email && kue?.password ? nav("/") : nav("/login"));
  // }, []);

  function inputHandler(event) {
    const { value, id } = event.target;
    const tempAccount = { ...account };
    tempAccount[id] = value;
    setAccount(tempAccount);
  }
  const [seePassword, setSeePassword] = useState(false);

  function login() {
    if (account.email && account.password) {
      dispatch({
        type: auth_types.login,
        payload: account,
      });

      localStorage.setItem("user", JSON.stringify(account));

      return nav("/");
    }
    alert("wajib isi email & password");
  }

  const month = [
    {
      name: "January",
      number: 1,
    },
    {
      name: "February",
      number: 2,
    },
    {
      name: "March",
      number: 3,
    },
    {
      name: "April",
      number: 4,
    },
    {
      name: "May",
      number: 5,
    },
    {
      name: "June",
      number: 6,
    },
    {
      name: "July",
      number: 7,
    },
    {
      name: "August",
      number: 8,
    },
    {
      name: "September",
      number: 9,
    },
    {
      name: "October",
      number: 10,
    },
    {
      name: "November",
      number: 11,
    },
    {
      name: "December",
      number: 12,
    },
  ];

  return (
    <>
      <Favicon url="https://w7.pngwing.com/pngs/548/814/png-transparent-spotify-logo-graphic-design-music-lp-records-logo-monochrome-music-download.png" />
      <Center flexDir={"column"} w={"100vw"}>
        <Center
          flexDir={"column"}
          width={"100%"}
          maxW={"450px"}
          color={"whiteAlpha.800"}
          gap={"10px"}
          height={"100px"}
          paddingX={"24px"}
        >
          <Image src={logo} w={"130px"} h={"40px"} />
        </Center>

        <Center
          w={"100%"}
          maxW={"450px"}
          fontSize={"13px"}
          color={"RGBA(255, 255, 255, 0.92)"}
          flexDir={"column"}
          gap="10px"
          paddingX={"10px"}
        >
          <Center fontWeight={"600"} fontSize={"14px"} color={"black"}>
            {" "}
            <a style={{ width: "100%" }} href="/sidebar">
              <Center
                w={"100%"}
                h={"48px"}
                fontWeight={"700"}
                fontSize={"24px"}
              >
                <Center>Sign up for free to start listening.</Center>
              </Center>
            </a>
          </Center>

          <Center
            w={"100%"}
            maxW={"312px"}
            bgColor={"facebook.600"}
            h={"48px"}
            fontWeight={"700"}
            borderRadius={"25px"}
            gap={"10px"}
            border={"1px solid #A5A5A5"}
            cursor={"pointer"}
          >
            <Icon w={"20px"} h={"20px"} as={BsFacebook}></Icon>
            <Center>Sign Up with Facebook</Center>
          </Center>

          <Center
            w={"100%"}
            maxW={"312px"}
            bgColor="white"
            h={"48px"}
            fontWeight={"700"}
            borderRadius={"25px"}
            gap={"10px"}
            color={"#535353"}
            border={"3px solid #535353"}
            cursor={"pointer"}
          >
            <Icon w={"20px"} h={"20px"} as={FcGoogle}></Icon>
            <Center>Sign up with Google</Center>
          </Center>

          <Center
            w={"100%"}
            maxW={"312px"}
            h={"48px"}
            color={"#7F7F7F"}
            gap={"12px"}
            fontWeight={"500"}
          >
            <Center w={"100%"}>
              <Box h="1px" w={"100%"} bgColor={"#D9DADC"}></Box>
            </Center>
            or
            <Center w={"100%"}>
              <Box h="1px" w={"100%"} bgColor={"#D9DADC"}></Box>
            </Center>
          </Center>

          <Flex w={"100%"} gap={"20px"} flexDir={"column"} color={"black"}>
            <Flex flexDir={"column"} gap={"5px"}>
              <Box fontWeight={"700"}>What's your email?</Box>
              <Input
                onChange={inputHandler}
                id="email"
                paddingLeft={"12px"}
                className="emailAddress"
                placeholder="Enter your Email.  "
                h={"40px"}
                borderRadius={"3px"}
                cursor={"text"}
              ></Input>
              <Flex color={"red"} gap={"5px"}>
                <Icon as={TbAlertCircleFilled} w="16px" h="16px"></Icon>
                You need to input your email.
              </Flex>
              <Box color={"#117A37"} textDecor={"underline"}>
                Use phone number instead
              </Box>
            </Flex>

            <Flex flexDir={"column"} gap={"5px"}>
              <Box fontWeight={"700"}>Confirm your email?</Box>
              <Input
                onChange={inputHandler}
                id="confirm-email"
                paddingLeft={"12px"}
                className="emailAddress"
                placeholder="Enter your Email again  "
                h={"40px"}
                borderRadius={"3px"}
                cursor={"text"}
              ></Input>
              <Flex color={"red"} gap={"5px"}>
                <Icon as={TbAlertCircleFilled} w="16px" h="16px"></Icon>
                You need to confirm your email
              </Flex>
            </Flex>

            <Flex flexDir={"column"} gap={"5px"}>
              <Box fontWeight={"700"}>Create Password</Box>

              <InputGroup size="md">
                <Input
                  onChange={inputHandler}
                  id="password"
                  type={seePassword ? "text" : "password"}
                  paddingLeft={"12px"}
                  className="password"
                  placeholder="Crate a Password."
                  h={"40px"}
                  borderRadius={"3px"}
                  cursor={"text"}
                ></Input>

                <InputRightElement w={"3.5rem"}>
                  <Icon
                    as={seePassword ? AiOutlineEye : AiOutlineEyeInvisible}
                    color={"#A5A5A5"}
                    w={"24px"}
                    h={"24px"}
                    cursor={"pointer"}
                    onClick={() => setSeePassword(!seePassword)}
                  ></Icon>
                </InputRightElement>
              </InputGroup>

              <Flex color={"red"} gap={"5px"}>
                <Icon as={TbAlertCircleFilled} w="16px" h="16px"></Icon>
                You need to enter a password.
              </Flex>
            </Flex>

            <Flex flexDir={"column"} gap={"5px"}>
              <Box fontWeight={"700"}>What should we call you?</Box>
              <Input
                onChange={inputHandler}
                id="profile"
                paddingLeft={"12px"}
                className="emailAddress"
                placeholder="Enter a profile name "
                h={"40px"}
                borderRadius={"3px"}
                cursor={"text"}
              ></Input>
              <Flex color={"red"} gap={"5px"}>
                <Icon as={TbAlertCircleFilled} w="16px" h="16px"></Icon>
                Enter a name for your profile.
              </Flex>
            </Flex>

            <Flex flexDir={"column"} gap={"5px"}>
              <Box fontWeight={"700"}>What's your date of birth?</Box>

              <Flex justifyContent={"space-between"} gap={"10px"}>
                <Input
                  maxW={"88px"}
                  onChange={inputHandler}
                  placeholder="DD "
                  w="100%"
                  id="day"
                ></Input>

                {/* <Input
                  onChange={inputHandler}
                  placeholder="Enter a profile name"
                  id="profile"
                ></Input> */}
                <Select placeholder="month" id="month">
                  {month.map((val) => (
                    <option value={val.number}>{val.name}</option>
                  ))}
                </Select>
                <Input
                  onChange={inputHandler}
                  placeholder="YYYY"
                  w="100%"
                  maxW={"88px"}
                  id="year"
                ></Input>
              </Flex>
              <Flex color={"red"} gap={"5px"}>
                <Icon as={TbAlertCircleFilled} w="16px" h="16px"></Icon>
                You need to input your email.
              </Flex>
              <Flex color={"red"} gap={"5px"}>
                <Icon as={TbAlertCircleFilled} w="16px" h="16px"></Icon>
                You need to input your email.
              </Flex>
              <Flex color={"red"} gap={"5px"}>
                <Icon as={TbAlertCircleFilled} w="16px" h="16px"></Icon>
                You need to input your email.
              </Flex>
            </Flex>

            <Flex flexDir={"column"} gap={"5px"}>
              <Box fontWeight={"700"}>What's your gender?</Box>
              <Input
                onChange={inputHandler}
                id="profile"
                paddingLeft={"12px"}
                className="emailAddress"
                placeholder="Enter a profile name "
                h={"40px"}
                borderRadius={"3px"}
                cursor={"text"}
              ></Input>

              <Flex
                w={"100%"}
                flexWrap={"wrap"}
                rowGap={"10px"}
                columnGap={"20px"}
              >
                <Radio colorScheme="green" value="Male">
                  Male
                </Radio>
                <Radio colorScheme="green" value="Female">
                  Female
                </Radio>
                <Radio colorScheme="green" value="Non-binary">
                  Non-binary
                </Radio>
                <Radio colorScheme="green" value="Other">
                  Other
                </Radio>
                <Radio colorScheme="green" value="Prefer not to say">
                  Prefer not to say
                </Radio>
              </Flex>
            </Flex>

            <Flex flexDir={"column"} gap={"5px"}>
              <a href="/forgotpassword">
                <Box
                  cursor={"pointer"}
                  textDecoration={"underline"}
                  fontWeight={"700"}
                  fontSize={"15px"}
                >
                  Forgot your password?
                </Box>
              </a>
            </Flex>
            <Flex
              paddingBottom={"24px"}
              borderBottom={"1px grey solid"}
              justifyContent={"space-between"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Checkbox colorScheme="green" />
                <Box paddingLeft={"10px"} fontWeight={"400"}>
                  Remember me
                </Box>
              </Box>
              {/* <Box h={"50px"} w={"200px"}></Box> */}
              <Box>
                <Button
                  h={"50px"}
                  w={"130px"}
                  borderRadius={"100px"}
                  colorScheme="whatsapp"
                  color={"black"}
                  cursor={"pointer"}
                >
                  LOG IN
                </Button>
              </Box>
            </Flex>
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              textAlign={"center"}
              fontSize={"18px"}
              paddingBottom={"15px"}
              fontWeight={"700"}
            >
              {" "}
              Don't have an account?
            </Flex>
            <Flex>
              <Button
                w={"100%"}
                borderRadius={"20px"}
                colorScheme="whiteAlpha"
                color={"grey"}
                variant={"outline"}
                fontWeight={"550"}
              >
                {" "}
                SIGN UP FOR SPOTIFY
              </Button>
            </Flex>
          </Flex>
        </Center>
      </Center>
    </>
  );
}
