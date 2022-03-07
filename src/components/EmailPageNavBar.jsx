import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Logo from "../subComponents/Logo";
import NavSocials from "../subComponents/NavSocials";

const EmailPageNavBar = () => {
  return (
    <EmailPageNavBarContainer>
      <HomeButton to="/">
        <FontAwesomeIcon icon={faArrowLeft} className="icon" /> Home
      </HomeButton>
      <Logo />
      <NavSocials />
    </EmailPageNavBarContainer>
  );
};

const EmailPageNavBarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgNavbar};
  padding: 1rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  position: sticky;
  top: 0;
  left: 0;

  z-index: 10;
`;

const HomeButton = styled(Link)`
  background: ${({ theme }) => theme.colors.bgGrey};
  width: fit-content;

  font-family: ${({ theme }) => theme.fonts.main};
  text-decoration: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0.5rem;

  padding: 0.5rem 1rem;

  transition: all 0.1s linear;
  @media  {
    font-size: 1.1rem;
  }
  )
  .icon {
  }
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border: 2px solid ${({ theme }) => theme.colors.accent};
  }
`;

export default EmailPageNavBar;
