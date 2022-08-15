import React from 'react';
import EventFlowLayout from "./_layout";
import {Heading, SimpleGrid} from "@chakra-ui/react";
import StatCard from "../../components/Stat/StatCard";
import TweetWithImagesCard from "../../components/Card/TweetWithImagesCard";
import axios from "axios";

const BinaryImageClassification = ({twitterData, facebookData, instagramData}) => {
  return (
    <EventFlowLayout
      heading={'Step 4 - Binary Image Classification'}
      progressPercent={40}
      forwardLink={'/event-flow/multi-label-image-classification'}
    >

      {/* Stats */}
      <SimpleGrid columns={{base: 2, md: 4}} gap={4}>
        <StatCard label={'Total No of Images'} value={twitterData.length + facebookData.length + instagramData.length} cardBgColor={'blackAlpha.800'} titleColor={'white'}/>
        <StatCard label={'Total No of Disastrous Tweets'} value={200} cardBgColor={'#F04A4A'} titleColor={'white'} subTextColor={'white'}/>
        <StatCard label={'Total No of Non-Disastrous Tweets'} value={100} cardBgColor={'#3798F1'} titleColor={'white'} subTextColor={'white'}/>
      </SimpleGrid>

      {/* Heading 1 */}
      <Heading size={'lg'} my={8}>Disastrous Images</Heading>
      <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={4}>
        <>
          {twitterData.map((item, index) => {
            if (item.classifiedImage.length > 0)
              return (
                <TweetWithImagesCard
                  key={index}
                  tweet={item.language === "en" ? item.tweet : item.translated}
                  images={item.classifiedImage.map((item)=> item.photos)}
                  username={item.username}
                  date={item.created_at}
                  socialMediaType={'instagram'}
                />
              )
          })}
        </>
      </SimpleGrid>

      {/* Heading 2 */}
      <Heading size={'lg'} my={8}>Non-Disastrous Images</Heading>
      <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={4} alignItems={'stretch'}>
        <>
          {twitterData.map((item, index) => {
            if (item.classifiedImage.length > 0)
              return (
                <TweetWithImagesCard
                  key={index}
                  tweet={item.tweet}
                  images={item.classifiedImage.map((item)=> item.photos)}
                  username={item.username}
                  date={item.date}
                  socialMediaType={'instagram'}
                />
              )
          })}
        </>
      </SimpleGrid>

    </EventFlowLayout>
  );
};

export default BinaryImageClassification;

export async function getServerSideProps() {

  let twitterData, facebookData, instagramData

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_DEMO}/event-flow/binary-image-classification`)
    if (res.data) {
      twitterData = res.data.data.twitterData
      facebookData = res.data.data.facebookData
    }
  } catch (e) {
    console.log(e)
    twitterData = []
    facebookData = []
  }

  instagramData = []

  return {
    props: {
      twitterData,
      facebookData,
      instagramData
    }
  }
}