import DashboardContainer from "../_layout";
import {Box, Flex, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import newProjectSchema from "../../../lib/schemas/newProjectSchema";
import CustomInput from "../../../components/Input/CustomInput";
import {ErrorMessage, Form, Formik} from "formik";
import CustomButton from "../../../components/Button/CustomSubmitButton";
import Image from "next/image";
import axios from "axios";
import {useRouter} from "next/router";
import {useState} from "react";
import {disasterTypes} from "../../../constants/useful-data/disasterTypes";

const Index = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <DashboardContainer title={"Create Project"}>
      <Formik
        initialValues={{
          projectName: '',
          disasterType: ''
        }}
        validationSchema={newProjectSchema}
        onSubmit={async (values, {setSubmitting, resetForm}) => {
          setSubmitting(true);
          try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/projects/create-project`,
              {projectName: values.projectName, disasterType: values.disasterType})
              .then(function (response) {
                if (response.data) {
                  console.log(response.data)
                  const {id} = response.data.data
                  router.push(`/dashboard/create-project/select-location/${id}`)
                }
              })
              .catch(function (err) {
                setErrorMessage('Something went wrong.')
              })
          } catch (err) {
            setErrorMessage('Something went wrong.')
          }
          setSubmitting(false);
        }}
      >{({
        handleSubmit,
        isSubmitting,
        isValid,
        dirty,
        setFieldValue,
        values
      }) => (
        <Form onSubmit={handleSubmit}>
          <Flex
            flexDir={"column"}
            gap={{base: 8, lg: 12}}
            py={{base: 6, lg: 12}}
            px={{base: 4, lg: 8}}
            bg={"white"}
            borderRadius={"0.5rem"}
          >
            <Box>
              <Heading fontSize={"3xl"} mb={4}>Enter Project Name</Heading>
              <CustomInput type={"text"} name={"projectName"} placeholder={"eg. Kerala Floods"}/>
            </Box>
            <Box>
              <Heading fontSize={"3xl"} mb={4}>Select Incident Type</Heading>
              <SimpleGrid columns={{base: 1, md: 3, lg: 5}} spacing={4}>
                <>
                  {disasterTypes.map((item, index) => {
                    return (
                      <Box
                        key={index}
                        h={"180px"}
                        pos={"relative"}
                        cursor={"pointer"}
                        onClick={() => setFieldValue("disasterType", `${item.disasterType}`)}
                        border={"2px"} borderRadius={"4px"}
                        borderColor={values.disasterType === `${item.disasterType}` ? "blue.500" : "transparent"}
                      >
                        <Image
                          src={item.image}
                          alt={"disaster type"}
                          layout="fill"
                          style={{borderRadius: "4px"}}
                        />
                        <Text
                          pos={"absolute"}
                          bottom={"0"}
                          w={"full"}
                          textAlign={"center"}
                          fontWeight={"semibold"}
                          letterSpacing={"1px"}
                          bgColor={"rgba(255, 255, 255, 0.7)"}
                        >
                          {item.label}
                        </Text>
                      </Box>
                    )
                  })}
                </>
              </SimpleGrid>
              <Box
                color={'gray.500'}
                fontSize={'xs'}
                ml={0.5}
                mt={0.5}
                fontWeight={'semibold'}>
                <ErrorMessage name={"disasterType"}/>
              </Box>
            </Box>
            <Box alignSelf={'start'}>
              <CustomButton label={"Next"} handleSubmit={handleSubmit} isSubmitting={isSubmitting}/>
            </Box>
            {errorMessage && <Text fontWeight={600} color={'red.500'}>{errorMessage}</Text>}
          </Flex>
        </Form>
      )}
      </Formik>
    </DashboardContainer>
  )
}

export default Index