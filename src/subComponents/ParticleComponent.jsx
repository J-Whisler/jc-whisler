import React from "react";
import styled from "styled-components";

import Particles from "react-tsparticles";

import theme1 from "../config/theme-1.json";
import theme2 from "../config/theme-2.json";

const ParticleComponent = (props) => {
  //   const params = theme1;

  const getConfig = () => {
    if (props.theme === "theme1") {
      return theme1;
    } else if (props.theme === "theme2") {
      return theme2;
    }
  };
  return (
    <ParticleComponentContainer>
      <Particles
        style={{ position: "absolute", top: 0 }}
        params={getConfig()}
      />
    </ParticleComponentContainer>
  );
};

const ParticleComponentContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
  height: 100vh;
`;

export default ParticleComponent;
