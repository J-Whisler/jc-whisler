import React, { useState } from "react";
import styled from "styled-components";
import BurgerMenuButton from "../subComponents/BurgerMenuButton";
import Logo from "../subComponents/Logo";
import NavMenu from "../subComponents/NavMenu";
import NavSocials from "../subComponents/NavSocials";

const NavBar = () => {
  const [burgerIsClicked, setBurgerIsClicked] = useState(false);

  return (
    <NavBarContainer>
      <BurgerMenuButton
        burgerIsClicked={burgerIsClicked}
        setBurgerIsClicked={setBurgerIsClicked}
      />
      <NavMenu
        burgerIsClicked={burgerIsClicked}
        setBurgerIsClicked={setBurgerIsClicked}
      />
      <Logo />
      <NavSocials />
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgNavbar};
  padding: 1rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  position: sticky;
  top: 0;
  left: 0;

  z-index: 10;
`;

export default NavBar;
