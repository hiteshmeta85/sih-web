import React from 'react';
import EventFlowLayout from "./_layout";
import {Heading, SimpleGrid} from "@chakra-ui/react";
import StatCard from "../../components/Stat/StatCard";

const BinaryVideoClassification = () => {
  return (
    <EventFlowLayout
      heading={'STEP 6 - Binary Video Classification '}
      progressPercent={60}
      forwardLink={'/event-flow/voice-analysis'}
    >
      {/* Stats */}
      <SimpleGrid columns={{base: 2, md: 4}} gap={4}>
        <StatCard label={'Total No of Videos'} value={250} cardBgColor={'blackAlpha.800'} titleColor={'white'}/>
        <StatCard label={'Total No of Disastrous Videos'} value={150} cardBgColor={'#F04A4A'} titleColor={'white'} subTextColor={'white'}/>
        <StatCard label={'Total No of Non-Disastrous Videos'} value={100} cardBgColor={'#3798F1'} titleColor={'white'} subTextColor={'white'}/>
      </SimpleGrid>

      {/* Heading 1 */}
      <Heading size={'lg'} my={8}>Disastrous Videos</Heading>
      <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={4}>

      </SimpleGrid>

      {/* Heading 2 */}
      <Heading size={'lg'} my={8}>Non-Disastrous Videos</Heading>
      <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={4}>

      </SimpleGrid>

    </EventFlowLayout>
  );
};

export default BinaryVideoClassification;