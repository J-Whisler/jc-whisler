import React from "react";
import styled from "styled-components";

const About = () => {
  return <AboutContainer>About</AboutContainer>;
};

const AboutContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgGrey};
`;

export default About;
