import {Box, Divider, Flex, Heading, HStack, Icon, Link, SimpleGrid, Text} from "@chakra-ui/react";
import NextLink from "next/link";
import {socialMediaTypes} from "../../constants/useful-data/socialMediaTypes";

const Footer = () => {

  return (
    <Box bg={'white'}>
      <Box maxW={'container.xl'} mx={'auto'} py={{base: 2, md: 4, lg: 16}} px={{base: 2, md: 4, lg: 8}}>
        <HStack>
          <Heading
            fontWeight={'semibold'}
            fontSize={{base: '2xl', md: '4xl'}}
            whiteSpace={'nowrap'}>
            Contact Details
          </Heading>
          <Divider borderColor={'gray.500'} pt={2}/>
        </HStack>
        <SimpleGrid columns={[1, 1, 2, 4]} spacing='40px' py={8}>
          <Flex gap={4}>
            <>
              {socialMediaTypes.map((item, index) => (
                <Link key={index}><Icon as={item.image} w={8} h={8}/></Link>
              ))}
            </>
          </Flex>
          <Box height='auto' fontWeight={'semibold'}>
            <Heading pb={3} fontSize={{base: 'xl', md: '3xl'}}>
              Need Help?
            </Heading>
            <NextLink href={'/'} passHref>
              <Link>
                Chat with Us
              </Link>
            </NextLink>
          </Box>
          <Box height='auto'>
            <Heading pb={3} fontSize={{base: 'xl', md: '3xl'}}>
              Phone
            </Heading>
            <Box color={'blackAlpha.800'}>
              <Text>Send an SMS or MMS to</Text>
              <Text fontWeight={'semibold'} fontFamily={'Open Sans'}> + 91 9876543210</Text>
            </Box>
          </Box>
          <Box height='auto' fontWeight={'semibold'}>
            <Heading pb={3} fontSize={{base: 'xl', md: '3xl'}}>
              Email Us
            </Heading>
            <Text>homebrew@mail.org</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Footer;