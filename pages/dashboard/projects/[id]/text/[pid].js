import {
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Highlight,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, {useState} from "react";
import Badge from "../../../../../components/Badge/Badge";
import IndividualTweetAnalysisLayout from "../_individualTweetAnalysisLayout";
import axios from "axios";
import moment from "moment";
import {BiLink} from "react-icons/bi";
import {FaQuoteLeft} from "react-icons/fa";
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";

const IndividualTextAnalysis = ({multilabel, username, date, tweet, socialMediaType}) => {

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [claims, setClaims] = useState([])
  const {isOpen, onOpen, onClose} = useDisclosure()

  const handleSubmit = async (value) => {
    setIsSubmitting(true)
    await axios.get(`https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${encodeURIComponent(value)}&key=${process.env.NEXT_PUBLIC_FACT_CHECK_API}`)
      .then(res => {
        console.log(res)
        if (Object.keys(res.data).length > 0) {
          setClaims(res.data.claims)
          onOpen()
        } else {
          onOpen()
          console.log('no claim found')
        }
      })
      .catch(e => console.log(e))
    setIsSubmitting(false)
  }

  return (
    <IndividualTweetAnalysisLayout
      title={'Individual Analysis - Text'}
    >
      <Grid gap={8}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Flex alignItems={'center'} gap={2}>{socialMediaType === 'twitter' ? <AiOutlineTwitter size={'1.5rem'} color={'#1DA1F2'}/> :
            socialMediaType === 'facebook' ? <AiOutlineFacebook size={'1.5rem'} color={'#4267B2'}/> ?
              socialMediaType === 'instagram' : <AiOutlineInstagram size={'1.5rem'} color={'#FCAF45'}/> : '' }
            <Text>@{username}</Text>
          </Flex>
          <Text>{date}</Text>
        </Flex>
        <GridItem p={4} border={"1px solid lightgray"} borderRadius={"md"}>
          <Text>
            {/* query is a required attribute */}
            <Highlight
              query={['Lorem', 'Nam', 'Integer', 'Morbi', 'Class']}
              styles={{px: '2', py: '1', rounded: 'sm', bg: 'green.100'}}
            >
              {tweet}
            </Highlight>
          </Text>
        </GridItem>
        <Button
          onClick={claims.length > 0 ? () => {
            onOpen()
          } : () => handleSubmit(tweet)}
          bg={'blackAlpha.800'}
          _hover={{bg: 'blackAlpha.700'}}
          _active={{bg: 'blackAlpha.800'}}
          color={'white'}
          disabled={isSubmitting}
        >
          {isSubmitting ? <Spinner/> : 'Fact Check'}
        </Button>
        <GridItem>
          <Text fontWeight={'bold'} fontSize={'xl'}>Multi-Labels</Text>
          <SimpleGrid columns={{base: 2, md: 3}} gap={4} py={2}>
            <>
              {multilabel.length > 0 ?  multilabel.split(',')
                .slice(1, 4)
                .map((item, index) => {
                  return (
                    <Badge label={item} key={index}/>
                  );
                }): 'Multi-labels empty!'}
            </>
          </SimpleGrid>
        </GridItem>
      </Grid>

      {/* Modal */}
      <Modal onClose={() => {
        onClose()
      }} size={'xl'} isOpen={isOpen} scrollBehavior={'inside'}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Fact Check</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <Flex flexDir={'column'} gap={4}>
              <>
                {claims.length > 0 ? claims.map((item, index) => {
                  return (
                    <Flex key={index} flexDir={'column'} gap={2}>
                      {/* Claim */}
                      <Flex alignItems={'center'} gap={2}>
                        <FaQuoteLeft mb={2}/>
                        <Text fontWeight={'bold'}>Claim: </Text>
                      </Flex>
                      <Text><Text as={'span'} fontWeight={'bold'}>Text:</Text> {item.text}</Text>
                      <Text><Text fontWeight={'bold'} as={'span'}>Claimant:</Text> {item.claimant}</Text>
                      <Text fontSize={'sm'}>Claim Date: {moment(item.claimDate).format('ll')}</Text>
                      {/* Claim Review */}
                      {item.claimReview.length > 0 && <>
                        <Divider maxW={48}/>
                        <Text fontWeight={'bold'}>Claim Review: </Text>
                        <Text><Text as={'span'} fontWeight={'bold'}>Title:</Text> {item.claimReview[0].title}</Text>
                        <Text alignSelf={'start'} as={'span'} px={2} py={1} bg={'gray.100'} textUnderlineOffset={4} border={'1px solid black'} rounded={'sm'}>Rating: {item.claimReview[0].textualRating}</Text>
                        <Flex justifyContent={'space-between'} mt={2}>
                          <Text fontSize={'sm'}>{moment(item.claimReview[0].reviewDate).format('ll')}</Text>
                          <Flex alignItems={'center'} gap={2}>
                            <Link target={'_blank'} href={item.claimReview[0].url} cursor={'pointer'} color={'gray.600'}><BiLink/></Link>
                            <Text fontSize={'sm'} fontWeight={'bold'}>Publisher: {item.claimReview[0].publisher.name}</Text>
                          </Flex>
                        </Flex>
                      </>}
                      <Divider/>
                    </Flex>
                  )
                }) : 'No Claim Found'}
              </>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </IndividualTweetAnalysisLayout>
  );
};

export default IndividualTextAnalysis;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const pid = context.params.pid;
  const social = context.query.social.toLowerCase();

 let multilabel = '', tweet = '', username = '', date = '', socialMediaType = '';

  try {
    const res = await axios.get(`http://127.0.0.1:8000/homebrew/api/${social}/${pid}`)
    if (res.data) {
      if(Object.keys(res.data).length > 0){
        if(social === 'twitter'){
          multilabel = res.data.tweet_data.multilabel
          tweet = res.data.tweet_data.tweet
          username = res.data.tweet_data.username
          date = res.data.tweet_data.date
          socialMediaType = 'twitter'
        }
        if(social === 'facebook'){
          multilabel = res.data.facebook_data.multilabel
          tweet = res.data.facebook_data.post_text
          username = res.data.facebook_data.username
          date = res.data.facebook_data.time
          socialMediaType = 'facebook'
        }
      }
    }
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      multilabel,
      tweet,
      username,
      date,
      socialMediaType
    }
  }
}