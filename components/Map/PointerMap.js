import React, {useState} from "react";
import {GoogleMap, InfoWindow, Marker, useLoadScript} from "@react-google-maps/api";
import usePlacesAutocomplete, {getGeocode, getLatLng,} from "use-places-autocomplete";
import {Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover} from "@reach/combobox";
import "@reach/combobox/styles.css";
import {googleMapsApiKey, libraries, mapCenter} from "./MapConfigAndDefaults";
import {Box, Flex, Select, Text} from "@chakra-ui/react";
import CustomSubmitButton from "../Button/CustomSubmitButton";

const options = {
  disableDefaultUI: false,
  zoomControl: true,
};

export default function PointerMap({height}) {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: googleMapsApiKey,
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const [selectedOption, setSelectedOption] = useState("One")

  const onMapClick = React.useCallback((e) => {
    setMarkers(() =>
      // [
      //   ...current,
      //   {
      //     lat: e.latLng.lat(),
      //     lng: e.latLng.lng(),
      //     time: new Date(),
      //   },
      // ]
      [{
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date()
      }]
    );
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({lat, lng}) => {
    mapRef.current.panTo({lat, lng});
    mapRef.current.setZoom(16);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  const handleSubmit = () => {
    console.log({geolocation_lng: markers[0].lng, geolocation_lat: markers[0].lat})
  }

  const handleChange = (event) => {
    setSelectedOption(event.target.value)
  }

  return (
    <Box>
      <Flex justifyContent={'end'} alignItems={'center'} my={4} gap={4}>
        <Text fontWeight={"bold"}>Project Id: </Text>
        <Select value={selectedOption} onChange={(e) => handleChange(e)} w={'150px'}>
          <option value={1}>1</option>
          <option value={2}>2</option>
        </Select>
      </Flex>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Search panTo={panTo}/>
        {markers.length > 0 &&
          <CustomSubmitButton handleSubmit={handleSubmit} label={'Add Relief Camp'}/>
        }
      </Flex>
      <GoogleMap
        id="map"
        mapContainerStyle={{
          width: '100%',
          height: height || '600px',
        }}
        zoom={4}
        center={mapCenter}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        <>
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={{lat: marker.lat, lng: marker.lng}}
              onClick={() => {
                setSelected(marker);
              }}
              icon={{
                url: `/images/camp.svg`,
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
          ))}
        </>

        {selected ? (
          <InfoWindow
            position={{lat: selected.lat, lng: selected.lng}}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                <span role="img" aria-label="bear">
                  🐻
                </span>{" "}
                Alert
              </h2>
              <p>Spotted {123}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </Box>
  );
}

function Search({panTo}) {
  const {
    ready,
    value,
    suggestions: {status, data},
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({address});
      const {lat, lng} = await getLatLng(results[0]);
      panTo({lat, lng});
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <Box
      my={3}
      width={'300px'}
    >
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          className="combobox-input"
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({id, description}) => (
                <ComboboxOption key={id} value={description}/>
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </Box>
  );
}

// References
// https://github.com/leighhalliday/google-maps-react-2020/blob/master/src/App.js