import React from 'react';
import LandingPageLayout from "./_layout";
import {Box, Flex, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import {Form, Formik} from "formik";
import contactSchema from "../lib/schemas/contactSchema";
import CustomInput from "../components/Input/CustomInput";
import CustomSubmitButton from "../components/Button/CustomSubmitButton";
import CustomSelect from "../components/Select/CustomSelect";
import SearchPlacesMap from "../components/Map/SearchPlacesMap";

const labelOptions = [
  {
    label: 'Emergency',
    value: 'Emergency',
  },
  {
    label: 'Hospital',
    value: 'Hospital',
  },
  {
    label: 'Relief Camp',
    value: 'ReliefCamp',
  },
  {
    label: 'Danger Zone',
    value: 'DangerZone',
  },
  {
    label: 'Evacuation',
    value: 'Evacuation',
  },
]

const Contact = () => {

  const customStyle = {border :'1px solid lightgray', borderRadius: '5px', padding: '0.3rem 0.7rem'}

  return (
    <LandingPageLayout>
      <Box bg={'white'}>
        <Box maxW={'container.xl'} mx={'auto'} p={{base: 2, md: 4, lg: 8}}>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
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
                <SimpleGrid columns={{base: 1, lg: 2}} gap={{base: 4, md: 6}} mt={6}>
                  <Flex flexDir={'column'} gap={4}>
                    <SimpleGrid columns={{base: 1, md: 2}} gap={4}>
                      <CustomInput name={'firstName'} label={'First Name'} placeholder={'John'} type={'text'} styles={customStyle}/>
                      <CustomInput name={'lastName'} label={'Last Name'} placeholder={'Doe'} type={'text'} styles={customStyle}/>
                    </SimpleGrid>
                    <CustomInput name={'email'} label={'Email'} placeholder={'johndoe@gmail.com'} type={'email'} styles={customStyle}/>
                    <CustomInput name={'phone'} label={'Phone Number'} type={'number'} styles={customStyle}/>
                    <CustomInput name={'message'} label={'Message'} placeholder={'Please specify how can we help you?'} type={'text'} as={'textarea'} rows={5} styles={customStyle}/>
                    <CustomSelect name={'labels'} label={'Select Labels'} options={labelOptions} placeholder={'Select Labels...'} styles={customStyle}/>
                    <CustomSubmitButton label={'Submit'} handleSubmit={handleSubmit} isSubmitting={isSubmitting} styles={customStyle}/>
                  </Flex>
                  <Box>
                    <SearchPlacesMap label={'Provide your address'} setFieldValue={setFieldValue}/>
                  </Box>
                </SimpleGrid>
              </Form>)}
          </Formik>
        </Box>
      </Box>
    </LandingPageLayout>
  );
};

export default Contact;