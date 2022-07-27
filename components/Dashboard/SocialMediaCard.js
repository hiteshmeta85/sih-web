import React from "react";
import {Box, Flex, Icon, Stat, Text,} from "@chakra-ui/react";
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";

const SocialMediaItems = [
  {
    id: 1,
    title: "Twitter",
    value: "twitter",
    image: BsTwitter,
    color: "#1DA1F2",
  },
  {
    id: 2,
    title: "Facebook",
    value: "facebook",
    image: BsFacebook,
    color: "#4267B2",
  },
  {
    id: 3,
    title: "Instagram",
    value: "instagram",
    image: BsInstagram,
    color: "#FCAF45",
  },
]

const SocialMediaCard = () => {
  return (
    <Stat
      bg={"white"}
      borderRadius={"md"}
      border={"1px solid lightgray"}
      p={3}
      h={'full'}
    >
      <Box>
        {SocialMediaItems.map((item, index) => {
          return (
            <Flex key={index} alignItems={"center"} gap={5} p={2}>
              <Icon as={item.image} h={6} w={6} color={item.color}/>
              <Text fontWeight={'semibold'}>100</Text>
            </Flex>
          )
        })}
      </Box>
    </Stat>
  );
};

export default SocialMediaCard;
