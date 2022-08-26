import React, {useEffect, useState} from "react";
import {Box, Button, Divider, Flex, Icon, Image, Link, SimpleGrid, Text} from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardMenu from "../../components/Sidebar/DashboardMenu";
import {RiTimer2Line} from "react-icons/ri";
import {AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa";
import axios from "axios";
import {useRouter} from 'next/router'
import {FiExternalLink} from "react-icons/fi";

const Card = ({username, tweet, image, name, prediction, link}) => {
  return (
    <Flex gap={4} flexDir={'column'} py={4} px={4} border={'1px solid lightgray'}>
      <Flex gap={3} alignItems={'center'} justifyContent={'space-between'}>
        <Flex gap={3}>
          <Text fontWeight={'bold'}>@{username}</Text>
          {name && <Text>{name}</Text>}
        </Flex>
        <Link target={'_blank'} href={link}><Icon as={FiExternalLink}/></Link>
        {/*<Text
          bg={prediction === 1 ? 'green.300' : 'red.300'}
          px={4}
          py={1}
          fontSize={'sm'}
          rounded={'full'}
        >
          {prediction === 1 ? 'Disastrous' : 'Non-Disastrous'}
        </Text>*/}
      </Flex>
      <Text>{tweet}</Text>
      {image && <Image src={image} alt={'tweet-image'}/>}
    </Flex>
  )
}

const CardContainer = ({icon, title, children, social, ChangeSliceNumber}) => {
  return (
    <Box p={4} rounded={'md'}>
      <Flex justifyContent={'space-between'} mb={2}>
        <Flex gap={3} alignItems={'center'}>
          {icon}
          <Text fontSize={'xl'} fontWeight={'bold'}>{title}</Text>
        </Flex>
        <Button
          bg={'none'}
          _hover={{color: 'purple'}}
          _active={{bg: 'none'}}
          borderRadius={0}
          fontSize={'sm'}
          onClick={() => {
            ChangeSliceNumber(social)
          }}
        >
          <Text as={'span'} borderBottom={'1px solid black'}>View All</Text>
        </Button>
      </Flex>
      <Divider/>
      <SimpleGrid columns={{base: 1, md: 2, lg: 3}} gap={6} mt={4}>
        {children}
      </SimpleGrid>
    </Box>
  )
}

const Live = ({query}) => {
  const router = useRouter()
  const {disaster} = router.query

  const [twitterData, setTwitterData] = useState([])
  const [facebookData, setFacebookData] = useState([])
  const [instagramData, setInstagramData] = useState([])

  const [twitterSliceNumber, setTwitterSliceNumber] = useState(3)
  const [facebookSliceNumber, setFacebookSliceNumber] = useState(3)
  const [instagramSliceNumber, setInstagramSliceNumber] = useState(3)

  const newFn = async () => {
    console.log(disaster)
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/live-dashboard`, {hashtags: [`${disaster}`]})
      if (response) {
        if (response.data.data.twitter.length > 0) {
          setTwitterData(response.data.data.twitter)
        }
        if (response.data.data.facebook.length > 0) {
          setFacebookData(response.data.data.facebook)
        }
        if (response.data.data.instagram.length > 0) {
          setInstagramData(response.data.data.instagram)
        }
      }
    } catch (err) {
      return false
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      newFn()
    }, 5000);

    return () => clearInterval(interval);
  }, [disaster]);

  const ChangeSliceNumber = (social) => {
    if (social === 'twitter') {
      if (twitterSliceNumber === 3) {
        setTwitterSliceNumber(twitterData.length)
      } else {
        setTwitterSliceNumber(3)
      }
    }
    if (social === 'facebook') {
      if (facebookSliceNumber === 3) {
        setFacebookSliceNumber(facebookData.length)
      } else {
        setFacebookSliceNumber(3)
      }
    }
    if (social === 'instagram') {
      if (instagramSliceNumber === 3) {
        setInstagramSliceNumber(instagramData.length)
      } else {
        setInstagramSliceNumber(3)
      }
    }
  }

  React.useEffect(() => {
    let timeout;
    if (twitterSliceNumber < twitterData.length - 1) {
      timeout = setTimeout(() => setTwitterSliceNumber(twitterSliceNumber + 3), 2000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [twitterData, twitterSliceNumber]);

  React.useEffect(() => {
    let timeout;
    if (facebookSliceNumber < facebookData.length - 1) {
      timeout = setTimeout(() => setFacebookSliceNumber(facebookSliceNumber + 3), 2000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [facebookData, facebookSliceNumber]);

  React.useEffect(() => {
    let timeout;
    if (instagramSliceNumber < instagramData.length - 1) {
      timeout = setTimeout(() => setInstagramSliceNumber(instagramSliceNumber + 3), 2000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [instagramData, instagramSliceNumber]);

  console.log(twitterSliceNumber, facebookSliceNumber, instagramSliceNumber)

  return (
    <Flex>
      <Sidebar isSidebarOpenByDefault={false} backgroundColor={'white'}/>
      <Box
        flex={1}
        h={'100vh'}
        overflow={'scroll'}
      >
        <Box
          display={{base: 'flex', lg: 'none'}}
          justifyContent={'flex-end'}
          mx={{base: 2, md: 6}}
          mt={2}
        >
          <DashboardMenu/>
        </Box>
        <Box pb={12}>
          <Flex
            justifyContent={'space-between'}
            alignItems={'center'}
            borderRadius={"md"}
            mt={{base: 3, lg: 4}}
            pl={4}
            pr={4}
            pt={2}
            color={'gray.800'}
            fontWeight={'bold'}
            fontSize={'x-large'}
          >
            <Flex alignItems={'center'} gap={4} justifyContent={'space-between'}>
              <Text fontSize={'3xl'}>Live Data Fetching</Text>
              <Icon as={RiTimer2Line} className={'rotate-circular'} h={10} w={10}/>
            </Flex>
            <Flex gap={2} alignItems={'center'} border={'1px dashed lightgray'} px={4} py={2} fontSize={'sm'}>
              <Box p={2} className={'blink'}/>
              <Text>Live</Text>
            </Flex>
          </Flex>
          <CardContainer title={'Twitter'} icon={<Icon as={AiOutlineTwitter} h={8} w={8} color={'#1DA1F2'}/>}
                         social={'twitter'} ChangeSliceNumber={ChangeSliceNumber}>
            {twitterData.slice(twitterSliceNumber - 3, twitterSliceNumber)
              .map((item, index) => {
                return (
                  <Card
                    key={index}
                    username={item.username}
                    name={item.name}
                    tweet={item.tweet}
                    prediction={item.prediction}
                    link={item.link}
                  />
                )
              })}
          </CardContainer>
          <CardContainer title={'Facebook'} icon={<Icon as={FaFacebookF} h={7} w={7} color={'#4267B2'}/>}
                         social={'facebook'} ChangeSliceNumber={ChangeSliceNumber}>
            {facebookData.slice(facebookSliceNumber - 3, facebookSliceNumber)
              .map((item, index) => {
                return (
                  <Card
                    key={index}
                    username={item.username}
                    tweet={item.post_text}
                    prediction={item.prediction}
                    link={item.post_url}
                  />
                )
              })}
          </CardContainer>
          <CardContainer title={'Instagram'} icon={<Icon as={AiOutlineInstagram} h={8} w={8} color={'#FCAF45'}/>}
                         social={'instagram'} ChangeSliceNumber={ChangeSliceNumber}>
            {instagramData.slice(instagramSliceNumber - 3, instagramSliceNumber)
              .map((item, index) => {
                return (
                  <Card
                    key={index}
                    username={'Unknown'}
                    tweet={item.caption}
                    prediction={item.prediction}
                    link={item.post_url}
                  />
                )
              })}
          </CardContainer>
        </Box>
      </Box>
    </Flex>
  );
};

export default Live;