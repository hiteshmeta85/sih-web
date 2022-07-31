import React from 'react';
import {Box, Grid, GridItem} from "@chakra-ui/react";
import DashboardContainer from "../../_layout";

const IndividualTweetAnalysisLayout = ({title, children, rightSection, topSection}) => {
  return (
    <DashboardContainer title={title}>
      <Box bg={"white"} p={4} rounded={"md"}>
        {topSection}
        <Grid gridTemplateColumns={"repeat(5, 1fr)"} gap={8} mt={2}>
          <GridItem colSpan={{base: 5, lg: 3}}>
            {children}
          </GridItem>
          <GridItem colSpan={{base: 5, md: 2}}>
            {rightSection}
          </GridItem>
        </Grid>
      </Box>
    </DashboardContainer>
  );
};

export default IndividualTweetAnalysisLayout;