import DashboardContainer from "../_layout";
import {Box, Flex, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import newProjectSchema from "../../../lib/schemas/newProjectSchema";
import CustomInput from "../../../components/Input/CustomInput";
import {ErrorMessage, Form, Formik} from "formik";
import CustomButton from "../../../components/Button/CustomSubmitButton";
import {DisasterTypeData} from "./_disaster-type-data";
import Image from "next/image";
import axios from "axios";

const Index = () => {

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
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/`, {values});
            if (response) {
              console.log(response)
              resetForm()
              //await router.push('/')
            }
          } catch (err) {
            console.log(err)
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
              <Heading fontSize={"3xl"} mb={4}>Select Disaster Type</Heading>
              <SimpleGrid columns={{base: 1, md: 3, lg: 5}} spacing={4}>
                {DisasterTypeData.map((item, index) => {
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
            <CustomButton label={"Next"} handleSubmit={handleSubmit}/>
          </Flex>
        </Form>
      )}
      </Formik>
    </DashboardContainer>
  )
}

export default Index