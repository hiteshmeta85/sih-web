import TabsLayout from "../_tabsLayout";
import {Flex, TabPanel, TabPanels} from "@chakra-ui/react";
import CreateReportForm from "../../../../../components/Analysis/CreateReportForm";
import PreviousReportTable from "../../../../../components/Analysis/PreviousReportTable";
import React, {useState} from "react";
import FileUploadForm from "../../../../../components/Upload/FileUploadForm";

const ProjectReports = () => {

  const [responseData, setResponseData] = useState({})

  return (
    <TabsLayout defaultIndex={6}>
      <TabPanels bg={"white"}>
        <TabPanel/>
        <TabPanel/>
        <TabPanel/>
        <TabPanel/>
        <TabPanel/>
        <TabPanel/>
        <TabPanel>
          <Flex flexDir={'column'} gap={16}>
            <FileUploadForm title={'Upload File'} url={''} setResponseData={setResponseData}/>
            <CreateReportForm/>
            <PreviousReportTable/>
          </Flex>
        </TabPanel>
      </TabPanels>
    </TabsLayout>
  )
}

export default ProjectReports