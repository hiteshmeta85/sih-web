import {Box, Divider, Flex, FormLabel, Text} from "@chakra-ui/react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import DashboardContainer from "../../_layout";
import hashtagSchema from "../../../../lib/schemas/hashtagSchema";
import CustomButton from "../../../../components/Button/CustomSubmitButton";
import axios from "axios";

const SelectHashtags = () => {

  const hashtags = ["India","Mumbai","Flood","Help Us","Rescue","New Delhi","Emergency","Death","Trending"]

  return (
    <DashboardContainer title={"Create Project - Hashtags"}>
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
            Kerala Floods
          </Text>
          <Text
            textTransform={'capitalize'}
            borderRadius={"full"}
            bg={"pink.400"}
            color={"white"}
            py={1} px={4}>
            Flood
          </Text>
        </Flex>
        <Box>
          <Text fontWeight={800} fontSize={"xl"}>Select Most Appropriate Hashtags</Text>
          <Text color={"gray.600"} fontWeight={"bold"}>Duis ut placerat libero. Vivamus eros est, malesuada sit amet vestibulum in, mollis vel velit.</Text>
        </Box>
        <Formik
          initialValues={{
            hashtags: [],
          }}
          validationSchema={hashtagSchema}
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
        >
          {({
            values,
            handleSubmit,
            errors
          }) => (
            <Form>
              <Box
                color={"gray.600"}
                fontWeight={"bold"}
              >
                Hashtags
              </Box>
              <Box mt={3} mb={6}>
                <Flex
                  flexDir={"column"}
                  border={"1px solid #E8EBED"}
                  maxW={"md"}
                  borderRadius={"lg"}
                  shadow={"sm"}
                  px={4} pt={3} pb={2}
                >
                  {hashtags.map((item, index) => {
                    return (
                      <Box key={index}>
                        <Flex alignItems={"center"} gap={2} pb={0}>
                          <Field
                            type="checkbox"
                            name="hashtags"
                            value={item}
                            style={{position: "relative", top: "-3px"}}
                          />
                          <FormLabel>
                            {item}
                          </FormLabel>
                        </Flex>
                        <Divider mb={1}/>
                      </Box>
                    )
                  })}
                </Flex>
                <Box
                  color={'gray.500'}
                  fontSize={'xs'}
                  mt={2}
                  fontWeight={'semibold'}>
                  <ErrorMessage name={"hashtags"}/>
                </Box>
              </Box>
              <CustomButton label={"Next"} handleSubmit={handleSubmit}/>
            </Form>
          )}
        </Formik>
      </Flex>
    </DashboardContainer>
  )
}

export async function getServerSideProps(context) {
  console.log(context)
  const id = context.params.id

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/`)
    console.log(response)
  } catch (e) {
   // console.log(e)
  }

  return {
    props: {
      id
    }
  }
}

export default SelectHashtags