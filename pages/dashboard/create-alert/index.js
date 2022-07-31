import React, {useState} from 'react';
import DashboardContainer from "../_layout"
import {Box, Flex, FormLabel, Text} from "@chakra-ui/react";
import {ErrorMessage, Form, Formik} from "formik";
import CustomSubmitButton from "../../../components/Button/CustomSubmitButton";
import CustomInput from "../../../components/Input/CustomInput";
import alertSchema from "../../../lib/schemas/alertSchema";
import CustomSelect from "../../../components/Select/CustomSelect";
import SearchPlacesMap from "../../../components/Map/SearchPlacesMap";
import axios from "axios";
import {labelOptions} from "../../../constants/useful-data/labelOptions";
import {severityTypes} from "../../../constants/useful-data/severityTypes";

const Index = () => {

  const customStyle = {border: '1px solid lightgray', borderRadius: '5px', padding: '0.3rem 0.7rem'}
  const [responseMessage, setResponseMessage] = useState('')

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
            label: '',
            severityType: '',
            address: '',
          }}
          validationSchema={alertSchema}
          onSubmit={async (values, {setSubmitting, resetForm}) => {
            setSubmitting(true);
            try {
              await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/alerts`, values)
                .then(function (response) {
                  if (response.data) {
                    resetForm()
                    const {id} = response.data.data
                    setResponseMessage('Alert Created Successfully.')
                  }
                })
                .catch(function (err) {
                  setResponseMessage('Some Error Occurred.')
                })
            } catch (err) {
              setResponseMessage('Some Error Occurred.')
            }
            setSubmitting(false);
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
                    <CustomInput name={'title'} type={'text'} label={'Title'} styles={customStyle}/>
                    <CustomInput name={'description'} as={'textarea'} type={'text'} label={'Description'} rows={5}
                                 styles={customStyle}/>
                    <CustomSelect isMulti={false} name={'label'} label={'Select Label'} options={labelOptions}
                                  placeholder={'Select Labels...'}/>
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
              {responseMessage && <Text fontWeight={'semibold'} my={4}>{responseMessage}</Text>}
            </Form>
          )}
        </Formik>
      </Box>
    </DashboardContainer>
  );
};

export default Index;