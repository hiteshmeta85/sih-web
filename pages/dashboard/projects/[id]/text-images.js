import {SimpleGrid, TabPanel, TabPanels} from "@chakra-ui/react";
import React from "react";
import TabsLayout from "./_tabsLayout";
import TweetCard from "../../../../components/Tweet/TweetCard";
import {TrendingTweetsData} from "../../../../components/Tweet/trending-tweets-data";

const ProjectTextPlusVideosView = () => {

  return (
    <TabsLayout defaultIndex={1}>
      <TabPanels bg={"white"}>
        <TabPanel/>
        <TabPanel bg={'#F5F5F5'} px={0}>
          <SimpleGrid columns={{base: 1, md: 2, lg: 3, "2xl": 4}} gap={{base: 2, lg: 6}} my={2}>
            <>
              {TrendingTweetsData.map((item, index) => {
                return (
                  <TweetCard key={index} description={item.description} image={item.image} username={item.username} date={item.date}/>
                )
              })}
            </>
          </SimpleGrid>
        </TabPanel>
      </TabPanels>
    </TabsLayout>
  )
}

export default ProjectTextPlusVideosView