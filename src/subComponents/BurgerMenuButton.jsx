import React from "react";
import styled from "styled-components";

const BurgerMenuButton = () => {
  return (
    <BurgerMenuButtonContainer>
      <div className="left">
        <div className="burgerLine"></div>
        <div className="burgerLine"></div>
        <div className="burgerLine"></div>
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
      width: 2rem;
      padding: 0.15rem 0;
      margin: 0.15rem 0;
      background: ${({ theme }) => theme.colors.accent};
      border-radius: 1rem;
    }
  }
  .right {
    font-size: 1.2rem;
  }
`;

export default BurgerMenuButton;
