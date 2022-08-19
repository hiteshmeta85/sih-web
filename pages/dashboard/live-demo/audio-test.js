import React from "react";
import LiveDemoLayout from "./_layout";
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { Highlights } from "../../../components/LiveDemo/Highlights";
import { NerData } from "../../../components/LiveDemo/NerData";
import { Labels } from "../../../components/LiveDemo/Labels";
import { UploadFile } from "../../../components/LiveDemo/UploadFile";

const AudioTest = () => {
  return (
    <LiveDemoLayout heading={"Live Demo | Audio"}>
      {/* todo: add to urls */}
      <Flex flexDir={"column"} gap={4} p={4}>
        <UploadFile />
        <Highlights />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Box
            rounded={"lg"}
            border={"1px solid lightgray"}
            padding={5}
            boxShadow={"lg"}
          >
            <Text fontWeight={"semibold"}>Audio To Text</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              nesciunt ratione repellat sunt suscipit, totam. Adipisci cum
              laudantium voluptatem! Consequuntur culpa illum magni,
              necessitatibus porro praesentium quam quas? Sit, voluptatem?
              Accusantium at deserunt exercitationem impedit magni minus rerum
              sit temporibus. In inventore labore laborum ratione saepe! Ad
              aliquid culpa distinctio dolorem eligendi eum laborum, maiores
              quae, sapiente soluta vero voluptates.
            </Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={1} spacing={4}>
          <NerData />
          <Labels />  
        </SimpleGrid>
      </Flex>
    </LiveDemoLayout>
  );
};

export default AudioTest;
