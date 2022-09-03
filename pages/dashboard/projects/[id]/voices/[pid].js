import {Box} from "@chakra-ui/react";
import {PieChart} from "../../../../../components/Charts/PieChart";
import React from "react";
import {useRouter} from "next/router";
import AudioPlayer from "../../../../../components/AudioPlayer/AudioPlayer";
import IndividualTweetAnalysisLayout from "../_individualTweetAnalysisLayout";

const PieChartData = {
  labels: ['Emergency', 'Hospital', 'Evacuation', 'Help', 'Aid', 'Rescue'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgb(255, 111, 181,0.7)',
        'rgb(77, 119, 255, 0.7)',
        'rgba(255, 155, 132, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgb(60, 207, 78, 0.5)',
      ],
      borderColor: [
        'rgb(255, 111, 181, 1)',
        'rgb(77, 119, 255, 1)',
        'rgba(255, 155, 132, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgb(60, 207, 78, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

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