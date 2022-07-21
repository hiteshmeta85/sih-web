import React from 'react';
import LandingPageLayout from "./_layout";
import {AlertsData} from "../components/Alert/alerts-data";
import AlertCard from "../components/Alert/AlertCard";
import {Box, Heading, SimpleGrid} from "@chakra-ui/react";

const Alerts = () => {
  return (
    <LandingPageLayout>
      <Box maxW={'container.xl'} mx={'auto'} p={{base: 2, md: 4, lg: 8}}>
        <Heading my={2}>Alerts</Heading>
        <SimpleGrid spacing={4}>
          <>
            {AlertsData.slice(0, 6)
              .map((item, index) => {
                return (
                  <AlertCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    labels={item.labels}
                    geolocation_lat={item.geolocation_lat}
                    geolocation_lng={item.geolocation_lng}
                    severity_type={item.severity_type}
                  />
                )
              })}
          </>
        </SimpleGrid>
      </Box>
    </LandingPageLayout>
  );
};

export default Alerts;