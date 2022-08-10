import {AiOutlineFileText} from "react-icons/ai";
import React from "react";
import {TbLetterT} from "react-icons/Tb";
import {MdOutlineVideoCameraFront} from "react-icons/md";
import {ImImages} from "react-icons/im";
import {IoIosImages} from "react-icons/io";
import {FaRegObjectGroup} from "react-icons/fa";
import {SiAirplayvideo} from "react-icons/si";
import {RiTranslate2} from "react-icons/ri";
import {BsTranslate} from "react-icons/bs";

export const modelDescriptionData = [
  {
    title: 'Binary Text Classification',
    text: 'BERT Custom',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur commodi consequatur ducimus error est excepturi expedita fugit laboriosam minus nulla pariatur praesentium quod reiciendis, repudiandae tenetur velit veniam voluptatibus?',
    stepCount: 1,
    icon: <TbLetterT size={'4rem'} color={'white'}/>,
    cardBgColor: 'green.300',
    titleColor: 'white',
    textColor: 'black',
    subTextColor: 'black'
  },
  {
    title: 'Multi-Label Text Classification',
    text: 'BERT Custom',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur commodi consequatur ducimus error est excepturi expedita fugit laboriosam minus nulla pariatur praesentium quod reiciendis, repudiandae tenetur velit veniam voluptatibus?',
    stepCount: 2,
    icon: <AiOutlineFileText size={'4rem'} color={'white'}/>,
    cardBgColor: 'cyan.300',
    titleColor: 'white',
    textColor: 'black',
    subTextColor: 'black'
  },
  {
    title: 'Translation Model',
    text: 'NLLB (Dense Distilled)',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur commodi consequatur ducimus error est excepturi expedita fugit laboriosam minus nulla pariatur praesentium quod reiciendis, repudiandae tenetur velit veniam voluptatibus?',
    stepCount: 3,
    icon: <RiTranslate2 size={'4rem'} color={'white'}/>,
    cardBgColor: 'blue.300',
    titleColor: 'white',
    textColor: 'black',
    subTextColor: 'black'
  },
  {
    title: 'Binary Image Classification',
    text: 'CNN Custom',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur commodi consequatur ducimus error est excepturi expedita fugit laboriosam minus nulla pariatur praesentium quod reiciendis, repudiandae tenetur velit veniam voluptatibus?',
    stepCount: 4,
    icon: <ImImages size={'4rem'} color={'white'}/>,
    cardBgColor: 'purple.300',
    titleColor: 'white',
    textColor: 'black',
    subTextColor: 'black'
  },
  {
    title: 'Multi-Label Image Classification',
    text: 'Image Net Custom',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur commodi consequatur ducimus error est excepturi expedita fugit laboriosam minus nulla pariatur praesentium quod reiciendis, repudiandae tenetur velit veniam voluptatibus?',
    stepCount: 5,
    icon: <IoIosImages size={'4rem'} color={'white'}/>,
    cardBgColor: 'red.300',
    titleColor: 'white',
    textColor: 'black',
    subTextColor: 'black'
  },
  {
    title: 'Image Object Detection',
    text: 'Detectron',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur commodi consequatur ducimus error est excepturi expedita fugit laboriosam minus nulla pariatur praesentium quod reiciendis, repudiandae tenetur velit veniam voluptatibus?',
    stepCount: 6,
    icon: <FaRegObjectGroup size={'4rem'} color={'white'}/>,
    cardBgColor: 'teal.300',
    titleColor: 'white',
    textColor: 'black',
    subTextColor: 'black'
  },
  {
    title: 'Binary Video Classification',
    text: 'CNN',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur commodi consequatur ducimus error est excepturi expedita fugit laboriosam minus nulla pariatur praesentium quod reiciendis, repudiandae tenetur velit veniam voluptatibus?',
    stepCount: 7,
    icon: <SiAirplayvideo size={'4rem'} color={'white'}/>,
    cardBgColor: 'orange.300',
    titleColor: 'white',
    textColor: 'black',
    subTextColor: 'black'
  },
  {
    title: 'Video Object Detection',
    text: 'Detectron',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur commodi consequatur ducimus error est excepturi expedita fugit laboriosam minus nulla pariatur praesentium quod reiciendis, repudiandae tenetur velit veniam voluptatibus?',
    stepCount: 8,
    icon: <MdOutlineVideoCameraFront size={'4rem'} color={'white'}/>,
    cardBgColor: 'yellow.300',
    titleColor: 'white',
    textColor: 'black',
    subTextColor: 'black'
  },
  {
    title: 'Audio Speech To Text (EN)',
    text: 'SpeechBrain',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur commodi consequatur ducimus error est excepturi expedita fugit laboriosam minus nulla pariatur praesentium quod reiciendis, repudiandae tenetur velit veniam voluptatibus?',
    stepCount: 9,
    icon: <BsTranslate size={'4rem'} color={'white'}/>,
    cardBgColor: 'gray.400',
    titleColor: 'white',
    textColor: 'black',
    subTextColor: 'black'
  },
  {
    title: 'Audio Speech To Text (Hindi)',
    text: 'WAV2VEC',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur commodi consequatur ducimus error est excepturi expedita fugit laboriosam minus nulla pariatur praesentium quod reiciendis, repudiandae tenetur velit veniam voluptatibus?',
    stepCount: 10,
    icon: <BsTranslate size={'4rem'} color={'white'}/>,
    cardBgColor: 'green.300',
    titleColor: 'white',
    textColor: 'black',
    subTextColor: 'black'
  },
]