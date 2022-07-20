import React from 'react';
import {Button, Flex, FormControl, Heading, Link} from "@chakra-ui/react";
import {Formik} from "formik";
import loginSchema from "../../lib/schemas/loginSchema";
import CustomInput from "../../components/Input/CustomInput";
import NextLink from "next/link";
import AuthLayout from "./_layout";

const Login = () => {

  return (
    <AuthLayout>
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
          px={{base: 4, lg: 16}}
          pb={{base: 4, lg: 8}}
          pt={12}
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
              disabled={isSubmitting}
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
    </AuthLayout>
  );
};

export default Login;