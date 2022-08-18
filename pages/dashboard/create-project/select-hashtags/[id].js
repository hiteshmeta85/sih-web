import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  FormLabel,
  Text
} from "@chakra-ui/react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import DashboardContainer from "../../_layout";
import hashtagSchema from "../../../../lib/schemas/hashtagSchema";
import CustomButton from "../../../../components/Button/CustomSubmitButton";
import axios from "axios";
import {useRouter} from "next/router";
import {useState} from "react";
import Error from "../../../../components/Error/Error";

const SelectHashtags = ({hashtags, projectName, disasterType, id, states}) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <DashboardContainer title={"Create Project - Hashtags"}>
      {(hashtags && projectName && disasterType && id) ?
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
              hashtags: [],
            }}
            validationSchema={hashtagSchema}
            onSubmit={async (values, {setSubmitting, resetForm}) => {
              setSubmitting(true);
              console.log(values)
              try {
                await axios.post(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/projects/create-project/select-hashtags/${id}`,
                  {selectedHashTags: values.hashtags})
                  .then(function (response) {
                    if (response.data) {
                      const {projectId} = response.data.data.projectInfo
                      router.push(`/dashboard/create-project/custom-hashtags/${projectId}`)
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
              handleSubmit,
              isSubmitting
            }) => (
              <Form>
                <Box>
                  <Text fontWeight={800} fontSize={"xl"}>Select Most Appropriate Hashtags</Text>
                  <Text color={"gray.600"} fontWeight={"bold"}>Duis ut placerat libero. Vivamus eros est, malesuada sit
                    amet vestibulum in, mollis vel velit.</Text>
                </Box>
                <Flex alignItems={'center'} gap={2} mt={2}>
                  <Text color={"gray.600"} fontWeight={"bold"}>Hashtags</Text>
                  <Text className={'blink'}></Text>
                </Flex>
                <Box mt={3} mb={6}>
                  <Flex
                    flexDir={"column"}
                    border={"1px solid #E8EBED"}
                    maxW={"md"}
                    borderRadius={"lg"}
                    shadow={"sm"}
                    px={4} pt={3} pb={2}
                  >
                    {hashtags && hashtags.map((item, index) => {
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
                <Box my={4}>
                  <Text fontWeight={800} fontSize={"xl"}>Select States & Districts</Text>
                  <Text color={"gray.600"} fontWeight={"bold"}>Duis ut placerat libero. Vivamus eros est, malesuada sit
                    amet vestibulum in, mollis vel velit.</Text>
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
                    {states && states.map((item, index) => {
                      return (
                        <Flex key={index} gap={2} alignItems={'start'}>
                          <Field
                            type="checkbox"
                            name="hashtags"
                            value={item.state}
                            style={{position: "relative", top: "11px"}}
                          />
                          <Accordion allowToggle flex={1}>
                            <AccordionItem borderTop={'none'}>
                              <AccordionButton py={1} px={0} justifyContent={'space-between'}>
                                  <FormLabel>
                                    {item.state}
                                  </FormLabel>
                                <AccordionIcon/>
                              </AccordionButton>
                              <AccordionPanel pb={4}>
                                {item.districts.map((district, index) => {
                                  return (
                                    <Flex key={index} gap={2}>
                                      <Field
                                        type="checkbox"
                                        name="hashtags"
                                        value={district}
                                        style={{position: "relative", top: "-3px"}}
                                      />
                                      <FormLabel>
                                        {district}
                                      </FormLabel>
                                    </Flex>
                                  )
                                })}
                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>
                        </Flex>
                      )
                    })}
                  </Flex>
                </Box>
                <CustomButton label={"Next"} handleSubmit={handleSubmit} isSubmitting={isSubmitting}/>
                {errorMessage && <Text fontWeight={600} color={'red.500'} my={4}>{errorMessage}</Text>}
              </Form>
            )}
          </Formik>
        </Flex>
        : <Error/>
      }
    </DashboardContainer>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id

  let hashtags, projectName, disasterType, states;

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/projects/create-project/select-hashtags/${id}`)
    if (response.data) {
      console.log(response.data.data)
      hashtags = response.data.data.hashtags
      projectName = response.data.data.projectInfo.projectName
      disasterType = response.data.data.projectInfo.disasterType
      states = response.data.data.states.states
    }
  } catch (e) {
    hashtags = null
    projectName = null
    disasterType = null
    states = null
  }

  return {
    props: {
      hashtags,
      projectName,
      disasterType,
      states,
      id
    }
  }
}

export default SelectHashtags