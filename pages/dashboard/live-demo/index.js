import React, {useState} from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
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
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {Form, Formik} from "formik";
import CustomInput from "../../../components/Input/CustomInput";
import textUploadSchema from "../../../lib/schemas/textUploadValidation";
import CustomSubmitButton from "../../../components/Button/CustomSubmitButton";
import FileUploadForm from "../../../components/Upload/FileUploadForm";
import {AiOutlineAudio, AiOutlineFileImage} from "react-icons/ai";
import {MdOutlineOndemandVideo} from "react-icons/md";
import VideoPlayer from "../../../components/VideoPlayer/VideoPlayer";
import axios from "axios";
import {FaQuoteLeft} from "react-icons/fa";
import moment from "moment/moment";
import {BiLink} from "react-icons/bi";
import DashboardContainer from "../_layout";

const ToggleButton = ({text, handleToggleChange, value, toggleItem}) => {
  return (
    <Box onClick={() => handleToggleChange(value)} boxShadow={toggleItem === value ? 'md' : ''} cursor={'pointer'} px={'24px'} py={'6px'} bg={toggleItem === value ? 'white' : ''} rounded={'full'}>{text}</Box>
  )
}

const TextSection = ({toggleItem, textResponseData, setTextResponseData}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [claims, setClaims] = useState([])
  const {isOpen, onOpen, onClose} = useDisclosure()

  const handleClaimSubmit = async (value) => {
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
    <>{toggleItem === 'text' && <Box>
      <Box>
        <Heading as={'span'} className={'active-menu-item-yellow'} fontSize={'2xl'}>Text</Heading>
        <Box minW={{base: '100%', lg: 'lg'}} mt={4}>
          <Formik
            initialValues={{
              text: ''
            }}
            validationSchema={textUploadSchema}
            onSubmit={async (values, {setSubmitting}) => {
              setSubmitting(true)
              try {
                await axios.post(`${process.env.NEXT_PUBLIC_API_HOST_DEMO_LIVE}/text`, values)
                  .then(function (response) {
                    if (response.data) {
                      console.log(response.data)
                      setTextResponseData(response.data)
                    }
                  })
                  .catch(function (err) {
                    console.log(err)
                  })
              } catch (err) {
                console.log(err)
              }
              setSubmitting(false);
            }}
          >{({
            handleSubmit,
            isSubmitting,
            isValid,
            dirty
          }) => (
            <Form onSubmit={handleSubmit}>
              <CustomInput
                as={'textarea'} rows={6} name={"text"} placeholder={'Type anything...'}
                styles={{
                  border: '1px solid lightgray',
                  marginBottom: 0,
                  borderRadius: '6px',
                  padding: '14px 16px'
                }}
              />
              <Box mt={4}>
                <CustomSubmitButton handleSubmit={handleSubmit} label={'Submit'} isSubmitting={isSubmitting}/>
              </Box>
            </Form>
          )}
          </Formik>
        </Box>
      </Box>
      {Object.keys(textResponseData).length > 0 && <>
        <Button
          mt={4}
          onClick={claims.length > 0 ? () => {
            onOpen()
          } : () => handleClaimSubmit(textResponseData.data.tweet)}
          bg={'blackAlpha.800'}
          _hover={{bg: 'blackAlpha.700'}}
          _active={{bg: 'blackAlpha.800'}}
          color={'white'}
          disabled={isSubmitting}
          minW={'147px'}
        >
          {isSubmitting ? <Spinner/> : 'Fact Check'}
        </Button>

        {(textResponseData.data.location || textResponseData.data.organisationsHelping || textResponseData.data.disasterType || textResponseData.data.help) &&
          <Box mt={8}>
            {(textResponseData.data.location.length > 0 || textResponseData.data.organisationsHelping.length > 0 || textResponseData.data.disasterType.length > 0 || textResponseData.data.help.length > 0) && <Heading as={'span'} className={'active-menu-item-light-green'} fontSize={'2xl'}>NER</Heading>}
            <Flex gap={8} my={4}>
              {textResponseData.data.location && textResponseData.data.location.length > 0 && <Text>Location: {textResponseData.data.location}</Text>}
              {textResponseData.data.organisationsHelping && textResponseData.data.organisationsHelping.length > 0 && <Text>Organization Helping: {textResponseData.data.organisationsHelping}</Text>}
              {textResponseData.data.disasterType && textResponseData.data.disasterType.length > 0 && <Text>Disaster Type: {textResponseData.data.disasterType}</Text>}
              {textResponseData.data.help && textResponseData.data.help.length > 0  && <Text>Location: {textResponseData.data.help}</Text>}
            </Flex>
          </Box>
        }
        <Box mt={8}>
          <Heading as={'span'} className={'active-menu-item-blue'} fontSize={'2xl'}>Status</Heading>
          <Flex gap={8} my={4}>
            <Flex align={"center"} gap={4}>
              <Box p={1} bg={textResponseData.data.Prediction === 1 ? "red" : "green"}/>
              <Text fontSize={'lg'} fontWeight={'semibold'}>{textResponseData.data.Prediction === 1 ? "Disastrous" : "Non-Disastrous"}</Text>
            </Flex>
          </Flex>
        </Box>
        {textResponseData.data.multiLabels && textResponseData.data.multiLabels.length > 0 && <Box mt={8}>
          <Heading as={'span'} className={'active-menu-item-green'} fontSize={'2xl'}>Labels</Heading>
          <Flex gap={2} my={4} flexWrap={'wrap'}>
            <>{textResponseData.data.multiLabels.slice(0,3).map((label, index) => <Text key={index} minW={'150px'} textAlign={'center'} border={'2px solid black'} rounded={'lg'} py={1} px={2}>{label}</Text>)}</>
          </Flex>
        </Box>}
      </>}

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
                {claims.length >0 ? claims.map((item, index) => {
                  return (
                    <Flex key={index} flexDir={'column'} gap={2}>
                      {/* Claim */}
                      <Flex alignItems={'center'} gap={2}>
                        <FaQuoteLeft mb={2}/>
                        <Text fontWeight={'bold'}>Claim: </Text>
                      </Flex>
                      <Text><Text as={'span'} fontWeight={'bold'}>Text:</Text> {item.text}</Text>
                      <Text><Text fontWeight={'bold'} as={'span'}>Claimant:</Text> {item.claimant}</Text>
                      <Text fontSize={'sm'}>Claim Date: {moment(item.claimDate)
                        .format('ll')}</Text>
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
                }) : 'No claim found'}
              </>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>}
    </>
  )
}

const ImageSection = ({toggleItem, imageResponseData, setImageResponseData}) => {
  return (
    <>{toggleItem === 'image' && <Box>
      <FileUploadForm
        key={1}
        setResponseData={setImageResponseData}
        accept="image/*"
        url={`${process.env.NEXT_PUBLIC_API_HOST_DEMO_LIVE}/image`}
        label={'Upload Image'} title={''}
        logo={<AiOutlineFileImage size={'2rem'}/>}
      />
      {Object.keys(imageResponseData).length > 0 && <Box mt={8}>
        <Text fontWeight={'bold'} fontSize={'xl'} mb={6}>Classified Class</Text>
        <Text as={'span'} textTransform={'capitalize'} border={'1px solid black'} p={4} borderStyle={'dashed'}><Text as={'span'} fontWeight={'bold'}>{imageResponseData.imageClassfication.class}</Text> {imageResponseData.imageClassfication.score}</Text>
      </Box>}
      {Object.keys(imageResponseData).length > 0 && <>
        <Box mt={8}>
          <Text fontWeight={'bold'} fontSize={'xl'} mb={2}>Original Image</Text>
          <SimpleGrid columns={{base: 1, md: 2, lg: 3}} gap={4}>
            <Image src={imageResponseData.data.image} alt={'image'}/>
          </SimpleGrid>
        </Box>
        <Box mt={8}>
          <Text fontWeight={'bold'} fontSize={'xl'} mb={2}>Object Detected Images</Text>
          <SimpleGrid columns={{base: 1, md: 2, lg: 3}} gap={4}>
            <Image src={imageResponseData.data.objectDetection.images} alt={'image'}/>
            <Image src={imageResponseData.data.objectDetection.objectDetectionUrl} alt={'image'}/>
            <Flex gap={3} flexDir={'column'}>
              <Text fontWeight={'bold'}>Class Detected</Text>
              {[...new Set(imageResponseData.data.objectDetection.classDetected)].map((item, index) =>
                <Text key={index} border={'1px solid black'} p={4} borderStyle={'dashed'}>{item}</Text>
              )}
            </Flex>
          </SimpleGrid>
        </Box>
        <Box mt={8}>
          <Text fontWeight={'bold'} fontSize={'xl'} mb={2}>Crop Detected Images</Text>
          <Flex gap={4}>
            {imageResponseData.data.objectDetectionCropped.map((item, index) => {
              return (
                <Box key={index}>
                  <Image src={item.url} alt={'image'}/>
                  <Text textAlign={'center'}>{item.type}</Text>
                </Box>
              )
            })}
          </Flex>
        </Box>
      </>}
    </Box>}</>
  )
}

const AudioSection = ({toggleItem, setAudioResponseData, audioResponseData}) => {
  const [translationLang, setTranslationLang] = useState('en')

  const handleLanguageChange = () => {
    if (translationLang === 'en') {
      setTranslationLang('hi')
    } else {
      setTranslationLang('en')
    }
  }

  return (
    <>{toggleItem === 'voice' && <Box>
      <Flex justifyContent={'end'} alignItems={'end'} mb={4} gap={2}>
        <Text>{translationLang === 'en' ? 'English' : 'Hindi'}</Text>
        <Switch size='lg' onChange={handleLanguageChange}/>
      </Flex>
      <FileUploadForm
        key={2}
        setResponseData={setAudioResponseData}
        accept="audio/*"
        url={`${process.env.NEXT_PUBLIC_API_HOST_DEMO_LIVE}/audio/${translationLang}`}
        label={'Upload Voice'}
        logo={<AiOutlineAudio size={'2rem'}/>}
      />
      {Object.keys(audioResponseData).length > 0 && <>
        <Text mt={8} fontSize={'xl'} fontWeight={'bold'}>Output: </Text>
        <Box>
          <Box border={'1px solid lightgray'} borderStyle={'dashed'} display={'inline-block'} px={4} py={2} mt={2} rounded={'md'}>
            <Text fontWeight={'bold'}>Transcript: </Text>
            <Text textTransform={'capitalize'} mt={2}>{audioResponseData.data.textFromAudio}</Text>
          </Box>
        </Box>
        <Box mt={8}>
          <Text fontWeight={'bold'}>MultiLabels: </Text>
          <Flex mt={2} gap={3}>
            {audioResponseData.data.multiLabels.slice(0, 3).map((label, index) =>
              <Text key={index} border={'2px solid black'} rounded={'lg'} py={1} px={2}>{label}</Text>
            )}
          </Flex>
        </Box>
        {Object.keys(audioResponseData).length > 0 && <>
          {(audioResponseData.data.ner.location || audioResponseData.data.ner.organisationsHelping || audioResponseData.data.ner.disasterType || audioResponseData.data.ner.help) &&
            <Box mt={8}>
              <Heading as={'span'} className={'active-menu-item-light-green'} fontSize={'2xl'}>NER</Heading>
              <Flex gap={8} my={4}>
                {audioResponseData.data.ner.location && <Text>Location: {audioResponseData.data.ner.location}</Text>}
                {audioResponseData.data.ner.organisationsHelping && <Text>Organization Helping: {audioResponseData.data.ner.organisationsHelping}</Text>}
                {audioResponseData.data.ner.disasterType && <Text>Disaster Type: {audioResponseData.data.ner.disasterType}</Text>}
                {audioResponseData.data.ner.help && <Text>Location: {audioResponseData.data.ner.help}</Text>}
              </Flex>
            </Box>
          }
        </>}
      </>}
    </Box>}</>
  )
}

const VideoSection = ({toggleItem, setVideoResponseData, videoResponseData}) => {
  return (
    <>{toggleItem === 'video' && <Box>
      <FileUploadForm key={3} accept={'video/*'} url={`${process.env.NEXT_PUBLIC_API_HOST_DEMO_LIVE}/video`} logo={<MdOutlineOndemandVideo size={'2rem'}/>} setResponseData={setVideoResponseData} label={'Upload Video'}/>
      <Box mt={8}>
        <Box mt={8}>
          {Object.keys(videoResponseData).length>0 && <SimpleGrid columns={{base: 1, md: 2}} gap={6}>
            <Box>
              <Text fontWeight={'bold'} fontSize={'xl'} mb={2}>Original Video</Text>
              <VideoPlayer url={videoResponseData.data.video}/>
            </Box>
            <Box>
              <Text fontWeight={'bold'} fontSize={'xl'} mb={2}>Object Detected Video</Text>
              <VideoPlayer url={videoResponseData.data.videoDetectionUrl}/>
            </Box>
          </SimpleGrid>}
        </Box>
      </Box>
    </Box>}</>
  )
}

const LiveDemo = () => {

  const [toggleItem, setToggleItem] = useState('text')
  const [textResponseData, setTextResponseData] = useState({})
  const [imageResponseData, setImageResponseData] = useState({})
  const [audioResponseData, setAudioResponseData] = useState({})
  const [videoResponseData, setVideoResponseData] = useState({})

  const handleToggleChange = (value) => {
    setToggleItem(value)
  }

  return (
    <DashboardContainer title={'Live Demo'} isSidebarOpenByDefault={false}>
      <Box p={4} bg={'white'}>
        {/* Toggle */}
        <Flex justifyContent={'end'}>
          <Flex border={'2px solid black'} rounded={'full'} bg={'lightgray'} alignItems={'center'} p={'3px'}>
            <ToggleButton text={'Text'} toggleItem={toggleItem} handleToggleChange={handleToggleChange} value={'text'}/>
            <ToggleButton text={'Image'} toggleItem={toggleItem} handleToggleChange={handleToggleChange} value={'image'}/>
            <ToggleButton text={'Voice'} toggleItem={toggleItem} handleToggleChange={handleToggleChange} value={'voice'}/>
            <ToggleButton text={'Video'} toggleItem={toggleItem} handleToggleChange={handleToggleChange} value={'video'}/>
          </Flex>
        </Flex>
        <Box my={4} px={4} py={8} border={'1px solid lightgray'} borderStyle={'dashed'} minH={'container.sm'}>
          {/* Text */}
          <TextSection toggleItem={toggleItem} textResponseData={textResponseData} setTextResponseData={setTextResponseData}/>

          {/* Image */}
          <ImageSection toggleItem={toggleItem} imageResponseData={imageResponseData} setImageResponseData={setImageResponseData}/>

          {/* Voice */}
         <AudioSection toggleItem={toggleItem} audioResponseData={audioResponseData} setAudioResponseData={setAudioResponseData}/>

          {/* Video */}
          <VideoSection toggleItem={toggleItem} videoResponseData={videoResponseData} setVideoResponseData={setVideoResponseData}/>
        </Box>
      </Box>
    </DashboardContainer>
  );
};

export default LiveDemo;