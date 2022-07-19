import React from 'react';
import {Box, Button, Flex, Heading} from "@chakra-ui/react";

const TweetsContainer = ({title, children}) => {
  return (
    <Box
      px={{base: 2, md: 4, lg: 8}}
      maxW={'container.xl'}
      mx={'auto'}
      py={{base: 4, md: 8}}
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
        <Button
          _hover={{bg: 'blackAlpha.700'}}
          _active={{bg: 'blackAlpha.800'}}
          rounded={'full'}
          bg={'blackAlpha.800'}
          color={'white'}
          px={6} py={4} m={2}
        >
          See all
        </Button>
      </Flex>
      {children}
    </Box>
  );
};

export default TweetsContainer;