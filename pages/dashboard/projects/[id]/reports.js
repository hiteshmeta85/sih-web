import {Flex, TabPanel, TabPanels} from "@chakra-ui/react";
import React from "react";
import TabsLayout from "./_tabsLayout";
import CreateReportForm from "../../../../components/Analysis/CreateReportForm";
import PreviousReportTable from "../../../../components/Analysis/PreviousReportTable";

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
            <CreateReportForm/>
            <PreviousReportTable/>
          </Flex>
        </TabPanel>
      </TabPanels>
    </TabsLayout>
  )
}

export default ProjectReports