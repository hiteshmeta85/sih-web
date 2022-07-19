import React from 'react';
import {Box, Flex, Text} from '@chakra-ui/react';

const AlertCard = ({title, description, username, date}) => {

  return (
    <>
      <Flex
        flexDir={"column"}
        rowGap={2}
        bg={'white'}
        borderRadius={'md'}
        boxShadow={'base'}
        _hover={{boxShadow: 'md'}}
        p={3}
      >
        <Box py={'1px'} bg={"red.500"}/>
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          fontFamily={'Open Sans'}
          color={'gray.600'}
        >
          <Text
            fontSize={'sm'}
            color={'gray.500'}
          >
            @
          </Text>
          <Text fontSize={'xs'}>{date}</Text>
        </Flex>
        <Text fontWeight={700} fontSize={'lg'}>
          {title}
        </Text>
        <Text fontSize={'md'} lineHeight={'short'}>
          {description}
        </Text>
      </Flex>
    </>
  );
}

export default AlertCard;