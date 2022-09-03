import React from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import {Formik} from "formik";
import twitterAlert from "../../lib/schemas/twitterAlert";
import axios from "axios";
import CustomInput from "../Input/CustomInput";
import TwitterPostIcon from "../../public/twitter-create-post.svg"
import Image from "next/image";
import CustomSubmitButton from "../Button/CustomSubmitButton";

const CreateTwitterPost = ({ndrfAccounts, setTweetResponseData}) => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <Box>
      <Button _hover={{bg: 'white'}} onClick={() => {onOpen()}} pos={'absolute'} bottom={'60px'} right={'60px'} bg={'white'} py={8} px={2} cursor={'pointer'} boxShadow={'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'} borderRadius={'full'}>
        <Image src={TwitterPostIcon} alt={'Twitter Post Icon'}/>
      </Button>

      {/* Modal */}
      <Modal onClose={() => {
        onClose()
      }} size={'xl'} isOpen={isOpen} scrollBehavior={'inside'}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Make a Post</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <Box mt={8}>
              <Formik
                initialValues={{
                  message: `${ndrfAccounts}`
                }}
                validationSchema={twitterAlert}
                onSubmit={async (values, {setSubmitting, resetForm}) => {
                  setSubmitting(true);
                  try {
                    await axios.post(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/send-tweet`, values)
                      .then(function (response) {
                        if (response.data) {
                          resetForm()
                          setTweetResponseData(response.data.data)
                        }
                      })
                      .catch(function (err) {
                        console.log(err)
                      })
                  } catch (err) {
                    console.log(err)
                  }
                  setSubmitting(false);
                }}
              >{({
                isSubmitting,
                handleSubmit
              }) => (
                <Flex
                  flexDir={"column"}
                  justifyContent={"center"}
                  minHeight={"full"}
                  p={4}
                  border={'1px dashed'}
                  maxW={'container.sm'}
                  rounded={'md'}
                >
                  <FormControl
                    display={"flex"}
                    flexDir={"column"}
                    gap={6}
                    my={4}
                  >
                    <CustomInput as={'textarea'} rows={6} label={"Tweet"} type={"text"} name={"message"} styles={{border: '1px solid lightgray', padding: '8px', borderRadius: '6px'}}/>
                    <CustomSubmitButton label={'Post'} isSubmitting={isSubmitting} handleSubmit={handleSubmit}/>
                  </FormControl>
                </Flex>
              )}
              </Formik>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CreateTwitterPost;