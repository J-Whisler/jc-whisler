import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

import {
  faLinkedin,
  faInstagramSquare,
  faTwitterSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faShare } from "@fortawesome/free-solid-svg-icons";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeader>
        <h3 className="header">Connect with me!</h3>
      </FooterHeader>
      <FooterGrid>
        <GridLeft className="grid__left">
          <h6 className="left__header header">Social Links: </h6>
          <div className="left__linksContainer">
            <a href="" className="link" target="_blank">
              <FontAwesomeIcon icon={faInstagramSquare} className="icon" />{" "}
              Instagam
            </a>
            <a href="" className="link" target="_blank">
              <FontAwesomeIcon icon={faTwitterSquare} className="icon" />{" "}
              Twitter
            </a>
          </div>
        </GridLeft>
        <GridMiddle className="grid__middle">
          <h6 className="middle__header header">Professional Links: </h6>
          <div className="middle__linksContainer">
            <div className="linksContainer__pro">
              <a href="" target="_blank" className="link">
                <FontAwesomeIcon icon={faGithubSquare} className="icon" />{" "}
                Github
              </a>
              <a href="" target="_blank" className="link">
                <FontAwesomeIcon icon={faLinkedin} className="icon" /> LinkedIn
              </a>
            </div>
            <MiddleLinksDivider />
            <div className="linksContainer__resume">
              <a href="" target="_blank" className="link">
                <FontAwesomeIcon icon={faFileAlt} className="icon" /> Resume
              </a>
            </div>
          </div>
        </GridMiddle>
        <GridRight className="grid__right">
          <h6 className="right__header header">Or send me an email!: </h6>
          <div className="right__linksContainer">
            <LinkR to="/email" className="link">
              <FontAwesomeIcon icon={faShare} className="icon" /> Email
            </LinkR>
          </div>
        </GridRight>
      </FooterGrid>
      <FooterBottom>
        <p className="bottom__text">
          Design and Development by{" "}
          <LinkS className="link" to="about" smooth="true" duration={1500}>
            Jacob Whisler
          </LinkS>
          <span className="text__divider"></span>
          2022
        </p>
      </FooterBottom>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  clip-path: polygon(
    30% 3%,
    70% 1%,
    100% 0,
    100% 100%,
    70% 100%,
    30% 100%,
    0 100%,
    0 0
  );
  background: ${({ theme }) => theme.colors.bgDark};
  padding: 5rem 2rem 2rem;
`;

const FooterHeader = styled.div`
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.7rem;
  letter-spacing: 0.2rem;

  display: flex;
  justify-content: center;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  margin-top: 2rem;
  padding: 0 3rem;

  font-family: ${({ theme }) => theme.fonts.main};
  color: white;
  .header {
    font-size: 1.2rem;
  }
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .grid__left {
      justify-content: center;
    }
    .grid__right {
      justify-content: center;
    }
  }
`;

const GridLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .left__linksContainer {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    .link {
      color: ${({ theme }) => theme.colors.secondary};
      background: ${({ theme }) => theme.colors.bgGrey};
      border: 2px solid ${({ theme }) => theme.colors.bgGrey};
      border-radius: 1rem;
      width: fit-content;
      margin-bottom: 1rem;
      padding: 0.5rem 2rem;

      text-decoration: none;
      font-size: 1.5rem;

      transition: all 0.1s ease-in-out;
      .icon {
        filter: drop-shadow(0 0 5px ${({ theme }) => theme.colors.bgDark});
      }
      &:hover {
        background: ${({ theme }) => theme.colors.bgDark};
        box-shadow: 0 0 7px ${({ theme }) => theme.colors.bgGrey};
      }
    }
  }
`;

const GridMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .middle__header {
  }
  .middle__linksContainer {
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    .linksContainer__pro,
    .linksContainer__resume {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      .link {
        color: ${({ theme }) => theme.colors.secondary};
        background: ${({ theme }) => theme.colors.bgGrey};
        border: 2px solid ${({ theme }) => theme.colors.bgGrey};
        border-radius: 1rem;
        width: fit-content;
        margin-bottom: 1rem;
        padding: 0.5rem 2rem;

        text-decoration: none;
        font-size: 1.5rem;

        transition: all 0.1s ease-in-out;
        .icon {
          filter: drop-shadow(0 0 5px ${({ theme }) => theme.colors.bgDark});
        }
        &:hover {
          background: ${({ theme }) => theme.colors.bgDark};
          box-shadow: 0 0 7px ${({ theme }) => theme.colors.bgGrey};
        }
      }
    }
  }
`;

const MiddleLinksDivider = styled.span`
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 1rem;
`;

const GridRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 1000px) {
    align-items: flex-start;
    /* align-items: center; */
    margin-left: 0.5rem;
  }
  .right__linksContainer {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-left: 0.5rem;
    .link {
      color: ${({ theme }) => theme.colors.bgDark};
      background: ${({ theme }) => theme.colors.secondary};
      border: 2px solid ${({ theme }) => theme.colors.bgGrey};
      border-radius: 1rem;
      width: fit-content;
      margin-bottom: 1rem;
      padding: 0.5rem 2rem;

      text-decoration: none;
      font-size: 1.5rem;

      transition: all 0.1s ease-in-out;
      .icon {
        filter: drop-shadow(0 0 5px ${({ theme }) => theme.colors.accent});
      }
      &:hover {
        background: ${({ theme }) => theme.colors.bgDark};
        box-shadow: 0 0 7px ${({ theme }) => theme.colors.bgGrey};
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  .bottom__text {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    opacity: 0.7;
    .link {
      color: ${({ theme }) => theme.colors.secondary};
      cursor: pointer;
    }
    .text__divider {
      border: 2px solid ${({ theme }) => theme.colors.secondary};
      border-radius: 1rem;
      margin: 0.5rem;
    }
  }
`;

export default Footer;
