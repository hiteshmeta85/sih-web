import dynamic from "next/dynamic";
import DashboardContainer from "../../../_layout";
import {Box, Button, Flex, Grid, GridItem, Progress, SimpleGrid, Text} from "@chakra-ui/react";
import React from "react";
import {useRouter} from "next/router";

const IndividualVideoAnalysis = () => {

  const router = useRouter()
  const { pid } = router.query

  const ReactPlayer = dynamic(() => import("react-player"), {ssr: false});

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
    <DashboardContainer title='Individual Analysis - Video'>
      <Box bg={"white"} p={4} rounded={"md"}>
        <Grid gridTemplateColumns={"repeat(5, 1fr)"} gap={8}>
          <GridItem colSpan={{base: 5, lg: 3}}>
            <Grid gap={8}>
              <GridItem>
                <SimpleGrid columns={{base: 1, md: 2}} gap={4}>
                  <Box p={2}>
                    <ReactPlayer
                      width={{base: "auto", md: "330px", lg: "330px"}}
                      controls
                      url={"https://www.youtube.com/watch?v=GePs-zWeS2o"}
                      onReady={() => console.log("OnReady callback")}
                      onStart={() => console.log("onStart callback")}
                      onPause={() => console.log("onPause callback")}
                      onEnded={() => console.log("onEnded callback")}
                      onError={() => console.log("onError callback")}
                    />
                  </Box>
                  <Box p={2}>
                    <ReactPlayer
                      width={{base: "auto", md: "330px", lg: "330px"}}
                      controls
                      url={"https://www.youtube.com/watch?v=GePs-zWeS2o"}
                      onReady={() => console.log("OnReady callback")}
                      onStart={() => console.log("onStart callback")}
                      onPause={() => console.log("onPause callback")}
                      onEnded={() => console.log("onEnded callback")}
                      onError={() => console.log("onError callback")}
                    />
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
                <SimpleGrid columns={{base: 2, md: 3}} gap={8} p={2}>
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
          </GridItem>
          <GridItem colSpan={{base: 5, md: 2}}>
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
          </GridItem>
        </Grid>
      </Box>
    </DashboardContainer>
  );
};

export default IndividualVideoAnalysis;