import {Box, Flex, Icon, Image, Text} from "@chakra-ui/react";
import {socialMediaTypes} from "../../constants/useful-data/socialMediaTypes";
import "@fontsource/inter"

const TweetCard = ({image, username, tweet, date, socialMediaType, label}) => {
  return (
    <Box>
      <Flex flexDirection={'column'} border={'2px solid black'} rounded={'md'}>
        <Image roundedTop={'md'} src={image} alt={'Tweet Image'}/>
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
    </Box>
  )
}

export default TweetCard