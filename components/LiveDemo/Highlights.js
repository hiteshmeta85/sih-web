import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

export const Highlights = () => {
  return (
    <Box p={4}>
      <Flex align={"center"} gap={4}>
        <Box p={1} className={"blink"} bg={"green"} />
        <Text fontSize={'lg'} fontWeight={'semibold'}>Disaster</Text>
      </Flex>
      <Flex align={"center"} gap={4}>
        <Box p={1} className={"blink"} bg={"red"} />
        <Text fontSize={'lg'} fontWeight={'semibold'}>Non-Disaster</Text>
      </Flex>
    </Box>
  );
};
