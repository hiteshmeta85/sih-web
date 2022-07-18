import {Box, Divider, Flex, Heading, HStack, Link, SimpleGrid, Text} from "@chakra-ui/react";
import {SocialMediaData} from "./social-media";


const Contact = () => {

  return (
    <Box maxW={'container.xl'} mx={'auto'} p={{base: 2, md: 4, lg: 8}}>
      <HStack>
        <Heading
          fontWeight={'semibold'} fontSize={'2rem'}
          whiteSpace={'nowrap'}>
          Find us here
        </Heading>
        <Divider borderColor={'gray.500'} pt={2}/>
      </HStack>
      <SimpleGrid columns={[1, 1, 2, 4]} spacing='40px' py={8}>
        <Flex gap={4}>
          <>{SocialMediaData.map((item, index) => (
            <Link key={index}>{item.image}</Link>
          ))
          }</>
        </Flex>
        <Box height='auto'>
          <Heading fontWeight={'semibold'} pb={'3'}>
            News Daily
          </Heading>
          <Text fontWeight={'semibold'} color={'blackAlpha.800'}>
            Get news from the BBC in your inbox each weekday morning
          </Text>
        </Box>
        <Box height='auto'>
          <Heading fontWeight={'semibold'} pb={'3'}>
            News App
          </Heading>
          <Text fontWeight={'semibold'} color={'blackAlpha.800'}>
            Find out more about our BBC News App
          </Text>
        </Box>
        <Box height='auto' fontWeight={'semibold'}>
          <Heading fontWeight={'semibold'} pb={'3'}>
            Email Us
          </Heading>
          <Text>haveyoursay@bbc.co.uk</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Contact;