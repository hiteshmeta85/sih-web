import TabsLayout from "../_tabsLayout";
import {Flex, TabPanel, TabPanels} from "@chakra-ui/react";
import CreateReportForm from "../../../../../components/Analysis/CreateReportForm";
import PreviousReportTable from "../../../../../components/Analysis/PreviousReportTable";
import React from "react";
import FileUploadForm from "../../../../../components/Analysis/FileUploadForm";

const ProjectReports = () => {

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
            <FileUploadForm/>
            <CreateReportForm/>
            <PreviousReportTable/>
          </Flex>
        </TabPanel>
      </TabPanels>
    </TabsLayout>
  )
}

export default ProjectReports