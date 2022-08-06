import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "@fontsource/inter";
import { AiOutlineTwitter } from "react-icons/ai";

const VideoPlusTweetCard = ({ username, text, url, transcript, label, date }) => {
  return (
    <Box >
      <Flex flexDirection={"column"} border={"2px solid black"} rounded={"md"} >
        <VideoPlayer url={url} />
        <Flex flexDir={"column"} gap={2} px={4} pt={2} pb={4}>
          <Text
            fontWeight={"bold"}
            color={"gray.400"}
            fontSize={"sm"}
            letterSpacing={"wider"}
          >
            @{username}
          </Text>
          <Text lineHeight={"shorter"} fontFamily={"Inter"}>
            {text}
          </Text>
          {label && (
            <Text
              textTransform={"capitalize"}
              alignSelf={"start"}
              fontWeight={"bold"}
              color={"gray.400"}
            >
              {label}
            </Text>
          )}
          <Text lineHeight={"shorter"} fontFamily={"Inter"}>
            {transcript}
          </Text>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text fontWeight={"bold"} color={"gray.400"} fontSize={"sm"}>
              {date}
            </Text>
            <Icon
              as={AiOutlineTwitter}
              h={8}
              w={8}
              color={"#1DA1F2"}
              pos={"relative"}
              top={"2px"}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default VideoPlusTweetCard;
