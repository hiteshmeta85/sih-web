import React, {useEffect, useState} from 'react';
import {Box, Button, Flex, FormControl, Heading, Link, Text} from "@chakra-ui/react";
import {Formik} from "formik";
import loginSchema from "../../lib/schemas/loginSchema";
import CustomInput from "../../components/Input/CustomInput";
import NextLink from "next/link";
import Image from "next/image";
import slide1 from "./slide1.jpg"
import slide2 from "./slide2.jpg"
import slide3 from "./slide3.jpg"

const Login = () => {

  // const slideItems = [
  //   {
  //     id: 1,
  //     src: slide1,
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  //   },
  //   {
  //     id: 2,
  //     src: slide2,
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  //   },
  //   {
  //     id: 3,
  //     src: slide3,
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  //   }
  // ]

  // const [currentSlide, setCurrentSlide] = useState(1)
  //
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (currentSlide === 3) {
  //       setCurrentSlide(1)
  //     } else {
  //       setCurrentSlide(currentSlide + 1)
  //     }
  //   }, 5000)
  // }, [currentSlide])

  return (
    <Flex
      maxHeight={"100vh"}
      alignItems={"stretch"}
    >
      <Box
        flex={3}
        overflowY={"scroll"}
        maxW={"container.sm"}
        mx={"auto"}
      >
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={(values, {setSubmitting}) => {
            setSubmitting(false);
            console.log(values)
          }}
        >{({
          handleSubmit,
          isSubmitting,
          isValid,
          dirty
        }) => (
          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            minHeight={"full"}
            px={{base:4, lg:8}}
            py={{base:4, lg:8}}
          >
            <Heading>Login</Heading>
            <FormControl
              display={"flex"}
              flexDir={"column"}
              gap={6}
              my={10}
            >
              <CustomInput label={"Email"} type={"email"} name={"email"}/>
              <CustomInput label={"Password"} type={"password"} name={"password"}/>
              <Button
                type='submit'
                onClick={handleSubmit}
                // disabled={!(isValid && dirty)}
                isLoading={isSubmitting}
                w='100%'
                bg='blackAlpha.900'
                color='white'
                _hover={{bg: 'blackAlpha.800'}}
              >
                Login
              </Button>
            </FormControl>
            <NextLink href={"/auth/register"}>
              <Link
                fontWeight='semibold'
                textAlign='center'
                color={"gray.500"}
                _hover={{color: 'gray.600'}}
                fontSize='sm'
              >
                Create an account.
              </Link>
            </NextLink>
          </Flex>
        )}
        </Formik>
      </Box>
      <Flex
        flex={5}
        height={"100vh"}
        pos={"relative"}
        transition={"all"}
        transitionTimingFunction={"ease-in-out"}
        transitionDuration={"0.5s"}
        display={{base:"none",lg:"flex"}}
        //opacity={currentSlide === 1 ? 1 : 0}
      >
        <Image src={slide1} alt='Disaster Image' objectFit={'cover'}/>
        <Flex
          height={"full"}
          flexDir={"column"}
          pos={'absolute'}
          justifyContent={"space-around"}
          top={0}
          paddingX={12}
        >
          <Text
            fontSize={"2rem"}
            fontWeight={600}
          >
            Lorem ipsum dolor sit amet, Ut non mattis enim. Vivamus quis ultrices orci.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;