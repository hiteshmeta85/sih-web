import React from "react";
import {popularTwitterHandles} from "../../pages";
import {BsTwitter} from "react-icons/bs";

import {Box, Divider, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text,} from "@chakra-ui/react";

const DashTabs = () => {
  return (
    <>
      <Tabs isFitted border={'1px solid lightgray'} borderRadius={'md'}>
        <TabList>
          <Tab p={3}>Active Accounts</Tab>
          <Tab p={3}>Recent Projects</Tab>
        </TabList>
        <TabPanels variant='soft-rounded' colorScheme='green'>
          <TabPanel px={0} pt={2}>
            <>
              {popularTwitterHandles.map((item, index) => {
                return (
                  <>
                    <Flex alignItems={"center"} gap={6} key={index} px={6} py={2}>
                      <BsTwitter color={"#1DA1F2"} size={"1.5rem"}/>
                      <Box>
                        <Text fontWeight={"semibold"}>{item.name}</Text>
                        <Text color={"gray.500"} fontSize={"sm"}>@{item.username}</Text>
                      </Box>
                    </Flex>
                    <Divider/>
                  </>
                )
              })}
            </>
          </TabPanel>
          <TabPanel>
            <p>some data</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default DashTabs;
