import React from "react";
import Slider from "react-slick";
import {Box, Text} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Router from "next/router";

const TweetCarousel = ({data}) => {

  const handleSelectDisaster = async (disasterType) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/start-live-scrape`, {"hashtag": disasterType})
        .then(function (response) {
          if (response) {
            Router.push({pathname: '/live', query: {disaster: disasterType}})
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    } catch (err) {
      console.log(err)
    }
  }

  const settings = {
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    infinite: true,
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
      {data.map((tweet) => tweet.trim())
        .filter((tweet) => tweet !== '')
        .map((item, index) => {
          return (
            <Box key={index} px={1}>
              <Text
                onClick={() => {
                  handleSelectDisaster(item)
                }}
                cursor={'pointer'}
                align={'center'}
                border={"1px solid lightgray"}
                borderRadius={"md"}
                fontWeight={'semibold'}
                p={2}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                gap={2}
                wordBreak={'break-word'}
                _hover={{bg: 'gray.50'}}
                _active={{bg: 'gray.100'}}
              >
                {/*<BsTwitter color={'#1C9BEF'} size={'1.5rem'}/>*/}
                {(item[0] === '#' ? `${item}` : `#${item}`)}
              </Text>
            </Box>
          )
        })}
    </Slider>
  );
}

export default TweetCarousel