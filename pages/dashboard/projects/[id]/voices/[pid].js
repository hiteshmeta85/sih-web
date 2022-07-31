import {Box} from "@chakra-ui/react";
import {PieChart} from "../../../../../components/Charts/PieChart";
import {PieChartData} from "../../../../../components/Analysis/Analytics";
import React from "react";
import {useRouter} from "next/router";
import AudioPlayer from "../../../../../components/AudioPlayer/AudioPlayer";
import IndividualTweetAnalysisLayout from "../_individualTweetAnalysisLayout";

const IndividualVoiceAnalysis = () => {

  const router = useRouter()
  const {pid} = router.query

  return (
    <IndividualTweetAnalysisLayout
      title={'Individual Analysis - Voice'}
      rightSection={
        <Box p={4} border={"1px solid lightgray"} borderRadius={"md"}>
          <PieChart data={PieChartData}/>
        </Box>
      }
    >
      <AudioPlayer src={"https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav"}/>
    </IndividualTweetAnalysisLayout>
  );
};

export default IndividualVoiceAnalysis;