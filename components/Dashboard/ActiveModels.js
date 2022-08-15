import {Avatar, Box, Flex, Text} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import audio from "./audio.png";
import text from "./text.png";
import classification from "./classification.png";
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
      <Text fontSize={"lg"} fontWeight={"bold"} mb={4}>
        Active Models
      </Text>
      <Flex justifyContent={'space-between'} gap={2}>
        <Avatar p={{base: 2, md: 2, lg: 4}} bg={'transparent'} size={{base: 'sm', md: 'md', lg: 'md'}}>
          <Image src={audio} alt={'img'} className={'blink-animation'}/>
        </Avatar>
        <Avatar p={{base: 2, md: 2, lg: 4}} bg={'transparent'} size={{base: 'sm', md: 'md', lg: 'md'}}>
          <Image src={text} alt={'img'} className={'blink-animation'}/>
        </Avatar>
        <Avatar p={{base: 2, md: 2, lg: 4}} bg={'transparent'} size={{base: 'sm', md: 'md', lg: 'md'}}>
          <Image src={classification} alt={'img'} className={'blink-animation'}/>
        </Avatar>
        <Avatar p={{base: 2, md: 2, lg: 4}} bg={'transparent'} size={{base: 'sm', md: 'md', lg: 'md'}}>
          <Image src={detection} alt={'img'} className={'blink-animation'}/>
        </Avatar>
        <Avatar p={{base: 2, md: 2, lg: 4}} bg={'transparent'} size={{base: 'sm', md: 'md', lg: 'md'}}>
          <Image src={image} alt={'img'} className={'blink-animation'}/>
        </Avatar>
      </Flex>
    </Box>
  );
};

export default ActiveModels;