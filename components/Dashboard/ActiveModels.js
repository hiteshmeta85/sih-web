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
    <Flex
      flexDir={'column'}
      justifyContent={'space-between'}
      borderRadius={24}
      boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
      p={6}
      h={'full'}
      bg={'white'}
    >
      <Text fontWeight={600} fontSize={'xl'} borderBottom={'2px dashed black'} alignSelf={'start'}>
        Active Models
      </Text>
      <Flex justifyContent={'space-between'} gap={2}>
        <Box p={{base: 2, md: 2, lg: 4}} bg={'transparent'} size={{base: 'sm', md: 'md', lg: 'md'}}>
          <Image src={audio} alt={'img'}/>
        </Box>
        <Box p={{base: 2, md: 2, lg: 4}} bg={'transparent'} size={{base: 'sm', md: 'md', lg: 'md'}}>
          <Image src={text} alt={'img'}/>
        </Box>
        <Box p={{base: 2, md: 2, lg: 4}} bg={'transparent'} size={{base: 'sm', md: 'md', lg: 'md'}}>
          <Image src={classification} alt={'img'}/>
        </Box>
        <Box p={{base: 2, md: 2, lg: 4}} bg={'transparent'} size={{base: 'sm', md: 'md', lg: 'md'}}>
          <Image src={detection} alt={'img'}/>
        </Box>
        <Box p={{base: 2, md: 2, lg: 4}} bg={'transparent'} size={{base: 'sm', md: 'md', lg: 'md'}}>
          <Image src={image} alt={'img'}/>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ActiveModels;