import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import resume from "../assets/JacobWhislerResume.docx";

const NavSocials = () => {
  return (
    <NavSocialsContainer>
      <div className="links">
        <div className="links__container social">
          <a
            href="https://github.com/J-Whisler"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithubSquare} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/jacobwhisler/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </div>
        <div className="links__divider"></div>
        <div className="links__container resume">
          <a href={resume} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFileAlt} className="icon" />
          </a>
        </div>
      </div>
    </NavSocialsContainer>
  );
};

const NavSocialsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  .links {
    display: flex;
    align-items: center;
    .links__container {
      .icon {
        color: ${({ theme }) => theme.colors.accent};
        font-size: 2rem;
        cursor: pointer;
        margin: 0 0.5rem;

        transition: all 0.3s ease-in-out;
        &:hover {
          color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }
    .links__divider {
      height: 1.2rem;
      width: 0.15rem;
      background: ${({ theme }) => theme.colors.secondary};
      border-radius: 1rem;

      margin: 0 0.5rem;

      box-shadow: 1px 1px 2px ${({ theme }) => theme.colors.accent};
    }
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export default NavSocials;
