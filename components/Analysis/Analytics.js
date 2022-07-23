import {BarChart} from "../Charts/BarChart";
import {ScatterChart} from "../Charts/ScatterChart";
import {PieChart} from "../Charts/PieChart";
import {Flex} from "@chakra-ui/react";

const BarChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [28, 36, 52, 21, 71, 21, 77],
      backgroundColor: ['rgb(235, 29, 54, 0.5)', 'rgb(60, 207, 78, 0.5)', 'rgb(88, 0, 255, 0.5)'], // add array of colors to customize bg-color for different bars
    },
  ],
};

const ScatterChartData = {
  datasets: [
    {
      label: 'A dataset',
      data: [
        {
          x: 18,
          y: 28,
        },
        {
          x: 18,
          y: 20,
        },
        {
          x: 19,
          y: 21,
        },
        {
          x: 10,
          y: 32,
        },
        {
          x: 9,
          y: 20,
        },
        {
          x: 17,
          y: 13,
        },
        {
          x: 16,
          y: 22,
        },
        {
          x: 11,
          y: 2,
        },
        {
          x: 23,
          y: 27,
        },
        {
          x: 11,
          y: 4,
        },
        {
          x: 1,
          y: 2,
        },
        {
          x: 10,
          y: 21,
        },
        {
          x: 4,
          y: 21,
        },
        {
          x: 18,
          y: 5,
        },
        {
          x: 18,
          y: 22,
        },
        {
          x: 12,
          y: 26,
        },
        {
          x: 4,
          y: 21,
        },
        {
          x: 7,
          y: 12,
        },
        {
          x: 9,
          y: 12,
        },
        {
          x: 15,
          y: 11,
        },
        {
          x: 16,
          y: 21,
        },
        {
          x: 18,
          y: 2,
        },
        {
          x: 6,
          y: 6,
        },
        {
          x: 1,
          y: 4,
        },
        {
          x: 1,
          y: 26,
        },
        {
          x: 10,
          y: 21,
        },
        {
          x: 4,
          y: 21,
        },
        {
          x: 18,
          y: 5,
        }
      ],
      backgroundColor: ['rgba(255, 155, 132, 1)'],
    },
    {
      label: 'B dataset',
      data: [
        {
          x: 1,
          y: 22,
        },
        {
          x: 11,
          y: 22,
        },
        {
          x: 13,
          y: 24,
        },
        {
          x: 15,
          y: 32,
        },
        {
          x: 19,
          y: 20,
        },
        {
          x: 17,
          y: 3,
        },
        {
          x: 6,
          y: 22,
        },
        {
          x: 19,
          y: 2,
        },
        {
          x: 23,
          y: 4,
        },
        {
          x: 11,
          y: 14,
        },
        {
          x: 1,
          y: 23,
        },
        {
          x: 15,
          y: 21,
        },
        {
          x: 14,
          y: 21,
        },
        {
          x: 28,
          y: 5,
        },
        {
          x: 8,
          y: 21,
        },
        {
          x: 12,
          y: 23,
        },
        {
          x: 14,
          y: 21,
        },
      ],
      backgroundColor: 'rgb(60, 207, 78, 0.5)',
    },
  ],
};

const PieChartData = {
  labels: ['Emergency', 'Hospital', 'Evacuation', 'Help', 'Aid', 'Rescue'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Analytics = () => {
  return (
    <Flex flexDir={'column'} gap={4}>
      <BarChart data={BarChartData}/>
      <ScatterChart data={ScatterChartData}/>
      <PieChart data={PieChartData}/>
    </Flex>
  );
};

export default Analytics;