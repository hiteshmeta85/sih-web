import React from 'react';
import LandingPageLayout from "./_layout";
import {Box, Flex, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import {Form, Formik} from "formik";
import contactSchema from "../lib/schemas/contactSchema";
import CustomInput from "../components/Input/CustomInput";
import CustomSubmitButton from "../components/Button/CustomSubmitButton";
import CustomSelect from "../components/Select/CustomSelect";
import SearchAndMarkLocation from "../components/Map/SearchAndMarkLocation";
import {labelOptions} from "../constants/useful-data/labelOptions";

const Contact = () => {

  const customStyle = {border: '1px solid lightgray', borderRadius: '5px', padding: '0.3rem 0.7rem'}

  return (
    <LandingPageLayout>
      <Box bg={'white'}>
        <Box maxW={'container.xl'} mx={'auto'} p={{base: 2, md: 4, lg: 8}}>
          <Formik
            initialValues={{
              first: '',
              last: '',
              email: '',
              message: '',
              labels: [],
              geolocation_lat: '',
              geolocation_lng: '',
              phone: '',
              address: '',
            }}
            validationSchema={contactSchema}
            onSubmit={(values, {setSubmitting}) => {
              setSubmitting(false);
              console.log(values)
            }}
          >
            {({
              handleSubmit, isSubmitting, isValid, dirty, setFieldValue, values
            }) => (
              <Form>
                <Box>
                  <Heading>Contact Us</Heading>
                  <Text fontWeight={'semibold'} color={'gray.600'}>Our team is here to help you!</Text>
                </Box>
                <SimpleGrid columns={{base: 1, lg: 2}} gap={{base: 4, md: 6}} my={6}>
                  <Flex flexDir={'column'} gap={4}>
                    <SimpleGrid columns={{base: 1, md: 2}} gap={4}>
                      <CustomInput name={'first'} label={'First Name'} placeholder={'John'} type={'text'} styles={customStyle}/>
                      <CustomInput name={'last'} label={'Last Name'} placeholder={'Doe'} type={'text'} styles={customStyle}/>
                    </SimpleGrid>
                    <CustomInput name={'email'} label={'Email'} placeholder={'johndoe@gmail.com'} type={'email'} styles={customStyle}/>
                    <CustomInput name={'phone'} label={'Phone Number'} type={'number'} styles={customStyle}/>
                    <CustomInput name={'message'} label={'Message'} placeholder={'Please specify how can we help you?'} type={'text'} as={'textarea'} rows={5} styles={customStyle}/>
                    <CustomSelect name={'labels'} label={'Select Labels'} options={labelOptions} placeholder={'Select Labels...'} styles={customStyle}/>
                  </Flex>
                  <Box>
                    {/*<ClusterMap/>*/}
                    <SearchAndMarkLocation label={'Provide your address'} setFieldValue={setFieldValue}/>
                  </Box>
                </SimpleGrid>
                <CustomSubmitButton label={'Submit'} handleSubmit={handleSubmit} isSubmitting={isSubmitting}/>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </LandingPageLayout>
  );
};

export default Contact;