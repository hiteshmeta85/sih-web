import React from 'react';
import {Link, Text} from "@chakra-ui/react";
import NextLink from "next/link";

const CustomLink = ({href, text, icon}) => {
  return (
    <NextLink href={href} passHref>
      <Link
        display={"flex"}
        alignItems={"center"}
        gap={2}
        bg={"blackAlpha.800"}
        textColor={"white"}
        px={4}
        py={2}
        _hover={{textDecoration: "none", bg: "blackAlpha.700"}}
        borderRadius={"md"}
      >
        {icon} <Text as={'span'}>{text}</Text>
      </Link>
    </NextLink>
  );
};

export default CustomLink;