import React from "react";
import {popularTwitterHandles} from "../../pages";
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

const recentProjects = [
  {
    id: 1,
    projectName: 'Kerala Floods',
    disasterType: 'flood',
  },
  {
    id: 2,
    projectName: 'Assam Floods',
    disasterType: 'flood',
  },
  {
    id: 1,
    projectName: 'Rajasthan Drought',
    disasterType: 'drought',
  },
  {
    id: 1,
    projectName: 'Maharashtra Storm',
    disasterType: 'storm',
  }
]

const DashTabs = () => {
  return (
    <>
      <Tabs isFitted border={'1px solid lightgray'} borderRadius={'md'}>
        <TabList>
          <Tab p={3}>Active Accounts</Tab>
          <Tab p={3}>Recent Projects</Tab>
        </TabList>
        <TabPanels variant='soft-rounded' colorscheme='green'>
          <TabPanel px={0} pt={2}>
            <>
              {popularTwitterHandles.map((item, index) => {
                return (
                  <Box key={index}>
                    <Flex alignItems={"center"} gap={6} px={6} py={2}>
                      <BsTwitter color={"#1DA1F2"} size={"1.5rem"}/>
                      <Box>
                        <Text fontWeight={"semibold"}>{item.name}</Text>
                        <Text color={"gray.500"} fontSize={"sm"}>@{item.username}</Text>
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
                  <LinkBox key={index}>
                    <Flex alignItems={"center"} gap={6} px={6} py={2}>
                      <Box>
                        <Text fontWeight={"semibold"}>{item.projectName}</Text>
                        <Text color={"gray.500"} fontSize={"sm"} textTransform={"capitalize"}>{item.disasterType}</Text>
                      </Box>
                    </Flex>
                    <LinkOverlay href='#'/>
                    <Divider/>
                  </LinkBox>
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
