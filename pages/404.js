import FourOhFourImage from "../public/images/404.jpg"
import Image from "next/image";
import {Box, Flex} from "@chakra-ui/react";
import BackButton from "../components/Button/BackButton";
import {useState} from "react";

export default function Custom404() {
  const [isBackButtonHovered, setIsBackButtonHovered] = useState(false)

  return (
    <Flex justifyContent={'center'} alignItems={'center'} pos={'relative'} minH={'100vh'}>
      <Box maxW={'container.lg'}>
        <Image src={FourOhFourImage} alt={'404 Image'} height={1800} objectFit={'contain'}/>
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