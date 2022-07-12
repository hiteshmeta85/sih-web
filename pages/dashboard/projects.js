import React from 'react';
import DashboardContainer from "./_layout";
import {Flex, Link, SimpleGrid} from "@chakra-ui/react";
import {MdOutlineAdd} from "react-icons/md";
import NextLink from "next/link";
import CreateProjectCard from "../../components/Projects/CreateProjectCard";
import ProjectCard from "../../components/Projects/ProjectCard";

const Projects = () => {
  return (
    <DashboardContainer title={'Projects'}>
      <Flex justifyContent={"end"}>
        <NextLink href={'#'} passHref>
          <Link
            display={"flex"}
            alignItems={"center"}
            gap={2}
            bg={"blue.500"}
            textColor={"white"}
            px={4}
            py={2}
            _hover={{textDecoration: "none", bg: "blue.600"}}
          >
            <MdOutlineAdd/>
            Project
          </Link>
        </NextLink>
      </Flex>
      <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={4} my={6}>
        <ProjectCard label={"Kedarnath Floods"} date={"16 June 2013"}/>
        <ProjectCard label={"Kerala Floods"} date={"19 August 2019"}/>
        <ProjectCard label={"Assam Floods"} date={"17 June 2022"}/>
        <CreateProjectCard/>
      </SimpleGrid>
    </DashboardContainer>
  );
};

export default Projects;