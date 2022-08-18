import React, {useState} from 'react';
import DashboardContainer from "../_layout";
import CustomLink from "../../../components/Link/CustomLink";
import {MdOutlineAdd} from "react-icons/md";
import AlertCard from "../../../components/Alert/AlertCard";
import {Box, Flex, Heading, SimpleGrid} from "@chakra-ui/react";
import axios from "axios";
import {googleMapsApiKey, libraries, mapCenter} from "../../../components/Map/MapConfigAndDefaults";
import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";
import {ImCancelCircle} from "react-icons/im";
import {BiSelectMultiple} from "react-icons/bi";

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const Index = ({alertsData}) => {

  const [alerts, setAlerts] = useState(alertsData)
  const [showAlerts, setShowAlerts] = useState(false)

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: googleMapsApiKey, libraries,
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({lat, lng}) => {
    mapRef.current.panTo({lat, lng});
    mapRef.current.setZoom(15);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <DashboardContainer
      title={'Alerts'}
      helperItems={<CustomLink href={'/dashboard/alerts/create-alert'} text={'Create Alert'} icon={<MdOutlineAdd/>}/>}
    >
      {alerts && <Box
        borderRadius={'md'}
        px={{base: 2, md: 4, lg: 6}}
        pt={{base: 4, md: 6, lg: 6}}
        pb={{base: 6, md: 8, lg: 6}}
        bg={'white'}
      >
        <SimpleGrid columns={{base: 1, md: 2, lg: 3, xl: 4}} spacing={4}>
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
        <Box position={'relative'} mt={12}>
          {alerts.length > 0 && <Flex
            position={'absolute'}
            justifyContent={'space-between'}
            alignItems={'center'}
            bottom={0}
            zIndex={1}
            bg={'blackAlpha.800'}
            py={2}
            userSelect={'none'}
            flexWrap={'wrap'}
            minW={'full'}
            paddingRight={12}
          >
            <Flex ml={2}>
              <Flex
                onClick={() => setShowAlerts(!showAlerts)}
                bg={showAlerts ? 'yellow.300' : 'white'}
                cursor={'pointer'}
                alignItems={'center'}
                gap={2}
                borderRadius={'xl'}
                py={2}
                px={4}
                mx={2}
                fontSize={'xs'}
                whiteSpace={'nowrap'}
                boxShadow={'lg'}
              >
                Alerts
                {showAlerts ? <ImCancelCircle/> : <BiSelectMultiple/>}
              </Flex>
            </Flex>
          </Flex>}
          <GoogleMap
            id="map"
            mapContainerStyle={{
              width: '100%',
              height: '670px',
            }}
            zoom={4}
            center={mapCenter}
            options={options}
            onLoad={onMapLoad}
          >
            <>{showAlerts && alerts.map((marker, index) => {
              return (<Marker
                key={index}
                position={{lat: marker.geolocation_lat, lng: marker.geolocation_lng}}
                onClick={() => {
                  panTo({lat: marker.geolocation_lat, lng: marker.geolocation_lng})
                }}
                icon={{
                  url: `/images/circles/alert.svg`,
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                  scaledSize: new window.google.maps.Size(25, 25),
                }}
              />)
            })}</>
          </GoogleMap>
        </Box>
      </Box>
      }
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