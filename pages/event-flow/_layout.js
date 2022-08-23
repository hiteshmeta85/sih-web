import React, {useState} from 'react';
import {Box, Flex, Heading, Link, Text} from "@chakra-ui/react";
import {IoIosArrowRoundBack} from "react-icons/io";
import NextLink from "next/link";
import BackButtonIcon from "./BackButton.svg";
import ForwardButtonIcon from "./ForwardButton.svg"
import Image from "next/image";
import Router from "next/router";
import PropTypes from 'prop-types';
import {DoughnutChart} from "../../components/Charts/DoughnutChart";

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
            {/* Bottom Section */}
            <Box
              maxW={'container.xl'}
              mx={'auto'}
              py={2}
            >
              <Flex
                justifyContent={'start'}
                alignItems={'center'}
                gap={6}
              >
                <Flex
                  onClick={() => Router.back()}
                  alignItems={'center'}
                  gap={3}
                  cursor={'pointer'}>
                  <Image src={BackButtonIcon} alt={'Back Button Icon'} height={'30px'} width={'30px'}/>
                  <Text fontWeight={'bold'}>Back</Text>
                </Flex>
                {isForwardButtonPresent &&
                  <NextLink href={forwardLink || '/'} passHref>
                    <Link display={'flex'} alignItems={'center'} gap={3} _hover={{textDecoration: 'none'}}>
                      <Text fontWeight={'bold'}>Next</Text>
                      <Image src={ForwardButtonIcon} alt={'Forward Button Icon'} height={'30px'} width={'30px'}/>
                    </Link>
                  </NextLink>
                }
              </Flex>
            </Box>
            {/* Heading */}
            <Heading size={'lg'} mt={4}>{heading}</Heading>
          </Box>

          <Box h={'80px'} w={'80px'}>
            <DoughnutChart data={{
              labels: [],
              datasets: [
                {
                  label: 'Progress',
                  data: [progressPercent, 100 - progressPercent],
                  backgroundColor: [
                    'rgba(0,0,0,0.8)',
                    'white',
                  ],
                  borderColor: ['rgba(0,0,0,0.4)'],
                  borderWidth: 1,
                },
              ],
            }}/>
          </Box>
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