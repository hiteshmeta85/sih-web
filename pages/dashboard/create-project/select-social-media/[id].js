import {Box, Flex, Icon, Text} from "@chakra-ui/react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import DashboardContainer from "../../_layout";
import CustomButton from "../../../../components/Button/CustomSubmitButton";
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import socialMediaSchema from "../../../../lib/schemas/socialMediaSchema";
import axios from "axios";

const SelectHashtags = (props) => {

  const socialMedia = [
    {
      id: 1,
      title: "Twitter",
      value: "twitter",
      image: BsTwitter,
      color: "#1DA1F2",
    },
    {
      id: 2,
      title: "Facebook",
      value: "facebook",
      image: BsFacebook,
      color: "#4267B2",
    },
    {
      id: 3,
      title: "Instagram",
      value: "instagram",
      image: BsInstagram,
      color: "#FCAF45",
    },
  ]

  return (
    <DashboardContainer title={"Create Project - Social Media"}>
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
              <Box mt={3} mb={6}>
                <Flex
                  flexDir={{base: "column", md: "row"}}
                  gap={6}
                >
                  {socialMedia.map((item, index) => {
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
              <CustomButton label={"Create Project"} handleSubmit={handleSubmit}/>
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