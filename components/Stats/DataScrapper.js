import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Flex,
} from "@chakra-ui/react";
import { FiTrendingUp } from "react-icons/fi";

const DataScrapper = () => {
  return (
    <Stat
      bg={"white"}
      borderRadius={"md"}
      boxShadow={"base"}
      border={"1px solid lightgray"}
      _hover={{ boxShadow: "lg" }}
      p={4}
      w={'full'} h={'full'}
      
    >   
        <StatLabel fontWeight={"bold"} fontSize={'lg'}>Data Scrapper</StatLabel>
        <Flex alignItems={'center'} gap={4}>
          <FiTrendingUp size={'1.5rem'}/>
          <StatNumber fontSize={'2rem'}>9751</StatNumber>
        </Flex>

      
    </Stat>
  );
};

export default DataScrapper;
