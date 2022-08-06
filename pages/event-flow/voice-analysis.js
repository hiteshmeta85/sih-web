import React from 'react';
import EventFlowLayout from "./_layout";
import {Heading, SimpleGrid} from "@chakra-ui/react";
import StatCard from "../../components/Stat/StatCard";
import TweetWithVoices from '../../components/Card/TweetWithVoices';
import {BinaryAudioVideoData} from './binary-video-classification';

const VoiceAnalysis = () => {
  return (
    <EventFlowLayout
      heading={'STEP 7 - Voice Analysis'}
      progressPercent={70}
      forwardLink={'/event-flow/geolocation-marking'}
    >
      {/* Stats */}
      <SimpleGrid columns={{base: 2, md: 4}} gap={4}>
        <StatCard label={'Total No of Voices'} value={100} cardBgColor={'blackAlpha.800'} titleColor={'white'}/>
        <StatCard label={'Voices from Twitter'} value={50} cardBgColor={'#1DA1F2'} titleColor={'white'} subTextColor={'white'}/>
        <StatCard label={'Voices from Facebook'} value={30} cardBgColor={'#4267B2'} titleColor={'white'} subTextColor={'white'}/>
        <StatCard label={'Voices from Instagram'} value={20} cardBgColor={'#FCAF45'} titleColor={'white'} subTextColor={'white'}/>
      </SimpleGrid>

      {/* Heading */}
      <Heading size={'lg'} my={8}>Voices</Heading>

      {/* Voices */}
      <SimpleGrid columns={{base: 1, md: 2, lg: 3}} gap={4}>
        <>
          {BinaryAudioVideoData.map((item, index) => {
            return (
              <TweetWithVoices
                key={index}
                username={item.username}
                date={item.date}
                audio={item.audio}/>
            )
          })}
        </>
      </SimpleGrid>
    </EventFlowLayout>
  );
};

export default VoiceAnalysis;