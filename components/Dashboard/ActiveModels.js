import {Avatar, Flex, Text} from "@chakra-ui/react";
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
      <Text fontWeight={600} fontSize={'xl'} alignSelf={'start'}>
        Active Models
      </Text>
      <Flex justifyContent={'space-between'} gap={2} pt={2}>
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
        <Avatar pt={{base: 2, md: 2, lg: 4}} bg={'transparent'} size={{base: 'sm'}}>
          <Image src={image} alt={'img'} className={'blink-animation'}/>
        </Avatar>
      </Flex>
    </Flex>
  );
};

export default ActiveModels;