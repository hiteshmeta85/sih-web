import React, {useState} from 'react';
import DashboardContainer from "../_layout"
import {Box, Flex, FormLabel, SimpleGrid, Text} from "@chakra-ui/react";
import {ErrorMessage, Form, Formik} from "formik";
import CustomSubmitButton from "../../../components/Button/CustomSubmitButton";
import CustomInput from "../../../components/Input/CustomInput";
import alertSchema from "../../../lib/schemas/alertSchema";
import CustomSelect from "../../../components/Select/CustomSelect";
import SearchPlacesMap from "../../../components/Map/SearchPlacesMap";

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

const severityTypes = [
  {
    label: 'High',
    value: 'high',
    color: 'OrangeRed',
  },
  {
    label: 'Medium',
    value: 'medium',
    color: 'orange',
  },
  {
    label: 'Low',
    value: 'low',
    color: 'gold'
  }
]

const Index = () => {

  return (
    <DashboardContainer title={'Alert'}>
      <Box
        borderRadius={'md'}
        p={{base: 2, md: 4, lg: 6}}
        bg={'white'}
      >
        <Formik
          initialValues={{
            title: '',
            description: '',
            geolocation_lat: '',
            geolocation_lng: '',
            labels: [],
            severityType: '',
            address: '',
          }}
          validationSchema={alertSchema}
          onSubmit={(values, {setSubmitting}) => {
            setSubmitting(false);
            console.log(values)
          }}
        >
          {({
            handleSubmit, isSubmitting, isValid, dirty, setFieldValue, values
          }) => (
            <Form>
              <Flex
                flexDir={'column'}
                alignItems={'stretch'}
                gap={4}
                my={6}
              >
                <Flex
                  flexDir={{base: 'column', md: 'row'}}
                  gap={{base: 2, md: 4, lg: 8}}
                >
                  <Flex flexDir={'column'} flex={1} gap={4}>
                    <CustomInput name={'title'} type={'text'} label={'Title'}/>
                    <CustomInput name={'description'} as={'textarea'} type={'text'} label={'Description'} rows={5}/>
                    <CustomSelect name={'labels'} label={'Select Labels'} options={labelOptions} placeholder={'Select Labels...'}/>
                  </Flex>
                  <Box>
                    <FormLabel style={{fontWeight: 600}}>Select Severity</FormLabel>
                    <Flex gap={4}>
                      <>
                        {severityTypes.map((item, index) => {
                          return (
                            <Flex
                              key={index}
                              onClick={() => setFieldValue("severityType", `${item.value}`)}
                              alignItems={'center'}
                              gap={2}
                              cursor={'pointer'}
                              border={'1px'}
                              borderStyle={'dashed'}
                              borderColor={values.severityType === `${item.value}` ? "lightgray" : "transparent"}
                              borderRadius={'md'}
                              p={2}
                            >
                              <Box p={3} bg={item.color} borderRadius={'full'}/>
                              <Text fontWeight={'semibold'}>{item.label}</Text>
                            </Flex>
                          )
                        })}
                      </>
                    </Flex>
                    <Box color={'gray.500'} fontSize={'xs'} mt={2} fontWeight={'semibold'}>
                      <ErrorMessage name={"severityType"}/>
                    </Box>
                  </Box>
                </Flex>
                <SearchPlacesMap label={'Search Geolocation'} setFieldValue={setFieldValue}/>
              </Flex>
              <CustomSubmitButton label={'Submit'} isSubmitting={isSubmitting} handleSubmit={handleSubmit}/>
            </Form>
          )}
        </Formik>
      </Box>
    </DashboardContainer>
  );
};

export default Index;