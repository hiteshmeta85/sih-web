import DashboardContainer from "../_layout";
import {SimpleGrid} from "@chakra-ui/react";
import {MdOutlineAdd} from "react-icons/md";
import ProjectDetailsCard from "../../../components/Project/ProjectDetailsCard";
import CreateNewProjectCard from "../../../components/Project/CreateNewProjectCard";
import React, {useState} from "react";
import CustomLink from "../../../components/Link/CustomLink";
import axios from "axios";
import Error from "../../../components/Error/Error";

const Projects = ({allProjectsInfo}) => {

  const [allProjects, setAllProjects] = useState(allProjectsInfo)

  return (
    <DashboardContainer
      title={'Projects'}
      helperItems={
        <CustomLink href={'/dashboard/create-project'} text={'Create Project'} icon={<MdOutlineAdd/>}/>
      }
    >
      {allProjects ? <>
          <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={4}>
            <CreateNewProjectCard href={'/dashboard/create-project'}/>
            {allProjects.map((item, index) => {
              return (
                <ProjectDetailsCard key={index} label={item.projectName} date={item.creationTime} id={item.projectId} setAllProjects={setAllProjects} allProjects={allProjects}/>
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
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST_HOMEBREW}/projects`)
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