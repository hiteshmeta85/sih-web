import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import {Box, Flex} from "@chakra-ui/react";

const DashboardContainer = ({children}) => {
  return (
    <Flex>
      <Sidebar/>
      <Box
        flex={1}
        h={'100vh'}
        py={2} px={4}
        overflow={'scroll'}
        bgColor={'#F5F5F5'}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default DashboardContainer;