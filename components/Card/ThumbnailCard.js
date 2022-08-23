import React from 'react';
import {Box, Divider, Flex, Icon, Image, Text} from "@chakra-ui/react";
import {RiPlayCircleFill} from "react-icons/ri";
import {socialMediaTypes} from "../../constants/useful-data/socialMediaTypes";

const ThumbnailCard = ({image, username, tweet, date, socialMediaType}) => {
  return (
    <Flex flexDirection={'column'} justifyContent={'space-between'} border={'2px solid black'} rounded={'md'} h={'full'}>
      <Box>
        <Box pos={'relative'}>
          <Image roundedTop={'md'} src={image} alt={'Tweet Image'}/>
          <Icon as={RiPlayCircleFill} h={12} w={12} pos={'absolute'} top={'45%'} left={'45%'} color={'white'}/>
        </Box>
        <Divider/>
        <Flex flexDir={'column'} gap={2} px={4} pt={2} pb={4}>
          <Text fontWeight={'bold'} color={'gray.400'} fontSize={'sm'} letterSpacing={'wider'}>@{username}</Text>
          <Text lineHeight={'shorter'} fontFamily={'Inter'}>{tweet}</Text>
        </Flex>
      </Box>
      <Flex justifyContent={'space-between'} alignItems={'center'} px={4} gap={4} pb={4}>
        <Text fontWeight={'bold'} color={'gray.400'} fontSize={'sm'}>{date}</Text>
        <>
          {socialMediaTypes.map((item, index) => {
            if (socialMediaType === item.value)
              return (
                <Icon key={index} as={item.image} h={8} w={8} color={item.color} pos={'relative'} top={'2px'}/>
              )
          })}
        </>
      </Flex>
    </Flex>
  )
}

export default ThumbnailCard;