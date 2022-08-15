import {Box, Button, Flex, Text} from "@chakra-ui/react";
import {Field, FieldArray, Form, Formik} from "formik";
import {MdAddCircleOutline, MdRemoveCircleOutline} from "react-icons/md";
import DashboardContainer from "../../_layout";
import CustomButton from "../../../../components/Button/CustomSubmitButton";
import axios from "axios";
import {useRouter} from "next/router";
import Error from "../../../../components/Error/Error";
import {useState} from "react";

const AddCustomHashtags = ({id, projectName, disasterType}) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <DashboardContainer title={"Create Project - Custom Hashtags"}>
      {(projectName && disasterType) ?
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
          <Box>
            <Text fontWeight={800} fontSize={"xl"}>Add Most Relevant Custom Hashtags</Text>
            <Text color={"gray.600"} fontWeight={"bold"}>Duis ut placerat libero. Vivamus eros est, malesuada sit amet
              vestibulum in, mollis vel velit.</Text>
          </Box>
          <Formik
            initialValues={{
              hashtags: ['death', 'help', 'emergency', 'help', 'rescue'],
            }}
            onSubmit={async (values, {setSubmitting, resetForm}) => {
              setSubmitting(true);
              try {
                await axios.post(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/projects/create-project/custom-hashtags/${id}`,
                  {customHashTags: values.hashtags})
                  .then(function (response) {
                    if (response.data) {
                      console.log(response)
                      const {projectId} = response.data.data.projectInfo
                      router.push(`/dashboard/create-project/select-social-media/${projectId}`)
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
              values,
              handleSubmit,
              isSubmitting
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
                              <MdAddCircleOutline size={"1.25rem"} fill={"#47BB78"}/> <Text as={"span"} ml={2}>Add
                              Hashtag</Text>
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
                                  style={{
                                    paddingBottom: "2px",
                                    borderBottom: "1px solid #E7E8EC",
                                    outline: "none",
                                    width: "100%"
                                  }}/>
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
                <CustomButton label={"Next"} handleSubmit={handleSubmit} isSubmitting={isSubmitting}/>
                {errorMessage && <Text fontWeight={600} color={'red.500'} my={4}>{errorMessage}</Text>}
              </Form>
            )}
          </Formik>
        </Flex> : <Error/>}
    </DashboardContainer>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id

  let projectName, disasterType;

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/projects/create-project/custom-hashtags/${id}`)
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


export default AddCustomHashtags