import React from "react";
import styled from "styled-components";
import SectionHeader from "../subComponents/SectionHeader";
import SectionSubHeader from "../subComponents/SectionSubHeader";

import { ProjectData } from "../data/ProjectData";
import ProjectCard from "../subComponents/ProjectCard";
import ProjectCard2 from "../subComponents/ProjectCard2";

const Projects = () => {
  return (
    <ProjectsContainer>
      <SectionHeader>Projects</SectionHeader>
      <SectionSubHeader>What Do I Do?</SectionSubHeader>
      <ProjectsContent>
        {ProjectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsContent>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgDark};
  clip-path: polygon(
    30% 0.2%,
    75% 0.5%,
    100% 0,
    100% 80%,
    100% 99%,
    78% 98%,
    0 100%,
    0 1%
  );
  padding: 5rem 2rem 2rem;
  /* padding-top: 5rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem; */
`;

const ProjectsContent = styled.div`
  /* border: 2px solid green; */
  margin-top: 5rem;
`;

export default Projects;
