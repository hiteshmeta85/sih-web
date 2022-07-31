import TabsLayout from "../_tabsLayout";
import {TabPanel, TabPanels} from "@chakra-ui/react";
import React from "react";

const ProjectMap = () => {

  return (
    <TabsLayout defaultIndex={4}>
      <TabPanels bg={"white"}>
        <TabPanel/>
        <TabPanel/>
        <TabPanel/>
        <TabPanel/>
        <TabPanel>
          <p>Map</p>
        </TabPanel>
      </TabPanels>
    </TabsLayout>
  )
}

export default ProjectMap