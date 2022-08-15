import React, {useState} from 'react';
import DashboardContainer from "../_layout";
import CustomLink from "../../../components/Link/CustomLink";
import {MdOutlineAdd} from "react-icons/md";
import AlertCard from "../../../components/Alert/AlertCard";
import {Box, Heading, SimpleGrid} from "@chakra-ui/react";
import axios from "axios";
import ClusterMap from "../../../components/Map/ClusterMap";

const Index = ({alertsData}) => {

  const [alerts, setAlerts] = useState(alertsData)

  return (
    <DashboardContainer
      title={'Alerts'}
      helperItems={<CustomLink href={'/dashboard/alerts/create-alert'} text={'Create Alert'} icon={<MdOutlineAdd/>}/>}
    >
      {alerts &&
        <Box
          borderRadius={'md'}
          px={{base: 2, md: 4, lg: 6}}
          pt={{base: 4, md: 6, lg: 6}}
          pb={{base: 6, md: 8, lg: 10}}
          bg={'white'}
        >
          <ClusterMap locations={alerts}/>
          <Heading my={4}>Alerts</Heading>
          <SimpleGrid columns={{base: 1, md: 2, lg: 3, xl: 4}} spacing={4} my={4}>
            <>
              {alerts.slice(0, 6)
                .map((item, index) => {
                  return (
                    <AlertCard
                      key={index}
                      alertId={item.alertId}
                      title={item.title}
                      description={item.description}
                      label={item.label}
                      geolocation_lat={item.geolocation_lat}
                      geolocation_lng={item.geolocation_lng}
                      severity_type={item.severityType}
                      canDelete={true}
                      alerts={alerts}
                      setAlerts={setAlerts}
                    />
                  )
                })}
            </>
          </SimpleGrid>
        </Box
        >}
    </DashboardContainer>
  );
};

export default Index;

export async function getServerSideProps() {

  let alertsData

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/alerts`)
    if (res.data) {
      alertsData = res.data.data.alerts
    }
  } catch (e) {
    console.log(e)
    alertsData = null
  }

  return {
    props: {
      alertsData
    }
  }
}