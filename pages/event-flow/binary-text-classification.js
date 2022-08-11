import React from "react";
import EventFlowLayout from "./_layout";
import StatCard from "../../components/Stat/StatCard";
import {Heading, Icon, Link, SimpleGrid, Table, TableContainer, Tbody, Td, Th, Thead, Tr,} from "@chakra-ui/react";
import {AiOutlineFacebook, AiOutlineTwitter} from "react-icons/ai";
import axios from "axios";

const BinaryTextClassification = ({twitterData, facebookData, instagramData}) => {
  return (
    <EventFlowLayout
      heading={"Step 2 - Binary Classification of Text"}
      progressPercent={20}
      forwardLink={"/event-flow/multi-label-text-classification"}
    >
      {/* Stats */}
      <SimpleGrid columns={{base: 2, md: 4}} gap={4}>
        <StatCard
          label={"Total No of Tweets"}
          value={twitterData.length + facebookData.length + instagramData.length}
          cardBgColor={"blackAlpha.800"}
          titleColor={"white"}
        />
        <StatCard
          label={"Total No of Disastrous Tweets"}
          value={(twitterData.filter(item => item.prediction === 1).length) + (facebookData.filter(item => item.prediction === 1).length) + (instagramData.filter(item => item.prediction === 1).length)}
          cardBgColor={"#F04A4A"}
          titleColor={"white"}
          subTextColor={"white"}
        />
        <StatCard
          label={"Total No of Non-Disastrous Tweets"}
          value={(twitterData.length + facebookData.length + instagramData.length) - (twitterData.filter(item => item.prediction === 1).length) + (facebookData.filter(item => item.prediction === 1).length) + (instagramData.filter(item => item.prediction === 1).length)}
          cardBgColor={"#3798F1"}
          titleColor={"white"}
          subTextColor={"white"}
        />
      </SimpleGrid>

      {/* Heading 1 */}
      <Heading size={"lg"} my={8}>Disastrous Tweets</Heading>

      {/* Disastrous Tweets */}
      <TableContainer>
        <Table borderWidth={"1px"}>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Username</Th>
              <Th>Tweet</Th>
              <Th textAlign={"center"}>Date</Th>
              <Th textAlign={"center"}>Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            <>
              {twitterData.map((item, index) => {
                if (item.prediction === 1)
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
                if (item.prediction === 1)
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

      {/* Heading 2 */}
      <Heading size={"lg"} my={8}>Non-Disastrous Tweets</Heading>

      {/* Disastrous Tweets */}
      <TableContainer>
        <Table borderWidth={"1px"}>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Username</Th>
              <Th>Tweet</Th>
              <Th textAlign={"center"}>Date</Th>
              <Th textAlign={"center"}>Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            <>
              {twitterData.map((item, index) => {
                if (item.prediction === 0)
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
                if (item.prediction === 0)
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

export default BinaryTextClassification;

export async function getServerSideProps() {

  let twitterData, facebookData, instagramData

  try {
    const res = await axios.get(`http://127.0.0.1:8000/demo/api/event-flow/binary-text-classification`)
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
