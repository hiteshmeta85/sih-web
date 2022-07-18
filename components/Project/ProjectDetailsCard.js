import React from 'react';
import {Box, Link, Text} from "@chakra-ui/react";
import {RiFolder3Fill} from "react-icons/ri";
import NextLink from "next/link";
import moment from "moment";

const ProjectDetailsCard = (props) => {
  const {label, date, id} = props

  const colors = ["#4EE4C1","#1AC0FF","#92B4FA","#C291FF","#4BE0BD","#FDA5BB"]

  return (
    <NextLink href={`/dashboard/projects/${id}`}>
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
        <RiFolder3Fill size={'4rem'} style={{color:  colors[Math.floor(Math.random() * colors.length)]}}/>
        <Box>
          <Text
            fontWeight={"bold"}
            fontSize={"lg"}
          >
            {label}
          </Text>
          <Text
            fontSize={"sm"}
            fontWeight={"semibold"}
            color={"gray.500"}>
            Created On  {moment(date).format('llll')}
          </Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default ProjectDetailsCard;