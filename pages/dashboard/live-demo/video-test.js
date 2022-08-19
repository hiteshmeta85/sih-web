import React from "react";
import LiveDemoLayout from "./_layout";
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { Highlights } from "../../../components/LiveDemo/Highlights";
import { Labels } from "../../../components/LiveDemo/Labels";
import VideoPlayer from "../../../components/VideoPlayer/VideoPlayer";
import { UploadFile } from "../../../components/LiveDemo/UploadFile";

const VideoTest = () => {
  return (
    <LiveDemoLayout heading={"Live Demo | Video"}>
      {/* todo: add to urls */}
      <Flex flexDir={"column"} gap={4} p={4}>
        <UploadFile />
        <Highlights />
        <Labels />
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
          <Box>
            <Text fontSize={"lg"} fontWeight={"semibold"} mb={4}>
              Uploaded Video
            </Text>
            <VideoPlayer url={"https://youtu.be/GBIIQ0kP15E"} />
          </Box>
          <Box>
            <Text fontSize={"lg"} fontWeight={"semibold"} mb={4}>
              Object Detection Of Uploaded Video
            </Text>
            <VideoPlayer url={"https://youtu.be/GBIIQ0kP15E"} />
          </Box>
        </SimpleGrid>
      </Flex>
    </LiveDemoLayout>
  );
};

export default VideoTest;
