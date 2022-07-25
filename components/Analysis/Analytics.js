import {BarChart} from "../Charts/BarChart";
import {ScatterChart} from "../Charts/ScatterChart";
import {PieChart} from "../Charts/PieChart";
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem, Select,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from "@chakra-ui/react";
import ClusterMap from "../Map/ClusterMap";
import {useState} from "react";

const BarChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [28, 36, 52, 21, 41, 21, 57],
      backgroundColor: ['rgb(255, 111, 181,0.7)'],
    },
    {
      label: 'Dataset 2',
      data: [8, 26, 32, 58, 31, 11, 47],
      backgroundColor: ['rgb(77, 119, 255, 0.7)'],
    },
  ],
};

const BarChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [18, 32, 22, 42, 11, 41, 57],
      backgroundColor: ['rgb(255, 111, 181,0.7)'],
    },
    {
      label: 'Dataset 2',
      data: [8, 26, 12, 33, 57, 14, 37],
      backgroundColor: ['rgb(77, 119, 255, 0.7)'],
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
      backgroundColor: 'rgb(60, 207, 78, 1)',
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

const PieChartData2 = {
  labels: ['Emergency', 'Hospital', 'Evacuation', 'Help', 'Aid', 'Rescue'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [2, 12, 17, 15, 2, 3],
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

const StatCard = ({label, value, boxShadow, cardBgColor, titleColor}) => {
  return (
    <Stat bg={cardBgColor || ''} border={'1px solid lightgray'} padding={5} rounded={'lg'}
          boxShadow={boxShadow || 'lg'}>
      <StatLabel fontWeight={'bold'} fontSize={'xl'} color={titleColor || ''}>{label}</StatLabel>
      <StatNumber color={'green.400'}>{value}</StatNumber>
    </Stat>
  )
}

const CardTitle = ({primaryText, secondaryText}) => {
  return (
    <Box>
      <Text fontWeight={'bold'} fontSize={'lg'}>{primaryText}</Text>
      <Text fontSize={'sm'}>{secondaryText}</Text>
      <Divider my={3}/>
    </Box>
  )
}

const Analytics = () => {

  const [selectedOption, setSelectedOption] = useState("One")

  const handleChange = (event) => {
    setSelectedOption(event.target.value)
  }

  return (
    <Flex flexDir={'column'} gap={5}>
      <StatGroup gap={5}>
        <StatCard label={'Label 1'} value={100} boxShadow={'2xl'} cardBgColor={'blackAlpha.800'} titleColor={'white'}/>
        <StatCard label={'Label 1'} value={100}/>
        <StatCard label={'Label 1'} value={100}/>
        <StatCard label={'Label 1'} value={100}/>
        <StatCard label={'Label 1'} value={100}/>
      </StatGroup>
      <Grid templateColumns='repeat(3, 1fr)' gap={5}>
        <GridItem colSpan={{base: 3, lg: 2}} border={'1px solid lightgray'} borderRadius={'lg'} p={4}>
          <CardTitle primaryText={'Lorem Ipsum'} secondaryText={'Vivamus in enim ut tortor placerat rutrum.'}/>
          <ScatterChart data={ScatterChartData}/>
        </GridItem>
        <GridItem colSpan={{base: 3, lg: 1}} border={'1px solid lightgray'} borderRadius={'lg'} p={2}>
          <Tabs isFitted variant='soft-rounded' colorScheme={'green'}>
            <TabList>
              <Tab borderRadius={"md"}>One</Tab>
              <Tab borderRadius={"md"}>Two</Tab>
            </TabList>
            <TabPanels>
              <TabPanel px={0}>
                <CardTitle primaryText={'Lorem Ipsum'} secondaryText={'Vivamus in enim ut tortor placerat rutrum.'}/>
                <PieChart data={PieChartData}/>
              </TabPanel>
              <TabPanel px={0}>
                <CardTitle primaryText={'Lorem Ipsum'} secondaryText={'Vivamus in enim ut tortor placerat rutrum.'}/>
                <PieChart data={PieChartData2}/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </GridItem>
      </Grid>
      <Grid templateColumns='repeat(3, 1fr)' gap={5} alignItems={'start'}>
        <GridItem colSpan={{base:3, lg:1}} border={'1px solid lightgray'} borderRadius={'lg'} p={2}>
          <CardTitle primaryText={'Lorem Ipsum'} secondaryText={'Vivamus in enim ut tortor placerat rutrum.'}/>
          <Flex justifyContent={'end'} my={4}>
            <Select value={selectedOption} onChange={(e) => handleChange(e)} w={'150px'}>
              <option value="One">One</option>
              <option value="Two">Two</option>
            </Select>
          </Flex>
          {selectedOption === "One" && <BarChart data={BarChartData}/>}
          {selectedOption === "Two" && <BarChart data={BarChartData2}/>}
        </GridItem>
        <GridItem colSpan={{base: 3, lg:2}} border={'1px solid lightgray'} borderRadius={'lg'} p={0}>
          <ClusterMap height={'400px'}/>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Analytics;