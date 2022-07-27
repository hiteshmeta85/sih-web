import {Box, Grid, GridItem} from "@chakra-ui/react";
import React from "react";
import {BarChart} from "../../components/Charts/BarChart";
import Alerts from "../../components/Dashboard/Alerts";
import DashTabs from "../../components/Dashboard/Tabs";
import DashboardContainer from "./_layout";
import {BarChartData, PieChartData} from "../../components/Analysis/Analytics";
import {PieChart} from "../../components/Charts/PieChart";
import ActiveModels from "../../components/Dashboard/ActiveModels";
import {CardTitle} from "../../components/Analysis/CardTitle";
import DataScrapper from "../../components/Dashboard/DataScrapper";
import SocialMediaCard from "../../components/Dashboard/SocialMediaCard";
import ClusterMap from "../../components/Map/ClusterMap";

const Index = () => {
  return (
    <DashboardContainer title={"Dashboard"}>
      <Box bg={"white"} p={4}>
        <Grid gridTemplateColumns={{base: 'repeat(2, 1fr)', lg: "repeat(3, 1fr)"}} gap={4}>
          <GridItem colSpan={2}>
            <Grid gridTemplateColumns={{base: 'repeat(3, 1fr)', lg: 'repeat(3, 1fr)', xl: "repeat(4, 1fr)"}} gap={4}>
              <GridItem colSpan={1}>
                <DataScrapper/>
              </GridItem>
              <GridItem colSpan={1}>
                <SocialMediaCard/>
              </GridItem>
              <GridItem
                colSpan={2}
                rowSpan={2}
                border={"1px solid lightgray"}
                p={4}
                alignItems={"center"}
                borderRadius={"md"}
              >
                <CardTitle primaryText={'Lorem Ipsum'} secondaryText={'Vivamus in enim ut tortor placerat rutrum.'}/>
                <Box mt={4}>
                  <BarChart data={BarChartData}/>
                </Box>
              </GridItem>
              <GridItem
                colSpan={2}
                rowSpan={2}
                p={4}
                border={"1px solid lightgray"}
                borderRadius={"md"}
              >
                <CardTitle primaryText={'Lorem Ipsum'} secondaryText={'Vivamus in enim ut tortor placerat rutrum.'}/>
                <PieChart data={PieChartData}/>
              </GridItem>
              <GridItem colSpan={2} rowSpan={1}>
                <ActiveModels/>
              </GridItem>
              <GridItem colSpan={4}>
                <ClusterMap/>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={1}>
            <Alerts/>
            <DashTabs/>
          </GridItem>
        </Grid>
      </Box>
    </DashboardContainer>
  );
};

export default Index;
