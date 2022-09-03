import React from 'react';
import {Box, Link, Text} from "@chakra-ui/react";
import {RiFolder3Fill} from "react-icons/ri";
import NextLink from "next/link";
import moment from "moment";

const ProjectDetailsCard = ({label, date, id}) => {

  return (
    <NextLink href={`/dashboard/projects/${id}/text`}>
      <Link
        display={"flex"}
        flexDir={"column"}
        justifyContent={"space-between"}
        minH={"180px"}
        bg={"white"}
        p={4}
        boxShadow={"base"}
        borderRadius={"lg"}
        w={"full"}
        _hover={{textDecoration: "none", boxShadow: "md"}}
      >
        <RiFolder3Fill size={'4rem'} style={{color: '#1AC0FF'}}/>
        <Box>
          <Text
            fontWeight={"bold"}
            fontSize={"lg"}
          >
            {label}
          </Text>
          <Text
            fontSize={"sm"}
            fontWeight={"bold"}
          >
            Created On <Text as={'span'} bg={'rgba(26, 192, 255, 0.3)'} p={'2px 4px'}>{moment(date)
            .format('ll')}</Text>
          </Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default ProjectDetailsCard;