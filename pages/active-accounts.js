import React from 'react';
import LandingPageLayout from "./_layout";
import {Flex, Icon, LinkBox, LinkOverlay, SimpleGrid, Text} from "@chakra-ui/react";
import TweetCard from "../components/Tweet/TweetCard";
import {BsTwitter} from "react-icons/bs";

const ActiveAccounts = () => {

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
        {ActiveAccountsData.map((item, index) => {
          return (
            <Flex
              key={index}
              flexDir={'column'}
              gap={6}
            >
              <LinkBox>
                <Flex
                  alignItems={'center'}
                  gap={4}
                >
                  <Icon as={BsTwitter} color={'#1DA1F2'} w={9} h={9}/>
                  <Flex flexDir={'column'}>
                    <Text
                      fontWeight={'bold'}
                      fontSize={'xl'}
                      lineHeight={'shorter'}
                    >
                      {item.name}
                    </Text>
                    <Text
                      fontFamily={'Open Sans'}
                      lineHeight={'shorter'}
                      fontSize={'sm'}
                      color={'gray.500'}
                    >
                      {item.username}
                    </Text>
                  </Flex>
                </Flex>
                <LinkOverlay href='#'/>
              </LinkBox>
              <SimpleGrid columns={{base: 1, md: 2, lg: 4}} spacing={4}>
                {item.latest_tweets.slice(0, 4)
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
      </Flex>
    </LandingPageLayout>
  );
};

export default ActiveAccounts;