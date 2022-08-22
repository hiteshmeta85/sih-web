import React from 'react';
import EventFlowLayout from "./_layout";
import {Heading, SimpleGrid} from "@chakra-ui/react";
import StatCard from "../../components/Stat/StatCard";
import TweetWithVoices from '../../components/Card/TweetWithVoices';
import axios from "axios";

const VoiceAnalysis = ({voices}) => {

  console.log(voices)

  return (
    <EventFlowLayout
      heading={'STEP 7 - Voice Analysis'}
      progressPercent={70}
      forwardLink={'/event-flow/geolocation-marking'}
    >
      {/* Stats */}
      <SimpleGrid columns={{base: 2, md: 4}} gap={4}>
        <StatCard label={'Total No of Voices'} value={2} cardBgColor={'blackAlpha.800'} titleColor={'white'}/>
      </SimpleGrid>

      {/* Heading */}
      <Heading size={'lg'} my={8}>Voices</Heading>

      {/* Voices */}
      <SimpleGrid columns={{base: 1, md: 2}} gap={4}>
        <>
          {voices.map((item, index) => {
            return (
              <TweetWithVoices
                key={index}
                username={"omsurve"}
                date={"22 Aug 2022"}
                audio={item.audio_link}
                language={item.language}
                transcript={item.transcript}
                multilabel={item.multilabel}
                location={item.location}
                affectedPeople={item.affectedPeople}
                help={item.help}
                organisationsHelping={item.organisationsHelping}
                disasterType={item.disasterType}
              />
            )
          })}
        </>
      </SimpleGrid>
    </EventFlowLayout>
  );
};

export default VoiceAnalysis;

export async function getServerSideProps() {

  let voices = []

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_DEMO}/event-flow/voice-analysis`)
    if (res.data) {
      console.log(res.data)
      voices = res.data.data
    }
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      voices
    }
  }
}