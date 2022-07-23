import DashboardContainer from "../_layout";
import CustomTable from "../../../components/Table/CustomTable"
import {
  Box,
  Divider,
  Flex, Link,
  SimpleGrid,
  Tab, Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs, Tbody,
  Td,
  Text, Th, Thead,
  Tr
} from "@chakra-ui/react";
import TweetCard from "../../../components/Tweet/TweetCard";
import "@fontsource/open-sans/500.css";
import {Form, Formik} from "formik";
import DatePickerField from "../../../components/DatePicker/DatePicker";
import CustomSubmitButton from "../../../components/Button/CustomSubmitButton";
import reportSchema from "../../../lib/schemas/reportSchema";
import CustomResetButton from "../../../components/Button/CustomResetButton";
import React from "react";
import {AiOutlineEye} from "react-icons/ai";

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
        <TabList overflowX={'scroll'}>
          <Tab>Text</Tab>
          <Tab>Text + Images</Tab>
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
            <SimpleGrid columns={{base: 1, md: 2, lg: 3, "2xl": 4}} gap={{base: 2, lg: 6}} my={2}>
              <>
                {TrendingTweetsData.map((item, index) => {
                  return (
                    <TweetCard key={index} description={item.description} image={item.image} username={item.username}
                               date={item.date}/>
                  )
                })}
              </>
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
            <Formik
              initialValues={{
                startDate: '',
                endDate: '',
              }}
              validationSchema={reportSchema}
              onSubmit={(values, {setSubmitting}) => {
                setSubmitting(false);
                console.log(values)
              }}>
              {({
                handleSubmit, isSubmitting, isValid, dirty, setFieldValue, values
              }) => (
                <Form>
                  <Text as={'span'} fontSize={'xl'} fontWeight={'semibold'} my={1}>Create Report</Text>
                  <Box py={'1px'} bg={'blackAlpha.800'}/>
                  <Text mb={4} mt={8} fontSize={''} fontWeight={'semibold'}>Pick Date Range <Text as={'span'} fontWeight={'light'}>(optional)</Text></Text>
                  <Flex my={4} gap={4} maxW={'lg'}>
                    <DatePickerField name={'startDate'} label={'Start Date'}/>
                    <DatePickerField name={'endDate'} label={'End Date'}/>
                  </Flex>
                  <Flex gap={4}>
                    <CustomSubmitButton handleSubmit={handleSubmit} isSubmitting={isSubmitting} label={'Download Reports'}/>
                    <CustomResetButton label={'Reset'}/>
                  </Flex>
                </Form>
              )}
            </Formik>

            <Box mt={16}>
              <Text as={'span'} fontSize={'xl'} fontWeight={'semibold'} my={1}>Previous Reports</Text>
              <Box py={'1px'} bg={'blackAlpha.800'} mb={8}/>
              <TableContainer>
                <Table variant='simple'>
                  <Thead>
                    <Tr>
                      <Th>Report Id</Th>
                      <Th>Created On</Th>
                      <Th isNumeric>View Report</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>1</Td>
                      <Td>23 July 2022</Td>
                      <Td isNumeric>
                        <Flex alignItems={'center'} justifyContent={'end'} gap={2}>
                          <AiOutlineEye/>
                          <Link href={'/'} color={'blue'}>View Report</Link>
                        </Flex>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>2</Td>
                      <Td>24 July 2022</Td>
                      <Td isNumeric>
                        <Flex alignItems={'center'} justifyContent={'end'} gap={2}>
                          <AiOutlineEye/>
                          <Link href={'/'} color={'blue'}>View Report</Link>
                        </Flex>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>3</Td>
                      <Td>25 July 2022</Td>
                      <Td isNumeric>
                        <Flex alignItems={'center'} justifyContent={'end'} gap={2}>
                          <AiOutlineEye/>
                          <Link href={'/'} color={'blue'}>View Report</Link>
                        </Flex>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </DashboardContainer>
  )
}

export default ViewIndividualProject