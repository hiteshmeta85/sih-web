import {Box, Button, Flex, Grid, GridItem, Progress, SimpleGrid, Text} from "@chakra-ui/react";
import React from "react";
import {useRouter} from "next/router";
import VideoPlayer from "../../../../../components/VideoPlayer/VideoPlayer";
import IndividualTweetAnalysisLayout from "../_individualTweetAnalysisLayout";

const IndividualVideoAnalysis = () => {

  const router = useRouter()
  const { pid } = router.query

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

  return (
    <IndividualTweetAnalysisLayout
      title={'Individual Analysis - Video'}
      topSection={
        <Flex justify={"flex-end"} p={2}>
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
        </Flex>
      }
    >
      <Grid gap={8}>
        <GridItem>
          <SimpleGrid columns={{base: 1, md: 2}} gap={4}>
            <Box p={2}>
              <VideoPlayer url={"https://www.youtube.com/watch?v=GePs-zWeS2o"}/>
            </Box>
            <Box p={2}>
              <VideoPlayer url={"https://www.youtube.com/watch?v=GePs-zWeS2o"}/>
            </Box>
          </SimpleGrid>
        </GridItem>
        <GridItem p={2}>
          <Progress
            border={"1px solid lightgray"}
            borderRadius={"md"}
            colorScheme="green"
            size="lg"
            value={40}
          />
        </GridItem>
        <GridItem>
          <SimpleGrid columns={{base: 2, md: 3}} gap={4} p={2}>
            {labels.map((item, index) => {
              return (
                <Text
                  align={"center"}
                  key={index}
                  bg={"gray.200"}
                  border={"1px solid lightgray"}
                  borderRadius={"md"}
                  fontWeight={"semibold"}
                  p={2}
                >
                  {item.label}
                </Text>
              );
            })}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </IndividualTweetAnalysisLayout>
  );
};

export default IndividualVideoAnalysis;