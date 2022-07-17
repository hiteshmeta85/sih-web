import {Box, Button, Flex, Text} from "@chakra-ui/react";
import {Field, FieldArray, Form, Formik} from "formik";
import {MdAddCircleOutline, MdRemoveCircleOutline} from "react-icons/md";
import DashboardContainer from "../../_layout";
import CustomButton from "../../../../components/Button/CustomSubmitButton";
import axios from "axios";

const AddCustomHashtags = () => {

  return (
    <DashboardContainer title={"Create Project - Custom Hashtags"}>
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
          <Text fontWeight={800} fontSize={"xl"}>Add Most Relevant Custom Hashtags</Text>
          <Text color={"gray.600"} fontWeight={"bold"}>Duis ut placerat libero. Vivamus eros est, malesuada sit amet vestibulum in, mollis vel velit.</Text>
        </Box>
        <Formik
          initialValues={{
            hashtags: ['death', 'help', 'emergency', 'help', 'rescue'],
          }}
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
              <Box color={"gray.600"} fontWeight={"bold"}>
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
                  <FieldArray
                    name="hashtags"
                    render={arrayHelpers => (
                      <Box>
                        <Flex justifyContent={"end"} mb={2}>
                          <Button type="Button" onClick={() => arrayHelpers.insert(0, '')} fontWeight={"medium"}>
                            <MdAddCircleOutline size={"1.25rem"} fill={"#47BB78"}/> <Text as={"span"} ml={2}>Add Hashtag</Text>
                          </Button>
                        </Flex>
                        {values.hashtags.map((friend, index) => (
                          <Flex
                            key={index}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            gap={2}>
                            <Box flex={1}>
                              <Field
                                name={`hashtags.${index}`}
                                autoComplete="off"
                                placeholder={"Type a hashtag..."}
                                style={{paddingBottom: "2px",borderBottom: "1px solid #E7E8EC", outline: "none", width: "100%"}}/>
                            </Box>
                            <Button
                              type="Button"
                              onClick={() => arrayHelpers.remove(index)}
                              bg={"transparent"}
                              borderRadius={0}
                              _hover={{bg: "transparent"}}
                            >
                              <MdRemoveCircleOutline fill={"#EB4747"} size={"1.25rem"}/>
                            </Button>
                          </Flex>
                        ))}
                      </Box>
                    )}
                  />
                </Flex>
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
    //console.log(e)
  }

  return {
    props: {
      id
    }
  }
}

export default AddCustomHashtags