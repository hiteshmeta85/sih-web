import { Box, Flex, Text} from "@chakra-ui/react";
import Badge from "../Badge/Badge";
import React from "react";

export const labels = ["floods", "hurricane1"];

export const Labels = () => {
  return (
    <Flex flexDir={"column"} gap={4} rounded={"lg"} border={"1px solid lightgray"}
    padding={5} w={'264px'}
    boxShadow={"lg"}>
        <Text fontWeight={"bold"} fontSize={"1.5rem"} color={'gray.400'}>
          Labels
        </Text>
        {labels.map((item, index) => {
          return (
            <Box key={index} maxW={"2xs"}>
              <Badge label={item} />
            </Box>
          );
        })}
    </Flex>
  );
};
