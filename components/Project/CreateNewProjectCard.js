import React from 'react';
import {Icon, Link} from "@chakra-ui/react";
import {AiFillFolderAdd} from "react-icons/ai";
import NextLink from "next/link";

const CreateNewProjectCard = ({href}) => {
  return (
    <NextLink href={href} passHref>
      <Link
        display={"flex"}
        justifyContent={"center"}
        flexDir={"column"}
        alignItems={"center"}
        minH={"180px"}
        w={"full"}
        bg={"white"}
        border={"1px solid gray"}
        borderStyle={"dashed"}
        borderRadius={"lg"}
        boxShadow={"base"}
        p={4}
        _hover={{textDecoration: "none", boxShadow: "md"}}
      >
        <Icon as={AiFillFolderAdd} h={16} w={16} color={"#4EE4C1"}/>
      </Link>
    </NextLink>
  );
};

export default CreateNewProjectCard;