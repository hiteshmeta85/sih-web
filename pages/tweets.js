import {SimpleGrid} from "@chakra-ui/react";
import React from "react";
import {BsTwitter} from "react-icons/bs";
import TweetCard from "../components/Tweet/TweetCard";
import LandingPageLayout from "./_layout";

import {ndrfTweets2} from "./index";

const Tweets = ({ndrfTweets}) => {

  return (
    <LandingPageLayout>
      <SimpleGrid
        flexDir={"column"}
        px={{base: 2, md: 4, lg: 8}}
        maxW={"container.xl"}
        mx={"auto"}
        pt={{base: 6, md: 8}}
        pb={{base: 6, md: 8}}
        columns={{base: 1, md: 2, lg: 4}}
        spacing={4}
      >
        <>
          {ndrfTweets2.map((item, index) => {
            return (
              <TweetCard
                key={index}
                username={item.username}
                icon={<BsTwitter color={'#1DA1F2'} size={'1rem'}/>}
                description={item.tweet}
                image={item.photos.length > 0 && item.photos[0]}
                date={item.date}
              />
            );
          })}
        </>
      </SimpleGrid>
    </LandingPageLayout>
  );
};

export default Tweets;

// export async function getServerSideProps() {
//
//   let ndrfTweets;
//
//   try {
//     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/ndrf-tweets`)
//     if (res.data) {
//       ndrfTweets = res.data.data
//     }
//   } catch (e) {
//     ndrfTweets = null
//   }
//
//
//   return {
//     props: {
//       ndrfTweets
//     }
//   }
// }
