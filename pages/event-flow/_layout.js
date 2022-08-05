import React, {useState} from 'react';
import {Box, CircularProgress, CircularProgressLabel, Flex, Heading, Link, Text} from "@chakra-ui/react";
import {IoIosArrowRoundBack} from "react-icons/io";
import NextLink from "next/link";
import BackButtonIcon from "./BackButton.svg";
import ForwardButtonIcon from "./ForwardButton.svg"
import Image from "next/image";
import Router from "next/router";
import PropTypes from 'prop-types';

const EventFlowLayout = (
  {
    heading,
    progressPercent,
    forwardLink,
    children,
    isForwardButtonPresent = true,
  }
) => {

  const [isDashboardLinkHovered, setIsDashboardLinkHovered] = useState(false)

  return (
    <>
      {/* Top Section */}
      <Box
        maxW={'container.xl'}
        mx={'auto'}
        py={4}
        px={2}
      >
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          gap={4}
        >
          <Box>
            {/* Dashboard Link */}
            <NextLink href={'/dashboard'} passHref>
              <Link
                display={'flex'}
                alignItems={'center'}
                gap={2}
                cursor={'pointer'}
                maxW={'2xs'}
                onMouseOver={() => setIsDashboardLinkHovered(true)}
                onMouseOut={() => setIsDashboardLinkHovered(false)}
                _hover={{textDecoration: 'none'}}
                fontWeight={'bold'}
                color={'gray.500'}
              >
                <Text as={'span'} className={isDashboardLinkHovered ? 'horizontal-bounce' : ''}><IoIosArrowRoundBack/></Text>Dashboard
              </Link>
            </NextLink>
            {/* Heading */}
            <Heading size={'lg'} mt={4}>{heading}</Heading>
          </Box>
          <CircularProgress value={progressPercent} color='black' size={'80px'}>
            <CircularProgressLabel fontFamily={'Open Sans'}>{progressPercent}%</CircularProgressLabel>
          </CircularProgress>
        </Flex>
      </Box>

      {/* Horizontal Rule */}
      <Box py={'1px'} bg={'blackAlpha.800'}/>

      {/* Body */}
      <Box
        maxW={'container.xl'}
        mx={'auto'}
        pt={12}
        pb={{base: 12, md: 20}}
        px={2}
      >
        {children}
      </Box>

      {/* Horizontal Rule */}
      <Box py={'1px'} bg={'blackAlpha.800'}/>

      {/* Bottom Section */}
      <Box
        maxW={'container.xl'}
        mx={'auto'}
        pt={12}
        pb={{base: 12, lg: 20}}
        px={2}
      >
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Flex
            onClick={() => Router.back()}
            alignItems={'center'}
            gap={3}
            cursor={'pointer'}>
            <Image src={BackButtonIcon} alt={'Back Button Icon'} height={'40px'} width={'40px'}/>
            <Text fontWeight={'bold'}>Back</Text>
          </Flex>
          {isForwardButtonPresent &&
            <NextLink href={forwardLink || '/'} passHref>
              <Link display={'flex'} alignItems={'center'} gap={3} _hover={{textDecoration: 'none'}}>
                <Text fontWeight={'bold'}>Next</Text>
                <Image src={ForwardButtonIcon} alt={'Forward Button Icon'} height={'40px'} width={'40px'}/>
              </Link>
            </NextLink>
          }
        </Flex>
      </Box>
    </>
  );
};

EventFlowLayout.propTypes = {
  heading: PropTypes.string.isRequired,
  progressPercent: PropTypes.number.isRequired,
  forwardLink: PropTypes.string,
  isForwardButtonPresent: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default EventFlowLayout;