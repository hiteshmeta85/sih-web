import React from 'react';
import {Box, Icon, Link, Text} from "@chakra-ui/react";
import {RiFolder3Fill} from "react-icons/ri";
import NextLink from "next/link";

const ProjectDetailsCard = (props) => {
  const {label, date} = props

  //const colorOptions = ["#1AC0FF", "#FDA5BB", "#92B4FA", "#C291FF", "#4FE3C0"]

  return (
    <NextLink href={"#"}>
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
        <RiFolder3Fill size={'4rem'} style={{color: "#FDA5BB"}}/>
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
            Created On {date}
          </Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default ProjectDetailsCard;