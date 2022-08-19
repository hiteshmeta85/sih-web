import TabsLayout from "../_tabsLayout";
import {TabPanel, TabPanels} from "@chakra-ui/react";
import React, {useState} from "react";
import FileUploadForm from "../../../../../components/Upload/FileUploadForm";
import {FcAudioFile} from "react-icons/fc";

const ProjectVoices = () => {

  const [responseData, setResponseData] = useState({})

  return (
    <TabsLayout defaultIndex={2}>
      <TabPanels bg={"white"}>
        <TabPanel/>
        <TabPanel/>
        <TabPanel>
          <FileUploadForm title={'Upload Voices'} setResponseData={setResponseData} url={''} label={'Upload Voice'} logo={<FcAudioFile size={'2rem'}/>}/>
        </TabPanel>
      </TabPanels>
    </TabsLayout>
  )
}

export default ProjectVoices