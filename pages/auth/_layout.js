import {Box, Flex} from "@chakra-ui/react";
import Carousel from "../../components/Slider/Carousel";
import React, {useState} from "react";
import BackButton from "../../components/Button/BackButton";

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
          mx={{base: 4, lg: 8}}
          my={{base: 4, lg: 8}}
          fontWeight={'semibold'}
          onMouseOver={()=>{setIsBackButtonHovered(true)}}
          onMouseOut={()=>{setIsBackButtonHovered(false)}}
        >
          <BackButton isBackButtonHovered={isBackButtonHovered}/>
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