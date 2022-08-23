import React from 'react';
import EventFlowLayout from "./_layout";
import {Box, Heading, Icon, SimpleGrid, Text} from "@chakra-ui/react";
import StatCard from "../../components/Stat/StatCard";
import TweetWithImagesCard from "../../components/Card/TweetWithImagesCard";
import axios from "axios";
import {MdOutlineTranslate} from "react-icons/md";

const BinaryImageClassification = ({twitterData, facebookData, instagramData}) => {
  return (
    <EventFlowLayout
      heading={'Step 4 - Binary Image Classification'}
      progressPercent={40}
      forwardLink={'/event-flow/multi-label-image-classification'}
    >

      {/* Stats */}
      <SimpleGrid columns={{base: 2, md: 4}} gap={4}>
        <StatCard label={'Total No of Posts with Images'} value={twitterData.filter((item) => item.classifiedImage.length > 0).length + facebookData.filter((item)=> item.classifiedImage.length > 0).length + instagramData.filter((item)=> item.classifiedImage.length > 0).length} cardBgColor={'blackAlpha.800'} titleColor={'white'}/>
        <StatCard label={'Total No of Disastrous Images'} value={twitterData.filter((image)=> image.prediction === 1).length + facebookData.filter((item)=> item.classifiedImage.filter((image)=> image.prediction === 1)).length + instagramData.filter((image) => image.prediction === 1).length} cardBgColor={'#F04A4A'} titleColor={'white'} subTextColor={'white'}/>
        <StatCard label={'Total No of Non-Disastrous Images'} value={twitterData.filter((image)=> image.prediction === 0).length + facebookData.filter((item)=> item.classifiedImage.filter((image)=> image.prediction === 0)).length + instagramData.filter((image) => image.prediction === 0).length} cardBgColor={'#3798F1'} titleColor={'white'} subTextColor={'white'}/>
      </SimpleGrid>

      {/* Heading 1 */}
      <Heading size={'lg'} my={8}>Disastrous Images</Heading>
      <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={4}>
        <>
          {twitterData.map((item, index) => {
            if (item.classifiedImage.length > 0)
              return (
                <React.Fragment key={index}>
                  {item.classifiedImage.map((image, index) => {
                    if (image.imagePrediction === 1)
                      return (
                        <TweetWithImagesCard
                          key={index}
                          tweet={item.language === "en" || "" ? item.tweet :<Box><Icon as={MdOutlineTranslate} h={6} w={6} color={'gray.700'}/><Text>{item.translated}</Text></Box>}
                          images={[`${image.photos}`]}
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
        <>
          {facebookData.map((item, index) => {
            if (item.classifiedImage.length > 0)
              return (
                <React.Fragment key={index}>
                  {item.classifiedImage.map((image, index) => {
                    if (image.imagePrediction === 1)
                      return (
                        <TweetWithImagesCard
                          key={index}
                          tweet={item.language === "en" || "" ? item.post_text :<Box><Icon as={MdOutlineTranslate} h={6} w={6} color={'gray.700'}/><Text>{item.translated}</Text></Box>}
                          images={[`${image.photos}`]}
                          username={item.username}
                          date={item.time}
                          socialMediaType={'facebook'}
                        />
                      )
                  })}
                </React.Fragment>
              )
          })}
        </>
        {/*<>
          {instagramData.map((item, index) => {
            if (item.classifiedImage.length > 0)
              return (
                <React.Fragment key={index}>
                  {item.classifiedImage.map((image, index) => {
                    if (image.imagePrediction === 1)
                      return (
                        <TweetWithImagesCard
                          key={index}
                          tweet={item.language === "en" || "" ? item.tweet : item.translated}
                          images={[`${image.photos}`]}
                          username={'unknown'}
                          date={item.upload_time}
                          socialMediaType={'instagram'}
                        />
                      )
                  })}
                </React.Fragment>
              )
          })}
        </>*/}
      </SimpleGrid>

      {/* Heading 2 */}
      <Heading size={'lg'} my={8}>Non-Disastrous Images</Heading>
      <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={4} alignItems={'stretch'}>
        <>
          {twitterData.map((item, index) => {
            if (item.classifiedImage.length > 0)
              return (
                <React.Fragment key={index}>
                  {item.classifiedImage.map((image, index) => {
                    if (image.imagePrediction === 0)
                      return (
                        <TweetWithImagesCard
                          key={index}
                          tweet={item.language === "en" || "" ? item.tweet : item.translated}
                          images={[`${image.photos}`]}
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
        <>
          {facebookData.map((item, index) => {
            if (item.classifiedImage.length > 0)
              return (
                <React.Fragment key={index}>
                  {item.classifiedImage.map((image, index) => {
                    if (image.imagePrediction === 0)
                      return (
                        <TweetWithImagesCard
                          key={index}
                          tweet={item.language === "en" || "" ? item.post_text : item.translated}
                          images={[`${image.photos}`]}
                          username={item.username}
                          date={item.time}
                          socialMediaType={'facebook'}
                        />
                      )
                  })}
                </React.Fragment>
              )
          })}
        </>
        {/*<>
          {instagramData.map((item, index) => {
            if (item.classifiedImage.length > 0)
              return (
                <React.Fragment key={index}>
                  {item.classifiedImage.map((image, index) => {
                    if (image.imagePrediction === 0)
                      return (
                        <TweetWithImagesCard
                          key={index}
                          tweet={item.language === "en" || "" ? item.tweet : item.translated}
                          images={[`${image.photos}`]}
                          username={'unknown'}
                          date={item.upload_time}
                          socialMediaType={'instagram'}
                        />
                      )
                  })}
                </React.Fragment>
              )
          })}
        </>*/}
      </SimpleGrid>

    </EventFlowLayout>
  );
};

export default BinaryImageClassification;

export async function getServerSideProps() {

  let twitterData = [], facebookData = [], instagramData = []

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_DEMO}/event-flow/binary-image-classification`)
    if (res.data) {
      twitterData = res.data.data.twitterData
      facebookData = res.data.data.facebookData
      instagramData = res.data.data.instagramData
    }
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      twitterData,
      facebookData,
      instagramData
    }
  }
}