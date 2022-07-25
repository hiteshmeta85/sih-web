import React from "react";
import { popularTwitterHandles } from "../../pages";
import { BsTwitter } from "react-icons/bs";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";

const DashTabs = () => {
  return (
    <Flex
      bg={"white"}
      borderRadius={"md"}
      boxShadow={"base"}
      w={{md: 'full'}}
      border={"1px solid lightgray"}
      _hover={{ boxShadow: "lg" }}
    >
      <Tabs variant={"enclosed"} isFitted>
        <TabList mb="1em" w={{lg: "sm"}}>
          <Tab>Most Active Accounts</Tab>
          <Tab>Recent Projects</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {popularTwitterHandles.map((item) => {
              return (
                <Box
                  boxShadow={"base"}
                  p={2}
                  mx={4}
                  _hover={{ boxShadow: "lg" }}
                >
                  <Flex alignItems={"center"} gap={2}>
                    <BsTwitter color={"#1DA1F2"} size={"1rem"} />
                    <Text fontWeight={"semibold"}>{item.name}</Text>
                  </Flex>
                  <Text ml={6}>@{item.username}</Text>
                </Box>
              );
            })}
          </TabPanel>
          <TabPanel>
            <p>some data</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default DashTabs;
