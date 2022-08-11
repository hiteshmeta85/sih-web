import React from "react";
import EventFlowLayout from "./_layout";
import StatCard from "../../components/Stat/StatCard";
import {
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {AiFillFacebook, AiOutlineTwitter} from "react-icons/ai";
import axios from "axios";

const MultiLabelTextClassification = ({twitterData, facebookData, instagramData}) => {
  return (
    <EventFlowLayout
      heading={"Step 3 - Multi-label Classification of Text"}
      progressPercent={30}
      forwardLink={"/event-flow/binary-image-classification"}
    >
      <SimpleGrid columns={{base: 2, md: 4}} gap={4}>
        <StatCard
          label={"Total No of Disastrous Tweets"}
          value={twitterData.length + facebookData.length + instagramData.length}
          cardBgColor={"#363232"}
          titleColor={"white"}
          subTextColor={"white"}
        />
      </SimpleGrid>

      {/* Heading */}
      <Heading size={"lg"} my={8}>Multi-label Classification</Heading>

      {/* Multi-Label Classification Table */}
      <TableContainer>
        <Table borderWidth={"1px"}>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Username</Th>
              <Th>Tweet</Th>
              <Th>Labels</Th>
              <Th textAlign={"center"}>Date</Th>
              <Th textAlign={"center"}>Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            {twitterData.map((item, index) => {
              if (item.prediction === 1)
                return (
                  <Tr key={index}>
                    <Td>{item.id}</Td>
                    <Td>{item.username}</Td>
                    <Td maxW={'xs'} whiteSpace={'initial'}>{item.tweet}</Td>
                    <Td maxW={'xs'} whiteSpace={'initial'}>
                      {item.multilabel.split(',')
                        .map((step, index) => <Text key={index} border={'1px solid lightgray'} rounded={'lg'}
                                                    m={'0.2rem'} textAlign={'center'}>{step}</Text>)}
                    </Td>
                    <Td textAlign={'center'} maxW={'xs'} whiteSpace={'pre-wrap'}>{item.created_at}</Td>
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
                    <Td maxW={'xs'} whiteSpace={'initial'}>
                      {item.multilabel.split(',')
                        .map((step, index) => <Text key={index} border={'1px solid lightgray'} rounded={'lg'}
                                                    m={'0.2rem'} textAlign={'center'}>{step}</Text>)}
                    </Td>
                    <Td textAlign={'center'} maxW={'xs'} whiteSpace={'pre-wrap'}>{item.time}</Td>
                    <Td textAlign={'center'}><Link href={item.post_url} target={'_blank'}>
                      <Icon as={AiFillFacebook} h={8} w={8} color={'#1DA1F2'}/></Link>
                    </Td>
                  </Tr>
                )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </EventFlowLayout>
  );
};

export default MultiLabelTextClassification;

export async function getServerSideProps() {

  let twitterData, facebookData, instagramData

  try {
    const res = await axios.get(`http://127.0.0.1:8000/demo/api/event-flow/multi-label-text-classification`)
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
