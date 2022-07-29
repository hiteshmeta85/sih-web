import {TabPanel, TabPanels} from "@chakra-ui/react";
import React from "react";
import TabsLayout from "./_tabsLayout";

const ProjectVoices = () => {

  return (
    <TabsLayout defaultIndex={2}>
      <TabPanels bg={"white"}>
        <TabPanel/>
        <TabPanel/>
        <TabPanel>
          <p>Voices</p>
        </TabPanel>
      </TabPanels>
    </TabsLayout>
  )
}

export default ProjectVoices