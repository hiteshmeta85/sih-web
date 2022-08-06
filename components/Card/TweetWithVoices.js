import React from 'react';
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { AiOutlineTwitter } from "react-icons/ai";
import { Box, Flex, Icon, Text } from '@chakra-ui/react';

const TweetWithVoices = ({ username, audio, date }) => {
  return (
    <Box border={"2px solid black"} rounded={"md"}>
      <Flex justifyContent={"space-between"} alignItems={"center"} p={2}>
        <Flex alignItems={"center"} gap={2}>
        <Icon
              as={AiOutlineTwitter}
              h={6}
              w={6}
              color={"#1DA1F2"}
              pos={"relative"}
              top={"2px"}
            />
            <Text
            fontWeight={"bold"}
            color={"gray.400"}
            fontSize={"sm"}
            letterSpacing={"wider"}
          >
            @{username}
          </Text>
        </Flex>
          <Text fontWeight={"bold"} color={"gray.400"} fontSize={"sm"}>
            {date}
          </Text>
      </Flex>
      <Box p={2} justifyContent={'center'}>
      <AudioPlayer src={audio}/>
      </Box>
      
    </Box>
  );
};

export default TweetWithVoices;