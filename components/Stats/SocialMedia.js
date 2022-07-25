import React from "react";
import {
  Stat,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";

import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <Stat
      bg={"white"}
      borderRadius={"md"}
      boxShadow={"base"}
      border={"1px solid lightgray"}
      _hover={{ boxShadow: "lg" }}
      p={3}
      h={'full'}
    >
      <Box>
        <Flex alignItems={"center"} gap={5} p={2}>
          <BsTwitter size={"2rem"} />
          <Text>100</Text>
        </Flex>
        <Flex alignItems={"center"} gap={5} p={2}>
          <BsInstagram size={"2rem"} />
          <Text>100</Text>
        </Flex>
        <Flex alignItems={"center"} gap={5} p={2}>
          <BsFacebook size={"2rem"} />
          <Text>100</Text>
        </Flex>
      </Box>
    </Stat>
  );
};

export default SocialMedia;
