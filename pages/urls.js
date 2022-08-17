import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex, Icon, Link,
  Text
} from "@chakra-ui/react";
import LandingPageLayout from "./_layout";
import {BsLink} from "react-icons/bs";
import NextLink from "next/link";

const urlsData = [
  {
    title: 'Event Flow',
    pages: [
      {
        title: 'Index',
        url: '/event-flow/',
      },
      {
        title: 'Binary Image Classification',
        url: '/event-flow/binary-image-classification',
      },
      {
        title: 'Binary Text Classification',
        url: '/event-flow/binary-text-classification',
      },
      {
        title: 'Binary Video Classification',
        url: '/event-flow/binary-video-classification',
      },
      {
        title: 'Geolocation Marking',
        url: '/event-flow/geolocation-marking',
      },
      {
        title: 'Multi label image classification',
        url: '/event-flow/multi-label-image-classification',
      },
      {
        title: 'Multi label text classification',
        url: '/event-flow/multi-label-text-classification',
      },
      {
        title: 'Raw Data Extraction',
        url: '/event-flow/raw-data-extraction',
      },
      {
        title: 'Voice Analysis',
        url: '/event-flow/voice-analysis',
      },
      {
        title: 'Analysis',
        url: '/event-flow/analysis',
      },
    ]
  },
  {
    title: 'Auth',
    pages: [
      {
        title: 'Login',
        url: '/auth/login',
      },
      {
        title: 'Register',
        url: '/auth/register',
      },
    ]
  },
  {
    title: 'Landing Pages',
    pages: [
      {
        title: 'Index',
        url: '/',
      },
      {
        title: 'Contact',
        url: '/contact',
      },
      {
        title: 'News',
        url: '/news',
      },
      {
        title: 'Alerts',
        url: '/alerts',
      },
      {
        title: 'Tweets',
        url: '/tweets',
      },
      {
        title: 'Active Accounts',
        url: '/active-accounts',
      },
    ]
  },
  {
    title: 'Dashboard',
    pages: [
      {
        title: 'Index',
        url: '/dashboard',
      },
      {
        title: 'Projects',
        url: '/dashboard/projects',
      },
      {
        title: 'Alerts',
        url: '/dashboard/alerts',
      },
    ]
  },
  {
    title: 'Create Project',
    pages: [
      {
        title: 'Index',
        url: '/dashboard/create-project',
      },
      {
        title: 'Select Location',
        url: '/dashboard/create-project/select-location',
      },
      {
        title: 'Select Hashtags',
        url: '/dashboard/create-project/select-hashtags',
      },
      {
        title: 'Custom Hashtags',
        url: '/dashboard/create-project/custom-hashtags',
      },
      {
        title: 'Select Social Media',
        url: '/dashboard/create-project/select-social-media',
      },
    ]
  },
]

const Urls = () => {
  return (
    <LandingPageLayout>
      <Box maxW={'container.xl'} mx={'auto'} my={4} p={{base: 2, md: 4,}}>
        <Accordion defaultIndex={[0]} allowMultiple maxW={'container.md'} bg={'white'}>
          <>
            {urlsData.map((item, index) => {
                return (
                  <AccordionItem key={index}>
                    <h2>
                      <AccordionButton _hover={{color: 'white', bg: 'blackAlpha.800'}}>
                        <Box flex='1' textAlign='left'>
                          {item.title}
                        </Box>
                        <AccordionIcon/>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel py={2}>
                      <Box pl={4}>
                        {item.pages.map((nav, index) => {
                          return (
                            <NextLink key={index} href={nav.url} passHref>
                              <Link>
                                <Flex key={index} alignItems={'center'} gap={2} py={1}>
                                  <Icon as={BsLink} color={'blue.500'} h={6} w={6}/>
                                  <Text>{nav.title}</Text>
                                </Flex>
                              </Link>
                            </NextLink>
                          )
                        })}
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                )
              }
            )}
          </>
        </Accordion>
      </Box>
    </LandingPageLayout>
  );
};

export default Urls;