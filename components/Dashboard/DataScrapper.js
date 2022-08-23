import React from "react";
import {Stat, StatLabel, StatNumber,} from "@chakra-ui/react";
import CountUp from "react-countup";

const DataScrapper = ({dataScrapped}) => {
  return (
    <Stat
      bg={"white"}
      borderRadius={"md"}
      border={"1px solid lightgray"}
      p={4}
      h={'full'}
    >
      <StatLabel fontWeight={"bold"} fontSize={'lg'}>Data Scrapper</StatLabel>
        <StatNumber fontSize={'2rem'} color={'green.500'}><CountUp end={dataScrapped} duration={60}/></StatNumber>
    </Stat>
  );
};

export default DataScrapper;