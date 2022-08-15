import {AiOutlineFileText} from "react-icons/ai";
import React from "react";
import {MdOutlineVideoCameraFront} from "react-icons/md";
import {ImImages} from "react-icons/im";
import {IoIosImages} from "react-icons/io";
import {FaRegObjectGroup} from "react-icons/fa";
import {SiAirplayvideo} from "react-icons/si";
import {RiTranslate2} from "react-icons/ri";
import {BsTranslate} from "react-icons/bs";
import {BiText} from "react-icons/bi";

export const modelDescriptionData = [
  {
    title: 'Binary Text Classification',
    text: 'BERT Custom',
    subText: 'A large amount of data is scrapped through social media. To identify important tweets, we use the BERT algorithm. This algorithm classifies the tweets into disastrous and non-disastrous segments.',
    stepCount: 1,
    icon: <BiText size={'4rem'} color={'white'}/>,
    cardBgColor: 'green.300',
    titleColor: 'white',
    textColor: 'black',
    subTextColor: 'black'
  },
  {
    title: 'Multi-Label Text Classification',
    text: 'BERT Custom',
    subText: 'In the next step, we classify the tweets into 32 categories. These include categories like Aid related, Rescue related, Food, Shelter,Disaster Types,etc',
    stepCount: 2,
    icon: <AiOutlineFileText size={'4rem'} color={'white'}/>,
    cardBgColor: 'cyan.300',
    titleColor: 'white',
    textColor: 'black',
    subTextColor: 'black'
  },
  {
    title: 'Text Translation Model',
    text: 'NLLB (Dense Distilled)',
    subText: 'Around 200 languages are translated to English using this model. This will help NDRF to understand the tweets which are were tweeted in local languages.',
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
    subText: 'Using CNN Custom Model, images are categorized as disastrous or non-disastrous.',
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
    subText: 'In the next step, we label the images. Around 32 categories are used to label them. These include categories like Aid related, Rescue related, Food, Shelter,Disaster Types,etc',
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
    subText: 'Image Object Detection is implemented to identify humans, vehicles, buildings, animals, and instruments present in the image.',
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
    subText: 'CNN model is used to classify the videos as disastrous or non-disastrous.',
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
    subText: 'Video Object Detection is implement to identify humans, vehicles, buildings, animals, and instruments present in the image.',
    stepCount: 8,
    icon: <MdOutlineVideoCameraFront size={'4rem'} color={'white'}/>,
    cardBgColor: 'yellow.300',
    titleColor: 'white',
    textColor: 'black',
    subTextColor: 'black'
  },
  {
    title: 'Audio Speech To Text (Hindi)',
    text: 'WAV2VEC',
    subText: 'Hindi Language Audio is translated from speech to text using Speechbrain model.',
    stepCount: 9,
    icon: <BsTranslate size={'4rem'} color={'white'}/>,
    cardBgColor: 'green.300',
    titleColor: 'white',
    textColor: 'black',
    subTextColor: 'black'
  },
  {
    title: 'Audio Speech To Text (EN)',
    text: 'SpeechBrain',
    subText: 'English Language Audio is translated from speech to text using Speechbrain model.',
    stepCount: 10,
    icon: <BsTranslate size={'4rem'} color={'white'}/>,
    cardBgColor: 'gray.400',
    titleColor: 'white',
    textColor: 'black',
    subTextColor: 'black'
  },
]