import React from "react";
import styled from "styled-components";
import SectionHeader from "../subComponents/SectionHeader";

const Skills = () => {
  return (
    <SkillsContainer>
      <SectionHeader>Skills</SectionHeader>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgGrey};
  border: 2px solid blue;
`;

export default Skills;
