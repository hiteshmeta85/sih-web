import React from "react";
import {Box, Flex, Icon, Stat, Text,} from "@chakra-ui/react";
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import CountUp from "react-countup";

const SocialMediaCard = ({statistics}) => {
  return (
    <Stat
      //bg={"white"}
      borderRadius={24}
      boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
      p={6}
      h={'full'}
      bg={'white'}
    >
      <Flex flexDir={'column'} gap={2}>
        <Flex alignItems={"center"} gap={5} p={1}>
          <Icon as={BsTwitter} h={7} w={7} color={'#1DA1F2'}/>
          <Text fontWeight={'bold'}><CountUp end={statistics.twitter_scraped_count} duration={60}/></Text>
        </Flex>
        <Flex alignItems={"center"} gap={5} p={1}>
          <Icon as={BsFacebook} h={7} w={7} color={'#4267B2'}/>
          <Text fontWeight={'bold'}><CountUp end={statistics.facebook_scraped_count} duration={60}/></Text>
        </Flex>
        <Flex alignItems={"center"} gap={5} p={1}>
          <Icon as={BsInstagram} h={7} w={7} color={'#FCAF45'}/>
          <Text fontWeight={'bold'}><CountUp end={statistics.insta_scraped_count} duration={60}/></Text>
        </Flex>
      </Flex>
    </Stat>
  );
};

export default SocialMediaCard;
