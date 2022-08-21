import TabsLayout from "../_tabsLayout";
import {Flex, Grid, Select, StatGroup, TabPanel, TabPanels} from "@chakra-ui/react";
import React, {useState} from "react";
import StatCard from "../../../../../components/Stat/StatCard";
import axios from "axios";
import TweetCountBarChart from "../../../../../components/Dashboard/TweetCountBarChart";
import TweetCountPieChart from "../../../../../components/Dashboard/TweetCountPieChart";

const ProjectAnalytics = ({statistics, barChartData, pieChartData}) => {

  const handleSocialMediaChange = (event) => {
    console.log(pieChartData[event.target.value])
    if(Object.keys(pieChartData[event.target.value]).length > 0){
      if(pieChartData[event.target.value].labels.length !== 0 && pieChartData[event.target.value].data.length !== 0){
        setSelectedSocialMediaType(event.target.value)
      }
    }
  }

  const [selectedSocialMediaType, setSelectedSocialMediaType] = useState("twitterPieChart")

  return (
    <TabsLayout defaultIndex={5}>
      <TabPanels bg={"white"}>
        <TabPanel/>
        <TabPanel/>
        <TabPanel/>
        <TabPanel/>
        <TabPanel/>
        <TabPanel>
          <Flex flexDir={'column'} gap={5}>
            <StatGroup gap={5}>
              <StatCard label={'Final Verdict'} value={statistics.totalRanked} boxShadow={'2xl'} cardBgColor={'blackAlpha.800'} titleColor={'white'}/>
              <StatCard label={'Total Prediction'} value={statistics.totalPredict}/>
              <StatCard label={'Twitter'} value={statistics.twitterPredictCount}/>
              <StatCard label={'Facebook'} value={statistics.facebookPredictCount}/>
              <StatCard label={'Instagram'} value={statistics.instagramPredictCount}/>
            </StatGroup>
            <Grid templateColumns='repeat(2, 1fr)' gap={5} mt={4}>
              <TweetCountBarChart data={barChartData}/>
              <TweetCountPieChart
                data={pieChartData[selectedSocialMediaType].data}
                labels={pieChartData[selectedSocialMediaType].labels}
                primaryText={'Multi-Labels %'}
                extras={<Select value={selectedSocialMediaType} onChange={(e) => handleSocialMediaChange(e)} w={'150px'} my={2}>
                  <option value="twitterPieChart">Twitter</option>
                  <option value="facebookPieChart">Facebook</option>
                  <option value="instagramPieChart">Instagram</option>
                </Select>}
              />
            </Grid>
          </Flex>
        </TabPanel>
      </TabPanels>
    </TabsLayout>
  )
}

export default ProjectAnalytics

export async function getServerSideProps(context){
  const {id} = context.params
  console.log(id)

  let pieChartData = {}, barChartData = {}, statistics = {}

  try {
   const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/projects/39/analytics`)
    if (res.data) {
      pieChartData = res.data.pieChartData
      statistics = res.data.statistics
      barChartData = res.data.barChart
    }
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      statistics,
      barChartData,
      pieChartData
    }
  }
}