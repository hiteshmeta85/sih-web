import React from "react";
import EventFlowLayout from "./_layout";
import {Heading, SimpleGrid} from "@chakra-ui/react";
import StatCard from "../../components/Stat/StatCard";
import TweetCard from "../../components/Card/TweetCard";
import {TweetWithImages} from "./binary-image-classification";

const MultiLabelImageClassification = () => {
  return (
    <EventFlowLayout
      heading={"Step 5 - Multi-label Image Classification"}
      progressPercent={50}
      forwardLink={"/event-flow/binary-video-classification"}
    >
      <SimpleGrid columns={{base: 2, md: 4}} gap={4}>
        <StatCard
          label={"Total No of Disastrous Tweets"}
          value={50}
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
          {TweetWithImages.map((item, index) => {
            if (item.photos.length > 0)
              return (
                <TweetCard
                  label="Emergency"
                  key={index}
                  tweet={item.tweet}
                  image={item.photos.length > 0 && item.photos[0]}
                  username={item.username}
                  date={item.date}
                  socialMediaType={'facebook'}
                />
              )
          })}
        </>
      </SimpleGrid>
    </EventFlowLayout>
  );
};

export default MultiLabelImageClassification;
