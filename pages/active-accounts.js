import React from 'react';
import LandingPageLayout from "./_layout";
import {Flex, Icon, SimpleGrid, Text} from "@chakra-ui/react";
import TweetCard from "../components/Tweet/TweetCard";
import {BsTwitter} from "react-icons/bs";
import axios from "axios";

const ActiveAccounts = ({activeAccounts}) => {

  return (
    <LandingPageLayout>
      {activeAccounts && <Flex
        flexDir={'column'}
        gap={14}
        px={{base: 2, md: 4, lg: 8}}
        maxW={'container.xl'}
        mx={'auto'}
        pt={{base: 4, md: 8}}
        pb={{base: 6, md: 8}}
      >
        <>
          {Object.keys(activeAccounts).map((key, index) => {
              return (
                <Flex
                  key={index}
                  flexDir={'column'}
                  gap={6}
                >
                  <Flex
                    alignItems={'center'}
                    gap={4}
                  >
                    <Icon as={BsTwitter} color={'#1DA1F2'} w={9} h={9}/>
                    <Flex flexDir={'column'}>
                      <Text
                        fontFamily={'Open Sans'}
                        lineHeight={'shorter'}
                        fontSize={'sm'}
                        color={'gray.800'}
                      >
                        @{key}
                      </Text>
                    </Flex>
                  </Flex>
                  <SimpleGrid columns={{base: 1, md: 2, lg: 4}} spacing={4}>
                    {activeAccounts[key].slice(0, 4)
                      .map((item, index) => {
                        return (
                          <TweetCard
                            key={index}
                            description={item.tweet}
                            image={item.photos.length > 0 && item.photos[0]}
                          />
                        )
                      })}
                  </SimpleGrid>
                </Flex>
              )
            })}
        </>
      </Flex>}
    </LandingPageLayout>
  );
};

export default ActiveAccounts;

export async function getServerSideProps() {

  let activeAccounts = {}

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/active-accounts`)
    if (res.data) {
      activeAccounts = res.data.data.activeAccounts
    }
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      activeAccounts
    }
  }
}