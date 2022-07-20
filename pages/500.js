import FiveHundredError from "../public/images/500.jpg"
import Image from "next/image";
import {Box, Flex} from "@chakra-ui/react";
import BackButton from "../components/Button/BackButton";
import {useState} from "react";

export default function Custom500() {
  const [isBackButtonHovered, setIsBackButtonHovered] = useState(false)

  return (
    <Flex justifyContent={'center'} alignItems={'center'} pos={'relative'} h={'100vh'}>
      <Box maxW={'container.lg'}>
        <Image src={FiveHundredError} alt={'500 Image'} height={1200} objectFit={'contain'}/>
      </Box>
      <Box
        pos={'absolute'}
        top={{base: 4, lg: 8}}
        left={{base: 4, lg: 8}}
        fontWeight={'semibold'}
        onMouseOver={() => {setIsBackButtonHovered(true)}}
        onMouseOut={() => {setIsBackButtonHovered(false)}}
      >
        <BackButton isBackButtonHovered={isBackButtonHovered}/>
      </Box>
    </Flex>
  )
}