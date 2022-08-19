import TabsLayout from "../_tabsLayout";
import {Box, Flex, Switch, TabPanel, TabPanels, Text} from "@chakra-ui/react";
import React, {useState} from "react";
import FileUploadForm from "../../../../../components/Upload/FileUploadForm";
import {FcAudioFile} from "react-icons/fc";

const ProjectVoices = () => {

  const [responseData, setResponseData] = useState({})
  const [translationLang, setTranslationLang] = useState('en')

  const handleLanguageChange = () => {
    if (translationLang === 'en') {
      setTranslationLang('hindi')
    } else {
      setTranslationLang('en')
    }
  }

  return (
    <TabsLayout defaultIndex={2}>
      <TabPanels bg={"white"}>
        <TabPanel/>
        <TabPanel/>
        <TabPanel>
          <Flex justifyContent={'end'} alignItems={'end'} mb={4} gap={2}>
            <Text>{translationLang === 'en' ? 'English' : 'Hindi'}</Text>
            <Switch size='lg' onChange={handleLanguageChange}/>
          </Flex>
          <FileUploadForm
            title={'Upload Voices'}
            setResponseData={setResponseData}
            url={`https://eb70-203-115-126-34.ngrok.io/api/audio-${translationLang}`}
            label={'Upload Voice'} logo={<FcAudioFile size={'2.5rem'}/>}
          />
          {Object.keys(responseData).length > 0 && <>
            <Text mt={8} fontSize={'xl'} fontWeight={'bold'}>Output: </Text>
            <Box>
              <Box border={'1px solid lightgray'} display={'inline-block'} px={2} py={1} mt={2} rounded={'md'}>
                <Text fontWeight={'bold'}>Transcript: </Text>
                <Text textTransform={'capitalize'}>{responseData.data.textFromAudio}</Text>
              </Box>
            </Box>
            <Box mt={8}>
              <Text fontWeight={'bold'}>MultiLabels: </Text>
              <Flex mt={2} gap={3}>
                {responseData.data.multiLabels.slice(0, 3)
                  .map((label, index) =>
                    <Text key={index} border={'2px solid black'} rounded={'lg'} py={1} px={2}>{label}</Text>
                  )}
              </Flex>
            </Box>
          </>}
        </TabPanel>
      </TabPanels>
    </TabsLayout>
  )
}

export default ProjectVoices