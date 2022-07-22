import React, {useCallback, useMemo, useRef, useState} from 'react'
import {GoogleMap, Marker, MarkerClusterer, useLoadScript} from '@react-google-maps/api';
import {googleMapsApiKey, libraries, locations, mapCenter} from "./MapConfigAndDefaults";
import {Button} from "@chakra-ui/react";

const containerStyle = {
  width: '100%',
  height: '600px'
};

const ClusterMap = () => {

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
    <>
      <Button onClick={() => {setData(true)}}>
        Get data
      </Button>
      <GoogleMap
        id='cluster-example'
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
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
    </>
  )
}

export default React.memo(ClusterMap)