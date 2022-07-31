import React from 'react';
import LandingPageLayout from "./_layout";
import {Flex, Icon, SimpleGrid, Text} from "@chakra-ui/react";
import TweetCard from "../components/Tweet/TweetCard";
import {BsTwitter} from "react-icons/bs";
import axios from "axios";

const ActiveAccounts = ({ActiveAccounts}) => {

  /*
  const ActiveAccountsData = [
    {
      id: 1,
      username: 'hiteshmeta85',
      name: 'Hitesh Meta',
      account_link: '/',
      latest_tweets: [
        {
          id: 1,
          tweet: 'Subhas Chandra Bose Aapda Prabandhan Puraskar\'  ➡Last date to apply: 31 August 2022  For more info:  https://t.co/89rgcJrZsn  https://t.co/xQEKa71Jfg   https://t.co/D2GTHrHkG0  @ndmaindia',
          photos: ['']
        },
        {
          id: 2,
          tweet: 'Subhas Chandra Bose Aapda Prabandhan Puraskar\'  ➡Last date to apply: 31 August 2022  For more info:  https://t.co/89rgcJrZsn  https://t.co/xQEKa71Jfg   https://t.co/D2GTHrHkG0  @ndmaindia',
          photos: ['']
        },
        {
          id: 3,
          tweet: 'Subhas Chandra Bose Aapda Prabandhan Puraskar\'  ➡Last date to apply: 31 August 2022  For more info:  https://t.co/89rgcJrZsn  https://t.co/xQEKa71Jfg   https://t.co/D2GTHrHkG0  @ndmaindia',
          photos: ['']
        },
        {
          id: 4,
          tweet: 'Subhas Chandra Bose Aapda Prabandhan Puraskar\'  ➡Last date to apply: 31 August 2022  For more info:  https://t.co/89rgcJrZsn  https://t.co/xQEKa71Jfg   https://t.co/D2GTHrHkG0  @ndmaindia',
          photos: ['']
        },
      ]
    },
    {
      id: 2,
      username: 'gamingflexer',
      name: 'Om Surve',
      account_link: '/',
      latest_tweets: [
        {
          id: 1,
          tweet: 'Subhas Chandra Bose Aapda Prabandhan Puraskar\'  ➡Last date to apply: 31 August 2022  For more info:  https://t.co/89rgcJrZsn  https://t.co/xQEKa71Jfg   https://t.co/D2GTHrHkG0  @ndmaindia',
          photos: ['']
        },
        {
          id: 2,
          tweet: 'Subhas Chandra Bose Aapda Prabandhan Puraskar\'  ➡Last date to apply: 31 August 2022  For more info:  https://t.co/89rgcJrZsn  https://t.co/xQEKa71Jfg   https://t.co/D2GTHrHkG0  @ndmaindia',
          photos: ['']
        },
        {
          id: 3,
          tweet: 'Subhas Chandra Bose Aapda Prabandhan Puraskar\'  ➡Last date to apply: 31 August 2022  For more info:  https://t.co/89rgcJrZsn  https://t.co/xQEKa71Jfg   https://t.co/D2GTHrHkG0  @ndmaindia',
          photos: ['']
        },
        {
          id: 4,
          tweet: 'Subhas Chandra Bose Aapda Prabandhan Puraskar\'  ➡Last date to apply: 31 August 2022  For more info:  https://t.co/89rgcJrZsn  https://t.co/xQEKa71Jfg   https://t.co/D2GTHrHkG0  @ndmaindia',
          photos: ['']
        },
      ]
    }
  ]
  */

  return (
    <LandingPageLayout>
      <Flex
        flexDir={'column'}
        gap={14}
        px={{base: 2, md: 4, lg: 8}}
        maxW={'container.xl'}
        mx={'auto'}
        pt={{base: 4, md: 8}}
        pb={{base: 6, md: 8}}
      >
        <>
          {ActiveAccounts && Object.keys(ActiveAccounts)
            .map((key, index) => {
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
                      {/*<Text
                      fontWeight={'bold'}
                      fontSize={'xl'}
                      lineHeight={'shorter'}
                    >
                      {key}
                    </Text>*/}
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
                    {ActiveAccounts[key].slice(0, 4)
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
      </Flex>
    </LandingPageLayout>
  );
};

export default ActiveAccounts;

export async function getServerSideProps() {

  let ActiveAccounts

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/active-accounts`)
    if (res.data) {
      ActiveAccounts = res.data.data.activeAccounts
    }
  } catch (e) {
    console.log(e)
    ActiveAccounts = null
  }

  console.log(ActiveAccounts)

  return {
    props: {
      ActiveAccounts
    }
  }
}