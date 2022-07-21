import React, {useState, useMemo} from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import {Box, FormLabel, Text} from "@chakra-ui/react";

const SearchPlacesMap = ({setFieldValue, label}) => {

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Box width={'100%'}>
      {label && <Text fontWeight={600} lineHeight={'shorter'}>{label}</Text>}
      <Map setFieldValue={setFieldValue}/>
    </Box>
  );
}

function Map({setFieldValue}) {
  // 20.7707739,73.7217954 - India
  const center = useMemo(() => ({lat: 20.7707739, lng: 73.7217954}), []);
  const [selected, setSelected] = useState(null);

  return (
    <Box pos={'relative'} mx={'auto'}>
      <Box
        my={3}
        width={'300px'}
        zIndex={10}
      >
        <PlacesAutocomplete setSelected={setSelected} setFieldValue={setFieldValue}/>
      </Box>

      <Box>
        <GoogleMap
          zoom={5}
          center={center}
          mapContainerStyle={{width: '100%', height: '600px'}}
        >
          {selected && <Marker position={selected}/>}
        </GoogleMap>
      </Box>
    </Box>
  );
}

const PlacesAutocomplete = ({setSelected, setFieldValue}) => {
  const {
    ready,
    value,
    setValue,
    suggestions: {status, data},
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({address});
    const {lat, lng} = await getLatLng(results[0]);
    setSelected({lat, lng});
    setFieldValue("geolocation_lng", lat)
    setFieldValue("geolocation_lat", lng)
    setFieldValue("address", address)
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Search an address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({place_id, description}) => (
              <ComboboxOption key={place_id} value={description}/>
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default SearchPlacesMap