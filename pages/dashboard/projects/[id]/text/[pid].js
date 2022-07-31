import {Box, Grid, GridItem, Progress, SimpleGrid, Text,} from "@chakra-ui/react";
import React from "react";
import DashboardContainer from "../../../_layout";
import {PieChart} from "../../../../../components/Charts/PieChart";
import {PieChartData} from "../../../../../components/Analysis/Analytics";
import {useRouter} from "next/router";

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

const IndividualTextAnalysis = () => {

  const router = useRouter()
  const { pid } = router.query

  return (
    <DashboardContainer title='Individual Analysis - Text'>
      <Box bg={"white"} p={4} rounded={"md"}>
        <Grid gridTemplateColumns={"repeat(5, 1fr)"} gap={8}>
          <GridItem colSpan={{base: 5, lg: 3}}>
            <Grid gap={8}>
              <GridItem>
                <Box p={2} px={4} border={"1px solid lightgray"} borderRadius={"md"}>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                    consequat urna. Morbi a bibendum metus. Donec scelerisque
                    sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
                    in pretium orci vestibulum eget. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Duis pharetra luctus lacus ut vestibulum.
                    Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar
                    vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id
                    vel leo. Integer feugiat faucibus libero, at maximus nisl
                    suscipit posuere. Morbi nec enim nunc. Phasellus bibendum
                    turpis ut ipsum egestas, sed sollicitudin elit convallis.
                    Cras pharetra mi tristique sapien vestibulum lobortis. Nam
                    eget bibendum metus, non dictum mauris. Nulla at tellus
                    sagittis, viverra est a, bibendum metus.
                  </Text>
                </Box>
              </GridItem>
              <GridItem>
                <Progress
                  border={"1px solid lightgray"}
                  borderRadius={"md"}
                  colorScheme="green"
                  size="lg"
                  value={40}
                />
              </GridItem>
              <GridItem>
                <SimpleGrid columns={{base: 2, md: 3}} gap={8} py={2}>
                  {labels.map((item, index) => {
                    return (
                      <Text
                        align={'center'}
                        key={index}
                        bg={"gray.200"}
                        border={"1px solid lightgray"}
                        borderRadius={"md"}
                        fontWeight={'semibold'}
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
            <Box p={4} border={"1px solid lightgray"} borderRadius={"md"}>
              <PieChart data={PieChartData}/>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </DashboardContainer>
  );
};

export default IndividualTextAnalysis;
