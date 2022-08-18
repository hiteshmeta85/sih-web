import React, {useState} from 'react';
import {Box, Flex, Select} from "@chakra-ui/react";
import {CardTitle} from "../Analysis/CardTitle";
import {BarChart} from "../Charts/BarChart";

const TweetCountBarChart = ({data}) => {
  const [selectedSocialMediaType, setSelectedSocialMediaType] = useState("twitterBarChart")
  const [selectedDateRange, setSelectedDateRange] = useState("year")
  const [chartData, setChartData] = useState(data["twitterBarChart"][0].data)
  const [chartLabels, setChartLabels] = useState(data["twitterBarChart"][0].labels)

  const handleSocialMediaChange = (event) => {
    if(data[event.target.value].length > 0){
      setSelectedDateRange("year")
      setSelectedSocialMediaType(event.target.value)
      setChartLabels(data[event.target.value].find((item) => item.type === "year").labels)
      setChartData(data[event.target.value].find((item) => item.type === "year").data)
    }
  }

  const handleSelectedDateRange = (event) => {
    setSelectedDateRange(event.target.value)
    setChartLabels(data[selectedSocialMediaType].find((item) => item.type === event.target.value).labels)
    setChartData(data[selectedSocialMediaType].find((item) => item.type === event.target.value).data)
  }

  return (
    <Box
      border={"1px solid lightgray"}
      p={4}
      alignItems={"center"}
      borderRadius={"md"}
    >
      <Flex justifyContent={'space-between'}>
        <Select value={selectedSocialMediaType} onChange={(e) => handleSocialMediaChange(e)} w={'150px'} my={2}>
          <option value="twitterBarChart">Twitter</option>
          <option value="facebookBarChart">Facebook</option>
          <option value="instagramBarChart">Instagram</option>
        </Select>
        <Select value={selectedDateRange} onChange={(e) => handleSelectedDateRange(e)} w={'150px'} my={2}>
          {selectedSocialMediaType === "twitterBarChart" && data.twitterBarChart.map((item, index) => {
            return (
              <option key={index} value={item.type}>{item.type}</option>
            )
          })}
          {selectedSocialMediaType === "facebookBarChart" && data.facebookBarChart.map((item, index) => {
            return (
              <option key={index} value={item.type}>{item.type}</option>
            )
          })}
          {selectedSocialMediaType === "instagramBarChart" && data.instagramBarChart.map((item, index) => {
            return (
              <option key={index} value={item.type}>{item.type}</option>
            )
          })}
        </Select>
      </Flex>
      <CardTitle primaryText={'Data Scrapped vs Time'} secondaryText={''}/>
      <Box mt={4} height={'400px'}>
        <BarChart data={{
          labels: chartLabels,
          datasets: [{
            label: [selectedDateRange],
            data: chartData,
            backgroundColor: [
              'rgb(29, 161, 242, 0.2)',
              'rgba(66, 103, 178, 0.2)',
              'rgba(252, 175, 69, 0.2)',
              'rgba(252, 175, 19, 0.2)',
              'rgba(252, 105, 29, 0.2)',
            ],
            borderColor: [
              'rgba(29, 161, 242, 1)',
              'rgba(66, 103, 178, 1)',
              'rgba(252, 175, 69, 1)',
            ],
            borderWidth: 1,
          }]
        }}/>
      </Box>
    </Box>
  );
};

export default TweetCountBarChart;