import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModelDescriptionCard from "../Card/ModelDescriptionCard";

const ModelDescriptionCarousel = ({data}) => {

  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // autoplay: true,
    // autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true,
    infinite: false,
    adaptiveHeight: false,
    gap: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className={'custom-carousel-style'}>
      <Slider {...settings}>
        {data.map((item, index) => {
          const {text, title, stepCount, icon, cardBgColor, titleColor, textColor, subText, subTextColor} = item
          return (
            <ModelDescriptionCard
              key={index}
              text={text}
              subText={subText}
              title={title}
              stepCount={stepCount}
              icon={icon}
              cardBgColor={cardBgColor}
              titleColor={titleColor}
              textColor={textColor}
              subTextColor={subTextColor}
            />
          )
        })}
      </Slider>
    </div>
  );
}

export default ModelDescriptionCarousel