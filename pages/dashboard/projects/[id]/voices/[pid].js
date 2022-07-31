import DashboardContainer from "../../../_layout";
import {Box, Grid, GridItem} from "@chakra-ui/react";
import ReactAudioPlayer from "react-audio-player";
import {PieChart} from "../../../../../components/Charts/PieChart";
import {PieChartData} from "../../../../../components/Analysis/Analytics";
import React from "react";
import {useRouter} from "next/router";

const IndividualVoiceAnalysis = () => {

  const router = useRouter()
  const { pid } = router.query

  return (
    <DashboardContainer title="Individual Analysis - IndividualVoiceAnalysis">
      <Box bg={"white"} p={4} rounded={"md"}>
        <Grid gridTemplateColumns={"repeat(5, 1fr)"} gap={8}>
          <GridItem colSpan={{base: 5, lg: 3}}>
            <Grid gap={8}>
              <GridItem>
                <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                  <GridItem w="100%" p={6}>
                    <ReactAudioPlayer
                      src={
                        "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav"
                      }
                      autoPlay
                      controls
                    />
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={{base: 5, md: 2}}>
            <Box p={4} border={"1px solid lightgray"} borderRadius={"md"}>
              <PieChart data={PieChartData}/>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </DashboardContainer>
  );
};

export default IndividualVoiceAnalysis;