import {Box, Button, Flex, FormControl, Heading, Link, Text} from "@chakra-ui/react";
import {Formik} from "formik";
import registerSchema from "../../lib/schemas/registerSchema";
import CustomInput from "../../components/Input/CustomInput";
import NextLink from "next/link";
import Image from "next/image";
import slide3 from "./slide3.jpg"

const Register = () => {

  return (
    <Flex
      height={"100vh"}
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
            name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            address: '',
            pincode: '',
            phone: '',
          }}
          validationSchema={registerSchema}
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
            minH={"full"}
            px={{base:4, lg:8}}
            py={{base:4, lg:8}}
          >
            <Heading>Register</Heading>
            <FormControl
              display={"flex"}
              flexDir={"column"}
              gap={4}
              my={6}
            >
              <CustomInput label={"Name"} type={"text"} name={"name"}/>
              <CustomInput label={"Email"} type={"email"} name={"email"}/>
              <CustomInput label={"Password"} type={"password"} name={"password"}/>
              <CustomInput label={"Confirm Password"} type={"password"} name={"passwordConfirmation"}/>
              <CustomInput label={"Address"} type={"text"} name={"address"}/>
              <CustomInput label={"Pincode"} type={"number"} name={"pincode"}/>
              <CustomInput label={"Phone"} type={"number"} name={"phone"}/>
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
                Create Account
              </Button>
            </FormControl>
            <NextLink href={"/auth/login"}>
              <Link
                fontWeight='semibold'
                textAlign='center'
                color={"gray.500"}
                _hover={{color: 'gray.600'}}
                fontSize='sm'
              >
                Already have an account? Login
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
        <Image src={slide3} alt='Disaster Image' objectFit={'cover'}/>
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

export default Register;