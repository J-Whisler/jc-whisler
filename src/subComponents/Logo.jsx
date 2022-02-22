import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <LogoContainer>
      <h2 className="logo">J.W.</h2>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  .logo {
    font-family: ${({ theme }) => theme.fonts.logo};
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: bolder;
    font-size: 4rem;

    border: 2px solid ${({ theme }) => theme.colors.secondary};
    padding: 0.5rem 1.2rem;
    border-radius: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Logo;
