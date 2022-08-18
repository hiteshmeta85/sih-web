import EventFlowLayout from "../_layout";
import {Box, Flex, Stack, Text} from "@chakra-ui/react";
import TweetCarousel from "../../../components/Carousel/TweetCarousel";
import React from "react";
import axios from "axios";

const IndividualTextAnalysis = ({tweetData}) => {
  return (
    <EventFlowLayout
      heading={'STEP 3 - Individual Text Analysis'}
      progressPercent={30}
      isForwardButtonPresent={false}
    >
      <Box
        maxW={'container.md'}
        w={'full'}
        p={6}
        overflow={'hidden'}
        borderLeft={"2px solid black"}
        mb={4}
      >
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            letterSpacing={1.1}>
            Tweet
          </Text>
          <Text color={'gray.500'} fontSize={'xl'}>
            {tweetData.tweet}
          </Text>
        </Stack>
        <Stack direction={'column'} spacing={0} mt={6}>
          <Text fontWeight={600}>@{tweetData.username}</Text>
          <Text color={'gray.500'}>{tweetData.date}</Text>
        </Stack>

        <Stack direction={'column'} spacing={0} mt={6}>
          <Text fontWeight={600}>Prediction: {tweetData.prediction}</Text>
        </Stack>
      </Box>
      <Box mt={12}>
        <Text fontWeight={'bold'} fontSize={'xl'} mb={4}>Labels and Entities</Text>
        {/*<Box py={4} px={8}>
          <TweetCarousel data={['new', 'trending', 'flood', 'emergency', 'xyz', 'abx']}/>
        </Box>*/}
        <Flex gap={2}>
          {tweetData.multilabel.split(',')
            .map((label, index) => <Text key={index} border={'2px solid black'} rounded={'lg'} py={1} px={2}>{label}</Text>)}
        </Flex>
      </Box>
    </EventFlowLayout>
  );
};

export default IndividualTextAnalysis;

export async function getServerSideProps() {

  let tweetData = {
    "tweet_id_db": 188,
    "id": 1554523686836764680,
    "conversation_id": "1554360321804046337",
    "created_at": "2022-08-02 17:45:03 UTC",
    "date": "2022-08-02",
    "time": "17:45:03",
    "timezone": "+0000",
    "user_id": 1169705101537239041,
    "username": "barneybo",
    "name": "Bee",
    "place": "",
    "tweet": "People in Dehradun 27 in impass areas near station having lots of difficulties, please help, ASAP!. We are about 30 people\n",
    "language": "en",
    "urls": "",
    "photos": "",
    "replies_count": 0,
    "retweets_count": 0,
    "likes_count": 1,
    "hashtags": "",
    "cashtags": "",
    "link": "https://twitter.com/barneybo/status/1554523686836764680",
    "retweet": "",
    "quote_url": "",
    "video": 0,
    "thumbnail": "",
    "near": "",
    "geo": "",
    "source": "",
    "user_rt_id": "",
    "user_rt": "",
    "retweet_id": "",
    "reply_to": "",
    "retweet_date": "2022-08-02T17:47:36.866000Z",
    "translate": "",
    "trans_src": "",
    "trans_dest": "",
    "video_link": "",
    "translated": "",
    "projectId": 56,
    "socialMediaName": "Twitter",
    "prediction": 1,
    "multilabel": "Help,landslide,resuce",
    "status": "not sent",
    "creationTime": "2022-08-02T17:47:36.866000Z",
    "passedFromModel": "True",
    "rank": 0,
    "geolocation_lat": 73.01,
    "geolocation_lng": 31.2,
    "video_link_od": "",
    "video_transcript": "",
    "verdict": 1,
    "videoPrediction": 1
  }

  // try {
  //   const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/twitter/1554523686836764680`)
  //   if (res.data) {
  //     tweetData = res.data.tweet_data
  //   }
  // } catch (e) {
  //   console.log(e)
  // }

  return {
    props: {
      tweetData
    }
  }
}