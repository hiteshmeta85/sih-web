import React from "react";
import Slider from "react-slick";
import {Box, Flex, Text} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsTwitter} from "react-icons/bs";

const TweetCarousel = ({data}) => {

  const settings = {
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true,
    gap: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
      {data.map((item, index) => {
        return (
          <Box key={index} px={1}>
            <Text
              align={'center'}
              border={"1px solid lightgray"}
              borderRadius={"md"}
              fontWeight={'semibold'}
              py={2}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              gap={2}
            >
              <BsTwitter color={'#1C9BEF'}/> #{item}
            </Text>
          </Box>
        )
      })}
    </Slider>
  );
}

export default TweetCarousel