import React from 'react';
import {Box} from "@chakra-ui/react";
import {CardTitle} from "../Analysis/CardTitle";
import {PieChart} from "../Charts/PieChart";

const TweetCountPieChart = ({labels, data}) => {

  return (
    <Box
      p={4}
      border={"1px solid lightgray"}
      borderRadius={"md"}
    >
      <CardTitle primaryText={'Total Data Scrapped Percentage.'} secondaryText={'Project - Uttarakhand Flood'}/>
      <PieChart data={{
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: [
              'rgb(29, 161, 242, 0.9)',
              'rgba(66, 103, 178, 0.9)',
              'rgba(252, 175, 69, 0.9)'
            ],
            borderColor: [
              'rgba(29, 161, 242, 1)',
              'rgba(66, 103, 178, 1)',
              'rgba(252, 175, 69, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }}/>
    </Box>
  );
};

export default TweetCountPieChart;