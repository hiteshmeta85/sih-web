import React from 'react';
import { Box } from '@chakra-ui/react';
import DashboardContainer from "../_layout";

const LiveDemoLayout = ({children}) => {
  return (
    <DashboardContainer title={'Live Demo'} isSidebarOpenByDefault={false}>
      <Box bg={'white'}>{children}</Box>
    </DashboardContainer>
  );
};

export default LiveDemoLayout;