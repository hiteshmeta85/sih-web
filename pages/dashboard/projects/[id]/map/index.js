import TabsLayout from "../_tabsLayout";
import {Box, Flex, TabPanel, TabPanels, Text} from "@chakra-ui/react";
import React, {useState} from "react";
import {ImCancelCircle} from "react-icons/im";
import {BiSelectMultiple} from "react-icons/bi";
import {Circle, GoogleMap, InfoWindow, Marker, useLoadScript} from "@react-google-maps/api";
import {
  facebookCircle,
  googleMapsApiKey,
  instagramCircle,
  libraries,
  mapCenter,
  twitterCircle
} from "../../../../../components/Map/MapConfigAndDefaults";
import axios from "axios";

const options = {
  disableDefaultUI: true, zoomControl: true,
};

const ProjectMap = ({alerts, projectData}) => {

  const [showAlerts, setShowAlerts] = useState(false)
  const [showReliefCamps, setShowReliefCamps] = useState(false)
  const [showTwitterPoints, setShowTwitterPoints] = useState(false)
  const [showFacebookPoints, setShowFacebookPoints] = useState(false)
  const [showInstagramPoints, setShowInstagramPoints] = useState(false)
  const [showAffectedZones, setShowAffectedZones] = useState(false)

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: googleMapsApiKey, libraries,
  });

  const [selected, setSelected] = React.useState(null);

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
    <TabsLayout defaultIndex={4}>
      <TabPanels bg={"white"}>
        <TabPanel/>
        <TabPanel/>
        <TabPanel/>
        <TabPanel/>
        <TabPanel>
          <Box pos={'relative'}>
            {Object.keys(projectData).length !== 0 && <Flex
              position={'absolute'}
              justifyContent={'space-between'}
              alignItems={'center'}
              bottom={0}
              zIndex={1}
              bg={'green.500'}
              py={2}
              borderRadius={'sm'}
              userSelect={'none'}
              flexWrap={'wrap'}
              minW={'full'}
              paddingRight={12}
            >
              <Flex ml={2}>
                <Flex
                  onClick={() => setShowAlerts(!showAlerts)}
                  bg={showAlerts ? 'blackAlpha.800' : 'white'}
                  color={showAlerts ? 'white' : 'black'}
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
                <Flex
                  onClick={() => setShowReliefCamps(!showReliefCamps)}
                  bg={showReliefCamps ? 'blackAlpha.800' : 'white'}
                  color={showReliefCamps ? 'white' : 'black'}
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
                  Relief Camps
                  {showReliefCamps ? <ImCancelCircle/> : <BiSelectMultiple/>}
                </Flex>
              </Flex>
              <Flex mr={2}>
                <Flex
                  onClick={() => setShowAffectedZones(!showAffectedZones)}
                  bg={showAffectedZones ? 'blackAlpha.800' : 'white'}
                  color={showAffectedZones ? 'white' : 'black'}
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
                  Affected Zones
                  {showAffectedZones ? <ImCancelCircle/> : <BiSelectMultiple/>}
                </Flex>
                <Flex
                  onClick={() => setShowTwitterPoints(!showTwitterPoints)}
                  bg={showTwitterPoints ? 'blackAlpha.800' : 'white'}
                  color={showTwitterPoints ? 'white' : 'black'}
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
                  Twitter
                  {showTwitterPoints ? <ImCancelCircle/> : <BiSelectMultiple/>}
                </Flex>
                <Flex
                  onClick={() => setShowFacebookPoints(!showFacebookPoints)}
                  bg={showFacebookPoints ? 'blackAlpha.800' : 'white'}
                  color={showFacebookPoints ? 'white' : 'black'}
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
                  Facebook
                  {showFacebookPoints ? <ImCancelCircle/> : <BiSelectMultiple/>}
                </Flex>
                <Flex
                  onClick={() => setShowInstagramPoints(!showInstagramPoints)}
                  bg={showInstagramPoints ? 'blackAlpha.800' : 'white'}
                  color={showInstagramPoints ? 'white' : 'black'}
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
                  Instagram
                  {showInstagramPoints ? <ImCancelCircle/> : <BiSelectMultiple/>}
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
              // onClick={onMapClick}
              onLoad={onMapLoad}
            >
              <>
                {showAffectedZones && (<>
                  {projectData.clustersInstagram.map((marker, index) => {
                    return (
                      <Circle key={index} center={{lat: marker.geolocation_lat, lng: marker.geolocation_lng}}
                              radius={60000}
                              options={twitterCircle}/>)
                  })}
                  {projectData.clustersFacebook.map((marker, index) => {
                    return (
                      <Circle key={index} center={{lat: marker.geolocation_lat, lng: marker.geolocation_lng}}
                              radius={60000}
                              options={facebookCircle}/>)
                  })}
                  {projectData.clustersTwitter.map((marker, index) => {
                    return (
                      <Circle key={index} center={{lat: marker.geolocation_lat, lng: marker.geolocation_lng}}
                              radius={60000}
                              options={instagramCircle}/>)
                  })}
                </>)}
                {showAlerts && alerts.map((marker, index) => {
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
                })}
                {showReliefCamps && projectData.relifCamps.map((marker, index) => {
                  return (<Marker
                    key={index}
                    position={{lat: marker.geolocation_lat, lng: marker.geolocation_lng}}
                    onClick={() => {
                      panTo({lat: marker.geolocation_lat, lng: marker.geolocation_lng})
                    }}
                    icon={{
                      url: `/images/circles/relief_camp.svg`,
                      origin: new window.google.maps.Point(0, 0),
                      anchor: new window.google.maps.Point(15, 15),
                      scaledSize: new window.google.maps.Size(25, 25),
                    }}
                  />)
                })}
                {showTwitterPoints && (<>
                  {projectData.twitter.map((marker, index) => {
                    return (
                      <Marker
                        key={index}
                        position={{lat: marker.geolocation_lat, lng: marker.geolocation_lng}}
                        onClick={() => {
                          panTo({lat: marker.geolocation_lat, lng: marker.geolocation_lng})
                        }}
                        icon={{
                          url: `/images/circles/twitter.svg`,
                          origin: new window.google.maps.Point(0, 0),
                          anchor: new window.google.maps.Point(15, 15),
                          scaledSize: new window.google.maps.Size(20, 20),
                        }}
                      />
                    )
                  })}
                </>)}
                {showFacebookPoints && (<>
                  {projectData.facebook.map((marker, index) => {
                    return (<Marker
                      key={index}
                      position={{lat: marker.geolocation_lat, lng: marker.geolocation_lng}}
                      onClick={() => {
                        panTo({lat: marker.geolocation_lat, lng: marker.geolocation_lng})
                      }}
                      icon={{
                        url: `/images/circles/facebook.svg`,
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(15, 15),
                        scaledSize: new window.google.maps.Size(20, 20),
                      }}
                    />)
                  })}
                </>)}

                {showInstagramPoints && (<>
                  {projectData.instagram.map((marker, index) => {
                    return (<Marker
                      key={index}
                      position={{lat: marker.geolocation_lat, lng: marker.geolocation_lng}}
                      onClick={() => {
                        panTo({lat: marker.geolocation_lat, lng: marker.geolocation_lng})
                      }}
                      icon={{
                        url: `/images/circles/instagram.svg`,
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(15, 15),
                        scaledSize: new window.google.maps.Size(20, 20),
                      }}
                    />)
                  })}
                </>)}
              </>

              {selected ? (<InfoWindow
                position={{lat: selected.lat, lng: selected.lng}}
                onCloseClick={() => {
                  setSelected(null);
                }}
                options={{zIndex: 1}}
              >
                <Text pos={'relative'}>Relief Camp</Text>
              </InfoWindow>) : null}
            </GoogleMap>
          </Box>
        </TabPanel>
      </TabPanels>
    </TabsLayout>
  )
}

export default ProjectMap

export async function getServerSideProps() {

  let alerts = [], projectData = {}

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/maps/39`)
    if (res.data) {
      alerts = res.data.data.alerts
      projectData = res.data.data.projectData
    }
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      alerts,
      projectData
    }
  }
}