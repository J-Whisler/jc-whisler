import React from "react";
import styled from "styled-components";
import About from "../components/About";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <HomePageContainer>
      <NavBar />
      <Hero />
      <About />
    </HomePageContainer>
  );
};

const HomePageContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgGrey};
  height: fit-content;
`;

export default HomePage;
