import EventFlowLayout from "../_layout";
import {Box, Stack, Text} from "@chakra-ui/react";
import TweetCarousel from "../../../components/Carousel/TweetCarousel";
import React from "react";

const IndividualTextAnalysis = () => {
  return (
    <EventFlowLayout
      heading={'STEP 3 - Individual Text Analysis'}
      progressPercent={30}
      isForwardButtonPresent={false}
    >
      <Box
        maxW={'container.md'}
        w={'full'}
        p={6}
        overflow={'hidden'}
        borderLeft={"2px solid black"}
        mb={4}
      >
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Tweet
          </Text>
          {/*<Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Boost your conversion rate
          </Heading>*/}
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
        </Stack>
        <Stack direction={'column'} spacing={0} fontSize={'sm'} mt={6}>
          <Text fontWeight={600}>Achim Rolle</Text>
          <Text color={'gray.500'}>Feb 08, 2021</Text>
        </Stack>
      </Box>
      <Box mt={12}>
        <Text fontWeight={'bold'} fontSize={'xl'}>Labels and Entities</Text>
        <Box py={4} px={8}>
          <TweetCarousel data={['new', 'trending', 'flood', 'emergency', 'xyz', 'abx']}/>
        </Box>
      </Box>
    </EventFlowLayout>
  );
};

export default IndividualTextAnalysis;