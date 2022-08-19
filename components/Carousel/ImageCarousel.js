import React from "react";
import Slider from "react-slick";
import {Box, Image as ChakraImage} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({images}) => {

  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    pauseOnHover: true,
    swipeToSlide: true,
    infinite: false,
    gap: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

export default ImageCarousel

// const ArrowLeft = () => {
//   return (
//     <Image className="slick-arrow" src={BackButtonImage} alt={'Left Arrow'} height={30} width={30}/>
//   )
// }
//
// const ArrowRight = () => {
//   return (
//     <Image className="slick-arrow" src={ForwardButtonImage} alt={'Right Arrow'} height={30} width={30}/>
//   )
// }