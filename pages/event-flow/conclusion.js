import React from 'react';
import { Flex, SimpleGrid, Text, Box, Icon } from '@chakra-ui/react';
import StatCard from "../../components/Stat/StatCard";
import EventFlowLayout from "./_layout";
import {BsCardImage, BsFillCameraVideoFill, BsSoundwave} from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import {CgDanger} from "react-icons/cg";

const Conclusion = () => {
  return (
    <EventFlowLayout
      heading={'Step 10 - Conclusion'}
      progressPercent={100}
      forwardLink={'/dashboard'}
    >
      <SimpleGrid columns={{base: 2, md: 4}} gap={4}>
        <StatCard label={'Total No of Post'} value={1000} cardBgColor={'blackAlpha.800'} titleColor={'white'}/>
        <StatCard label={'Disaster Tweets'} value={800} cardBgColor={'#1DA1F2'} titleColor={'white'} subTextColor={'white'}/>
        <StatCard label={'Disaster Facebook Post'} value={100} cardBgColor={'#4267B2'} titleColor={'white'} subTextColor={'white'}/>
        <StatCard label={'Disaster Instagram Post'} value={100} cardBgColor={'#FCAF45'} titleColor={'white'} subTextColor={'white'}/>
      </SimpleGrid>

      <SimpleGrid columns={{base: 1, md: 2}} gap={4} mt={8}>
        {/* main box 1*/}
       <Flex 
          direction={'column'}
          boxShadow={'lg'} border={'1px solid lightgray'}
          rounded={'md'} fontSize={'lg'}
          gap={6}  p={4}  
       >
        <Flex gap={6} align={'center'}>
          <Icon h={10} w={10} mt={2}><BsCardImage /></Icon>
          <Text fontWeight={'semibold'}>Total Number of Images - 1000</Text>
        </Flex>
        <Flex gap={6} align={'center'}>
          <Icon h={10} w={10} mt={2} ><BsFillCameraVideoFill /></Icon>
          <Text fontWeight={'semibold'}>Total Number of Videos - 900</Text>
        </Flex>
        <Flex gap={6} align={'center'}>
          <Icon h={10} w={10} mt={2}><BsSoundwave /></Icon>
          <Text fontWeight={'semibold'}>Total Number of Audios - 500</Text>
        </Flex>
       </Flex>

       {/* main box 2*/}
       <Flex 
         direction={'column'}
         justifyContent={'center'} rounded={'md'}
         boxShadow={'lg'} border={'1px solid lightgray'}
         fontSize={'lg'} fontWeight={'semibold'}
         gap={6} p={4}
       >
        <Flex gap={6} align={'center'}>
          <Icon h={10} w={10} mt={2} color={'#eb8f34'}><IoLocationSharp /></Icon>
          <Text fontWeight={'semibold'}>Top Location Identified - Panvel, Maharashtra</Text>
        </Flex>
        <Flex gap={6} align={'center'}>
          <Icon h={10} w={10} mt={2} color={'#eb3434'}><CgDanger /></Icon>
          <Text fontWeight={'semibold'}>Number of estimated affected people - 2000</Text>
        </Flex>
       </Flex>
      </SimpleGrid>
    </EventFlowLayout>
  );
};

export default Conclusion;