import TweetsContainer from "../components/Tweet/TweetsContainer";
import {Box, Flex, SimpleGrid} from "@chakra-ui/react";
import TweetCard from "../components/Tweet/TweetCard";
import SocialMediaAccountCard from "../components/Account/SocialMediaAccountCard";
import AlertCard from "../components/Alert/AlertCard";
import NewsCard from "../components/News/NewsCard";
import LandingPageLayout from "./_layout";
import {IoIosAlert} from "react-icons/io";
import {BsTwitter} from "react-icons/bs";
import axios from "axios";
import LandingCarousel from "../components/Carousel/LandingCarousel";

export default function Home({news, ndrfTweets, alerts, activeAccounts}) {

  return (
    <LandingPageLayout>
      <LandingCarousel/>
      {news.length > 0 && <TweetsContainer title={'News'} href={'/news'}>
        <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={6}>
          <>
            {news.slice(0, 4)
              .map((item, index) => {
                return (
                  <NewsCard key={index} title={item.title} datePublished={item.datePublished} description={item.description}/>
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