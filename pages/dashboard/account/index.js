import React from 'react';
import DashboardContainer from "../_layout";
import {Box} from "@chakra-ui/react";

const Index = () => {
  return (
    <DashboardContainer title={'Account'}>
      <Box
        borderRadius={'md'}
        p={{base: 2, md: 4, lg: 6}}
        bg={'white'}
      >
        Profile Details
      </Box>
    </DashboardContainer>
  );
};

export default Index;