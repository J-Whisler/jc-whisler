import React from "react";
import styled from "styled-components";
import SectionHeader from "../subComponents/SectionHeader";
import SectionSubHeader from "../subComponents/SectionSubHeader";

import { SkillsData } from "../data/SkillsData";
import SkillCard from "../subComponents/SkillCard";

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SectionHeader>Skills</SectionHeader>
      <SectionSubHeader>What Tools Do I Use?</SectionSubHeader>
      <SkillsContent>
        {SkillsData.map((skill) => (
          <SkillCard id={skill.id} skill={skill} />
        ))}
      </SkillsContent>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgGrey};
  /* border: 2px solid blue; */
  padding: 5rem 2rem 2rem;
`;

const SkillsContent = styled.div`
  /* border: 2px solid blue; */
  margin-top: 5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export default Skills;
