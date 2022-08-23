import React from 'react';
import {Box, Flex, Heading, Link} from "@chakra-ui/react";
import NextLink from "next/link";

const TweetsContainer = ({title, children, href}) => {
  return (
    <Box
      px={{base: 2, md: 4, lg: 8}}
      maxW={'container.xl'}
      mx={'auto'}
      pt={{base: 4, md: 8}}
      pb={{base: 6, md: 10}}
    >
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        mb={{base: 4, lg: 8}}
      >
        <Heading
          fontSize={{base: '2xl', md: '4xl'}}
        >
          {title}
        </Heading>
        {href && <NextLink href={href} passHref>
          <Link
            _hover={{textDecoration: 'none', bg: 'blackAlpha.700'}}
            whiteSpace={'nowrap'}
            _active={{bg: 'blackAlpha.800'}}
            rounded={'full'}
            bg={'blackAlpha.800'}
            color={'white'}
            px={6} py={2} m={2}
          >
            See all
          </Link>
        </NextLink>}
      </Flex>
      {children}
    </Box>
  );
};

export default TweetsContainer;