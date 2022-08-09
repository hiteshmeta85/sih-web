import {Box, Flex, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import EventFlowLayout from "../_layout";
import Badge from "../../../components/Badge/Badge";
import AudioPlayer from "../../../components/AudioPlayer/AudioPlayer";

const NoiseReductionAndTranslation = () => {

  const labels = ['emergency', 'rescue', 'doctor', 'hospital']

  return (
    <EventFlowLayout
      heading={'STEP 7 - Noise Reduction and Translation'}
      progressPercent={60}
      isForwardButtonPresent={false}
    >
      {/* Stats */}
      <SimpleGrid columns={{base: 1, md: 2}} gap={4}>
        <Box border={'2px solid black'} rounded={'lg'} p={4}>
          <Box>
            <Text fontWeight={'bold'} fontSize={'xl'} mb={2}>Original Audio</Text>
            <AudioPlayer src={'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav'}/>
          </Box>
          <Box mt={8}>
            <Text fontWeight={'bold'} fontSize={'xl'} mb={2}>Noise Reduced Audio</Text>
            <AudioPlayer src={'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav'}/>
          </Box>
        </Box>
        <Box>
          <Heading size={'lg'}>Labels And Associated Entities</Heading>
          <Flex flexDir={'column'} my={4} gap={4}>
            <>
              {labels.map((item, index) => {
                return (
                  <Box key={index} maxW={'2xs'}>
                    <Badge label={item}/>
                  </Box>
                )
              })}
            </>
          </Flex>
        </Box>
      </SimpleGrid>

      {/* Translation And Transcript */}
      <SimpleGrid columns={{base: 1, lg: 2}} gap={4}>
        <Flex flexDir={'column'} gap={3}>
          <Heading size={'lg'} mt={8}>Transcript</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nesciunt ratione repellat sunt suscipit,
            totam. Adipisci cum laudantium voluptatem! Consequuntur culpa illum magni, necessitatibus porro praesentium
            quam quas? Sit, voluptatem?
          </Text>
          <Text>
            Accusantium at deserunt exercitationem impedit magni minus rerum sit temporibus. In inventore labore
            laborum ratione saepe! Ad aliquid culpa distinctio dolorem eligendi eum laborum, maiores quae, sapiente
            soluta vero voluptates.
          </Text>
          <Text>
            Culpa cumque dicta eius explicabo hic illum nobis officia repellendus reprehenderit sint veritatis,
            voluptatibus. Dolor fuga iste nam nesciunt nulla repellendus similique voluptas. Animi ea laborum
            perferendis
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
        <Flex flexDir={'column'} gap={3}>
          <Heading size={'lg'} mt={8}>Translation</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nesciunt ratione repellat sunt suscipit,
            totam. Adipisci cum laudantium voluptatem! Consequuntur culpa illum magni, necessitatibus porro praesentium
            quam quas? Sit, voluptatem?
          </Text>
          <Text>
            Accusantium at deserunt exercitationem impedit magni minus rerum sit temporibus. In inventore labore
            laborum ratione saepe! Ad aliquid culpa distinctio dolorem eligendi eum laborum, maiores quae, sapiente
            soluta vero voluptates.
          </Text>
          <Text>
            Culpa cumque dicta eius explicabo hic illum nobis officia repellendus reprehenderit sint veritatis,
            voluptatibus. Dolor fuga iste nam nesciunt nulla repellendus similique voluptas. Animi ea laborum
            perferendis
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

export default NoiseReductionAndTranslation;