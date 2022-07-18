import {AlertsData} from "../components/Alert/alerts-data";
import TweetsContainer from "../components/Tweet/TweetsContainer";
import {Box} from "@chakra-ui/react";
import Contact from "../components/Contact/Contact";
import {TrendingTweetsData} from "../components/Tweet/trending-tweets-data";

export default function Home() {
  return (
    <Box bg={'#F5F5F5'}>
      <TweetsContainer title={'Alerts'} data={AlertsData}/>
      <TweetsContainer title={'NDRF’s Latest Tweets'} data={TrendingTweetsData}/>
      <TweetsContainer title={'Trending Tweets'} data={TrendingTweetsData}/>
      <Contact/>
    </Box>
  )
}