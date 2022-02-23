import React from "react";
import styled from "styled-components";

const SectionSubHeader = ({ children }) => {
  return (
    <SectionSubHeaderContainer>
      <h6 className="subHeader">{children}</h6>
    </SectionSubHeaderContainer>
  );
};

const SectionSubHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.2rem 0 0.5rem;
  .subHeader {
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors.accent};
    font-size: calc(1vw + 0.6rem);
    letter-spacing: 0.5rem;
  }
`;

export default SectionSubHeader;
