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

const Conclusion = () => {
  return (
    <EventFlowLayout
      heading={'Step 10 - Conclusion'}
      progressPercent={100}
      forwardLink={'/dashboard'}
    >
      <SimpleGrid columns={{base: 2, md: 5}} gap={4}>
        <StatCard icon={<BsClipboardData size={'2.5rem'} color={'white'}/>} label={'Total Number of Disastrous Tweets and Posts'} value={1000} cardBgColor={'blackAlpha.800'} titleColor={'white'}/>
        <Box/>
        <StatCard icon={<BsTwitter size={'2.5rem'} color={'white'}/>} label={'Total Disastrous Tweets from Twitter'} value={800} cardBgColor={'#1DA1F2'} titleColor={'white'} subTextColor={'white'}/>
        <StatCard icon={<BsFacebook size={'2.5rem'} color={'white'}/>} label={'Total Disastrous Post from Facebook'} value={100} cardBgColor={'#4267B2'} titleColor={'white'} subTextColor={'white'}/>
        <StatCard icon={<BsInstagram size={'2.5rem'} color={'white'}/>} label={'Total Disastrous Post from Instagram'} value={100} cardBgColor={'#FCAF45'} titleColor={'white'} subTextColor={'white'}/>
      </SimpleGrid>

      <SimpleGrid columns={{base: 3, md: 5}} gap={4} my={6}>
        <Box/>
        <StatCard icon={<BsCardImage size={'2.5rem'}/>} label={'Total Number of Images'} value={500} cardBgColor={'pink.200'} subTextColor={'pink.800'}/>
        <StatCard icon={<BsFillCameraVideoFill size={'2.5rem'}/>} label={'Total Number of Videos'} value={100} cardBgColor={'teal.200'} subTextColor={'teal.800'}/>
        <StatCard icon={<BsSoundwave size={'2.5rem'}/>} label={'Total Number of Audios'} value={50} cardBgColor={'cyan.300'} subTextColor={'cyan.800'}/>
      </SimpleGrid>

      <SimpleGrid columns={{base: 3, md: 5}} gap={4} mt={6}>
        <StatCard icon={<IoLocationSharp size={'2.5rem'} color={'#EB8F34'}/>} label={'Top Location Identified'} text={'Panvel, Maharashtra'} textColor={'green.700'} cardBgColor={'green.200'}/>
        <StatCard icon={<CgDanger size={'2.5rem'} color={'#EB3434'}/>} label={'Estimate Number of Affected People'} value={1000} cardBgColor={'red.300'} subTextColor={'red.700'}/>
      </SimpleGrid>
    </EventFlowLayout>
  );
};

export default Conclusion;