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
      <Text fontSize={'lg'} fontWeight={'bold'} mb={4}>
        Active Models
      </Text>
      <Flex justifyContent={'space-between'}>
        <Box p={4} bg={'green.500'} rounded={'full'}/>
        <Box p={4} bg={'green.500'} rounded={'full'}/>
        <Box p={4} bg={'green.500'} rounded={'full'}/>
        <Box p={4} bg={'green.500'} rounded={'full'}/>
        <Box p={4} bg={'green.500'} rounded={'full'}/>
      </Flex>
    </Box>
  )
}

export default ActiveModels;