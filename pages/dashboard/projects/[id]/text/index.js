import {TabPanel, TabPanels} from "@chakra-ui/react";
import React from "react";
import TabsLayout from "../_tabsLayout";
import CustomTable from "../../../../../components/Table/CustomTable";
import axios from "axios";

const ProjectTextView = ({twitterData}) => {

  return (
    <TabsLayout defaultIndex={0}>
      <TabPanels bg={"white"}>
        <TabPanel overflowX={'scroll'}>
          {twitterData && <CustomTable data={twitterData}/>}
        </TabPanel>
      </TabPanels>
    </TabsLayout>
  )
}

export default ProjectTextView

export async function getServerSideProps(context) {
  const { id } = context.query;
  let twitterData

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/projects/${id}/text-all`)
    if (res.data) {
      twitterData = res.data.data.twitterData
    }
  } catch (e) {
    twitterData = null
  }


  return {
    props: {
      twitterData
    }
  }
}