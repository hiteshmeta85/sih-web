import {Box, Divider, Flex, Heading, HStack, Link, SimpleGrid, Text} from "@chakra-ui/react";
import {SocialMediaData} from "./social-media";
import NextLink from "next/link";

const Contact = () => {

  return (
    <Box bg={'white'} mt={{base: 4, md: 8, lg: 10}}>
      <Box maxW={'container.xl'} mx={'auto'} py={{base: 2, md: 4, lg: 16}} px={{base: 2, md: 4, lg: 8}}>
        <HStack>
          <Heading
            fontWeight={'semibold'} fontSize={'2rem'}
            whiteSpace={'nowrap'}>
            Contact Details
          </Heading>
          <Divider borderColor={'gray.500'} pt={2}/>
        </HStack>
        <SimpleGrid columns={[1, 1, 2, 4]} spacing='40px' py={8}>
          <Flex gap={4}>
            <>
              {SocialMediaData.map((item, index) => (
                <Link key={index}>{item.image}</Link>
              ))}
            </>
          </Flex>
          <Box height='auto' fontWeight={'semibold'}>
            <Heading pb={3}>
              Need Help?
            </Heading>
            <NextLink href={'/'} passHref>
              <Link>
                Chat with Us
              </Link>
            </NextLink>
          </Box>
          <Box height='auto'>
            <Heading pb={3}>
              Phone
            </Heading>
            <Box color={'blackAlpha.800'}>
              <Text>Send an SMS or MMS to</Text>
              <Text fontWeight={'semibold'} fontFamily={'Open Sans'}> + 91 9876543210</Text>
            </Box>
          </Box>
          <Box height='auto' fontWeight={'semibold'}>
            <Heading pb={3}>
              Email Us
            </Heading>
            <Text>homebrew@mail.org</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Contact;