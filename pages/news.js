import React from 'react';
import LandingPageLayout from "./_layout";
import {Box, SimpleGrid} from "@chakra-ui/react";
import NewsCard from "../components/News/NewsCard";
import {headlines2} from "./index";

const News = ({headlines}) => {
  return (
    <LandingPageLayout>
      <Box maxW={'container.xl'} mx={'auto'} p={{base: 2, md: 4, lg: 8}}>
        <SimpleGrid gap={6}>
          <>
            {headlines2.map((item, index) => {
              return (
                <NewsCard key={index} title={item.title} datePublished={item.datePublished} body={item.body} isDetailedView={true} src={item.image.url}/>
              )
            })}
          </>
        </SimpleGrid>
      </Box>
    </LandingPageLayout>
  );
};

export default News;

// export async function getServerSideProps() {
//
//   let headlines
//
//   try {
//     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/get-headlines`)
//     if (res.data) {
//       headlines = res.data.data.value
//     }
//   } catch (e) {
//     headlines = null
//   }
//
//
//   return {
//     props: {
//       headlines
//     }
//   }
// }