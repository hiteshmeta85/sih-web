import React from "react";
import {Icon, Stat, StatLabel, StatNumber,} from "@chakra-ui/react";
import CountUp from "react-countup";
import {MdDownloading} from "react-icons/md";

const DataScrapper = ({dataScrapped}) => {
  return (
    <Stat
      bg={"white"}
      borderRadius={24}
      boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
      p={6}
      h={'full'}
    >
      <Icon as={MdDownloading} h={8} w={8}/>
      <StatLabel fontWeight={"bold"} fontSize={'lg'}>Data Scrapper</StatLabel>
        <StatNumber fontSize={'2rem'} color={'green.500'}><CountUp end={dataScrapped} duration={60}/></StatNumber>
    </Stat>
  );
};

export default DataScrapper;