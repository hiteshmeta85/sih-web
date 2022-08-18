import {
  Flex,
  Icon,
  Link,
  Spinner,
  Table,
  TableContainer,
  TabPanel,
  TabPanels,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import TabsLayout from "../_tabsLayout";
import axios from "axios";
import {useRouter} from "next/router";
import {AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import {facebookSampleTweets} from "../../../../../constants/sample-data/facebookSampleTweets";
import {instagramSampleTweets} from "../../../../../constants/sample-data/instagramSampleTweets";
import RefreshButton from "../../../../../components/Button/RefreshButton";

const ProjectTextView = () => {

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
    if (localStorage.getItem('twitterKeysForText')) {
      console.log("working on twitter keys")
      let twitterKeys = localStorage.getItem('twitterKeysForText')
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
        localStorage.removeItem('twitterKeysForText')
      } else {
        localStorage.setItem('twitterKeysForText', JSON.stringify(twitterKeys))
      }
    } else if (localStorage.getItem('facebookKeysForText')) {
      console.log("working on facebook keys")
      let facebookKeys = localStorage.getItem('facebookKeysForText')
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
        localStorage.removeItem('facebookKeysForText')
      } else {
        localStorage.setItem('twitterKeysForText', JSON.stringify(facebookKeys))
      }
    } else if (localStorage.getItem('instagramKeysForText')) {
      console.log("working on instagram keys")
      let instagramKeys = localStorage.getItem('instagramKeysForText')
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
        localStorage.removeItem('instagramKeysForText')
      } else {
        localStorage.setItem('twitterKeysForText', JSON.stringify(instagramKeys))
      }
    } else if (Object.keys(celeryKeys).length === 0) {
      console.log("getting celery keys")
      const getCeleryKeys = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/homebrew/api/new/projects/39/text`)
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
              localStorage.setItem('twitterKeysForText', JSON.stringify(response.data.result))
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
              localStorage.setItem('facebookKeysForText', JSON.stringify(response.data.result))
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
              localStorage.setItem('instagramKeysForText', JSON.stringify(response.data.result))
              return true
            } else {
              return false
            }
          }
        } catch (err) {
          return false
        }
      };

      if ((celeryKeys.hasOwnProperty("twitter_task_id") && localStorage.getItem('twitterKeysForText') === null)
        || (celeryKeys.hasOwnProperty("facebook_task_id") && localStorage.getItem('facebookKeysForText') === null)
        || (celeryKeys.hasOwnProperty("instagram_task_id") && localStorage.getItem('instagramKeysForText') === null)) {
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

  useEffect(() => {
    const interval = setInterval(() => {
      newFn()
    }, 5000);

    return () => clearInterval(interval);
  }, [newFn]);

  return (
    <TabsLayout defaultIndex={0}>
      <TabPanels bg={"white"}>
        <TabPanel overflowX={'scroll'}>
          {shouldPageRefresh ? <Flex alignItems={'center'} gap={2} mb={4} justifyContent={'flex-end'}>
            <RefreshButton handlePageRefresh={handlePageRefresh}/>
          </Flex> : ''}
          <TableContainer>
            <Table borderWidth={"1px"}>
              <Thead>
                <Tr>
                  <Th>Prediction</Th>
                  <Th>Username</Th>
                  <Th>Tweet</Th>
                  <Th>Multi-Label</Th>
                  <Th textAlign={"center"}>Date</Th>
                  <Th textAlign={"center"}>Link</Th>
                </Tr>
              </Thead>
              <Tbody>
                <>
                  {twitterData.map((item, index) => {
                    return (
                      <Tr key={index}>
                        <Td bg={item.prediction === 1 ? 'green.200' : 'red.200'}>{item.prediction}</Td>
                        <Td maxW={'xs'} whiteSpace={'initial'}>
                          <Text fontWeight={'semibold'}>
                            {item.username}
                          </Text>
                          <Text fontSize={'sm'}>
                            {item.name}
                          </Text>
                        </Td>
                        <Td maxW={'xs'} whiteSpace={'initial'}>{item.tweet}</Td>
                        <Td>{item.multilabel.split(',')
                          .slice(0, 2)
                          .map((step, index) => <Text key={index} border={'1px solid lightgray'} rounded={'lg'}
                                                      m={'0.2rem'} textAlign={'center'} p={'4px'}>{step}</Text>)}</Td>
                        <Td textAlign={'center'}>{item.created_at}</Td>
                        <Td textAlign={'center'}><Link href={item.link} target={'_blank'}>
                          <Icon as={AiOutlineTwitter} h={8} w={8} color={'#1DA1F2'}/></Link>
                        </Td>
                      </Tr>
                    )
                  })}
                  {facebookSampleTweets.map((item, index) => {
                    return (
                      <Tr key={index}>
                        <Td bg={item.prediction === 1 ? 'green.200' : 'red.200'}>{item.prediction}</Td>
                        <Td maxW={'xs'} whiteSpace={'initial'}>
                          <Text fontWeight={'semibold'}>
                            {item.username}
                          </Text>
                        </Td>
                        <Td maxW={'xs'} whiteSpace={'initial'}>{item.post_text}</Td>
                        <Td>{item.multilabel.split(',')
                          .slice(0, 2)
                          .map((step, index) => <Text key={index} border={'1px solid lightgray'} rounded={'lg'} m={'0.2rem'} textAlign={'center'} p={'4px'}>{step}</Text>)}</Td>
                        <Td textAlign={'center'}>{item.time}</Td>
                        <Td textAlign={'center'}><Link href={item.post_url} target={'_blank'}>
                          <Icon as={AiFillFacebook} h={8} w={8} color={'#4267B2'}/></Link>
                        </Td>
                      </Tr>
                    )
                  })}
                  {instagramSampleTweets.map((item, index) => {
                    return (
                      <Tr key={index}>
                        <Td bg={item.prediction === 1 ? 'green.200' : 'red.200'}>{item.prediction}</Td>
                        <Td maxW={'xs'} whiteSpace={'initial'}>
                          <Text fontWeight={'semibold'}>
                            unknown
                          </Text>
                        </Td>
                        <Td maxW={'xs'} whiteSpace={'initial'}>{item.caption}</Td>
                        <Td>{item.multilabel.split(',')
                          .slice(0, 2)
                          .map((step, index) => <Text key={index} border={'1px solid lightgray'} rounded={'lg'} m={'0.2rem'} textAlign={'center'} p={'4px'}>{step}</Text>)}</Td>
                        <Td textAlign={'center'}>{item.creationTime.$date.$numberLong}</Td>
                        <Td textAlign={'center'}><Link href={item.post_url} target={'_blank'}>
                          <Icon as={AiOutlineInstagram} h={8} w={8} color={'#FCAF45'}/></Link>
                        </Td>
                      </Tr>
                    )
                  })}
                </>
              </Tbody>
            </Table>
          </TableContainer>
          <Flex justifyContent={'center'} alignItems={'center'} my={6} w={'full'}>
            {isLoading ? <Spinner color={'blue'} size={'lg'} mx={'auto'}/> : null}
          </Flex>
        </TabPanel>
      </TabPanels>
    </TabsLayout>
  )
}

export default ProjectTextView