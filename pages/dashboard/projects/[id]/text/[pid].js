import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, {useState} from "react";
import {PieChart} from "../../../../../components/Charts/PieChart";
import {PieChartData} from "../../../../../components/Analysis/Analytics";
import {useRouter} from "next/router";
import Badge from "../../../../../components/Badge/Badge";
import IndividualTweetAnalysisLayout from "../_individualTweetAnalysisLayout";
import axios from "axios";
import moment from "moment";
import {BiLink} from "react-icons/bi";
import {FaQuoteLeft} from "react-icons/fa";

const labels = [
  {
    id: 1,
    label: "flood",
  },
  {
    id: 2,
    label: "earthquake",
  },
  {
    id: 3,
    label: "storm",
  },
  {
    id: 4,
    label: "wildfire",
  },
  {
    id: 5,
    label: "earthquake",
  },
  {
    id: 6,
    label: "flood",
  },
  {
    id: 7,
    label: "wildfire",
  },
  {
    id: 8,
    label: "storm",
  },
  {
    id: 9,
    label: "earthquake",
  },
  {
    id: 10,
    label: "flood",
  },
];

const IndividualTextAnalysis = () => {

  const router = useRouter()
  const {pid} = router.query
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [claims, setClaims] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSubmit = (value) => {
    setIsSubmitting(true)
    axios.get(`https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${encodeURIComponent(value)}&key=AIzaSyBsMtEU0B0j12lwr1aomRRCTHrrLKz5FbU`)
      .then(res => {
        setClaims(res.data.claims)
        onOpen()
      })
      .catch(e => console.log(e))
    setIsSubmitting(false)
  }

  return (
    <IndividualTweetAnalysisLayout
      title={'Individual Analysis - Text'}
      rightSection={
        <Box p={4} border={"1px solid lightgray"} borderRadius={"md"}><PieChart data={PieChartData}/></Box>
    }
    >
      <Grid gap={8}>
        <GridItem p={2} px={4} border={"1px solid lightgray"} borderRadius={"md"}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque nisl eros, pulvinar facilisis justo mollis, auctor
            consequat urna. Morbi a bibendum metus. Donec scelerisque
            sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
            in pretium orci vestibulum eget. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Duis pharetra luctus lacus ut vestibulum.
            Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar
            vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id
            vel leo. Integer feugiat faucibus libero, at maximus nisl
            suscipit posuere. Morbi nec enim nunc. Phasellus bibendum
            turpis ut ipsum egestas, sed sollicitudin elit convallis.
            Cras pharetra mi tristique sapien vestibulum lobortis. Nam
            eget bibendum metus, non dictum mauris. Nulla at tellus
            sagittis, viverra est a, bibendum metus.
          </Text>
        </GridItem>
        <Button
          onClick={claims.length > 0 ? () => { onOpen() } : () => handleSubmit('assam flood')}
          bg={'blackAlpha.800'}
          _hover={{bg: 'blackAlpha.700'}}
          _active={{bg: 'blackAlpha.800'}}
          color={'white'}
          disabled={isSubmitting}
        >
          Fact Check
        </Button>
        <GridItem>
          <Progress
            border={"1px solid lightgray"}
            borderRadius={"md"}
            colorScheme="green"
            size="lg"
            value={40}
          />
        </GridItem>
        <GridItem>
          <SimpleGrid columns={{base: 2, md: 3}} gap={4} py={2}>
            <>
              {labels.map((item, index) => {
                return (
                  <Badge label={item.label} key={index}/>
                );
              })}
            </>
          </SimpleGrid>
        </GridItem>
      </Grid>

    {/* Modal */}
      <Modal onClose={()=> {onClose()}} size={'xl'} isOpen={isOpen} scrollBehavior={'inside'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fact Check</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir={'column'} gap={4}>
              <>
                {claims.map((item, index) => {
                  return (
                    <Flex key={index} flexDir={'column'} gap={2}>
                      {/* Claim */}
                      <Flex alignItems={'center'} gap={2}>
                        <FaQuoteLeft mb={2}/>
                        <Text fontWeight={'bold'}>Claim: </Text>
                      </Flex>
                      <Text><Text as={'span'} fontWeight={'bold'}>Text:</Text> {item.text}</Text>
                      <Text><Text fontWeight={'bold'} as={'span'}>Claimant:</Text> {item.claimant}</Text>
                      <Text fontSize={'sm'}>Claim Date: {moment(item.claimDate).format('ll')}</Text>
                      {/* Claim Review */}
                      {item.claimReview.length > 0 && <>
                        <Divider maxW={48}/>
                        <Text fontWeight={'bold'}>Claim Review: </Text>
                        <Text><Text as={'span'} fontWeight={'bold'}>Title:</Text> {item.claimReview[0].title}</Text>
                        <Text alignSelf={'start'} as={'span'} px={2} py={1} bg={'gray.100'} textUnderlineOffset={4} border={'1px solid black'} rounded={'sm'}>Rating: {item.claimReview[0].textualRating}</Text>
                        <Flex justifyContent={'space-between'} mt={2}>
                          <Text fontSize={'sm'}>{moment(item.claimReview[0].reviewDate).format('ll')}</Text>
                          <Flex alignItems={'center'} gap={2}>
                            <Link target={'_blank'} href={item.claimReview[0].url} cursor={'pointer'} color={'gray.600'}><BiLink/></Link>
                            <Text fontSize={'sm'} fontWeight={'bold'}>Publisher: {item.claimReview[0].publisher.name}</Text>
                          </Flex>
                        </Flex>
                      </>}
                      <Divider/>
                    </Flex>
                  )
                })}
              </>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </IndividualTweetAnalysisLayout>
  );
};

export default IndividualTextAnalysis;