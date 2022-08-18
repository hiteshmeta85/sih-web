import React from 'react';
import {Box, Flex, Text} from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardMenu from "../../components/Sidebar/DashboardMenu";

const DashboardContainer = ({children, title, helperItems, isSidebarOpenByDefault = true}) => {
  return (
    <Flex>
      <Sidebar isSidebarOpenByDefault={isSidebarOpenByDefault}/>
      <Box
        flex={1}
        h={'100vh'}
        overflow={'scroll'}
        bg={'#F5F5F5'}
      >
        <Box
          display={{base: 'flex', lg: 'none'}}
          justifyContent={'flex-end'}
          mx={{base: 2, md: 6}}
          mt={2}
        >
          <DashboardMenu/>
        </Box>
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          borderRadius={"md"}
          mx={{base: 2, md: 6}}
          mt={{base: 3, lg: 4}}
          pl={4}
          pr={2}
          py={2}
          bg={'white'}
          color={'gray.800'}
          fontWeight={'bold'}
          fontSize={'x-large'}
        >
          <Text>
            {title}
          </Text>
          {helperItems &&
            <Box fontSize={'md'}>
              {helperItems}
            </Box>
          }
        </Flex>
        <Box p={{base: 3, md: 6}}>
          {children}
        </Box>
      </Box>
    </Flex>
  );
};

export default DashboardContainer;