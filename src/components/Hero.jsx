import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { faLocationPin, faCode } from "@fortawesome/free-solid-svg-icons";
import { keyframes } from "styled-components";

import ParticleComponent from "../subComponents/ParticleComponent";

const Hero = () => {
  return (
    <HeroContainer>
      <ParticleComponent theme="theme1" />
      <span className="code-icon icon">{"</>"}</span>
      <HeroText>
        <h2 className="header__main">
          Hi! I'm <span className="main__jacob">Jacob</span>!
        </h2>
        <p className="header__sub">
          I love to create awesome websites just like this one!
        </p>
        <span className="header__cleveland">
          Cleveland, OH
          <FontAwesomeIcon icon={faLocationPin} className="icon" />
        </span>
      </HeroText>
      <ScrollIcon>
        <div className="iconContainer">
          <div className="scrollIcon__dot dot1"></div>
          <div className="scrollIcon__dot dot2"></div>
          <div className="scrollIcon__dot dot3"></div>
        </div>
      </ScrollIcon>
    </HeroContainer>
  );
};

// keyframes
const dotAnimation = keyframes`
    0% {
        opacity: 0.5;
    }
    10% {
        opacity: 0.9;
        transform: scale(1.12);
        box-shadow: 0 0 3px ${({ theme }) => theme.colors.text};
    }
    90% {
        opacity: 0.5;
    }
    100% {
        opacity: 0.5;
    }

`;

const HeroContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgDark};

  padding: calc(5vw + 2rem) 7rem calc(7vw + 5rem);

  clip-path: polygon(0 0, 100% 0, 100% 90%, 75% 93%, 30% 95%, 0 100%);

  .code-icon {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 10rem;
    opacity: 0.2;
    font-family: ${({ theme }) => theme.fonts.main};
    text-shadow: 0 0 20px ${({ theme }) => theme.colors.secondary};

    position: absolute;
    top: 4rem;
    left: 2rem;

    transform: rotate(0.1turn);
  }
`;

const HeroText = styled.header`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  .header__main {
    font-size: calc(3vw + 2rem);
    margin-bottom: 0.2rem;
    letter-spacing: 0.1rem;
    text-shadow: 0 0 8px ${({ theme }) => theme.colors.bgDark};
    .main__jacob {
      font-size: calc(3vw + 3rem);
      color: ${({ theme }) => theme.colors.secondary};
      letter-spacing: 0.5rem;
    }
  }
  .header__sub {
    font-size: calc(0.5vw + 1.5rem);
    opacity: 0.8;
    margin-bottom: 1rem;
    /* max-width: 70%; */
    line-height: 1.6;
    text-shadow: 0 0 4px ${({ theme }) => theme.colors.bgDark};
  }
  .header__cleveland {
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.4;
    letter-spacing: 0.1rem;
    text-shadow: 0 0 5px ${({ theme }) => theme.colors.secondary};

    display: flex;

    .icon {
      margin: 0.25rem 0.3rem 0;
      font-size: 0.8rem;
    }
  }
`;

const ScrollIcon = styled.div`
  border-radius: 100%;
  padding: 0.2rem;
  margin: 0.25rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  top: 4rem;
  /* justify-content: center; */

  /* opacity: 0.5; */
  .iconContainer {
    border: 2px solid ${({ theme }) => theme.colors.text};
    border-radius: 2rem;
    padding: 0.3rem;

    .scrollIcon__dot {
      background: ${({ theme }) => theme.colors.text};
      padding: 0.2rem;
      border-radius: 100%;
    }

    .dot1 {
      margin-bottom: 0.4rem;
      animation-name: ${dotAnimation};
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
    .dot2 {
      margin-bottom: 0.4rem;
      animation-name: ${dotAnimation};
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-delay: 0.2s;
    }
    .dot3 {
      animation-name: ${dotAnimation};
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-delay: 0.3s;
    }
  }
`;

export default Hero;
