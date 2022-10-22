import {Box, Flex, Icon, Text} from "@chakra-ui/react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import DashboardContainer from "../../_layout";
import CustomButton from "../../../../components/Button/CustomSubmitButton";
import socialMediaSchema from "../../../../lib/schemas/socialMediaSchema";
import axios from "axios";
import {useRouter} from "next/router";
import Error from "../../../../components/Error/Error";
import {useState} from "react";
import {socialMediaTypes} from "../../../../constants/socialMediaTypes";

const SelectHashtags = ({id, projectName, disasterType}) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <DashboardContainer title={"Create Project - Social Media"}>
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
            <Text fontWeight={800} fontSize={"xl"}>Select Social Media Type</Text>
            <Text color={"gray.600"} fontWeight={"bold"}>Duis ut placerat libero. Vivamus eros est, malesuada sit amet
              vestibulum in, mollis vel velit.</Text>
          </Box>
          <Formik
            initialValues={{
              socialMedia: [],
            }}
            validationSchema={socialMediaSchema}
            onSubmit={async (values, {setSubmitting, resetForm}) => {
              setSubmitting(true);
              try {
                await axios.post(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/projects/create-project/social-media/${id}`,
                  {socialMedia: values.socialMedia})
                  .then(function (response) {
                    if (response.data) {
                      const {projectId} = response.data.data.projectInfo
                      router.push(`/dashboard/projects`)
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
                <Box mt={3} mb={6}>
                  <Flex
                    flexDir={{base: "column", md: "row"}}
                    gap={6}
                  >
                    <>
                      {socialMediaTypes.map((item, index) => {
                        return (
                          <Flex key={index}
                                alignItems={"center"}
                                gap={2}
                                borderWidth={"2px"}
                                borderColor={values.socialMedia.includes(item.value) ? 'white' : item.color}
                                color={values.socialMedia.includes(item.value) ? 'white' : item.color}
                                bg={values.socialMedia.includes(item.value) ? item.color : "white"}
                                borderRadius={"md"}
                                p={4}>
                            <Field
                              type="checkbox"
                              name="socialMedia"
                              value={item.value}
                              style={{position: "relative", top: "0px"}}
                            />
                            <Flex alignItems={'center'} gap={2} fontWeight={'semibold'}>
                              <Icon as={item.image} w={8} h={8}/> {item.title}
                            </Flex>
                          </Flex>
                        )
                      })}
                    </>
                  </Flex>
                  <Box
                    color={'gray.500'}
                    fontSize={'xs'}
                    mt={4}
                    mb={12}
                    fontWeight={'semibold'}>
                    <ErrorMessage name={"socialMedia"}/>
                  </Box>
                </Box>
                <CustomButton label={"Create Project"} handleSubmit={handleSubmit} isSubmitting={isSubmitting}/>
                {errorMessage && <Text fontWeight={600} color={'red.500'} my={4}>{errorMessage}</Text>}
              </Form>
            )}
          </Formik>
        </Flex> :
        <Error/>
      }
    </DashboardContainer>
  )
}


export async function getServerSideProps(context) {
  const id = context.params.id

  let projectName, disasterType;

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/projects/create-project/social-media/${id}`)
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

export default SelectHashtags