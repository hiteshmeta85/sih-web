import React from "react";
import EventFlowLayout from "./_layout";
import StatCard from "../../components/Stat/StatCard";
import {
  Box,
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
import {AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import axios from "axios";
import {MdOutlineTranslate} from "react-icons/md";

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
                    <Td maxW={'xs'} whiteSpace={'initial'}>{item.language === "en" || "" ? item.tweet : <Box><Icon as={MdOutlineTranslate} h={6} w={6} color={'gray.700'}/><Text>{item.translated}</Text></Box>}</Td>
                    <Td maxW={'xs'} whiteSpace={'initial'}>
                      {item.multilabel.split(',')
                        .map((step, index) => <Text key={index} border={'1px solid lightgray'} rounded={'lg'} m={'0.2rem'} textAlign={'center'}>{step}</Text>)}
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
                    <Td maxW={'xs'} whiteSpace={'initial'}>{item.language === "en" || "" ? item.post_text : <Box><Icon as={MdOutlineTranslate} h={6} w={6} color={'gray.700'}/><Text>{item.translated}</Text></Box>}</Td>
                    <Td maxW={'xs'} whiteSpace={'initial'}>
                      {item.multilabel.split(',')
                        .map((step, index) => <Text key={index} border={'1px solid lightgray'} rounded={'lg'} m={'0.2rem'} textAlign={'center'}>{step}</Text>)}
                    </Td>
                    <Td textAlign={'center'} maxW={'xs'} whiteSpace={'pre-wrap'}>{item.time}</Td>
                    <Td textAlign={'center'}><Link href={item.post_url} target={'_blank'}>
                      <Icon as={AiFillFacebook} h={8} w={8} color={'#1DA1F2'}/></Link>
                    </Td>
                  </Tr>
                )
            })}
            {instagramData.map((item, index) => {
              if (item.prediction === 1)
                return (
                  <Tr key={index}>
                    <Td>{item.id}</Td>
                    <Td>Unknown</Td>
                    <Td maxW={'xs'} whiteSpace={'initial'}>{item.language === "en" || "" ? item.caption : <Box><Icon as={MdOutlineTranslate} h={6} w={6} color={'gray.700'}/><Text>{item.translated}</Text></Box>}</Td>
                    <Td maxW={'xs'} whiteSpace={'initial'}>
                      {item.multilabel.split(',').map((step, index) => <Text key={index} border={'1px solid lightgray'} rounded={'lg'} m={'0.2rem'} textAlign={'center'}>{step}</Text>)}
                    </Td>
                    <Td textAlign={'center'} maxW={'xs'} whiteSpace={'pre-wrap'}>{item.upload_time}</Td>
                    <Td textAlign={'center'}><Link href={item.post_url} target={'_blank'}>
                      <Icon as={AiOutlineInstagram} h={8} w={8} color={'#FCAF45'}/></Link>
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

  let twitterData = [], facebookData = [], instagramData = []

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_DEMO}/event-flow/multi-label-text-classification`)
    if (res.data) {
      twitterData = res.data.data.twitterData
      facebookData = res.data.data.facebookData
      instagramData = res.data.data.instagramData
    }
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      twitterData,
      facebookData,
      instagramData
    }
  }
}
