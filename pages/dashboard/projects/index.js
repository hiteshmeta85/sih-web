import DashboardContainer from "../_layout";
import {Flex, Link, SimpleGrid} from "@chakra-ui/react";
import {MdOutlineAdd} from "react-icons/md";
import ProjectDetailsCard from "../../../components/Project/ProjectDetailsCard";
import CreateNewProjectCard from "../../../components/Project/CreateNewProjectCard";
import React from "react";
import CustomLink from "../../../components/Link/CustomLink";

const Projects = () => {
  return (
    <DashboardContainer title={'Projects'}>
      <Flex justifyContent={"end"}>
        <CustomLink href={'/dashboard/create-project'} text={'Create Project'} icon={<MdOutlineAdd/>}/>
      </Flex>
      <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={4} my={6}>
        <ProjectDetailsCard label={"Kedarnath Floods"} date={"16 June 2013"}/>
        <ProjectDetailsCard label={"Kerala Floods"} date={"19 August 2019"}/>
        <ProjectDetailsCard label={"Assam Floods"} date={"17 June 2022"}/>
        <CreateNewProjectCard href={'/dashboard/create-project'}/>
      </SimpleGrid>
    </DashboardContainer>
  );
};

export default Projects;