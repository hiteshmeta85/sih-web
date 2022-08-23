import React, {useState} from 'react';
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Highlight,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spinner,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import axios from "axios";
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import {FaQuoteLeft} from "react-icons/fa";
import moment from "moment/moment";
import {BiLink} from "react-icons/bi";
import DashboardContainer from "../../../_layout";

const PostAnalysis = ({
  multilabel,
  username,
  date,
  tweet,
  socialMediaType,
  originalPhotos,
  classifiedPhotos,
  objectDetectedImages,
  cropDetectedImages
}) => {

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
    <DashboardContainer title={'Post Analysis'}>
      <Box bg={'white'} p={4}>
        <Grid gap={8} border={'1px solid gray'} py={8} px={8} rounded={'md'} borderStyle={'dashed'} maxW={'container.sm'}>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <Flex alignItems={'center'} gap={2}>{socialMediaType === 'twitter' ?
              <AiOutlineTwitter size={'1.5rem'} color={'#1DA1F2'}/> :
              socialMediaType === 'facebook' ? <AiOutlineFacebook size={'1.5rem'} color={'#4267B2'}/> ?
                socialMediaType === 'instagram' : <AiOutlineInstagram size={'1.5rem'} color={'#FCAF45'}/> : ''}
              <Text fontWeight={'bold'}>@{username}</Text>
            </Flex>
            <Text fontWeight={'bold'}>{date}</Text>
          </Flex>
          <GridItem p={4} border={"1px solid lightgray"} borderRadius={"md"}>
            <Text>
              {/* query is a required attribute */}
              {/*<Highlight*/}
              {/*  query={['']}*/}
              {/*  styles={{px: '2', py: '1', rounded: 'sm', bg: 'green.100'}}*/}
              {/*>*/}
              {tweet}
              {/*</Highlight>*/}
            </Text>
          </GridItem>
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
          {multilabel && <GridItem>
            <Text fontWeight={'bold'} fontSize={'xl'}>Multi-Labels</Text>
            <Flex gap={4} py={2} flexWrap={'wrap'}>
              <>
                {multilabel.split(',')
                  .slice(1, 4)
                  .map((item, index) => {
                    return (
                      <Text key={index} p={3} border={'1px solid lightgray'} borderStyle={'dashed'} rounded={'xl'}>{item}</Text>
                    );
                  })}
              </>
            </Flex>
          </GridItem>}
        </Grid>

        {originalPhotos.length > 0 && <Box mt={8}>
          <Text fontWeight={'bold'} fontSize={'xl'} mb={2}>Original Photos</Text>
          <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={4}>
            {originalPhotos.map((item, index) => {
              return (
                <Image key={index} src={socialMediaType === 'facebook' ? item.images : item.photos} alt={'image'}/>
              )
            })}
          </SimpleGrid>
        </Box>}

        {classifiedPhotos.length > 0 && <Box mt={8}>
          <Text fontWeight={'bold'} fontSize={'xl'} mb={2}>Classified Photos</Text>
          <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={4}>
            {classifiedPhotos.map((item, index) => {
              return (
                <Image key={index} src={socialMediaType === 'facebook' ? item.images : item.photos} alt={'image'}/>
              )
            })}
          </SimpleGrid>
        </Box>}

        {objectDetectedImages.length > 0 && <Box mt={8}>
          <Text fontWeight={'bold'} fontSize={'xl'} mb={2}>Object Detected Photos</Text>
          <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={4}>
            {objectDetectedImages.map((item, index) => {
              return (
                <Image key={index} src={item.objectDetectionUrl} alt={'image'}/>
              )
            })}
          </SimpleGrid>
        </Box>}

        {cropDetectedImages.length > 0 && <Box mt={8}>
          <Text fontWeight={'bold'} fontSize={'xl'} mb={2}>Crop Detected Photos</Text>
          <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={4}>
            {cropDetectedImages.map((item, index) => {
              return (
                <Image key={index} src={item.categoryWiseUrl} alt={'image'}/>
              )
            })}
          </SimpleGrid>
        </Box>}

      </Box>
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
                      <Text><Text as={'span'} fontWeight={'bold'}>Text:</Text> {item.text}</Text>
                      <Text><Text fontWeight={'bold'} as={'span'}>Claimant:</Text> {item.claimant}</Text>
                      <Text fontSize={'sm'}>Claim Date: {moment(item.claimDate).format('ll')}</Text>
                      {/* Claim Review */}
                      {item.claimReview.length > 0 && <>
                        <Divider maxW={48}/>
                        <Text fontWeight={'bold'}>Claim Review: </Text>
                        <Text><Text as={'span'} fontWeight={'bold'}>Title:</Text> {item.claimReview[0].title}</Text>
                        <Text alignSelf={'start'} as={'span'} px={2} py={1} bg={'gray.100'} textUnderlineOffset={4} border={'1px solid black'} rounded={'sm'}>Rating: {item.claimReview[0].textualRating}</Text>
                        <Flex justifyContent={'space-between'} mt={2}>
                          <Text fontSize={'sm'}>{moment(item.claimReview[0].reviewDate).format('ll')}</Text>
                          <Flex alignItems={'center'} gap={2}>
                            <Link target={'_blank'} href={item.claimReview[0].url} cursor={'pointer'} color={'gray.600'}><BiLink/></Link>
                            <Text fontSize={'sm'} fontWeight={'bold'}>Publisher: {item.claimReview[0].publisher.name}</Text>
                          </Flex>
                        </Flex>
                      </>}
                      <Divider/>
                    </Flex>
                  )
                }) : <Text color={'red.700'}>No Claim Found</Text>
                }
              </>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </DashboardContainer>
  );
};

