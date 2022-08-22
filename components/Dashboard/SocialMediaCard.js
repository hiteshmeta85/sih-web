import React from "react";
import {Box, Flex, Icon, Stat, Text,} from "@chakra-ui/react";
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import CountUp from "react-countup";

const SocialMediaCard = ({statistics}) => {
  return (
    <Stat
      bg={"white"}
      borderRadius={"md"}
      border={"1px solid lightgray"}
      p={3}
      h={'full'}
    >
      <Box>
        <Flex alignItems={"center"} gap={5} p={2}>
          <Icon as={BsTwitter} h={6} w={6} color={'#1DA1F2'}/>
          <Text fontWeight={'semibold'}><CountUp end={statistics.twitter_scraped_count} duration={20}/></Text>
        </Flex>
        <Flex alignItems={"center"} gap={5} p={2}>
          <Icon as={BsFacebook} h={6} w={6} color={'#4267B2'}/>
          <Text fontWeight={'semibold'}><CountUp end={statistics.facebook_scraped_count} duration={20}/></Text>
        </Flex>
        <Flex alignItems={"center"} gap={5} p={2}>
          <Icon as={BsInstagram} h={6} w={6} color={'#FCAF45'}/>
          <Text fontWeight={'semibold'}><CountUp end={statistics.insta_scraped_count} duration={20}/></Text>
        </Flex>
      </Box>
    </Stat>
  );
};

export default SocialMediaCard;
