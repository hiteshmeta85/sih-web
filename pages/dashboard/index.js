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
  dataScrapped,
  pieChartData,
  barChartData,
  statistics
}) => {

  return (
    <DashboardContainer title={"Dashboard"}>
      <Box bg={"white"} p={4} rounded={'md'}>
        <Box
          border={"1px dashed black"}
          borderRadius={"md"}
          p={4} mb={4}
        >
          <CardTitle primaryText={'Trending Tweets'}/>
          <Box py={4} px={8}>
            {Object.keys(activeAccounts).length > 0 && <TweetCarousel data={activeAccounts.TwitterActiveAccounts.hashTags.concat(activeAccounts.FacebookActiveAccounts.hashTag, activeAccounts.InstagramActiveAccounts.hashTag).split(',')}/>}
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
                colSpan={{base: 2, lg: 2}}
              >
                <ActiveModels/>
              </GridItem>
              <GridItem
                colSpan={{base: 4, md: 2}}
                rowSpan={2}
              >
                {Object.keys(pieChartData).length > 0 && <TweetCountPieChart data={pieChartData.data} labels={pieChartData.labels} primaryText={'Total Data Scrapped Percentage.'} secondaryText={'Project - Uttarakhand Flood'}/>}
              </GridItem>
              <GridItem colSpan={{base: 4, md: 2}} rowSpan={1}>
                {Object.keys(barChartData).length > 0 && <TweetCountBarChart data={barChartData}/>}
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={{base: 3, lg: 1}}>
            <Alerts alerts={alerts}/>
            {Object.keys(activeAccounts).length > 0 && <DashTabs activeAccounts={activeAccounts.TwitterActiveAccounts.mentions.concat(activeAccounts.FacebookActiveAccounts.mentions, activeAccounts.InstagramActiveAccounts.mentions).split(',')} recentProjects={recentProjects}/>}
          </GridItem>
        </Grid>
      </Box>
    </DashboardContainer>
  );
};

export default Index;

export async function getServerSideProps() {

  let alerts = [], activeAccounts = {}, recentProjects = [], trendingTweets = [], dataScrapped = 0,
    pieChartData = {}, barChartData = {}, statistics = {}

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/dashboard`)
    if (res.data) {
      alerts = res.data.data.alerts,
        activeAccounts = res.data.data.activeAccounts,
        recentProjects = res.data.data.recentProjects,
        dataScrapped = res.data.data.dataScrapped,
        pieChartData = res.data.data.pieChartData,
        barChartData = res.data.data.barChart,
        statistics = res.data.data.statistics

    }
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      alerts,
      activeAccounts,
      recentProjects,
      trendingTweets,
      dataScrapped,
      pieChartData,
      barChartData,
      statistics
    }
  }
}