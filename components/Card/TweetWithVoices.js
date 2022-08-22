import React from 'react';
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import {AiOutlineTwitter} from "react-icons/ai";
import {Box, Flex, Icon, Text} from '@chakra-ui/react';

const TweetWithVoices = ({username, audio, date, language, transcript, multilabel, location, affectedPeople, help, organisationsHelping, disasterType}) => {
  return (
    <Box border={"2px solid black"} rounded={"md"} px={8} py={2}>
      <Flex justifyContent={"space-between"} alignItems={"center"} py={2}>
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
      <Box p={2} justifyContent={'center'} pt={3}>
        <AudioPlayer src={audio}/>
        <Text mt={4} fontWeight={'bold'}>Transcript: </Text>
        <Text>{transcript}</Text>
        <Text mt={4} fontWeight={'bold'}>Language: {language === "hi" ? "Hindi" : language === "en" ? "English" : ""}</Text>
        {multilabel.length > 0 && <Text fontWeight={'bold'} mt={4}>Multilabel: {multilabel.split(',').map((item, index)=> <Text px={2} key={index}>{item}</Text>)}</Text>}
        {disasterType.length > 0 && <Text fontWeight={'bold'} mt={4}>Disaster Type: {disasterType}</Text>}
        {location.length > 0 && <Text fontWeight={'bold'} mt={4}>Location: {location}</Text>}
        {affectedPeople.length > 0 && <Text fontWeight={'bold'} mt={4}>Affected People: {affectedPeople}</Text>}
        {help.length > 0 && <Text fontWeight={'bold'} mt={4}>Help: {help}</Text>}
        {organisationsHelping.length > 0 && <Text fontWeight={'bold'} mt={4}>Organizations Helping: {organisationsHelping}</Text>}
      </Box>
    </Box>
  );
};

export default TweetWithVoices;