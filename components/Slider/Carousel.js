import React, {useState} from "react";
import {Box, Button, Flex, Image, Text} from "@chakra-ui/react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {sliderData} from "../../constants/sliderData";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const {image, text, name, designation, company} = sliderData[index];

  const checkNumber = (num) => {
    if (num > sliderData.length - 1) {
      return 0
    }
    if (num < 0) {
      return sliderData.length - 1
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
    <Flex
      w={'100%'}
      h={'100%'}
      pos={'relative'}
    >
      <Image
        w={'100%'}
        h={'100%'}
        objectFit={'cover'}
        src={image.src}
        alt={'image'}
      />
      <Box
        position={'absolute'}
        top={'40%'}
        fontSize={'4xl'}
        left={'5%'}
        right={'5%'}
        fontWeight={800}
      >
        <Text as={'span'} bg={'rgba(240, 234, 190, 0.8)'}>
          <Text as={'span'}>&ldquo;</Text>
          {text}
          <Text as={'span'}>&rdquo;</Text>
        </Text>
      </Box>
      <Flex
        position={'absolute'}
        bottom={'5%'}
        left={'5%'}
        flexDir={'column'}
        gap={1}
      >
        <Text
          fontWeight={700}
          fontSize={'xl'}
          as={'span'}
          bg={'rgba(240, 234, 190, 0.8)'}
          lineHeight={'shorter'}
          px={2}
        >
          {name}
        </Text>
        <Box>
          <Text fontSize={'xl'} fontWeight={600} as={'span'} bg={'rgba(240, 234, 190, 0.8)'} px={2}>{designation}</Text>
          <br/>
          <Text fontSize={'lg'} fontWeight={600} as={'span'} bg={'rgba(240, 234, 190, 0.8)'} px={2}>{company}</Text>
        </Box>
      </Flex>
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
    </Flex>
  );
};

export default Carousel;