import React from 'react';
import {Box, Icon, Link, Text} from "@chakra-ui/react";
import {RiFolder3Fill} from "react-icons/ri";
import NextLink from "next/link";

const ProjectCard = (props) => {
  const {label, date} = props

  const colors = ["#1AC0FF", "#FDA5BB", "#92B4FA", "#C291FF", "#4FE3C0"]

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
        <Icon as={RiFolder3Fill} h={16} w={16} color={colors[Math.floor(Math.random()*colors.length)]}/>
        <Box>
          <Text
            fontWeight={"bold"}
            fontSize={"lg"}
          >
            {label}
          </Text>
          <Text fontSize={"sm"} fontWeight={"semibold"} color={"gray.500"}>Created On {date}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default ProjectCard;