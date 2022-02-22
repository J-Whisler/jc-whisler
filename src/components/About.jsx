import React from "react";
import styled from "styled-components";
import SectionHeader from "../subComponents/SectionHeader";

const About = () => {
  return (
    <AboutContainer>
      <SectionHeader>About</SectionHeader>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgGrey};
  /* padding: 10rem 4rem 15rem; */

  border: 2px solid white;
`;

export default About;
