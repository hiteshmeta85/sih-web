import {TabPanel, TabPanels} from "@chakra-ui/react";
import React from "react";
import TabsLayout from "./_tabsLayout";
import Analytics from "../../../../components/Analysis/Analytics";

const ProjectAnalytics = () => {

  return (
    <TabsLayout defaultIndex={5}>
      <TabPanels bg={"white"}>
        <TabPanel/>
        <TabPanel/>
        <TabPanel/>
        <TabPanel/>
        <TabPanel/>
        <TabPanel>
          <Analytics/>
        </TabPanel>
      </TabPanels>
    </TabsLayout>
  )
}

export default ProjectAnalytics