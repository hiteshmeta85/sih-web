import React, {useState} from 'react';
import {Box, Flex, Grid, GridItem, Icon, Image, Link, SimpleGrid, Text} from "@chakra-ui/react";
import axios from "axios";
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import DashboardContainer from "../../../_layout";
import ClaimReviewForm from "../../../../../components/Modals/ClaimReviewForm";
import TweetPost from "../../../../../components/Modals/TweetPost";

const PostAnalysis = ({
  multilabel,
  username,
  date,
  tweet,
  socialMediaType,
  originalPhotos,
  classifiedPhotos,
  objectDetectedImages,
  cropDetectedImages,
  ndrfAccounts
}) => {

  const [tweetResponseData, setTweetResponseData] = useState('')

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
              {tweet}
            </Text>
          </GridItem>

          <Flex gap={4}>
            <ClaimReviewForm tweet={tweet}/>
            <TweetPost ndrfAccounts={ndrfAccounts} tweetResponseData={tweetResponseData} setTweetResponseData={setTweetResponseData}/>
          </Flex>

          {tweetResponseData && <Flex gap={2} alignItems={'center'}>
            <Icon as={AiOutlineTwitter} h={8} w={8} color={'#1DA1F2'}/>
            <Text>Post Link: </Text>
            <Link target={'_blank'} href={tweetResponseData} color={'blue'}>{tweetResponseData}</Link>
          </Flex>}

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
                <React.Fragment key={index}>
                  <Box>
                    <Image src={socialMediaType === 'facebook' ? item.images : item.photos} alt={'image'}/>
                    <Text textAlign={'center'} fontWeight={'bold'} border={'1px dashed lightgray'} mt={2} p={2}>{item.classifiedClass}</Text>
                  </Box>
                </React.Fragment>
              )
            })}
          </SimpleGrid>
        </Box>}

        {objectDetectedImages.length > 0 && <Box mt={8}>
          <Text fontWeight={'bold'} fontSize={'xl'} mb={2}>Object Detected Photos</Text>
          <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={4}>
            {objectDetectedImages.map((item, index) => {
              if(item.objectDetectionUrl)
              return (
                <Box key={index}>
                  <Image src={item.objectDetectionUrl} alt={'image'}/>
                  {item.classDetected.length > 0 && <>
                    {[...new Set(item.classDetected.split(','))].map((classItem, index)=> {
                      return (
                        <Box key={index}>
                          <Text textAlign={'center'} fontWeight={'bold'} border={'1px dashed lightgray'} mt={2} p={2}>{classItem}</Text>
                        </Box>
                      )
                    })}
                  </>}
                </Box>
              )
            })}
          </SimpleGrid>
        </Box>}

        {cropDetectedImages.length > 0 && <Box mt={8}>
          <Text fontWeight={'bold'} fontSize={'xl'}>Crop Detected Photos</Text>
          <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={4}>
            {cropDetectedImages.map((item, index) => {
              if(item.categoryWiseUrl)
              return (
                <Image key={index} src={item.categoryWiseUrl} alt={'image'}/>
              )
            })}
          </SimpleGrid>
        </Box>}

      </Box>
    </DashboardContainer>
  );
};

export default PostAnalysis;

export async function getServerSideProps(context) {
  let id = context.params.id;
  let pid = context.params.pid;
  let social = context.query.social.toLowerCase();

  let multilabel = '', tweet = '', username = '', date = '', socialMediaType = '', originalPhotos = [],
    classifiedPhotos = [], objectDetectedImages = [], cropDetectedImages = [], ndrfAccounts = [];

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/${social}/${pid}`)
    if (res.data) {
      if(Object.keys(res.data).length > 0){
        if(social === 'twitter'){
          multilabel = res.data.tweet_data.multilabel
          tweet = res.data.tweet_data.language === 'en' || "" ? res.data.tweet_data.tweet : res.data.tweet_data.translated
          username = res.data.tweet_data.username
          date = res.data.tweet_data.date
          socialMediaType = 'twitter'
          originalPhotos = res.data.tweet_photos
          classifiedPhotos = res.data.tweet_photos_classified
          objectDetectedImages = res.data.tweet_obj_detection
          cropDetectedImages = res.data.tweet_crop_detection
          ndrfAccounts = res.data.helpers_account
        }
        if(social === 'facebook'){
          multilabel = res.data.facebook_data.multilabel
          tweet = res.data.facebook_data.language === 'en' || "" ? res.data.facebook_data.post_text : res.data.facebook_data.translated
          username = res.data.facebook_data.username
          date = res.data.facebook_data.time
          socialMediaType = 'facebook'
          originalPhotos = res.data.facebook_photos
          classifiedPhotos = res.data.facebook_photos_classified
          objectDetectedImages = res.data.facebook_obj_detection
          cropDetectedImages = res.data.facebook_crop_detection
          ndrfAccounts = res.data.helpers_account
        }
        if(social === 'instagram'){
          multilabel = res.data.insta_data.multilabel
          tweet = res.data.insta_data.language === 'en' || "" ? res.data.insta_data.caption : res.data.insta_data.translated
          username = 'unknown'
          date = res.data.insta_data.upload_time
          socialMediaType = 'facebook'
          originalPhotos = res.data.insta_photos
          classifiedPhotos = res.data.insta_photos_classified
          objectDetectedImages = res.data.insta_obj_detection
          cropDetectedImages = res.data.insta_crop_detection
          ndrfAccounts = res.data.helpers_account
        }
      }
    }
  } catch (e) {
    console.log(e)
  }

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
      cropDetectedImages,
      ndrfAccounts
    }
  }
}