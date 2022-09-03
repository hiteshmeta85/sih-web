import {Box, Button, Flex, Grid, GridItem, Image, SimpleGrid} from "@chakra-ui/react";
import {PieChart} from "../../../../../components/Charts/PieChart";
import React from "react";
import {useRouter} from "next/router";
import IndividualTweetAnalysisLayout from "../_individualTweetAnalysisLayout";
import Badge from "../../../../../components/Badge/Badge";
import ImageCarousel from "../../../../../components/Carousel/ImageCarousel";

const images = [
  'https://images.unsplash.com/photo-1547683905-f686c993aae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJhbCUyMGRpc2FzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1575916167835-a26dc9a826fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyYWwlMjBkaXNhc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  'https://static.toiimg.com/photo/msid-79955270/79955270.jpg',
  'https://www.incimages.com/uploaded_files/image/1920x1080/getty_844768902_299186.jpg',
  'https://i0.wp.com/eos.org/wp-content/uploads/2021/08/hurricane-eta-queja-guatemala-landslide.jpg?fit=820%2C615&ssl=1',
  'https://static.scientificamerican.com/sciam/cache/file/80FA3D01-B0B3-4409-90814E84D989F935_source.jpg',
  'https://i0.wp.com/eos.org/wp-content/uploads/2021/08/hurricane-eta-queja-guatemala-landslide.jpg?fit=820%2C615&ssl=1',
  'https://static.scientificamerican.com/sciam/cache/file/80FA3D01-B0B3-4409-90814E84D989F935_source.jpg',
]

const labels = [
  {
    id: 1,
    label: "flood",
  },
  {
    id: 2,
    label: "earthquake",
  },
  {
    id: 3,
    label: "storm",
  },
  {
    id: 4,
    label: "wildfire",
  },
  {
    id: 5,
    label: "earthquake",
  },
  {
    id: 6,
    label: "flood",
  },
  {
    id: 7,
    label: "wildfire",
  },
  {
    id: 8,
    label: "storm",
  },
  {
    id: 9,
    label: "earthquake",
  },
  {
    id: 10,
    label: "flood",
  },
];
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


const IndividualTextAndImageAnalysis = () => {

  const router = useRouter()
  const {pid, social} = router.query

  return (
    <IndividualTweetAnalysisLayout
      title={'Tweet Analysis - Text and Images'}
      topSection={
        <Flex justify={"flex-end"} p={2} gap={4}>
          <Button
            bg={"blackAlpha.800"}
            _hover={{bg: "blackAlpha.700"}}
            _active={{bg: "blackAlpha.800"}}
            rounded={"full"}
            color={"white"}
            px={6}
          >
            Click Here
          </Button>

          <Button
            bg={"red.500"}
            textColor={"white"}
            _hover={{bg: "red.400"}}
            _active={{bg: "red.500"}}
            rounded={"full"}
            color={"white"}
            px={6}
          >
            Click Here
          </Button>
        </Flex>
      }
      rightSection={
        <Box
          p={4}
          border={"1px solid lightgray"}
          borderRadius={"md"}
        >
          <PieChart data={PieChartData}/>
        </Box>
      }
    >
      <Grid gap={8}>
        <GridItem>
          <SimpleGrid columns={{base: 1, md: 2}} gap={4}>
            <Box p={2}>
              <Image src="https://pbs.twimg.com/media/FYnUHX6akAAfNJm.jpg" alt={'image'}/>
            </Box>
            <Box p={2}>
              <Image src="https://pbs.twimg.com/media/FYnUHX6akAAfNJm.jpg" alt={'image'}/>
            </Box>
          </SimpleGrid>
        </GridItem>
        <SimpleGrid columns={{base: 2, md: 3}} gap={4} p={2}>
          <>
            {labels.map((item, index) => {
              return (
                <Badge key={index} label={item.label}/>
              );
            })}
          </>
        </SimpleGrid>
      </Grid>
      <Box my={6} px={1} mx={2}>
        <ImageCarousel images={images}/>
      </Box>
    </IndividualTweetAnalysisLayout>
  );
};

export default IndividualTextAndImageAnalysis;