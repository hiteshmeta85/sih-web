import React, {useCallback, useMemo, useRef, useState} from 'react'
import {GoogleMap, Marker, MarkerClusterer, useLoadScript} from '@react-google-maps/api';
import {googleMapsApiKey, libraries, locations, mapCenter} from "./MapConfigAndDefaults";
import {Box, Button, Flex, Text} from "@chakra-ui/react";
import {GrRefresh} from "react-icons/gr";
import {ImCancelCircle} from "react-icons/im";
import {labelOptions} from "../../pages/dashboard/create-alert";
import {BiSelectMultiple} from "react-icons/bi";

const ClusterMap = ({height}) => {

  const {isLoaded} = useLoadScript({
    googleMapsApiKey,
    libraries
  });

  const [data, setData] = useState(false)

  // map
  const mapRef = useRef()
  const center = useMemo(() => (mapCenter), []);
  const onLoad = useCallback((map) => (mapRef.current = map), [])
  const options = useMemo(() => ({
    disableDefaultUI: true
  }), [])

  // labels
  const [selectedHeaders, setSelectedHeaders] = useState([])

  const handleSetSelectedHeaders = (value) => {
    if (selectedHeaders.includes(value)) {
      setSelectedHeaders(selectedHeaders.filter(item => item !== value))
    } else {
      setSelectedHeaders([...selectedHeaders, value])
    }
  }

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <Box pos={'relative'}>
      <Flex
        bottom={0}
        left={2}
        zIndex={999}
        position={'absolute'}
        alignItems={'center'}
        mb={3}
        gap={4}
      >
        <Button
          position={'absolute'}
          bottom={0}
          left={2}
          zIndex={1}
          alignItems={'center'}
          mb={3}
          gap={4}
          onClick={() => {
            setData(true)
          }}
          bg={'white'}
          color={"blackAlpha.800"}
          borderRadius={'sm'}
          boxShadow={'base'}
        >
          <GrRefresh/> <Text as={'span'} ml={2}>Refresh</Text>
        </Button>
      </Flex>
      <Flex
        position={'absolute'}
        top={2}
        left={3}
        zIndex={1}
        alignItems={'center'}
        mb={3}
        gap={{base: 2, lg: 4}}
        borderRadius={'sm'}
        userSelect={'none'}
        flexWrap={'wrap'}
      >
        <>
          {labelOptions.map((item, index) => {
            return (
              <Flex
                key={index}
                onClick={() => handleSetSelectedHeaders(item.value)}
                bg={selectedHeaders.includes(item.value) ? 'green.500' : 'white'}
                color={selectedHeaders.includes(item.value) ? 'white' : 'black'}
                cursor={'pointer'}
                alignItems={'center'}
                gap={2}
                borderRadius={'xl'}
                py={2}
                px={4}
                fontSize={'xs'}
                whiteSpace={'nowrap'}
                boxShadow={'lg'}
              >
                {item.label}
                {selectedHeaders.includes(item.value) ? <ImCancelCircle/> : <BiSelectMultiple/>}
              </Flex>
            )
          })}
        </>
      </Flex>
      <GoogleMap
        id='cluster-example'
        options={options}
        mapContainerStyle={{
          width: '100%',
          height: height || '600px',
          borderRadius: '8px'
        }}
        center={center}
        zoom={5}
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