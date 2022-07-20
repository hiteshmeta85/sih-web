import {Box, Flex, Link, Text} from "@chakra-ui/react";
import NextLink from "next/link";
import Carousel from "../../components/Slider/Carousel";
import {IoIosArrowRoundBack} from "react-icons/io";
import React, {useState} from "react";

const AuthLayout = ({children}) => {
  const [isBackButtonHovered, setIsBackButtonHovered] = useState(false)

  return (
    <Flex
      height={"100vh"}
      alignItems={"stretch"}
    >
      <Box
        flex={3}
        overflowY={"scroll"}
        maxW={"container.sm"}
        mx={"auto"}
        pos={'relative'}
      >
        <Box
          pos={'absolute'}
          mx={{base: 4, lg: 16}}
          my={{base: 4, lg: 8}}
          fontWeight={'semibold'}
          onMouseOver={()=>{setIsBackButtonHovered(true)}}
          onMouseOut={()=>{setIsBackButtonHovered(false)}}
        >
          <NextLink href={'/'} passHref>
            <Link
              display={'flex'}
              alignItems={'center'}
              gap={2}
              textUnderlineOffset={2}
            >
              <Text as={'span'} className={isBackButtonHovered ? 'horizontal-bounce' : ''}><IoIosArrowRoundBack/></Text>Go Back</Link>
          </NextLink>
        </Box>
        {children}
      </Box>
      <Flex
        flex={5}
        height={"100vh"}
        pos={"relative"}
        display={{base:"none",lg:"flex"}}
      >
        <Carousel/>
      </Flex>
    </Flex>
  );
};

export default AuthLayout;