import { Box, Flex, SimpleGrid, Badge, Text } from "@chakra-ui/react";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import TweetCard from "../components/Tweet/TweetCard";
import LandingPageLayout from "./_layout";

const Tweets = () => {
  const TweetsData = [
    {
      id: 1,
      username: "ndrfhq",
      date: "2022-07-10",
      tweet:
        "Subhas Chandra Bose Aapda Prabandhan Puraskar'  ➡Last date to apply: 31 August 2022  For more info:  https://t.co/89rgcJrZsn  https://t.co/xQEKa71Jfg   https://t.co/D2GTHrHkG0  @ndmaindia",
      photos: [
        "https://images.hindustantimes.com/img/2021/07/26/1600x900/0c384eb6-edfe-11eb-8e1b-864212280c54_1627296277073.jpg",
      ],
    },
    {
      id: 2,
      username: "ndrfhq",
      date: "2022-07-10",
      tweet:
        "Subhas Chandra Bose Aapda Prabandhan Puraskar'  ➡Last date to apply: 31 August 2022  For more info:  https://t.co/89rgcJrZsn  https://t.co/xQEKa71Jfg   https://t.co/D2GTHrHkG0  @ndmaindia",
      photos: [""],
    },
    {
      id: 3,
      username: "ndrfhq",
      date: "2022-07-10",
      tweet:
        "Subhas Chandra Bose Aapda Prabandhan Puraskar'  ➡Last date to apply: 31 August 2022  For more info:  https://t.co/89rgcJrZsn  https://t.co/xQEKa71Jfg   https://t.co/D2GTHrHkG0  @ndmaindia",
      photos: [""],
    },
    {
      id: 4,
      username: "ndrfhq",
      date: "2022-07-10",
      tweet:
        "Subhas Chandra Bose Aapda Prabandhan Puraskar'  ➡Last date to apply: 31 August 2022  For more info:  https://t.co/89rgcJrZsn  https://t.co/xQEKa71Jfg   https://t.co/D2GTHrHkG0  @ndmaindia",
      photos: [
        "https://www.businessinsider.in/photo/88205055/Maharashtra-floods.jpg",
      ],
    },
    {
      id: 5,
      username: "ndrfhq",
      date: "2022-07-10",
      tweet:
        "Subhas Chandra Bose Aapda Prabandhan Puraskar'  ➡Last date to apply: 31 August 2022  For more info:  https://t.co/89rgcJrZsn  https://t.co/xQEKa71Jfg   https://t.co/D2GTHrHkG0  @ndmaindia",
      photos: [
        "https://images.hindustantimes.com/img/2021/07/26/1600x900/0c384eb6-edfe-11eb-8e1b-864212280c54_1627296277073.jpg",
      ],
    },
    {
      id: 6,
      username: "ndrfhq",
      date: "2022-07-10",
      tweet:
        "Subhas Chandra Bose Aapda Prabandhan Puraskar'  ➡Last date to apply: 31 August 2022  For more info:  https://t.co/89rgcJrZsn  https://t.co/xQEKa71Jfg   https://t.co/D2GTHrHkG0  @ndmaindia",
      photos: [""],
    },
    {
      id: 7,
      username: "ndrfhq",
      date: "2022-07-10",
      tweet:
        "Subhas Chandra Bose Aapda Prabandhan Puraskar'  ➡Last date to apply: 31 August 2022  For more info:  https://t.co/89rgcJrZsn  https://t.co/xQEKa71Jfg   https://t.co/D2GTHrHkG0  @ndmaindia",
      photos: [
        "https://www.businessinsider.in/photo/88205055/Maharashtra-floods.jpg",
      ],
    },
    {
      id: 8,
      username: "ndrfhq",
      date: "2022-07-10",
      tweet:
        "Subhas Chandra Bose Aapda Prabandhan Puraskar'  ➡Last date to apply: 31 August 2022  For more info:  https://t.co/89rgcJrZsn  https://t.co/xQEKa71Jfg   https://t.co/D2GTHrHkG0  @ndmaindia",
      photos: [""],
    },
  ];

  return (
    <LandingPageLayout>
      <SimpleGrid
        flexDir={"column"}
        px={{ base: 2, md: 4, lg: 8 }}
        maxW={"container.xl"}
        mx={"auto"}
        pt={{ base: 6, md: 8 }}
        pb={{ base: 6, md: 8 }}
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={4}
      >
        {TweetsData.map((item, index) => {
          return (
            <TweetCard
              key={index}
              username={item.username}
              icon={<BsTwitter color={'#1DA1F2'} size={'1rem'} />}
              description={item.tweet}
              image={item.photos.length > 0 && item.photos[0]}
              date={<Badge p={1}><Text>{item.date}</Text></Badge>}
            />
          );
        })}
      </SimpleGrid>
    </LandingPageLayout>
  );
};

export default Tweets;
