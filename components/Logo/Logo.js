import React from 'react';
import NextLink from "next/link";
import {Link, Text} from "@chakra-ui/react";
import Image from "next/image";
import LogoImage from "./logo.svg"

const Logo = () => {
  return (
    <Text fontWeight={'bold'} fontSize={'2xl'}>
      <NextLink href={'/'} passHref>
        <Link display={'flex'} alignItems={'center'} gap={2} _hover={{textDecoration: 'none'}}>
          <Image src={LogoImage} height={'30px'} width={'30px'} style={{transform: 'translate(0px, 3px)'}}/>
          <Text as={'span'}>Homebrew</Text>
        </Link>
      </NextLink>
    </Text>
  );
};

export default Logo;