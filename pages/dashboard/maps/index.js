import React from 'react';
import DashboardContainer from "../_layout";
import PointerMap from "../../../components/Map/PointerMap";
import {Box} from "@chakra-ui/react";

const Index = () => {
  return (
    <DashboardContainer title={'Maps'}>
      <Box
        borderRadius={'md'}
        px={{base: 2, md: 4, lg: 6}}
        pt={{base: 4, md: 6, lg: 6}}
        pb={{base: 6, md: 8, lg: 10}}
        bg={'white'}
      >
        <PointerMap/>
      </Box>
    </DashboardContainer>
  );
};

export default Index;