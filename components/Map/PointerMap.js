import React from "react";
import {GoogleMap, InfoWindow, Marker, useLoadScript} from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import {googleMapsApiKey, libraries, mapCenter} from "./MapConfigAndDefaults";
import {Flex} from "@chakra-ui/react";
import CustomSubmitButton from "../Button/CustomSubmitButton";
import {SearchLocation} from "./SearchLocation";

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

  const onMapClick = React.useCallback((e) => {
    setMarkers(() =>
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

  return (
    <>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <SearchLocation panTo={panTo}/>
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
    </>
  );
}

// References
// https://github.com/leighhalliday/google-maps-react-2020/blob/master/src/App.js