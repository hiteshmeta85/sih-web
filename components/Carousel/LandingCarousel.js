import React from "react";
import Slider from "react-slick";
import {Box, Text, Image as ChakraImage} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingCarousel = ({data}) => {

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    pauseOnHover: true,
    swipeToSlide: true,
    infinite: false,
    gap: 4,
  };

  return (
    <Box className={'custom-carousel-style'} maxW={'100%'} maxH={'100%'} objectFit={'cover'}>
    <Slider {...settings}>
      {data.map((item, index) => {
        return (
          <Box key={index} px={1} pos={'relative'} >
            <ChakraImage src={item.image} alt={'Disaster image'} rounded={'lg'}/>
            <Text pos={'absolute'} bottom={'8px'} left={'10px'} alignContent={'center'} color={'white'}>{item.news}</Text>
          </Box>
        )
      })}
    </Slider>
    </Box>
  );
}

export default LandingCarousel
