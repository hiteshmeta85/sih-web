import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import audio from "./audio.png";
import text from "./text.png";
import classfication from "./classfication.png";
import detection from "./detection.png";
import image from "./image.png";

const ActiveModels = () => {
  return (
    <Box
      bg={"white"}
      borderRadius={"md"}
      border={"1px solid lightgray"}
      h={"full"}
      p={4}
    >
      <Text fontSize={"lg"} fontWeight={"bold"} mb={2}>
        Active Models
      </Text>
      <Flex justifyContent={'space-between'} gap={2}>
          <Avatar p={{base: 2, md: 2, lg: 4}} bg={"green.400"} size={{base: 'sm', md: 'md', lg: 'md'}}>
            <Image src={audio}/>
          </Avatar>
          <Avatar p={{base: 2, md: 2, lg: 4}} bg={"green.400"} size={{base: 'sm', md: 'md', lg: 'md'}}>
            <Image src={text}/>
          </Avatar>
          <Avatar p={{base: 2, md: 2, lg: 4}} bg={"green.400"} size={{base: 'sm', md: 'md', lg: 'md'}}>
            <Image src={classfication}/>
          </Avatar>
          <Avatar p={{base: 2, md: 2, lg: 4}} bg={"green.400"} size={{base: 'sm', md: 'md', lg: 'md'}}>
            <Image src={detection}/>
          </Avatar>
          <Avatar p={{base: 2, md: 2, lg: 4}} bg={"green.400"} size={{base: 'sm', md: 'md', lg: 'md'}}>
            <Image src={image}/>
          </Avatar>
        
      </Flex>
    </Box>
  );
};

export default ActiveModels;
