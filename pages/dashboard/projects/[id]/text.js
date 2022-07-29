import {TabPanel, TabPanels} from "@chakra-ui/react";
import CustomTable from "../../../../components/Table/CustomTable";
import React from "react";
import TabsLayout from "./_tabsLayout";

const ProjectTextView = () => {

  return (
    <TabsLayout defaultIndex={0}>
      <TabPanels bg={"white"}>
        <TabPanel overflowX={'scroll'}>
          <CustomTable/>
        </TabPanel>
      </TabPanels>
    </TabsLayout>
  )
}

export default ProjectTextView