import React from "react";
import styled from "styled-components";
import SectionHeader from "../subComponents/SectionHeader";
import SectionSubHeader from "../subComponents/SectionSubHeader";

import CartoonMe from "../assets/cartoon-me.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <AboutContainer id="about">
      <span className="bracket-icon icon">{"{}"}</span>
      <SectionHeader>About</SectionHeader>
      <SectionSubHeader>Who Am I?</SectionSubHeader>
      <AboutContent>
        <div className="about-grid">
          <div className="grid-left">
            <p className="grid-left__paragraph">
              I am a 28 year old Front-End Web Developer and designer. I got my
              start in web development at the{" "}
              <a
                href="https://bootcamp.case.edu/coding/"
                className="p-link"
                target="_blank"
                rel="noreferrer"
              >
                Case Western Reserve Coding Bootcamp
              </a>{" "}
              at{" "}
              <a
                href="https://case.edu/"
                className="p-link"
                target="_blank"
                rel="noreferrer"
              >
                CWRU
              </a>{" "}
              in Cleveland, OH. I enjoy creating visually pleasing webpages that
              are easy to use with tools such as{" "}
              <a
                href="https://www.hostinger.com/tutorials/what-is-html"
                className="p-link"
                target="_blank"
                rel="noreferrer"
              >
                HTML
              </a>
              ,{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS"
                className="p-link"
                target="_blank"
                rel="noreferrer"
              >
                CSS
              </a>
              ,{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
                className="p-link"
                target="_blank"
                rel="noreferrer"
              >
                Javascript
              </a>
              , and{" "}
              <a
                href="https://reactjs.org/"
                className="p-link"
                target="_blank"
                rel="noreferrer"
              >
                React
              </a>
              . I also specialize in different animation tools like{" "}
              <a
                href="https://www.framer.com/motion/"
                className="p-link"
                target="_blank"
                rel="noreferrer"
              >
                Framer Motion
              </a>{" "}
              and{" "}
              <a
                href="https://greensock.com/gsap/"
                className="p-link"
                target="_blank"
                rel="noreferrer"
              >
                GSAP
              </a>{" "}
              to bring web pages to life.
            </p>
            <p className="grid-left__paragraph p-bottom">
              I am open to professional and freelance development opportunities,
              so if you would like to talk to me more about how I could help
              you, please feel free to contact me!
            </p>

            <div className="grid-left__button">
              <Link to="/email" className="link">
                Get In Touch...
              </Link>
              <span className="link-borderBottom"></span>
            </div>

            <span className="grid-left__subParagraph">
              Or keep scrolling to see more!
            </span>
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
  padding-top: 5rem;
  margin-bottom: 3.5rem;
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
        font-size: 1.3rem;
        font-family: ${({ theme }) => theme.fonts.main};
        color: ${({ theme }) => theme.colors.text};
        margin-bottom: 1rem;
        line-height: 1.6;
        &.p-bottom {
          opacity: 0.8;
          margin-bottom: 2.5rem;
        }
        .p-link {
          color: ${({ theme }) => theme.colors.secondary};
          text-decoration: none;
          transition: all 0.3s ease-in-out;
          z-index: 1000000;

          &:hover {
            opacity: 0.6;
          }
        }
      }
      .grid-left__button {
        display: flex;
        flex-direction: column;
        width: fit-content;

        margin-bottom: 2rem;

        cursor: pointer;

        .link {
          color: ${({ theme }) => theme.colors.secondary};
          text-decoration: none;
          font-family: ${({ theme }) => theme.fonts.main};
          font-size: 1.2rem;
          transition: all 0.3s linear;
          z-index: 1000000;
        }
        .link-borderBottom {
          border: 2px solid ${({ theme }) => theme.colors.accent};
          border-radius: 1rem;
          background: ${({ theme }) => theme.colors.accent};
          padding: 0.01rem 0;
          transition: all 0.3s linear;
        }
        &:hover {
          .link {
            color: ${({ theme }) => theme.colors.accent};
          }
          .link-borderBottom {
            border: 2px solid ${({ theme }) => theme.colors.secondary};
            background: ${({ theme }) => theme.colors.secondary};
          }
        }
      }
      .grid-left__subParagraph {
        color: ${({ theme }) => theme.colors.accent};
        font-family: ${({ theme }) => theme.fonts.main};
        letter-spacing: 0.2rem;
        opacity: 0.6;
      }
    }
    .grid-right {
      padding-left: 6rem;
      .grid-right__image {
        width: 14rem;
        height: 14rem;
        object-fit: cover;
        border: 4px solid ${({ theme }) => theme.colors.secondary};
        border-radius: 100%;
        /* clip-path: circle(100% at 100% 100%); */
        /* padding: 1.5rem 0.5rem; */
        @media (max-width: 820px) {
          width: 14rem;
          height: 14rem;
          margin-bottom: 2rem;
        }
      }
    }
  }
`;

export default About;
