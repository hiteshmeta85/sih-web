import React from "react";
import {Flex, Text } from "@chakra-ui/react";

const NerDataCard = ({ location, disasterType, affectedPeople }) => {
  return (
    <Flex
      gap={4}
      flexDir={'column'}
      border={"1px solid lightgray"}
      padding={5}
      rounded={"lg"}
      boxShadow={"lg"}
      w={'264px'}
    >
      <Text
        fontWeight={"bold"}
        color={"gray.400"}
        fontSize={"1.5rem"}
        letterSpacing={"wider"}
      >
        NER
      </Text>
      <Text fontWeight={"bold"} fontSize={"md"}>
        Location: {location}
      </Text>
      <Text fontWeight={"bold"} fontSize={"md"}>
        Disaster Type: {disasterType}
      </Text>
      <Text fontWeight={"bold"} fontSize={"md"}>
        No. of affected people: {affectedPeople}
      </Text>
    </Flex>
  );
};

export default NerDataCard;
