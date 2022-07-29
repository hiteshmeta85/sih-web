import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";

const ActiveModels = () => {
  return (
    <Box
      bg={"white"}
      borderRadius={"md"}
      border={"1px solid lightgray"}
      h={'full'}
      p={4}
    >
      <Text fontSize={'lg'} fontWeight={'bold'} mb={2}>
        Active Models
      </Text>
      <Flex justifyContent={'space-between'}>
        <Box p={5} bg={'green.400'} rounded={'full'}/>
        <Box p={5} bg={'green.400'} rounded={'full'}/>
        <Box p={5} bg={'green.400'} rounded={'full'}/>
        <Box p={5} bg={'green.400'} rounded={'full'}/>
        <Box p={5} bg={'green.400'} rounded={'full'}/>
      </Flex>
    </Box>
  )
}

export default ActiveModels;