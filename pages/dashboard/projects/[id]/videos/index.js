import TabsLayout from "../_tabsLayout";
import {SimpleGrid, TabPanel, TabPanels} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import ThumbnailCard from "../../../../../components/Card/ThumbnailCard";

const ProjectVideos = ({twitterData}) => {

  return (
    <TabsLayout defaultIndex={3}>
      <TabPanels bg={"white"}>
        <TabPanel/>
        <TabPanel/>
        <TabPanel/>
        <TabPanel>
          <SimpleGrid columns={{base: 1, md: 2, lg: 3}} gap={4} alignItems={'stretch'} py={4}>
            <>
              {twitterData.map((item, index) => {
                return (
                  <ThumbnailCard
                    key={index}
                    tweet={item.language === "en" || "" ? item.tweet : item.translated}
                    image={item.thumbnail}
                    username={item.username}
                    date={item.created_at}
                    socialMediaType={'twitter'}
                  />
                )
              })}
            </>
          </SimpleGrid>
        </TabPanel>
      </TabPanels>
    </TabsLayout>
  )
}

export default ProjectVideos

export async function getServerSideProps() {

  let twitterData = []

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/projects/1/videos`)
    if (res.data) {
      twitterData = res.data.data.twitter
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