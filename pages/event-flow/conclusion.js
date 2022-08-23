import React from 'react';
import EventFlowLayout from "./_layout";
import {Box, SimpleGrid} from "@chakra-ui/react";
import StatCard from "../../components/Stat/StatCard";
import {
  BsCardImage,
  BsClipboardData,
  BsFacebook,
  BsFillCameraVideoFill,
  BsInstagram,
  BsSoundwave,
  BsTwitter
} from "react-icons/bs";
import {IoLocationSharp} from "react-icons/io5";
import {CgDanger} from "react-icons/cg";
import axios from "axios";

const Conclusion = ({stats}) => {
  return (
    <EventFlowLayout
      heading={'Step 10 - Conclusion'}
      progressPercent={100}
      forwardLink={'/dashboard'}
    >
      {Object.keys(stats).length > 0 && <>
        <SimpleGrid columns={{base: 2, md: 5}} gap={4}>
          <StatCard icon={<BsClipboardData size={'2.5rem'} color={'white'}/>} label={'Total Number of Tweets and Posts Scrapped'} value={stats.totalScrapped} cardBgColor={'blackAlpha.800'} titleColor={'white'}/>
          <StatCard icon={<BsClipboardData size={'2.5rem'} color={'white'}/>} label={'Total Number of Tweets and Posts Ranked'} value={stats.totalRanked} cardBgColor={'gray.500'} titleColor={'white'} subTextColor={'blackAlpha.700'}/>
          <Box/>
          <StatCard icon={<IoLocationSharp size={'2.5rem'} color={'#EB8F34'}/>} label={'Top Location Identified'} text={stats.topLocation} textColor={'green.700'} cardBgColor={'green.200'}/>
          <StatCard icon={<CgDanger size={'2.5rem'} color={'#EB3434'}/>} label={'Estimate Number of Affected People'} value={stats.affectedPeople} cardBgColor={'red.300'} subTextColor={'red.700'}/>
        </SimpleGrid>

        <SimpleGrid columns={{base: 2, md: 5}} gap={4} my={6}>
          <StatCard icon={<BsClipboardData size={'2.5rem'} color={'white'}/>} label={'Total Number of Disastrous Tweets and Posts'} value={stats.totalPredict} cardBgColor={'purple.300'} titleColor={'white'} subTextColor={'white'}/>
          <Box/>
          <StatCard icon={<BsTwitter size={'2.5rem'} color={'white'}/>} label={'Total Disastrous Tweets from Twitter'} value={stats.twitterPredictCount} cardBgColor={'#1DA1F2'} titleColor={'white'} subTextColor={'white'}/>
          <StatCard icon={<BsFacebook size={'2.5rem'} color={'white'}/>} label={'Total Disastrous Post from Facebook'} value={stats.facebookPredictCount} cardBgColor={'#4267B2'} titleColor={'white'} subTextColor={'white'}/>
          <StatCard icon={<BsInstagram size={'2.5rem'} color={'white'}/>} label={'Total Disastrous Post from Instagram'} value={stats.instagramPredictCount} cardBgColor={'#FCAF45'} titleColor={'white'} subTextColor={'white'}/>
        </SimpleGrid>

        <SimpleGrid columns={{base: 3, md: 5}} gap={4} my={6}>
          <StatCard icon={<BsCardImage size={'2.5rem'}/>} label={'Total Number of Images'} value={stats.imagesCount} cardBgColor={'pink.200'} subTextColor={'pink.800'}/>
          <StatCard icon={<BsFillCameraVideoFill size={'2.5rem'}/>} label={'Total Number of Videos'} value={stats.videosCount} cardBgColor={'teal.200'} subTextColor={'teal.800'}/>
          <StatCard icon={<BsSoundwave size={'2.5rem'}/>} label={'Total Number of Audios'} value={stats.audioCount} cardBgColor={'cyan.300'} subTextColor={'cyan.800'}/>
        </SimpleGrid>
      </>}
    </EventFlowLayout>
  );
};

export default Conclusion;

export async function getServerSideProps() {

 let stats = {}

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_DEMO}/event-flow/conclusion`)
    if (res.data) {
      stats = res.data.data
    }
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      stats
    }
  }
}