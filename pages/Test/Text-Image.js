import React from "react";
import DashboardContainer from "../dashboard/_layout";
import {
  Grid,
  Box,
  GridItem,
  Text,
  Progress,
  SimpleGrid,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import { labels } from "./Text";
import { PieChart } from "../../components/Charts/PieChart";
import { PieChartData } from "../../components/Analysis/Analytics";

export const images = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJhbCUyMGRpc2FzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1575916167835-a26dc9a826fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyYWwlMjBkaXNhc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    image: 'https://static.toiimg.com/photo/msid-79955270/79955270.jpg',
  },
  {
    id: 4,
    image: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_844768902_299186.jpg',
  },
  {
    id: 5,
    image: 'https://i0.wp.com/eos.org/wp-content/uploads/2021/08/hurricane-eta-queja-guatemala-landslide.jpg?fit=820%2C615&ssl=1',
  },
  {
    id: 6,
    image: 'https://static.scientificamerican.com/sciam/cache/file/80FA3D01-B0B3-4409-90814E84D989F935_source.jpg',
  },
  {
    id: 7,
    image: 'https://i0.wp.com/eos.org/wp-content/uploads/2021/08/hurricane-eta-queja-guatemala-landslide.jpg?fit=820%2C615&ssl=1',
  },
  {
    id: 8,
    image: 'https://static.scientificamerican.com/sciam/cache/file/80FA3D01-B0B3-4409-90814E84D989F935_source.jpg',
  },
]

const Images = () => {

  return (
    <DashboardContainer title="Individual Analysis - Text + Image">
      <Box bg={"white"} p={4} rounded={"md"}>
        <Grid gridTemplateColumns={"repeat(5, 1fr)"} gap={8}>
          <GridItem colSpan={{ base: 5, lg: 3 }}>
            <Grid gap={8}>
              <GridItem>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                  <Box p={2}>
                    <Image src="https://pbs.twimg.com/media/FYnUHX6akAAfNJm.jpg" />
                  </Box>
                  <Box p={2}>
                    <Image src="https://pbs.twimg.com/media/FYnUHX6akAAfNJm.jpg" />
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
                <SimpleGrid columns={{ base: 2, md: 3 }} gap={8} p={2}>
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
              <GridItem>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4} p={2}>
                {images.map((item, index) => {
                  return (
                    <Image key={index} src={item.image} />
                  )
                })}
                </SimpleGrid>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={{ base: 5, md: 2 }} gap={8}>
            <Box>
              <Flex justify={"flex-end"} p={2} gap={4}>
                <Button
                  bg={"blackAlpha.800"}
                  _hover={{ bg: "blackAlpha.700" }}
                  _active={{ bg: "blackAlpha.800" }}
                  rounded={"full"}
                  color={"white"}
                  px={6}
                >
                  Click Here
                </Button>

                <Button
                  bg={"red.500"}
                  textColor={"white"}
                  _hover={{ bg: "red.400" }}
                  _active={{ bg: "red.500" }}
                  rounded={"full"}
                  color={"white"}
                  px={6}
                >
                  Click Here
                </Button>
              </Flex>
            </Box>

            <Box
              p={4}
              border={"1px solid lightgray"}
              borderRadius={"md"}
              my={4}
            >
              <PieChart data={PieChartData} />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </DashboardContainer>
  );
};

export default Images;
