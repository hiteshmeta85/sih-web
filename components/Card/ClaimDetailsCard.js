import React from 'react';
import {Flex, Link, Text} from "@chakra-ui/react";
import {FaQuoteLeft} from "react-icons/fa";
import moment from "moment";
import {BiLink} from "react-icons/bi";

const ClaimDetailsCard = ({item}) => {
  return (
    <Flex flexDir={'column'} gap={2} border={'1px dashed gray'} rounded={'lg'} p={4}>
      <Flex alignItems={'center'} gap={2}>
        <FaQuoteLeft mb={2}/>
        <Text fontWeight={'bold'}>Claim: </Text>
      </Flex>
      <Text><Text as={'span'} fontWeight={'bold'}>Text:</Text> {item.text}</Text>
      <Text><Text fontWeight={'bold'} as={'span'}>Claimant:</Text> {item.claimant}</Text>
      <Text fontSize={'sm'}>Claim Date: {moment(item.claimDate).format('ll')}</Text>
      {item.claimReview.length > 0 && <>
        <Text fontWeight={'bold'}>Claim Review: </Text>
        <Text><Text as={'span'} fontWeight={'bold'}>Title:</Text> {item.claimReview[0].title}</Text>
        <Text alignSelf={'start'} as={'span'} px={2} py={1} bg={'gray.100'} textUnderlineOffset={4} border={'1px solid black'} rounded={'sm'}>Rating: {item.claimReview[0].textualRating}</Text>
        <Flex justifyContent={'space-between'} mt={2}>
          <Text fontSize={'sm'}>{moment(item.claimReview[0].reviewDate).format('ll')}</Text>
          <Flex alignItems={'center'} gap={2}>
            <Link target={'_blank'} href={item.claimReview[0].url} cursor={'pointer'} color={'gray.600'}><BiLink/></Link>
            <Text fontSize={'sm'} fontWeight={'bold'}>Publisher: {item.claimReview[0].publisher.name}</Text>
          </Flex>
        </Flex>
      </>}
    </Flex>
  );
};

export default ClaimDetailsCard;