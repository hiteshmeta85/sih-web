import React from 'react';
import {Heading, SimpleGrid} from "@chakra-ui/react";
import StatCard from "../../../components/Stat/StatCard";
import ThumbnailCard from "../../../components/Card/ThumbnailCard";
import EventFlowLayout from "../_layout";
import axios from "axios";

const VideoObjectDetection = ({twitterData}) => {
  return (
    <EventFlowLayout
      heading={'STEP 6 - Binary Video Classification '}
      progressPercent={60}
      forwardLink={'/event-flow/voice-analysis'}
    >
      {/* Stats */}
      <SimpleGrid columns={{base: 2, md: 4}} gap={4}>
        <StatCard label={'Total No of Videos'} value={twitterData.length} cardBgColor={'blackAlpha.800'} titleColor={'white'}/>
        <StatCard label={'Total No of Disastrous Videos'} value={twitterData.filter((item)=> item.prediction === 1).length} cardBgColor={'#F04A4A'} titleColor={'white'} subTextColor={'white'}/>
        <StatCard label={'Total No of Non-Disastrous Videos'} value={twitterData.filter((item)=> item.prediction === 0).length} cardBgColor={'#3798F1'} titleColor={'white'} subTextColor={'white'}/>
      </SimpleGrid>

      {/* Heading 1 */}
      <Heading size={'lg'} my={8}>Disastrous Videos</Heading>
      <SimpleGrid columns={{base: 1, md: 2, lg: 3}} gap={4} alignItems={'stretch'} py={4}>
        <>
          {twitterData.map((item, index) => {
            if (item.objectDetectionImage.length > 0)
              return (
                <React.Fragment key={index}>
                  {item.objectDetectionImage.map((image, index)=> {
                    return (
                      <ThumbnailCard
                        key={index}
                        tweet={item.language === "en" || "" ? item.tweet : item.translated}
                        image={image.objectDetectionUrl}
                        username={item.username}
                        date={item.created_at}
                        socialMediaType={'twitter'}
                      />
                    )
                  })}
                </React.Fragment>
              )
          })}
        </>
      </SimpleGrid>
    </EventFlowLayout>
  );
};

export default VideoObjectDetection;

export async function getServerSideProps() {

  let twitterData = []

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_DEMO}/event-flow/image-object-detection`)
    if (res.data) {
      twitterData = res.data.data.twitterData
    }
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      twitterData
    }
  }
}