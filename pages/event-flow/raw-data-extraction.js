import React from 'react';
import EventFlowLayout from "./_layout";
import {Heading, Icon, Link, SimpleGrid, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import StatCard from "../../components/Stat/StatCard";
import {AiOutlineTwitter} from "react-icons/ai";
import {TweetsData} from "../../constants/sample-data/tweetsData";

const RawDataExtraction = () => {
  return (
    <EventFlowLayout
      heading={'Step 1 - Extraction of Raw Data'}
      progressPercent={10}
      forwardLink={'/event-flow/binary-text-classification'}
    >
      {/* Stats */}
      <SimpleGrid columns={{base: 2, md: 4}} gap={4}>
        <StatCard label={'Total No of Tweets'} value={1000} cardBgColor={'blackAlpha.800'} titleColor={'white'}/>
        <StatCard label={'Tweets from Twitter'} value={800} cardBgColor={'#1DA1F2'} titleColor={'white'} subTextColor={'white'}/>
        <StatCard label={'Tweets from Facebook'} value={100} cardBgColor={'#4267B2'} titleColor={'white'} subTextColor={'white'}/>
        <StatCard label={'Tweets from Instagram'} value={100} cardBgColor={'#FCAF45'} titleColor={'white'} subTextColor={'white'}/>
      </SimpleGrid>

      {/* Heading */}
      <Heading size={'lg'} my={8}>Scrapped Raw Data</Heading>

      {/* Table */}
      <TableContainer>
        <Table borderWidth={'1px'}>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Username</Th>
              <Th>Tweet</Th>
              <Th textAlign={'center'}>Date</Th>
              <Th textAlign={'center'}>Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            <>
              {TweetsData.map((item, index) => {
                return (
                  <Tr key={index}>
                    <Td>{index}</Td>
                    <Td>{item.username}</Td>
                    <Td maxW={'xs'} whiteSpace={'initial'}>{item.tweet}</Td>
                    <Td textAlign={'center'}>{item.time}</Td>
                    <Td textAlign={'center'}><Link href={item.link} target={'_blank'}><Icon as={AiOutlineTwitter} h={8} w={8} color={'#1DA1F2'}/></Link></Td>
                  </Tr>
                )
              })}
            </>
          </Tbody>
        </Table>
      </TableContainer>
    </EventFlowLayout>
  );
};

export default RawDataExtraction;