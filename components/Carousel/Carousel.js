import React from "react";
import Slider from "react-slick";
import {Box, Image as ChakraImage} from "@chakra-ui/react";
import BackButtonImage from "./BackButton.svg";
import ForwardButtonImage from "./ForwardButton.svg"
import Image from "next/image";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({images}) => {

  const ArrowLeft = () => {
    return (
      <Image className="slick-arrow" src={BackButtonImage} alt={'Left Arrow'} height={30} width={30}/>
    )
  }

  const ArrowRight = () => {
    return (
      <Image className="slick-arrow" src={ForwardButtonImage} alt={'Right Arrow'} height={30} width={30}/>
    )
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    gap: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {images.map((item, index) => {
        return (
          <Box key={index} px={1}>
            <ChakraImage src={item} alt={'object detected image'} rounded={'lg'}/>
          </Box>
        )
      })}
    </Slider>
  );
}

export default Carousel