import DashboardContainer from "../../_layout";
import {Link, Tab, TabList, Tabs} from "@chakra-ui/react";
import React from "react";
import {useRouter} from "next/router";
import NextLink from "next/link";

const TabsLayout = ({children, defaultIndex}) => {

  const router = useRouter()
  const { id } = router.query

  return (
    <DashboardContainer title={"Detailed Analysis"}>

      <Tabs borderRadius={"md"} defaultIndex={defaultIndex}>
        <TabList overflowX={'scroll'}>
          <NextLink href={`/dashboard/projects/${id}/text`}><Link _hover={{textDecoration: 'none'}}><Tab>Text</Tab></Link></NextLink>
          <NextLink href={`/dashboard/projects/${id}/text-images`}><Link _hover={{textDecoration: 'none'}}><Tab>Text + Images</Tab></Link></NextLink>
          <NextLink href={`/dashboard/projects/${id}/voices`}><Link _hover={{textDecoration: 'none'}}><Tab>Voices</Tab></Link></NextLink>
          <NextLink href={`/dashboard/projects/${id}/videos`}><Link _hover={{textDecoration: 'none'}}><Tab>Videos</Tab></Link></NextLink>
          <NextLink href={`/dashboard/projects/${id}/map`}><Link _hover={{textDecoration: 'none'}}><Tab>Map</Tab></Link></NextLink>
          <NextLink href={`/dashboard/projects/${id}/analytics`}><Link _hover={{textDecoration: 'none'}}><Tab>Analytics</Tab></Link></NextLink>
          <NextLink href={`/dashboard/projects/${id}/reports`}><Link _hover={{textDecoration: 'none'}}><Tab>Reports</Tab></Link></NextLink>
        </TabList>

        {children}
      </Tabs>
    </DashboardContainer>
  )
}

export default TabsLayout