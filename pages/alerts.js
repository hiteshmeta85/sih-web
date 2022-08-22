import React from 'react';
import LandingPageLayout from "./_layout";
import AlertCard from "../components/Alert/AlertCard";
import {Box, Heading, SimpleGrid} from "@chakra-ui/react";
import axios from "axios";

const Alerts = ({alerts}) => {

  return (
    <LandingPageLayout>
      {alerts.length > 0 && <Box maxW={'container.xl'} mx={'auto'} p={{base: 2, md: 4, lg: 8}}>
        <Heading my={2}>Alerts</Heading>
        <SimpleGrid spacing={4}>
          <>
            {alerts.slice(0, 6)
              .map((item, index) => {
                return (
                  <AlertCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    label={item.label}
                    geolocation_lat={item.geolocation_lat}
                    geolocation_lng={item.geolocation_lng}
                    severity_type={item.severityType}
                  />
                )
              })}
          </>
        </SimpleGrid>
      </Box>}
    </LandingPageLayout>
  );
};

export default Alerts;

export async function getServerSideProps() {

  let alerts = []

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/alerts`)
    if (res.data) {
      alerts = res.data.data.alerts
    }
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      alerts
    }
  }
}