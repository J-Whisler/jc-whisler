import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import {
  faEnvelope,
  faFileAlt,
  faProjectDiagram,
  faTimes,
  faTools,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import {
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

import { motion } from "framer-motion";

const NavMenu = ({ setBurgerIsClicked }) => {
  const MenuAnimation = {
    hidden: {
      x: "-50vh",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
      },
    },
  };

  return (
    <NavMenuContainer variants={MenuAnimation} initial="hidden" animate="show">
      <NavMenuHeader>
        <FontAwesomeIcon
          icon={faTimes}
          className="icon"
          onClick={() => setBurgerIsClicked(false)}
        />
        <h4 className="navigation">Navigation</h4>
      </NavMenuHeader>
      <NavMenuLinks>
        <LinkS
          to="about"
          smooth="true"
          duration={1500}
          className="link"
          onClick={() => setBurgerIsClicked(false)}
        >
          <FontAwesomeIcon icon={faUser} className="icon" />
          About
        </LinkS>
        <LinkS
          to="projects"
          smooth="true"
          duration={1500}
          className="link"
          onClick={() => setBurgerIsClicked(false)}
        >
          <FontAwesomeIcon icon={faProjectDiagram} className="icon" />
          Projects
        </LinkS>
        <LinkS
          to="skills"
          smooth="true"
          duration={1500}
          className="link"
          onClick={() => setBurgerIsClicked(false)}
        >
          <FontAwesomeIcon icon={faTools} className="icon" />
          Skills
        </LinkS>
        <LinkR
          to="/email"
          className="link"
          onClick={() => setBurgerIsClicked(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          Contact
        </LinkR>
      </NavMenuLinks>
      <NavMenuDivider />
      <NavMenuSocials>
        <SocialLink
          href="https://www.instagram.com/jacob_whisler/"
          target="_blank"
          rel="noreferrer"
          className="socialLink"
        >
          <FontAwesomeIcon icon={faInstagramSquare} className="icon" />
          Instagram
        </SocialLink>
        <SocialLink
          href="https://github.com/J-Whisler"
          target="_blank"
          rel="noreferrer"
          className="socialLink"
        >
          <FontAwesomeIcon icon={faGithubSquare} className="icon" />
          Github
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/jacobwhisler/"
          target="_blank"
          rel="noreferrer"
          className="socialLink"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          LinkedIn
        </SocialLink>
        <SocialLink
          href="/"
          target="_blank"
          rel="noreferrer"
          className="socialLink"
        >
          <FontAwesomeIcon icon={faFileAlt} className="icon" />
          Resume
        </SocialLink>
      </NavMenuSocials>
    </NavMenuContainer>
  );
};

const NavMenuContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;

  height: 100vh;
  width: 40vw;

  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0 0.7rem 0.7rem 0;
  background: ${({ theme }) => theme.colors.bgDark};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  @media (max-width: 820px) {
    width: 60vw;
  }
  @media (max-width: 600px) {
    width: 80vw;
  }
`;

const NavMenuHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
  position: relative;
  .icon {
    font-size: 2.5rem;
    /* margin-right: 3rem; */
    color: ${({ theme }) => theme.colors.accent};
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover {
      opacity: 0.6;
      transform: rotate(0.75turn);
    }
  }
  .navigation {
    display: flex;
    font-size: 1.7rem;
    letter-spacing: 0.3rem;
    color: ${({ theme }) => theme.colors.secondary};
    /* text-decoration: underline overline; */
    border-top: 2px solid ${({ theme }) => theme.colors.secondary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
    padding: 0.3rem 0;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

const NavMenuLinks = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;

  padding: 0 2rem;
  .link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.7rem;

    margin-top: 2.5rem;

    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.6;
      color: ${({ theme }) => theme.colors.secondary};
      .icon {
        color: ${({ theme }) => theme.colors.text};
      }
    }
    .icon {
      color: ${({ theme }) => theme.colors.secondary};
      margin-right: 0.5rem;
      transition: all 0.3s ease-in-out;
    }
  }
`;

const NavMenuDivider = styled.span`
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 1rem;
  margin: 1.5rem 2rem 2.5rem;

  display: flex;
  align-items: center;
`;

const NavMenuSocials = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
  } */
`;

const SocialLink = styled.a`
  /* border: 2px solid ${({ theme }) => theme.colors.secondary}; */
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-top: 2px solid ${({ theme }) => theme.colors.bgDark};
  border-bottom: 2px solid ${({ theme }) => theme.colors.bgDark};
  border-left: 2px solid ${({ theme }) => theme.colors.bgDark};
  border-right: 2px solid ${({ theme }) => theme.colors.bgDark};
  background: ${({ theme }) => theme.colors.bgGrey};
  color: ${({ theme }) => theme.colors.text};

  text-decoration: none;
  font-size: 1.5rem;

  padding: 0.5rem 0;
  margin: 0 1rem 1rem;
  transition: border-top 0.1s ease-in-out, border-right 0.6s ease-in-out,
    border-bottom 1.1s ease-in-out, border-left 1.6s ease-in-out;
  .icon {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 1.8rem;
    transition: all 0.5s 0.3s ease-in-out;
  }
  &:hover {
    border-top: 2px solid ${({ theme }) => theme.colors.secondary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
    border-left: 2px solid ${({ theme }) => theme.colors.secondary};
    border-right: 2px solid ${({ theme }) => theme.colors.secondary};
    .icon {
      transform: rotate(1turn);
    }
  }
`;

export default NavMenu;
