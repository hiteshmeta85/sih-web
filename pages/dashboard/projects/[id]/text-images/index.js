import TabsLayout from "../_tabsLayout";
import {Box, Flex, Icon, SimpleGrid, Spinner, TabPanel, TabPanels, Text} from "@chakra-ui/react";
import TweetCard from "../../../../../components/Tweet/TweetCard";
import React, {useEffect, useState} from "react";
import {AiFillDelete, AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import {useRouter} from "next/router";
import axios from "axios";
import CustomButton from "../../../../../components/Button/CustomButton";
import {VscSave} from "react-icons/vsc";
import {MdOutlineTranslate} from "react-icons/md";

const ProjectTextPlusVideosView = () => {

  const router = useRouter()
  const {id} = router.query

  const [celeryKeys, setCeleryKeys] = useState({})
  const [twitterData, setTwitterData] = useState([])
  const [facebookData, setFacebookData] = useState([])
  const [instagramData, setInstagramData] = useState([])
  const [didWeGetTaskIds, setDidWeGetTaskIds] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [shouldPageRefresh, setShouldPageRefresh] = useState(false)
  const [didWeGetData, setDidWeGetData] = useState(false)
  const [isScrappingLive, setIsScrappingLive] = useState(true)

  // const handlePageRefresh = () => {
  //   setCeleryKeys({})
  //   setDidWeGetTaskIds(false)
  //   setShouldPageRefresh(true)
  // }

  const handleSaveData = async () => {
    const saveProgress = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/projects/${id}/image/status`)
        if (response) {
          console.log(response)
        }
      } catch (err) {
        console.log(err)
      }
    }
    await saveProgress()
  }

  const handleClearLocalStorageKeys = () => {
    localStorage.removeItem('twitterKeysForImages')
    localStorage.removeItem('facebookKeysForImages')
    localStorage.removeItem('facebookKeysForImages')
  }

  const newFn = async () => {
    /// changed else if to if,
    /// check for id

    if(JSON.parse(localStorage.getItem('keyIdForImages')) === id){
      if (localStorage.getItem('twitterKeysForImages')) {
        console.log("working on twitter keys")
        let twitterKeys = localStorage.getItem('twitterKeysForImages')
        twitterKeys = JSON.parse(twitterKeys)
        const getTwitterData = async () => {
          setIsLoading(true)
          try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/task/${twitterKeys[0]}`)
            if (response) {
              if (response.data.status === 'SUCCESS' || 'FAILURE') {
                console.log(response.data)
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
      }
      else if (localStorage.getItem('facebookKeysForImages')) {
        console.log("working on facebook keys")
        let facebookKeys = localStorage.getItem('facebookKeysForImages')
        facebookKeys = JSON.parse(facebookKeys)
        const getFacebookData = async () => {
          setIsLoading(true)
          try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/task/${facebookKeys[0]}`)
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
          localStorage.setItem('twitterKeysForImages', JSON.stringify(facebookKeys))
        }
      }
      else if (localStorage.getItem('instagramKeysForImages')) {
        console.log("working on instagram keys")
        let instagramKeys = localStorage.getItem('instagramKeysForImages')
        instagramKeys = JSON.parse(instagramKeys)
        const getInstagramData = async () => {
          setIsLoading(true)
          try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/task/${instagramKeys[0]}`)
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
          localStorage.setItem('twitterKeysForImages', JSON.stringify(instagramKeys))
        }
      }
    }
    if (Object.keys(celeryKeys).length === 0 && didWeGetData === false) {
      console.log("getting celery keys")
      const getCeleryKeys = async () => {
        setIsLoading(true)
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/projects/${id}/image/0`)
          if (response) {
            if(response.data.status === 'Scrapping'){
              localStorage.setItem('keyIdForImages', JSON.stringify(id))
              setIsScrappingLive(true)
              setCeleryKeys(response.data)
            } else if (response.data.status === 'Scrapped'){
              localStorage.setItem('keyIdForImages', JSON.stringify(id))
              setInstagramData([...instagramData, ...response.data.instagram])
              setFacebookData([...facebookData, ...response.data.facebook])
              setTwitterData([...twitterData, ...response.data.twitter])
              setDidWeGetData(true)
            }
          }
        } catch (err) {
          console.log(err);
        }
        setIsLoading(false)
      };
      getCeleryKeys()
    }
    if (Object.keys(celeryKeys).length !== 0 && didWeGetTaskIds === false) {
      console.log("getting tasks")
      const getTwitterTaskId = async () => {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/task/${celeryKeys.twitter_task_id}`)
          if (response) {
            console.log(response.data)
            if (response.data.status === 'SUCCESS' || 'FAILURE') {
              console.log(response.data.result)
              if(response.data.status === 'SUCCESS'){
                localStorage.setItem('twitterKeysForText', JSON.stringify(response.data.result))
              }
              if(response.data.status === 'FAILURE'){
                localStorage.setItem('twitterKeysForText', JSON.stringify([]))
              }
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
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/task/${celeryKeys.facebook_task_id}`)
          if (response) {
            if (response.data.status === 'SUCCESS' || 'FAILURE') {
              if(response.data.status === 'SUCCESS'){
                localStorage.setItem('facebookKeysForText', JSON.stringify(response.data.result))
              }
              if(response.data.status === 'FAILURE'){
                localStorage.setItem('facebookKeysForText', JSON.stringify([]))
              }
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
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/task/${celeryKeys.instagram_task_id}`)
          if (response) {
            if (response.data.status === 'SUCCESS' || 'FAILURE') {
              if(response.data.status === 'SUCCESS'){
                localStorage.setItem('instagramKeysForText', JSON.stringify(response.data.result))
              }
              if(response.data.status === 'FAILURE'){
                localStorage.setItem('instagramKeysForText', JSON.stringify([]))
              }
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
      setIsScrappingLive(false)
      // setShouldPageRefresh(true)
    }
  }

  console.log("Twitter Data", twitterData, "Facebook Data", facebookData, "Instagram Data", instagramData)

  useEffect(() => {
    const interval = setInterval(() => {
      newFn()
    }, 5000);

    return () => clearInterval(interval);
  }, [newFn]);

  return (
    <TabsLayout defaultIndex={1}>
      <TabPanels bg={"white"}>
        <TabPanel/>
        <TabPanel bg={'#F5F5F5'} px={0}>
          <Flex alignItems={'center'} justifyContent={'center'} gap={2} mb={4} mt={2} border={'1px dashed #EB4747'} p={2} maxW={'170px'}>
            <Text className={'blink'}></Text>
            <Text color={"gray.600"} fontWeight={"bold"}>{didWeGetData ? 'Scrapping Done' : isScrappingLive ? 'Scrapping Live' : 'Loading'}</Text>
          </Flex>
          {/*<Flex alignItems={'center'} gap={4} mb={4} justifyContent={'flex-end'}> {shouldPageRefresh ? <>*/}
          {/*    <CustomButton handlePageRefresh={handlePageRefresh} text={'Refresh'} icon={<Icon as={IoIosRefresh} h={6} w={6} color={'white'}/>}/>*/}
          {/*  </> :*/}
          {/*  ''}*/}
          {/*</Flex>*/}
          <Box mb={8}>
            <Flex borderBottom={"2px solid black"} mb={6} gap={4} alignItems={'center'} pb={1}>
              <AiOutlineTwitter color={'#1DA1F2'} size={'2rem'}/>
              <Text fontSize={'xl'} fontWeight={'bold'}>Twitter</Text>
            </Flex>
            <SimpleGrid columns={{base: 1, md: 2, lg: 3, "2xl": 4}} gap={{base: 2, lg: 6}} my={2}>
              <>
                {twitterData.map((item, index) => {
                  if(item.photos.length > 0)
                  return (
                    <TweetCard
                      key={index}
                      icon={<AiOutlineTwitter color={'#1DA1F2'} size={'2rem'}/>}
                      description={item.language === "en" || item.language.length === 0 ? item.tweet : <Box><Icon as={MdOutlineTranslate} h={6} w={6} color={'blue'}/><Text>{item.translated}</Text></Box>}
                      image={item.photos.split(',')[0]}
                      username={item.username}
                      date={item.date}
                      url={`/dashboard/projects/${id}/post-analysis/${item.tweet_id_db}?social=twitter`}
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
                {facebookData.map((item, index) => {
                  if(item.images && item.images.length > 0)
                    return (
                      <TweetCard
                        key={index}
                        icon={<AiOutlineFacebook color={'#4267B2'} size={'2rem'}/>}
                        description={item.language === "en" || item.language.length === 0 ? item.post_text : <Box><Icon as={MdOutlineTranslate} h={6} w={6} color={'blue'}/><Text>{item.translated}</Text></Box>}
                        image={item.images}
                        username={item.username}
                        date={item.time}
                        url={`/dashboard/projects/${id}/post-analysis/${item.id}?social=facebook`}
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
                {instagramData.map((item, index) => {
                  if(item.thumbnails && item.thumbnails.length > 0)
                    return (
                      <TweetCard
                        key={index}
                        icon={<AiOutlineInstagram color={'#FCAF45'} size={'2rem'}/>}
                        description={item.language === "en" || item.language.length === 0 ? item.caption : <Box><Icon as={MdOutlineTranslate} h={6} w={6} color={'blue'}/><Text>{item.translated}</Text></Box>}
                        image={item.thumbnails.split(',')[0]}
                        username={'unknown'}
                        url={`/dashboard/projects/${id}/post-analysis/${item.id}?social=instagram`}
                        //date={item.creationTime.$date.$numberLong}
                      />
                    )
                  })}
              </>
            </SimpleGrid>
          </Box>
          <Flex justifyContent={'center'} alignItems={'center'} my={6} w={'full'}>
            {isLoading ? <Spinner color={'blue'} size={'lg'} mx={'auto'}/> : null}
          </Flex>
          <Flex alignItems={'center'} gap={2} mb={4} mt={12} justifyContent={'flex-start'}> {shouldPageRefresh ?
            <CustomButton handlePageRefresh={handleSaveData} text={'Save Data'} icon={<Icon as={VscSave} h={6} w={6}/>}/>
            : <CustomButton handlePageRefresh={handleClearLocalStorageKeys} text={'Clear Storage'} icon={<Icon as={AiFillDelete} h={6} w={6}/>}/>}
          </Flex>
        </TabPanel>
      </TabPanels>
    </TabsLayout>
  )
}

export default ProjectTextPlusVideosView