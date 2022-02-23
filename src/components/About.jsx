import React from "react";
import styled from "styled-components";
import SectionHeader from "../subComponents/SectionHeader";
import SectionSubHeader from "../subComponents/SectionSubHeader";

import CartoonMe from "../assets/cartoon-me.png";

const About = () => {
  return (
    <AboutContainer>
      <span className="bracket-icon icon">{"{}"}</span>
      <SectionHeader>About</SectionHeader>
      <SectionSubHeader>Who Am I?</SectionSubHeader>
      <AboutContent>
        <div className="about-grid">
          <div className="grid-left">
            <p className="grid-left__paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              inventore odio quis dolor odit impedit itaque autem, nulla
              suscipit aut sint voluptatibus in alias, iure ipsa neque
              voluptates. Provident tenetur, corrupti ab ipsam officia corporis
              veritatis! Veritatis cum quisquam eos in exercitationem possimus
              ratione eveniet vero, culpa soluta, aperiam autem!
            </p>
            <p className="grid-left__paragraph">
              Expedita eos at quisquam? Adipisci vel illo rem iusto fuga ad
              distinctio debitis, laborum rerum odio alias in, laboriosam
              deserunt. Tenetur ratione recusandae omnis reiciendis impedit
              corporis facilis consequuntur asperiores rem odio molestiae
              quaerat dolorem, vel consequatur similique obcaecati iste fugit
              atque dicta eum maiores ipsa enim provident saepe. Non?
            </p>
          </div>
          <div className="grid-right">
            <img src={CartoonMe} className="grid-right__image" alt="Me" />
          </div>
        </div>
      </AboutContent>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgGrey};
  margin-top: 8rem;
  margin-bottom: 4rem;
  padding-left: 2rem;
  padding-right: 5rem;

  /* border: 2px solid white; */
  .bracket-icon {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 10rem;
    opacity: 0.2;
    font-family: ${({ theme }) => theme.fonts.main};
    text-shadow: 0 0 20px ${({ theme }) => theme.colors.secondary};

    position: absolute;
    top: 30rem;
    right: 4rem;

    transform: rotate(-0.1turn);
  }
`;

const AboutContent = styled.div`
  margin-top: 5rem;
  @media (max-width: 820px) {
    margin-top: 3rem;
  }
  .about-grid {
    display: grid;
    grid-template-columns: 3fr 2fr;
    @media (max-width: 820px) {
      display: flex;
      flex-direction: column-reverse;
    }
    .grid-left {
      .grid-left__paragraph {
        font-size: 1.5rem;
        font-family: ${({ theme }) => theme.fonts.main};
        color: ${({ theme }) => theme.colors.text};
      }
    }
    .grid-right {
      padding-left: 6rem;
      .grid-right__image {
        width: 100%;
        border: 4px solid ${({ theme }) => theme.colors.secondary};
        border-radius: 100%;
        /* clip-path: circle(100% at 100% 100%); */
        padding: 1.5rem 0.5rem;
        @media (max-width: 820px) {
          width: 60%;
          margin-bottom: 2rem;
        }
      }
    }
  }
`;

export default About;
