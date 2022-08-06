import React from 'react';
import EventFlowLayout from "./_layout";
import {Heading, SimpleGrid} from "@chakra-ui/react";
import StatCard from "../../components/Stat/StatCard";
import VideoPlusTweetCard from '../../components/Card/VideoPlusTweetCard';

export const BinaryAudioVideoData = [
  {
      id: 1,
      username: "ndrfhq",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nesciunt ratione repellat sunt suscipit, totam. Adipisci cum laudantium voluptatem! Consequuntur culpa illum magni.",
      transcript: "Accusantium at deserunt exercitationem impedit magni minus rerum sit temporibus. In inventore labore laborum ratione saepe! Ad aliquid culpa distinctio dolorem eligendi eum laborum, maiores quae",
      url: " https://www.youtube.com/watch?v=GePs-zWeS2o",
      audio: "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav",
      date: '4 August 2022, Thursday', 
  },
  {
      id: 2,
      username: "ndrfhq",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nesciunt ratione repellat sunt suscipit, totam. Adipisci cum laudantium voluptatem! Consequuntur culpa illum magni.",
      transcript: "Accusantium at deserunt exercitationem impedit magni minus rerum sit temporibus. In inventore labore laborum ratione saepe! Ad aliquid culpa distinctio dolorem eligendi eum laborum, maiores quae",
      url: " https://www.youtube.com/watch?v=GePs-zWeS2o",
      audio: "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav",
      date: '4 August 2022, Thursday', 
  },
  {
      id: 3,
      username: "ndrfhq",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nesciunt ratione repellat sunt suscipit, totam. Adipisci cum laudantium voluptatem! Consequuntur culpa illum magni.",
      transcript: "Accusantium at deserunt exercitationem impedit magni minus rerum sit temporibus. In inventore labore laborum ratione saepe! Ad aliquid culpa distinctio dolorem eligendi eum laborum, maiores quae",
      url: " https://www.youtube.com/watch?v=GePs-zWeS2o",
      audio: "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav",
      date: '4 August 2022, Thursday', 
  },
  {
      id: 4,
      username: "ndrfhq",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nesciunt ratione repellat sunt suscipit, totam. Adipisci cum laudantium voluptatem! Consequuntur culpa illum magni.",
      transcript: "Accusantium at deserunt exercitationem impedit magni minus rerum sit temporibus. In inventore labore laborum ratione saepe! Ad aliquid culpa distinctio dolorem eligendi eum laborum, maiores quae",
      url: " https://www.youtube.com/watch?v=GePs-zWeS2o",
      audio: "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav",
      date: '4 August 2022, Thursday', 
  },
  {
      id: 5,
      username: "ndrfhq",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nesciunt ratione repellat sunt suscipit, totam. Adipisci cum laudantium voluptatem! Consequuntur culpa illum magni.",
      transcript: "Accusantium at deserunt exercitationem impedit magni minus rerum sit temporibus. In inventore labore laborum ratione saepe! Ad aliquid culpa distinctio dolorem eligendi eum laborum, maiores quae",
      url: " https://www.youtube.com/watch?v=GePs-zWeS2o",
      audio: "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav",
      date: '4 August 2022, Thursday', 
  },
  {
      id: 6,
      username: "ndrfhq",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nesciunt ratione repellat sunt suscipit, totam. Adipisci cum laudantium voluptatem! Consequuntur culpa illum magni.",
      transcript: "Accusantium at deserunt exercitationem impedit magni minus rerum sit temporibus. In inventore labore laborum ratione saepe! Ad aliquid culpa distinctio dolorem eligendi eum laborum, maiores quae",
      url: " https://www.youtube.com/watch?v=GePs-zWeS2o",
      audio: "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav",
      date: '4 August 2022, Thursday', 
  },
  
]

const BinaryVideoClassification = () => {
  return (
    <EventFlowLayout
      heading={'STEP 6 - Binary Video Classification '}
      progressPercent={60}
      forwardLink={'/event-flow/voice-analysis'}
    >
      {/* Stats */}
      <SimpleGrid columns={{base: 2, md: 4}} gap={4}>
        <StatCard label={'Total No of Videos'} value={250} cardBgColor={'blackAlpha.800'} titleColor={'white'}/>
        <StatCard label={'Total No of Disastrous Videos'} value={150} cardBgColor={'#F04A4A'} titleColor={'white'} subTextColor={'white'}/>
        <StatCard label={'Total No of Non-Disastrous Videos'} value={100} cardBgColor={'#3798F1'} titleColor={'white'} subTextColor={'white'}/>
      </SimpleGrid>

      {/* Heading 1 */}
      <Heading size={'lg'} my={8}>Disastrous Videos</Heading>
      <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={4}>
        <>
           {BinaryAudioVideoData.map((item, index) => {
            return (
            <VideoPlusTweetCard
            key={index}
            url={item.url}
            username={item.username}
            text={item.text}
            label={'Transcript'}
            transcript={item.transcript}
            date={item.date}
            >
            </VideoPlusTweetCard>
            )
           })}
        </>
      </SimpleGrid>

      {/* Heading 2 */}
      <Heading size={'lg'} my={8}>Non-Disastrous Videos</Heading>
      <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={4}>
      <>
           {BinaryAudioVideoData.map((item, index) => {
            return (
            <VideoPlusTweetCard
            key={index}
            url={item.url}
            username={item.username}
            text={item.text}
            date={item.date}
            >
            </VideoPlusTweetCard>
            )
           })}
        </>
      </SimpleGrid>
    </EventFlowLayout>
  );
};

export default BinaryVideoClassification;