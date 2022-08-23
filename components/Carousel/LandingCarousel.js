import React, {useState} from "react";
import {Box, Button, Flex, Image, Text} from "@chakra-ui/react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {sampleDisasters} from "../../constants/useful-data/sampleDisasters";

const LandingCarousel = () => {
  const [index, setIndex] = useState(0);
  const {image, news} = sampleDisasters[index];

  const checkNumber = (num) => {
    if (num > sampleDisasters.length - 1) {
      return 0
    }
    if (num < 0) {
      return sampleDisasters.length - 1
    }
    return num
  };

  const nextSlider = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevSlider = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <Box
      w={'100%'}
      h={'500px'}
      pos={'relative'}
    >
      <Image
        w={'100%'}
        h={'100%'}
        objectFit={'cover'}
        src={image}
        alt={'image'}
      />
      <Box
        position={'absolute'}
        fontSize={'3xl'}
        bottom={'5%'}
        left={'8%'}
        right={'15%'}
        fontWeight={800}
      >
        <Text bg={'rgba(255,255,0, 0.9)'} as={'span'} px={4} py={"0.2rem"}>
          <Text as={'span'}>&ldquo;</Text>
          {news}
          <Text as={'span'}>&rdquo;</Text>
        </Text>
      </Box>
      <Flex
        position={'absolute'}
        bottom={'5%'}
        right={'5%'}
        gap={5}
      >
        <Button
          w={{base: '40px', md: '50px'}}
          h={{base: '40px', md: '50px'}}
          borderRadius={'50%'}
          variant={'outline'}
          cursor={'pointer'}
          _hover={{bg: 'blackAlpha.200'}}
          _active={{bg: 'white'}}
          onClick={prevSlider}
          size={{base: '2rem'}}
          borderWidth={'2px'}
        >
          <FaArrowLeft color="white"/>
        </Button>

        <Button
          w={{base: '40px', md: '50px'}}
          h={{base: '40px', md: '50px'}}
          borderRadius={'50%'}
          variant={'outline'}
          _hover={{bg: 'blackAlpha.200'}}
          _active={{bg: 'white'}}
          cursor={'pointer'}
          size={{base: '2rem'}}
          onClick={nextSlider}
          borderWidth={'2px'}
        >
          <FaArrowRight color="white"/>
        </Button>
      </Flex>
    </Box>
  )
}

export default LandingCarousel
