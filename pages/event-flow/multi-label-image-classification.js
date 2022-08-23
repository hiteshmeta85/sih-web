import React from "react";
import EventFlowLayout from "./_layout";
import {Heading, SimpleGrid} from "@chakra-ui/react";
import StatCard from "../../components/Stat/StatCard";
import TweetWithImagesCard from "../../components/Card/TweetWithImagesCard";
import axios from "axios";


const MultiLabelImageClassification = ({twitterData, facebookData, instagramData}) => {
  return (
    <EventFlowLayout
      heading={"Step 5 - Multi-label Image Classification"}
      progressPercent={40}
      forwardLink={"/event-flow/image-object-detection"}
    >
      <SimpleGrid columns={{base: 2, md: 4}} gap={4}>
        <StatCard
          label={"Total No of Disastrous Images"}
          value={twitterData.map((item)=> item.classifiedImage.filter((image)=> image.prediction === 1)).length + facebookData.map((item)=> item.classifiedImage.filter((image)=> image.prediction === 1)).length + instagramData.map((item)=> item.classifiedImage.filter((image) => image.prediction === 1)).length}
          cardBgColor={"#363232"}
          titleColor={"white"}
          subTextColor={"white"}
        />
      </SimpleGrid>

      {/* Heading */}
      <Heading size={"lg"} my={8}>Images</Heading>

      {/* Multi-Label Image Classification */}
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
                          label={image.classifiedClass}
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
                    if (image.imagePrediction === 1)
                      return (
                        <TweetWithImagesCard
                          key={index}
                          label={image.classifiedClass}
                          tweet={item.language === "en" || "" ? item.tweet : item.translated}
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
      </SimpleGrid>
    </EventFlowLayout>
  );
};

export default MultiLabelImageClassification;

export async function getServerSideProps() {

  let twitterData = [], facebookData = [], instagramData = []

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_DEMO}/event-flow/multi-label-image-classification`)
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
