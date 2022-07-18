import React from 'react';
import {Box, Flex, Image, Link, Text} from '@chakra-ui/react';

const AlertCard = ({title, description, image, username, date}) => {

  return (
    <>
      <Flex flexDir={"column"} rowGap={2} bg={'white'} p={3} borderRadius={'md'} boxShadow={'base'}>
        <Box py={'1px'} bg={"blackAlpha.800"}/>
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          fontFamily={'Open Sans'}
          color={'gray.600'}
        >
          <Link href={'/'} _hover={{textDecoration: 'none'}}>@{username}</Link>
          <Text fontSize={'xs'}>{date}</Text>
        </Flex>
        <Text fontWeight={700} fontSize={'lg'}>
          {title}
        </Text>
        <Text fontSize={'md'} lineHeight={'short'}>
          {description}
        </Text>
        {image && <Image src={image} width={"full"} objectFit={"cover"} alt={'image'}/>}
      </Flex>
    </>
  );
}

export default AlertCard;