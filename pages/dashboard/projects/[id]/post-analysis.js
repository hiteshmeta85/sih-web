import React, {useState} from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Highlight,
  Image,
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
  useDisclosure
} from "@chakra-ui/react";
import axios from "axios";
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import Badge from "../../../../components/Badge/Badge";
import {FaQuoteLeft} from "react-icons/fa";
import moment from "moment/moment";
import {BiLink} from "react-icons/bi";
import DashboardContainer from "../../_layout";

const PostAnalysis = ({
  multilabel,
  username,
  date,
  tweet,
  socialMediaType,
  originalPhotos,
  classifiedPhotos,
  objectDetectedImages,
  cropDetectedImages
}) => {

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
          setClaims([])
          onOpen()
          console.log('no claim found')
        }
      })
      .catch(e => console.log(e))
    setIsSubmitting(false)
  }

  return (
    <DashboardContainer title={'Post Analysis'}>
      <Box bg={'white'} p={4}>
        <Grid gap={8} border={'1px solid gray'} py={8} px={8} rounded={'md'} borderStyle={'dashed'} maxW={'md'}>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <Flex alignItems={'center'} gap={2}>{socialMediaType === 'twitter' ?
              <AiOutlineTwitter size={'1.5rem'} color={'#1DA1F2'}/> :
              socialMediaType === 'facebook' ? <AiOutlineFacebook size={'1.5rem'} color={'#4267B2'}/> ?
                socialMediaType === 'instagram' : <AiOutlineInstagram size={'1.5rem'} color={'#FCAF45'}/> : ''}
              <Text fontWeight={'bold'}>@{username}</Text>
            </Flex>
            <Text fontWeight={'bold'}>{date}</Text>
          </Flex>
          <GridItem p={4} border={"1px solid lightgray"} borderRadius={"md"}>
            <Text>
              {/* query is a required attribute */}
              {/*<Highlight*/}
              {/*  query={['']}*/}
              {/*  styles={{px: '2', py: '1', rounded: 'sm', bg: 'green.100'}}*/}
              {/*>*/}
                {tweet}
              {/*</Highlight>*/}
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
          {multilabel && <GridItem>
            <Text fontWeight={'bold'} fontSize={'xl'}>Multi-Labels</Text>
            <Flex gap={4} py={2} flexWrap={'wrap'}>
              <>
                {multilabel.split(',')
                  .slice(1, 4)
                  .map((item, index) => {
                    return (
                      <Badge label={item} key={index}/>
                    );
                  })}
              </>
            </Flex>
          </GridItem>}
        </Grid>

        {originalPhotos.length > 0 && <Box mt={8}>
          <Text fontWeight={'bold'} fontSize={'xl'} mb={2}>Original Photos</Text>
          <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={4}>
            {originalPhotos.map((item, index) => {
              return (
                <Image key={index} src={socialMediaType === 'facebook' ? item.images : item.photos} alt={'image'}/>
              )
            })}
          </SimpleGrid>
        </Box>}

        {classifiedPhotos.length > 0 && <Box mt={8}>
          <Text fontWeight={'bold'} fontSize={'xl'} mb={2}>Classified Photos</Text>
          <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={4}>
            {classifiedPhotos.map((item, index) => {
              return (
                <Image key={index} src={socialMediaType === 'facebook' ? item.images : item.photos} alt={'image'}/>
              )
            })}
          </SimpleGrid>
        </Box>}

        {objectDetectedImages.length > 0 && <Box mt={8}>
          <Text fontWeight={'bold'} fontSize={'xl'} mb={2}>Object Detected Photos</Text>
          <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={4}>
            {objectDetectedImages.map((item, index) => {
              return (
                <Image key={index} src={item.objectDetectionUrl} alt={'image'}/>
              )
            })}
          </SimpleGrid>
        </Box>}

        {cropDetectedImages.length > 0 && <Box mt={8}>
          <Text fontWeight={'bold'} fontSize={'xl'} mb={2}>Crop Detected Photos</Text>
          <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={4}>
            {cropDetectedImages.map((item, index) => {
              return (
                <Image key={index} src={item.categoryWiseUrl} alt={'image'}/>
              )
            })}
          </SimpleGrid>
        </Box>}

      </Box>
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
                }) : <Text color={'red.700'}>No Claim Found</Text>
                }
              </>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </DashboardContainer>
  );
};

