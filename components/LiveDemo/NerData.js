import { Box, Flex, Text } from "@chakra-ui/react";
import NerDataCard from "../Card/NerDataCard";
import React from "react";

export const nerData = [
  {
    location: "Panvel",
    disasterType: "Flood",
    affectedPeople: 600,
  },
];

export const NerData = () => {
  return (
    <Box>
      <>
        {nerData.map((item, index) => {
          return (
            <>
            <NerDataCard 
             key={index}
             location={item.location}
             disasterType={item.disasterType}
             affectedPeople={item.affectedPeople}            
            />
            </>
          );
        })}
      </>
    </Box>
  );
};
