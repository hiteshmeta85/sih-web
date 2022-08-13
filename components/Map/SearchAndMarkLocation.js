import React, {useCallback, useMemo, useRef, useState} from "react";
import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import {Box, Text} from "@chakra-ui/react";
import PlacesAutocomplete from "./PlacesAutocomplete";
import {googleMapsApiKey, libraries, mapCenter} from "./MapConfigAndDefaults";

const SearchAndMarkLocation = ({setFieldValue, label, mapHeight, mapWidth}) => {

  const {isLoaded} = useLoadScript({
    googleMapsApiKey,
    libraries
  });

  if (!isLoaded) {
    return (<div>Loading...</div>)
  }
  return (
    <Box width={'100%'}>
      {label && <Text fontWeight={600} lineHeight={'shorter'}>{label}</Text>}
      <Map setFieldValue={setFieldValue} mapHeight={mapHeight} mapWidth={mapWidth}/>
    </Box>
  );
}

function Map({setFieldValue, mapHeight, mapWidth}) {
  const [selected, setSelected] = useState(null);
  // 20.7707739,73.7217954 - India
  const mapRef = useRef()
  const center = useMemo(() => (mapCenter), []);
  const onLoad = useCallback((map) => (mapRef.current = map), [])

  return (
    <Box>
      <PlacesAutocomplete
        setSelected={(position) => {
          setSelected(position)
          mapRef.current?.panTo(position)
        }}
        setFieldValue={setFieldValue}
      />
      <GoogleMap
        zoom={4}
        center={center}
        mapContainerStyle={{width: mapWidth || '100%', height: mapHeight || '600px'}}
        onLoad={onLoad}
      >
        <>
          {selected && (
            <>
              <Marker position={selected}/>
            </>
          )}
        </>
      </GoogleMap>
    </Box>
  );
}

export default SearchAndMarkLocation