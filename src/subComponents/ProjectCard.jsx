import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ project }) => {
  const tools = project.toolsUsed;

  return (
    <ProjectCardContainer>
      <ProjectCardInnerContainer
        className={project.card === 1 ? "card1 card" : "card2 card"}
      >
        <ProjectImageWrapper>
          <img
            src={project.projectImage}
            alt={project.name}
            className="image"
          />
        </ProjectImageWrapper>
        <ProjectInfoWrapper>
          <InfoHeader>
            <div className="infoHeader__left">
              <h3 className="left__name">{project.name}</h3>
              <h6 className="left__subName">{project.subName}</h6>
            </div>
            <div className="infoHeader__right">
              <FontAwesomeIcon icon={project.icon} className="right__icon" />
            </div>
          </InfoHeader>
          <Divider>
            <span className="line"></span>
          </Divider>
          <InfoDescription>
            <p className="description">{project.description}</p>
            <div className="description__tools">
              <p className="tools__header">Tools Used: </p>
              <ul className="tools__toolList">
                {tools.map((tool) => (
                  <li className="toolList__listItem">
                    <a
                      href={tool.link}
                      className="listItem__link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="link__toolName">{tool.toolName}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </InfoDescription>
          <InfoButtons>
            <a
              className="demoButton cardButton"
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="demoButton__text cardButton__text">
                View Project
                <FontAwesomeIcon icon={faEye} className="cardButton__icon" />
              </h4>
            </a>
            <a
              className="repoButton cardButton"
              href={project.repoLink}
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="repoButton__text cardButton__text">
                View Github Repo
                <FontAwesomeIcon icon={faGithub} className="cardButton__icon" />
              </h4>
            </a>
          </InfoButtons>
        </ProjectInfoWrapper>
      </ProjectCardInnerContainer>
    </ProjectCardContainer>
  );
};

const ProjectCardContainer = styled.div`
  /* border: 2px solid red; */
  padding: 0 3rem;
  margin-bottom: 5rem;
  @media (max-width: 820px) {
    display: flex;
    justify-content: center;
    padding: 0 2rem;
  }
`;
const ProjectCardInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  &.card1 {
    flex-direction: row-reverse;
    .image {
      margin-left: 1rem;
    }
  }
  &.card2 {
    flex-direction: row;
    .image {
      margin-right: 1rem;
    }
  }
  @media (max-width: 820px) {
    /* width: fit-content; */
    &.card1 {
      flex-direction: column;
      .image {
        margin-left: 0;
      }
    }
    &.card2 {
      flex-direction: column;
    }
  }
  @media (max-width: 520px) {
    margin: 0 1rem;
  }
`;
const ProjectImageWrapper = styled.div`
  .image {
    width: calc(20vw + 10rem);
    height: calc(10vw + 8rem);
    border-radius: 0.5rem;
  }
`;
const ProjectInfoWrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.main};
  @media (max-width: 550px) {
    width: 100%;
  }
`;
const Divider = styled.div`
  display: flex;
  margin-top: 0.2rem;
  .line {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    width: 100%;
    border-radius: 1rem;
  }
`;
const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  .infoHeader__left {
    .left__name {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 1.5rem;
    }
    .left__subName {
      color: ${({ theme }) => theme.colors.accent};
      font-size: 1rem;
      letter-spacing: 0.02rem;
    }
  }
  .infoHeader__right {
    .right__icon {
      color: ${({ theme }) => theme.colors.secondary};
      margin-right: 1rem;
      margin-top: 0.5rem;
      font-size: 0.8rem;
      filter: drop-shadow(0 5px 6px ${({ theme }) => theme.colors.accent});
    }
  }
`;

const InfoDescription = styled.div`
  margin-top: 0.5rem;
  .description {
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
  }
  .description__tools {
    .tools__header {
      color: ${({ theme }) => theme.colors.accent};
      margin-bottom: 0.1rem;
    }
    .tools__toolList {
      display: flex;
      flex-wrap: wrap;
      line-height: 1.5;
      .toolList__listItem {
        color: ${({ theme }) => theme.colors.secondary};
        margin-left: 1.5rem;
        .listItem__link {
          color: ${({ theme }) => theme.colors.secondary};

          .link__toolName {
            color: ${({ theme }) => theme.colors.secondary};
          }
        }
      }
    }
  }
`;

const InfoButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  .cardButton {
    text-decoration: none;
    background: ${({ theme }) => theme.colors.secondary};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 0.2rem;
    transition: all 0.3s ease-in-out;
    .cardButton__text {
      font-size: 1.1rem;
      color: ${({ theme }) => theme.colors.bgDark};
      margin: 0.3rem 0.8rem;
      transition: all 0.3s ease-in-out;
      .cardButton__icon {
        margin-left: 0.3rem;
      }
      @media (max-width: 450px) {
        font-size: 1.05rem;
        margin: 0.2rem 0.4rem;
        .cardButton__icon {
          margin-left: 0.2rem;
        }
      }
    }
    &:hover {
      background: ${({ theme }) => theme.colors.bgDark};
      .cardButton__text {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
  .demoButton {
    margin-right: 0.5rem;
    margin-top: 0.5rem;
  }
  .repoButton {
    margin-top: 0.5rem;
  }
`;

export default ProjectCard;
