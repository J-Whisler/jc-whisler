import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { faRoute } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroText>
        <h2 className="header__main">
          Hi! I'm <span className="main__jacob">Jacob</span>!
        </h2>
        <p className="header__sub">
          I love to create awesome websites just like this one!
        </p>
        <span className="header__cleveland">
          Cleveland, OH
          <FontAwesomeIcon icon={faRoute} className="icon" />
        </span>
      </HeroText>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgDark};

  padding: 10rem 5rem 12rem;

  clip-path: polygon(0 0, 100% 0, 100% 90%, 75% 93%, 30% 95%, 0 100%);
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
    display: block;

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
  }
  .header__cleveland {
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.4;
    letter-spacing: 0.1rem;
    text-shadow: 0 0 5px ${({ theme }) => theme.colors.secondary};
    .icon {
      margin-left: 0.5rem;
      font-size: 0.8rem;
    }
  }
`;

export default Hero;