export default PostAnalysis;

export async function getServerSideProps(context) {
  let id = context.params.id;
  let pid = context.params.pid;
  let social = context.query.social.toLowerCase();

  let multilabel = '', tweet = '', username = '', date = '', socialMediaType = '', originalPhotos = [],
    classifiedPhotos = [], objectDetectedImages = [], cropDetectedImages = [];

  try {
    const res = await axios.get(`http://127.0.0.1:8000/homebrew/api/${social}/${pid}`)
    if (res.data) {
      if(Object.keys(res.data).length > 0){
        if(social === 'twitter'){
          multilabel = res.data.tweet_data.multilabel
          tweet = res.data.tweet_data.tweet
          username = res.data.tweet_data.username
          date = res.data.tweet_data.date
          socialMediaType = 'twitter'
          originalPhotos = res.data.tweet_photos
          classifiedPhotos = res.data.tweet_photos_classified
          objectDetectedImages = res.data.tweet_obj_detection
          cropDetectedImages = res.data.tweet_crop_detection
        }
        if(social === 'facebook'){
          multilabel = res.data.facebook_data.multilabel
          tweet = res.data.facebook_data.language === 'en' ? res.data.facebook_data.post_text : res.data.facebook_data.translated
          username = res.data.facebook_data.username
          date = res.data.facebook_data.time
          socialMediaType = 'facebook'
          originalPhotos = res.data.facebook_photos
          classifiedPhotos = res.data.facebook_photos_classified
          objectDetectedImages = res.data.facebook_obj_detection
          cropDetectedImages = res.data.facebook_crop_detection
        }
        if(social === 'instagram'){
          multilabel = res.data.insta_data.multilabel
          tweet = res.data.insta_data.language === 'en' ? res.data.insta_data.caption : res.data.insta_data.translated
          username = 'unknown'
          date = res.data.insta_data.upload_time
          socialMediaType = 'facebook'
          originalPhotos = res.data.insta_photos
          classifiedPhotos = res.data.insta_photos_classified
          objectDetectedImages = res.data.insta_obj_detection
          cropDetectedImages = res.data.insta_crop_detection
        }
      }
    }
  } catch (e) {
    console.log(e)
  }

  // if (social === 'twitter') {
  //   multilabel = res3.data.tweet_data.multilabel
  //   tweet = res3.data.tweet_data.tweet
  //   username = res3.data.tweet_data.username
  //   date = res3.data.tweet_data.date
  //   socialMediaType = 'twitter'
  //   originalPhotos = res3.data.tweet_photos
  //   classifiedPhotos = res3.data.tweet_photos_classified
  //   objectDetectedImages = res3.data.tweet_obj_detection
  //   cropDetectedImages = res3.data.tweet_crop_detection
  // }

  // if (social === 'facebook') {
  //   multilabel = res.data.facebook_data.multilabel
  //   tweet = res.data.facebook_data.language === 'en' ? res.data.facebook_data.post_text : res.data.facebook_data.translated
  //   username = res.data.facebook_data.username
  //   date = res.data.facebook_data.time
  //   socialMediaType = 'facebook'
  //   originalPhotos = res.data.facebook_photos
  //   classifiedPhotos = res.data.facebook_photos_classified
  //   objectDetectedImages = res.data.facebook_obj_detection
  //   cropDetectedImages = res.data.facebook_crop_detection
  // }

  // if (social === 'instagram') {
  //   multilabel = res2.data.insta_data.multilabel
  //   tweet = res2.data.insta_data.language === 'en' ? res2.data.insta_data.caption : res2.data.insta_data.translated
  //   username = 'unknown'
  //   date = res2.data.insta_data.upload_time
  //   socialMediaType = 'facebook'
  //   originalPhotos = res2.data.insta_photos
  //   classifiedPhotos = res2.data.insta_photos_classified
  //   objectDetectedImages = res2.data.insta_obj_detection
  //   cropDetectedImages = res2.data.insta_crop_detection
  // }

  return {
    props: {
      multilabel,
      tweet,
      username,
      date,
      socialMediaType,
      originalPhotos,
      classifiedPhotos,
      objectDetectedImages,
      cropDetectedImages
    }
  }
}