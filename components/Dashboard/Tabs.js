import React from "react";
import {BsTwitter} from "react-icons/bs";
import {
  Box,
  Divider,
  Flex,
  LinkBox,
  LinkOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

const DashTabs = ({activeAccounts, recentProjects}) => {
  return (
    <>
      <Tabs isFitted border={'1px solid lightgray'} borderRadius={'md'}>
        <TabList>
          <Tab p={3}>Active Accounts</Tab>
          <Tab p={3}>Recent Projects</Tab>
        </TabList>
        <TabPanels variant='soft-rounded' colorscheme='green' minH={'285px'} maxH={'285px'} overflow={'scroll'}>
          <TabPanel px={0} pt={2}>
            <>
              {activeAccounts.map((item, index) => {
                return (
                  <Box key={index}>
                    <Flex alignItems={"center"} gap={6} px={6} py={2}>
                      <BsTwitter color={"#1DA1F2"} size={"1.5rem"}/>
                      <Box>
                        <Text color={"gray.500"} fontSize={"sm"}>@{item}</Text>
                      </Box>
                    </Flex>
                    <Divider/>
                  </Box>
                )
              })}
            </>
          </TabPanel>
          <TabPanel px={0} pt={2}>
            <>
              {recentProjects.map((item, index) => {
                return (
                  <Box key={index}>
                    <Flex alignItems={"center"} gap={6} px={6} py={2}>
                      <Box>
                        <Text fontWeight={"semibold"}>{item.projectName}</Text>
                        <Text color={"gray.500"} fontSize={"sm"} textTransform={"capitalize"}>{item.disasterType}</Text>
                      </Box>
                    </Flex>
                    {/*<LinkOverlay href='#'/>*/}
                    <Divider/>
                  </Box>
                )
              })}
            </>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default DashTabs;
