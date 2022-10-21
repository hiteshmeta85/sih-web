import React, {useState} from 'react';
import DashboardContainer from "../../_layout";
import {Form, Formik} from "formik";
import SearchAndMarkLocation from "../../../../components/Map/SearchAndMarkLocation";
import CustomSubmitButton from "../../../../components/Button/CustomSubmitButton";
import {Box, Flex, Text} from "@chakra-ui/react";
import axios from "axios";
import Error from "../../../../components/Error/Error";
import {useRouter} from "next/router";
import selectDisasterLocation from "../../../../lib/schemas/selectDisasterLocationSchema";

const SelectLocation = ({projectName, disasterType, id}) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <DashboardContainer title={'Create Project - Select Disaster Zone'}>
      {(projectName && disasterType && id) ?
        <Flex
          flexDir={"column"}
          gap={{base: 6, lg: 8}}
          py={{base: 6, lg: 12}}
          px={{base: 4, lg: 8}}
          bg={"white"}
          borderRadius={"0.5rem"}
        >
          <Flex gap={4}>
            <Text
              textTransform={'capitalize'}
              borderRadius={"full"}
              bg={"green.400"}
              color={"white"}
              py={1} px={4}>
              {projectName}
            </Text>
            <Text
              textTransform={'capitalize'}
              borderRadius={"full"}
              bg={"pink.400"}
              color={"white"}
              py={1} px={4}>
              {disasterType}
            </Text>
          </Flex>
          <Formik
            initialValues={{
              geolocation_lat: '',
              geolocation_lng: '',
              address: '',
            }}
            validationSchema={selectDisasterLocation}
            onSubmit={async (values, {setSubmitting, resetForm}) => {
              setSubmitting(true);
              try {
                await axios.post(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/projects/create-project/select-location/${id}`, values)
                  .then(function (response) {
                    if (response.data) {
                      const {projectId} = response.data.data.projectInfo
                      router.push(`/dashboard/create-project/select-hashtags/${projectId}`)
                    }
                  })
                  .catch(function (error) {
                    setErrorMessage('Something went wrong.')
                  })
              } catch (err) {
                setErrorMessage('Something went wrong.')
              }
              setSubmitting(false);
            }}
          >
            {({
              handleSubmit, isSubmitting, isValid, dirty, setFieldValue, values
            }) => (
              <Form>
                <Box py={4}>
                  <SearchAndMarkLocation label={'Search Geolocation'} setFieldValue={setFieldValue} mapHeight={'400px'}/>
                </Box>
                <CustomSubmitButton label={'Next'} isSubmitting={isSubmitting} handleSubmit={handleSubmit}/>
                {errorMessage && <Text fontWeight={600} color={'red.500'} my={4}>{errorMessage}</Text>}
              </Form>
            )}
          </Formik>
        </Flex> :
        <Error/>
      }
    </DashboardContainer>
  );
};

export default SelectLocation;

export async function getServerSideProps(context) {
  const id = context.params.id

  let projectName, disasterType;

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/projects/create-project/select-location/${id}`)
    if (response.data) {
      projectName = response.data.data.projectInfo.projectName
      disasterType = response.data.data.projectInfo.disasterType
    }
  } catch (e) {
    projectName = null
    disasterType = null
  }

  return {
    props: {
      projectName,
      disasterType,
      id
    }
  }
}