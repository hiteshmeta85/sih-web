import TabsLayout from "../_tabsLayout";
import {Box, Flex, SimpleGrid, TabPanel, TabPanels, Text} from "@chakra-ui/react";
import {trendingTweetsData} from "../../../../../constants/sample-data/trendingTweetsData";
import TweetCard from "../../../../../components/Tweet/TweetCard";
import React, {useEffect, useState} from "react";
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import {facebookSampleTweets} from "../../../../../constants/sample-data/facebookSampleTweets";
import {instagramSampleTweets} from "../../../../../constants/sample-data/instagramSampleTweets";
import {useRouter} from "next/router";
import axios from "axios";
import RefreshButton from "../../../../../components/Button/RefreshButton";

const ProjectTextPlusVideosView = () => {

  const router = useRouter()
  const {id} = router.query

  const [celeryKeys, setCeleryKeys] = useState({
    "twitter_task_id": "8e4d39aa-a8aa-4406-9eb9-77538e296c80",
    "facebook_task_id": "a8771e71-7f6b-495c-af77-5db7d3b94cc5"
  })
  const [twitterData, setTwitterData] = useState([])
  const [facebookData, setFacebookData] = useState([])
  const [instagramData, setInstagramData] = useState([])
  const [didWeGetTaskIds, setDidWeGetTaskIds] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [shouldPageRefresh, setShouldPageRefresh] = useState(false)

  const handlePageRefresh = () => {
    setCeleryKeys({})
    setDidWeGetTaskIds(false)
    setShouldPageRefresh(true)
  }

  const newFn = async () => {
    if (localStorage.getItem('twitterKeysForImages')) {
      console.log("working on twitter keys")
      let twitterKeys = localStorage.getItem('twitterKeysForImages')
      twitterKeys = JSON.parse(twitterKeys)
      const getTwitterData = async () => {
        setIsLoading(true)
        try {
          const response = await axios.get(`http://127.0.0.1:8000/homebrew/api/task/${twitterKeys[0]}`)
          if (response) {
            if (response.data.status === 'SUCCESS' || 'FAILURE') {
              setTwitterData([...twitterData, ...response.data.result])
              return true
            }
          }
        } catch (err) {
          return false
        }
        setIsLoading(false)
      };
      if (twitterKeys.length > 0) {
        const response = await getTwitterData()
        console.log("twitter response", response)
        console.log('initial', twitterKeys.length)
        if (response === true) {
          twitterKeys.shift()
          console.log('twitter success')
        } else {
          console.log("twitter failed for :", twitterKeys[0])
        }
      }
      if (twitterKeys.length === 0) {
        localStorage.removeItem('twitterKeysForImages')
      } else {
        localStorage.setItem('twitterKeysForImages', JSON.stringify(twitterKeys))
      }
    } else if (localStorage.getItem('facebookKeysForImages')) {
      console.log("working on facebook keys")
      let facebookKeys = localStorage.getItem('facebookKeysForImages')
      facebookKeys = JSON.parse(facebookKeys)
      const getFacebookData = async () => {
        setIsLoading(true)
        try {
          const response = await axios.get(`http://127.0.0.1:8000/homebrew/api/task/${facebookKeys[0]}`)
          if (response) {
            if (response.data.status === 'SUCCESS' || 'FAILURE') {
              setFacebookData([...facebookData, ...response.data.result])
              return true
            } else {
              return false
            }
          }
        } catch (err) {
          return false
        }
        setIsLoading(false)
      };
      if (facebookKeys.length > 0) {
        const response = await getFacebookData()
        if (response === true) {
          facebookKeys.shift()
          console.log('facebook success', facebookKeys)
        } else {
          console.log("facebook failed")
        }
      }
      if (facebookKeys.length === 0) {
        localStorage.removeItem('facebookKeysForImages')
      } else {
        localStorage.setItem('facebookKeysForImages', JSON.stringify(facebookKeys))
      }
    } else if (localStorage.getItem('instagramKeysForImages')) {
      console.log("working on instagram keys")
      let instagramKeys = localStorage.getItem('instagramKeysForImages')
      instagramKeys = JSON.parse(instagramKeys)
      const getInstagramData = async () => {
        setIsLoading(true)
        try {
          const response = await axios.get(`http://127.0.0.1:8000/homebrew/api/task/${instagramKeys[0]}`)
          if (response) {
            if (response.data.status === 'SUCCESS' || 'FAILURE') {
              setInstagramData([...instagramData, ...response.data.result])
              return true
            } else {
              return false
            }
          }
        } catch (err) {
          return false
        }
        setIsLoading(false)
      }
      if (instagramKeys.length > 0) {
        const response = await getInstagramData()
        if (response === true) {
          instgramKeys.shift()
          console.log('instagram success', instagramKeys)
        } else {
          console.log("instagram failed")
        }
      }
      if (instagramKeys.length === 0) {
        localStorage.removeItem('instagramKeysForImages')
      } else {
        localStorage.setItem('instagramKeysForImages', JSON.stringify(instagramKeys))
      }
    } else if (Object.keys(celeryKeys).length === 0) {
      console.log("getting celery keys")
      const getCeleryKeys = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/homebrew/api/new/projects/39/image/0`)
          if (response) {
            setCeleryKeys(response.data)
          }
        } catch (err) {
          console.log(err);
        }
      };
      getCeleryKeys()
    } else if (Object.keys(celeryKeys).length !== 0 && didWeGetTaskIds === false) {
      console.log("getting tasks")
      const getTwitterTaskId = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/homebrew/api/task/${celeryKeys.twitter_task_id}`)
          if (response) {
            console.log(response.data)
            if (response.data.status === 'SUCCESS' || 'FAILURE') {
              console.log(response.data.result)
              localStorage.setItem('twitterKeysForImages', JSON.stringify(response.data.result))
              return true
            } else {
              return false
            }
          }
        } catch (err) {
          return false
        }
      };
      const getFacebookTaskId = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/homebrew/api/task/${celeryKeys.facebook_task_id}`)
          if (response) {
            if (response.data.status === 'SUCCESS' || 'FAILURE') {
              localStorage.setItem('facebookKeysForImages', JSON.stringify(response.data.result))
              return true
            } else {
              return false
            }
          }
        } catch (err) {
          return false
        }
      };
      const getInstagramTaskId = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/homebrew/api/task/${celeryKeys.instagram_task_id}`)
          if (response) {
            if (response.data.status === 'SUCCESS' || 'FAILURE') {
              localStorage.setItem('instagramKeysForImages', JSON.stringify(response.data.result))
              return true
            } else {
              return false
            }
          }
        } catch (err) {
          return false
        }
      };

      if ((celeryKeys.hasOwnProperty("twitter_task_id") && localStorage.getItem('twitterKeysForImages') === null)
        || (celeryKeys.hasOwnProperty("facebook_task_id") && localStorage.getItem('facebookKeysForImages') === null)
        || (celeryKeys.hasOwnProperty("instagram_task_id") && localStorage.getItem('instagramKeysForImages') === null)) {
        let twitterResponse, facebookResponse, instagramResponse
        if (celeryKeys.hasOwnProperty("twitter_task_id")) {
          twitterResponse = await getTwitterTaskId()
        }
        if (celeryKeys.hasOwnProperty("facebook_task_id")) {
          facebookResponse = await getFacebookTaskId()
        }
        if (celeryKeys.hasOwnProperty("instagram_task_id")) {
          instagramResponse = await getInstagramTaskId()
        }
        if ((celeryKeys.hasOwnProperty("twitter_task_id") ? twitterResponse !== false : true) &&
          (celeryKeys.hasOwnProperty("facebook_task_id") ? facebookResponse !== false : true) &&
          (celeryKeys.hasOwnProperty("instagram_task_id") ? instagramResponse !== false : true)) {
          setDidWeGetTaskIds(true)
        }
      }
    } else {
      console.log("Keys Not Found: Dead End")
      setShouldPageRefresh(true)
    }
  }

  console.log("Twitter Data", twitterData, "Facebook Data", facebookData, "Instagram Data", instagramData)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     newFn()
  //   }, 5000);
  //
  //   return () => clearInterval(interval);
  // }, [newFn]);

  return (
    <TabsLayout defaultIndex={1}>
      <TabPanels bg={"white"}>
        <TabPanel/>
        <TabPanel bg={'#F5F5F5'} px={0}>
          {shouldPageRefresh ? <Flex alignItems={'center'} gap={2} justifyContent={'flex-end'}>
            <RefreshButton handlePageRefresh={handlePageRefresh}/>
          </Flex> : ''}
          <Box mb={8}>
            <Flex borderBottom={"2px solid black"} mb={6} gap={4} alignItems={'center'} pb={1}>
              <AiOutlineTwitter color={'#1DA1F2'} size={'2rem'}/>
              <Text fontSize={'xl'} fontWeight={'bold'}>Twitter</Text>
            </Flex>
            <SimpleGrid columns={{base: 1, md: 2, lg: 3, "2xl": 4}} gap={{base: 2, lg: 6}} my={2}>
              <>
                {trendingTweetsData.map((item, index) => {
                  return (
                    <TweetCard
                      key={index}
                      icon={<AiOutlineTwitter color={'#1DA1F2'} size={'1.5rem'}/>}
                      description={item.description}
                      image={item.image}
                      username={item.username}
                      date={item.date}
                    />
                  )
                })}
              </>
            </SimpleGrid>
          </Box>
          <Box mb={8}>
            <Flex borderBottom={"2px solid black"} mb={6} gap={4} alignItems={'center'} pb={1}>
              <AiOutlineFacebook color={'#4267B2'} size={'2rem'}/>
              <Text fontSize={'xl'} fontWeight={'bold'}>Facebook</Text>
            </Flex>
            <SimpleGrid columns={{base: 1, md: 2, lg: 3, "2xl": 4}} gap={{base: 2, lg: 6}} my={2}>
              <>
                {facebookSampleTweets.slice(0, 6)
                  .map((item, index) => {
                    return (
                      <TweetCard
                        key={index}
                        icon={<AiOutlineFacebook color={'#4267B2'} size={'1.5rem'}/>}
                        description={item.post_text}
                        image={item.images}
                        username={item.username}
                        date={item.time}
                      />
                    )
                  })}
              </>
            </SimpleGrid>
          </Box>
          <Box mb={8}>
            <Flex borderBottom={"2px solid black"} mb={6} gap={4} alignItems={'center'} pb={1}>
              <AiOutlineInstagram color={'#FCAF45'} size={'2rem'}/>
              <Text fontSize={'xl'} fontWeight={'bold'}>Instagram</Text>
            </Flex>
            <SimpleGrid columns={{base: 1, md: 2, lg: 3, "2xl": 4}} gap={{base: 2, lg: 6}} my={2}>
              <>
                {instagramSampleTweets.slice(0, 6)
                  .map((item, index) => {
                    return (
                      <TweetCard
                        key={index}
                        icon={<AiOutlineInstagram color={'#4267B2'} size={'1.5rem'}/>}
                        description={item.caption}
                        image={item.thumbnails.split(',')[0]}
                        username={item.username}
                        date={item.creationTime.$date.$numberLong}
                      />
                    )
                  })}
              </>
            </SimpleGrid>
          </Box>
        </TabPanel>
      </TabPanels>
    </TabsLayout>
  )
}

export default ProjectTextPlusVideosView