import React from 'react';
import {Box, Button, Flex, Heading, SimpleGrid} from "@chakra-ui/react";
import TweetCard from "./TweetCard";

const TweetsContainer = ({title, data}) => {
  return (
    <Box
      p={{base: 2, md: 4, lg: 8}}
      maxW={'container.xl'}
      mx={'auto'}
    >
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        mb={{base: 4, lg: 6}}
      >
        <Heading
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
      <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={{base: 4, lg: 10}}>
        <>
          {data.map((item, index) => {
            return (<TweetCard key={index} title={item.title} description={item.description} image={item.image}/>)
          })}
        </>
      </SimpleGrid>
    </Box>
  );
};

export default TweetsContainer;