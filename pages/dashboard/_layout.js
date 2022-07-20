import React from 'react';
import {Box, Flex, Text} from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";

const DashboardContainer = ({children, title, helperItems}) => {
  return (
    <Flex>
      <Sidebar/>
      <Box
        flex={1}
        h={'100vh'}
        overflow={'scroll'}
        bg={'#F5F5F5'}
      >
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          borderRadius={"md"}
          mx={{base: 2, md: 6}}
          mt={{base: 3, md: 4}}
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