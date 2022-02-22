import React from "react";
import styled from "styled-components";
import { ThemeConsumer } from "styled-components";
import SectionHeader from "../subComponents/SectionHeader";

const Projects = () => {
  return (
    <ProjectsContainer>
      <SectionHeader>Projects</SectionHeader>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgDark};
  clip-path: polygon(
    75% 10%,
    100% 0,
    100% 10%,
    100% 80%,
    100% 100%,
    20% 90%,
    0 100%,
    0 0
  );
  padding: 0.5rem 0;
  border: 2px solid red;
`;

export default Projects;
