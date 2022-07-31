import {Box, Heading, SimpleGrid} from "@chakra-ui/react";
import React from "react";
import {BsTwitter} from "react-icons/bs";
import TweetCard from "../components/Tweet/TweetCard";
import LandingPageLayout from "./_layout";
import axios from "axios";

const Tweets = ({ndrfTweets}) => {

  return (
    <LandingPageLayout>
      <Box
        p={{base: 2, md: 4, lg: 8}}
        maxW={"container.xl"}
        mx={"auto"}
      >
        <Heading my={2}>NDRF’s Recent Tweets</Heading>
        <>
          <>
            {ndrfTweets && Object.keys(ndrfTweets)
              .map((key, index) => {
                return (
                  <SimpleGrid
                    key={index}
                    flexDir={"column"}
                    columns={{base: 1, md: 2, lg: 4}}
                    spacing={4}
                  >
                    {ndrfTweets[key].slice(0, 50)
                      .map((item, index) => {
                        return (
                          <TweetCard
                            key={index}
                            username={item.username}
                            icon={<BsTwitter color={'#1DA1F2'} size={'1rem'}/>}
                            description={item.tweet}
                            image={item.photos.length > 0 && item.photos[0]}
                            date={item.date}
                          />
                        )
                      })
                    }
                  </SimpleGrid>
                );
              })}
          </>
        </>
      </Box>
    </LandingPageLayout>
  );
};

export default Tweets;

export async function getServerSideProps() {

  let ndrfTweets;

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/ndrf-tweets`)
    if (res.data) {
      ndrfTweets = res.data.data.ndrfTweets
    }
  } catch (e) {
    ndrfTweets = null
  }


  return {
    props: {
      ndrfTweets
    }
  }
}
