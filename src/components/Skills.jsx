import React from "react";
import styled from "styled-components";
import SectionHeader from "../subComponents/SectionHeader";
import SectionSubHeader from "../subComponents/SectionSubHeader";

const Skills = () => {
  return (
    <SkillsContainer>
      <SectionHeader>Skills</SectionHeader>
      <SectionSubHeader>What Tools Do I Use?</SectionSubHeader>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgGrey};
  border: 2px solid blue;
  padding-left: 2rem;
`;

export default Skills;
