import {Button, Flex, FormControl, Heading, Link} from "@chakra-ui/react";
import {Formik} from "formik";
import registerSchema from "../../lib/schemas/registerSchema";
import CustomInput from "../../components/Input/CustomInput";
import NextLink from "next/link";
import React from "react";
import AuthLayout from "./_layout";

const Register = () => {

  return (
    <AuthLayout>
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
        handleSubmit, isSubmitting, isValid, dirty
      }) => (<Flex
        flexDir={"column"}
        justifyContent={"center"}
        minH={"full"}
        px={{base: 4, lg: 16}}
        pb={{base: 4, lg: 8}}
        pt={12}
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
          <Flex
            flexDir={{base: "column", md: "row"}}
            gap={4}
          >
            <CustomInput label={"Pincode"} type={"number"} name={"pincode"}/>
            <CustomInput label={"Phone"} type={"number"} name={"phone"}/>
          </Flex>
          <Button
            type='submit'
            onClick={handleSubmit}
            isLoading={isSubmitting}
            disabled={isSubmitting}
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
      </Flex>)}
      </Formik>
    </AuthLayout>
  );
};

export default Register;