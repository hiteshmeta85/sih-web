import DashboardContainer from "../_layout";
import CustomTable from "../../../components/Table/CustomTable"
import {SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import TweetCard from "../../../components/Tweet/TweetCard";
import "@fontsource/open-sans/500.css";

const TrendingTweetsData = [
  {
    id: 1,
    username: 'hiteshmeta',
    date: '12PM, 16 July 2022',
    title: 'Lorem ipsum dolor sit amet',
    description: 'Elit duis tristique sollicitudin nibh sit amet commodo. Magna etiam tempor orci eu lobortis elementum nibh. Cras pulvinar mattis nunc sed. Ut tortor pretium viverra suspendisse potenti. Tempus imperdiet nulla malesuada pellentesque elit.',
    image: 'https://images.unsplash.com/photo-1622267462659-cc8f68a666bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
  },
  {
    id: 2,
    username: 'hiteshmeta',
    date: '12PM, 16 July 2022',
    title: 'Consectetur adipiscing elit, sed do',
    description: 'Elit duis tristique sollicitudin nibh sit amet commodo. Magna etiam tempor orci eu lobortis elementum nibh. Cras pulvinar mattis nunc sed. Ut tortor pretium viverra suspendisse potenti. Tempus imperdiet nulla malesuada pellentesque elit.',
    image: 'https://images.hindustantimes.com/img/2021/10/26/550x309/efd46442-3689-11ec-8ebc-44dc78da1a73_1635272895322.jpg'
  },
  {
    id: 3,
    username: 'hiteshmeta',
    date: '12PM, 16 July 2022',
    title: 'Tempor incididunt ut labore et',
    description: 'Elit duis tristique sollicitudin nibh sit amet commodo. Magna etiam tempor orci eu lobortis elementum nibh. Cras pulvinar mattis nunc sed. Ut tortor pretium viverra suspendisse potenti. Tempus imperdiet nulla malesuada pellentesque elit.',
    image: 'https://images.unsplash.com/photo-1541770188093-e6d1c87a59b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2912&q=80'
  },
  {
    id: 4,
    username: 'hiteshmeta',
    date: '12PM, 16 July 2022',
    title: 'At volutpat diam ut venenatis tellus',
    description: 'Elit duis tristique sollicitudin nibh sit amet commodo. Magna etiam tempor orci eu lobortis elementum nibh. Cras pulvinar mattis nunc sed. Ut tortor pretium viverra suspendisse potenti. Tempus imperdiet nulla malesuada pellentesque elit.',
    image: 'https://cdn.downtoearth.org.in/library/large/2019-09-12/0.80168200_1568290445_id-twitter.jpg'
  },
  {
    id: 5,
    username: 'hiteshmeta',
    date: '12PM, 16 July 2022',
    title: 'Leo urna molestie at elementum eu',
    description: 'Elit duis tristique sollicitudin nibh sit amet commodo. Magna etiam tempor orci eu lobortis elementum nibh. Cras pulvinar mattis nunc sed. Ut tortor pretium viverra suspendisse potenti. Tempus imperdiet nulla malesuada pellentesque elit.',
    image: 'https://images.unsplash.com/photo-1519071711965-f84a1482a05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
  },
  {
    id: 6,
    username: 'hiteshmeta',
    date: '12PM, 16 July 2022',
    title: ' Vulputate sapien nec sagittis aliquam',
    description: 'Elit duis tristique sollicitudin nibh sit amet commodo. Magna etiam tempor orci eu lobortis elementum nibh. Cras pulvinar mattis nunc sed. Ut tortor pretium viverra suspendisse potenti. Tempus imperdiet nulla malesuada pellentesque elit.',
    image: 'https://images.unsplash.com/photo-1536245344390-dbf1df63c30a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80'
  },
];

const ViewIndividualProject = () => {

  return (
    <DashboardContainer title={"Detailed Analysis"}>

      <Tabs borderRadius={"md"}>
        <TabList>
          <Tab>Tweets</Tab>
          <Tab>Tweets + Images</Tab>
          <Tab>Voices</Tab>
          <Tab>Videos</Tab>
          <Tab>Map</Tab>
          <Tab>Statistics</Tab>
          <Tab>Reports</Tab>
        </TabList>

        <TabPanels bg={"white"}>
          <TabPanel overflowX={'scroll'}>
            <CustomTable/>
          </TabPanel>
          <TabPanel bg={'#F5F5F5'} px={0}>
            <SimpleGrid columns={{base: 1, md: 2, lg: 3, "2xl": 4}} gap={{base:2,lg:6}} my={2}>
            {TrendingTweetsData.map((item, index) => {
              return (
                <TweetCard key={index} description={item.description} image={item.image} username={item.username} date={item.date}/>
              )
            })}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <p>Voices</p>
          </TabPanel>
          <TabPanel>
            <p>Videos</p>
          </TabPanel>
          <TabPanel>
            <p>Map</p>
          </TabPanel>
          <TabPanel>
            <p>Statistics</p>
          </TabPanel>
          <TabPanel>
            <p>Download Reports</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </DashboardContainer>
  )
}

export default ViewIndividualProject