import {Box, Divider, Flex, Icon, Image, Text} from "@chakra-ui/react";
import {socialMediaTypes} from "../../constants/useful-data/socialMediaTypes";
import "@fontsource/inter"
import {useState} from "react";
import {FcNext, FcPrevious} from "react-icons/fc";

const TweetWithImagesCard = ({images, username, tweet, date, socialMediaType, label}) => {

  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = images.length

  const showNextSlide = () => {
    if (currentSlide === totalSlides - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const showPrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlides - 1)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <Flex flexDirection={'column'} border={'2px solid black'} rounded={'md'} h={'full'}>
      <Box pos={'relative'}>
        {images.length - 1 !== 0 && <Icon as={FcPrevious} pos={'absolute'} bottom={3} left={3} cursor={'pointer'} onClick={showNextSlide}/>}
        <Image roundedTop={'md'} src={images[currentSlide]} alt={'Tweet Image'}/>
        {images.length - 1 !== 0 && <Icon as={FcNext} pos={'absolute'} bottom={3} right={3} cursor={'pointer'} onClick={showPrevSlide}/>}
      </Box>
      <Divider/>
      <Flex flexDir={'column'} gap={2} px={4} pt={2} pb={4}>
        {label && <Text textTransform={'capitalize'} alignSelf={'start'} px={2} rounded={'md'} border={'1px solid red'}>{label}</Text>}
        <Text fontWeight={'bold'} color={'gray.400'} fontSize={'sm'} letterSpacing={'wider'}>@{username}</Text>
        <Text lineHeight={'shorter'} fontFamily={'Inter'}>{tweet}</Text>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Text fontWeight={'bold'} color={'gray.400'} fontSize={'sm'}>{date}</Text>
          <>
            {socialMediaTypes.map((item, index) => {
              if (socialMediaType === item.value)
                return (
                  <Icon key={index} as={item.image} h={8} w={8} color={item.color} pos={'relative'} top={'2px'}/>
                )
            })}
          </>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default TweetWithImagesCard