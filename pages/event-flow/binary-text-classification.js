import React from "react";
import EventFlowLayout from "./_layout";
import StatCard from "../../components/Stat/StatCard";
import TweetCard from "../../components/Card/TweetCard";
import {
  SimpleGrid,
  Heading,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Icon,
  Link,
} from "@chakra-ui/react";
import { AiOutlineTwitter } from "react-icons/ai";
import { TweetsData } from "../../constants/sample-data/tweetsData";

const BinaryTextClassification = () => {
  return (
    <EventFlowLayout
      heading={"Step 2 - Binary Classification of Text"}
      progressPercent={20}
      forwardLink={"/event-flow/multi-label-text-classification"}
    >
      {/* Stats */}
      <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
        <StatCard
          label={"Total No of Images"}
          value={1000}
          cardBgColor={"blackAlpha.800"}
          titleColor={"white"}
        />
        <StatCard
          label={"Total No of Disastrous Tweets"}
          value={800}
          cardBgColor={"#F04A4A"}
          titleColor={"white"}
          subTextColor={"white"}
        />
        <StatCard
          label={"Total No of Non-Disastrous Tweets"}
          value={100}
          cardBgColor={"#3798F1"}
          titleColor={"white"}
          subTextColor={"white"}
        />
      </SimpleGrid>

      <Heading size={"lg"} my={8}>Disastrous Tweets</Heading>

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
              {TweetsData.map((item, index) => {
                return (
                  <Tr key={index}>
                    <Td>{index}</Td>
                    <Td>{item.username}</Td>
                    <Td maxW={"xs"} whiteSpace={"initial"}>
                      {item.tweet}
                    </Td>
                    <Td textAlign={"center"}>{item.time}</Td>
                    <Td textAlign={"center"}>
                      <Link href={item.link} target={"_blank"}>
                        <Icon
                          as={AiOutlineTwitter}
                          h={8}
                          w={8}
                          color={"#1DA1F2"}
                        />
                      </Link>
                    </Td>
                  </Tr>
                );
              })}
            </>
          </Tbody>
        </Table>
      </TableContainer>

      <Heading size={"lg"} my={8}>Non-Disastrous Tweets</Heading>
      
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
              {TweetsData.map((item, index) => {
                return (
                  <Tr key={index}>
                    <Td>{index}</Td>
                    <Td>{item.username}</Td>
                    <Td maxW={"xs"} whiteSpace={"initial"}>
                      {item.tweet}
                    </Td>
                    <Td textAlign={"center"}>{item.time}</Td>
                    <Td textAlign={"center"}>
                      <Link href={item.link} target={"_blank"}>
                        <Icon
                          as={AiOutlineTwitter}
                          h={8}
                          w={8}
                          color={"#1DA1F2"}
                        />
                      </Link>
                    </Td>
                  </Tr>
                );
              })}
            </>
          </Tbody>
        </Table>
      </TableContainer>
    </EventFlowLayout>
  );
};

export default BinaryTextClassification;
