import React from 'react';
import {Box, Flex, Image, Link, Text} from '@chakra-ui/react';

const TweetCard = ({description, image, username, date, icon, url = '/'}) => {

  return (
    <>
      <Flex
        flexDir={"column"}
        rowGap={2}
        bg={'white'}
        borderRadius={'md'}
        boxShadow={'base'}
        _hover={{boxShadow: 'lg'}}
        p={3}
        h={'full'}
      >
        <Box py={'1px'} bg={"blackAlpha.800"}/>
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          fontFamily={'Open Sans'}
          color={'gray.600'}
        >
          {username &&
            <Box
              fontSize={'sm'}
              color={'gray.500'}
            >
              <Flex align={'center'} gap={2}>
                <Link href={url || ''} target={'_blank'}>{icon && icon}</Link>
              @{username}
              </Flex>
            </Box>}
          {date && <Text fontSize={'xs'}>{date}</Text>}
          {/*<Link href={{pathname: '/dashboard/projects/1/text-images/1', query: { social: 'twitter' }}}>*/}
          {/*  <a>here</a>*/}
          {/*</Link>*/}
        </Flex>
        {/*<Text fontWeight={700} fontSize={'lg'}>
          {title}
        </Text>*/}
        <Text fontSize={'md'} lineHeight={'short'}>
          {description}
        </Text>
        {image && <Image src={image} width={"full"} objectFit={"cover"} alt={'image'}/>}
      </Flex>
    </>
  );
}

export default TweetCard;