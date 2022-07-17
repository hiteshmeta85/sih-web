import DashboardContainer from "../_layout";
import CustomTable from "../../../components/Table/CustomTable"
import {Box, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import TweetCard from "../../../components/TweetCard/TweetCard";
import {TrendingTweetsData} from "./trending-tweets-data";
import "@fontsource/open-sans/500.css";

const ViewIndividualProject = () => {

  return (
    <DashboardContainer title={"Detailed Analysis"}>

      <Tabs borderRadius={"md"}>
        <TabList>
          <Tab>Tweets</Tab>
          <Tab>Tweets + Images</Tab>
          <Tab>Voices</Tab>
          <Tab>Videos</Tab>
          <Tab>Map</Tab>
          <Tab>Statistics</Tab>
          <Tab>Reports</Tab>
        </TabList>

        <TabPanels bg={"white"}>
          <TabPanel overflowX={'scroll'}>
            <CustomTable/>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={{base: 1, md: 2, lg: 3, "2xl": 4}}  rowGap={{base:2, lg:12}} columnGap={{base:2,lg:8}} my={2}>
            {TrendingTweetsData.map((item, index) => {
              return (
                <TweetCard key={index} description={item.description} image={item.image} username={item.username} date={item.date}/>
              )
            })}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <p>Voices</p>
          </TabPanel>
          <TabPanel>
            <p>Videos</p>
          </TabPanel>
          <TabPanel>
            <p>Map</p>
          </TabPanel>
          <TabPanel>
            <p>Statistics</p>
          </TabPanel>
          <TabPanel>
            <p>Download Reports</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </DashboardContainer>
  )
}

export default ViewIndividualProject