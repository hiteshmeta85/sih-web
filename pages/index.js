import {Box, Flex, Heading, Link, SimpleGrid} from "@chakra-ui/react";
import NewsCard from "../components/News/NewsCard";
import LandingPageLayout from "./_layout";
import {IoIosAlert} from "react-icons/io";
import {BsTwitter} from "react-icons/bs";
import axios from "axios";
import LandingPageCarousel from "../components/Carousel/LandingPageCarousel";
import Avatar from "../components/Avatar/Avatar";
import SocialMediaAccountCard from "../components/Card/SocialMediaAccountCard";
import NextLink from "next/link";
import React from "react";
import TweetCard from "../components/Card/TweetCard";
import AlertCard from "../components/Card/AlertCard";

const TweetsContainer = ({title, children, href}) => {
  return (
    <Box
      px={{base: 2, md: 4, lg: 8}}
      maxW={'container.xl'}
      mx={'auto'}
      pt={{base: 4, md: 8}}
      pb={{base: 6, md: 10}}
    >
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        mb={{base: 4, lg: 8}}
      >
        <Heading
          fontSize={{base: '2xl', md: '4xl'}}
        >
          {title}
        </Heading>
        {href && <NextLink href={href} passHref>
          <Link
            _hover={{textDecoration: 'none', bg: 'blackAlpha.700'}}
            whiteSpace={'nowrap'}
            _active={{bg: 'blackAlpha.800'}}
            rounded={'full'}
            bg={'blackAlpha.800'}
            color={'white'}
            px={6} py={2} m={2}
          >
            See all
          </Link>
        </NextLink>}
      </Flex>
      {children}
    </Box>
  );
};

export default function Home({news, ndrfTweets, alerts, activeAccounts}) {

  return (
    <LandingPageLayout>
      <LandingPageCarousel/>
      {news.length > 0 && <TweetsContainer title={'News'} href={'/news'}>
        <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={6}>
          <>
            {news.slice(0, 4)
              .map((item, index) => {
                return (
                  <NewsCard key={index} title={item.title} datePublished={item.datePublished} description={item.description} src={item.url}/>
                )
              })}
          </>
        </SimpleGrid>
      </TweetsContainer>}
      {alerts.length > 0 && <TweetsContainer title={<Flex alignItems={'center'} gap={2}><IoIosAlert color={'#EB4747'}/> Alerts</Flex>} href={'/alerts'}>
        <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={{base: 4, lg: 10}}>
          <>
            {alerts.slice(0, 6)
              .map((item, index) => {
                return (<AlertCard key={index} title={item.title} description={item.description} label={item.label} severity_type={item.severityType}/>)
              })}
          </>
        </SimpleGrid>
      </TweetsContainer>}
      {ndrfTweets.length > 0 && <TweetsContainer title={<Flex alignItems={'center'} gap={2}><BsTwitter color={'#1DA1F2'}/> NDRF’s Latest Tweets</Flex>} href={'/tweets'}>
        <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={{base: 4, lg: 10}}>
          <>
            {ndrfTweets.slice(0, 6)
              .map((item, index) => {
                return (<TweetCard key={index} username={item.username} description={item.tweet} image={item.photos.length > 0 && item.photos[0]} date={item.date}/>)
              })}
          </>
        </SimpleGrid>
      </TweetsContainer>}
      {activeAccounts.length > 0 && <TweetsContainer title={'Active Social Media Accounts'} href={'/active-accounts'}>
        <Flex gap={4} overflowX={'scroll'} py={6} px={0.5}>
          <>
            {Object.keys(activeAccounts)
              .map((key, index) => {
                return (
                  <SocialMediaAccountCard key={index} username={key}/>
                )
              })}
          </>
        </Flex>
      </TweetsContainer>}
      <TweetsContainer title={'Meet Our Team!'}>
        <SimpleGrid columns={{base: 2, md: 3, lg: 6}} gap={3} justifyContent={'space-between'}>
          <Avatar
            name="Hitesh Meta"
            jobTitle="Full-Stack Web Developer"
          />
          <Avatar
            name="Om Surve"
            jobTitle="ML Engineer & Backend Developer"
          />
          <Avatar
            name="Kunal Wagh"
            jobTitle="Data Scientist"
          />
          <Avatar
            name="Shreya Belanekar"
            jobTitle="Frontend Developer"
          />
          <Avatar
            name="Tanshiq Parkar"
            jobTitle="Full-Stack Web Developer"
          />
          <Avatar
            name="Yash Wakekar"
            jobTitle="Backend Developer"
          />
        </SimpleGrid>
      </TweetsContainer>
    </LandingPageLayout>
  )
}

export async function getServerSideProps() {

  let news = [], ndrfTweets = [], alerts = [], activeAccounts = [];

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/landing`)
    if (res.data) {
      news = res.data.data.news.value
      ndrfTweets = res.data.data.ndrfTweets
      alerts = res.data.data.alerts
      activeAccounts = res.data.data.activeAccounts
    }
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      news,
      ndrfTweets,
      alerts,
      activeAccounts,
    }
  }
}