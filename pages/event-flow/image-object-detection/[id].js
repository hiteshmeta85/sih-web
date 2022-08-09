import EventFlowLayout from "../_layout";
import {Box, Flex, Heading, Image, SimpleGrid, Text} from "@chakra-ui/react";
import ImageCarousel from "../../../components/Carousel/ImageCarousel";
import Badge from "../../../components/Badge/Badge";
import React from "react";

const ImageObjectDetection = () => {

  const labels = ['emergency', 'rescue', 'doctor', 'hospital']

  const images = [
    'https://images.unsplash.com/photo-1617608916739-0c752fe94bc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGRpc2FzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1559060035-572b2e659ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGRpc2FzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1617349554459-c810ef32ca62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGRpc2FzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1599689018459-fcf807a9eceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1599689018459-fcf807a9eceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1599689018459-fcf807a9eceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1599689018459-fcf807a9eceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1599689018459-fcf807a9eceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1599689018459-fcf807a9eceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1599689018459-fcf807a9eceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  ];

  return (
    <EventFlowLayout
      heading={'STEP 5 - Image Object Detection'}
      progressPercent={50}
      isForwardButtonPresent={false}
    >
      <SimpleGrid columns={{base: 1, md: 2}} gap={4} px={1}>
        <Image
          src={'https://images.unsplash.com/photo-1599689018459-fcf807a9eceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
          alt={'object detected image'}
          rounded={'lg'}
        />
        <Box>
          <Heading>Labels And Associated Entities</Heading>
          <Flex flexDir={'column'} my={4} gap={4}>
            <>
              {labels.map((item, index) => {
                return (
                  <Box key={index} maxW={'2xs'}>
                    <Badge label={item}/>
                  </Box>
                )
              })}
            </>
          </Flex>
        </Box>
      </SimpleGrid>

      <Box mt={12}>
        <ImageCarousel images={images}/>
      </Box>
    </EventFlowLayout>
  );
};

export default ImageObjectDetection;