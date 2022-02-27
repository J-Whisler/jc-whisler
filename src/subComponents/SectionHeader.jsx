import React from "react";
import styled from "styled-components";

const SectionHeader = ({ children }) => {
  return (
    <SectionHeaderContainer>
      <span className="short-line"></span>
      <h2 className="text">{children}</h2>
      <span className="long-line"></span>
    </SectionHeaderContainer>
  );
};

const SectionHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  .short-line,
  .long-line {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 1rem;
  }
  .short-line {
    width: 4rem;
  }
  .long-line {
    width: 10rem;
  }

  .text {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.accent};
    margin: 0 0.7rem;
  }
`;

export default SectionHeader;
