import {Box, Flex, Grid, GridItem, Icon, Text} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import Alerts from "../../components/Dashboard/Alerts";
import DashTabs from "../../components/Dashboard/Tabs";
import ActiveModels from "../../components/Dashboard/ActiveModels";
import {CardTitle} from "../../components/Analysis/CardTitle";
import DataScrapper from "../../components/Dashboard/DataScrapper";
import SocialMediaCard from "../../components/Dashboard/SocialMediaCard";
import TweetCarousel from "../../components/Carousel/TweetCarousel";
import TweetCountPieChart from "../../components/Dashboard/TweetCountPieChart";
import TweetCountBarChart from "../../components/Dashboard/TweetCountBarChart";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardMenu from "../../components/Sidebar/DashboardMenu";
import {IoMdTrendingUp} from "react-icons/io";

const Index = ({
  alerts,
  activeAccounts,
  recentProjects,
  dataScrapped,
  pieChartData,
  barChartData,
  statistics
}) => {

  const [greet, setGreet] = useState('Good Morning')

  useEffect(()=> {
    let welcome;
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (second < 10) {
      second = "0" + second;
    }
    if (hour < 12) {
      welcome = "Good Morning";
    } else if (hour < 17) {
      welcome = "Good Afternoon";
    } else {
      welcome = "Good Evening";
    }
    setGreet(welcome)
  }, [])

  return (
    <Flex>
      <Sidebar isSidebarOpenByDefault={false} backgroundColor={'#6F6AF8'}/>
      <Box
        flex={1}
        h={'100vh'}
        overflow={'scroll'}
      >
        <Box
          display={{base: 'flex', lg: 'none'}}
          justifyContent={'flex-end'}
          mx={{base: 2, md: 6}}
          mt={2}
        >
          <DashboardMenu/>
        </Box>
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          borderRadius={"md"}
          mt={{base: 3, lg: 4}}
          pl={4}
          pr={2}
          py={2}
          color={'gray.800'}
          fontWeight={'bold'}
          fontSize={'x-large'}
        >
          <Text fontSize={'3xl'}>
            {greet}, NDRF!
          </Text>
        </Flex>
        <Box pr={3}>
          <Box p={4} rounded={'md'}>
            <Box
              mb={8}
              borderRadius={24}
              boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
              p={6}
              h={'full'}
              bg={'white'}
            >
              <CardTitle primaryText={'Trending Hashtags'} icon={<Icon as={IoMdTrendingUp} h={8} w={8}/>}/>
              <Box py={4} px={8}>
                {Object.keys(activeAccounts).length > 0 && <TweetCarousel data={activeAccounts.TwitterActiveAccounts.hashTags.concat(activeAccounts.FacebookActiveAccounts.hashTag, activeAccounts.InstagramActiveAccounts.hashTag).split(',')}/>}
              </Box>
            </Box>
            <Grid gridTemplateColumns={"repeat(3, 1fr)"} gap={6}>
              <GridItem colSpan={{base: 3, lg: 2}}>
                <Grid gridTemplateColumns={"repeat(4, 1fr)"} gap={6}>
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
        </Box>
      </Box>
    </Flex>
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