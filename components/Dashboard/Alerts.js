import React from "react";
import { AlertsData } from "../Alert/alerts-data";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";

const Alerts = () => {
  return (
    <Box
      bg={"white"}
      borderRadius={"md"}
      boxShadow={"base"}
      border={"1px solid lightgray"}
      _hover={{ boxShadow: "lg" }}
      w={{base: '280px',md: 'full'}} h={'fit-content'}
      mb={4}
    >
      <Heading fontWeight={'semibold'} p={3}>Alerts</Heading>
      <Accordion allowToggle>
        {AlertsData.map((item) => {
          return (
            <AccordionItem>
              <Text>
                <AccordionButton>
                  <Box 
                    fontWeight={'semibold'}
                    flex="1" 
                    fontSize={'lg'}
                    textAlign="left" 
                    noOfLines={1}>
                    {item.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Text>
              <AccordionPanel pb={4}>
                <Box>
                  <Flex>
                    <Text
                      fontSize={"xs"}
                      bg={"red.100"}
                      px={3}
                      py={1}
                      mb={3}
                      borderRadius={"2xl"}
                    >
                      {item.label}
                    </Text>
                  </Flex>
                  <Text>{item.description}</Text>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
};

export default Alerts;

