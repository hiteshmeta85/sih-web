import {Box, Grid, GridItem} from "@chakra-ui/react";
import React from "react";
import Alerts from "../../components/Dashboard/Alerts";
import DashTabs from "../../components/Dashboard/Tabs";
import DashboardContainer from "./_layout";
import ActiveModels from "../../components/Dashboard/ActiveModels";
import {CardTitle} from "../../components/Analysis/CardTitle";
import DataScrapper from "../../components/Dashboard/DataScrapper";
import SocialMediaCard from "../../components/Dashboard/SocialMediaCard";
import TweetCarousel from "../../components/Carousel/TweetCarousel";
import TweetCountPieChart from "../../components/Dashboard/TweetCountPieChart";
import TweetCountBarChart from "../../components/Dashboard/TweetCountBarChart";
import axios from "axios";

const Index = ({
  alerts,
  activeAccounts,
  recentProjects,
  trendingTweets,
  dataScrapped,
  pieChartData,
  barChartData,
  statistics
}) => {
  return (
    <DashboardContainer title={"Dashboard"}>
      <Box bg={"white"} p={4} rounded={'md'}>
        <Box
          border={"1px solid lightgray"}
          borderRadius={"md"}
          p={4} mb={4}
        >
          <CardTitle primaryText={'Trending Tweets'}/>
          <Box py={4} px={8}>
            <TweetCarousel data={trendingTweets}/>
          </Box>
        </Box>
        <Grid gridTemplateColumns={"repeat(3, 1fr)"} gap={4}>
          <GridItem colSpan={{base: 3, lg: 2}}>
            <Grid gridTemplateColumns={"repeat(4, 1fr)"} gap={4}>
              <GridItem colSpan={{base: 2, lg: 1}}>
                <DataScrapper dataScrapped={dataScrapped}/>
              </GridItem>
              <GridItem colSpan={{base: 2, lg: 1}}>
                <SocialMediaCard statistics={statistics}/>
              </GridItem>
              <GridItem
                colSpan={{base: 4, md: 2}}
                rowSpan={2}
              >
                {barChartData.length > 0 && <TweetCountBarChart data={barChartData}/>}
              </GridItem>
              <GridItem
                colSpan={{base: 4, md: 2}}
                rowSpan={2}
              >
                {pieChartData.length > 0 && <TweetCountPieChart data={pieChartData.data} labels={pieChartData.labels} primaryText={'Total Data Scrapped Percentage.'} secondaryText={'Project - Uttarakhand Flood'}/>}
              </GridItem>
              <GridItem colSpan={{base: 4, md: 2}} rowSpan={1}>
                <ActiveModels/>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={{base: 3, lg: 1}}>
            <Alerts alerts={alerts}/>
            <DashTabs activeAccounts={activeAccounts} recentProjects={recentProjects}/>
          </GridItem>
        </Grid>
        <Box my={4}>
          {/*<ClusterMap/>*/}
        </Box>
      </Box>
    </DashboardContainer>
  );
};

export default Index;

export async function getServerSideProps() {

  let alerts = [], activeAccounts = [], mapData = [], recentProjects = [], trendingTweets = [], dataScrapped = [],
    pieChartData = [], barChartData = []

  let statistics = {
    "projectId": 39,
    "twitter_scraped_count": 1554,
    "twitter_project_rel": 30,
    "insta_scraped_count": 0,
    "insta_project_rel": 40,
    "facebook_scraped_count": 19,
    "facebook_project_rel": 30,
    "total_scraped_count": 1573,
    "total_scraped_rel": 0
  }

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/dashboard`)
    if (res.data) {
      alerts = res.data.data.alerts,
        activeAccounts = res.data.data.activeAccounts,
        mapData = res.data.data.mapData,
        recentProjects = res.data.data.recentProjects,
        trendingTweets = res.data.data.trendingTweets,
        dataScrapped = res.data.data.dataScrapped,
        pieChartData = res.data.data.pieChartData,
        barChartData = res.data.data.barChart
    }
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      alerts,
      activeAccounts,
      mapData,
      recentProjects,
      trendingTweets,
      dataScrapped,
      pieChartData,
      barChartData,
      statistics
    }
  }
}