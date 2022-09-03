import React, {useState} from 'react';
import {
  Button,
  Divider,
  Flex,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import axios from "axios";
import {FaQuoteLeft} from "react-icons/fa";
import moment from "moment";
import {BiLink} from "react-icons/bi";

const ClaimReviewForm = ({tweet}) => {

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [claims, setClaims] = useState([])
  const {isOpen, onOpen, onClose} = useDisclosure()

  const handleSubmit = async (value) => {

    setIsSubmitting(true)
    await axios.get(`https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${encodeURIComponent(value)}&key=${process.env.NEXT_PUBLIC_FACT_CHECK_API}`)
      .then(res => {
        console.log(res)
        if (Object.keys(res.data).length > 0) {
          setClaims(res.data.claims)
          onOpen()
        } else {
          setClaims([])
          onOpen()
          console.log('no claim found')
        }
      })
      .catch(e => console.log(e))
    setIsSubmitting(false)
  }

  return (
    <div>
      <Button
        onClick={claims.length > 0 ? () => {
          onOpen()
        } : () => handleSubmit(tweet)}
        bg={'blackAlpha.800'}
        _hover={{bg: 'blackAlpha.700'}}
        _active={{bg: 'blackAlpha.800'}}
        color={'white'}
        disabled={isSubmitting}
      >
        {isSubmitting ? <Spinner/> : 'Fact Check'}
      </Button>

      {/* Modal */}
      <Modal onClose={() => {
        onClose()
      }} size={'xl'} isOpen={isOpen} scrollBehavior={'inside'}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Fact Check</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <Flex flexDir={'column'} gap={4}>
              <>
                {claims.length > 0 ? claims.map((item, index) => {
                  return (
                    <Flex key={index} flexDir={'column'} gap={2}>
                      {/* Claim */}

                      <Flex alignItems={'center'} gap={2}>
                        <FaQuoteLeft mb={2}/>
                        <Text fontWeight={'bold'}>Claim: </Text>
                      </Flex>
                      <Text>
                        <Text as={'span'} fontWeight={'bold'}>Text:</Text> {item.text}
                      </Text>
                      <Text>
                        <Text
                          fontWeight={'bold'}
                          as={'span'}
                        >
                          Claimant:
                        </Text>
                        {item.claimant}
                      </Text>
                      <Text fontSize={'sm'}>Claim Date: {moment(item.claimDate)
                        .format('ll')}</Text>

                      {/* Claim Review */}
                      {item.claimReview.length > 0 &&
                        <>
                          <Divider maxW={48}/>
                          <Text fontWeight={'bold'}>Claim Review: </Text>
                          <Text><Text as={'span'} fontWeight={'bold'}>Title:</Text> {item.claimReview[0].title}</Text>
                          <Text
                            as={'span'}
                            alignSelf={'start'}
                            px={2} py={1}
                            bg={'gray.100'}
                            textUnderlineOffset={4}
                            border={'1px solid black'}
                            rounded={'sm'}
                          >
                            Rating: {item.claimReview[0].textualRating}
                          </Text>
                          <Flex justifyContent={'space-between'} mt={2}>
                            <Text fontSize={'sm'}>
                              {moment(item.claimReview[0].reviewDate).format('ll')}
                            </Text>
                            <Flex alignItems={'center'} gap={2}>
                              <Link
                                target={'_blank'}
                                href={item.claimReview[0].url}
                                cursor={'pointer'}
                                color={'gray.600'}
                              >
                                <BiLink/>
                              </Link>
                              <Text
                                fontSize={'sm'}
                                fontWeight={'bold'}
                              >
                                Publisher: {item.claimReview[0].publisher.name}
                              </Text>
                            </Flex>
                          </Flex>
                        </>
                      }
                      <Divider/>
                    </Flex>
                  )
                }) : <Text color={'red.700'}>No Claim Found</Text>}
              </>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ClaimReviewForm;