import React from 'react';
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import {Box} from "@chakra-ui/react";
import {Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover} from "@reach/combobox";
import "@reach/combobox/styles.css";

export function SearchLocation({panTo}) {
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
      width={'300px'}
      bg={'white'}
    >
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          className="combobox-input"
          placeholder={`Search your location`}
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