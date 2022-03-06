import React, { useState, useEffect } from "react";
import styled from "styled-components";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);
  return (
    <HomePageContainer>
      {isLoading && <Loader />}
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
  overflow-x: hidden;
`;

export default HomePage;
