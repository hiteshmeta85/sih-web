import EventFlowLayout from "../_layout";
import {Flex, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import VideoPlayer from "../../../components/VideoPlayer/VideoPlayer";

const VideoObjectDetection = () => {
  return (
    <EventFlowLayout
      heading={'STEP 6 - Video Object Detection'}
      progressPercent={60}
      isForwardButtonPresent={false}
    >
      {/* Stats */}
      <SimpleGrid columns={{base: 1, md: 2}} gap={4}>
        <VideoPlayer url={'https://youtu.be/GBIIQ0kP15E'}/>
        <VideoPlayer url={'https://youtu.be/GBIIQ0kP15E'}/>
      </SimpleGrid>

      {/* Heading */}
      <Heading size={'lg'} my={8}>Transcript</Heading>
      <SimpleGrid columns={{base: 1, lg: 2}} gap={4}>
        <Flex flexDir={'column'} gap={3}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nesciunt ratione repellat sunt suscipit,
            totam. Adipisci cum laudantium voluptatem! Consequuntur culpa illum magni, necessitatibus porro praesentium
            quam quas? Sit, voluptatem?
          </Text>
          <Text>
            Accusantium at deserunt exercitationem impedit magni minus rerum sit temporibus. In inventore labore
            laborum ratione saepe! Ad aliquid culpa distinctio dolorem eligendi eum laborum, maiores quae, sapiente soluta
            vero voluptates.
          </Text>
          <Text>
            Culpa cumque dicta eius explicabo hic illum nobis officia repellendus reprehenderit sint veritatis,
            voluptatibus. Dolor fuga iste nam nesciunt nulla repellendus similique voluptas. Animi ea laborum perferendis
            possimus ullam unde?
          </Text>
          <Text>
            Ab accusantium aliquid animi aperiam aut corporis eius enim et laboriosam maxime minus molestiae mollitia
            nisi omnis optio quas quasi ratione rerum sunt suscipit vitae voluptatem voluptates, voluptatum. Alias,
            veniam.
          </Text>
          <Text>
            Accusantium aliquam animi aperiam cumque dolores eaque enim eum illum laudantium maxime modi, quia quidem
            quis quod ratione repellat reprehenderit saepe ut. Enim id nisi possimus tempore ut voluptas, voluptatibus!
          </Text>
        </Flex>
      </SimpleGrid>
    </EventFlowLayout>
  );
};

export default VideoObjectDetection;