export default PostAnalysis;

export async function getServerSideProps(context) {
  let id = context.params.id;
  let social = context.query.social.toLowerCase();

  let multilabel = '', tweet = '', username = '', date = '', socialMediaType = '', originalPhotos = [],
    classifiedPhotos = [], objectDetectedImages = [], cropDetectedImages = [];

  let res3 = {
    data: {
      "tweet_data": {
        "tweet_id_db": 1509,
        "id": 1556942746388205568,
        "conversation_id": "1556942746388205568",
        "created_at": "2022-08-09 15:27:31 India Standard Time",
        "date": "2022-08-09",
        "time": "15:27:31",
        "timezone": "+0530",
        "user_id": 594736235,
        "username": "nwsneworleans",
        "name": "NWS New Orleans",
        "place": "",
        "tweet": "A Coastal Flood Advisory remains in effect until 1 PM CDT Thursday. Minor coastal flooding possible during high tide periods with tides 1 to 1.5 feet above ground level across low lying coastal areas in the advisory counties and parishes. #lawx #mswx  https://t.co/Hrx3KpGM69",
        "language": "en",
        "urls": "",
        "photos": "https://pbs.twimg.com/media/FZtd9gCXEAEWbjd.jpg",
        "replies_count": 0,
        "retweets_count": 1,
        "likes_count": 2,
        "hashtags": "lawx,mswx",
        "cashtags": "",
        "link": "https://twitter.com/NWSNewOrleans/status/1556942746388205568",
        "retweet": "",
        "quote_url": "",
        "video": 1,
        "thumbnail": "https://pbs.twimg.com/media/FZtd9gCXEAEWbjd.jpg",
        "near": "",
        "geo": "",
        "source": "",
        "user_rt_id": "",
        "user_rt": "",
        "retweet_id": "",
        "reply_to": "",
        "retweet_date": "2022-08-16T18:41:42.806000Z",
        "translate": "",
        "trans_src": "",
        "trans_dest": "",
        "video_link": "",
        "translated": "",
        "projectId": 39,
        "socialMediaName": "Twitter",
        "prediction": 1,
        "multilabel": "crimes2,buildingcollapse,war,floodwater,wreckedcar",
        "status": "sent",
        "creationTime": "2022-08-16T18:41:42.806000Z",
        "passedFromModel": "True",
        "rank": 0,
        "geolocation_lat": 0.0,
        "geolocation_lng": 0.0,
        "video_link_od": "",
        "video_transcript": "",
        "verdict": 100,
        "videoPrediction": 0
      },
      "tweet_photos": [
        {
          "id": 463,
          "projectId": 39,
          "photos": "https://pbs.twimg.com/media/FZtd9gCXEAEWbjd.jpg",
          "passed_from_img_classification": "True",
          "passed_from_obj_detection": "True",
          "passed_from_img_crop": "True",
          "tweetIdPhotos": 1556942746388205568
        }
      ],
      "tweet_photos_classified": [
        {
          "id": 183,
          "tweetPhotoIdForeignkey": 463,
          "classifiedClass": "flood",
          "score": 0.30761728,
          "photos": "https://pbs.twimg.com/media/FZtd9gCXEAEWbjd.jpg",
          "imagePrediction": 100,
          "projectId": 39,
          "status": "not sent"
        }
      ],
      "tweet_obj_detection": [
        {
          "id": 2,
          "classDetected": "",
          "objectDetectionUrl": "https://storage.googleapis.com/hackmanthan-lostminds.appspot.com//home/mes2/Documents/sihserver2/sih-api/microservices/objectDetection/temp/images/imageDetected_3bd443ef-d15d-44a3-95f9-df2a709126f5.jpg",
          "photos": "https://pbs.twimg.com/media/FZtd9gCXEAEWbjd.jpg",
          "projectId": 39,
          "tweetIdPhotos": 463
        },
        {
          "id": 133,
          "classDetected": "",
          "objectDetectionUrl": "https://storage.googleapis.com/hackmanthan-lostminds.appspot.com//home/mes2/Documents/sihserver2/sih-api/microservices/objectDetection/temp/images/imageDetected_dff8a90e-32b1-419b-b0ba-7dc25e8592c0.jpg",
          "photos": "https://pbs.twimg.com/media/FZtd9gCXEAEWbjd.jpg",
          "projectId": 39,
          "tweetIdPhotos": 463
        }
      ],
      "tweet_crop_detection": [
        {
          "id": 149,
          "projectId": 39,
          "categoryLabels": "",
          "categoryWiseUrl": "",
          "idOfTweetPhoto": 463
        },
        {
          "id": 219,
          "projectId": 39,
          "categoryLabels": "",
          "categoryWiseUrl": "",
          "idOfTweetPhoto": 463
        }
      ],
      "tweet_ner": [
        {
          "id": null,
          "projectId": 39,
          "location": "coastal flood advisory remains in effect until",
          "affectedPeople": null,
          "help": null,
          "organisationsHelping": null,
          "disasterType": null,
          "TwitterIdforeignkey": 1556942746388205568
        }
      ]
    }
  }

  let res2 = {
    data: {
      "insta_data": {
        "id": 40,
        "post_url": "https://www.instagram.com/p/ChRpim0gJ-j/",
        "caption": "Jak to vypadalo před dvaceti lety v Lovosicích? 🏭 V úterý 16. 8. 2022 uplyne 20 let od katastrofální povodně. Areál Lovochemie, a.s. a okolí byl zatopen vodou do výše 1,5 až 2 metrů. Podívejte se, jak to vypadalo před 20 lety v Lovochemii...\n•\n•\n•\n•\n•\n#agrofertgroup #povodne #flood #floods #povodne2002 #20letpote #chemie #chemistry #engineering #lovochemie #lovosice #povoden #preol #flood2002 #city #voda #water #waterflood",
        "upload_time": "2022-08-15 09:51:33.000000",
        "likes": 5,
        "thumbnails": "https://scontent-iad3-2.cdninstagram.com/v/t51.2885-15/299297186_159388426680414_8605946882117248897_n.jpg?stp=c135.0.810.810a_dst-webp_e15_s150x150&cb=9ad74b5e-be52112b&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=Taq-n8DWSgwAX8DpPcH&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AT9S-ASvwHxPT5gFPdY7zndceOm2NAo99ilGRrIEMjjtgg&oe=63011DA6&_nc_sid=d997c6,https://scontent-iad3-2.cdninstagram.com/v/t51.2885-15/299297186_159388426680414_8605946882117248897_n.jpg?stp=c135.0.810.810a_dst-webp_e15_s240x240&cb=9ad74b5e-be52112b&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=Taq-n8DWSgwAX8DpPcH&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AT9PTFb46UxcftICcl-rqeTfspIVd7fWM53SGh8PqJB73g&oe=63011DA6&_nc_sid=d997c6,https://scontent-iad3-2.cdninstagram.com/v/t51.2885-15/299297186_159388426680414_8605946882117248897_n.jpg?stp=c135.0.810.810a_dst-webp_e15_s320x320&cb=9ad74b5e-be52112b&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=Taq-n8DWSgwAX8DpPcH&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AT_GCzgVXm93onq-_agUGZRmn4p9nsYqlIckEEv4NFtlwg&oe=63011DA6&_nc_sid=d997c6,https://scontent-iad3-2.cdninstagram.com/v/t51.2885-15/299297186_159388426680414_8605946882117248897_n.jpg?stp=c135.0.810.810a_dst-webp_e15_s480x480&cb=9ad74b5e-be52112b&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=Taq-n8DWSgwAX8DpPcH&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AT8MezE6ZlBZt5FdrD_TKR31vIs4LXQNU6TqulmeIm-gYg&oe=63011DA6&_nc_sid=d997c6,https://scontent-iad3-2.cdninstagram.com/v/t51.2885-15/299297186_159388426680414_8605946882117248897_n.jpg?stp=c135.0.810.810a_dst-webp_e35_s640x640_sh0.08&cb=9ad74b5e-be52112b&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=Taq-n8DWSgwAX8DpPcH&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AT88y9Zq7bv41VtjhFo9F0J8ksDZP97iW_306pLMGG_QSw&oe=63011DA6&_nc_sid=d997c6",
        "thumbnailsSrc": "https://scontent-iad3-2.cdninstagram.com/v/t51.2885-15/299297186_159388426680414_8605946882117248897_n.jpg?stp=c135.0.810.810a_dst-jpg_e15_s640x640&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=Taq-n8DWSgwAX8DpPcH&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AT-0xKfA21eIBC2c5TG6LEhpD2vE6wa4BWj1qQQ2B9Q01w&oe=63011DA6&_nc_sid=d997c6",
        "location": "None",
        "is_video": false,
        "videoUrl": "",
        "videoViewCount": 0,
        "hashtags": "[,',#,a,g,r,o,f,e,r,t,g,r,o,u,p,',,, ,',#,p,o,v,o,d,n,e,',,, ,',#,f,l,o,o,d,',,, ,',#,f,l,o,o,d,s,',,, ,',#,p,o,v,o,d,n,e,2,0,0,2,',,, ,',#,2,0,l,e,t,p,o,t,e,',,, ,',#,c,h,e,m,i,e,',,, ,',#,c,h,e,m,i,s,t,r,y,',,, ,',#,e,n,g,i,n,e,e,r,i,n,g,',,, ,',#,l,o,v,o,c,h,e,m,i,e,',,, ,',#,l,o,v,o,s,i,c,e,',,, ,',#,p,o,v,o,d,e,n,',,, ,',#,p,r,e,o,l,',,, ,',#,f,l,o,o,d,2,0,0,2,',,, ,',#,c,i,t,y,',,, ,',#,v,o,d,a,',,, ,',#,w,a,t,e,r,',,, ,',#,w,a,t,e,r,f,l,o,o,d,',]",
        "projectId": 39,
        "socialMediaName": "Instagram",
        "prediction": 0,
        "multilabel": "",
        "status": "not sent",
        "creationTime": "2022-08-17T09:26:13.465000Z",
        "passedFromModel": "True",
        "rank": 0,
        "geolocation_lat": 0.0,
        "geolocation_lng": 0.0,
        "translated": "What did it look like twenty years ago in Lovosice?🏭 On Tuesday, August 16, 2022, 20 years have passed from the catastrophic flood.Area Lovochemie, a.s.And the surroundings were flooded with water up to 1.5 to 2 meters.See what it looked like 20 years ago in Lovochemia ...\n•\n•\n•\n•\n•\n#Agrofertgroup #povodne #flood #floods #flood2002 #20letpote #chemie #chemistry #engineering #loveochemie #lovosice #povoden #preol #Flood2002 #city #water #water #waterflood",
        "language": "cs",
        "video_link_od": "",
        "video_transcript": "",
        "verdict": 100,
        "videoPrediction": 0,
        "video_link": "",
        "cleaned_text": ""
      },
      "insta_photos": [
        {
          "id": 463,
          "projectId": 39,
          "photos": "https://pbs.twimg.com/media/FZtd9gCXEAEWbjd.jpg",
          "passed_from_img_classification": "True",
          "passed_from_obj_detection": "True",
          "passed_from_img_crop": "True",
          "InstagramPhotosUrlForeignkey": 1556942746388205568
        }
      ],
      "insta_photos_classified": [
        {
          "id": 183,
          "instagramPhotoIdForeignkey": 463,
          "classifiedClass": "flood",
          "score": 0.30761728,
          "photos": "https://pbs.twimg.com/media/FZtd9gCXEAEWbjd.jpg",
          "imagePrediction": 100,
          "projectId": 39,
          "status": "not sent"
        }
      ],
      "insta_obj_detection": [
        {
          "id": 2,
          "classDetected": "",
          "objectDetectionUrl": "https://storage.googleapis.com/hackmanthan-lostminds.appspot.com//home/mes2/Documents/sihserver2/sih-api/microservices/objectDetection/temp/images/imageDetected_3bd443ef-d15d-44a3-95f9-df2a709126f5.jpg",
          "photos": "https://pbs.twimg.com/media/FZtd9gCXEAEWbjd.jpg",
          "projectId": 39,
          "instagramPostId": 463
        },
        {
          "id": 133,
          "classDetected": "",
          "objectDetectionUrl": "https://storage.googleapis.com/hackmanthan-lostminds.appspot.com//home/mes2/Documents/sihserver2/sih-api/microservices/objectDetection/temp/images/imageDetected_dff8a90e-32b1-419b-b0ba-7dc25e8592c0.jpg",
          "photos": "https://pbs.twimg.com/media/FZtd9gCXEAEWbjd.jpg",
          "projectId": 39,
          "instagramPostId": 463
        }
      ],
      "insta_crop_detection": [
        {
          "id": 149,
          "projectId": 39,
          "categoryLabels": "",
          "categoryWiseUrl": "",
          "idOfInstagramPhoto": 463
        },
        {
          "id": 219,
          "projectId": 39,
          "categoryLabels": "",
          "categoryWiseUrl": "",
          "idOfInstagramPhoto": 463
        }
      ],
      "insta_ner": [
        {
          "id": null,
          "projectId": 39,
          "location": "coastal flood advisory remains in effect until",
          "affectedPeople": null,
          "help": null,
          "organisationsHelping": null,
          "disasterType": null,
          "InstagramIdforeignkey": 1556942746388205568
        }
      ]
    }
  }

  let res = {
    data: {
      "facebook_data": {
        "id": 40,
        "post_text": "Share if you agree!",
        "shared_text": null,
        "time": "2016-12-09 19:05:23",
        "timestamp": 1481310323,
        "images": "https://scontent-bom1-2.xx.fbcdn.net/v/t31.18172-8/15392871_10154742776733142_5085896762692649924_o.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=105&ccb=1-7&_nc_sid=da1649&efg=eyJpIjoidCJ9&_nc_ohc=qYQUqznIFIcAX92kH3m&_nc_ht=scontent-bom1-2.xx&oh=00_AT8rniPxuvS2dVFkB7bB-EAFqiBM7x9vKABaEFSsAoYBng&oe=6319B53E",
        "images_description": "No photo description available.",
        "video": null,
        "video_duration_seconds": null,
        "video_thumbnail": null,
        "video_watches": null,
        "video_width": null,
        "likes": 12,
        "comments": 4,
        "shares": 3,
        "post_url": "https://facebook.com/flood/posts/10154742776733142",
        "link": null,
        "user_id": 89488063141,
        "username": "Flood Wood Care",
        "user_url": "https://facebook.com/flood/?__tn__=C-R",
        "is_live": false,
        "was_live": false,
        "video_link": "",
        "projectId": 39,
        "socialMediaName": "Facebook",
        "prediction": 0,
        "multilabel": "",
        "status": "sent",
        "creationTime": "2022-08-11T18:47:24.758000Z",
        "passedFromModel": "True",
        "rank": 0,
        "geolocation_lat": 0.0,
        "geolocation_lng": 0.0,
        "translated": "Share if you agree!",
        "language": "",
        "video_link_od": "",
        "video_transcript": "",
        "verdict": 100,
        "videoPrediction": 0
      },
      "facebook_photos": [
        {
          "id": 44,
          "projectId": 39,
          "images": "https://scontent-bom1-2.xx.fbcdn.net/v/t31.18172-8/15392871_10154742776733142_5085896762692649924_o.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=105&ccb=1-7&_nc_sid=da1649&efg=eyJpIjoidCJ9&_nc_ohc=qYQUqznIFIcAX92kH3m&_nc_ht=scontent-bom1-2.xx&oh=00_AT8rniPxuvS2dVFkB7bB-EAFqiBM7x9vKABaEFSsAoYBng&oe=6319B53E",
          "passed_from_img_classification": "True",
          "passed_from_obj_detection": "False",
          "passed_from_img_crop": "False",
          "FacebookPhotosurl": "https://facebook.com/flood/posts/10154742776733142"
        },
        {
          "id": 2270,
          "projectId": 39,
          "images": "https://scontent.fbom10-2.fna.fbcdn.net/v/t31.18172-8/15392871_10154742776733142_5085896762692649924_o.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=105&ccb=1-7&_nc_sid=da1649&efg=eyJpIjoidCJ9&_nc_ohc=qYQUqznIFIcAX_TNk2w&_nc_ht=scontent.fbom10-2.fna&oh=00_AT9EZ81PPk-tgQD_XZo9xwKDW5YWlw-U4iIVNozQ5kBKdQ&oe=6319B53E",
          "passed_from_img_classification": "True",
          "passed_from_obj_detection": "False",
          "passed_from_img_crop": "False",
          "FacebookPhotosurl": "https://facebook.com/flood/posts/10154742776733142"
        },
        {
          "id": 2456,
          "projectId": 39,
          "images": "https://scontent-bom1-1.xx.fbcdn.net/v/t31.18172-8/15392871_10154742776733142_5085896762692649924_o.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=105&ccb=1-7&_nc_sid=da1649&efg=eyJpIjoidCJ9&_nc_ohc=qYQUqznIFIcAX92kH3m&_nc_ht=scontent-bom1-1.xx&oh=00_AT_etuto5jZyv8ovHE3gw-qU5tigCJ_g7i3WhXTfqEhuDQ&oe=6319B53E",
          "passed_from_img_classification": "True",
          "passed_from_obj_detection": "False",
          "passed_from_img_crop": "False",
          "FacebookPhotosurl": "https://facebook.com/flood/posts/10154742776733142"
        },
        {
          "id": 2488,
          "projectId": 39,
          "images": "https://scontent-bom1-1.xx.fbcdn.net/v/t31.18172-8/15392871_10154742776733142_5085896762692649924_o.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=105&ccb=1-7&_nc_sid=da1649&efg=eyJpIjoidCJ9&_nc_ohc=qYQUqznIFIcAX92kH3m&_nc_ht=scontent-bom1-1.xx&oh=00_AT-GHSKd6kbbMtFnlIeBn0LCq5rqhWdaoigZNQ0kPSl5EQ&oe=631DA9BE",
          "passed_from_img_classification": "True",
          "passed_from_obj_detection": "False",
          "passed_from_img_crop": "False",
          "FacebookPhotosurl": "https://facebook.com/flood/posts/10154742776733142"
        },
        {
          "id": 2629,
          "projectId": 39,
          "images": "https://scontent.fbom10-2.fna.fbcdn.net/v/t31.18172-8/15392871_10154742776733142_5085896762692649924_o.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=105&ccb=1-7&_nc_sid=da1649&efg=eyJpIjoidCJ9&_nc_ohc=-Qf3XKJMSgMAX_tcFrm&_nc_ht=scontent.fbom10-2.fna&oh=00_AT8_eQse1SbVTcffxAFGYcUgzhgZCQ14CnvtWq1RzdY87w&oe=63219E3E",
          "passed_from_img_classification": "True",
          "passed_from_obj_detection": "False",
          "passed_from_img_crop": "False",
          "FacebookPhotosurl": "https://facebook.com/flood/posts/10154742776733142"
        },
        {
          "id": 2726,
          "projectId": 39,
          "images": "https://scontent-pnq1-1.xx.fbcdn.net/v/t31.18172-8/15392871_10154742776733142_5085896762692649924_o.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=105&ccb=1-7&_nc_sid=da1649&efg=eyJpIjoidCJ9&_nc_ohc=-Qf3XKJMSgMAX8HiLAZ&_nc_ht=scontent-pnq1-1.xx&oh=00_AT8WNp1UwEdOXUx9Dy38fBKYqX0rw-hWyiTFYbvO4PH9IQ&oe=63219E3E",
          "passed_from_img_classification": "True",
          "passed_from_obj_detection": "False",
          "passed_from_img_crop": "False",
          "FacebookPhotosurl": "https://facebook.com/flood/posts/10154742776733142"
        }
      ],
      "facebook_photos_classified": [
        {
          "id": 10,
          "facebookPhotoIdForeignkey": 44,
          "classifiedClass": "flood",
          "score": 0.35205575823783875,
          "images": "https://scontent-bom1-2.xx.fbcdn.net/v/t31.18172-8/15392871_10154742776733142_5085896762692649924_o.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=105&ccb=1-7&_nc_sid=da1649&efg=eyJpIjoidCJ9&_nc_ohc=qYQUqznIFIcAX92kH3m&_nc_ht=scontent-bom1-2.xx&oh=00_AT8rniPxuvS2dVFkB7bB-EAFqiBM7x9vKABaEFSsAoYBng&oe=6319B53E",
          "imagePrediction": 100,
          "projectId": 39,
          "status": "not sent"
        },
        {
          "id": 17,
          "facebookPhotoIdForeignkey": 2456,
          "classifiedClass": "flood",
          "score": 0.35205575823783875,
          "images": "https://scontent-bom1-1.xx.fbcdn.net/v/t31.18172-8/15392871_10154742776733142_5085896762692649924_o.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=105&ccb=1-7&_nc_sid=da1649&efg=eyJpIjoidCJ9&_nc_ohc=qYQUqznIFIcAX92kH3m&_nc_ht=scontent-bom1-1.xx&oh=00_AT_etuto5jZyv8ovHE3gw-qU5tigCJ_g7i3WhXTfqEhuDQ&oe=6319B53E",
          "imagePrediction": 100,
          "projectId": 39,
          "status": "not sent"
        },
        {
          "id": 20,
          "facebookPhotoIdForeignkey": 2629,
          "classifiedClass": "flood",
          "score": 0.35205575823783875,
          "images": "https://scontent.fbom10-2.fna.fbcdn.net/v/t31.18172-8/15392871_10154742776733142_5085896762692649924_o.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=105&ccb=1-7&_nc_sid=da1649&efg=eyJpIjoidCJ9&_nc_ohc=-Qf3XKJMSgMAX_tcFrm&_nc_ht=scontent.fbom10-2.fna&oh=00_AT8_eQse1SbVTcffxAFGYcUgzhgZCQ14CnvtWq1RzdY87w&oe=63219E3E",
          "imagePrediction": 100,
          "projectId": 39,
          "status": "not sent"
        },
        {
          "id": 38,
          "facebookPhotoIdForeignkey": 2726,
          "classifiedClass": "flood",
          "score": 0.35205575823783875,
          "images": "https://scontent-pnq1-1.xx.fbcdn.net/v/t31.18172-8/15392871_10154742776733142_5085896762692649924_o.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=105&ccb=1-7&_nc_sid=da1649&efg=eyJpIjoidCJ9&_nc_ohc=-Qf3XKJMSgMAX8HiLAZ&_nc_ht=scontent-pnq1-1.xx&oh=00_AT8WNp1UwEdOXUx9Dy38fBKYqX0rw-hWyiTFYbvO4PH9IQ&oe=63219E3E",
          "imagePrediction": 100,
          "projectId": 39,
          "status": "not sent"
        }
      ],
      "facebook_obj_detection": [
        {
          "id": 2,
          "classDetected": "flood",
          "objectDetectionUrl": "https://storage.googleapis.com/hackmanthan-lostminds.appspot.com//home/mes2/Documents/sihserver2/sih-api/microservices/objectDetection/temp/images/imageDetected_3bd443ef-d15d-44a3-95f9-df2a709126f5.jpg",
          "images": "https://pbs.twimg.com/media/FZtd9gCXEAEWbjd.jpg",
          "projectId": 39,
          "facebookPostId": 463
        },
        {
          "id": 133,
          "classDetected": "flood2",
          "objectDetectionUrl": "https://storage.googleapis.com/hackmanthan-lostminds.appspot.com//home/mes2/Documents/sihserver2/sih-api/microservices/objectDetection/temp/images/imageDetected_dff8a90e-32b1-419b-b0ba-7dc25e8592c0.jpg",
          "images": "https://pbs.twimg.com/media/FZtd9gCXEAEWbjd.jpg",
          "projectId": 39,
          "facebookPostId": 463
        }
      ],
      "facebook_crop_detection": [
        {
          "id": 2,
          "categoryWiseUrl": "https://storage.googleapis.com/hackmanthan-lostminds.appspot.com//home/mes2/Documents/sihserver2/sih-api/microservices/objectDetection/temp/images/imageDetected_3bd443ef-d15d-44a3-95f9-df2a709126f5.jpg",
          "images": "https://pbs.twimg.com/media/FZtd9gCXEAEWbjd.jpg",
          "facebookPostId": 39,
          "projectId": 39
        },
        {
          "id": 133,
          "categoryWiseUrl": "https://storage.googleapis.com/hackmanthan-lostminds.appspot.com//home/mes2/Documents/sihserver2/sih-api/microservices/objectDetection/temp/images/imageDetected_dff8a90e-32b1-419b-b0ba-7dc25e8592c0.jpg",
          "images": "https://pbs.twimg.com/media/FZtd9gCXEAEWbjd.jpg",
          "facebookPostId": 39,
          "projectId": 39
        }
      ],
      "facebook_ner": [
        {
          "id": null,
          "projectId": 39,
          "location": "coastal flood advisory remains in effect until",
          "affectedPeople": null,
          "help": null,
          "organisationsHelping": null,
          "disasterType": null,
          "TwitterIdforeignkey": 1556942746388205568
        }
      ]
    }
  }

  try {
    const res = await axios.get(`http://127.0.0.1:8000/homebrew/api/twitter/${id}`)
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

  if (social === 'twitter') {
    multilabel = res3.data.tweet_data.multilabel
    tweet = res3.data.tweet_data.tweet
    username = res3.data.tweet_data.username
    date = res3.data.tweet_data.date
    socialMediaType = 'twitter'
    originalPhotos = res3.data.tweet_photos
    classifiedPhotos = res3.data.tweet_photos_classified
    objectDetectedImages = res3.data.tweet_obj_detection
    cropDetectedImages = res3.data.tweet_crop_detection
  }

  if (social === 'facebook') {
    multilabel = res.data.facebook_data.multilabel
    tweet = res.data.facebook_data.language === 'en' ? res.data.facebook_data.post_text : res.data.facebook_data.translated
    username = res.data.facebook_data.username
    date = res.data.facebook_data.time
    socialMediaType = 'facebook'
    originalPhotos = res.data.facebook_photos
    classifiedPhotos = res.data.facebook_photos_classified
    objectDetectedImages = res.data.facebook_obj_detection
    cropDetectedImages = res.data.facebook_crop_detection
  }

  if (social === 'instagram') {
    multilabel = res2.data.insta_data.multilabel
    tweet = res2.data.insta_data.language === 'en' ? res2.data.insta_data.caption : res2.data.insta_data.translated
    username = 'unknown'
    date = res2.data.insta_data.upload_time
    socialMediaType = 'facebook'
    originalPhotos = res2.data.insta_photos
    classifiedPhotos = res2.data.insta_photos_classified
    objectDetectedImages = res2.data.insta_obj_detection
    cropDetectedImages = res2.data.insta_crop_detection
  }

  return {
    props: {
      multilabel,
      tweet,
      username,
      date,
      socialMediaType,
      originalPhotos,
      classifiedPhotos,
      objectDetectedImages,
      cropDetectedImages
    }
  }
}