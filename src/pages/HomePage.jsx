import React from "react";
import styled from "styled-components";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const HomePage = () => {
  return (
    <HomePageContainer>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </HomePageContainer>
  );
};

const HomePageContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgGrey};
  height: fit-content;
`;

export default HomePage;
