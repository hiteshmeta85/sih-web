import React from 'react';
import EventFlowLayout from "./_layout";
import {Heading, Icon, Link, SimpleGrid, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import StatCard from "../../components/Stat/StatCard";
import {AiOutlineFacebook, AiOutlineTwitter} from "react-icons/ai";
import axios from "axios";

const RawDataExtraction = ({twitterData, facebookData, instagramData}) => {
  return (
    <EventFlowLayout
      heading={'Step 1 - Extraction of Raw Data'}
      progressPercent={10}
      forwardLink={'/event-flow/binary-text-classification'}
    >
      {/* Stats */}
      <SimpleGrid columns={{base: 2, md: 4}} gap={4}>
        <StatCard label={'Total No of Tweets'} value={twitterData.length + facebookData.length} cardBgColor={'blackAlpha.800'} titleColor={'white'}/>
        <StatCard label={'Tweets from Twitter'} value={twitterData.length} cardBgColor={'#1DA1F2'} titleColor={'white'} subTextColor={'white'}/>
        <StatCard label={'Tweets from Facebook'} value={facebookData.length} cardBgColor={'#4267B2'} titleColor={'white'} subTextColor={'white'}/>
        <StatCard label={'Tweets from Instagram'} value={instagramData.length} cardBgColor={'#FCAF45'} titleColor={'white'} subTextColor={'white'}/>
      </SimpleGrid>

      {/* Heading */}
      <Heading size={'lg'} my={8}>Scrapped Raw Data</Heading>

      {/* Table */}
      <TableContainer mb={4}>
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
              {twitterData.map((item, index) => {
                return (
                  <Tr key={index}>
                    <Td>{item.id}</Td>
                    <Td>{item.username}</Td>
                    <Td maxW={'xs'} whiteSpace={'initial'}>{item.tweet}</Td>
                    <Td textAlign={'center'}>{item.created_at}</Td>
                    <Td textAlign={'center'}><Link href={item.link} target={'_blank'}>
                      <Icon as={AiOutlineTwitter} h={8} w={8} color={'#1DA1F2'}/></Link>
                    </Td>
                  </Tr>
                )
              })}
              {facebookData.map((item, index) => {
                return (
                  <Tr key={index}>
                    <Td>{item.id}</Td>
                    <Td>{item.username}</Td>
                    <Td maxW={'xs'} whiteSpace={'initial'}>{item.post_text}</Td>
                    <Td textAlign={'center'}>{item.time}</Td>
                    <Td textAlign={'center'}><Link href={item.post_url} target={'_blank'}>
                      <Icon as={AiOutlineFacebook} h={8} w={8} color={'#4167B2'}/></Link>
                    </Td>
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


export async function getServerSideProps() {

  let twitterData, facebookData, instagramData

  try {
    const res = await axios.get(`http://127.0.0.1:8000/demo/api/event-flow/raw-data-extraction`)
    if (res.data) {
      twitterData = res.data.data.twitterData
      facebookData = res.data.data.facebookData
    }
  } catch (e) {
    console.log(e)
    twitterData = []
    facebookData = []
  }

  instagramData = []

  return {
    props: {
      twitterData,
      facebookData,
      instagramData
    }
  }
}