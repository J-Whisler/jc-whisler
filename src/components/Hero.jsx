import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroText>
        <h2 className="header__main">
          Hi! I'm <span className="main__jacob">Jacob</span>!
        </h2>
        <p className="header__sub">
          I am a Front-End Developer and I love to create awesome websites just
          like this one!
        </p>
        <span className="header__cleveland">Cleveland, OH</span>
      </HeroText>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgDark};
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 0,
    100% 70%,
    69% 83%,
    44% 83%,
    0 100%,
    0 0
  );

  padding: 10rem 4rem 15rem;
`;

const HeroText = styled.header`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  .header__main {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    .main__jacob {
      font-size: 3.5rem;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  .header__sub {
    font-size: 1.3rem;
    opacity: 0.8;
    margin-bottom: 0.5rem;
  }
  .header__cleveland {
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.3;
    letter-spacing: 0.1rem;
    text-shadow: 0 0 5px ${({ theme }) => theme.colors.secondary};
  }
`;

export default Hero;
