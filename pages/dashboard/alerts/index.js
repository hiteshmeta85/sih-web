import React, {useState} from 'react';
import DashboardContainer from "../_layout";
import CustomLink from "../../../components/Link/CustomLink";
import {MdOutlineAdd} from "react-icons/md";
import AlertCard from "../../../components/Alert/AlertCard";
import {SimpleGrid} from "@chakra-ui/react";
import axios from "axios";

const Index = ({alertsData}) => {

  const [alerts, setAlerts] = useState(alertsData)

  return (
    <DashboardContainer
      title={'Alerts'}
      helperItems={<CustomLink href={'/dashboard/alerts/create-alert'} text={'Create Alert'} icon={<MdOutlineAdd/>}/>}
    >
      {alerts &&
        <SimpleGrid columns={{base: 1, md: 2, lg: 3, xl: 4}} spacing={4}>
          <>
            {alerts.slice(0, 6).map((item, index) => {
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
        </SimpleGrid>}
    </DashboardContainer>
  );
};

export default Index;

export async function getServerSideProps() {

  let alertsData

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/alerts`)
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