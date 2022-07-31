import {TabPanel, TabPanels} from "@chakra-ui/react";
import React from "react";
import TabsLayout from "../_tabsLayout";
import CustomTable from "../../../../../components/Table/CustomTable";

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