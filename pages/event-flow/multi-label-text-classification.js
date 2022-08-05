import React from "react";
import EventFlowLayout from "./_layout";
import StatCard from "../../components/Stat/StatCard";
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
  Text,
  Box,
} from "@chakra-ui/react";
import {AiOutlineTwitter} from "react-icons/ai";
import {TweetsData} from "../../constants/sample-data/tweetsData";

const MultiLabelTextClassification = () => {
  return (
    <EventFlowLayout
      heading={"Step 3 - Multi-label Classification of Text"}
      progressPercent={30}
      forwardLink={"/event-flow/binary-image-classification"}
    >
      <SimpleGrid columns={{base: 2, md: 4}} gap={4}>
        <StatCard
          label={"Total No of Disastrous Tweets"}
          value={750}
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
            <>
              {TweetsData.map((item, index) => {
                return (
                  <Tr key={index}>
                    <Td>{index}</Td>
                    <Td>{item.username}</Td>
                    <Td maxW={"xs"} whiteSpace={"initial"}>
                      {item.tweet}
                    </Td>
                    <Td>
                      <>
                        {item.multilabel.map((label, index) => {
                          return <Box key={index}>{label}</Box>;
                        })}
                      </>
                    </Td>
                    <Td textAlign={"center"}>{item.time}</Td>
                    <Td textAlign={"center"}>
                      <Link href={item.link} target={"_blank"}>
                        <Icon as={AiOutlineTwitter} h={8} w={8} color={"#1DA1F2"}/>
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

export default MultiLabelTextClassification;
