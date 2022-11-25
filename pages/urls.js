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
import {routes} from "../constants/routes";

const Urls = () => {
  return (
    <LandingPageLayout>
      <Box maxW={'container.xl'} mx={'auto'} my={4} p={{base: 2, md: 4,}}>
        <Accordion allowMultiple maxW={'container.md'} bg={'white'}>
          <>
            {routes.map((item, index) => {
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
                              <Link target={'_blank'}>
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
