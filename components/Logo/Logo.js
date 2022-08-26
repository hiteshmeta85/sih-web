import React from 'react';
import NextLink from "next/link";
import {Box, Link, Text} from "@chakra-ui/react";
import Image from "next/image";
import LogoImage from "../../public/logo.png"

const Logo = () => {
  return (
    <Text fontWeight={'bold'} fontSize={'2xl'}>
      <NextLink href={'/'} passHref>
        <Link display={'flex'} alignItems={'center'} gap={4} _hover={{textDecoration: 'none'}}>
          <Image src={LogoImage} height={'40px'} width={'40px'}/>
          <Text lineHeight={'shorter'}>
            <Text as={'span'}>NDRF</Text>
            <Text fontWeight={'normal'} fontSize={'sm'}>Saving Lives & Beyond...</Text>
          </Text>
        </Link>
      </NextLink>
    </Text>
  );
};

export default Logo;