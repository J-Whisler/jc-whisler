import React from "react";
import styled from "styled-components";

const BurgerMenuButton = ({ setBurgerIsClicked }) => {
  return (
    <BurgerMenuButtonContainer onClick={() => setBurgerIsClicked(true)}>
      <div className="left">
        <div className="burgerLine line1"></div>
        <div className="burgerLine line2"></div>
        <div className="burgerLine line3"></div>
      </div>
      <p className="right">Navigation</p>
    </BurgerMenuButtonContainer>
  );
};

const BurgerMenuButtonContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};

  display: flex;
  align-items: center;

  cursor: pointer;

  .left {
    display: flex;
    flex-direction: column;

    margin-right: 0.5rem;
    .burgerLine {
      padding: 0.15rem 0;
      margin: 0.15rem 0;
      background: ${({ theme }) => theme.colors.accent};
      border-radius: 1rem;

      &.line1 {
        width: 1.6rem;
      }
      &.line2 {
        width: 1.2rem;
      }
      &.line3 {
        width: 2rem;
      }
    }
  }
  .right {
    font-size: 1.2rem;
    @media (max-width: 500px) {
      display: none;
    }
  }
`;

export default BurgerMenuButton;
