import React, {useState} from 'react';
import DashboardContainer from "../_layout";
import {Box, Button, Flex, Spinner, Text} from "@chakra-ui/react";
import {SearchLocation} from "../../components/Map/SearchLocation";
import {Circle, GoogleMap, InfoWindow, Marker, useLoadScript} from "@react-google-maps/api";
import {
  facebookCircle,
  googleMapsApiKey,
  instagramCircle,
  libraries,
  mapCenter,
  twitterCircle
} from "../../components/Map/MapConfigAndDefaults";
import {FaMapMarkerAlt} from "react-icons/fa";
import {ImCancelCircle} from "react-icons/im";
import {BiSelectMultiple} from "react-icons/bi";
import axios from "axios";

const options = {
  disableDefaultUI: true, zoomControl: true,
};

const Maps = ({projectIds, alerts, projectData}) => {

  /// project
  const [currentProjectData, setCurrentProjectData] = useState({...projectData})
  const [currentProjectId, setCurrentProjectId] = useState(projectData.projectId)
  const [isDataFetching, setIsDataFetching] = useState(false)

  const handleChange = async (event) => {
    event.preventDefault()
    setIsDataFetching(true)
    const id = event.target.value
    try {
      await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/maps/${id}`)
        .then(function (response) {
          setCurrentProjectData(response.data.data.projects)
          setCurrentProjectId(id)
        })
        .catch(function (error) {
          console.log(error)
        })
    } catch (err) {
      console.log(err)
    }
    setIsDataFetching(false)
  }

  /// map - show geolocation
  const [showAlerts, setShowAlerts] = useState(false)
  const [showReliefCamps, setShowReliefCamps] = useState(false)
  const [showTwitterPoints, setShowTwitterPoints] = useState(false)
  const [showFacebookPoints, setShowFacebookPoints] = useState(false)
  const [showInstagramPoints, setShowInstagramPoints] = useState(false)
  const [showAffectedZones, setShowAffectedZones] = useState(false)

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: googleMapsApiKey, libraries,
  });

  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback((e) => {
    setMarkers(() => [{
      lat: e.latLng.lat(), lng: e.latLng.lng(), time: new Date()
    }]);
  }, []);

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

  const handleSubmit = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/relifcamps`,
        {projectId: currentProjectData.projectId, geolocation_lng: markers[0].lng, geolocation_lat: markers[0].lat})
        .then(function (response) {
          console.log(response)
          setMarkers([])
          // todo : make marker visible on submit
          // manage add relief camps to existing array
        })
        .catch(function (error) {
          console.log(error)
        })
    } catch (err) {
      console.log(err)
    }
  }

  return (<DashboardContainer
    title={'Maps'}
    helperItems={<Flex gap={4} alignItems={'center'}>
      {markers.length > 0 && <Button
        onClick={handleSubmit}
        bg={'transparent'}
        _hover={{bg: 'transparent'}}
        p={0}
      >
        <FaMapMarkerAlt color={'green'} size={'1.5rem'}/>
      </Button>}
      <SearchLocation panTo={panTo}/>
      <select value={currentProjectId} onChange={(e) => handleChange(e)} style={{
        appearance: 'none', border: '2px solid black', padding: '5px 24px', borderRadius: '6px', marginRight: '8px'
      }}
      >
        {projectIds.map((item, index) => <option key={index} value={item}>{item}</option>)}
      </select>
      {isDataFetching && <Spinner/>}
    </Flex>}
  >
    <Box pos={'relative'}>
      <Flex
        position={'absolute'}
        justifyContent={'space-between'}
        alignItems={'center'}
        bottom={2}
        zIndex={1}
        mb={3}
        borderRadius={'sm'}
        userSelect={'none'}
        flexWrap={'wrap'}
        minW={'container.lg'}
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
      </Flex>
      <GoogleMap
        id="map"
        mapContainerStyle={{
          width: '100%',
          height: '670px',
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'
        }}
        zoom={4}
        center={mapCenter}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        <>
          {showAffectedZones && (<>
            {currentProjectData.clustersInstagram.map((marker, index) => {
              return (
                <Circle key={index} center={{lat: marker.geolocation_lat, lng: marker.geolocation_lng}} radius={60000}
                        options={twitterCircle}/>)
            })}
            {currentProjectData.clustersFacebook.map((marker, index) => {
              return (
                <Circle key={index} center={{lat: marker.geolocation_lat, lng: marker.geolocation_lng}} radius={60000}
                        options={facebookCircle}/>)
            })}
            {currentProjectData.clustersTwitter.map((marker, index) => {
              return (
                <Circle key={index} center={{lat: marker.geolocation_lat, lng: marker.geolocation_lng}} radius={60000}
                        options={instagramCircle}/>)
            })}
          </>)}
          {markers.map((marker, index) => (<Marker
            key={index}
            position={{lat: marker.lat, lng: marker.lng}}
            onClick={() => {
              setSelected(marker);
              panTo({lat: marker.lat, lng: marker.lng})
            }}
            icon={{
              url: `/images/circles/relief_camp.svg`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(25, 25),
            }}
          />))}
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
          {showReliefCamps && currentProjectData.relifCamps.map((marker, index) => {
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
            {currentProjectData.twitter.map((marker, index) => {
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
            {currentProjectData.facebook.map((marker, index) => {
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
            {currentProjectData.instagram.map((marker, index) => {
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
  </DashboardContainer>);
};

export default Maps;

export async function getServerSideProps() {

  let projectIds = [], alerts = [], projectData = {}

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/maps`)
    if (res.data) {
      projectIds = res.data.data.projectIds.map((item) => item.projectId)
      alerts = res.data.data.alerts
      projectData = res.data.data.projectData
    }
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      projectIds,
      alerts,
      projectData
    }
  }
}