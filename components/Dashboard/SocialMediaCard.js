import React from "react";
import {Box, Flex, Icon, Stat, Text,} from "@chakra-ui/react";
import {socialMediaTypes} from "../../constants/useful-data/socialMediaTypes";

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
        {socialMediaTypes.map((item, index) => {
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
