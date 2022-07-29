import {TabPanel, TabPanels} from "@chakra-ui/react";
import React from "react";
import TabsLayout from "./_tabsLayout";

const ProjectVideos = () => {

  return (
    <TabsLayout defaultIndex={3}>
      <TabPanels bg={"white"}>
        <TabPanel/>
        <TabPanel/>
        <TabPanel/>
        <TabPanel>
          <p>Videos</p>
        </TabPanel>
      </TabPanels>
    </TabsLayout>
  )
}

export default ProjectVideos