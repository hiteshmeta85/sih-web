import DashboardContainer from "../_layout";
import {Flex, SimpleGrid, Text} from "@chakra-ui/react";
import {MdOutlineAdd} from "react-icons/md";
import ProjectDetailsCard from "../../../components/Project/ProjectDetailsCard";
import CreateNewProjectCard from "../../../components/Project/CreateNewProjectCard";
import React from "react";
import CustomLink from "../../../components/Link/CustomLink";
import axios from "axios";
import Error from "../../../components/Error/Error";

const Projects = ({allProjectsInfo}) => {
  return (
    <DashboardContainer title={'Projects'}>
      {allProjectsInfo ? <>
          <Flex justifyContent={"end"}>
            <CustomLink href={'/dashboard/create-project'} text={'Create Project'} icon={<MdOutlineAdd/>}/>
          </Flex>
          <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={4} my={6}>
            <CreateNewProjectCard href={'/dashboard/create-project'}/>
            {allProjectsInfo.map((item, index) => {
              return (
                <ProjectDetailsCard key={index} label={item.projectName} date={item.creationTime} id={item.projectId}/>
              )
            })}
          </SimpleGrid>
        </> :
        <Error/>
      }
    </DashboardContainer>
  );
};

export async function getServerSideProps() {

  let allProjectsInfo;

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/projects/`)
    if (res.data) {
      allProjectsInfo = res.data.data
    }
  } catch (e) {
    allProjectsInfo = null
  }

  return {
    props: {
      allProjectsInfo
    }
  }
}

export default Projects;