import React from "react";
import LiveDemoLayout from "./_layout";
import {
  Box,
  Flex,
  SimpleGrid,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";

import { Highlights } from "../../../components/LiveDemo/Highlights";
import { UploadFile } from "../../../components/LiveDemo/UploadFile";
import { NerData } from "../../../components/LiveDemo/NerData";

const ImageTest = () => {
  return (
    <LiveDemoLayout heading={"Live Demo | Image"}>
      {/* todo: add to urls */}
      <Flex flexDir={"column"} gap={4} p={4}>
        <UploadFile />
        <Highlights />
        <NerData />
        <SimpleGrid columns={{base: 1, md: 2}} spacing={8}>
          <Box>
            <Text fontSize={"lg"} fontWeight={"semibold"} mb={4}>
              Uploaded Image
            </Text>
            <Image
              src="https://www.w3schools.com/css/paris.jpg"
              alt="Paris"
              h={"300px"}
              w={"full"}
              rounded={"lg"}
              boxShadow={"lg"}
            />
          </Box>
          <Box>
            <Text fontSize={"lg"} fontWeight={"semibold"} mb={4}>
              Object Detection Of Uploaded Image
            </Text>
            <Image
              src="https://www.w3schools.com/css/paris.jpg"
              alt="Paris"
              h={"300px"}
              w={"full"}
              rounded={"lg"}
              boxShadow={"lg"}
            />
          </Box>
        </SimpleGrid>
        <Text fontSize={"lg"} fontWeight={"semibold"}>Cropped Images</Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          <GridItem>
            <Image
              src="https://www.w3schools.com/css/paris.jpg"
              alt="Paris"
              h={"full"}
              rounded={"lg"}
              boxShadow={"lg"}
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.w3schools.com/css/paris.jpg"
              alt="Paris"
              h={"full"}
              rounded={"lg"}
              boxShadow={"lg"}
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.w3schools.com/css/paris.jpg"
              alt="Paris"
              h={"full"}
              rounded={"lg"}
              boxShadow={"lg"}
            />
          </GridItem>
          <GridItem>
            <Image
              src="https://www.w3schools.com/css/paris.jpg"
              alt="Paris"
              h={"full"}
              rounded={"lg"}
              boxShadow={"lg"}
            />
          </GridItem>
        </Grid>
      </Flex>
    </LiveDemoLayout>
  );
};

export default ImageTest;
