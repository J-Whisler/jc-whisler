import React from "react";
import styled from "styled-components";
import BurgerMenuButton from "../subComponents/BurgerMenuButton";
import Logo from "../subComponents/Logo";
import NavSocials from "../subComponents/NavSocials";

const NavBar = () => {
  return (
    <NavBarContainer>
      <BurgerMenuButton />
      <Logo />
      <NavSocials />
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgNavbar};
  color: black;
  padding: 1rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export default NavBar;
