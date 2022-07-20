import React from 'react';
import NextLink from "next/link";
import {Link, Text} from "@chakra-ui/react";

const Logo = () => {
  return (
    <Text fontWeight={'bold'} fontSize={'2xl'}>
      <NextLink href={'/'} passHref>
        <Link _hover={{textDecoration: 'none'}}>Homebrew</Link>
      </NextLink>
    </Text>
  );
};

export default Logo;