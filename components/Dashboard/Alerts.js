import React from "react";
import {AlertsData} from "../Alert/alerts-data";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

const Alerts = () => {
  return (
    <Box
      bg={"white"}
      borderRadius={"md"}
      border={"1px solid lightgray"}
      w={{base: '280px', md: 'full'}}
      h={'fit-content'}
      mb={4}
    >
      <Text fontWeight={'semibold'} p={3} fontSize={'xl'}>Alerts</Text>
      <Accordion allowToggle mb={4}>
        <>
          {AlertsData.map((item, index) => {
            return (
              <AccordionItem key={index}>
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
                    <AccordionIcon/>
                  </AccordionButton>
                </Text>
                <AccordionPanel pb={4}>
                  <Box>
                    <Flex>
                      <Text
                        fontSize={"xs"}
                        bg={"blackAlpha.800"}
                        color={"white"}
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
        </>
      </Accordion>
    </Box>
  );
};

export default Alerts;

