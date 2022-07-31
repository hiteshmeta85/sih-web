import TabsLayout from "../_tabsLayout";
import {TabPanel, TabPanels} from "@chakra-ui/react";
import Analytics from "../../../../../components/Analysis/Analytics";
import React from "react";

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