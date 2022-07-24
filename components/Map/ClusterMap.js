import React, {useCallback, useMemo, useRef, useState} from 'react'
import {GoogleMap, Marker, MarkerClusterer, useLoadScript} from '@react-google-maps/api';
import {googleMapsApiKey, libraries, locations, mapCenter} from "./MapConfigAndDefaults";
import {Box, Button, Text} from "@chakra-ui/react";
import {GrRefresh} from "react-icons/gr";

const ClusterMap = ({height}) => {

  const {isLoaded} = useLoadScript({
    googleMapsApiKey,
    libraries
  });

  const [data, setData] = useState(false)

  const mapRef = useRef()
  const center = useMemo(() => (mapCenter), []);
  const onLoad = useCallback((map) => (mapRef.current = map), [])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <Box pos={'relative'}>
      <Button
        onClick={() => {setData(true)}}
        mb={3}
        bottom={0}
        left={2}
        zIndex={999}
        position={'absolute'}
        bg={'white'}
        color={"blackAlpha.800"}
        borderRadius={'sm'}
        boxShadow={'base'}
      >
        <GrRefresh/> <Text as={'span'} ml={2}>Refresh</Text>
      </Button>
      <GoogleMap
        id='cluster-example'
        mapContainerStyle=
          {{
            width: '100%',
            height: height || '600px',
            borderRadius: '8px'
          }}
        center={center}
        zoom={3}
        onLoad={onLoad}
      >
        {data && <>
          <MarkerClusterer>
            {(clusterer) =>
              locations.map((location, index) => (
                <Marker key={index} position={location} clusterer={clusterer}/>
              ))
            }
          </MarkerClusterer>
        </>}
      </GoogleMap>
    </Box>
  )
}

export default React.memo(ClusterMap)